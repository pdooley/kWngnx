/**********************************************************************
 *
 * kwNg/BS/mdl/kwBSMdlCtrlApi.ts
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
import {kwBSMdlApi }      from "./kwBSMdlApi";
import {kwNgCtrlApi }      from "@kw/ng/class";
//@formatter:off


const sSTATE: string = "mdl";


@Component({
	selector: 'kw-bootstrap-mdl-ctrl-api',
	template: `<br>`,
})
export class kwBSMdlCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwBSApisList,
		srvcDst: kwBSMdlApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwBSMdlCtrlApi::constructor() called");
	}
}
