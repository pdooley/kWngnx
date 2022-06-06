/**********************************************************************
 *
 * kwNg/state/actTags/kwActTagsMsgFcty.ts
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

import { kwActTagsApi }     from "./kwActTagsApi";
import { kwBSSrvcsMap }     from "@kw/ng/bs";
import { kwBSTokensMap }    from "@kw/ng/bs";
import { kwStMsgFcty }        from "@kwState/kwStMsgFcty";
//@formatter:off


@Injectable()
export class kwActTagsMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwActTagsApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log("itkGuestMsg::constructor() called.");
	}
}
