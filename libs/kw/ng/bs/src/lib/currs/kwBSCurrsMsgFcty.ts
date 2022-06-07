/**********************************************************************
 *
 * kwNg/BS/currs/kwBSCurrsMsgFcty.ts
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

import {kwBSCurrsApi }     from "./kwBSCurrsApi";

//@formatter:off


@Injectable()
export class kwBSCurrsMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwBSCurrsApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log(this.sClass, "::constructor() called.");
	}
}
