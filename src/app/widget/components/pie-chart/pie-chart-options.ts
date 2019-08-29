import { EChartOption } from "echarts";

export const PieChartInitConfig: EChartOption = {
  title: {
    show: false
  },
  tooltip: {
    trigger: "item",
    formatter: "{b} : {c} ({d}%)"
  },
  legend: {
    orient: "horizontal",
    x: "center",
    y: "bottom",
    type: "scroll",
    data: ["Coffee", "Frozen", "Smoothies", "Cappucino", "Tea"]
  },
  series: [
    {
      type: "pie",
      data: [
        { value: 335, name: "Coffee" },
        { value: 310, name: "Frozen" },
        { value: 234, name: "Smoothies" },
        { value: 135, name: "Cappucino" },
        { value: 1548, name: "Tea" }
      ],
      label: {
        normal: {
          formatter: "{d}%",
          position: "inside"
        }
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
};
