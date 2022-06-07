/**********************************************************************
 *
 * kwNg/ctrl/redirect/kwRedirectCtrlApi.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/
//@formatter:off

import { Component }            from '@angular/core';

import { kwApisList }           from "@kw/ng/state";
import { kwNgCtrlApi }          from "@kw/ng/class";

import { kwRedirectApi }        from "./kwRedirectApi";

//@formatter:off


const sSTATE: string = "redirect";


@Component({
	selector: 'kw-redirect-ctrl-api',
	template: `<br>`,
})
export class kwRedirectCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwApisList,
		srvcDst: kwRedirectApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwRedirectCtrlApi::constructor() called");
	}
}
