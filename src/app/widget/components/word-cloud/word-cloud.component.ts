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
  WordCloudWidgetResized
} from "src/app/layout/store/actions/layout.actions";
import { WordCloudInitConfig } from "./word-cloud-options";
import { MainContentComponent } from "src/app/layout/components/main-content/main-content.component"



@Component({
  selector: "word-cloud-chart",
  templateUrl: "./word-cloud.component.html",
  styleUrls: ["./word-cloud.component.scss"]
})

export class WordCloudComponent implements OnInit, OnDestroy {
  view: any;
  theme: string;
 
  
  private themeSubscription: Subscription;
  private resizeSubscription: Subscription;  

  constructor(private store: Store<AppState>, private action$: Actions, private vegaConfigService: VegaConfigsService, private thisGridster: MainContentComponent) {}
   


  ngOnInit(): void {
    var width = this.thisGridster.wordCloudWidth;
    width = width;
    //var width = this.vegaConfigService.getChartWidth(".gridster-item-content");
    console.log("Word Cloud Width is resized to " + width)
    var height = this.thisGridster.wordCloudHeight;

    height = height;
    console.log("Word Cloud Height is resized to " + height)
     //this.view = embed.default('#vega',LineChartInitConfig,vegaOpts);
     this.view = this.vegaConfigService.vegaInit("word-cloud",WordCloudInitConfig,width,height); 


    this.themeSubscription = this.store
    .pipe(select(getThemeType))
    .subscribe((theme: string) => {
      this.theme = theme === "Dark" ? "dark" : "default";
    });

  this.resizeSubscription = this.action$
    .pipe(ofType<WordCloudWidgetResized>(LayoutActionTypes.WordCloudWidgetResized))
    .subscribe(() => {
      var width = this.thisGridster.wordCloudWidth;
      width = width - 30 ;
      console.log("Word Cloud Width is resized to " + width)
      var height = this.thisGridster.wordCloudHeight;
      height = height - 70;
      console.log("Word Cloud Height is resized to " + height)
      this.resizeVegaChart(width,height)});
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    this.resizeSubscription.unsubscribe();
  }

  resizeVegaChart(width,height): void {
    if (this.view) {
      setTimeout(() => {
        console.log("resizing Word Cloud Chart..")
        this.vegaConfigService.vegaInit("word-cloud",WordCloudInitConfig,width,height); 
        
      }, 400);
    }
  }
}
