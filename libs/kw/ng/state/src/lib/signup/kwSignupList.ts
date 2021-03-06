/**********************************************************************
 *
 * kwNg/state/signup/kwSignupList.ts
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


const sTAG_ID: string           = "_id";
const sTAG_TYPE: string         = "signup";


@Injectable()
export class kwSignupList extends kwNgStDataList
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(
			srvcTrace,
			sTAG_ID,
			sTAG_TYPE   );

		//console.log("kwSignupList::constructor() called.");
	}

//@formatter:on

}
