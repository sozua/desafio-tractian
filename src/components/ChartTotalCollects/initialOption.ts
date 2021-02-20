const initialOption = {
  chart: {
    type: "column",
  },
  title: {
    text: "Total de coletas",
  },
  xAxis: {
    categories: ["Coletas"],
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: "Quantidade de coletas",
    },
  },
  series: [],
};

export default initialOption;
