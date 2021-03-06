/**********************************************************************
 *
 * kwNg/class/comp/kwNgCtrlComp.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import { EventEmitter }         from '@angular/core';
import { Input }                from '@angular/core';
import { OnChanges }            from '@angular/core';
import { OnInit }               from '@angular/core';
import { Output }               from '@angular/core';
import { Router }               from '@angular/router';
import { SimpleChange }         from '@angular/core';
import { SimpleChanges }        from '@angular/core';
import { Subscription }         from 'rxjs';

import { AppInjector }          from '@app/appInjector';

import { kw }                   from "@kw/base/core";
import { kwBSAttrsVal }         from "@kw/ng/bs";
import { kwBSDispVal }          from "@kw/ng/bs";
import { kwBSFltrVal }          from "@kw/ng/bs";
import { kwBSRsltVal }          from "@kw/ng/bs";
import { kwCtrlCompId }         from "@kw/base/ctrl";
import { kwLog }                from "@kw/kwLog";



export abstract class kwNgCtrlCompId    extends kwCtrlCompId
                                        implements OnInit, OnChanges
{
    @Input() dataIn: any;
    @Input() fltrIn: any;
    @Input() initsIn: any;
    @Input() viewIn: any;

    @Output() changed: EventEmitter<any> = new EventEmitter();

    sub: Subscription;
    //router: NgModuleRef;
    router;

    protected constructor(sTag: string = "" )
    {
        super(sTag);
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


//@formatter:on

    protected getDataIn(): any { return this.dataIn; }

    ngOnInit(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnInit");
        //console.log(log.called());

        this.srvcAttrs = AppInjector.get(kwBSAttrsVal);
        if (kw.isNull(this.srvcAttrs))
        {
            console.error(log.invalid("srvcAttrs"));
            return;
        }

        this.srvcDisp = AppInjector.get(kwBSDispVal);
        if (kw.isNull(this.srvcDisp))
        {
            console.error(log.invalid("srvcDisp"));
            return;
        }
        //console.info(log.isObj("srvcDisp"),  this.srvcDisp, "]");

        this.srvcFltr = AppInjector.get(kwBSFltrVal);
        if (kw.isNull(this.srvcFltr))
        {
            console.error(log.invalid("srvcFltr"));
            return;
        }

        this.srvcRslt = AppInjector.get(kwBSRsltVal);
        if (kw.isNull(this.srvcRslt))
        {
            console.error(log.invalid("srvcRslt"));
            return;
        }

        this.init();
    }

    ngOnChanges(changes: SimpleChanges)
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnChanges");
        //console.log(log.called());

        if (kw.isNull(changes))
        {
            console.error(this.sClass, "::ngOnChanges() changes is invalid");
            return;
        }

        const dataIn: SimpleChange = changes.dataIn;
        if (kw.isValid(dataIn))
        {
            this.processDataIn(dataIn);
        }

        const fltrIn: SimpleChange = changes.fltrIn;
        if (kw.isValid(fltrIn))
        {
            this.processFltrIn(fltrIn);
        }

        const initsIn: SimpleChange = changes.initsIn;
        if (kw.isValid(initsIn))
        {
            this.processInitsIn(initsIn);
        }

        const viewIn: SimpleChange = changes.viewIn;
        if (kw.isValid(viewIn))
        {
            this.processViewIn(viewIn);
        }

    }

    protected navigate(sLink: string): void
    {
        const log: kwLog = new kwLog(this.sClass, "navigate");
        //console.log(log.called());

        if (kw.isNull(this.router))
        {
            this.router = AppInjector.get(Router);
        }

        if (!kw.isString(sLink))
        {
            console.error(this.sClass, "::navigate() sLink is invalid");
            return;
        }
        this.router.navigate([sLink]);
    }

    protected publish($event: object): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());

        if (kw.isNull($event))
        {
            console.error(this.sClass, "::publish() $event is invalid");
            return;
        }

        this.changed.emit($event);
    }

    processDataIn(change: SimpleChange)
    {
        const log: kwLog = new kwLog(this.sClass, "processDataIn");
        //console.log(log.called());

        if (kw.isNull(change))
        {
             return;
        }

        //console.info(this.sClass, "::processDataIn() change is [", change, "]");

        const dataIn = change.currentValue;
        //console.info(this.sClass, "::processDataIn() dataIn is [", dataIn, "]");

        this.storeData(dataIn);
    }

    processFltrIn(change: SimpleChange)
    {
        const log: kwLog = new kwLog(this.sClass, "processFltrIn");
        //console.log(log.called());

        if (kw.isNull(change))
        {
            return;
        }

        //console.info(this.sClass, "::processFltrIn() change is [", change, "]");
        if (!change.isFirstChange())
        {
            console.error(this.sClass, "::processFltrIn() not initialized");
            return;
        }

        const fltrIn = change.currentValue;
        //console.info(this.sClass, "::processFltrIn() fltrIn is [", fltrIn, "]");

        this.storeFltr(fltrIn);

    }

    processInitsIn(change: SimpleChange)
    {
        const log: kwLog = new kwLog(this.sClass, "processInitsIn");
        //console.log(log.called());

        if (kw.isNull(change))
        {
            return;
        }

        //console.info(this.sClass, "::processInitsIn() change is [", change, "]");
        if (!change.isFirstChange())
        {
            console.error(this.sClass, "::processInitsIn() not initialized");
            return;
        }

        const initsIn = change.currentValue;
        //console.info(this.sClass, "::processInitsIn() initsIn is [", initsIn, "]");

        this.storeInit(initsIn);

    }

    processViewIn(change: SimpleChange)
    {
        const log: kwLog = new kwLog(this.sClass, "processViewIn");
        //console.log(log.called());

        if (kw.isNull(change))
        {
            return;
        }

       //console.info(this.sClass, "::processViewIn() change is [", change, "]");
        if (!change.isFirstChange())
        {
            console.error(this.sClass, "::processViewIn() not initialized");
            return;
        }

        const viewIn = change.currentValue;
        //console.info(this.sClass, "::processViewIn() viewIn is [", viewIn, "]");

        this.storeView(viewIn);
    }

    onChanged($event)
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());

        if (kw.isNull($event))
        {
            console.error(this.sClass, "::onChanged() $event is invalid");
            return;
        }

        this.handleEvent($event);
    }

}
