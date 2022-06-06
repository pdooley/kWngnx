/**********************************************************************
 *
 * kw/class/mdl/kwMdls.ts
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

import { Maybe, Just, Nothing } from 'purify-ts/Maybe'

import { kw }           from "@kw/base/core";
import { kwMdl }        from "@kw/base/class";
import { kweMdl }       from "@kw/base/class";
import { kwMdlSrvc }    from "@kw/base/class";
import { kwMdlSub }     from "@kw/base/class";
import { kwtJSON }      from "@kw/base/class";
import { kwtMdl }       from "@kw/base/class";
//@formatter:on

export class kwMdls extends kwtJSON
{
    constructor(
        private mdls: object  )
    {
        //console.log("kwMdls::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwMdls::init() called.");

        if (kw.isNull(this.mdls))
        {
            console.error("kwMdls::init() mdls is invalid.");
            return false;
        }
        //console.info("kwMdls::init() mdls is ", this.mdls);

        return true;
    }

    retrieve(sMdl: string): Maybe<kwMdl>
    {
        //console.log("kwMdls::retrieve() called.");

        if (!kw.isString(sMdl))
        {
            console.error("kwMdl::retrieve() sMdl is invalid.");
            return Nothing;
        }
        //console.info("kwMdl::retrieve() mdls is ", this.mdls);

        if (kw.isNull(this.mdls))
        {
            console.error("kwMdl::retrieve() mdls is invalid.");
            return Nothing;
        }
        //console.info("kwMdl::retrieve() mdls is ", this.mdls);

        const type: kwtMdl = this.mdls[sMdl];
        if (kw.isNull(type))
        {
            console.error("kwMdl::retrieve() mdl for [", sMdl, "] is not available.");
            return Nothing;
        }
        //console.info("kwMdl::retrieve() type is ", type);

        const sType = type.sType;
        if (!kw.isString(sType))
        {
            console.error("kwMdl::retrieve() sType is invalid.");
            return Nothing;
        }
        //console.info("kwMdl::retrieve() sType is ", sType);

        const nType: kweMdl = kwMdlSrvc.toEnum(sType);
        if (!kwMdlSrvc.in(nType))
        {
            console.error("kwMdl::retrieve() nType is invalid.");
            return Nothing;
        }

        if (nType !== kweMdl.sub)
        {
            console.error("kwMdl::retrieve() nType is invalid.");
            return Nothing;
        }

        const mdl: kwMdl = new kwMdlSub(type);
        if (!mdl.init())
        {
            console.error("kwMdl::get() error initialising mdl.");
            return Nothing;
        }

        return mdl;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwMdls)
    }

}
