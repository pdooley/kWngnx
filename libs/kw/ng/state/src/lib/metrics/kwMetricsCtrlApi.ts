/**********************************************************************
 *
 * kwNg/ctrl/metrics/kwMetricsCtrlApi.ts
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
import { Component }            from '@angular/core';

import { kwApisList }           from "@kw/ng/state";
import { kwNgCtrlApi }      from "@kw/ng/class";

import { kwMetricsApi }        from "./kwMetricsApi";

//@formatter:off


const sSTATE: string = "metrics";


@Component({
	selector: 'kw-metrics-ctrl-api',
	template: `<br>`,
})
export class kwMetricsCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwApisList,
		srvcDst: kwMetricsApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwMetricsCtrlApi::constructor() called");
	}
}
