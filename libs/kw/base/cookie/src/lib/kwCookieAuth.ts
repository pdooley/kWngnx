/**********************************************************************
 *
 * kw/cookie/auth/kwCookieAuth.ts
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
import { kw }			              from "@kw/base/core";
import { kwCookie }			        from "./kwCookie";
//@formatter:on

const sKEY = "token";


export class kwCookieAuth
{

	constructor( private cookie: kwCookie)
	{
		//console.log("kwCookieAuth::constructor() is called.");
	}

	clear()
	{
		return this.cookie.clear(sKEY);
	}

	get()
	{
		return this.cookie.get(sKEY);
	}

	set(data: any)
	{
		//console.log("kwCookieAuth::set() called.");

		if (!kw.isString(data))
		{
			console.error("kwCookieAuth::set() data is invalid.");
		}

    //this.cookie.set(sKEY, data);
	}

}




