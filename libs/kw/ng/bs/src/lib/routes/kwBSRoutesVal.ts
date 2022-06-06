/**********************************************************************
 *
 * kwNg/BS/routes/kwBSRoutesVal.ts
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
import {Injectable }       from '@angular/core';

import {kwBSTraceVal }     from "@kw/ng/bs";
import {kwNgStDataVal }    from "@kw/ng/class";
import {kwRoutes}          from "@kw/base/class";

//@formatter:on


@Injectable()
export class kwBSRoutesVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);

		//console.log(this.sClass,"::constructor() called.");
	}

	public get(): kwRoutes
	{
		//console.log(this.sClass, "::getString() called.");
		return <kwRoutes>super.get();
	}
}
