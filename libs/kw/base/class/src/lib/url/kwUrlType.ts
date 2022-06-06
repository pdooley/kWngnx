/**********************************************************************
 *
 * kw/class/url/kwUrlType.ts
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
import {kwAjax }       from "@kw/base/class";
import {kwParam }      from "@kw/base/class";
import {kwSrvcMap }    from "@kw/base/class";
//@formatter:on


export interface kwUrlType
{
	ajax: kwAjax;
	params: kwParam[];
	srvcs: kwSrvcMap;
}
