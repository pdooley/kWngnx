/**********************************************************************
 *
 * kwNg/state/id/kwIdKeyVal.ts
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

import { kwNgStDataVal }    from "@kw/ng/class";
import { kwBSTraceVal }     from "@kw/ng/bs";
//@formatter:on

@Injectable()
export class kwIdKeyVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);

		//console.log(this.sTag,"::constructor() called.");
	}

	public get(): number
	{
		return <number>super.get();
	}
}
