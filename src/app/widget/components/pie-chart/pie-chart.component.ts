import { Component, OnDestroy, OnInit } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { VegaConfigsService } from "src/app/core/services/vega.service"
import { Subscription } from "rxjs";
import { AppState } from "src/app/core/store/reducers";
import { getThemeType } from "src/app/core/store/reducers/theme.reducer";
import {
  LayoutActionTypes,
  CategorySalesWidgetResized,
  WindowResized,
  StoreSalesWidgetResized
} from "src/app/layout/store/actions/layout.actions";
import { PieChartInitConfig } from "./pie-chart-options";
import { MainContentComponent } from "src/app/layout/components/main-content/main-content.component"


@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.scss"]
})
export class PieChartComponent implements OnInit, OnDestroy {
  view: any;
  theme: string;


  private themeSubscription: Subscription;
  private resizeSubscription: Subscription;

  constructor(private store: Store<AppState>, private action$: Actions, private vegaConfigService: VegaConfigsService, private thisGridster: MainContentComponent) {}
  
  ngOnInit(): void {
    var width = this.thisGridster.catSalesWidth;
    width = width - 200;
    //var width = this.vegaConfigService.getChartWidth(".gridster-item-content");
    console.log("Pie Chart Width is resized to " + width);
    var height = this.thisGridster.catSalesHeight;
    height = height - 200;
    console.log("Pie Chart Length is resized to " + height);
     //this.view = embed.default('#vega',LineChartInitConfig,vegaOpts);
     this.view = this.vegaConfigService.vegaInit("pie",PieChartInitConfig,width,height); 


    this.themeSubscription = this.store
      .pipe(select(getThemeType))
      .subscribe((theme: string) => {
        this.theme = theme === "Dark" ? "dark" : "default";
      });

    this.resizeSubscription = this.action$
    .pipe(ofType<CategorySalesWidgetResized>(LayoutActionTypes.CategorySalesWidgetResized))
    .subscribe(() => {
      var width = this.thisGridster.catSalesWidth;
      width = width - 100 ;
      console.log("Pie Chart Width is resized to " + width);
      var height = this.thisGridster.catSalesHeight;
      height = height - 100;
      console.log("Pie Chart Height is resized to " + height);
      this.resizeVegaChart(width,height)});

    this.resizeSubscription = this.action$
      .pipe(ofType<WindowResized>(LayoutActionTypes.WindowResized))
      .subscribe(() => {
        this.resizeVegaChart(width,height);
      });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    this.resizeSubscription.unsubscribe();
  }
  resizeVegaChart(width,height): void {
    if (this.view) {
      setTimeout(() => {
        console.log("resizing Vega Pie Chart..")
        this.vegaConfigService.vegaInit("pie",PieChartInitConfig,width,height); 
        
      }, 400);
    }
  }

}
