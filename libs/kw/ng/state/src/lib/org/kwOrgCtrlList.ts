/**********************************************************************
 *
 * kwNg/ctrl/org/kwOrgCtrlList.ts
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

import { kwNgCtrlDataList }   from "@kw/ng/class";
import { kwHttpMsg }                from "@kw/ng/http";

import { kwOrgList }           from "./kwOrgList";
import { kwOrgMsg }           from "./kwOrgMsg";
//@formatter:on


@Component({
	selector: 'kw-org-ctrl-list',
	template: `<br>`,
})
export class kwOrgCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwOrgMsg,
	                srvcData: kwOrgList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwOrgHttp::constructor() called");
	}
}
