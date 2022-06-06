/**********************************************************************
 *
 * app/state/resp/itkRespList.ts
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
import { Injectable }	    from '@angular/core';

import { kwNgStDataList }   from "../../../kwNg/state/kwNgStDataList";
import { kwBSTraceVal }     from "../../../kwNg/BS/trace/kwBSTraceVal";
// @formatter:on

@Injectable()
export class itkRespList extends kwNgStDataList
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);
		//console.log("itkRespList::constructor() called.");
	}
}
