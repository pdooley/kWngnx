/**********************************************************************
 *
 * kwNg/BS/custom/kwBSCustomCtrlApi.ts
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
import {Component }             from '@angular/core';

import {kwBSCustomList }        from "@kw/ng/bs";

import {kwNgCtrlApi }           from "@kw/ng/class";

import {kwBSCustomApi }         from "./kwBSCustomApi";

//@formatter:off


const sSTATE: string = "bootstrap";


@Component({
	selector: 'kw-bootstrap-custom-ctrl-api',
	template: `<br>`,
})
export class kwBSCustomCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwBSCustomList,
		srvcDst: kwBSCustomApi)
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwBSCustomCtrlApi::constructor() called");
	}
}
