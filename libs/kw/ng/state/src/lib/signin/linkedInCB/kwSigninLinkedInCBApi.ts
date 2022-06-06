//@formatter:on
import {Injectable}         from '@angular/core';

import {kwBSTraceVal}       from "@kw/ng/bs";
import {kwNgStApi}          from "@kw/ng/class";

//@formatter:off


@Injectable()
export class kwSigninLinkedInCBApi extends kwNgStApi
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);
		//console.log("kwSigninLinkedInCBApi::constructor() called.");
	}
}
