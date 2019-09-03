import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ThemeService } from "./services/theme.service";
import { GridService } from "./services/grid.service";
import {VegaConfigsService} from "src/app/core/services/vega.service"


@NgModule({
  imports: [CommonModule],
  providers: [GridService,ThemeService,VegaConfigsService]
})
export class CoreModule {}
