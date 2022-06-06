/**********************************************************************
 *
 * kwNg/BS/rslt/kwBSRsltVal.ts
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
import {Injectable }       from '@angular/core';

import {kwRslt }           from "@kw/base/class";
import {kwBSTraceVal }     from "@kw/ng/bs";
import {kwNgStDataVal }    from "@kw/ng/class";

@Injectable()
export class kwBSRsltVal extends kwNgStDataVal
{
    constructor(srvcTrace: kwBSTraceVal)
    {
        super(srvcTrace);

        //console.log(this.sClass,"::constructor() called.");
    }

//@formatter:on

    public get(): kwRslt
    {
        return <kwRslt>super.get();
    }
}
