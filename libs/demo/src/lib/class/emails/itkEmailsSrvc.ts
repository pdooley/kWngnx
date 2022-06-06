/**********************************************************************
 *
 * app/class/email/itkEmailsSrvc.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

// @formatter:off
import { kw }		                from "@kw/base/core";

import { itkEmailsType }        from "./itkEmailsType";
// @formatter:on


export class itkEmailsSrvc
{
	static isType(obj: object): boolean
	{
		return kw.is(obj, itkEmailsType)
	}

	static in(nVal: number): boolean
	{
		return false
	}

	static toEnum(sVal: string): number
	{
		return -1;
	};
}

