/**********************************************************************
 *
 * kw/kw.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
//@formatter:on
// @ts-ignore

enum boolEnum{
  true = 0,
  false
}


export class kw
{
  static clone(obj: any): any
  {
    let cloneObj = new (<any>this.constructor());
    for (let attribut in obj) {
      // @ts-ignore
      if (typeof this[attribut] === "object") {
        cloneObj[attribut] = obj.clone();
      } else {
        cloneObj[attribut] = obj[attribut];
      }
    }
    return cloneObj;
  }

  static identity<T>(arg: T): T
  {
    return arg;
  }

  static getProperty<T, K extends keyof T>(obj: T, key: K)
  {
    return obj[key];
  }

  static isArray(val: object): boolean
  {
    //return util.isAray(val)
    return (val instanceof Array)
  }

  static isBoolean(val: unknown): boolean
  {
    return typeof val === "boolean"
  }

  static isFunction(val: object): boolean
  {
    return (typeof val === "function")
  }

  static isMap(val: object): boolean
  {
    return (val instanceof Map)
  }

  static isNull(obj: unknown): boolean
  {
    if (obj == null)
    {
      return true;
    }
    if (obj === null)
    {
      return true;
    }
    if (typeof obj === 'undefined')
    {
      return true;
    }

    return false;
  }

  static isNumber(val: unknown): boolean
  {
    return (typeof val === "number")
  }

  static isString(val: unknown): boolean
  {
    return (typeof val === "string")
  }

  static isValid(val: any): boolean
  {
    return !kw.isNull(val);
  }

  static is(obj: any, cstor: any): boolean
  {
    if (kw.isNull(obj))
    {
      //console.info("kw::is() obj is not valid.");
      return false;
    }

    if (kw.isNull(cstor))
    {
      console.error("kw::is() cstor is not valid.");
      return false;
    }
    return (obj instanceof cstor);
  }

  static isArrObj(obj: any, cstor: any): boolean
  {
    if (kw.isNull(obj))
    {
      //console.info("kw::isArr() obj is not valid.");
      return false;
    }

    if (kw.isNull(cstor))
    {
      console.error("kw::is() cstor is not valid.");
      return false;
    }

    if (!kw.isArray(obj))
    {
      console.error("kw::isArr() obj is not an array.");
      return false;
    }

    if (obj.length > 0)
    {
      console.error("kw::isArr() obj is empty.");
      return false;
    }

    return (obj[0] instanceof cstor);
  }

  static in(val: number, kwEnum: any): boolean
  {
    if (!kw.isNumber(val))
    {
      console.error("kw::in() val is not valid.");
      debugger;
      return false;
    }
    //console.info("kw::toEnum() val is ", val);

    if (kw.isNull(kwEnum))
    {
      console.error("kw::in() kwEnum is not valid.");
      return false;
    }

    return (val in kwEnum);
  }

  static toBool(val: unknown): boolean
  {
    //console.log("classXFieldArr::transformBool() called.");

    if (!kw.isNumber(val))
    {
      console.error("kw::toBool() val is invalid.");
      debugger;
      return false;
    }

    // @ts-ignore
    if (!(val in boolEnum))
    {
      console.error("kw::toBool() val is invalid.");
      return false;
    }

    return val === 1;
  }


  static toEnum(sType: string, kwEnum: any): number
  {
    //console.log("kw::toEnum() called.");

    if (!kw.isString(sType))
    {
      console.error("kw::toEnum() sType is not valid.");
      debugger;
      return -1;
    }
    //console.info("kw::toEnum() sType is ", sType);

    if (kw.isNull(kwEnum))
    {
      console.error("kw::toEnum() kwEnum is not valid.");
      return -1;
    }

    return kwEnum[ sType ];
  }

  static toNumber(val: unknown): number
  {
    //console.log("kw::toNumber() called.");

    if (kw.isNull(val))
    {
      console.error("kw::toNumber() val is not valid.");
      debugger;
      return -1;
    }

    if (kw.isNumber(val))
    {
      return <number>val;
    }

    if (kw.isBoolean(val))
    {
      return val ? 1 : 0;
    }

    if (kw.isString(val))
    {
      return parseInt(<string>val);
    }

    console.error("kw::toNumber() val is not valid.");

    return -1;
  }

  static toString(nType: number, kwEnum: any): string
  {
    //console.log("kw::toString() called.");

    if (!kw.isNumber(nType))
    {
      console.error("kw::toString() nType is not valid.");
      debugger;
      return "";
    }
    //console.info("kw::toString() nType is ", nType);

    if (kw.isNull(kwEnum))
    {
      console.error("kw::toString() kwEnum is not valid.");
      // @ts-ignore
      return "";
    }

    return kwEnum[ nType ];
  }

  static toCamelCase(str: string, delimiters: string)
  {
    let DEFAULT_REGEX = /[-_]+(.)?/g;

    function toUpper(match: string, group1: string)
    {
      return group1 ? group1.toUpperCase() : '';
    }

    return function()
    {
      return str.replace(delimiters ? new RegExp('[' + delimiters + ']+(.)?', 'g') : DEFAULT_REGEX, toUpper);
    }
  }


}
