/**********************************************************************
 *
 * kwNg/BS/currs/kwBSCurrsMap.ts
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
import {Injectable }	    from '@angular/core';

import {kwCurrType }       from "@kw/base/class";
import {kwCurrMap }        from "@kw/base/class";
import {kwBSTraceVal }     from "@kw/ng/bs";
import {kwMap }            from "@kw/base/class";
import {kwNgStDataMap }    from "@kw/ng/class";


const sTAG_ID: string = "id";


@Injectable()
export class kwBSCurrsMap extends kwNgStDataMap
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(
			srvcTrace,
			sTAG_ID     );

		//console.log(this.sClass,"::constructor() called.");
	}

//@formatter:on

	protected broadcast(data: object[]): void
	{
		//console.log("kwBSCurrsMap::change() called.");
		this.theSignal.emit(<kwCurrType[]>data);
	}

	protected createMap(data: object[]): kwMap
	{
		//console.log("kwBSCurrsMap::createMap() called.");
		const map = new kwCurrMap(data);
		if (!map.init())
		{
			console.error("kwBSCurrsMap::createMap() error creating map.");
			return;
		}
		return map;
	}

	public get(): kwCurrType[]
	{
		return <kwCurrType[]>super.get();
	}
}
