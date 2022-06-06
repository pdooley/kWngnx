/**********************************************************************
 *
 * kwNg/ctrl/redirect/kwRedirectCtrlMdl.ts
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

import { kwMdlsList }        from "@kwNgState/mdls/kwMdlsList";
import { kwBSCurrsMap }     from "@kw/ng/bs";
import { kwBSLangsMap }     from "@kw/ng/bs";
import { kwBSTZsMap }       from "@kw/ng/bs";
import { kwNgCtrlMdl }      from "@kw/ng/class";

import { kwRedirectMdl }    from "./kwRedirectMdl";

//@formatter:off


const sSTATE: string = "redirect";


@Component({
	selector: 'kw-redirect-ctrl-mdl',
	template: `<br>`,
})
export class kwRedirectCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: kwRedirectMdl,
		srvcMdls: kwMdlsList,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwRedirectCtrlMdl::constructor() called");
	}
}
