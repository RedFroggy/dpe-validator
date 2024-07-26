import { Utils } from './utils.js';

describe('Utils unit tests', () => {
  it('should find difference between two objects', () => {
    const array = [
      { sh: 12, volume: 100 },
      { sh: 45, volume: 200 },
      { sh: 100, volume: 600 }
    ];

    expect(Utils.diff({}, {})).toStrictEqual({});
    expect(Utils.diff([], [])).toStrictEqual({});
    expect(Utils.diff(null, [])).toStrictEqual({});
    expect(Utils.diff([], null)).toStrictEqual({});
    expect(Utils.diff(null, null)).toStrictEqual({});
    expect(Utils.diff({ total: 10 }, { total: 15 })).toStrictEqual({ total: { was: 10, is: 15 } });
    expect(Utils.diff({ total: { number: 10 } }, { total: 15 })).toStrictEqual({
      total: { was: { number: 10 }, is: 15 }
    });
    expect(Utils.diff({ total: { number: 10 } }, { total: { number: 15 } })).toStrictEqual({
      total: { number: { was: 10, is: 15 } }
    });
  });
});
