/**********************************************************************
 *
 * kwNg/class/kwNgCtrlPageMsgUrl.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import { ActivatedRoute }           from '@angular/router';

import { kwLog }                    from "@kw/kwLog";
import { kwNgCtrlPageMsg }		    from '@kw/ng/class';
import { kwNgStDataList }           from "@kw/ng/class";
import { kwNgStDataVal }            from "@kw/ng/class";
import { kwNgStMsg }                from "@kw/ng/class";
import { kwStMsgFcty }              from "@kw/base/state";



export abstract class kwNgCtrlPageMsgUrl    extends kwNgCtrlPageMsg
{

    constructor(
        srvcInit:           kwNgStDataVal,
        srvcView:           kwNgStDataVal,
        srvcData:           kwNgStDataList,
        srvcFcty:           kwStMsgFcty,
        srvcMsg:            kwNgStMsg,
        private srvcRoute:  ActivatedRoute ) {
        super(
             srvcInit,
            srvcView,
            srvcData,
            srvcFcty,
            srvcMsg);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        // this must be here, otherwise it will miss it when it fires.
        this.retrieveFltrData();
    }

//@formatter:on

    retrieveFltrData(): void
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveFltrData");
        //console.log(log.called());

        this.srvcRoute.params.subscribe(params =>
        {
            //console.info(log.isObj("params"), params, ']');
            this.storeFltrData(params);
        });
    }


}
