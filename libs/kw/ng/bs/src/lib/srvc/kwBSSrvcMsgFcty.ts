/**********************************************************************
 *
 * kwNg/BS/srvc/kwBSSrvcMsgFcty.ts
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

import {kwBSSrvcApi }      from "./kwBSSrvcApi";

//@formatter:off


@Injectable()
export class kwBSSrvcMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwBSSrvcApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log(this.sClass, "::constructor() called.");
	}
}
