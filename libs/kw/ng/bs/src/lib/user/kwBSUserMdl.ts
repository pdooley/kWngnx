/**********************************************************************
 *
 * kwNg/BS/User/kwBSUserMdl.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {Injectable }	    from '@angular/core';

import {kwBSTraceVal }      from "@kw/ng/bs";
import {kwNgStMdl }         from "@kw/ng/class";

//@formatter:off

@Injectable()
export class kwBSUserMdl extends kwNgStMdl
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);
		//console.log(this.sClass,"::constructor() called.");
	}
}