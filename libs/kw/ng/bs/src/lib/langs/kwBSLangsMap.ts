/**********************************************************************
 *
 * kwNg/BS/langs/kwBSLangsMap.ts
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
import {Injectable }	        from '@angular/core';

import {kwLangType }           from "@kw/base/class";
import {kwLangMap }            from "@kw/base/class";
import {kwBSTraceVal }         from "@kw/ng/bs";
import {kwMap }                from "@kw/base/class";
import {kwNgStDataMap }        from "@kw/ng/class";


const sTAG_ID: string = "id";


@Injectable()
export class kwBSLangsMap extends kwNgStDataMap
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
		//console.log("kwBSLangsMap::change() called.");
		this.theSignal.emit(<kwLangType[]>data);
	}

	protected createMap(data: object[]): kwMap
	{
		//console.log("kwBSLangsMap::createMap() called.");
		const map = new kwLangMap(data);
		if (!map.init())
		{
			console.error("kwBSLangsMap::createMap() error creating map.");
			return;
		}

		return map;
	}

	public get(): kwLangType[]
	{
		return <kwLangType[]>super.get();
	}
}
