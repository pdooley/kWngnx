/**********************************************************************
 *
 * kwNg/BS/init/kwBSInitMsg.ts
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
import {kwBSInitApi }      from "./kwBSInitApi";
import {kwNgStMsg }        from "@kw/ng/class";
//@formatter:off


@Injectable()
export class kwBSInitMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwBSInitApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sClass, "::constructor() called.");
	}
}
