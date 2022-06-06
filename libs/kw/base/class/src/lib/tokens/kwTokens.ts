/**********************************************************************
 *
 * kw/class/tokens/kwTokens.ts
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
import {kw }               from "@kw/base/core";
import {kwTokenMap }       from "@kw/base/class";
import {kwTokenType }      from "@kw/base/class";
//@formatter:on

export class kwTokens
{
	map: kwTokenMap;

	constructor(private list: kwTokenType[])
	{
		//console.log("kwTokens::constructor() called");
	}

	init(): boolean
	{
		//console.log("kwTokens::init() called.");

		if (!kw.isArray(this.list))
		{
			console.error("kwTokens::init() list is invalid.");
			return false;
		}
		//console.info("kwTokens::init() list ", this.list);

		const map: kwTokenMap = new kwTokenMap(this.list);
		if (!map.init())
		{
			console.error("kwBS()::init() error creating map.");
			return false;
		}
		//console.info("kwBS()::init() map is ", map);
		this.map = map;

		return true;
	}

	getList(): kwTokenType[]
	{
		return this.list;
	}

	getMap(): kwTokenMap
	{
		return this.map;
	}

	toString(): string
	{
		return this.constructor.name;
	}

	static is(obj: object): boolean
	{
		return kw.is(obj, kwTokens)
	}
}

