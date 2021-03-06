/**********************************************************************
 *
 * kwNg/state/metrics/kwMetricsMsg.ts
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

import { kwMetricsApi }     from "./kwMetricsApi";

//@formatter:off


@Injectable()
export class kwMetricsMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwMetricsApi)
	{
		super(srvcTrace, srvcApi);
		//console.log("kwMetricsMsg::constructor() called.");
	}
}
