/**********************************************************************
 *
 * kwNg/state/accCreate/kwAccCreateMsg.ts
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
import { Injectable }           from '@angular/core';

import { kwAccCreateApi }       from "./kwAccCreateApi";
import { kwBSTraceVal }         from "@kw/ng/bs";
import { kwNgStMsg }            from "@kw/ng/class";

//@formatter:off


@Injectable()
export class kwAccCreateMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwAccCreateApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sTag, "::constructor() called.");
	}
}
