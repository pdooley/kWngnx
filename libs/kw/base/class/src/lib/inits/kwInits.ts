
/**********************************************************************
 *
 * kw/class/attr/kwInits.ts
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

import { kw }                from "@kw/base/core";
import { kwAttrs }           from "@kw/base/class";
import { kwLog }             from "@kw/base/core";
import { kwRslt }            from "@kw/base/class";



export class kwInits
{
    protected sClass: string = this.constructor.name;


    private _inits: any;

    private bInit: boolean          = false;
    private bLoadAttrs: boolean     = false;
    private bLoadInits: boolean     = false;
    private bLoadRslt: boolean      = false;

    private bDispAll: boolean       = false;
    private bDispInits: boolean     = false;


    constructor(
        private attrs:      kwAttrs,
        private initsIn:    object,
        private rslt:       kwRslt )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    public get inits(): any { return this._inits; }



//@formatter:on


    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (this.bInit)
        {
            return true;
        }

        this.bInit = true;

        if (!kw.isValid(this.attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.is("attrs", this.attrs));


        if (!kw.isValid(this.initsIn))
        {
            console.error(log.invalid("initsIn"));
            return false;
        }
        //console.info(log.is("initsIn", this.initsIn));


        if (!kw.isValid(this.rslt))
        {
            console.error(log.invalid("rslt"));
            return false;
        }
        //console.info(log.is("rslt", this.rslt));


        if (!this.loadAttrs())
        {
            console.error(log.errLoad("attrs"));
            return false;
        }


        if (!this.loadRslt())
        {
            console.error(log.errLoad("rslt"));
            return false;
        }


        if (!this.loadInits())
        {
            console.error(log.errLoad("inits"));
            return false;
        }

        return true;
    }


    private loadAttrs(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadAttrs");
        //console.log(log.called());

        if (this.bLoadAttrs)
        {
            return true;
        }

        this.bLoadAttrs = true;


        const attrs = this.attrs;
        if (!kw.isValid(attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs, "]");


        const initsIn = this.initsIn;
        if (!kw.isValid(initsIn))
        {
            console.error(log.invalid("initsIn"));
            return false;
        }
        //console.info(log.isObj("initsIn"), initsIn, "]");

        if (!attrs.loadInits(initsIn))
        {
            console.error(log.errLoad("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs, "]");

        return true;
    }


    private loadInits(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadInits");
        //console.log(log.called());

        if (this.bLoadInits)
        {
            return true;
        }

        this.bLoadInits = true;

        if (!this.bLoadRslt)
        {
            return false;
        }

        const rslt = this.rslt;
        if (!kw.isValid(rslt))
        {
            console.error(log.invalid("rslt"));
            return false;
        }
        //console.info(log.isObj("rslt"), rslt, "]");

        const initsIn = this.initsIn;
        if (!kw.isValid(initsIn))
        {
            console.error(log.invalid("initsIn"));
            return false;
        }
        //console.info(log.isObj("initsIn"), initsIn, "]");

        if (this.setInits(rslt.val))
        {
            return true;
        }


        this.setInits(initsIn);

        return true;
    }


    private loadRslt(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadRslt");
        //console.log(log.called());

        if (this.bLoadRslt)
        {
            return true;
        }

        this.bLoadRslt = true;


        const rslt = this.rslt;
        if (!kw.isValid(rslt))
        {
            console.error(log.invalid("rslt"));
            return false;
        }
        //console.info(log.isObj("rslt"), rslt, "]");


        const initsIn = this.initsIn;
        if (!kw.isValid(initsIn))
        {
            console.error(log.invalid("initsIn"));
            return false;
        }
        //console.info(log.isObj("initsIn"), initsIn, "]");

        if (!rslt.loadInits(initsIn))
        {
            console.error(log.errLoad("rslt"));
            return false;
        }
        //console.info(log.isObj("rslt"), rslt, "]");

        return true;
    }


    private setInits(val: any): boolean
    {
        this._inits = val;
        return this.dispInits();
    }


    private dispInits(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "dispInits");
        if (!this.bDispAll && !this.bDispInits ) {return false;}
        const val = this.inits;
        if (kw.isValid(val)) {console.info(log.isObj("inits"), val, "]");}
        return true
    }

}
