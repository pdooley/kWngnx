/**********************************************************************
 *
 * kwNg/state/org/kwOrgList.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import { Injectable }	            from '@angular/core';

import { kwNgStDataList }            from "@kw/ng/class";
import { kwBSTraceVal }             from "@kw/ng/bs";


const sTAG_ID: string       = "id";


@Injectable()
export class kwOrgList extends kwNgStDataList
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(
			srvcTrace,
			sTAG_ID     );

		//console.log(this.sTag,"::constructor() called.");
	}

//@formatter:on

}
