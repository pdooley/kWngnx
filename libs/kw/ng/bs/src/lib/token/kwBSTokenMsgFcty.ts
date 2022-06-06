/**********************************************************************
 *
 * kwNg/state/token/kwBSTokenMsgFcty.ts
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
import {kwStMsgFcty }        from "@kwState/kwStMsgFcty";

import {kwBSTokenApi }     from "./kwBSTokenApi";

//@formatter:off


@Injectable()
export class kwBSTokenMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwBSTokenApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log(this.sClass, "::constructor() called.");
	}
}
