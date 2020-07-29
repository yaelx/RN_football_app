import Moment from "moment";
Moment.locale("en");

export const FORMATS = {
  shortDate: "DD/MM/YYYY",
  datetime: "DD/MM/YYYY HH:mm",
  time: "HH:mm",
  serverFormat: "YYYY-MM-DDTHH:mm:ssZ",
};

export const dateTimeConverter = dateTime => {
  let _moment = Moment(dateTime, FORMATS["datetime"]);
  let datetimeFormat = _moment.format(FORMATS["datetime"]);
  return datetimeFormat;
};

/**
 * convert "server" format string into -> date string in "datetime" format.
 * @param {*} dateTime : date string in server format
 */
export const convertServerDate = dateTime => {
  let serverFormat = Moment(dateTime, FORMATS["serverFormat"]);
  let datetimeFormat = serverFormat.format(FORMATS["datetime"]);
  return datetimeFormat;
};

export const convertServerToShortDate = dateTime => {
  let serverFormat = Moment(dateTime, FORMATS["serverFormat"]);
  let dateOnly = serverFormat.format(FORMATS["shortDate"]);
  let timeOnly = serverFormat.format(FORMATS["time"]);
  return { date: dateOnly, time: timeOnly };
};

/**
 * convert "datetime" format string into -> date string in server format.
 * @param {*} dateTime
 */
export const dateServerConverter = dateTime => {
  let datetimeFormat = Moment(dateTime, FORMATS["datetime"]);
  let serverFormat = datetimeFormat.format(FORMATS["serverFormat"]);
  return serverFormat;
};

export const dateUTCConverter = dateTime => {
  let stillUtc = Moment.utc(dateTime).toDate();
  let local = Moment(stillUtc).format(FORMATS["shortDate"]);
  return local;
};