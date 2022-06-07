/**********************************************************************
 *
 * kwNg/ctrl/org/kwOrgCtrlMdl.ts
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
import { kwMdlsList }        from "@kw/ng/state";
import { kwNgCtrlMdl }      from "@kw/ng/class";

import { kwOrgMdl }         from "./kwOrgMdl";
//@formatter:off


const sSTATE: string = "org";


@Component({
	selector: 'kw-org-ctrl-mdl',
	template: `<br>`,
})
export class kwOrgCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: kwOrgMdl,
		srvcMdls: kwMdlsList,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwOrgCtrlMdl::constructor() called");
	}
}
