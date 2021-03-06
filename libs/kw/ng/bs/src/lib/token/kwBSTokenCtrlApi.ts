/**********************************************************************
 *
 * kwNg/BS/token/kwBSTokenCtrlApi.ts
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

import {kwBSTokenApi }      from "./kwBSTokenApi";

//@formatter:off


const sSTATE: string = "token";


@Component({
	selector: 'kw-bootstrap-token-ctrl-api',
	template: `<br>`,
})
export class kwBSTokenCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwBSApisList,
		srvcDst: kwBSTokenApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwBSTokenCtrlApi::constructor() called");
	}
}
