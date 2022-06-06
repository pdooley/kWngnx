/**********************************************************************
 *
 * kwNg/BS/autoLogin/kwBSAutoLoginVal.ts
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
export class kwBSAutoLoginVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
        super(srvcTrace);
		//console.log(this.sClass,"::constructor() called.");
	}

	public autoLogin(): boolean
	{
		return this.get();
	}

}
