/**********************************************************************
 *
 * kwNg/main/apis/kwApisCtrlList.ts
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
import { Component }                from "@angular/core";

import { kwHttpMsg }                from "@kw/ng/http";
import { kwNgCtrlDataList }         from "@kw/ng/class";

import { kwApisMsg }                from "./kwApisMsg";
import { kwApisList }               from "./kwApisList";

//@formatter:on


@Component({
	selector: 'kw-apis-ctrl-list',
	template: `<br>`,
})
export class kwApisCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwApisMsg,
	                srvcData: kwApisList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp);
		//console.log("kwApisCtrlList::constructor() called");
	}
}
