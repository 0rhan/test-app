import reverseDate from "./reverseDate";
import moment from "moment";

const descendingDate = (itemA, itemB) => {
  const { date: dateA } = itemA;
  const { date: dateB } = itemB;
  const formattedDateA = moment(reverseDate(dateA));
  const formattedDateB = moment(reverseDate(dateB));
  return formattedDateA - formattedDateB;
};

const ascendingDate = (itemA, itemB) => {
  const { date: dateA } = itemA;
  const { date: dateB } = itemB;
  const formattedDateA = moment(reverseDate(dateA));
  const formattedDateB = moment(reverseDate(dateB));
  return formattedDateB - formattedDateA;
};

export { descendingDate, ascendingDate };
