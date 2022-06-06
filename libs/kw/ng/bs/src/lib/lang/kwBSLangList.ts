/**********************************************************************
 *
 * kwNg/state/lang/kwBSLangList.ts
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
import { Injectable }       from "@angular/core";

import { kwBSTraceVal }     from "@kw/ng/bs";
import { kwLangType }       from "@kw/base/class";
import { kwNgStDataList }   from "@kw/ng/class";


const sTAG_ID: string       = "id";


@Injectable()
export class kwBSLangList extends kwNgStDataList
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(
			srvcTrace,
			sTAG_ID     );

		//console.log(this.sClass,"::constructor() called.");
	}

//@formatter:on

	public get(): kwLangType[]
	{
		return <kwLangType[]>super.get();
	}
}
