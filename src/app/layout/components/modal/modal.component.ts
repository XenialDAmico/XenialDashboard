import { Component, ViewEncapsulation } from "@angular/core";

import {mainContentWidgets} from "src/app/layout/components/main-content/main-content-data"
import { WidgetItem } from "../../models/widget.model";
import { WidgetName, WidgetType } from "src/app/widget/models/widget.model";
import { WidgetService } from 'src/app/widget/services/dynamic-widget.service';


@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent {
  open: boolean = false;
  widgets: WidgetItem[] = mainContentWidgets;

  onOpen() {
    this.open = true;
  }

  addItem(id:number): void {
    //var name = this.widgets.find()
    this.widgets.push({widgetId:id,widgetName:"New",x:1,y:1, rows:2, cols:2});
  }
  
}
