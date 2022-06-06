/**********************************************************************
 *
 * kw/enum/kwRequestType.ts
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
import {kwAct }			from "@kw/base/class";
//@formatter:on


export interface kwRequestType
{
	action: kwAct;
	sService: string;
	sTemplate: string;
	sToken: string;
}

