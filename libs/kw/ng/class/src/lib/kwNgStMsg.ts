/**********************************************************************
 *
 * kwNg/state/kwNgStMsg.ts
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

import { kwBSTraceVal }     from "@kw/ng/bs";
import { kwMsg }            from "@kw/base/class";
import { kwStApi }          from "@kw/base/state";
import { kwStMsg }          from "@kw/base/state";

//@formatter:off


export class kwNgStMsg extends kwStMsg
{
	private theSignal: EventEmitter<kwMsg>;
	public changed$: EventEmitter<kwMsg>;

	public constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwStApi        )
	{
		super(srvcTrace, srvcApi);

		//console.log(this.sClass, "::constructor() called.");
		this.theSignal = new EventEmitter<kwMsg>();
		this.changed$=this.theSignal;
	}

	protected broadcast(data: any): void
	{
		//console.log(this.sClass, "::broadcastMsg() called.");
		if (!kwMsg.is(data))
		{
			console.error(this.sClass, "::broadcast() data is invalid.");
			return;
		}
		this.theSignal.emit(data);
	}
}
