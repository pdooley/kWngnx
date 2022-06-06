/**********************************************************************
 *
 * kwNg/ctrl/kwNgCtrlForm.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import { kwCtrlForm }       from "@kw/base/ctrl";
import { kwStMsgFcty }      from "@kw/base/state";

import { kwNgStMdl }        from "./kwNgStMdl";
import { kwNgStMsg }        from "./kwNgStMsg";
//@formatter:off


export abstract class kwNgCtrlForm extends kwCtrlForm
{
	constructor(
		srvcSrc: kwNgStMdl,
	    srvcDst: kwNgStMsg,
		srvcFcty: kwStMsgFcty)
	{
		super(srvcSrc, srvcDst, srvcFcty);
		//console.log(this.sClass, "::constructor() called.");
	}

}




