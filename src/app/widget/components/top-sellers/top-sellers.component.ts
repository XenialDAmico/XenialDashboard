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
import { ProductSales } from "./top-sellers-data";
import { columnDefs } from "./top-sellers-options";

@Component({
  selector: "app-top-sellers",
  templateUrl: "./top-sellers.component.html",
  styleUrls: ["./top-sellers.component.scss"]
})
export class TopSellersComponent implements OnInit, OnDestroy {
  theme: string;
  rowData: ProductSalesModel[] = ProductSales;
  columnDefs: any = columnDefs;
  pagination: false;


  private themeSubscription: Subscription;
  private resizeSubscription: Subscription;
  
  

  constructor(private store: Store<AppState>, private action$: Actions) {}

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

  

  
}
