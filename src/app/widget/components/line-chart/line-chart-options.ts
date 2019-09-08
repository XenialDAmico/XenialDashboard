import { Spec } from "vega";

export const LineChartInitConfig: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "width": 400,
  "height": 200,
  "autosize": {
    "type": "fit",
    "resize": true,
    "contains": "padding"
  },
  "padding": 5,

  "data": [
    {
      "name": "table",
      "values": [
        {"x": "6A", "y": 28, "c":"Front of House"}, {"x": "6A", "y": 55, "c":"Back of House"},
        {"x": "7A", "y": 43, "c":"Front of House"}, {"x": "7A", "y": 91, "c":"Back of House"},
        {"x": "8A", "y": 81, "c":"Front of House"}, {"x": "8A", "y": 53, "c":"Back of House"},
        {"x": "9A", "y": 19, "c":"Front of House"}, {"x": "9A", "y": 87, "c":"Back of House"},
        {"x": "10A", "y": 52, "c":"Front of House"}, {"x": "10A", "y": 48, "c":"Back of House"},
        {"x": "11A", "y": 24, "c":"Front of House"}, {"x": "11A", "y": 49, "c":"Back of House"},
        {"x": "12P", "y": 87, "c":"Front of House"}, {"x": "12P", "y": 66, "c":"Back of House"},
        {"x": "1P", "y": 17, "c":"Front of House"}, {"x": "1P", "y": 27, "c":"Back of House"},
        {"x": "2P", "y": 68, "c":"Front of House"}, {"x": "2P", "y": 16, "c":"Back of House"},
        {"x": "3P", "y": 49, "c":"Front of House"}, {"x": "3P", "y": 15, "c":"Back of House"}
      ],
      "transform": [
        {
          "type": "stack",
          "groupby": ["x"],
          "sort": {"field": "c"},
          "field": "y"
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
      "name": "x",
      "type": "point",
      "range": "width",
      "domain": {"data": "table", "field": "x"}
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
      "range": "category",
      "domain": {"data": "table", "field": "c"}
    }
  ],
//   "signals": [
//     {
//     "name": "width",
//     "value": "",
//     "on": [
//       {
//         "events": {
//           "source": "window",
//           "type": "resize"
//         },
//         "update": "containerSize()[0]*0.35"
//       }
//     ]
//   },
//   {
//     "name": "height",
//     "value": "",
//     "on": [
//       {
//         "events": {
//           "source": "window",
//           "type": "resize"
//         },
//         "update": "containerSize()[1]*0.35"
//       }
//     ]
//   }
// ],
  "axes": [
    {"orient": "bottom", "scale": "x", "zindex": 1},
    {"orient": "left", "scale": "y", "zindex": 1}
  ],

  "marks": [
    {
      "type": "group",
      "from": {
        "facet": {
          "name": "series",
          "data": "table",
          "groupby": "c"
        }
      },
      "marks": [
        {
          "type": "area",
          "from": {"data": "series"},
          "encode": {
            "enter": {
              "interpolate": {"value": "monotone"},
              "x": {"scale": "x", "field": "x"},
              "y": {"scale": "y", "field": "y0"},
              "y2": {"scale": "y", "field": "y1"},
              "fill": {"scale": "color", "field": "c"}
            },
            "update": {
              "fillOpacity": {"value": 1}
            },
            "hover": {
              "fillOpacity": {"value": 0.5}
            }
          }
        }
      ]
    }
  ]
};
