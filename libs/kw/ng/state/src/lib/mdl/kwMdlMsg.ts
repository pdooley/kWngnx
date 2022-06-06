/**********************************************************************
 *
 * kwNg/state/model/kwMdlMsg.ts
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
import { kwNgStMsg }      from "@kw/ng/class";

import { kwMdlApi }       from "./kwMdlApi";

//@formatter:off


@Injectable()
export class kwMdlMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwMdlApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sTag, "::constructor() called.");
	}
}
