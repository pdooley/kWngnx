/**********************************************************************
 *
 * kwNg/BS/token/kwBSTokenList.ts
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

import {kwTokenType }      from "@kw/base/class";
import {kwNgStDataList }   from "@kw/ng/class";
import {kwBSTraceVal }     from "@kw/ng/bs";


const sTAG_ID: string       = "id";


@Injectable()
export class kwBSTokenList extends kwNgStDataList
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(
			srvcTrace,
			sTAG_ID     );

		//console.log(this.sClass,"::constructor() called.");
	}

//@formatter:on

	public get(): kwTokenType[]
	{
		return <kwTokenType[]>super.get();
	}
}
