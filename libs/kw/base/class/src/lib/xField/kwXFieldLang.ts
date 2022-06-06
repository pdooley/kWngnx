/**********************************************************************
 *
 * kw/kw/kwXFieldBool.ts
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
import {kw }		            from "@kw/base/core";
import {kwMap }                from "@kw/base/class";
import {kwXField }		        from "./kwXField";
import {kwXFieldEnum }		    from "./kwXFieldEnum";
//@formatter:on

export class kwXFieldLang extends kwXField
{

	constructor(private srvcLangs: kwMap)
	{
		super(kwXFieldEnum.lang);
		//console.log("kwXFieldLang::constructor() is called.");
	}

	transform(val: any, sName: string): any
	{
		//console.log("kwXFieldLang::transform() called.");

		if (!kw.isString(val))
		{
			console.error("kwXFieldLang::transform() val is undefined.");
			return null;
		}

		//console.info("kwXFieldLang::transform() val [" + val + "].");

		const valNew: any = this.srvcLangs.getByCode(val);
		if (kw.isNull(valNew))
		{
			console.error("kwXFieldLang::transform() field [" + sName + "] is undefined.");
			return undefined;
		}

		return valNew;
	}

}


