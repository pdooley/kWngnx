/**********************************************************************
 *
 * kw/class/acts/kwActsType.ts
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
import {kwActType }                from "@kw/base/class";
//@formatter:on


export interface kwActsType
{
	post?: kwActType;
	get?: kwActType;
	del?: kwActType;
	patch?: kwActType;
	update?: kwActType;
}
