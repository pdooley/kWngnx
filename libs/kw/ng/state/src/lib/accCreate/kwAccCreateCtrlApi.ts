/**********************************************************************
 *
 * kwNg/ctrl/accCreate/kwAccCreateCtrlApi.ts
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

import { Component }		from '@angular/core';

import { kwApisList }       from "@kw/ng/state";
import { kwNgCtrlApi }      from "@kw/ng/class";

import { kwAccCreateApi }   from "./kwAccCreateApi";

//@formatter:off


const sSTATE: string = "accountCreate";


@Component({
	selector: 'kw-acc-create-ctrl-api',
	template: `<br>`,
})
export class kwAccCreateCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwApisList,
		srvcDst: kwAccCreateApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwAccCreateCtrlApi::constructor() called");
	}
}
