/**********************************************************************
 *
 * kwNg/BS/srvcs/kwBSSrvcsCtrlMap.ts
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
import {Component }         from '@angular/core';
import {OnInit }            from '@angular/core';
import {OnDestroy }         from '@angular/core';
import {Subscription }      from 'rxjs/Subscription';

import {kw }                from "@kw/base/core";
import {kwBS }              from "@kw/base/class";
import {kwBSVal }           from "@kw/ng/bs";
import {kwSrvcs }           from "@kw/base/class";
import {kwtSrvc }           from "@kw/base/class";

import {kwBSSrvcsMap }     from "./kwBSSrvcsMap";

//@formatter:off


@Component({
    selector: 'kw-bootstrap-srvcs-ctrl-map',
    template: `<br>`,
})
export class kwBSSrvcsCtrlMap implements OnInit, OnDestroy
{
    subBS: Subscription;

    constructor(
        private    srvcSrvcs: kwBSSrvcsMap,
        private srvcBS: kwBSVal )
    {
        //console.log("kwBSSrvcsCtrlMap::constructor() called");
    }

    ngOnInit()
    {
        //console.log("kwBSSrvcsCtrlMap::ngOnInit() called");
        this.subBS = this.srvcBS.changed$.subscribe(info =>
        {
            this.load();
        });

        this.load();
    }

    ngOnDestroy()
    {
        //console.log("kwBSSrvcsCtrlMap::ngOnDestroy() called.");
        this.subBS.unsubscribe();
    }

    load(): void
    {
        //console.log("kwBSSrvcsCtrlMap::load() called.");

        const BS: kwBS = this.srvcBS.get();
        if (!kwBS.is(BS))
        {
            console.error("kwBSSrvcsCtrlMap::load() BS is invalid.");
            return;
        }
        //console.info("kwBSSrvcsCtrlMap::load() BS is ", BS);

        const srvcs: kwSrvcs = BS.srvcs;
        if (!kwSrvcs.is(srvcs))
        {
            console.error("kwBSSrvcsCtrlMap::load() srvcs is invalid.");
            return;
        }
        //console.info("kwBSSrvcsCtrlMap::load() srvcs is ", srvcs);

        const list: kwtSrvc[] = srvcs.list;
        if (!kw.isArray(list))
        {
            console.error("kwBSSrvcsCtrlMap::load() list is invalid.");
            return;
        }
        //console.info("kwBSSrvcsCtrlMap::load() list is ", list);

        this.srvcSrvcs.change(list);
    }

}
