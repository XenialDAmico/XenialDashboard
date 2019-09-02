import {Injectable} from '@angular/core';
import * as vegaTooltip from 'vega-tooltip';
import $ from 'jquery';
import * as vega from 'vega';

//declare var vega: any;
//declare var $: any;

@Injectable()
export class VegaConfigsService {
  constructor() {
  }



  public vegaInit(id: string, vegaSpec, width, height) {
    let vegaTheme = this.getThemeDefault();
    let optionsTooltip = {
      offsetX: 6,
      offsetY: 10,
      theme: 'xsTooltip'
    };

    let handlerTooltip = new vegaTooltip.Handler(optionsTooltip);

    return new vega.View(vega.parse(vegaSpec, vegaTheme))
      .tooltip(handlerTooltip.call)
      .renderer('svg')          // set renderer (canvas or svg
      .initialize('#' + id)// initialize view within parent DOM container
      .resize()
      .width(width)               // set chart width
      .height(height)              // set chart height
      .hover()                  // enable hover encode set processing
      .run()
  }



  public getChartWidth(id) {
    var a = $(id).parent();
    console.log("Parent Element Name: " + a.attr('name'));
    var width = a.outerWidth(true);
    console.log("Width of " + a + " is " + width);
    return width
    
  }

  public getChartHeight(id) {
    var length = $(id).parent().length - 30
    return length;
  }


  public getThemeDefault() {
    let xsFont = "'Open Sans', sans-serif";
    let xsFontSize = 9;

    return {
      "view": {"strokeWidth": 0.5},
      "autosize": {"type": "fit", "resize": false, "contains": "content"},
      "background": "#ffffff",
      "padding": 3,
      "headerColumn": {"labelOrient": "bottom"},
      "headerFacet": {"labelOrient": "bottom", "labelAlign": "center"},
      "title": {
        "fontSize": 16,
        "font": xsFont,
        "color": "#2a2a2a",
        "anchor": "start",
        "fontWeight": "normal",
        "dx": 20,
        "dy": 0
      },
      "legend": {
        "rowPadding": 0,
        "columnPadding": 8,
        "clipHeight": 0,
        "orient": "top",
        "titleOrient": "top",
        "symbolType": "square",
        "symbolDirection": "horizontal",
        "symbolStrokeWidth": 2,
        "symbolSize": 100,
        "titleFont": xsFont,
        "titleFontSize": 0,
        "labelFont": xsFont,
        "labelFontSize": xsFontSize,
        "labelColor": "#2a2a2a",
        "layout": {"anchor": "end", "direction": "horizontal"}
      },
      "axisBottom": {
        "domain": true,
        "domainColor": "#d1d1d1",
        "domainWidth": 1,
        "labelFont": xsFont,
        "labelFontSize": xsFontSize,
        "labelAngle": 0,
        "labelColor": "#2a2a2a",
        "ticks": true,
        "tickColor": "#d1d1d1",
        "tickSize": 6,
        "titleFont": xsFont,
        "titleFontSize": 12,
        "titlePadding": 10,
        "grid": false,
        "gridColor": "#e9e9e9",
        "gridWidth": 1
      },
      "axisTop": {
        "domain": true,
        "domainColor": "#d1d1d1",
        "domainWidth": 1,
        "labelFont": xsFont,
        "labelFontSize": xsFontSize,
        "labelAngle": 0,
        "labelColor": "#2a2a2a",
        "ticks": true,
        "tickColor": "#d1d1d1",
        "tickSize": 6,
        "titleFont": xsFont,
        "titleFontSize": 12,
        "titlePadding": 10,
        "grid": true,
        "gridColor": "#e9e9e9",
        "gridWidth": 1
      },
      "axisLeft": {
        "domain": true,
        "domainColor": "#d1d1d1",
        "domainWidth": 1,
        "labelFont": xsFont,
        "labelFontSize": xsFontSize,
        "labelAngle": 0,
        "labelColor": "#2a2a2a",
        "ticks": true,
        "tickColor": "#d1d1d1",
        "tickSize": 4,
        "titleFont": xsFont,
        "titleFontSize": 12,
        "titlePadding": 10,
        "titleAngle": 0,
        "titleY": -10,
        "titleX": 18,
        "grid": true,
        "gridColor": "#e9e9e9",
        "gridWidth": 1,
        "minExtent": 60
      },
      "axisRight": {
        "domain": true,
        "domainColor": "#d1d1d1",
        "domainWidth": 1,
        "labelFont": xsFont,
        "labelFontSize": xsFontSize,
        "labelAngle": 0,
        "labelColor": "#2a2a2a",
        "ticks": true,
        "tickColor": "#d1d1d1",
        "tickSize": 4,
        "titleFont": xsFont,
        "titleFontSize": 12,
        "titlePadding": 10,
        "titleAngle": 0,
        "titleY": -10,
        "titleX": 18,
        "grid": false,
        "gridColor": "#e9e9e9",
        "gridWidth": 1,
        "minExtent": 60
      },
      "range": {
        "category": [
          "#79a540",
          "#7cc0e9",
          "#811986",
          "#d8574f",
          "#e9877c",
          "#3819b3",
          "#e9a27c",
          "#c5689d"
        ],
        "diverging": [
          "#d1d1d1",
          "#a2d4ec",
          "#73bfe2",
          "#46abdb",
          "#1696d2",
          "#12719e"
        ]
      },
      "style": {
        "area": {"fill": "#79a540", "interactive": false},
        "line": {
          "color": "#79a540",
          "stroke": "#79a540",
          "strokeWidth": 2,
          "interactive": false
        },
        "trail": {
          "color": "#79a540",
          "stroke": "#79a540",
          "strokeWidth": 0,
          "size": 1,
          "interactive": false
        },
        "point": {"filled": true, "size": 50, "opacity": 1, "interactive": false},
        "text": {
          "font": xsFont,
          "color": "#79a540",
          "fontSize": 11,
          "align": "right",
          "fontWeight": 400,
          "size": 11,
          "interactive": false
        },
        "tick": {
          "thickness": 2,
          "opacity": 1,
          "color": "#0a5d00",
          "interactive": false
        },
        "rect": {"fill": "#79a540", "interactive": false},
        "bar": {"binSpacing": 1, "opacity": 0.8, "interactive": false}
      }
    };
  };

  //Dashboard
  public getChartHeader() {
    return {
      "$schema": "https://vega.github.io/schema/vega/v5.json",
      "width": 850,
      "height": 60,
      "padding": 5,
      "data": [{
        "name": "source",
        "values": [],
        "transform": [
          {"type": "formula", "as": "y_position", "expr": "20"},
          {"type": "formula", "as": "line_width", "expr": "150"},
          {
            "type": "stack",
            "groupby": ["y_position"],
            "field": "line_width",
            "as": ["x0", "x1"]
          }
        ]
      }
      ],
      "marks": [
        {
          "type": "text",
          "from": {"data": "source"},
          "encode": {
            "enter": {
              "x": {"field": "x0"},
              "x2": {"field": "x1"},
              "y": {"field": "y_position"},
              "align": {"value": "center"},
              "text": {"signal": "datum['label']"},
              "font": {"value": "Arial"},
              "fontSize": {"value": 12}
            }
          }
        },
        {
          "type": "text",
          "from": {"data": "source"},
          "encode": {
            "enter": {
              "x": {"field": "x0", "offset": 0},
              "x2": {"field": "x1"},
              "y": {"field": "y_position", "offset": 27},
              "align": {"value": "center"},
              "text": {"field": "value"},
              "font": {"value": "Arial"},
              "fontSize": {"value": 24},
              "fontWeight": {"value": "bold"},
              "fill": {"value": "#007dc3"}
            }
          }
        }
      ]
    };
  };

  public getChartBarCompareVertical(title, group_by_label) {

    return {
      "$schema": "https://vega.github.io/schema/vega/v5.json",
      "autosize": {"type": "fit", "resize": false, "contains": "content"},
      "background": "#ffffff",
      "padding": 3,
      "width": 450,
      "height": 310,
      "title": {"text": title},
      "style": "cell",
      "data": [
        {
          "name": "source",
          "values": []
        },
        {
          "name": "data_1",
          "source": "source",
          "transform": [
            {
              "type": "stack",
              "groupby": ["group_by"],
              "field": "amount1",
              "sort": {"field": ["label1"], "order": ["descending"]},
              "as": ["amount1_start", "amount1_end"],
              "offset": "zero"
            },
            {
              "type": "filter",
              "expr": "datum[\"amount1\"] !== null && !isNaN(datum[\"amount1\"])"
            }
          ]
        },
        {
          "name": "data_2",
          "source": "source",
          "transform": [
            {
              "type": "stack",
              "groupby": ["group_by"],
              "field": "amount2",
              "sort": {"field": ["label2"], "order": ["descending"]},
              "as": ["amount2_start", "amount2_end"],
              "offset": "zero"
            },
            {
              "type": "filter",
              "expr": "datum[\"amount2\"] !== null && !isNaN(datum[\"amount2\"])"
            }
          ]
        }
      ],
      "marks": [
        {
          "name": "layer_0_marks",
          "type": "rect",
          "style": ["bar"],
          "from": {"data": "data_1"},
          "encode": {
            "update": {
              "fill": {"scale": "color", "field": "label1"},
              "x": {"scale": "x", "field": "group_by", "band": 0.07},
              "width": {"scale": "x", "band": 0.92},
              "y": {"scale": "y", "field": "amount1_end"},
              "y2": {"scale": "y", "field": "amount1_start"}
            }
          }
        },
        {
          "name": "layer_1_marks",
          "type": "rect",
          "style": ["bar"],
          "from": {"data": "data_2"},
          "encode": {
            "update": {
              "fill": {"scale": "fill", "field": "label2"},
              "stroke": {"value": "#063b00"},
              "strokeWidth": {"value": 2},
              "x": {"scale": "x", "field": "group_by", "band": 0.06},
              "width": {"scale": "x", "band": 0.94},
              "y": {"scale": "y", "field": "amount2_end"},
              "y2": {"scale": "y", "field": "amount2_start"}
            }
          }
        },
        {
          "name": "layer_2_marks",
          "type": "rect",
          "style": ["bar"],
          "from": {"data": "data_2"},
          "interactive": true,
          "encode": {
            "update": {
              "fill": {"scale": "color", "field": "label1"},
              "opacity": {"value": 0},
              "tooltip": {
                "signal": "{\"title\": ''+datum[\"group_by\"], \"Net Sales\": format(datum[\"amount1\"], \"$,.2f\"), \"Prev Avg\": format(datum[\"amount2\"], \"$,.2f\")}"
              },
              "strokeWidth": {"value": 0},
              "x": {"scale": "x", "field": "group_by"},
              "width": {"scale": "x", "band": 1.06},
              "y": {"field": "amount2_start"},
              "y2": {"field": {"group": "height"}}
            },
            "hover": {"fill": {"value": "black"}, "opacity": {"value": 0.2}}
          }
        }
      ],
      "scales": [
        {
          "name": "x",
          "type": "band",
          "domain": {
            "data": "source",
            "field": "group_by",
            "sort": {"op": "count"}
          },
          "range": [0, {"signal": "width"}],
          "paddingInner": 0.25,
          "paddingOuter": 0.05
        },
        {
          "name": "y",
          "type": "linear",
          "domain": {
            "fields": [
              {"data": "data_1", "field": "amount1_start"},
              {"data": "data_1", "field": "amount1_end"},
              {"data": "data_2", "field": "amount2_start"},
              {"data": "data_2", "field": "amount2_end"}
            ]
          },
          "range": [{"signal": "height"}, 0],
          "nice": true,
          "zero": true
        },
        {
          "name": "color",
          "type": "ordinal",
          "domain": {"data": "data_1", "field": "label1"},
          "range": "category"
        },
        {
          "name": "fill",
          "type": "ordinal",
          "domain": {"data": "data_2", "field": "label2"},
          "range": ["transparent"]
        }
      ],
      "axes": [
        {
          "scale": "x",
          "orient": "bottom",
          "grid": false,
          "labelAlign": "center",
          "labelBaseline": "top",
          "zindex": 2
        },
        {
          "scale": "y",
          "orient": "left",
          "grid": false,
          "format": "$,.0f",
          "labelAlign": "right",
          "labelBaseline": "middle",
          "labelOverlap": true,
          "tickCount": {"signal": "ceil(height/40)"},
          "zindex": 1
        },
        {
          "scale": "y",
          "orient": "left",
          "gridScale": "x",
          "grid": true,
          "tickCount": {"signal": "ceil(height/40)"},
          "domain": false,
          "labels": false,
          "maxExtent": 0,
          "minExtent": 0,
          "ticks": false,
          "zindex": 0
        }
      ],
      "legends": [
        {"fill": "color", "direction": "horizontal", "symbolOpacity": 0.8},
        {
          "symbolSize": 65,
          "symbolStrokeColor": "#063b00",
          "symbolStrokeWidth": 2,
          "fill": "fill",
          "direction": "horizontal",
          "symbolOpacity": 0.8
        }
      ] 
    }
  };

 



  public getChartPie(title) {
    return {
      "$schema": "https://vega.github.io/schema/vega/v5.json",
      "width": 200,
      "height": 200,
      "padding": 5,
      "background": "#ffffff",
      "title": {"text": title},
      "data": [
        {
          "name": "source",
          "values": [],
          "transform": [
            {
              "type": "aggregate",
              "groupby": ["company_id"],
              "ops": ["count"],
              "fields": ["order_prep_sec"],
              "as": ["field"]
            }
          ]
        },
        {
          "name": "table",
          "source": "source",
          "transform": [
            {
              "type": "pie",
              "field": "field",
              "startAngle": 0,
              "endAngle": 6.29,
              "sort": true
            }
          ]
        }
      ],
      "scales": [
        {
          "name": "color",
          "type": "ordinal",
          "domain": {"data": "table", "field": "id"},
          "range": {"scheme": "category20c"}
        }
      ],
      "marks": [
        {
          "type": "arc",
          "from": {"data": "table"},
          "encode": {
            "enter": {
              "fill": {"scale": "color", "field": "id"},
              "x": {"signal": "width / 2"},
              "y": {"signal": "height / 2"},
              "startAngle": {"field": "startAngle"},
              "endAngle": {"field": "endAngle"},
              "innerRadius": {"value": 0},
              "outerRadius": {"signal": "width / 2"},
              "cornerRadius": {"value": 0},
              "tooltip": {"signal": "{\"title\":\"Products\",\"Fulfilled products\": datum[\"field\"]}"}
            }
          }
        }
      ]
    }
  };

  public getChartBarByWeekDay(title: string) {
    return {
      "$schema": "https://vega.github.io/schema/vega/v5.json",
      "autosize": {"type": "fit", "resize": false, "contains": "content"},
      "background": "#ffffff",
      "padding": 3,
      "width": 450,
      "height": 310,
      "title": {"text": title},
      "style": "cell",
      "data": [
        {
          "name": "source_0",
          "values": []
        },
        {
          "name": "data_0",
          "source": "source_0",
          "transform": [
            {"type": "formula", "expr": "toDate(datum[\"business_date\"])", "as": "date"},
            {
              "type": "formula",
              "as": "day_date",
              "expr": "toDate(datum[\"business_date\"])"
            },
            {
              "type": "formula",
              "expr": "time(datetime(1900, 0, day(datum[\"business_date\"])+1, 0, 0, 0, 0))===time(datetime(1900, 0, 1+1, 0, 0, 0, 0)) ? 0 : time(datetime(1900, 0, day(datum[\"business_date\"])+1, 0, 0, 0, 0))===time(datetime(1900, 0, 2+1, 0, 0, 0, 0)) ? 1 : time(datetime(1900, 0, day(datum[\"business_date\"])+1, 0, 0, 0, 0))===time(datetime(1900, 0, 3+1, 0, 0, 0, 0)) ? 2 : time(datetime(1900, 0, day(datum[\"business_date\"])+1, 0, 0, 0, 0))===time(datetime(1900, 0, 4+1, 0, 0, 0, 0)) ? 3 : time(datetime(1900, 0, day(datum[\"business_date\"])+1, 0, 0, 0, 0))===time(datetime(1900, 0, 5+1, 0, 0, 0, 0)) ? 4 : time(datetime(1900, 0, day(datum[\"business_date\"])+1, 0, 0, 0, 0))===time(datetime(1900, 0, 6+1, 0, 0, 0, 0)) ? 5 : time(datetime(1900, 0, day(datum[\"business_date\"])+1, 0, 0, 0, 0))===time(datetime(1900, 0, 0+1, 0, 0, 0, 0)) ? 6 : 7",
              "as": "x_day_date_sort_index"
            }
          ]
        },
        {
          "name": "data_1",
          "source": "data_0",
          "transform": [
            {
              "type": "aggregate",
              "groupby": ["day_date"],
              "ops": ["average"],
              "fields": ["order_prep_sec"],
              "as": ["duration"]
            }
          ]
        }
      ],
      "marks": [
        {
          "name": "marks",
          "type": "rect",
          "style": ["bar"],
          "from": {"data": "data_1"},
          "encode": {
            "update": {
              "fill": {"value": "#4c78a8"},
              "tooltip": {
                "signal": "{\"title\":\"Average of selected sites\",\"Average order preparation Time\": timeFormat(time(datetime(1900, 0, 1, 0, 0, datum[\"duration\"], 0)), '%H:%M:%S')}"
              },
              "x": {"scale": "x", "field": "day_date"},
              "width": {"scale": "x", "band": true},
              "y": {"scale": "y", "field": "duration"},
              "y2": {"scale": "y", "value": 0}
            }
          }
        }
      ],
      "scales": [
        {
          "name": "x",
          "type": "band",
          "domain": {
            "data": "data_0",
            "field": "day_date",
            "sort": {"op": "min", "field": "x_day_date_sort_index"}
          },
          "range": [0, {"signal": "width"}],
          "paddingInner": 0.1,
          "paddingOuter": 0.05
        },
        {
          "name": "y",
          "type": "linear",
          "domain": {"data": "data_1", "field": "duration"},
          "range": [{"signal": "height"}, 0],
          "nice": true,
          "zero": true
        }
      ],
      "axes": [
        {
          "scale": "x",
          "orient": "bottom",
          "grid": false,
          "labelAlign": "right",
          "labelAngle": 0,
          "labelBaseline": "middle",
          "labelOverlap": true,
          "tickCount": "hour",
          "tickMinStep": 1,
          "encode": {
            "labels": {
              "update": {"text": {"signal": "timeFormat(datum.value, '%a')"}}
            }
          },
          "zindex": 1
        },
        {
          "scale": "y",
          "orient": "left",
          "grid": false,
          "labelOverlap": true,
          "tickCount": {"signal": "ceil(height/40)"},
          "encode": {
            "labels": {
              "update": {"text": {"signal": "timeFormat(time(datetime(1900, 0, 1, 0, 0, datum.value, 0)), '%H:%M:%S')"}}
            }
          },
          "zindex": 1
        },
        {
          "scale": "y",
          "orient": "left",
          "gridScale": "x",
          "grid": true,
          "tickCount": {"signal": "ceil(height/40)"},
          "domain": false,
          "labels": false,
          "maxExtent": 0,
          "minExtent": 0,
          "ticks": false,
          "zindex": 0
        }
      ],
      "config": {"axisY": {"minExtent": 30}}
    }
  }

  public getChartStackBarByScreen(title: string) {
    return {
      "$schema": "https://vega.github.io/schema/vega/v5.json",
      "autosize": {"type": "fit", "resize": false, "contains": "content"},
      "background": "#ffffff",
      "padding": 3,
      "width": 450,
      "height": 310,
      "title": {"text": title},
      "style": "cell",
      "data": [
        {
          "name": "table",
          "values": [],
          "transform": [
            {
              "type": "stack",
              "groupby": ["screen"],
              "sort": {"field": "type", "order":"descending"},
              "field": "duration"
            }
          ]
        }
      ],
    
      "scales": [
        {
          "name": "x",
          "type": "band",
          "domain": {"data": "table", "field": "screen"},
          "range": [0, {"signal": "width"}],
          "paddingInner": 0.1,
          "paddingOuter": 0.05
        },
        {
          "name": "y",
          "type": "linear",
          "range": "height",
          "nice": true, "zero": true,
          "domain": {"data": "table", "field": "y1"}
        },
        {
          "name": "color",
          "type": "ordinal",
          "range": {"scheme": "category20c"},
          "domain": {"data": "table", "field": "type"}
        }
      ],
    
      "axes": [
        {"orient": "bottom", "scale": "x", "zindex": 1},
        {"orient": "left", "scale": "y", "zindex": 1, "grid": false,
        "labelOverlap": true,
        "tickCount": {"signal": "ceil(height/40)"},
        "encode": {
                "labels": {
                  "update": {"text": {"signal": "timeFormat(time(datetime(1900, 0, 1, 0, 0, datum.value, 0)), '%H:%M:%S')"}}
                }
              }
        }
      ],
    
      "marks": [
        {
          "type": "rect",
          "from": {"data": "table"},
          "encode": {
            "enter": {
              "x": {"scale": "x", "field": "screen"},
              "width": {"scale": "x", "band": 1, "offset": -1},
              "y": {"scale": "y", "field": "y0"},
              "y2": {"scale": "y", "field": "y1"},
              "fill": {"scale": "color", "field": "type"}
            },
            "update": {
          "tooltip": {
            "signal": "{\"title\":datum[\"screen\"], \"Total Average Fulfillment\": timeFormat(time(datetime(1900, 0, 1, 0, 0, datum[\"order_prep_sec\"], 0)), '%H:%M:%S'), \"Average Screen Arrival\": timeFormat(time(datetime(1900, 0, 1, 0, 0, datum[\"screen_arrival_sec\"], 0)), '%H:%M:%S'), \"Average Fulfillment\": timeFormat(time(datetime(1900, 0, 1, 0, 0, datum[\"screen_fullfil_sec\"], 0)), '%H:%M:%S')}"
          }
            }
          }
        }
      ]
    }
  }

  public getChartBarByHours(title) {
    return {
      "$schema": "https://vega.github.io/schema/vega/v5.json",
      "autosize": {"type": "fit", "resize": false, "contains": "content"},
      "background": "#ffffff",
      "padding": 3,
      "width": 450,
      "height": 310,
      "title": {"text": title},
      "style": "cell",
      "data": [
        {
          "name": "source_0",
          "values": []
        },
        {
          "name": "data_0",
          "source": "source_0",
          "transform": [
            {"type": "formula", "expr": "datetime(datum[\"last_item_bump\"])", "as": "date"},
            {
              "type": "formula",
              "as": "day_date",
              "expr": "timeFormat(datetime(datum[\"last_item_bump\"]),'%I %p')"
            }
          ]
        },
        {
          "name": "data_1",
          "source": "data_0",
          "transform": [
            {
              "type": "aggregate",
              "groupby": ["day_date"],
              "ops": ["average"],
              "fields": ["order_prep_sec"],
              "as": ["duration"]
            },
            {
              "type": "formula",
              "expr": "datum[\"day_date\"]==='01 AM' ? 1 : datum[\"day_date\"]==='02 AM' ? 2 : datum[\"day_date\"]==='03 AM' ? 3 : datum[\"day_date\"]==='04 AM' ? 4 : datum[\"day_date\"]==='05 AM' ? 5 : datum[\"day_date\"]==='06 AM' ? 6 : datum[\"day_date\"]==='07 AM' ? 7 : datum[\"day_date\"]==='08 AM' ? 8 : datum[\"day_date\"]==='09 AM' ? 9 : datum[\"day_date\"]==='10 AM' ? 10 : datum[\"day_date\"]==='11 AM' ? 11 : datum[\"day_date\"]==='12 PM' ? 12 : datum[\"day_date\"]==='01 PM' ? 13 : datum[\"day_date\"]==='02 PM' ? 14 : datum[\"day_date\"]==='03 PM' ? 15 : datum[\"day_date\"]==='04 PM' ? 16 : datum[\"day_date\"]==='05 PM' ? 17 : datum[\"day_date\"]==='06 PM' ? 18 : datum[\"day_date\"]==='07 PM' ? 19 : datum[\"day_date\"]==='08 PM' ? 20 : datum[\"day_date\"]==='09 PM' ? 21 : datum[\"day_date\"]==='10 PM' ? 22 : datum[\"day_date\"]==='11 PM' ? 23 : 999",
              "as": "sort_index"
            }
          ]
        }
      ],
      "marks": [
        {
          "name": "marks",
          "type": "rect",
          "style": ["bar"],
          "from": {"data": "data_1"},
          "encode": {
            "update": {
              "fill": {"value": "#4c78a8"},
              "tooltip": {
                "signal": "{\"title\":\"Average of selected sites\",\"Average order preparation Time\": timeFormat(time(datetime(1900, 0, 1, 0, 0, datum[\"duration\"], 0)), '%H:%M:%S')}"
              },
              "x": {"scale": "x", "field": "day_date"},
              "width": {"scale": "x", "band": true},
              "y": {"scale": "y", "field": "duration"},
              "y2": {"scale": "y", "value": 0}
            }
          }
        }
      ],
      "scales": [
        {
          "name": "x",
          "type": "band",
          "domain": {
            "data": "data_1",
            "field": "day_date",
            "sort": {"op": "median", "field": "sort_index"}
          },
          "range": [0, {"signal": "width"}],
          "paddingInner": 0.1,
          "paddingOuter": 0.05
        },
        {
          "name": "y",
          "type": "linear",
          "domain": {"data": "data_1", "field": "duration"},
          "range": [{"signal": "height"}, 0],
          "nice": true,
          "zero": true
        }
      ],
      "axes": [
        {
          "scale": "x",
          "orient": "bottom",
          "grid": false,
          "labelAlign": "right",
          "labelAngle": 0,
          "labelBaseline": "middle",
          "labelOverlap": true,
          "encode": {
            "labels": {
              "update": {"text": {"signal": "datum.value"}}
            }
          },
          "zindex": 1
        },
        {
          "scale": "y",
          "orient": "left",
          "grid": false,
          "labelOverlap": true,
          "tickCount": {"signal": "ceil(height/40)"},
          "encode": {
            "labels": {
              "update": {"text": {"signal": "timeFormat(time(datetime(1900, 0, 1, 0, 0, datum.value, 0)), '%H:%M:%S')"}}
            }
          },
          "zindex": 1
        },
        {
          "scale": "y",
          "orient": "left",
          "gridScale": "x",
          "grid": true,
          "tickCount": {"signal": "ceil(height/40)"},
          "domain": false,
          "labels": false,
          "maxExtent": 0,
          "minExtent": 0,
          "ticks": false,
          "zindex": 0
        }
      ],
      "config": {"axisY": {"minExtent": 30}}
    };
  }

  

  // TODO: Populate with dropdowns on crossfilter
  public getCrossfilterMeasures(){ 
    return [
      {fieldname : "net_sales", fulltext : "Net Sales $"}, 
      {fieldname : "order_qty", fulltext : "Order Qty"},
      {fieldname : "discount_amt", fulltext : "Discount Amt $"},
      {fieldname : "discounted_order_qty", fulltext : "Discount Order Qty"},
      {fieldname : "refund_amt", fulltext : "Refunded Amt $"},
      {fieldname : "refund_qty", fulltext : "Refunded Qty"},
      {fieldname : "voided_postpayment_amt", fulltext : "Voided-Postpayment $"},
      {fieldname : "voided_postpayment_qty", fulltext : "Voided-Postpayment Qty"},
      {fieldname : "tax_exempt_amt", fulltext : "Tax Exempt Amt $"},
      {fieldname : "tax_exempt_qty", fulltext : "Tax Exempt Qty"}
    ]; 
  }

  // If full text contains a dollar sign then format for currency
  public getFormatFromText(measure_fulltext){ 
    let fmt = "0,.0f";
  
    if (measure_fulltext.indexOf("$") > -1){
      fmt = "$0,.2f";
    }
  
    return fmt;
  }

  
  // Returns crossfilter vega chart spec with the 2 measures passed.
  public getChartCustomCrossfilterSales(measure_fieldname1, measure_fulltext1, measure_fieldname2, measure_fulltext2) {
    let width_full = 740;   // Specify width of crossfilter
    let width_half = ((width_full-100) / 2);
  
    let measure_text1 =  measure_fulltext1.replace("$", "").trim();
    let measure_text2 =  measure_fulltext2.replace("$", "").trim();
  
    let sum_meas1 = "sum_" + measure_fieldname1;
    let sum_meas2 = "sum_" + measure_fieldname2;
    let meas_fullformat1 = this.getFormatFromText(measure_fulltext1);
    let meas_fullformat2 = this.getFormatFromText(measure_fulltext2);
    let meas_format1 = meas_fullformat1.replace(".2", ".0");
    let meas_format2 = meas_fullformat2.replace(".2", ".0");
   
    return {
      "$schema": "https://vega.github.io/schema/vega/v5.json",
      "autosize": "pad",
      "background": "white",
      "padding": 5,
      "data": [
        {
          "name": "source_0",
          "values": []
        },
        {"name": "selector_bdate_store"},
        {"name": "selector_dims_store"},
        {
          "name": "data_1",
          "source": "source_0",
          "transform": [
            {
              "type": "aggregate",
              "groupby": ["date_short"],
              "ops": ["sum"],
              "fields": [measure_fieldname1],
              "as": [sum_meas1]
            }
          ]
        },
        {
          "name": "data_2",
          "source": "source_0",
          "transform": [
            {
              "type": "filter",
              "expr": "!(length(data(\"selector_bdate_store\"))) || (vlSelectionTest(\"selector_bdate_store\", datum))"
            }
          ]
        },
        {
          "name": "data_3",
          "source": "data_2",
          "transform": [{"type": "filter", "expr": "datum.site_name != ''"}]
        },
        {
          "name": "data_4",
          "source": "data_3",
          "transform": [
            {
              "type": "filter",
              "expr": "!(length(data(\"selector_dims_store\"))) || (vlSelectionTest(\"selector_dims_store\", datum))"
            },
            {
              "type": "aggregate",
              "groupby": ["site_name"],
              "ops": ["sum", "sum"],
              "fields": [measure_fieldname2, measure_fieldname1],
              "as": [sum_meas2, sum_meas1]
            }
          ]
        },
        {
          "name": "data_5",
          "source": "data_3",
          "transform": [
            {
              "type": "aggregate",
              "groupby": ["site_name"],
              "ops": ["sum", "sum"],
              "fields": [measure_fieldname2, measure_fieldname1],
              "as": [sum_meas2, sum_meas1]
            }
          ]
        },
        {
          "name": "data_6",
          "source": "data_2",
          "transform": [{"type": "filter", "expr": "datum.destination != ''"}]
        },
        {
          "name": "data_7",
          "source": "data_6",
          "transform": [
            {
              "type": "filter",
              "expr": "!(length(data(\"selector_dims_store\"))) || (vlSelectionTest(\"selector_dims_store\", datum))"
            },
            {
              "type": "aggregate",
              "groupby": ["destination"],
              "ops": ["sum", "sum"],
              "fields": [measure_fieldname2, measure_fieldname1],
              "as": [sum_meas2, sum_meas1]
            }
          ]
        },
        {
          "name": "data_8",
          "source": "data_6",
          "transform": [
            {
              "type": "aggregate",
              "groupby": ["destination"],
              "ops": ["sum", "sum"],
              "fields": [measure_fieldname2, measure_fieldname1],
              "as": [sum_meas2, sum_meas1]
            }
          ]
        },
        {
          "name": "data_9",
          "source": "data_2",
          "transform": [{"type": "filter", "expr": "datum.daypart != ''"}]
        },
        {
          "name": "data_10",
          "source": "data_9",
          "transform": [
            {
              "type": "filter",
              "expr": "!(length(data(\"selector_dims_store\"))) || (vlSelectionTest(\"selector_dims_store\", datum))"
            },
            {
              "type": "aggregate",
              "groupby": ["daypart"],
              "ops": ["sum", "sum"],
              "fields": [measure_fieldname2, measure_fieldname1],
              "as": [sum_meas2, sum_meas1]
            }
          ]
        },
        {
          "name": "data_11",
          "source": "data_9",
          "transform": [
            {
              "type": "aggregate",
              "groupby": ["daypart"],
              "ops": ["sum", "sum"],
              "fields": [measure_fieldname2, measure_fieldname1],
              "as": [sum_meas2, sum_meas1]
            }
          ]
        },
        {
          "name": "data_12",
          "source": "data_2",
          "transform": [
            {
              "type": "filter",
              "expr": "!(length(data(\"selector_dims_store\"))) || (vlSelectionTest(\"selector_dims_store\", datum))"
            },
            {
              "type": "aggregate",
              "groupby": ["time_hour"],
              "ops": ["sum", "sum"],
              "fields": [measure_fieldname2, measure_fieldname1],
              "as": [sum_meas2, sum_meas1]
            }
          ]
        },
        {
          "name": "data_13",
          "source": "data_2",
          "transform": [{"type": "filter", "expr": "datum.terminal != ''"}]
        },
        {
          "name": "data_14",
          "source": "data_13",
          "transform": [
            {
              "type": "filter",
              "expr": "!(length(data(\"selector_dims_store\"))) || (vlSelectionTest(\"selector_dims_store\", datum))"
            },
            {
              "type": "aggregate",
              "groupby": ["terminal"],
              "ops": ["sum", "sum"],
              "fields": [measure_fieldname2, measure_fieldname1],
              "as": [sum_meas2, sum_meas1]
            }
          ]
        },
        {
          "name": "data_15",
          "source": "data_13",
          "transform": [
            {
              "type": "aggregate",
              "groupby": ["terminal"],
              "ops": ["sum", "sum"],
              "fields": [measure_fieldname2, measure_fieldname1],
              "as": [sum_meas2, sum_meas1]
            }
          ]
        },
        {
          "name": "data_16",
          "source": "data_2",
          "transform": [{"type": "filter", "expr": "datum.employee != ''"}]
        },
        {
          "name": "data_17",
          "source": "data_16",
          "transform": [
            {
              "type": "filter",
              "expr": "!(length(data(\"selector_dims_store\"))) || (vlSelectionTest(\"selector_dims_store\", datum))"
            },
            {
              "type": "aggregate",
              "groupby": ["employee"],
              "ops": ["sum", "sum"],
              "fields": [measure_fieldname2, measure_fieldname1],
              "as": [sum_meas2, sum_meas1]
            }
          ]
        },
        {
          "name": "data_18",
          "source": "data_16",
          "transform": [
            {
              "type": "aggregate",
              "groupby": ["employee"],
              "ops": ["sum", "sum"],
              "fields": [measure_fieldname2, measure_fieldname1],
              "as": [sum_meas2, sum_meas1]
            }
          ]
        },
        {
          "name": "data_19",
          "source": "data_2",
          "transform": [
            {
              "type": "aggregate",
              "groupby": ["time_hour"],
              "ops": ["sum", "sum"],
              "fields": [measure_fieldname2, measure_fieldname1],
              "as": [sum_meas2, sum_meas1]
            }
          ]
        }
      ],
      "signals": [
        {"name": "concat_0_width", "value": width_full},
        {"name": "concat_0_height", "value": 100},
        {"name": "concat_1_concat_0_width", "value": width_half},
        {"name": "concat_1_concat_0_concat_0_y_step", "value": 20},
        {
          "name": "concat_1_concat_0_concat_0_height",
          "update": "bandspace(domain('concat_1_concat_0_concat_0_y').length, 0.05, 0.025) * concat_1_concat_0_concat_0_y_step"
        },
        {"name": "concat_1_concat_0_concat_1_y_step", "value": 20},
        {
          "name": "concat_1_concat_0_concat_1_height",
          "update": "bandspace(domain('concat_1_concat_0_concat_1_y').length, 0.05, 0.025) * concat_1_concat_0_concat_1_y_step"
        },
        {"name": "concat_1_concat_0_concat_2_y_step", "value": 20},
        {
          "name": "concat_1_concat_0_concat_2_height",
          "update": "bandspace(domain('concat_1_concat_0_concat_2_y').length, 0.05, 0.025) * concat_1_concat_0_concat_2_y_step"
        },
        {"name": "concat_1_concat_0_concat_3_y_step", "value": 20},
        {
          "name": "concat_1_concat_0_concat_3_height",
          "update": "bandspace(domain('concat_1_concat_0_concat_3_y').length, 0.05, 0.025) * concat_1_concat_0_concat_3_y_step"
        },
        {"name": "concat_1_concat_0_concat_4_y_step", "value": 20},
        {
          "name": "concat_1_concat_0_concat_4_height",
          "update": "bandspace(domain('concat_1_concat_0_concat_4_y').length, 0.05, 0.025) * concat_1_concat_0_concat_4_y_step"
        },
        {"name": "concat_1_concat_0_concat_5_y_step", "value": 20},
        {
          "name": "concat_1_concat_0_concat_5_height",
          "update": "bandspace(domain('concat_1_concat_0_concat_5_y').length, 0.05, 0.025) * concat_1_concat_0_concat_5_y_step"
        },
        {"name": "concat_1_concat_1_width", "value": width_half},
        {"name": "concat_1_concat_1_concat_0_y_step", "value": 20},
        {
          "name": "concat_1_concat_1_concat_0_height",
          "update": "bandspace(domain('concat_1_concat_1_concat_0_y').length, 0.05, 0.025) * concat_1_concat_1_concat_0_y_step"
        },
        {"name": "concat_1_concat_1_concat_1_y_step", "value": 20},
        {
          "name": "concat_1_concat_1_concat_1_height",
          "update": "bandspace(domain('concat_1_concat_1_concat_1_y').length, 0.05, 0.025) * concat_1_concat_1_concat_1_y_step"
        },
        {"name": "concat_1_concat_1_concat_2_y_step", "value": 20},
        {
          "name": "concat_1_concat_1_concat_2_height",
          "update": "bandspace(domain('concat_1_concat_1_concat_2_y').length, 0.05, 0.025) * concat_1_concat_1_concat_2_y_step"
        },
        {"name": "concat_1_concat_1_concat_3_y_step", "value": 20},
        {
          "name": "concat_1_concat_1_concat_3_height",
          "update": "bandspace(domain('concat_1_concat_1_concat_3_y').length, 0.05, 0.025) * concat_1_concat_1_concat_3_y_step"
        },
        {"name": "concat_1_concat_1_concat_4_y_step", "value": 20},
        {
          "name": "concat_1_concat_1_concat_4_height",
          "update": "bandspace(domain('concat_1_concat_1_concat_4_y').length, 0.05, 0.025) * concat_1_concat_1_concat_4_y_step"
        },
        {"name": "concat_1_concat_1_concat_5_y_step", "value": 20},
        {
          "name": "concat_1_concat_1_concat_5_height",
          "update": "bandspace(domain('concat_1_concat_1_concat_5_y').length, 0.05, 0.025) * concat_1_concat_1_concat_5_y_step"
        },
        {
          "name": "unit",
          "value": {},
          "on": [
            {"events": "mousemove", "update": "isTuple(group()) ? group() : unit"}
          ]
        },
        {
          "name": "selector_bdate",
          "update": "vlSelectionResolve(\"selector_bdate_store\")"
        },
        {
          "name": "selector_dims",
          "update": "vlSelectionResolve(\"selector_dims_store\")"
        }
      ],
      "layout": {"padding": 20, "columns": 1, "bounds": "full", "align": "each"},
      "marks": [
        {
          "type": "group",
          "name": "concat_0_group",
          "title": {"text": "By Businessdate: " + measure_fulltext1 + "", "frame": "group"},
          "style": "cell",
          "encode": {
            "update": {
              "width": {"signal": "concat_0_width"},
              "height": {"signal": "concat_0_height"}
            }
          },
          "signals": [
            {
              "name": "selector_bdate_tuple",
              "on": [
                {
                  "events": [{"source": "scope", "type": "click"}],
                  "update": "datum && item().mark.marktype !== 'group' ? {unit: \"concat_0\", fields: selector_bdate_tuple_fields, values: [(item().isVoronoi ? datum.datum : datum)[\"date_short\"]]} : null",
                  "force": true
                },
                {
                  "events": [{"source": "scope", "type": "dblclick"}],
                  "update": "null"
                }
              ]
            },
            {
              "name": "selector_bdate_tuple_fields",
              "value": [{"field": "date_short", "channel": "x", "type": "E"}]
            },
            {
              "name": "selector_bdate_toggle",
              "value": false,
              "on": [
                {
                  "events": [{"source": "scope", "type": "click"}],
                  "update": "event.shiftKey"
                },
                {
                  "events": [{"source": "scope", "type": "dblclick"}],
                  "update": "false"
                }
              ]
            },
            {
              "name": "selector_bdate_modify",
              "update": "modify(\"selector_bdate_store\", selector_bdate_toggle ? null : selector_bdate_tuple, selector_bdate_toggle ? null : true, selector_bdate_toggle ? selector_bdate_tuple : null)"
            }
          ],
          "marks": [
            {
              "name": "concat_0_marks",
              "type": "rect",
              "style": ["bar"],
              "from": {"data": "data_1"},
              "encode": {
                "update": {
                  "opacity": {"value": 0.85},
                  "fill": [
                    {
                      "test": "!(length(data(\"selector_bdate_store\"))) || (vlSelectionTest(\"selector_bdate_store\", datum))",
                      "value": "#185b88"
                    },
                    {"value": "#dcdcdc"}
                  ],
                  "tooltip": {
                    "signal": "{\"Title\": ''+datum[\"date_short\"], \"" + measure_text1 + "\": format(datum[\"" + sum_meas1 + "\"], \""+ meas_fullformat1 + "\")}"
                  },
                  "x": {"scale": "concat_0_x", "field": "date_short"},
                  "width": {"scale": "concat_0_x", "band": true},
                  "y": {"scale": "concat_0_y", "field": sum_meas1},
                  "y2": {"scale": "concat_0_y", "value": 0}
                }
              }
            }
          ],
          "axes": [
            {
              "scale": "concat_0_x",
              "orient": "bottom",
              "grid": false,
              "labelAngle": 315,
              "tickMinStep": 1,
              "ticks": true,
              "labelAlign": "right",
              "labelBaseline": "top",
              "zindex": 1
            },
            {
              "scale": "concat_0_y",
              "orient": "left",
              "grid": false,
              "format": meas_format1,
              "labelFlush": false,
              "labelOverlap": true,
              "tickCount": {"signal": "ceil(concat_0_height/40)"},
              "zindex": 1
            },
            {
              "scale": "concat_0_y",
              "orient": "left",
              "gridScale": "concat_0_x",
              "grid": true,
              "tickCount": {"signal": "ceil(concat_0_height/40)"},
              "domain": false,
              "labels": false,
              "maxExtent": 0,
              "minExtent": 0,
              "ticks": false,
              "zindex": 0
            }
          ]
        },
        {
          "type": "group",
          "name": "concat_1_group",
          "layout": {"padding": 20, "bounds": "full", "align": "each"},
          "marks": [
            {
              "type": "group",
              "name": "concat_1_concat_0_group",
              "layout": {
                "padding": 20,
                "columns": 1,
                "bounds": "full",
                "align": "each"
              },
              "marks": [
                {
                  "type": "group",
                  "name": "concat_1_concat_0_concat_0_group",
                  "title": {"text": "Store: " + measure_fulltext1 + "", "frame": "group"},
                  "style": "cell",
                  "encode": {
                    "update": {
                      "width": {"signal": "concat_1_concat_0_width"},
                      "height": {"signal": "concat_1_concat_0_concat_0_height"}
                    }
                  },
                  "signals": [
                    {
                      "name": "selector_dims_tuple",
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "datum && item().mark.marktype !== 'group' ? {unit: \"concat_1_concat_0_concat_0_layer_0\", fields: selector_dims_tuple_fields, values: [(item().isVoronoi ? datum.datum : datum)[\"site_name\"]]} : null",
                          "force": true
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "null"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_tuple_fields",
                      "value": [{"field": "site_name", "channel": "y", "type": "E"}]
                    },
                    {
                      "name": "selector_dims_toggle",
                      "value": false,
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "event.shiftKey"
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "false"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_modify",
                      "update": "modify(\"selector_dims_store\", selector_dims_toggle ? null : selector_dims_tuple, selector_dims_toggle ? null : true, selector_dims_toggle ? selector_dims_tuple : null)"
                    }
                  ],
                  "marks": [
                    {
                      "name": "concat_1_concat_0_concat_0_layer_0_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_5"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#dcdcdc"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"site_name\"], \"" + measure_text1 + "\": format(datum[\"" + sum_meas1 + "\"], \""+ meas_fullformat1 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_0_concat_0_x",
                            "field": sum_meas1
                          },
                          "x2": {
                            "scale": "concat_1_concat_0_concat_0_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_0_concat_0_y",
                            "field": "site_name"
                          },
                          "height": {
                            "scale": "concat_1_concat_0_concat_0_y",
                            "band": true
                          }
                        }
                      }
                    },
                    {
                      "name": "concat_1_concat_0_concat_0_layer_1_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_4"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#9cc568"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"site_name\"], \"" + measure_text1 + "\": format(datum[\"" + sum_meas1 + "\"], \""+ meas_fullformat1 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_0_concat_0_x",
                            "field": sum_meas1
                          },
                          "x2": {
                            "scale": "concat_1_concat_0_concat_0_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_0_concat_0_y",
                            "field": "site_name"
                          },
                          "height": {
                            "scale": "concat_1_concat_0_concat_0_y",
                            "band": true
                          }
                        }
                      }
                    }
                  ],
                  "axes": [
                    {
                      "scale": "concat_1_concat_0_concat_0_x",
                      "orient": "bottom",
                      "grid": false,
                      "format": meas_format1,
                      "labelFlush": false,
                      "tickMinStep": 1,
                      "labelOverlap": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_0_width/40)"},
                      "zindex": 1
                    },
                    {
                      "scale": "concat_1_concat_0_concat_0_x",
                      "orient": "bottom",
                      "tickMinStep": 1,
                      "gridScale": "concat_1_concat_0_concat_0_y",
                      "grid": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_0_width/40)"},
                      "domain": false,
                      "labels": false,
                      "maxExtent": 0,
                      "minExtent": 0,
                      "ticks": false,
                      "zindex": 0
                    },
                    {
                      "scale": "concat_1_concat_0_concat_0_y",
                      "orient": "left",
                      "grid": false,
                      "maxExtent": 50,
                      "minExtent": 50,
                      "zindex": 1
                    }
                  ]
                },
                {
                  "type": "group",
                  "name": "concat_1_concat_0_concat_1_group",
                  "title": {"text": "By Destination: " + measure_fulltext1 + "", "frame": "group"},
                  "style": "cell",
                  "encode": {
                    "update": {
                      "width": {"signal": "concat_1_concat_0_width"},
                      "height": {"signal": "concat_1_concat_0_concat_1_height"}
                    }
                  },
                  "signals": [
                    {
                      "name": "selector_dims_tuple",
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "datum && item().mark.marktype !== 'group' ? {unit: \"concat_1_concat_0_concat_1_layer_0\", fields: selector_dims_tuple_fields, values: [(item().isVoronoi ? datum.datum : datum)[\"destination\"]]} : null",
                          "force": true
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "null"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_tuple_fields",
                      "value": [
                        {"field": "destination", "channel": "y", "type": "E"}
                      ]
                    },
                    {
                      "name": "selector_dims_toggle",
                      "value": false,
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "event.shiftKey"
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "false"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_modify",
                      "update": "modify(\"selector_dims_store\", selector_dims_toggle ? null : selector_dims_tuple, selector_dims_toggle ? null : true, selector_dims_toggle ? selector_dims_tuple : null)"
                    }
                  ],
                  "marks": [
                    {
                      "name": "concat_1_concat_0_concat_1_layer_0_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_8"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#dcdcdc"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"destination\"], \"" + measure_text1 + "\": format(datum[\"" + sum_meas1 + "\"], \""+ meas_fullformat1 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_0_concat_1_x",
                            "field": sum_meas1
                          },
                          "x2": {
                            "scale": "concat_1_concat_0_concat_1_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_0_concat_1_y",
                            "field": "destination"
                          },
                          "height": {
                            "scale": "concat_1_concat_0_concat_1_y",
                            "band": true
                          }
                        }
                      }
                    },
                    {
                      "name": "concat_1_concat_0_concat_1_layer_1_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_7"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#9cc568"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"destination\"], \"" + measure_text1 + "\": format(datum[\"" + sum_meas1 + "\"], \""+ meas_fullformat1 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_0_concat_1_x",
                            "field": sum_meas1
                          },
                          "x2": {
                            "scale": "concat_1_concat_0_concat_1_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_0_concat_1_y",
                            "field": "destination"
                          },
                          "height": {
                            "scale": "concat_1_concat_0_concat_1_y",
                            "band": true
                          }
                        }
                      }
                    }
                  ],
                  "axes": [
                    {
                      "scale": "concat_1_concat_0_concat_1_x",
                      "orient": "bottom",
                      "grid": false,
                      "format": meas_format1,
                      "labelFlush": false,
                      "tickMinStep": 1,
                      "labelOverlap": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_0_width/40)"},
                      "zindex": 1
                    },
                    {
                      "scale": "concat_1_concat_0_concat_1_x",
                      "orient": "bottom",
                      "tickMinStep": 1,
                      "gridScale": "concat_1_concat_0_concat_1_y",
                      "grid": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_0_width/40)"},
                      "domain": false,
                      "labels": false,
                      "maxExtent": 0,
                      "minExtent": 0,
                      "ticks": false,
                      "zindex": 0
                    },
                    {
                      "scale": "concat_1_concat_0_concat_1_y",
                      "orient": "left",
                      "grid": false,
                      "maxExtent": 50,
                      "minExtent": 50,
                      "zindex": 1
                    }
                  ]
                },
                {
                  "type": "group",
                  "name": "concat_1_concat_0_concat_2_group",
                  "title": {"text": "By Daypart: " + measure_fulltext1 + "", "frame": "group"},
                  "style": "cell",
                  "encode": {
                    "update": {
                      "width": {"signal": "concat_1_concat_0_width"},
                      "height": {"signal": "concat_1_concat_0_concat_2_height"}
                    }
                  },
                  "signals": [
                    {
                      "name": "selector_dims_tuple",
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "datum && item().mark.marktype !== 'group' ? {unit: \"concat_1_concat_0_concat_2_layer_0\", fields: selector_dims_tuple_fields, values: [(item().isVoronoi ? datum.datum : datum)[\"daypart\"]]} : null",
                          "force": true
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "null"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_tuple_fields",
                      "value": [{"field": "daypart", "channel": "y", "type": "E"}]
                    },
                    {
                      "name": "selector_dims_toggle",
                      "value": false,
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "event.shiftKey"
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "false"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_modify",
                      "update": "modify(\"selector_dims_store\", selector_dims_toggle ? null : selector_dims_tuple, selector_dims_toggle ? null : true, selector_dims_toggle ? selector_dims_tuple : null)"
                    }
                  ],
                  "marks": [
                    {
                      "name": "concat_1_concat_0_concat_2_layer_0_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_11"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#dcdcdc"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"daypart\"], \"" + measure_text1 + "\": format(datum[\"" + sum_meas1 + "\"], \""+ meas_fullformat1 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_0_concat_2_x",
                            "field": sum_meas1
                          },
                          "x2": {
                            "scale": "concat_1_concat_0_concat_2_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_0_concat_2_y",
                            "field": "daypart"
                          },
                          "height": {
                            "scale": "concat_1_concat_0_concat_2_y",
                            "band": true
                          }
                        }
                      }
                    },
                    {
                      "name": "concat_1_concat_0_concat_2_layer_1_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_10"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#9cc568"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"daypart\"], \"" + measure_text1 + "\": format(datum[\"" + sum_meas1 + "\"], \""+ meas_fullformat1 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_0_concat_2_x",
                            "field": sum_meas1
                          },
                          "x2": {
                            "scale": "concat_1_concat_0_concat_2_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_0_concat_2_y",
                            "field": "daypart"
                          },
                          "height": {
                            "scale": "concat_1_concat_0_concat_2_y",
                            "band": true
                          }
                        }
                      }
                    }
                  ],
                  "axes": [
                    {
                      "scale": "concat_1_concat_0_concat_2_x",
                      "orient": "bottom",
                      "grid": false,
                      "format": meas_format1,
                      "labelFlush": false,
                      "tickMinStep": 1,
                      "labelOverlap": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_0_width/40)"},
                      "zindex": 1
                    },
                    {
                      "scale": "concat_1_concat_0_concat_2_x",
                      "orient": "bottom",
                      "tickMinStep": 1,
                      "gridScale": "concat_1_concat_0_concat_2_y",
                      "grid": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_0_width/40)"},
                      "domain": false,
                      "labels": false,
                      "maxExtent": 0,
                      "minExtent": 0,
                      "ticks": false,
                      "zindex": 0
                    },
                    {
                      "scale": "concat_1_concat_0_concat_2_y",
                      "orient": "left",
                      "grid": false,
                      "maxExtent": 50,
                      "minExtent": 50,
                      "zindex": 1
                    }
                  ]
                },
                {
                  "type": "group",
                  "name": "concat_1_concat_0_concat_3_group",
                  "title": {"text": "By Hour: " + measure_fulltext1 + "", "frame": "group"},
                  "style": "cell",
                  "encode": {
                    "update": {
                      "width": {"signal": "concat_1_concat_0_width"},
                      "height": {"signal": "concat_1_concat_0_concat_3_height"}
                    }
                  },
                  "signals": [
                    {
                      "name": "selector_dims_tuple",
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "datum && item().mark.marktype !== 'group' ? {unit: \"concat_1_concat_0_concat_3_layer_0\", fields: selector_dims_tuple_fields, values: [(item().isVoronoi ? datum.datum : datum)[\"time_hour\"]]} : null",
                          "force": true
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "null"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_tuple_fields",
                      "value": [{"field": "time_hour", "channel": "y", "type": "E"}]
                    },
                    {
                      "name": "selector_dims_toggle",
                      "value": false,
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "event.shiftKey"
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "false"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_modify",
                      "update": "modify(\"selector_dims_store\", selector_dims_toggle ? null : selector_dims_tuple, selector_dims_toggle ? null : true, selector_dims_toggle ? selector_dims_tuple : null)"
                    }
                  ],
                  "marks": [
                    {
                      "name": "concat_1_concat_0_concat_3_layer_0_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_19"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#dcdcdc"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"time_hour\"], \"" + measure_text1 + "\": format(datum[\"" + sum_meas1 + "\"], \""+ meas_fullformat1 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_0_concat_3_x",
                            "field": sum_meas1
                          },
                          "x2": {
                            "scale": "concat_1_concat_0_concat_3_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_0_concat_3_y",
                            "field": "time_hour"
                          },
                          "height": {
                            "scale": "concat_1_concat_0_concat_3_y",
                            "band": true
                          }
                        }
                      }
                    },
                    {
                      "name": "concat_1_concat_0_concat_3_layer_1_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_12"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#9cc568"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"time_hour\"], \"" + measure_text1 + "\": format(datum[\"" + sum_meas1 + "\"], \""+ meas_fullformat1 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_0_concat_3_x",
                            "field": sum_meas1
                          },
                          "x2": {
                            "scale": "concat_1_concat_0_concat_3_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_0_concat_3_y",
                            "field": "time_hour"
                          },
                          "height": {
                            "scale": "concat_1_concat_0_concat_3_y",
                            "band": true
                          }
                        }
                      }
                    }
                  ],
                  "axes": [
                    {
                      "scale": "concat_1_concat_0_concat_3_x",
                      "orient": "bottom",
                      "grid": false,
                      "format": meas_format1,
                      "labelFlush": false,
                      "tickMinStep": 1,
                      "labelOverlap": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_0_width/40)"},
                      "zindex": 1
                    },
                    {
                      "scale": "concat_1_concat_0_concat_3_x",
                      "orient": "bottom",
                      "tickMinStep": 1,
                      "gridScale": "concat_1_concat_0_concat_3_y",
                      "grid": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_0_width/40)"},
                      "domain": false,
                      "labels": false,
                      "maxExtent": 0,
                      "minExtent": 0,
                      "ticks": false,
                      "zindex": 0
                    },
                    {
                      "scale": "concat_1_concat_0_concat_3_y",
                      "orient": "left",
                      "grid": false,
                      "maxExtent": 50,
                      "minExtent": 50,
                      "zindex": 1
                    }
                  ]
                },
                {
                  "type": "group",
                  "name": "concat_1_concat_0_concat_4_group",
                  "title": {"text": "By Terminal: " + measure_fulltext1 + "", "frame": "group"},
                  "style": "cell",
                  "encode": {
                    "update": {
                      "width": {"signal": "concat_1_concat_0_width"},
                      "height": {"signal": "concat_1_concat_0_concat_4_height"}
                    }
                  },
                  "signals": [
                    {
                      "name": "selector_dims_tuple",
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "datum && item().mark.marktype !== 'group' ? {unit: \"concat_1_concat_0_concat_4_layer_0\", fields: selector_dims_tuple_fields, values: [(item().isVoronoi ? datum.datum : datum)[\"terminal\"]]} : null",
                          "force": true
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "null"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_tuple_fields",
                      "value": [{"field": "terminal", "channel": "y", "type": "E"}]
                    },
                    {
                      "name": "selector_dims_toggle",
                      "value": false,
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "event.shiftKey"
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "false"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_modify",
                      "update": "modify(\"selector_dims_store\", selector_dims_toggle ? null : selector_dims_tuple, selector_dims_toggle ? null : true, selector_dims_toggle ? selector_dims_tuple : null)"
                    }
                  ],
                  "marks": [
                    {
                      "name": "concat_1_concat_0_concat_4_layer_0_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_15"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#dcdcdc"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"terminal\"], \"" + measure_text1 + "\": format(datum[\"" + sum_meas1 + "\"], \""+ meas_fullformat1 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_0_concat_4_x",
                            "field": sum_meas1
                          },
                          "x2": {
                            "scale": "concat_1_concat_0_concat_4_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_0_concat_4_y",
                            "field": "terminal"
                          },
                          "height": {
                            "scale": "concat_1_concat_0_concat_4_y",
                            "band": true
                          }
                        }
                      }
                    },
                    {
                      "name": "concat_1_concat_0_concat_4_layer_1_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_14"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#9cc568"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"terminal\"], \"" + measure_text1 + "\": format(datum[\"" + sum_meas1 + "\"], \""+ meas_fullformat1 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_0_concat_4_x",
                            "field": sum_meas1
                          },
                          "x2": {
                            "scale": "concat_1_concat_0_concat_4_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_0_concat_4_y",
                            "field": "terminal"
                          },
                          "height": {
                            "scale": "concat_1_concat_0_concat_4_y",
                            "band": true
                          }
                        }
                      }
                    }
                  ],
                  "axes": [
                    {
                      "scale": "concat_1_concat_0_concat_4_x",
                      "orient": "bottom",
                      "grid": false,
                      "format": meas_format1,
                      "labelFlush": false,
                      "tickMinStep": 1,
                      "labelOverlap": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_0_width/40)"},
                      "zindex": 1
                    },
                    {
                      "scale": "concat_1_concat_0_concat_4_x",
                      "orient": "bottom",
                      "tickMinStep": 1,
                      "gridScale": "concat_1_concat_0_concat_4_y",
                      "grid": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_0_width/40)"},
                      "domain": false,
                      "labels": false,
                      "maxExtent": 0,
                      "minExtent": 0,
                      "ticks": false,
                      "zindex": 0
                    },
                    {
                      "scale": "concat_1_concat_0_concat_4_y",
                      "orient": "left",
                      "grid": false,
                      "maxExtent": 50,
                      "minExtent": 50,
                      "zindex": 1
                    }
                  ]
                },
                {
                  "type": "group",
                  "name": "concat_1_concat_0_concat_5_group",
                  "title": {"text": "By Employee: " + measure_fulltext1 + "", "frame": "group"},
                  "style": "cell",
                  "encode": {
                    "update": {
                      "width": {"signal": "concat_1_concat_0_width"},
                      "height": {"signal": "concat_1_concat_0_concat_5_height"}
                    }
                  },
                  "signals": [
                    {
                      "name": "selector_dims_tuple",
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "datum && item().mark.marktype !== 'group' ? {unit: \"concat_1_concat_0_concat_5_layer_0\", fields: selector_dims_tuple_fields, values: [(item().isVoronoi ? datum.datum : datum)[\"employee\"]]} : null",
                          "force": true
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "null"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_tuple_fields",
                      "value": [{"field": "employee", "channel": "y", "type": "E"}]
                    },
                    {
                      "name": "selector_dims_toggle",
                      "value": false,
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "event.shiftKey"
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "false"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_modify",
                      "update": "modify(\"selector_dims_store\", selector_dims_toggle ? null : selector_dims_tuple, selector_dims_toggle ? null : true, selector_dims_toggle ? selector_dims_tuple : null)"
                    }
                  ],
                  "marks": [
                    {
                      "name": "concat_1_concat_0_concat_5_layer_0_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_18"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#dcdcdc"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"employee\"], \"" + measure_text1 + "\": format(datum[\"" + sum_meas1 + "\"], \""+ meas_fullformat1 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_0_concat_5_x",
                            "field": sum_meas1
                          },
                          "x2": {
                            "scale": "concat_1_concat_0_concat_5_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_0_concat_5_y",
                            "field": "employee"
                          },
                          "height": {
                            "scale": "concat_1_concat_0_concat_5_y",
                            "band": true
                          }
                        }
                      }
                    },
                    {
                      "name": "concat_1_concat_0_concat_5_layer_1_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_17"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#9cc568"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"employee\"], \"" + measure_text1 + "\": format(datum[\"" + sum_meas1 + "\"], \""+ meas_fullformat1 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_0_concat_5_x",
                            "field": sum_meas1
                          },
                          "x2": {
                            "scale": "concat_1_concat_0_concat_5_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_0_concat_5_y",
                            "field": "employee"
                          },
                          "height": {
                            "scale": "concat_1_concat_0_concat_5_y",
                            "band": true
                          }
                        }
                      }
                    }
                  ],
                  "axes": [
                    {
                      "scale": "concat_1_concat_0_concat_5_x",
                      "orient": "bottom",
                      "grid": false,
                      "format": meas_format1,
                      "labelFlush": false,
                      "tickMinStep": 1,
                      "labelOverlap": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_0_width/40)"},
                      "zindex": 1
                    },
                    {
                      "scale": "concat_1_concat_0_concat_5_x",
                      "orient": "bottom",
                      "tickMinStep": 1,
                      "gridScale": "concat_1_concat_0_concat_5_y",
                      "grid": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_0_width/40)"},
                      "domain": false,
                      "labels": false,
                      "maxExtent": 0,
                      "minExtent": 0,
                      "ticks": false,
                      "zindex": 0
                    },
                    {
                      "scale": "concat_1_concat_0_concat_5_y",
                      "orient": "left",
                      "grid": false,
                      "maxExtent": 50,
                      "minExtent": 50,
                      "zindex": 1
                    }
                  ]
                }
              ]
            },
            {
              "type": "group",
              "name": "concat_1_concat_1_group",
              "layout": {
                "padding": 20,
                "columns": 1,
                "bounds": "full",
                "align": "each"
              },
              "marks": [
                {
                  "type": "group",
                  "name": "concat_1_concat_1_concat_0_group",
                  "title": {"text": "Store: " + measure_fulltext2 + "", "frame": "group"},
                  "style": "cell",
                  "encode": {
                    "update": {
                      "width": {"signal": "concat_1_concat_1_width"},
                      "height": {"signal": "concat_1_concat_1_concat_0_height"}
                    }
                  },
                  "signals": [
                    {
                      "name": "selector_dims_tuple",
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "datum && item().mark.marktype !== 'group' ? {unit: \"concat_1_concat_1_concat_0_layer_0\", fields: selector_dims_tuple_fields, values: [(item().isVoronoi ? datum.datum : datum)[\"site_name\"]]} : null",
                          "force": true
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "null"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_tuple_fields",
                      "value": [{"field": "site_name", "channel": "y", "type": "E"}]
                    },
                    {
                      "name": "selector_dims_toggle",
                      "value": false,
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "event.shiftKey"
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "false"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_modify",
                      "update": "modify(\"selector_dims_store\", selector_dims_toggle ? null : selector_dims_tuple, selector_dims_toggle ? null : true, selector_dims_toggle ? selector_dims_tuple : null)"
                    }
                  ],
                  "marks": [
                    {
                      "name": "concat_1_concat_1_concat_0_layer_0_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_5"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#dcdcdc"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"site_name\"], \"" + measure_text2 + "\": format(datum[\"" + sum_meas2 + "\"], \""+ meas_fullformat2 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_1_concat_0_x",
                            "field": sum_meas2
                          },
                          "x2": {
                            "scale": "concat_1_concat_1_concat_0_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_1_concat_0_y",
                            "field": "site_name"
                          },
                          "height": {
                            "scale": "concat_1_concat_1_concat_0_y",
                            "band": true
                          }
                        }
                      }
                    },
                    {
                      "name": "concat_1_concat_1_concat_0_layer_1_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_4"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#7cc0e9"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"site_name\"], \"" + measure_text2 + "\": format(datum[\"" + sum_meas2 + "\"], \""+ meas_fullformat2 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_1_concat_0_x",
                            "field": sum_meas2
                          },
                          "x2": {
                            "scale": "concat_1_concat_1_concat_0_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_1_concat_0_y",
                            "field": "site_name"
                          },
                          "height": {
                            "scale": "concat_1_concat_1_concat_0_y",
                            "band": true
                          }
                        }
                      }
                    }
                  ],
                  "axes": [
                    {
                      "scale": "concat_1_concat_1_concat_0_x",
                      "orient": "bottom",
                      "grid": false,
                      "format": meas_format2,
                      "labelFlush": false,
                      "tickMinStep": 1,
                      "labelOverlap": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_1_width/40)"},
                      "zindex": 1
                    },
                    {
                      "scale": "concat_1_concat_1_concat_0_x",
                      "orient": "bottom",
                      "tickMinStep": 1,
                      "gridScale": "concat_1_concat_1_concat_0_y",
                      "grid": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_1_width/40)"},
                      "domain": false,
                      "labels": false,
                      "maxExtent": 0,
                      "minExtent": 0,
                      "ticks": false,
                      "zindex": 0
                    },
                    {
                      "scale": "concat_1_concat_1_concat_0_y",
                      "orient": "left",
                      "grid": false,
                      "maxExtent": 50,
                      "minExtent": 50,
                      "zindex": 1
                    }
                  ]
                },
                {
                  "type": "group",
                  "name": "concat_1_concat_1_concat_1_group",
                  "title": {"text": "By Destination: " + measure_fulltext2 + "", "frame": "group"},
                  "style": "cell",
                  "encode": {
                    "update": {
                      "width": {"signal": "concat_1_concat_1_width"},
                      "height": {"signal": "concat_1_concat_1_concat_1_height"}
                    }
                  },
                  "signals": [
                    {
                      "name": "selector_dims_tuple",
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "datum && item().mark.marktype !== 'group' ? {unit: \"concat_1_concat_1_concat_1_layer_0\", fields: selector_dims_tuple_fields, values: [(item().isVoronoi ? datum.datum : datum)[\"destination\"]]} : null",
                          "force": true
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "null"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_tuple_fields",
                      "value": [
                        {"field": "destination", "channel": "y", "type": "E"}
                      ]
                    },
                    {
                      "name": "selector_dims_toggle",
                      "value": false,
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "event.shiftKey"
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "false"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_modify",
                      "update": "modify(\"selector_dims_store\", selector_dims_toggle ? null : selector_dims_tuple, selector_dims_toggle ? null : true, selector_dims_toggle ? selector_dims_tuple : null)"
                    }
                  ],
                  "marks": [
                    {
                      "name": "concat_1_concat_1_concat_1_layer_0_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_8"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#dcdcdc"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"destination\"], \"" + measure_text2 + "\": format(datum[\"" + sum_meas2 + "\"], \""+ meas_fullformat2 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_1_concat_1_x",
                            "field": sum_meas2
                          },
                          "x2": {
                            "scale": "concat_1_concat_1_concat_1_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_1_concat_1_y",
                            "field": "destination"
                          },
                          "height": {
                            "scale": "concat_1_concat_1_concat_1_y",
                            "band": true
                          }
                        }
                      }
                    },
                    {
                      "name": "concat_1_concat_1_concat_1_layer_1_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_7"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#7cc0e9"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"destination\"], \"" + measure_text2 + "\": format(datum[\"" + sum_meas2 + "\"], \""+ meas_fullformat2 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_1_concat_1_x",
                            "field": sum_meas2
                          },
                          "x2": {
                            "scale": "concat_1_concat_1_concat_1_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_1_concat_1_y",
                            "field": "destination"
                          },
                          "height": {
                            "scale": "concat_1_concat_1_concat_1_y",
                            "band": true
                          }
                        }
                      }
                    }
                  ],
                  "axes": [
                    {
                      "scale": "concat_1_concat_1_concat_1_x",
                      "orient": "bottom",
                      "grid": false,
                      "format": meas_format2,
                      "labelFlush": false,
                      "tickMinStep": 1,
                      "labelOverlap": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_1_width/40)"},
                      "zindex": 1
                    },
                    {
                      "scale": "concat_1_concat_1_concat_1_x",
                      "orient": "bottom",
                      "tickMinStep": 1,
                      "gridScale": "concat_1_concat_1_concat_1_y",
                      "grid": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_1_width/40)"},
                      "domain": false,
                      "labels": false,
                      "maxExtent": 0,
                      "minExtent": 0,
                      "ticks": false,
                      "zindex": 0
                    },
                    {
                      "scale": "concat_1_concat_1_concat_1_y",
                      "orient": "left",
                      "grid": false,
                      "maxExtent": 50,
                      "minExtent": 50,
                      "zindex": 1
                    }
                  ]
                },
                {
                  "type": "group",
                  "name": "concat_1_concat_1_concat_2_group",
                  "title": {"text": "By Daypart: " + measure_fulltext2 + "", "frame": "group"},
                  "style": "cell",
                  "encode": {
                    "update": {
                      "width": {"signal": "concat_1_concat_1_width"},
                      "height": {"signal": "concat_1_concat_1_concat_2_height"}
                    }
                  },
                  "signals": [
                    {
                      "name": "selector_dims_tuple",
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "datum && item().mark.marktype !== 'group' ? {unit: \"concat_1_concat_1_concat_2_layer_0\", fields: selector_dims_tuple_fields, values: [(item().isVoronoi ? datum.datum : datum)[\"daypart\"]]} : null",
                          "force": true
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "null"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_tuple_fields",
                      "value": [{"field": "daypart", "channel": "y", "type": "E"}]
                    },
                    {
                      "name": "selector_dims_toggle",
                      "value": false,
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "event.shiftKey"
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "false"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_modify",
                      "update": "modify(\"selector_dims_store\", selector_dims_toggle ? null : selector_dims_tuple, selector_dims_toggle ? null : true, selector_dims_toggle ? selector_dims_tuple : null)"
                    }
                  ],
                  "marks": [
                    {
                      "name": "concat_1_concat_1_concat_2_layer_0_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_11"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#dcdcdc"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"daypart\"], \"" + measure_text2 + "\": format(datum[\"" + sum_meas2 + "\"], \""+ meas_fullformat2 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_1_concat_2_x",
                            "field": sum_meas2
                          },
                          "x2": {
                            "scale": "concat_1_concat_1_concat_2_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_1_concat_2_y",
                            "field": "daypart"
                          },
                          "height": {
                            "scale": "concat_1_concat_1_concat_2_y",
                            "band": true
                          }
                        }
                      }
                    },
                    {
                      "name": "concat_1_concat_1_concat_2_layer_1_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_10"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#7cc0e9"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"daypart\"], \"" + measure_text2 + "\": format(datum[\"" + sum_meas2 + "\"], \""+ meas_fullformat2 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_1_concat_2_x",
                            "field": sum_meas2
                          },
                          "x2": {
                            "scale": "concat_1_concat_1_concat_2_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_1_concat_2_y",
                            "field": "daypart"
                          },
                          "height": {
                            "scale": "concat_1_concat_1_concat_2_y",
                            "band": true
                          }
                        }
                      }
                    }
                  ],
                  "axes": [
                    {
                      "scale": "concat_1_concat_1_concat_2_x",
                      "orient": "bottom",
                      "grid": false,
                      "format": meas_format2,
                      "labelFlush": false,
                      "tickMinStep": 1,
                      "labelOverlap": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_1_width/40)"},
                      "zindex": 1
                    },
                    {
                      "scale": "concat_1_concat_1_concat_2_x",
                      "orient": "bottom",
                      "tickMinStep": 1,
                      "gridScale": "concat_1_concat_1_concat_2_y",
                      "grid": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_1_width/40)"},
                      "domain": false,
                      "labels": false,
                      "maxExtent": 0,
                      "minExtent": 0,
                      "ticks": false,
                      "zindex": 0
                    },
                    {
                      "scale": "concat_1_concat_1_concat_2_y",
                      "orient": "left",
                      "grid": false,
                      "maxExtent": 50,
                      "minExtent": 50,
                      "zindex": 1
                    }
                  ]
                },
                {
                  "type": "group",
                  "name": "concat_1_concat_1_concat_3_group",
                  "title": {"text": "By Hour: " + measure_fulltext2 + "", "frame": "group"},
                  "style": "cell",
                  "encode": {
                    "update": {
                      "width": {"signal": "concat_1_concat_1_width"},
                      "height": {"signal": "concat_1_concat_1_concat_3_height"}
                    }
                  },
                  "signals": [
                    {
                      "name": "selector_dims_tuple",
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "datum && item().mark.marktype !== 'group' ? {unit: \"concat_1_concat_1_concat_3_layer_0\", fields: selector_dims_tuple_fields, values: [(item().isVoronoi ? datum.datum : datum)[\"time_hour\"]]} : null",
                          "force": true
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "null"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_tuple_fields",
                      "value": [{"field": "time_hour", "channel": "y", "type": "E"}]
                    },
                    {
                      "name": "selector_dims_toggle",
                      "value": false,
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "event.shiftKey"
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "false"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_modify",
                      "update": "modify(\"selector_dims_store\", selector_dims_toggle ? null : selector_dims_tuple, selector_dims_toggle ? null : true, selector_dims_toggle ? selector_dims_tuple : null)"
                    }
                  ],
                  "marks": [
                    {
                      "name": "concat_1_concat_1_concat_3_layer_0_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_19"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#dcdcdc"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"time_hour\"], \"" + measure_text2 + "\": format(datum[\"" + sum_meas2 + "\"], \""+ meas_fullformat2 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_1_concat_3_x",
                            "field": sum_meas2
                          },
                          "x2": {
                            "scale": "concat_1_concat_1_concat_3_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_1_concat_3_y",
                            "field": "time_hour"
                          },
                          "height": {
                            "scale": "concat_1_concat_1_concat_3_y",
                            "band": true
                          }
                        }
                      }
                    },
                    {
                      "name": "concat_1_concat_1_concat_3_layer_1_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_12"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#7cc0e9"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"time_hour\"], \"" + measure_text2 + "\": format(datum[\"" + sum_meas2 + "\"], \""+ meas_fullformat2 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_1_concat_3_x",
                            "field": sum_meas2
                          },
                          "x2": {
                            "scale": "concat_1_concat_1_concat_3_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_1_concat_3_y",
                            "field": "time_hour"
                          },
                          "height": {
                            "scale": "concat_1_concat_1_concat_3_y",
                            "band": true
                          }
                        }
                      }
                    }
                  ],
                  "axes": [
                    {
                      "scale": "concat_1_concat_1_concat_3_x",
                      "orient": "bottom",
                      "grid": false,
                      "format": meas_format2,
                      "labelFlush": false,
                      "tickMinStep": 1,
                      "labelOverlap": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_1_width/40)"},
                      "zindex": 1
                    },
                    {
                      "scale": "concat_1_concat_1_concat_3_x",
                      "orient": "bottom",
                      "tickMinStep": 1,
                      "gridScale": "concat_1_concat_1_concat_3_y",
                      "grid": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_1_width/40)"},
                      "domain": false,
                      "labels": false,
                      "maxExtent": 0,
                      "minExtent": 0,
                      "ticks": false,
                      "zindex": 0
                    },
                    {
                      "scale": "concat_1_concat_1_concat_3_y",
                      "orient": "left",
                      "grid": false,
                      "maxExtent": 50,
                      "minExtent": 50,
                      "zindex": 1
                    }
                  ]
                },
                {
                  "type": "group",
                  "name": "concat_1_concat_1_concat_4_group",
                  "title": {"text": "By Terminal: " + measure_fulltext2 + "", "frame": "group"},
                  "style": "cell",
                  "encode": {
                    "update": {
                      "width": {"signal": "concat_1_concat_1_width"},
                      "height": {"signal": "concat_1_concat_1_concat_4_height"}
                    }
                  },
                  "signals": [
                    {
                      "name": "selector_dims_tuple",
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "datum && item().mark.marktype !== 'group' ? {unit: \"concat_1_concat_1_concat_4_layer_0\", fields: selector_dims_tuple_fields, values: [(item().isVoronoi ? datum.datum : datum)[\"terminal\"]]} : null",
                          "force": true
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "null"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_tuple_fields",
                      "value": [{"field": "terminal", "channel": "y", "type": "E"}]
                    },
                    {
                      "name": "selector_dims_toggle",
                      "value": false,
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "event.shiftKey"
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "false"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_modify",
                      "update": "modify(\"selector_dims_store\", selector_dims_toggle ? null : selector_dims_tuple, selector_dims_toggle ? null : true, selector_dims_toggle ? selector_dims_tuple : null)"
                    }
                  ],
                  "marks": [
                    {
                      "name": "concat_1_concat_1_concat_4_layer_0_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_15"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#dcdcdc"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"terminal\"], \"" + measure_text2 + "\": format(datum[\"" + sum_meas2 + "\"], \""+ meas_fullformat2 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_1_concat_4_x",
                            "field": sum_meas2
                          },
                          "x2": {
                            "scale": "concat_1_concat_1_concat_4_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_1_concat_4_y",
                            "field": "terminal"
                          },
                          "height": {
                            "scale": "concat_1_concat_1_concat_4_y",
                            "band": true
                          }
                        }
                      }
                    },
                    {
                      "name": "concat_1_concat_1_concat_4_layer_1_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_14"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#7cc0e9"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"terminal\"], \"" + measure_text2 + "\": format(datum[\"" + sum_meas2 + "\"], \""+ meas_fullformat2 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_1_concat_4_x",
                            "field": sum_meas2
                          },
                          "x2": {
                            "scale": "concat_1_concat_1_concat_4_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_1_concat_4_y",
                            "field": "terminal"
                          },
                          "height": {
                            "scale": "concat_1_concat_1_concat_4_y",
                            "band": true
                          }
                        }
                      }
                    }
                  ],
                  "axes": [
                    {
                      "scale": "concat_1_concat_1_concat_4_x",
                      "orient": "bottom",
                      "grid": false,
                      "format": meas_format2,
                      "labelFlush": false,
                      "tickMinStep": 1,
                      "labelOverlap": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_1_width/40)"},
                      "zindex": 1
                    },
                    {
                      "scale": "concat_1_concat_1_concat_4_x",
                      "orient": "bottom",
                      "tickMinStep": 1,
                      "gridScale": "concat_1_concat_1_concat_4_y",
                      "grid": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_1_width/40)"},
                      "domain": false,
                      "labels": false,
                      "maxExtent": 0,
                      "minExtent": 0,
                      "ticks": false,
                      "zindex": 0
                    },
                    {
                      "scale": "concat_1_concat_1_concat_4_y",
                      "orient": "left",
                      "grid": false,
                      "maxExtent": 50,
                      "minExtent": 50,
                      "zindex": 1
                    }
                  ]
                },
                {
                  "type": "group",
                  "name": "concat_1_concat_1_concat_5_group",
                  "title": {"text": "By Employee: " + measure_fulltext2 + "", "frame": "group"},
                  "style": "cell",
                  "encode": {
                    "update": {
                      "width": {"signal": "concat_1_concat_1_width"},
                      "height": {"signal": "concat_1_concat_1_concat_5_height"}
                    }
                  },
                  "signals": [
                    {
                      "name": "selector_dims_tuple",
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "datum && item().mark.marktype !== 'group' ? {unit: \"concat_1_concat_1_concat_5_layer_0\", fields: selector_dims_tuple_fields, values: [(item().isVoronoi ? datum.datum : datum)[\"employee\"]]} : null",
                          "force": true
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "null"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_tuple_fields",
                      "value": [{"field": "employee", "channel": "y", "type": "E"}]
                    },
                    {
                      "name": "selector_dims_toggle",
                      "value": false,
                      "on": [
                        {
                          "events": [{"source": "scope", "type": "click"}],
                          "update": "event.shiftKey"
                        },
                        {
                          "events": [{"source": "scope", "type": "dblclick"}],
                          "update": "false"
                        }
                      ]
                    },
                    {
                      "name": "selector_dims_modify",
                      "update": "modify(\"selector_dims_store\", selector_dims_toggle ? null : selector_dims_tuple, selector_dims_toggle ? null : true, selector_dims_toggle ? selector_dims_tuple : null)"
                    }
                  ],
                  "marks": [
                    {
                      "name": "concat_1_concat_1_concat_5_layer_0_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_18"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#dcdcdc"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"employee\"], \"" + measure_text2 + "\": format(datum[\"" + sum_meas2 + "\"], \""+ meas_fullformat2 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_1_concat_5_x",
                            "field": sum_meas2
                          },
                          "x2": {
                            "scale": "concat_1_concat_1_concat_5_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_1_concat_5_y",
                            "field": "employee"
                          },
                          "height": {
                            "scale": "concat_1_concat_1_concat_5_y",
                            "band": true
                          }
                        }
                      }
                    },
                    {
                      "name": "concat_1_concat_1_concat_5_layer_1_marks",
                      "type": "rect",
                      "style": ["bar"],
                      "from": {"data": "data_17"},
                      "encode": {
                        "update": {
                          "fill": {"value": "#7cc0e9"},
                          "tooltip": {
                            "signal": "{\"Title\": ''+datum[\"employee\"], \"" + measure_text2 + "\": format(datum[\"" + sum_meas2 + "\"], \""+ meas_fullformat2 + "\")}"
                          },
                          "x": {
                            "scale": "concat_1_concat_1_concat_5_x",
                            "field": sum_meas2
                          },
                          "x2": {
                            "scale": "concat_1_concat_1_concat_5_x",
                            "value": 0
                          },
                          "y": {
                            "scale": "concat_1_concat_1_concat_5_y",
                            "field": "employee"
                          },
                          "height": {
                            "scale": "concat_1_concat_1_concat_5_y",
                            "band": true
                          }
                        }
                      }
                    }
                  ],
                  "axes": [
                    {
                      "scale": "concat_1_concat_1_concat_5_x",
                      "orient": "bottom",
                      "grid": false,
                      "format": meas_format2,
                      "labelFlush": false,
                      "tickMinStep": 1,
                      "labelOverlap": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_1_width/40)"},
                      "zindex": 1
                    },
                    {
                      "scale": "concat_1_concat_1_concat_5_x",
                      "orient": "bottom",
                      "tickMinStep": 1,
                      "gridScale": "concat_1_concat_1_concat_5_y",
                      "grid": true,
                      "tickCount": {"signal": "ceil(concat_1_concat_1_width/40)"},
                      "domain": false,
                      "labels": false,
                      "maxExtent": 0,
                      "minExtent": 0,
                      "ticks": false,
                      "zindex": 0
                    },
                    {
                      "scale": "concat_1_concat_1_concat_5_y",
                      "orient": "left",
                      "grid": false,
                      "maxExtent": 50,
                      "minExtent": 50,
                      "zindex": 1
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "scales": [
        {
          "name": "concat_0_x",
          "type": "band",
          "domain": {
            "data": "source_0",
            "field": "date_short",
            "sort": {"op": "mean", "field": "business_date:N"}
          },
          "range": [0, {"signal": "concat_0_width"}],
          "paddingInner": 0.05,
          "paddingOuter": 0.025
        },
        {
          "name": "concat_0_y",
          "type": "linear",
          "domain": {"data": "data_1", "field": sum_meas1},
          "range": [{"signal": "concat_0_height"}, 0],
          "zero": true,
          "nice": true
        },
        {
          "name": "concat_1_concat_0_concat_0_x",
          "type": "linear",
          "domain": {
            "fields": [
              {"data": "data_5", "field": sum_meas1},
              {"data": "data_4", "field": sum_meas1}
            ]
          },
          "range": [0, {"signal": "concat_1_concat_0_width"}],
          "zero": true,
          "nice": true
        },
        {
          "name": "concat_1_concat_0_concat_0_y",
          "type": "band",
          "domain": {
            "fields": [
              {"data": "data_5", "field": "site_name"},
              {"data": "data_4", "field": "site_name"}
            ]
          },
          "range": {"step": {"signal": "concat_1_concat_0_concat_0_y_step"}},
          "paddingInner": 0.05,
          "paddingOuter": 0.025
        },
        {
          "name": "concat_1_concat_0_concat_1_x",
          "type": "linear",
          "domain": {
            "fields": [
              {"data": "data_8", "field": sum_meas1},
              {"data": "data_7", "field": sum_meas1}
            ]
          },
          "range": [0, {"signal": "concat_1_concat_0_width"}],
          "zero": true,
          "nice": true
        },
        {
          "name": "concat_1_concat_0_concat_1_y",
          "type": "band",
          "domain": {
            "fields": [
              {"data": "data_8", "field": "destination"},
              {"data": "data_7", "field": "destination"}
            ],
            "sort": true
          },
          "range": {"step": {"signal": "concat_1_concat_0_concat_1_y_step"}},
          "paddingInner": 0.05,
          "paddingOuter": 0.025
        },
        {
          "name": "concat_1_concat_0_concat_2_x",
          "type": "linear",
          "domain": {
            "fields": [
              {"data": "data_11", "field": sum_meas1},
              {"data": "data_10", "field": sum_meas1}
            ]
          },
          "range": [0, {"signal": "concat_1_concat_0_width"}],
          "zero": true,
          "nice": true
        },
        {
          "name": "concat_1_concat_0_concat_2_y",
          "type": "band",
          "domain": {
            "fields": [
              {"data": "data_11", "field": "daypart"},
              {"data": "data_10", "field": "daypart"}
            ]
          },
          "range": {"step": {"signal": "concat_1_concat_0_concat_2_y_step"}},
          "paddingInner": 0.05,
          "paddingOuter": 0.025
        },
        {
          "name": "concat_1_concat_0_concat_3_x",
          "type": "linear",
          "domain": {
            "fields": [
              {"data": "data_19", "field": sum_meas1},
              {"data": "data_12", "field": sum_meas1}
            ]
          },
          "range": [0, {"signal": "concat_1_concat_0_width"}],
          "zero": true,
          "nice": true
        },
        {
          "name": "concat_1_concat_0_concat_3_y",
          "type": "band",
          "domain": {
            "fields": [
              {"data": "data_19", "field": "time_hour"},
              {"data": "data_12", "field": "time_hour"}
            ]
          },
          "range": {"step": {"signal": "concat_1_concat_0_concat_3_y_step"}},
          "paddingInner": 0.05,
          "paddingOuter": 0.025
        },
        {
          "name": "concat_1_concat_0_concat_4_x",
          "type": "linear",
          "domain": {
            "fields": [
              {"data": "data_15", "field": sum_meas1},
              {"data": "data_14", "field": sum_meas1}
            ]
          },
          "range": [0, {"signal": "concat_1_concat_0_width"}],
          "zero": true,
          "nice": true
        },
        {
          "name": "concat_1_concat_0_concat_4_y",
          "type": "band",
          "domain": {
            "fields": [
              {"data": "data_15", "field": "terminal"},
              {"data": "data_14", "field": "terminal"}
            ],
            "sort": true
          },
          "range": {"step": {"signal": "concat_1_concat_0_concat_4_y_step"}},
          "paddingInner": 0.05,
          "paddingOuter": 0.025
        },
        {
          "name": "concat_1_concat_0_concat_5_x",
          "type": "linear",
          "domain": {
            "fields": [
              {"data": "data_18", "field": sum_meas1},
              {"data": "data_17", "field": sum_meas1}
            ]
          },
          "range": [0, {"signal": "concat_1_concat_0_width"}],
          "zero": true,
          "nice": true
        },
        {
          "name": "concat_1_concat_0_concat_5_y",
          "type": "band",
          "domain": {
            "fields": [
              {"data": "data_18", "field": "employee"},
              {"data": "data_17", "field": "employee"}
            ],
            "sort": true
          },
          "range": {"step": {"signal": "concat_1_concat_0_concat_5_y_step"}},
          "paddingInner": 0.05,
          "paddingOuter": 0.025
        },
        {
          "name": "concat_1_concat_1_concat_0_x",
          "type": "linear",
          "domain": {
            "fields": [
              {"data": "data_5", "field": sum_meas2},
              {"data": "data_4", "field": sum_meas2}
            ]
          },
          "range": [0, {"signal": "concat_1_concat_1_width"}],
          "zero": true,
          "nice": true
        },
        {
          "name": "concat_1_concat_1_concat_0_y",
          "type": "band",
          "domain": {
            "fields": [
              {"data": "data_5", "field": "site_name"},
              {"data": "data_4", "field": "site_name"}
            ]
          },
          "range": {"step": {"signal": "concat_1_concat_1_concat_0_y_step"}},
          "paddingInner": 0.05,
          "paddingOuter": 0.025
        },
        {
          "name": "concat_1_concat_1_concat_1_x",
          "type": "linear",
          "domain": {
            "fields": [
              {"data": "data_8", "field": sum_meas2},
              {"data": "data_7", "field": sum_meas2}
            ]
          },
          "range": [0, {"signal": "concat_1_concat_1_width"}],
          "zero": true,
          "nice": true
        },
        {
          "name": "concat_1_concat_1_concat_1_y",
          "type": "band",
          "domain": {
            "fields": [
              {"data": "data_8", "field": "destination"},
              {"data": "data_7", "field": "destination"}
            ],
            "sort": true
          },
          "range": {"step": {"signal": "concat_1_concat_1_concat_1_y_step"}},
          "paddingInner": 0.05,
          "paddingOuter": 0.025
        },
        {
          "name": "concat_1_concat_1_concat_2_x",
          "type": "linear",
          "domain": {
            "fields": [
              {"data": "data_11", "field": sum_meas2},
              {"data": "data_10", "field": sum_meas2}
            ]
          },
          "range": [0, {"signal": "concat_1_concat_1_width"}],
          "zero": true,
          "nice": true
        },
        {
          "name": "concat_1_concat_1_concat_2_y",
          "type": "band",
          "domain": {
            "fields": [
              {"data": "data_11", "field": "daypart"},
              {"data": "data_10", "field": "daypart"}
            ]
          },
          "range": {"step": {"signal": "concat_1_concat_1_concat_2_y_step"}},
          "paddingInner": 0.05,
          "paddingOuter": 0.025
        },
        {
          "name": "concat_1_concat_1_concat_3_x",
          "type": "linear",
          "domain": {
            "fields": [
              {"data": "data_19", "field": sum_meas2},
              {"data": "data_12", "field": sum_meas2}
            ]
          },
          "range": [0, {"signal": "concat_1_concat_1_width"}],
          "zero": true,
          "nice": true
        },
        {
          "name": "concat_1_concat_1_concat_3_y",
          "type": "band",
          "domain": {
            "fields": [
              {"data": "data_19", "field": "time_hour"},
              {"data": "data_12", "field": "time_hour"}
            ]
          },
          "range": {"step": {"signal": "concat_1_concat_1_concat_3_y_step"}},
          "paddingInner": 0.05,
          "paddingOuter": 0.025
        },
        {
          "name": "concat_1_concat_1_concat_4_x",
          "type": "linear",
          "domain": {
            "fields": [
              {"data": "data_15", "field": sum_meas2},
              {"data": "data_14", "field": sum_meas2}
            ]
          },
          "range": [0, {"signal": "concat_1_concat_1_width"}],
          "zero": true,
          "nice": true
        },
        {
          "name": "concat_1_concat_1_concat_4_y",
          "type": "band",
          "domain": {
            "fields": [
              {"data": "data_15", "field": "terminal"},
              {"data": "data_14", "field": "terminal"}
            ],
            "sort": true
          },
          "range": {"step": {"signal": "concat_1_concat_1_concat_4_y_step"}},
          "paddingInner": 0.05,
          "paddingOuter": 0.025
        },
        {
          "name": "concat_1_concat_1_concat_5_x",
          "type": "linear",
          "domain": {
            "fields": [
              {"data": "data_18", "field": sum_meas2},
              {"data": "data_17", "field": sum_meas2}
            ]
          },
          "range": [0, {"signal": "concat_1_concat_1_width"}],
          "zero": true,
          "nice": true
        },
        {
          "name": "concat_1_concat_1_concat_5_y",
          "type": "band",
          "domain": {
            "fields": [
              {"data": "data_18", "field": "employee"},
              {"data": "data_17", "field": "employee"}
            ],
            "sort": true
          },
          "range": {"step": {"signal": "concat_1_concat_1_concat_5_y_step"}},
          "paddingInner": 0.05,
          "paddingOuter": 0.025
        }
      ],
      "config": {
        "style": {"cell": {"stroke": "transparent"}},
        "background": "white"
      }
    };
  };
   
   

}

