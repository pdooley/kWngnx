/**********************************************************************
 *
 * kwNg/BS/srvc/kwBSSrvcCtrlApi.ts
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
import {Component }        from '@angular/core';

import {kwBSApisList }     from "@kw/ng/bs";
import {kwNgCtrlApi }      from "@kw/ng/class";

import {kwBSSrvcApi }      from "./kwBSSrvcApi";

//@formatter:off


const sSTATE: string = "srvc";


@Component({
	selector: 'kw-bootstrap-srvc-ctrl-api',
	template: `<br>`,
})
export class kwBSSrvcCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwBSApisList,
		srvcDst: kwBSSrvcApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwBSSrvcCtrlApi::constructor() called");
	}
}
