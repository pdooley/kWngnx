/**********************************************************************
 *
 * kwNg/state/actTag/kwActTagCtrlApi.ts
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

import { kwApisList }       from "@kw/ng/state";
import { kwNgCtrlApi }      from "@kw/ng/class";

import { kwActTagApi }      from "./kwActTagApi";
//@formatter:off


const sSTATE: string = "activityTag";


@Component({
	selector: 'kw-act-tag-ctrl-api',
	template: `<br>`,
})
export class kwActTagCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwApisList,
		srvcDst: kwActTagApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwActTagCtrlApi::constructor() called");
	}
}
