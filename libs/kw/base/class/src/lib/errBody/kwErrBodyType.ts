/**********************************************************************
 *
 * kw/class/errBody/kwErrBodyType.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {kwErrBodyRepType}   from "@kw/base/class";
//@formatter:on


export interface kwErrBodyType
{
	call: string;
	exception: string;
	report: kwErrBodyRepType;
	success: boolean;
	text: string;
}
