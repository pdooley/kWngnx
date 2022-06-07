/**********************************************************************
 *
 * kwNg/state/auth0/kwAuth0MsgFcty.ts
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
import { Injectable }       from '@angular/core';

import { kwBSSrvcsMap }     from "@kw/ng/bs";
import { kwBSTokensMap }    from "@kw/ng/bs";
import { kwStMsgFcty }        from "@kw/base/state";

import { kwAuth0Api }       from "./kwAuth0Api";

//@formatter:off


@Injectable()
export class kwAuth0MsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwAuth0Api,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
   	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log("kwAuth0MsgFcty::constructor() called.");
	}
}
