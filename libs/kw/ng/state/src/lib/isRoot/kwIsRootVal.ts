/**********************************************************************
 *
 * kwNg/state/isRoot/kwIsRootVal.ts
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

import { kwNgStDataVal }      from "@kw/ng/class";
import { kwBSTraceVal }             from "@kw/ng/bs";
//@formatter:on

@Injectable()
export class kwIsRootVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);

		//console.log(this.sTag,"::constructor() called.");
		this.data = false;
	}

	public get(): boolean
	{
		return <boolean>super.get();
	}

	public isRoot(): boolean
	{
		return this.get();
	}
}
