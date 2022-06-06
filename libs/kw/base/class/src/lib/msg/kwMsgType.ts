/**********************************************************************
 *
 * kw/msg/kwMsgType.ts
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

import {kwApi }            from "@kw/base/class";
import {kwSrvcMap }        from "@kw/base/class";
import {kwTokenMap }       from "@kw/base/class";
//@formatter:on


export interface kwMsgType
{
	api: kwApi;
	data: object;
	params: object;
	srvcs: kwSrvcMap;
	tokens: kwTokenMap;
}

