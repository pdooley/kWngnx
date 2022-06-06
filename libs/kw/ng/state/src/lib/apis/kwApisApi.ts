/**********************************************************************
 *
 * kwNg/state/accs/kwApisApi.ts
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
export class kwApisApi extends kwNgStApi
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);
		//console.log("kwApiApi::constructor() called.");
	}
}
