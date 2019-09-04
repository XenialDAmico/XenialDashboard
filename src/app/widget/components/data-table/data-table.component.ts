import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AppState } from "src/app/core/store/reducers";
import { getThemeType } from "src/app/core/store/reducers/theme.reducer";
import {
  LayoutActionTypes,
  TableWidgetResized,
  WindowResized
} from "src/app/layout/store/actions/layout.actions";
import { StorePerformanceModel } from "../../models/store-performance.model";
import { StorePerformanceData } from "./data-table-data";
import { MainContentComponent } from "src/app/layout/components/main-content/main-content.component"


@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"]
})
export class DataTableComponent implements OnInit, OnDestroy {
  theme: string;

  rowData: StorePerformanceModel[]; 
  
  private gridApi: any;
  private gridColumnApi: any;

  columnDefs: any =  [
    {headerName: 'Name', field: 'store_name', sortable: true},
    {headerName: '#', field: 'store_number',  sortable: true },
    {headerName: 'Sales $', field: 'net_sales',  sortable: true},
    {headerName: 'Diff', field: 'difference',  sortable: true}
    
    
  ];
  
  

  pagination: false;


  private themeSubscription: Subscription;
  private resizeSubscription: Subscription;

  

  constructor(private store: Store<AppState>, private action$: Actions,private thisGridster: MainContentComponent) {
    
    this.rowData = StorePerformanceData;

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

  onGridReady(params) {
    console.log("Performance Widget Ready!")
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.rowData = StorePerformanceData;

    params.api.sizeColumnsToFit();
    window.addEventListener("resize", function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      });
    });

  }
  onGridSizeChanged(params) {
    var gridWidth = this.thisGridster.topSellersWidth
    console.log("Grid width is now " + gridWidth)
    var columnsToShow = [];
    //Cant this to work yet. But ideally, the 'Qty' column would drop when widget is resized smaller.
    var columnsToHide = [''];
    var totalColsWidth = gridWidth;
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
    params.columnApi.setColumnsVisible(columnsToShow, true);
    params.columnApi.setColumnsVisible(columnsToHide, false);
    params.api.sizeColumnsToFit();
  }

  
}
