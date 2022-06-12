/**********************************************************************
 *
 * kwNg/ctrl/acc/kwAccState.ts
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
import {OnInit }            from '@angular/core';
import {OnDestroy }	        from '@angular/core';
import {Subscription }	    from 'rxjs';

import {kw }                from "@kw/base/core";
import {kwBSCtrlMdl }       from "@kwBS/kwBSCtrlMdl";
import {kwMdlsList }        from "@kw/ng/state";
import {kwNgStDataList }    from "@kw/ng/class";
import {kwStMdl }           from "@kw/base/state";

//@formatter:off


export class kwNgBSCtrlMdl extends kwBSCtrlMdl implements OnInit, OnDestroy
{
	private sub: Subscription;

	constructor(
		srvcMdl: kwStMdl,
		srvcMdls: kwMdlsList,
		sState: string   )
	{
		super(srvcMdl, srvcMdls, sState);
		//console.log("kwNgBSCtrlMdl::constructor() called");
	}

	ngOnInit()
	{
		//console.log("kwNgBSCtrlMdl::ngOnInit() called");

		if (!super.init())
		{
			console.error("kwNgBSCtrlMdl::ngOnInit() error initializing");
			return;
		}

		this.sub = (<kwNgStDataList>this.srvcMdls).changed$.subscribe(info =>
		{
			this.load();
		});
	}

	ngOnDestroy()
	{
		//console.log("kwNgBSCtrlMdl::ngOnDestroy() called.");
		this.sub.unsubscribe();
	}

}
