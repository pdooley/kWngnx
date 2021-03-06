/**********************************************************************
 *
 * kw/class/srvc/kwTZSrvc.ts
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
import {kw }		            from "@kw/base/core";

import {kwTZType }			    from "./kwTZType";
//@formatter:on


export class kwTZSrvc
{

	static isType(obj: object): boolean
	{
		return kw.is(obj, kwTZType)
	}

	static in(nVal: number): boolean
	{
		return false
	}

	static toEnum(sVal: string): number
	{
		return -1;
	}
}

