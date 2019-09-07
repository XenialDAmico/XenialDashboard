import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { WidgetItem } from "src/app/layout/models/widget.model";
import { DynamicWidgetDirective } from "../../directives/dynamic-widget.directive";
import { WidgetService } from "../../services/dynamic-widget.service";
import { gridConfig } from "src/app/layout/components/main-content/grid-config"
import {mainContentWidgets} from "src/app/layout/components/main-content/main-content-data"
import { GridsterConfig } from 'angular-gridster2';

@Component({
  selector: "app-dynamic-widget",
  templateUrl: "./dynamic-widget.component.html",
  styleUrls: ["./dynamic-widget.component.scss"]
})
export class DynamicWidgetComponent implements OnInit, OnDestroy {
  @Input()
  widgetItem: WidgetItem;
  widgets: WidgetItem[] = mainContentWidgets;

  private componentFactory: ComponentFactory<any>;
  private viewContainerRef: ViewContainerRef;
  private componentRef: any;

  @ViewChild(DynamicWidgetDirective, { static: true })
  widget: DynamicWidgetDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private widgetService: WidgetService
  ) {}

  ngOnInit(): void {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.widgetService.getComponent(this.widgetItem.widgetId)
    );

    this.viewContainerRef = this.widget.viewContainerRef;
    this.viewContainerRef.clear();

    this.componentRef = this.viewContainerRef.createComponent(
      this.componentFactory
    );
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  deleteItem(): void {
    var myWidget  = this.widgets.indexOf(this.widgetItem);
    console.log("Deleting Widget - " + this.widgetItem.widgetName)
    this.widgets.splice(myWidget, 1);
    if (this.options.api) {
      console.log("Compact Type : " + this.options.compactType.toString)
      this.options.compactType = "compactLeft&Up";
      this.options.api.optionsChanged();
    }
  }

  readonly options: GridsterConfig = {
    ...gridConfig
  }

}
