/**********************************************************************
 *
 * kwNg/BS/cred/kwBSStatusVal.ts
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
import {Injectable }	    from '@angular/core';

import {kwNgStDataVal }     from "@kw/ng/class";
import {kwBSTraceVal }      from "@kw/ng/bs";
import {kwBSStatInit}       from "@kw/base/class";
import {kwBSStat}           from "@kw/base/class";
//@formatter:on


const DEFAULT = new kwBSStatInit();


@Injectable()
export class kwBSStatusVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);

		//console.log(this.sClass,"::constructor() called.");
		this.data = DEFAULT;
	}

	isBase(): boolean
	{
		//console.log(this.sClass,"::isBase() called.");

		const state: kwBSStat = this.get();
		if (!kwBSStat.is(state))
		{
			console.error(this.sClass,"::isBase() state is invalid.");
			return false;
		}

		return state.isBase();
	}

	isComplete(): boolean
	{
		//console.log(this.sClass,"::isComplete() called.");

		const state: kwBSStat = this.get();
		if (!kwBSStat.is(state))
		{
			console.error(this.sClass,"::isComplete() state is invalid.");
			return false;
		}

		return state.isComplete();
	}
}
