/**********************************************************************
 *
 * kwNg/state/cred/kwCredVal.ts
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
import { Injectable }	    from '@angular/core';

import { kwCred }           from "@kw/base/class";
import { kwNgStDataVal }    from "@kw/ng/class";
import { kwBSTraceVal }     from "@kw/ng/bs";

//@formatter:on

@Injectable()
export class kwCredVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);

		//console.log(this.sTag,"::constructor() called.");
	}

	public get(): kwCred
	{
		return <kwCred>super.get();
	}
}
