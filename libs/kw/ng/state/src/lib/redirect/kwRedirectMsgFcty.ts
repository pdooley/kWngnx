/**********************************************************************
 *
 * kwNg/state/redirect/kwRedirectMsgFcty.ts
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

import { kwRedirectApi }    from "./kwRedirectApi";

//@formatter:off


@Injectable()
export class kwRedirectMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwRedirectApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log("itkGuestMsg::constructor() called.");
	}
}
