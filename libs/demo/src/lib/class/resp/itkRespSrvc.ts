/**********************************************************************
 *
 * app/class/resp/itkRespSrvc.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

// @formatter:off
import { kw }		            from "@kw/base/core";

import { itkRespType }			from "./itkRespType";
// @formatter:on


export class itkRespSrvc
{

	static isType(obj: object): boolean
	{
		return kw.is(obj, itkRespType)
	}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
  static in(nVal: number): boolean
	{
		return false
	}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
  static toEnum(sVal: string): number
	{
		return -1;
	};
}

