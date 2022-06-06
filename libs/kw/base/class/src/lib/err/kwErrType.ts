/**********************************************************************
 *
 * kw/class/err/kwErrType.ts
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
import {kwErrBodyType} from "@kw/base/class";
//@formatter:on


export interface kwErrType
{
	ok: boolean;
	status: number;
	statusText: string;
	type: number;
	url: string;
	_body: kwErrBodyType;
}
