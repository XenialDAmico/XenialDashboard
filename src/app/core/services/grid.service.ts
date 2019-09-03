import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { MainContentComponent } from "src/app/layout/components/main-content/main-content.component"
import { WidgetName, WidgetType } from "src/app/widget/models/widget.model";

@Injectable()
export class GridService {
  linkRef: HTMLLinkElement;

  darkTheme: Record<string, string> = {
    name: "Dark",
    href: "assets/themes/clarity-ui-dark.min.css"
  };

  constructor(@Inject(DOCUMENT) private document: Document, private myGrid: MainContentComponent) {}

  removeWidget(id: string) {
    
  }

  addWidget(id: string) {
    this.myGrid.widgets.push({widgetId:1,widgetName:"New", x:1, y:1, rows:1, cols:1 });
    
  }

}
