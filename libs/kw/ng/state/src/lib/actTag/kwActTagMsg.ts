/**********************************************************************
 *
 * kwNg/state/actTag/kwActTagMsg.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:on
import { Injectable }	            from '@angular/core';

import { kwBSTraceVal }     from "@kw/ng/bs";
import { kwNgStMsg }              from "@kw/ng/class";

import { kwActTagApi }                 from "./kwActTagApi";
//@formatter:off


@Injectable()
export class kwActTagMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwActTagApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sTag, "::constructor() called.");
	}
}
