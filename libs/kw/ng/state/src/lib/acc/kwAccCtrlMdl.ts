/**********************************************************************
 *
 * kwNg/ctrl/acc/kwAccCtrlMdl.ts
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
import { kwMdlsList }       from "@kw/ng/state";
import { kwNgCtrlMdl }      from "@kw/ng/class";

import { kwAccMdl }         from "./kwAccMdl";

//@formatter:off


const sSTATE: string = "account";


@Component({
	selector: 'kw-acc-ctrl-mdl',
	template: `<br>`,
})
export class kwAccCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: kwAccMdl,
		srvcMdls: kwMdlsList,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwAccCtrlMdl::constructor() called");
	}
}
