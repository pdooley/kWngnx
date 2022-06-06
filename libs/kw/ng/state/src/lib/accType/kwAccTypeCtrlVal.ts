/**********************************************************************
 *
 * kwNg/ctrl/accType/kwAccTypeCtrlVal.ts
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
import { Component }            from "@angular/core";

import { kwAccEnum }            from "@kw/base/class";
import { kwAccSrvc }            from "@kw/base/class";
import { kwBSVal }              from "@kw/ng/bs";
import { kwNgCtrlDataVal }      from "@kw/ng/class";
import { kwNgStDataVal }        from "@kw/ng/class";

import { kwAccTypeVal }         from "./kwAccTypeVal";

//@formatter:on


@Component({
    selector: 'kw-acc-type-ctrl-val',
    template: `<br>`,
})
export class kwAccTypeCtrlVal extends kwNgCtrlDataVal
{
    constructor(
        private srvcSrc: kwBSVal,
        private srvcDst: kwAccTypeVal     )
    {
        super();
        //console.log("kwAccTypeCtrlVal::constructor() called");
    }

    protected load(srvcSrc: kwNgStDataVal): boolean
    {
        //console.log("kwAccTypeCtrlVal::ngOnInit() called");

        let nType: kwAccEnum;
        //const nType: kwAccEnum = srvcSrc.getAccType();
        if (!kwAccSrvc.in(nType))
        {
            console.error("kwAccTypeCtrlVal::ngOnInit() error retrieving services.");
            return false;
        }
        //console.info("kwAccTypeCtrlVal::ngOnInit() nType is [", nType, "]");

        this.srvcDst.change(nType);

        return true;
    }
}
