/**********************************************************************
 *
 * kwNg/state/views/kwViewsMsg.ts
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
import { Injectable }       from '@angular/core';

import { kwBSTraceVal }     from "@kw/ng/bs";
import { kwNgStMsg }        from "@kw/ng/class";

import { kwViewsApi }       from "./kwViewsApi";

//@formatter:off


@Injectable()
export class kwViewsMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwViewsApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sTag, "::constructor() called.");
	}
}
