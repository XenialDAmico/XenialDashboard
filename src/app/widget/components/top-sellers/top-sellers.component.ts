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
import { ProductSalesModel } from "../../models/topsellers.model";
import { ProductSalesData } from "./top-sellers-data";
import { tsColumnDefs } from "./top-sellers-options";

@Component({
  selector: "app-top-sellers",
  templateUrl: "./top-sellers.component.html",
  styleUrls: ["./top-sellers.component.scss"]
})
export class TopSellersComponent implements OnInit, OnDestroy {
  theme: string;

  columnDefs: any = tsColumnDefs;
  rowData: ProductSalesModel[]; 
  
  private gridApi: any;
  private gridColumnApi: any;
  

  pagination: false;


  private themeSubscription: Subscription;
  private resizeSubscription: Subscription;
  
  

  constructor(private store: Store<AppState>, private action$: Actions) {
    this.rowData = ProductSalesData;


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
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.rowData = ProductSalesData;

  }

  
}
