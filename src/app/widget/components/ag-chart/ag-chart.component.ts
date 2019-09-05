import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AppState } from "src/app/core/store/reducers";
import { getThemeType } from "src/app/core/store/reducers/theme.reducer";
import {
  LayoutActionTypes,
  WindowResized
} from "src/app/layout/store/actions/layout.actions";
import { SalesByDateModel } from "../../models/salesbydate.model";
import { SalesByDateData } from "./ag-chart-data";
import { MainContentComponent } from "src/app/layout/components/main-content/main-content.component"
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: "app-ag-chart",
  templateUrl: "./ag-chart.component.html",
  styleUrls: ["./ag-chart.component.scss"]
})
export class agChartComponent implements OnInit, OnDestroy {
  theme: string;

  rowData: SalesByDateModel[]; 
  
  private gridApi: any;
  private gridColumnApi: any;
  private chartRef: any;

  columnDefs: any =  [
    {headerName: 'Date', field: 'date', chartDataType: "categort", sortable: true},
    {headerName: 'Net Sales', field: 'netSales_today',chartDataType: "series",  sortable: true },
    {headerName: 'SDLW', field: 'netSales_lastWeek',chartDataType: "series",  sortable: true}
  ];


  pagination: false;


  private themeSubscription: Subscription;
  private resizeSubscription: Subscription;

  constructor(private store: Store<AppState>, private action$: Actions, private thisGridster: MainContentComponent) {

  }

  ngOnInit(): void {
    


    this.themeSubscription = this.store
      .pipe(select(getThemeType))
      .subscribe((theme: string) => {
        this.theme = theme === "Dark" ? "dark" : "default";
      });

    this.resizeSubscription = this.action$
      .pipe(ofType<WindowResized>(LayoutActionTypes.WindowResized))
      .subscribe(() => {
        console.log('Window Resized')
      });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    this.resizeSubscription.unsubscribe();
  }

//Need to get the Chart piece working, before displaying it automatically by Default.
//   onFirstDataRendered(params) {
//     let chartRangeParams = {
//         cellRange: {
//             columns: ['date', 'netSales_today', 'netSales_lastWeek']
//         },
//         chartType: 'groupedColumn',
//         chartContainer: document.querySelector('#agChart'),
//         suppressChartRanges: true,
//         aggFunc: 'sum'
//     };

//     //this.chartRef = params.api.chartRange(chartRangeParams);
// }

  onGridReady(params) {
    console.log("Ag-Grid Ready!")
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.rowData = SalesByDateData;
    console.log("Chart Ref:" + this.chartRef);
    params.api.sizeColumnsToFit();
    window.addEventListener("resize", function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      });
    });
    //this.createChart('line');
  }

  onGridSizeChanged(params) {
    var gridWidth = this.thisGridster.agChartWidth
    console.log("Grid width is now " + gridWidth)
    var columnsToShow = [''];
    //Cant this to work yet. But ideally, the 'Qty' column would drop when widget is resized smaller.
    var columnsToHide = [''];
    var totalColsWidth = 0;
    var allColumns = params.columnApi.getAllColumns();
    for (var i = 0; i < allColumns.length; i++) {
      let column = allColumns[i];
      console.log("Min Column Width:  "  + column.getMinWidth());
      totalColsWidth += column.getMinWidth();
      if (totalColsWidth > gridWidth) {
        console.log("width of all columns is "  + totalColsWidth);
        columnsToHide.push(column.colId);
      } else {
        columnsToShow.push(column.colId);
      }
    }
    //params.columnApi.setColumnsVisible(columnsToShow, true);
    //params.columnApi.setColumnsVisible(columnsToHide, false);
    params.api.sizeColumnsToFit();
  }
   
  
  createChart(type) {

    // destroy existing chart
    if (this.chartRef) {
        this.chartRef.destroyChart();
    }

    let params = {
        cellRange: {
            columns: ['date', 'netSales_today', 'netSales_lastWeek']
        },
        chartContainer: document.querySelector('#agChart'),
        chartType: type,
        suppressChartRanges: true,
        aggFunc: 'sum'
    };
    console.log(params.cellRange);
    this.chartRef = this.gridApi.chartRange(params);
}
  chartLine() {
    var cellRange = {
      columns: ["date", "netSales_today", "netSales_today"]
    };
    var chartRangeParams = {
      cellRange: cellRange,
      chartContainer: document.querySelector('#agChart'),
      chartType: "line"
    };
    this.gridApi.chartRange(chartRangeParams);
  }

  chartColumn() {
    var params = {
      cellRange: {
        columns: ["date", "netSales_today", "netSales_today"]
      },
      chartType: "column",
      processChartOptions: function(params) {
        let opts = params.options;
        opts.title = { text: "Sales by Date" };
        opts.xAxis.labelRotation = 30;
        opts.seriesDefaults.tooltipRenderer = function(params) {
          let titleStyle = params.color ? ' style="color: white; background-color:' + params.color + '"' : "";
          let title = params.title ? '<div class="title"' + titleStyle + ">" + params.title + "</div>" : "";
          let value = params.datum[params.yField].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
          return title + '<div class="content" style="text-align: center">' + value + "</div>";
        };
        return opts;
      }
    };
    this.gridApi.chartRange(params);
  }
  
}
