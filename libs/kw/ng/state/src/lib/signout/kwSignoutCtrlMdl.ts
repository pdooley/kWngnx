/**********************************************************************
 *
 * kwNg/ctrl/signout/kwSignoutCtrlMdl.ts
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

import { kwSignoutMdl }         from "./kwSignoutMdl";

//@formatter:off


const sSTATE: string = "signout";


@Component({
	selector: 'kw-signout-ctrl-mdl',
	template: `<br>`,
})
export class kwSignoutCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: kwSignoutMdl,
		srvcMdls: kwMdlsList,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwSignoutCtrlMdl::constructor() called");
	}
}
