/**********************************************************************
 *
 * kwNg/BS/TZs/kwBSTZsMap.ts
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
import {Injectable }       from '@angular/core';

import {kwBSTraceVal }     from "@kw/ng/bs";
import {kwMap }            from "@kw/base/class";
import {kwNgStDataMap }    from "@kw/ng/class";
import {kwTZType }         from "@kw/base/class";
import {kwTZMap }          from "@kw/base/class";


const sTAG_ID: string = "id";


@Injectable()
export class kwBSTZsMap extends kwNgStDataMap
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
		//console.log(this.sClass, "::change() called.");
		this.theSignal.emit(<kwTZType[]>data);
	}

	protected createMap(data: object[]): kwMap
	{
		//console.log(this.sClass, "::createMap() called.");
		const map = new kwTZMap(data);
		if (!map.init())
		{
			console.error(this.sClass, "::createMap() error creating map.");
			return;
		}

		return map;
	}

	public get(): kwTZType[]
	{
		return <kwTZType[]>super.get();
	}
}
