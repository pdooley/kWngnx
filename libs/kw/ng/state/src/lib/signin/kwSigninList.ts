/**********************************************************************
 *
 * kwNg/state/signin/kwSigninList.ts
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


const sTAG_ID: string       = "id";


@Injectable()
export class kwSigninList extends kwNgStDataList
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(
			srvcTrace,
			sTAG_ID   );

		//console.log("kwSigninList::constructor() called.");
	}

//@formatter:on

}
