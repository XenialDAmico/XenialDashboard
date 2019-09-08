import { Spec } from "vega";

export const PieChartInitConfig: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v4.json",
  "width": 200,
  "height": 200,
  "autosize": {
    "type": "fit",
    "resize": true,
    "contains": "padding"
  },

  "data": [
    {
      "name": "table",
      "values": [
        {"id": "Frozen Drinks", "field": 86},
        {"id": "Hot Coffee", "field": 15},
        {"id": "Espresso", "field": 34},
        {"id": "Bottled Bevs", "field": 54},
        {"id": "Smoothies", "field": 23}
      ],
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
"legends": [
    {
      "fill": "color",
      "encode": {
        "title": {
          "update": {
            "fontSize": {"value": 14}
          }
        },
        "labels": {
          "interactive": true,
          "update": {
            "fontSize": {"value": 12},
            "fill": {"value": "black"}
          },
          "hover": {
            "fill": {"value": "firebrick"}
          }
        },
        "symbols": {
          "update": {
            "stroke": {"value": "transparent"}
          }
        },
        "legend": {
          "update": {
            "stroke": {"value": "#ccc"},
            "strokeWidth": {"value": 1.5}
          }
        }
      }
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
          "x": {"signal": "width / 2  "},
          "y": {"signal": "height / 2"},
          "startAngle": {"field": "startAngle"},
          "endAngle": {"field": "endAngle"},
          "innerRadius": {"value": 40},
          "outerRadius": {"signal": "width / 2"},
          "cornerRadius": {"value": 0},
          "tooltip": {"field": "id"}
        }
      }
    }
  ]
};
