/**********************************************************************
 *
 * kwNg/BS/token/kwBSTokenMsg.ts
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
import {kwNgStMsg }        from "@kw/ng/class";

import {kwBSTokenApi }      from "./kwBSTokenApi";

//@formatter:off


@Injectable()
export class kwBSTokenMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwBSTokenApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sClass, "::constructor() called.");
	}
}
