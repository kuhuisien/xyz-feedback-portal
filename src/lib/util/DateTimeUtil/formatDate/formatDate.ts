import { parseISO, format } from 'date-fns';
import { getDateFromISOString } from '../getDateFromISOString/getDateFromISOString';

// Date format constructed from the rules of the date formatting library.
const DATE_FORMAT_FOR_DISPLAY = "E, dd MMMM yyyy, h:mmaaaaa'm'";

/**
 * Formats an ISO date to a displayble format on the UI
 *
 * @param dateString  ISO DateTime format, e.g. "2020-04-14T15:45:00"
 * @param dateFormat  Optional Date format string
 *
 * @returns Formatted date string, ready to be displayed on UI, e.g. "Sat, 16 May 2020, 8:00:00 AM"
 */
export const formatDate = (dateString: string | null, dateFormat?: string) => {
  if (!dateString) {
    return '';
  } else {
    const date = getDateFromISOString(dateString);
    if (!date) {
      return '';
    }
    if (!dateFormat) {
      return format(date, DATE_FORMAT_FOR_DISPLAY);
    } else {
      return format(date, dateFormat);
    }
  }
};
