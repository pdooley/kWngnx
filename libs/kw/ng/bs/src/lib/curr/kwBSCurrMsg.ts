/**********************************************************************
 *
 * kwNg/BS/curr/kwBSCurrMsg.ts
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
import {Injectable }	   from '@angular/core';

import {kwBSTraceVal }     from "@kw/ng/bs";
import {kwBSCurrApi }      from "./kwBSCurrApi";
import {kwNgStMsg }        from "@kw/ng/class";
//@formatter:off


@Injectable()
export class kwBSCurrMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwBSCurrApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sClass, "::constructor() called.");
	}
}
