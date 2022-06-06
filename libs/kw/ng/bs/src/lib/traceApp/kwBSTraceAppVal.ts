/**********************************************************************
 *
 * kwNg/BS/traceApp/kwBSTraceAppVal.ts
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
import {EventEmitter }      from '@angular/core';
import {Injectable }	    from '@angular/core';

import {kw }                from "@kw/base/core";
import {kwBSTraceVal }      from "@kw/ng/bs";
import {kwNgStDataVal }     from "@kw/ng/class";
//@formatter:on


@Injectable()
export class kwBSTraceAppVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
        super(srvcTrace);
		//console.log(this.sClass,"::constructor() called.");
	}

	public traceApp(): boolean
	{
		return this.get();
	}

}
