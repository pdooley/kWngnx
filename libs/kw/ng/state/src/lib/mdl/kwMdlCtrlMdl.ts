/**********************************************************************
 *
 * kwNg/ctrl/model/kwMdlCtrlMdl.ts
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

import { kwMdlMdl }         from "./kwMdlMdl";

//@formatter:off


const sSTATE: string = "model";


@Component({
	selector: 'kw-mdl-ctrl-mdl',
	template: `<br>`,
})
export class kwMdlCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: kwMdlMdl,
		srvcMdls: kwMdlsList,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwMdlCtrlMdl::constructor() called");
	}
}
