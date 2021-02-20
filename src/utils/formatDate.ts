import moment from "moment";
import "moment/locale/pt-br";

export default function formatDate(date: string) {
  const dateObject = moment(date).locale("pt-br");
  const formatedDate = dateObject.format("LLL");
  return formatedDate;
}
