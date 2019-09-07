import { Action } from "@ngrx/store";

export enum LayoutActionTypes {
  WindowResized = "[Layout] Window Resized",
  TableWidgetResized = "[Layout] Widget Resized",
  VegaWidgetResized = "[Layout] Vega Widget Resized",
  TopSellersWidgetResized = "[Layout] TopSellers Widget Resized",
  SDRWidgetResized = "[Layout] SDR Widget Resized"
  
}

export class WindowResized implements Action {
  public readonly type = LayoutActionTypes.WindowResized;
}

export class TableWidgetResized implements Action {
  public readonly type = LayoutActionTypes.TableWidgetResized;
  constructor(public tsWidth: number, public tsHeight: number) {}
}

export class VegaWidgetResized implements Action {
  public readonly type = LayoutActionTypes.VegaWidgetResized;
  constructor(public VegaWidth: number, public VegaHeight: number) {}
}

export class SDRWidgetResized implements Action {
  public readonly type = LayoutActionTypes.SDRWidgetResized;
  constructor(public SDRWidth: number, public SDRHeight: number) {}
}

export class TopSellersWidgetResized implements Action {
  public readonly type = LayoutActionTypes.TopSellersWidgetResized;
  constructor(public tsWidth: number, public tsHeight: number) {}
}

export type LayoutActions = WindowResized | TableWidgetResized | VegaWidgetResized | TopSellersWidgetResized | SDRWidgetResized;
