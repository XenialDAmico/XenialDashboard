import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AppState } from "src/app/core/store/reducers";
import { getThemeType } from "src/app/core/store/reducers/theme.reducer";
import {
  LayoutActionTypes,
  WindowResized,
  SDRWidgetResized
} from "src/app/layout/store/actions/layout.actions";
import { SDRModel } from "../../models/stats-sdr.model";
import { SDRData } from "./sdr-table-data";
import {CurrencyFormatterComponent} from "src/app/widget/components/sdr-table/currency.component"

@Component({
  selector: "sdr-data-table",
  templateUrl: "./sdr-table.component.html",
  styleUrls: ["./sdr-table.component.scss"]
})
export class SDRComponent implements OnInit, OnDestroy {
  theme: string;

  rowData: SDRModel[]; 
  
  private gridApi: any;
  private gridColumnApi: any;


  columnDefs: any =  [
    //{headerName: 'Store #', field: 'store_number', sortable: 'true', hide: 'true' },
    //{headerName: 'Date', field: 'date', sortable: false},
    {headerName: 'Data Key', field: 'key', sortable: false, pinned: 'left'},
    {headerName: 'Quantity', field: 'qty',  sortable: false},
    {headerName: 'Amount', 
      field: 'amount',  
      sortable: false,
      
    }
  ];
  frameworkComponents: any =  {
    currencyRenderer: CurrencyFormatterComponent
  };



  
  pagination: false;
   SDRWidth: any;
   SDRHeight: any;

  private themeSubscription: Subscription;
  private resizeSubscription: Subscription;
  private panelsizeSubscription: Subscription;


  

  constructor(private store: Store<AppState>, private action$: Actions) {
    

  }

  ngOnInit(): void {


    this.panelsizeSubscription = this.action$
    .pipe(ofType<SDRWidgetResized>(LayoutActionTypes.SDRWidgetResized))
    .subscribe((i) => {
      console.log('SDR Widget Resized to ' + i.SDRWidth + ' pixels.');
      this.SDRWidth=i.SDRWidth;
      this.SDRHeight=i.SDRHeight;
      
    });

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
    console.log("SDR Widget Ready!")
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.rowData = SDRData;

    params.api.sizeColumnsToFit();
    window.addEventListener("resize", function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      });
    });

  }

  
  onGridSizeChanged(params) {
    
    console.log("SDR Grid width is now " + this.SDRWidth)
    var columnsToShow = [''];
    //Cant this to work yet. But ideally, the 'Qty' column would drop when widget is resized smaller.
    var columnsToHide = [''];
    var totalColsWidth = 0;
    var allColumns = params.columnApi.getAllColumns();
    for (var i = 0; i < allColumns.length; i++) {
      let column = allColumns[i];
      console.log("Min Column Width:  "  + column.getMinWidth());
      totalColsWidth += column.getMinWidth();
      if (totalColsWidth > this.SDRWidth) {
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
