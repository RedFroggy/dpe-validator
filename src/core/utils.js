export class Utils {
  /**
   * @param obj1 {Object}
   * @param obj2 {Object}
   */
  static diff(obj1, obj2) {
    const result = {};
    if (Object.is(obj1, obj2)) {
      return result;
    }
    if (!obj2 || typeof obj2 !== 'object') {
      return result;
    }
    Object.keys(obj1 || {})
      .concat(Object.keys(obj2))
      .forEach((key) => {
        if (obj2[key] !== obj1[key] && !Object.is(obj1[key], obj2[key])) {
          result[key] = {
            was: obj1[key],
            is: obj2[key]
          };
        }
        if (typeof obj2[key] === 'object' && typeof obj1[key] === 'object') {
          result[key] = this.diff(obj1[key], obj2[key]);
        }
      });
    return result;
  }
}
