import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ThemeService } from "./services/theme.service";
import {VegaConfigsService} from "src/app/core/services/vega.service"


@NgModule({
  imports: [CommonModule],
  providers: [ThemeService,VegaConfigsService]
})
export class CoreModule {}
