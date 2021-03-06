/**********************************************************************
 *
 * kwNg/ctrl/metric/kwMetricCtrlApi.ts
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

import { kwMetricApi }        from "./kwMetricApi";

//@formatter:off


const sSTATE: string = "metric";


@Component({
	selector: 'kw-metric-ctrl-api',
	template: `<br>`,
})
export class kwMetricCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwApisList,
		srvcDst: kwMetricApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwMetricCtrlApi::constructor() called");
	}
}
