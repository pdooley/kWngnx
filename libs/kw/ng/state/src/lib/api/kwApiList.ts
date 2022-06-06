/**********************************************************************
 *
 * kwNg/state/api/kwApiList.ts
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

import { kwNgStDataList }           from "@kw/ng/class";
import { kwBSTraceVal }             from "@kw/ng/bs";


const sTAG_TYPE: string = "api";


@Injectable()
export class kwApiList extends kwNgStDataList
//@formatter:on
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace, sTAG_TYPE);

		//console.log(this.sTag,"::constructor() called.");
	}
}
