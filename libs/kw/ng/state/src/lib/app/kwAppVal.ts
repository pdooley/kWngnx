/**********************************************************************
 *
 * kwNg/state/app/kwAppVal.ts
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

import { kwApp }            from "@kw/base/class";
import { kwAppEnum }        from "@kw/base/class";
import { kwAppLoggedOut}    from "@kw/base/class";
import { kwBSTraceVal }     from "@kw/ng/bs";
import { kwNgStDataVal }    from "@kw/ng/class";

//@formatter:on


const APP = new kwAppLoggedOut();

@Injectable()
export class kwAppVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);

		//console.log(this.sTag,"::constructor() called.");
		this.data = APP;
	}

	public get(): kwApp
	{
		return <kwApp>super.get();
	}

	public isVerify(): boolean
	{
		return this.get().isVerify();
	}

	public isLogout(): boolean
	{
		return this.get().isLogout();
	}

}
