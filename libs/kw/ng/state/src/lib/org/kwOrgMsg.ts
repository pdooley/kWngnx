/**********************************************************************
 *
 * kwNg/state/org/kwOrgMsg.ts
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

import { kwOrgApi }         from "./kwOrgApi";
//@formatter:off


@Injectable()
export class kwOrgMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwOrgApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sTag, "::constructor() called.");
	}
}
