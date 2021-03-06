/**********************************************************************
 *
 * kwNg/main/lang/kwBSLangCtrlList.ts
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
import {Component }            from "@angular/core";

import {kwHttpMsg }            from "@kw/ng/http";
import {kwNgCtrlDataList }     from "@kw/ng/class";

import {kwBSLangMsg }          from "./kwBSLangMsg";
import {kwBSLangList }         from "./kwBSLangList";
//@formatter:on


@Component({
	selector: 'kw-bootstrap-lang-ctrl-list',
	template: `<br>`,
})
export class kwBSLangCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwBSLangMsg,
	                srvcData: kwBSLangList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwBSLangCtrlList::constructor() called");
	}
}
