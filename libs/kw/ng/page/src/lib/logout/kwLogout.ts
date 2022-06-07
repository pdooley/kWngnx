/**********************************************************************
 *
 * kwNg/key/api/kwApiKey.ts
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
import { OnInit }           from '@angular/core';

//import {fadeInAnim}         from "@kw/ng/view";

import {kw}                 from "@kw/base/core";
import {kwAppVal}           from "@kw/ng/state";
import {kwAppLoggedOut}     from "@kw/base/class";

//@formatter:on


@Component({
	selector: 'kw-logout',
	templateUrl: './kwLogout.html',
	styleUrls: ['./kwLogout.css'],
//	host: {
//		'[@fadeInAnim]': 'true'
//	},
//	animations: [ fadeInAnim ]
})
export class kwLogout implements OnInit
{

	constructor(
	    private srvcApp: kwAppVal  )
	{
		//console.log('kwLogout::constructor() called.');

	}

	ngOnInit()
	{
		//console.log('kwLogout::ngOnInit() called.');
		const logout: kwAppLoggedOut = new kwAppLoggedOut();

		this.srvcApp.change(logout);
	}

}
