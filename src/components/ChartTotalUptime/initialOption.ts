const initialOption = {
  chart: {
    type: "column",
  },
  title: {
    text: "Tempo total de coleta (hrs)",
  },
  xAxis: {
    categories: ["Tempo de coleta (hrs)"],
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: "Horas de coleta",
    },
  },
  series: [],
};

export default initialOption;
