const initialOption = {
  chart: {
    type: "column",
  },
  title: {
    text: "Saúde (em %)",
  },
  xAxis: {
    categories: ["Saúde (em %)"],
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: "Saúde",
    },
  },
  series: [],
};

export default initialOption;
