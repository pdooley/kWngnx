/**********************************************************************
 *
 * kwNg/BS/mdl/kwBSMdlMsg.ts
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
import {kwBSMdlApi }      from "./kwBSMdlApi";
import {kwNgStMsg }        from "@kw/ng/class";
//@formatter:off


@Injectable()
export class kwBSMdlMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwBSMdlApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sClass, "::constructor() called.");
	}
}
