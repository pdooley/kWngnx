/**********************************************************************
 *
 * kwNg/BS/TZ/kwBSTZMsgFcty.ts
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

import {kwBSTZApi }        from "./kwBSTZApi";

//@formatter:off


@Injectable()
export class kwBSTZMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwBSTZApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log(this.sClass, "::constructor() called.");
	}
}
