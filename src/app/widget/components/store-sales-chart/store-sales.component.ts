import { Component, OnDestroy, OnInit} from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { VegaConfigsService } from "src/app/core/services/vega.service"
import { Subscription } from "rxjs";
import { AppState } from "src/app/core/store/reducers";
import { getThemeType } from "src/app/core/store/reducers/theme.reducer";
import {
  LayoutActionTypes,
  WindowResized,
  StoreSalesWidgetResized
} from "src/app/layout/store/actions/layout.actions";
import { StoreSalesChartInitConfig } from "./store-sales-chart-options";
import { MainContentComponent } from "src/app/layout/components/main-content/main-content.component"



@Component({
  selector: "store-sales-chart",
  templateUrl: "./store-sales.component.html",
  styleUrls: ["./store-sales.component.scss"]
})

export class StoreSalesChartComponent implements OnInit, OnDestroy {
  view: any;
  theme: string;
 
  
  private themeSubscription: Subscription;
  private resizeSubscription: Subscription;  

  constructor(private store: Store<AppState>, private action$: Actions, private vegaConfigService: VegaConfigsService, private thisGridster: MainContentComponent) {}
   


  ngOnInit(): void {
    var width = this.thisGridster.storeSalesWidth;
    width = width - 30;
    console.log("Width is resized to " + width)
    var height = this.thisGridster.storeSalesHeight;
    height = height - 40;
    console.log("Length is resized to " + length)
    console.log("embedding..");
     //this.view = embed.default('#vega',LineChartInitConfig,vegaOpts);
     this.view = this.vegaConfigService.vegaInit("store-sales",StoreSalesChartInitConfig,width,length); 


    this.themeSubscription = this.store
    .pipe(select(getThemeType))
    .subscribe((theme: string) => {
      this.theme = theme === "Dark" ? "dark" : "default";
    });

  this.resizeSubscription = this.action$
    .pipe(ofType<StoreSalesWidgetResized>(LayoutActionTypes.StoreSalesWidgetResized))
    .subscribe(() => {
      var width = this.thisGridster.storeSalesWidth;
      width = width - 50;
      console.log("Width is resized to " + width)
      var height = this.thisGridster.storeSalesHeight;
      height = height - 60;
      console.log("Length is resized to " + height)
      this.resizeVegaChart(width,height)});
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    this.resizeSubscription.unsubscribe();
  }

  resizeVegaChart(width,length): void {
    if (this.view) {
      setTimeout(() => {
        console.log("resizing Store Sales Vega Chart..")
        this.vegaConfigService.vegaInit("store-sales",StoreSalesChartInitConfig,width,length); 
        
      }, 400);
    }
  }
}
