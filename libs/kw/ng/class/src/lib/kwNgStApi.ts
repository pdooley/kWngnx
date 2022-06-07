/**********************************************************************
 *
 * kwNg/state/kwNgStApi.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:on
import { EventEmitter }     from '@angular/core';

import { kwApi }            from "@kw/base/class";
import { kwBSTraceVal }     from "@kw/ng/bs";
import { kwStApi }          from "@kw/base/state";

//@formatter:off

export class kwNgStApi extends kwStApi
{
	private theSignal: EventEmitter<kwApi>;
	public changed$: EventEmitter<kwApi>;

	public constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);

		//console.log(this.sClass, "::constructor() called.");
		this.theSignal = new EventEmitter<kwApi>();
		this.changed$=this.theSignal;
	}

	protected broadcast(data: any): void
	{
		//console.log("kwAccApi::broadcastApi() called.");
		if (!kwApi.is(data))
		{
			console.error(this.sClass, "::broadcast() data is invalid.");
			return;
		}
		this.theSignal.emit(data);
	}
}
