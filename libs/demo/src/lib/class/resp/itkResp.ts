/**********************************************************************
 *
 * app/class/resp/itkResp.ts
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
import { kw }		                    from "@kw/base/core";

import { itkRespType }                 from "./itkRespType";
// @formatter:on


export class itkResp
{
	sResp = "";
	sEmail = "";
	sPhone = "";

	constructor(private type: itkRespType)
	{
		//console.log("itkResp::constructor() called");
	};

	init(): boolean
	{
		//console.log("itkResp::init() is called.");

		if (kw.isNull(this.type))
		{
			console.error("itkResp::init() type is invalid.");
			return false;
		}
		//console.info("itkResp::init() type is ", this.type);

		const sResp: string = this.type.sResp;
		if(!kw.isString(sResp))
		{
			console.error("itkResp::init() sResp is invalid.");
			return false;
		}
		//console.info("itkResp::init() sResp is ", sResp);
		this.sResp = sResp;

		const sEmail: string = this.type.sEmail;
		if(!kw.isString(sEmail))
		{
			console.error("itkEmail::init() sEmail is invalid.");
			return false;
		}
		//console.info("itkEmail::init() sEmail is ", sEmail);
		this.sEmail = sEmail;

		const sPhone: string = this.type.sPhone;
		if(!kw.isString(sPhone))
		{
			console.error("itkPhone::init() sPhone is invalid.");
			return false;
		}
		//console.info("itkPhone::init() sPhone is ", sPhone);
		this.sPhone = sPhone;

		return true;
	}

	getResp(): string
	{
		return this.sResp;
	};

	getEmail(): string
	{
		return this.sEmail;
	};

	getPhone(): string
	{
		return this.sPhone;
	};

	static is(obj: object): boolean
	{
		return kw.is(obj, itkResp)
	}

}

