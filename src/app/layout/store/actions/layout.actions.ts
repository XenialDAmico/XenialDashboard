import { Action } from "@ngrx/store";

export enum LayoutActionTypes {
  WindowResized = "[Layout] Window Resized",
  TableWidgetResized = "[Layout] Widget Resized",
  VegaWidgetResized = "[Layout] Vega Widget Resized",
  TopSellersWidgetResized = "[Layout] TopSellers Widget Resized",
  
}

export class WindowResized implements Action {
  public readonly type = LayoutActionTypes.WindowResized;
}

export class TableWidgetResized implements Action {
  public readonly type = LayoutActionTypes.TableWidgetResized;
}

export class VegaWidgetResized implements Action {
  public readonly type = LayoutActionTypes.VegaWidgetResized;
}

export class TopSellersWidgetResized implements Action {
  public readonly type = LayoutActionTypes.TopSellersWidgetResized;
}

export type LayoutActions = WindowResized | TableWidgetResized | VegaWidgetResized | TopSellersWidgetResized;
