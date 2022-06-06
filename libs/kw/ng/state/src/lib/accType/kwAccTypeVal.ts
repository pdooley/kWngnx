/**********************************************************************
 *
 * kwNg/state/accType/kwAccTypeVal.ts
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

import { kwAccEnum }        from "@kw/base/class";
import { kwBSTraceVal }     from "@kw/ng/bs";
import { kwNgStDataVal }    from "@kw/ng/class";

//@formatter:on

@Injectable()
export class kwAccTypeVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);

		//console.log(this.sTag,"::constructor() called.");
	}

	public get(): kwAccEnum
	{
		return <kwAccEnum>super.get();
	}
}
