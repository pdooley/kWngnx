/**********************************************************************
 *
 * kwNg/BS/langs/kwBSLangsMsgFcty.ts
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
import {kwBSLangsApi }     from "./kwBSLangsApi";
import {kwStMsgFcty }        from "@kw/base/state";
//@formatter:off


@Injectable()
export class kwBSLangsMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwBSLangsApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log(this.sClass, "::constructor() called.");
	}
}
