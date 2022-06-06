/**********************************************************************
 *
 * kw/options/kwOptionsType.ts
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
import {kwAct }                from "@kw/base/class";
import {kwAjax }               from "@kw/base/class";
import {kwMode }               from "@kw/base/class";
import {kwParam }              from "@kw/base/class";
import {kwSrvcMap }            from "@kw/base/class";
import {kwTokenMap }           from "@kw/base/class";
//@formatter:on


export interface kwOptionsType
{
	act: kwAct;
	ajax: kwAjax;
	data: object;
	mode: kwMode;
	params: kwParam[];
	srvcs: kwSrvcMap;
	tokens: kwTokenMap;
}
