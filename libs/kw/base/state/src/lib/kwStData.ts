/**********************************************************************
 *
 * kw/state/kwStData.ts
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
import { kwTrace}           from "@kw/base/class";
import { kwSt }             from "./kwSt";
//@formatter:off


export abstract class kwStData extends kwSt
{
    public constructor(srvcTrace: kwTrace)
    {
        super(srvcTrace);
        //console.log(this.sClass, "::constructor() called.");
    }

    public static is(val: object): boolean
    {
        return kw.is(val, kwStData);
    }
}
