/**********************************************************************
 *
 * kwNg/BS/srvc/kwBSSrvcList.ts
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
import {Injectable }        from '@angular/core';

import {kwBSTraceVal }      from "@kw/ng/bs";
import {kwtSrvc }           from "@kw/base/class";
import {kwNgStDataList }    from "@kw/ng/class";


const sTAG_ID: string       = "id";


@Injectable()
export class kwBSSrvcList extends kwNgStDataList
{
    constructor(srvcTrace: kwBSTraceVal)
    {
        super(
            srvcTrace,
            sTAG_ID     );

        //console.log(this.sClass,"::constructor() called.");
    }

//@formatter:on

    public get(): kwtSrvc[]
    {
        return <kwtSrvc[]>super.get();
    }
}
