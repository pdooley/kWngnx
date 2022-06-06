/**********************************************************************
 *
 * kwNg/ctrl/TZ/kwBSTZCtrlMdl.ts
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

import {kwBSMdlsList }     from "@kw/ng/bs";
import {kwNgBSCtrlMdl }    from "@kw/ng/class";

import {kwBSTZMdl }        from "./kwBSTZMdl";

//@formatter:off


const sSTATE: string = "timezone";


@Component({
	selector: 'kw-bootstrap-timezone-ctrl-mdl',
	template: `<br>`,
})
export class kwBSTZCtrlMdl extends kwNgBSCtrlMdl
{
	constructor(
		srvcMdl: kwBSTZMdl,
		srvcMdls: kwBSMdlsList )
	{
		super(srvcMdl, srvcMdls, sSTATE);
		//console.log("kwBSTZCtrlMdl::constructor() called");
	}
}
