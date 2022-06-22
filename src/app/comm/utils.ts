import { Provide, Inject, Scope, ScopeEnum } from '@midwayjs/decorator';

import BigNumber from 'bignumber.js';

const DATE_FORMATE = 'YYYY-MM-DD HH:mm:ss';

@Provide()
@Scope(ScopeEnum.Singleton)
export default class Utils {
  @Inject('dayjs')
  dayjsTool;

  @Inject('lodash')
  lodash;

  isEmpty(value?) {
    return this.lodash.isEmpty(value);
  }

  isNotEmpty(value?) {
    return !this.lodash.isEmpty(value);
  }

  getDateNow(): string {
    const dateStr: string = this.dayjsTool().format(DATE_FORMATE);
    return dateStr;
  }

  getDateEndTime(time?): string {
    return this.dayjsTool(time).endOf('day').format(DATE_FORMATE);
  }

  getDateStartTime(time?): string {
    return this.dayjsTool(time).startOf('day').format(DATE_FORMATE);
  }

  getDateSeconds(time?): number {
    return this.dayjsTool(time).unix();
  }

  getDateNowAdd8hours(time?): Date {
    const dateStr: Date = this.dayjsTool(time).add(8, 'hour').toDate();
    return dateStr;
  }

  bigEq(a, b) {
    return new BigNumber(a).eq(b);
  }

  mapToArray(map: Map<string, any>) {
    const arr = [];
    for (const [key, value] of map) {
      arr.push({
        [key]: value,
      });
    }

    return arr;
  }

  mapToObject(map: Map<string, any>) {
    const obj = {};
    for (const [key, value] of map) {
      obj[key] = value;
    }
    return obj;
  }

  objectToMap(obj: object) {
    const map = new Map();
    for (const key in obj) {
      map.set(key, obj[key]);
    }
    return map;
  }
}
