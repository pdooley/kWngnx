/**********************************************************************
 *
 * kwNg/BS/TZs/kwBSTZsMsgFcty.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:on
import {Injectable }       from '@angular/core';

import {kwBSSrvcsMap }     from "@kw/ng/bs";
import {kwBSTokensMap }    from "@kw/ng/bs";
import {kwStMsgFcty }        from "@kw/base/state";

import {kwBSTZsApi }       from "./kwBSTZsApi";

//@formatter:off


@Injectable()
export class kwBSTZsMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwBSTZsApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log(this.sClass, "::constructor() called.");
	}
}
