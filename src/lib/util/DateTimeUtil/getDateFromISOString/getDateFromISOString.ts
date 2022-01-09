import { parseISO } from 'date-fns';

/**
 * Obtains the converted Date object from a datetime formatted in ISO
 * e.g. "2020-04-08T15:27:41.987Z" or "2020-04-08T15:27:41"
 *
 * @param {string | null} isoDateString  A date string in ISO format
 *
 * @returns {Date | null}  The converted Date object or NULL if the provided Date input could not be parsed.
 */
const getDateFromISOString = (isoDateString: string | null) => {
  try {
    if (!isoDateString) {
      return null;
    } else {
      const parsedDate = parseISO(isoDateString);
      if (
        // Javascript equivalent of an Invalid Date when the ISO parse was invlid
        parsedDate.toString() === 'Invalid Date' ||
        // is min date such as "0001-01-01T00:00:00"
        parsedDate.getFullYear() === 1
      ) {
        return null;
      } else {
        return parsedDate;
      }
    }
  } catch (error) {
    return null;
  }
};

export { getDateFromISOString };
