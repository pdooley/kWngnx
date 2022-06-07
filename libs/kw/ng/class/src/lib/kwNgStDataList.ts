/**********************************************************************
 *
 * kwNg/state/kwNgStDataList.ts
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
import { Subject}           from 'rxjs/Subject';

import { AppInjector }      from '@app/appInjector';

import { kw }               from "@kw/base/core"
import { kwBSTraceVal }     from "@kw/ng/bs";
import { kwStDataList }     from "@kw/base/state";


export class kwNgStDataList extends kwStDataList
{
    private theSignal = new Subject<Object[]>();
    public changed$ = this.theSignal.asObservable();

    public constructor(
        srvcTrace: kwBSTraceVal,
        sTagId: string,
        sType?: string   )
    {
        super(
            srvcTrace,
            sTagId,
            sType   );
    }

//@formatter:on

    protected broadcast(data: any)
    {
        //console.log(this.sClass, "::broadcast() called.");

        if (!kw.isArray(data))
        {
            console.error(this.sClass, "::broadcast() data is invalid.");
            return;
        }
        this.theSignal.next(data);
    }

}
