import { Provide, Scope, ScopeEnum } from '@midwayjs/decorator';
import { pathToRegexp } from 'path-to-regexp';

@Provide()
@Scope(ScopeEnum.Singleton)
export class PathToRegexp {
  public pathMatch(
    pattern: string | RegExp | (string | RegExp)[],
    path: string,
    isReturnTrue: boolean
  ): boolean {
    if (typeof pattern === 'string') {
      const reg = pathToRegexp(pattern, [], { end: true });
      if (reg.global) {
        reg.lastIndex = 0;
      }
      return reg.test(path);
    } else if (pattern instanceof RegExp) {
      if (pattern.global) {
        pattern.lastIndex = 0;
      }
      return pattern.test(path);
    } else if (Array.isArray(pattern)) {
      return pattern.some(item => this.pathMatch(item, path, isReturnTrue));
    } else {
      return isReturnTrue;
    }
  }
}
