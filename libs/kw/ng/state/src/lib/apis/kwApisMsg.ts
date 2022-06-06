/**********************************************************************
 *
 * kwNg/state/accs/kwApisMsg.ts
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

import { kwBSTraceVal }             from "@kw/ng/bs";
import { kwNgStMsg }                from "@kw/ng/class";

import { kwApisApi }                from "./kwApisApi";
//@formatter:off


@Injectable()
export class kwApisMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwApisApi       )
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sTag, "::constructor() called.");
	}
}
