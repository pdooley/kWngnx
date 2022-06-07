//@formatter:off
import { Component }        from '@angular/core';
import { OnInit }           from '@angular/core';

//import {fadeInAnim}         from "@kw/ng/view";

import {kw}                 from "@kw/kw";
import {kwAppVal}           from "@kw/ng/state";
import {kwAppLoggedOut}     from "@kwClass/app/kwAppLoggedOut";

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
