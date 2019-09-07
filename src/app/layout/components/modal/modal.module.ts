import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ClarityModule } from "@clr/angular";
import { WidgetService } from "src/app/widget/services/dynamic-widget.service";
import { ModalComponent } from "./modal.component";

@NgModule({
  imports: [CommonModule, ClarityModule],
  declarations: [ModalComponent],
  providers: [WidgetService],
  exports: [ModalComponent]
})
export class ModalModule {}
