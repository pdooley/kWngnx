/**********************************************************************
 *
 * kwNg/ctrl/signin/kwSigninCtrlMdl.ts
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

import { kwSigninMdl }         from "./kwSigninMdl";

//@formatter:off


const sSTATE: string = "signin";


@Component({
	selector: 'kw-signin-ctrl-mdl',
	template: `<br>`,
})
export class kwSigninCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: kwSigninMdl,
		srvcMdls: kwMdlsList,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwSigninCtrlMdl::constructor() called");
	}
}
