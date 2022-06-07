/**********************************************************************
 *
 * app/class/crit/itkCritSrvc.ts
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

import { itkCritType }			from "./itkCritType";
// @formatter:on


export class itkCritSrvc
{

	static isType(obj: object): boolean
	{
		return kw.is(obj, itkCritType)
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

