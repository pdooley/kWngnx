//@formatter:on
import {Injectable}         from '@angular/core';

import {kwBSSrvcsMap}       from "@kw/ng/bs";
import {kwBSTokensMap}      from "@kw/ng/bs";
import {kwStMsgFcty}          from "@kwState/kwStMsgFcty";

import {kwSigninLinkedInCBApi}        from "./kwSigninLinkedInCBApi";
//@formatter:off


@Injectable()
export class kwSigninLinkedInCBMsgFcty extends kwStMsgFcty
{
	constructor(
		srvcApi: kwSigninLinkedInCBApi,
		srvcSrvcs: kwBSSrvcsMap,
		srvcTokens: kwBSTokensMap   )
	{
		super(srvcApi, srvcSrvcs, srvcTokens);
		//console.log("itkGuestNoti::constructor() called.");
	}
}
