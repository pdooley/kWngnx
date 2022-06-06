/**********************************************************************
 *
 * kw/class/api/kwtBS.ts
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
import { kwtAttr }              from "@kw/base/class";
import { kwtCred }              from "@kw/base/class";
import { kwtDisp }              from "@kw/base/class";
import { kwtFltr }              from "@kw/base/class";
import { kwtRoutes }            from "@kw/base/class";
import { kwtRslt }              from "@kw/base/class";
import { kwtSrvc }              from "@kw/base/class";
//@formatter:on


export interface kwtBS
{
    apis: object;
    attrs: kwtAttr[];
    bAutoLogin: boolean;
    bTraceApp: boolean;
    bTraceRoute: boolean;
    bTraceState: boolean;
    credentials: kwtCred;
    display: kwtDisp;
    fltr: kwtFltr;
    mdls: object;
    rslt: object;
    sMode: string;
    sRedirect: string;
    routes: kwtRoutes;
    srvcs: kwtSrvc[];
}
