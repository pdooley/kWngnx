/**********************************************************************
 *
 * kwNg/ctrl/org/kwOrgCtrlApi.ts
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
import { kwNgCtrlApi }      from "@kw/ng/class";
import { kwOrgApi }        from "@kw/ng/state";
//@formatter:off


const sSTATE: string = "org";


@Component({
	selector: 'kw-org-ctrl-api',
	template: `<br>`,
})
export class kwOrgCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwApisList,
		srvcDst: kwOrgApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwOrgCtrlApi::constructor() called");
	}
}
