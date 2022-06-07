//@formatter:on
import {Injectable}         from '@angular/core';

import {kwBSSrvcsMap}       from "@kw/ng/bs";
import {kwBSTokensMap}      from "@kw/ng/bs";
import {kwStMsgFcty}          from "@kw/base/state";

import {kwSigninLinkedInApi}        from "./kwSigninLinkedInApi";
//@formatter:off


@Injectable()
export class kwSigninLinkedInMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwSigninLinkedInApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log("itkGuestNoti::constructor() called.");
	}
}
