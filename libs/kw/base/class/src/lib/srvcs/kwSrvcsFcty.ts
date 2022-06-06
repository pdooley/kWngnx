/**********************************************************************
 *
 * kw/class/srvcs/kwSrvcsFcty.ts
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
import {kw }                    from "@kw/base/core";
import {kwtBS }                 from "@kw/base/class";
import {kwSrvcs }               from "./kwSrvcs";
import {kwtSrvc }               from "@kw/base/class";
//@formatter:on


const sTAG: string = "services";


export class kwSrvcsFcty
{
    static create(info: kwtBS): kwSrvcs
    {
        //console.log("kwSrvcsFcty::create() called");

        if (kw.isNull(info))
        {
            console.error("kwSrvcsFcty::create() info is invalid");
            return;
        }
        //console.info("kwSrvcsFcty::create() info is ", info);

        const list: kwtSrvc[] = info[sTAG];
        if (!kw.isArray(list))
        {
            console.error("kwSrvcsFcty()::create() list is invalid.");
            return;
        }
        //console.info("kwSrvcsFcty()::create() list is ", list);

        const srvcs: kwSrvcs = new kwSrvcs(list);
        if (!srvcs.init())
        {
            console.error("kwSrvcsFcty::create() error initializing srvcs.");
            return;
        }
        //console.info("kwSrvcsFcty::create() srvcs is ", srvcs);

        return srvcs;
    }

}

