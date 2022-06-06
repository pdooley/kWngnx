/**********************************************************************
 *
 * kwNg/state/actTagTag/kwActTagMsgFcty.ts
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

import { kwActTagApi }      from "./kwActTagApi";
import { kwBSSrvcsMap }     from "@kw/ng/bs";
import { kwBSTokensMap }    from "@kw/ng/bs";
import { kwStMsgFcty }        from "@kwState/kwStMsgFcty";
//@formatter:off


@Injectable()
export class kwActTagMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwActTagApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log("itkGuestMsg::constructor() called.");
	}
}
