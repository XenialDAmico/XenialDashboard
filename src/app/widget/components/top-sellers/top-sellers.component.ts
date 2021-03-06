import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AppState } from "src/app/core/store/reducers";
import { getThemeType } from "src/app/core/store/reducers/theme.reducer";
import {
  LayoutActionTypes,
  WindowResized,
  TopSellersWidgetResized
} from "src/app/layout/store/actions/layout.actions";
import { ProductSalesModel } from "../../models/topsellers.model";
import { ProductSalesData } from "./top-sellers-data";


@Component({
  selector: "app-top-sellers",
  templateUrl: "./top-sellers.component.html",
  styleUrls: ["./top-sellers.component.scss"]
})
export class TopSellersComponent implements OnInit, OnDestroy {
  theme: string;

  rowData: ProductSalesModel[]; 
  tsWidth: number;
  tsHeight: number;
  
  private gridApi: any;
  private gridColumnApi: any;

  columnDefs: any =  [
    {headerName: 'Name', field: 'name', sortable: true},
    {headerName: 'Qty', field: 'qty',  sortable: true },
    {headerName: 'Sales $', field: 'sales',  sortable: true}
  ];
  
  

  pagination: false;


  private themeSubscription: Subscription;
  private resizeSubscription: Subscription;
  private panelResizeSubscription: Subscription;

  

  constructor(private store: Store<AppState>, private action$: Actions) {
    
    this.rowData = ProductSalesData;

  }

  ngOnInit(): void {

    

    this.themeSubscription = this.store
      .pipe(select(getThemeType))
      .subscribe((theme: string) => {
        this.theme = theme === "Dark" ? "dark" : "default";
      });
    this.panelResizeSubscription = this.action$
      .pipe(ofType<TopSellersWidgetResized>(LayoutActionTypes.TopSellersWidgetResized))
      .subscribe((i) => {
        console.log('Window Resized')
        this.tsWidth=i.tsWidth;
        this.tsHeight=i.tsHeight;
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
    console.log("Ag-Grid Ready!")
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.rowData = ProductSalesData;

    params.api.sizeColumnsToFit();
    window.addEventListener("resize", function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      });
    });

  }

  onGridSizeChanged(params) {
    var gridWidth = this.tsWidth;
    console.log("Grid width is now " + gridWidth)
    var columnsToShow = [];
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
    params.columnApi.setColumnsVisible(columnsToShow, true);
    params.columnApi.setColumnsVisible(columnsToHide, false);
    params.api.sizeColumnsToFit();
  }

  
}
