import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class GridService {
  linkRef: HTMLLinkElement;

  darkTheme: Record<string, string> = {
    name: "Dark",
    href: "assets/themes/clarity-ui-dark.min.css"
  };

  constructor(@Inject(DOCUMENT) private document: Document) {}

  removeWidget(id: string) {
    
  }

  addWidget(id: string) {
    
  }

}
