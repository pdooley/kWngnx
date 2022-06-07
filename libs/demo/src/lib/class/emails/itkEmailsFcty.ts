/**********************************************************************
 *
 * app/class/emails/itkEmailsFcty.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

// @formatter:off
import { kw }                   from "@kw/base/core";

import { itkEmailType }         from "../email/itkEmailType";
import { itkEmail }             from "../email/itkEmail";
import { itkEmailsType }        from "./itkEmailsType";
// @formatter:on


const sTAG = "emails";


export class itkEmailsFcty
{

	static create(type: itkEmailsType): itkEmail[] | null
	{
		//console.log("itkEmailsSrvc::init() is called.");

		if(kw.isNull(type))
		{
			console.error("itkEmailsSrvc::create() type is invalid.");
			return null;
		}
		//console.info("itkEmailsSrvc::create() type is ", type);

		const list: itkEmailType[] = type[sTAG];
		if (!kw.isArray(list))
		{
			console.error("itkEmail::init() list is invalid.");
			return null;
		}
		//console.info("itkEmail::init() list is ", list);


		const items: itkEmail[] = [];

		for (let i=0; i< list.length; i++)
		{
			const type: itkEmailType = list[i];
			if(kw.isNull(type))
			{
				console.error("itkEmailsSrvc::create() type is invalid.");
				return null;
			}
			//console.info("itkEmailsSrvc::init() create creating emails.");

			const item: itkEmail = new itkEmail(type);
			if (!item.init())
			{
				console.error("itkEmailsSrvc::create() error creating item.");
				return null;
			}
			items.push(item)
		}

		return items;
	}

}

