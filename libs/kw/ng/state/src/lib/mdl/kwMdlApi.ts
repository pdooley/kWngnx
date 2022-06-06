/**********************************************************************
 *
 * kwNg/state/mdl/kwMdlApi.ts
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
import { kwNgStApi }        from "@kw/ng/class";
//@formatter:off


@Injectable()
export class kwMdlApi extends kwNgStApi
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);
		//console.log("kwMdlApi::constructor() called.");
	}
}
