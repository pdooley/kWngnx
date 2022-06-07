/**********************************************************************
 *
 * kwNg/main/signup/kwSignupCtrlList.ts
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
import { Component }        from "@angular/core";

import { kwHttpMsg }        from "@kw/ng/http";
import { kwNgCtrlDataList } from "@kw/ng/class";

import { kwSignupMsg }         from "./kwSignupMsg";
import { kwSignupList }        from "./kwSignupList";

//@formatter:on


@Component({
	selector: 'kw-signup-ctrl-list',
	template: `<br>`,
})
export class kwSignupCtrlList extends kwNgCtrlDataList
{
	constructor(
		srvcMsg: kwSignupMsg,
	    srvcData: kwSignupList,
	    srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwSignupCtrlList::constructor() called");
	}
}
