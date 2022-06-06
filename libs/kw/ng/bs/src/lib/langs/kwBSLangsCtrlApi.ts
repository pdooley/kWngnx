/**********************************************************************
 *
 * kwNg/ctrl/langs/kwBSLangsCtrlApi.ts
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
import {kwBSLangsApi }     from "./kwBSLangsApi";
import {kwNgCtrlApi }      from "@kw/ng/class";
//@formatter:off


const sSTATE: string = "languages";


@Component({
	selector: 'kw-bootstrap-langs-ctrl-api',
	template: `<br>`,
})
export class kwBSLangsCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwBSApisList,
		srvcDst: kwBSLangsApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwBSLangsCtrlApi::constructor() called");
	}
}
