/**********************************************************************
 *
 * kw/class/kwMsgDelete.ts
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
import {kwActs }               from "@kw/base/class";
import {kwMsg }                from "./kwMsg";
import {kwMsgEnum }		    from "./kwMsgEnum";
import {kwMsgType }            from "./kwMsgType";
//@formatter:on

export class kwMsgDelete extends kwMsg
{
	constructor(type: kwMsgType)
	{
		super(kwMsgEnum.delete, type);
		//console.log("kwMsgDelete::constructor() is called.");
	}

	retrieveActImpl(acts: kwActs): kwAct
	{
		//console.log("kwMsgAdd::retrieveActImpl() is called.");

		if (!kwActs.is(acts))
		{
			console.error("kwMsg::retrieveActImpl() acts is invalid.");
			return;
		}

		const act: kwAct = acts.getDelete();
		if (!kwAct.is(act))
		{
			console.error("kwMsg::retrieveActImpl() error retrieving act.");
			return;
		}

		return act;
	}

}
