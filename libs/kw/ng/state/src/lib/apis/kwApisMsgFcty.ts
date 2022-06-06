/**********************************************************************
 *
 * kwNg/state/accs/kwApisMsgFcty.ts
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
import { kwStMsgFcty }        from "@kwState/kwStMsgFcty";

import { kwApisApi }        from "./kwApisApi";

//@formatter:off


@Injectable()
export class kwApisMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwApisApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log("itkGuestMsg::constructor() called.");
	}
}
