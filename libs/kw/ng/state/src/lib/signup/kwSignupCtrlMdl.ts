/**********************************************************************
 *
 * kwNg/ctrl/signup/kwSignupCtrlMdl.ts
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
import { Component }        from '@angular/core';

import { kwBSCurrsMap }     from "@kw/ng/bs";
import { kwBSLangsMap }     from "@kw/ng/bs";
import { kwBSTZsMap }       from "@kw/ng/bs";
import { kwMdlsList }        from "@kwNgState/mdls/kwMdlsList";
import { kwNgCtrlMdl }      from "@kw/ng/class";

import { kwSignupMdl }         from "./kwSignupMdl";

//@formatter:off


const sSTATE: string = "signup";


@Component({
	selector: 'kw-signup-ctrl-mdl',
	template: `<br>`,
})
export class kwSignupCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: kwSignupMdl,
		srvcMdls: kwMdlsList,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwSignupCtrlMdl::constructor() called");
	}
}
