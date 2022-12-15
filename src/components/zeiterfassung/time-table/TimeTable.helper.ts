import moment from "moment";

export const changeWeekToPast = (startOfWeek: Date, setStartOfWeek: (newDate: Date) => void, endOfWeek: Date, setEndOfWeek: (newDate: Date) => void) => {
  var newStartDate = moment(startOfWeek).subtract(7, 'day').toDate()
  if (newStartDate.getMonth() !== startOfWeek.getMonth()) {
    return;
  }

  setStartOfWeek(newStartDate);
  setEndOfWeek(moment(endOfWeek).subtract(7, 'day').toDate())
};

export const changeWeekToFuture = (startOfWeek: Date, setStartOfWeek: (newDate: Date) => void, endOfWeek: Date, setEndOfWeek: (newDate: Date) => void) => {
  var newStartDate = moment(startOfWeek).add(7, 'day').toDate()
  if (newStartDate.getMonth() !== startOfWeek.getMonth()) {
    return;
  }
  setStartOfWeek(newStartDate);

  setEndOfWeek(moment(endOfWeek).add(7, 'day').toDate())
};