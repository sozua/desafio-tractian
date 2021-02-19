export default function convertStatus(originalStatus: string) {
  switch (originalStatus) {
    case "inOperation":
      return "Em operação";
    case "inAlert":
      return "Em alerta";
    case "inDowntime":
      return "Em parada";
    default:
      return originalStatus;
  }
}
