/**********************************************************************
 *
 * kwNg/state/kwNgStMdl.ts
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
import { kwMdl }            from "@kw/base/class";
import { kwStMdl }          from "@kw/base/state";

//@formatter:off

export class kwNgStMdl extends kwStMdl
{
	private theSignal: EventEmitter<kwMdl>;
	public changed$: EventEmitter<kwMdl>;

	public constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);

		//console.log(this.sClass, ":::constructor() called.");
		this.theSignal = new EventEmitter<kwMdl>();
		this.changed$=this.theSignal;
	}

	protected broadcast(data: any): void
	{
		//console.log(this.sClass, "::broadcastMdl() called.");
		if (!kwMdl.is(data))
		{
			console.error(this.sClass, "::broadcast() data is invalid.");
			return;
		}
		this.theSignal.emit(data);
	}
}
