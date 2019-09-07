import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from "@angular/core";
import { select, Store } from "@ngrx/store";
import {
  GridsterConfig,
  GridsterItemComponentInterface
} from "angular-gridster2";
import { Subscription } from "rxjs";
import { AppState } from "src/app/core/store/reducers";
import { getThemeType } from "src/app/core/store/reducers/theme.reducer";
import { WidgetType } from "src/app/widget/models/widget.model";
import { WidgetItem } from "../../models/widget.model";
import {
  TableWidgetResized,
  WindowResized,
  VegaWidgetResized,
  SDRWidgetResized
} from "../../store/actions/layout.actions";

import { gridConfig } from "./grid-config";
import { mainContentWidgets } from "./main-content-data";

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class MainContentComponent implements OnInit, OnDestroy {
  widgets: WidgetItem[] = mainContentWidgets;
  gridStr: [];
  theme: string;
  //Create a function to retrieve this.
  vegaLength: number;
  vegaWidth: number;
  topSellersHeight: number;
  topSellersWidth: number;
  storePerformanceWidth: number;
  agChartWidth: number;
  SDRWidth: number;


  private themeSubscription: Subscription;

  constructor(private store: Store<AppState>) {}
  addItem(): void {
    this.widgets.push({widgetId:7,widgetName:"New",x:1,y:1, rows:2, cols:2});
  }
  deleteItem(id: string): void {
    const item = this.widgets.find(d => d.id === id);
    this.widgets.splice(this.widgets.indexOf(item), 1);
    if (this.options.api) {
      this.options.compactType = "compactLeft&Up";
      this.options.api.optionsChanged();
    }
  }
  compact(): void {
    if (this.options.api) {
      this.options.compactType = "compactLeft&Up";
      this.options.api.optionsChanged();
      this.options.compactType = "none";
      this.options.api.optionsChanged();
    }
  }

  getConfig(): void {
    //this.options.
  } 

  ngOnInit(): void {
    this.themeSubscription = this.store
      .pipe(select(getThemeType))
      .subscribe((theme: string) => {
        this.theme = theme === "Dark" ? "dark" : "light";
      });
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  private readonly onItemChange = (
    item: WidgetItem,
    itemComponent: GridsterItemComponentInterface
  ): void => {
    console.info("onItemChange", item, itemComponent);
  };



  private readonly onItemResize = (
    item: WidgetItem,
    itemComponent: GridsterItemComponentInterface
  ): void => {
    console.info("onItemResize", item, itemComponent);
    if (item.widgetId === WidgetType.TopSellers) {
      console.log("Width of Top Sellers is " + itemComponent.width)
      this.topSellersWidth=itemComponent.width;
      this.topSellersHeight=itemComponent.height;
      this.store.dispatch(new TableWidgetResized(itemComponent.width,itemComponent.height));
    }
    if (item.widgetId === WidgetType.agGridChart) {
      console.log("Width of AG Chart is " + itemComponent.width)
      this.agChartWidth=itemComponent.width;
      //TODO: create new store item
      this.store.dispatch(new TableWidgetResized(itemComponent.width,itemComponent.height));
    }
    if (item.widgetId === WidgetType.DataTable) {
      console.log("Width of AG Grid is " + itemComponent.width)
      this.storePerformanceWidth=itemComponent.width;
      this.store.dispatch(new TableWidgetResized(itemComponent.width,itemComponent.height));
    }
    if (item.widgetId === WidgetType.SDR) {
      this.SDRWidth = itemComponent.width;
      console.log("Width of SDR is " + this.SDRWidth)
      this.store.dispatch(new SDRWidgetResized(itemComponent.width,itemComponent.height));
    }
    if (item.widgetId === WidgetType.LineChart) {
      this.vegaLength = itemComponent.height;
      this.vegaWidth = itemComponent.width;
      console.log("Width of Chart is " + this.vegaLength)
      this.store.dispatch(new VegaWidgetResized(itemComponent.width,itemComponent.height));
    }
  };

  private readonly onItemInit = (
    item: WidgetItem,
    itemComponent: GridsterItemComponentInterface
  ): void => {
    console.info("onItemInit", item, itemComponent);
  };

  readonly options: GridsterConfig = {
    ...gridConfig,
    itemChangeCallback: this.onItemChange,
    itemResizeCallback: this.onItemResize,
    itemInitCallback: this.onItemInit
  };

  

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    console.info("onWindowResize", event);
    this.store.dispatch(new WindowResized());
  }
}
