/**********************************************************************
 *
 * kwNg/main/actTags/kwActTagsCtrlList.ts
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

import { kwActTagsMsg }             from "./kwActTagsMsg";
import { kwActTagsList }            from "./kwActTagsList";
import { kwHttpMsg }                from "@kwNgHttp/kwHttpMsg";
import { kwNgCtrlDataList }         from "@kw/ng/class";
//@formatter:on


@Component({
	selector: 'kw-act-tags-ctrl-list',
	template: `<br>`,
})
export class kwActTagsCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwActTagsMsg,
	                srvcData: kwActTagsList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwActTagsCtrlList::constructor() called");
	}
}
