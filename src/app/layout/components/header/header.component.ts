import { Component, ViewChild } from "@angular/core";
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import * as uuid from 'uuid';
import { select, Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { ThemeService } from "src/app/core/services/theme.service";
import { WidgetModule } from "src/app/widget/widget.module";
import { WidgetType } from "src/app/widget/models/widget.model";
import { WidgetItem } from "src/app/layout/models/widget.model";
import {mainContentWidgets} from "src/app/layout/components/main-content/main-content-data";
import {
  SetDarkTheme,
  SetLightTheme
} from "src/app/core/store/actions/theme.actions";
import { AppState } from "src/app/core/store/reducers";
import { getThemeType } from "src/app/core/store/reducers/theme.reducer";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  @ViewChild(ModalComponent, { static: true }) modal: ModalComponent;
  theme: string;
  widgets: WidgetItem[] = mainContentWidgets;



  private themeSubscription: Subscription;

  constructor(
    private store: Store<AppState>,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.themeSubscription = this.store
      .pipe(select(getThemeType))
      .subscribe((theme: string) => {
        this.theme = theme;
      });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  onLightTheme(): void {
    if (this.theme === "Dark") {
      this.store.dispatch(new SetLightTheme());
      this.themeService.setTheme("Light");
    }
  }

  compact(): void {
    this.widgets.shift()
  }

  addWidget(): void {
    this.widgets.push({widgetId:7,widgetName:"New",x:1,y:1, rows:3, cols:2});
  }

  removeWidget(id: string): void {

  }

  onDarkTheme(): void {
    if (this.theme === "Light") {
      this.store.dispatch(new SetDarkTheme());
      this.themeService.setTheme("Dark");
    }
  }
}
