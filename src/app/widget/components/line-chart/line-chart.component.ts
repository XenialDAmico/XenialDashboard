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
  VegaWidgetResized
} from "src/app/layout/store/actions/layout.actions";
import { LineChartInitConfig } from "./line-chart-options";
import { MainContentComponent } from "src/app/layout/components/main-content/main-content.component"



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

  constructor(private store: Store<AppState>, private action$: Actions, private vegaConfigService: VegaConfigsService, private thisGridster: MainContentComponent) {}
   


  ngOnInit(): void {
    var width = this.thisGridster.vegaLength;
    width = width - 50;
    //var width = this.vegaConfigService.getChartWidth(".gridster-item-content");
    console.log("Width is resized to " + width)
    var length = this.vegaConfigService.getChartHeight(".gridster-item-content");
    length = length - 60;
    console.log("Length is resized to " + length)
    console.log("embedding..");
     //this.view = embed.default('#vega',LineChartInitConfig,vegaOpts);
     this.view = this.vegaConfigService.vegaInit("vega",LineChartInitConfig,width,length); 


    this.themeSubscription = this.store
    .pipe(select(getThemeType))
    .subscribe((theme: string) => {
      this.theme = theme === "Dark" ? "dark" : "default";
    });

  this.resizeSubscription = this.action$
    .pipe(ofType<VegaWidgetResized>(LayoutActionTypes.VegaWidgetResized))
    .subscribe(() => {
      var width = this.thisGridster.vegaWidth;
      width = width - 50;
      console.log("Width is resized to " + width)
      var length = this.thisGridster.vegaLength;
      length = length - 60;
      console.log("Length is resized to " + length)
      this.resizeVegaChart(width,length)});
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    this.resizeSubscription.unsubscribe();
  }

  resizeVegaChart(width,length): void {
    if (this.view) {
      setTimeout(() => {
        console.log("resizing Vega Chart..")
        this.vegaConfigService.vegaInit("vega",LineChartInitConfig,width,length); 
        
      }, 400);
    }
  }
}
