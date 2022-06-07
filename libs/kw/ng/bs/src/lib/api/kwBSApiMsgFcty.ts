/**********************************************************************
 *
 * kwNg/BS/api/kwBSApiMsgFcty.ts
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
import {kwStMsgFcty }      from "@kw/base/state";

import {kwBSApiApi }      from "./kwBSApiApi";

//@formatter:off


@Injectable()
export class kwBSApiMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwBSApiApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log("itkGuestMsg::constructor() called.");
	}
}
