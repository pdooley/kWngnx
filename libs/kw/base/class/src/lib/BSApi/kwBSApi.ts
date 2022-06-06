/**********************************************************************
 *
 * kw/class/BSApi/kwBSApi.ts
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
import {kw }		                from "@kw/base/core";
import {kwApi }                    from "@kw/base/class";
import {kwApiType }                from "@kw/base/class";
import {kwBS }                     from "@kw/base/class";
//@formatter:on


export class kwBSApi extends kwApi
{
	constructor(
		private BS: kwBS,
		type: kwApiType )
	{
		super(type)
		//console.log("kwBSApi::constructor() called");
	}

	static is(obj: object): boolean
	{
		return kw.is(obj, kwBSApi)
	}

}

