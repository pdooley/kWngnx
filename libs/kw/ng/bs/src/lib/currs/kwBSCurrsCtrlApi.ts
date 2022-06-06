/**********************************************************************
 *
 * kwNg/BS/currs/kwBSCurrsCtrlApi.ts
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
import {kwBSCurrsApi }     from "./kwBSCurrsApi";
import {kwNgCtrlApi }      from "@kw/ng/class";
//@formatter:off


const sSTATE: string = "currencies";


@Component({
	selector: 'kw-bootstrap-currs-ctrl-api',
	template: `<br>`,
})
export class kwBSCurrsCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwBSApisList,
		srvcDst: kwBSCurrsApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwBSCurrsCtrlApi::constructor() called");
	}
}
