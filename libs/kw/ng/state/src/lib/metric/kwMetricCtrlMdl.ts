/**********************************************************************
 *
 * kwNg/ctrl/metric/kwMetricCtrlMdl.ts
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

import { kwMetricMdl }      from "./kwMetricMdl";

//@formatter:off


const sSTATE: string = "metric";


@Component({
	selector: 'kw-metric-ctrl-mdl',
	template: `<br>`,
})
export class kwMetricCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: kwMetricMdl,
		srvcMdls: kwMdlsList,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwMetricCtrlMdl::constructor() called");
	}
}
