/**********************************************************************
 *
 * kwNg/key/api/kwPageMod.ts
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
import { NgModule }             from '@angular/core';

import { kwLoginMod }           from './login';
import { kwLogoutMod }          from './logout';

@NgModule(
{
	imports:
	[
		kwLoginMod,
		kwLogoutMod,
	],
	exports:
	[
		kwLoginMod,
		kwLogoutMod,
	]
})
//@formatter:on
export class kwPageMod {

	constructor()
	{
		//console.log('kwPageMod::constructor() called.');
	}
}
