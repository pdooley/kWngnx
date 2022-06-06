/**********************************************************************
 *
 * kwNg/ctrl/Views/kwViewsCtrlApi.ts
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
import { Component }        from '@angular/core';

import { kwBSApisList }     from "@kw/ng/bs"
import { kwNgCtrlApi }      from "@kw/ng/class";

import { kwViewsApi }       from "./kwViewsApi";

//@formatter:off


const sSTATE: string = "views";


@Component({
	selector: 'kw-views-ctrl-api',
	template: `<br>`,
})
export class kwViewsCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwBSApisList,
		srvcDest: kwViewsApi )
	{
		super(srvcSrc, srvcDest, sSTATE);
		//console.log("kwViewsCtrlApi::constructor() called");
	}
}
