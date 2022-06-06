/**********************************************************************
 *
 * kwNg/BS/user/kwBSUserList.ts
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
import {Injectable }       from '@angular/core';

import {kw}                from "@kw/base/core";
import {kwBSTraceVal }     from "@kw/ng/bs";
import {kwNgStDataList }   from "@kw/ng/class";
import {kwUser }           from "@kw/base/class";


const sTAG_ID: string       = "_id";
const sNAME: string         = "fullname";
const sIMG: string          = "profile_picture";


@Injectable()
export class kwBSUserList extends kwNgStDataList
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(
			srvcTrace,
			sTAG_ID  );

		//console.log(this.sClass,"::constructor() called.");
	}

//@formatter:on

	public getImg(): string
	{
		//console.log(this.sClass,"::getImg() called.");

		const user = super.getFirst();
		if (kw.isNull(user))
		{
			console.error(this.sClass,"::getImg() user is invalid.");
			return;
		}
		//console.log(this.sClass, "::getImg() user is ", user);

		const sVal = user[sIMG];
		if (!kw.isString(sVal) || sVal.length === 0)
		{
			console.error(this.sClass,"::getImg() sVal is invalid.");
			return;
		}
		//console.log(this.sClass, "::getImg() sVal is ", sVal);

		return sVal;
	}

	public getName(): string
	{
		//console.log(this.sClass,"::getName() called.");

		const user = super.getFirst();
		if (kw.isNull(user))
		{
			console.error(this.sClass,"::getName() user is not yet loaded.");
			return;
		}
		//console.log(this.sClass, "::getName() user is ", user);

		const sVal = user[sNAME];
		if (!kw.isString(sVal) || sVal.length === 0)
		{
			console.error(this.sClass,"::getName() sVal is invalid.");
			return;
		}
		//console.log(this.sClass, "::getName() sVal is ", sVal);

		return sVal;
	}

}
