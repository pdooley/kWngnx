
/**********************************************************************
 *
 * kw/class/attr/kwAttrStyl.ts
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

import { kwAttr }           from "./kwAttr";
import { kwLog }            from "@kw/base/core";
import { kwtAttr }          from "./kwtAttr";
import { kwView }            from "@kw/base/class";


const sTAG: string = "Styl";
const sDEFAULT: string = "default";

export class kwAttrStyl extends kwAttr
{
    constructor(
        attr: kwtAttr,
        sParent: string,
        view: kwView )
    {
        super(attr, sTAG, sParent, view, sDEFAULT);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

}
