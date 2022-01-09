import { getDateFromISOString } from "../getDateFromISOString";

describe("Date Utility getDateFromISOString", () => {
  const MOCK_DATE_VALID = "2020-02-20T15:49:55";
  const MOCK_DATE_VALID_OBJECT = new Date(2020, 1, 20, 15, 49, 55);

  it("should parse a date in valid ISO format", () => {
    expect(getDateFromISOString(MOCK_DATE_VALID)).toEqual(
      MOCK_DATE_VALID_OBJECT
    );
  });

  // ====================
  // ERROR SCENARIOS
  // ====================

  it("should return null if input isoDateString is NULL", () => {
    expect(getDateFromISOString(null as any)).toEqual(null);
  });

  it("should return null if input isoDateString is undefined", () => {
    expect(getDateFromISOString(undefined as any)).toEqual(null);
  });

  it("should return null if input isoDateString is MinDate", () => {
    expect(getDateFromISOString("0001-01-01T00:00:00")).toEqual(null);
  });

  it("should return null if input isoDateString is invalid", () => {
    expect(getDateFromISOString("some text")).toEqual(null);
  });
});
