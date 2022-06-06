/**********************************************************************
 *
 * kwNg/BS/mdl/kwBSMdlList.ts
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
import { Injectable }       from '@angular/core';

import { kwBSTraceVal }     from "@kw/ng/bs";
import { kwNgStDataList }   from "@kw/ng/class";
import { kwtMdl }           from "@kw/base/class";


const sTAG_ID: string       = "id";


@Injectable()
export class kwBSMdlList extends kwNgStDataList
{
    constructor(srvcTrace: kwBSTraceVal)
    {
        super(
            srvcTrace,
            sTAG_ID        );

        //console.log(this.sClass,"::constructor() called.");
    }

//@formatter:on

    public get(): kwtMdl[]
    {
        return <kwtMdl[]>super.get();
    }
}
