import moment from "moment";

export const formatDate = (dateString: string) => {
  const date = moment(dateString, "YYYY-MM-DD");
  return date.format("MMMM Do, YYYY");
};
