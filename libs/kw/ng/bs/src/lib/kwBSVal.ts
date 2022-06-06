/**********************************************************************
 *
 * kwNg/BS/kwBSVal.ts
 *
 * author: Patrick Dooley
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {Injectable }        from '@angular/core';

import {kwBS }             from "@kw/base/class";
import {kwBSTraceVal }     from "@kw/ng/bs";
import {kwNgStDataVal }    from "@kw/ng/class";

//@formatter:on

@Injectable()
export class kwBSVal extends kwNgStDataVal
{
    constructor(srvcTrace: kwBSTraceVal)
    {
        super(srvcTrace);

        //console.log(this.sClass,"::constructor() called.");
    }

    public get(): kwBS
    {
        return <kwBS>super.get();
    }
}
