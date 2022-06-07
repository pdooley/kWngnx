//@formatter:off
import {Component}      from '@angular/core';

import {kwApisList}     from "@kw/ng/state";
import {kwNgCtrlApi}    from "@kw/ng/class";

import {kwSigninLinkedInCBApi}    from "./kwSigninLinkedInCBApi";
//@formatter:off


const sSTATE: string = "notisFltr";


@Component({
	selector: 'dl-signin-linked-in-cb-ctrl-api',
	template: `<br>`,
})
export class kwSigninLinkedInCBCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwApisList,
		srvcDst: kwSigninLinkedInCBApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwSigninLinkedInCBCtrlApi::constructor() called");
	}
}
