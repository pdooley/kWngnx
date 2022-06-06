/**********************************************************************
 *
 * kwNg/BS/currs/kwBSCurrsMsg.ts
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
import {Injectable }	    from '@angular/core';

import {kwBSTraceVal }     from "@kw/ng/bs";
import {kwBSCurrsApi }     from "./kwBSCurrsApi";
import {kwNgStMsg }        from "@kw/ng/class";
//@formatter:off


@Injectable()
export class kwBSCurrsMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwBSCurrsApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sClass, "::constructor() called.");
	}
}
