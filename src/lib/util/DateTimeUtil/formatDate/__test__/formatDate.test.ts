import { formatDate } from '../formatDate';

describe('Date Utility formatDate', () => {
  it('should format a date in valid ISO format', () => {
    expect(formatDate('2020-04-14')).toEqual('Tue, 14 April 2020, 12:00am');
  });

  it('should format a datetime in dafault ISO format if no dateFormat provided', () => {
    expect(formatDate('2020-04-14T15:45:00')).toEqual('Tue, 14 April 2020, 3:45pm');
  });

  it('should format a datetime in valid ISO format if dateFormat provided', () => {
    expect(formatDate('2020-04-14T15:45:00', 'dd MMMM yyyy, h:mm a')).toEqual(
      '14 April 2020, 3:45 PM'
    );
  });

  it('should return empty string if date string input is null', () => {
    expect(formatDate(null)).toEqual('');
  });

  it('should return empty string if date string input is undefined', () => {
    expect(formatDate(undefined as any)).toEqual('');
  });

  it('should return empty string if date string is not in ISO format', () => {
    expect(formatDate('not a date')).toEqual('');
  });
});
