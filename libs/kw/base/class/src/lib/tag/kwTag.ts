/**********************************************************************
 *
 * kw/class/tag/kwTag.ts
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
import { kw }               from "@kw/base/core";
import { kwDisp }           from "@kw/base/class";
import { kwLog }            from "@kw/base/core";


const sTAG_ID                       = "sId";
const sTAG_STYLE                    = "sStyle";

const sTAG_TEMPLATE_CLASS           = "class";
const sTAG_TEMPLATE_CLOSE           = ">";
const sTAG_TEMPLATE_EQUAL           = "=";
const sTAG_TEMPLATE_ID              = "id";
const sTAG_TEMPLATE_OPEN            = "<";
const sTAG_TEMPLATE_STYLE_DEFAULT   = "default";

export class kwTag
{
    protected sClass: string = this.constructor.name;

    private bDispTag        = false;

    private bCreate         = false;
    private bInit           = false;
    private bLoadDisp       = false;


    private _sTag: string;


    constructor(
        private disp: kwDisp,
        private sTagIn: string    )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    public get sTag(): string { return this._sTag; }

//@formatter:on


    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());


        if (!kw.isValid(this.disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.is("disp", this.disp));

        if (!kw.isString(this.sTagIn))
        {
            console.error(log.invalid("sTagIn"));
            return false;
        }
        //console.info(log.is("sTagIn", this.sTagIn));


        if (!this.loadDisp())
        {
            console.error(log.errLoad("disp"));
            return false;
        }

        this.create();

        return true;
    }

    create(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        if (this.bCreate)
        {
            return true;
        }

        this.bCreate = true;


        if (!this.bDispTag)
        {
            return true;
        }

        const sTagIn = this.sTagIn;
        if (!kw.isString(sTagIn))
        {
            console.error(log.invalid("sTagIn"));
            return false;
        }

        const sTag    = sTAG_TEMPLATE_OPEN
                    + sTagIn
                    + sTAG_TEMPLATE_CLOSE;
        //console.info(log.is("sTag", sTag));

        this._sTag = sTag;

        return true;
    }


    loadDisp(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadDisp");
        //console.log(log.called());

        if (this.bLoadDisp)
        {
            return true;
        }

        this.bLoadDisp = true;


        const disp = this.disp;
        if (kw.isNull(disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.is("disp", disp));

        const bDispTag = this.disp.bDispTag;
        if (!kw.isBoolean(bDispTag))
        {
            console.error(log.invalid("bDispTag"));
            return false;
        }
        //console.info(log.is("bDispTag", bDispTag));
        this.bDispTag = bDispTag;

        return true;
    }


    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwTag);
    }
}

