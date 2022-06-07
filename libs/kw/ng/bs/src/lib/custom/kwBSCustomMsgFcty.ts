/**********************************************************************
 *
 * kwNg/state/bSCustom/kwBSCustomMsgFcty.ts
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
import {Injectable }	    from '@angular/core';

import {kwBSCustomApi }    from "./kwBSCustomApi";
import {kwBSSrvcsMap }     from "@kw/ng/bs";
import {kwBSTokensMap }    from "@kw/ng/bs";
import {kwStMsgFcty }        from "@kw/base/state";
//@formatter:off


@Injectable()
export class kwBSCustomMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwBSCustomApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log(this.sClass, "::constructor() called.");
	}
}
