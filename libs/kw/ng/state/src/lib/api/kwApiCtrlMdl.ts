/**********************************************************************
 *
 * kwNg/ctrl/api/kwApiCtrlMdl.ts
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

import { kwApiMdl }         from "./kwApiMdl";

//@formatter:off


const sSTATE: string = "api";


@Component({
	selector: 'kw-api-ctrl-mdl',
	template: `<br>`,
})
export class kwApiCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: kwApiMdl,
		srvcMdls: kwMdlsList,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwApiCtrlMdl::constructor() called");
	}
}
