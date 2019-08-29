import { Component, OnDestroy, OnInit} from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import * as embed from 'vega-embed';
import * as vega from 'vega';
import { Subscription } from "rxjs";
import { AppState } from "src/app/core/store/reducers";
import { getThemeType } from "src/app/core/store/reducers/theme.reducer";
import {
  LayoutActionTypes,
  WindowResized,
  VegaWidgetResized
} from "src/app/layout/store/actions/layout.actions";
import { LineChartInitConfig } from "./line-chart-options";

const vegaOpts: any = {
  actions: false,
  renderType: 'svg',
  mode: 'vega'
  }


@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.scss"]
})

export class LineChartComponent implements OnInit, OnDestroy {
  view: any;
  theme: string;
 
  
  private themeSubscription: Subscription;
  private resizeSubscription: Subscription;  

  constructor(private store: Store<AppState>, private action$: Actions) {}
   


  ngOnInit(): void {
  
    console.log("embedding..");
    // this.view = embed.default('#vega',LineChartInitConfig,vegaOpts);
     vegaOpts.view = new vega.View(vega.parse(LineChartInitConfig))
     .renderer(vegaOpts.renderType)
     .resize()
     .initialize('#vega')
     .run();

    this.themeSubscription = this.store
    .pipe(select(getThemeType))
    .subscribe((theme: string) => {
      this.theme = theme === "Dark" ? "dark" : "default";
    });

  this.resizeSubscription = this.action$
    .pipe(ofType<VegaWidgetResized>(LayoutActionTypes.VegaWidgetResized))
    .subscribe(() => {
      this.resizeVegaChart();
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    this.resizeSubscription.unsubscribe();
  }

  resizeVegaChart(): void {

    

    if (vegaOpts.view) {
      setTimeout(() => {
        console.log("resizing Vega Chart..")
        vegaOpts.view = new vega.View(vega.parse(LineChartInitConfig))
        .renderer(vegaOpts.renderType)
        .resize()
        .run()
      }, 400);
    }
  }
}
