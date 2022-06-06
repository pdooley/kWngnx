/**********************************************************************
 *
 * kw/class/kwParamSub.ts
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
import {kw }                        from "@kw/base/core";
import {kwVarEnum }                from "@kw/base/class";

import {kwParam }                    from "./kwParam";
import {kwParamEnum }                from "./kwParamEnum";
import {kwParamType }                from "./kwParamType";
import {kwParamSrvc }              from "./kwParamSrvc";

import {kwXField }                    from "@kw/base/class";
import {kwXFieldEnum }             from "@kw/base/class";
import {kwXFieldSrvc }             from "@kw/base/class";
import {kwXFieldArr }              from "@kw/base/class";
import {kwXFieldBool }             from "@kw/base/class";
import {kwXFieldNum }              from "@kw/base/class";
import {kwXFieldStr }              from "@kw/base/class";
import {kwXFieldTime }             from "@kw/base/class"; import {kwXFieldObj} from "@kw/base/class";
//@formatter:on

export class kwParamSub extends kwParam
{

    constructor(type: kwParamType)
    {
        super(kwParamEnum.sub, type);
        //console.log("kwParamSub::constructor() is called.");
    }

    loadSrvc(sSrvc: string): kwXField
    {
        //console.log("kwParamSub::loadSrvc() called.");
        if (!kw.isString(sSrvc))
        {
            console.error("kwParamSub::loadSrvc() sType is undefined.");
            return;
        }
        //console.info("kwParamSub::loadSrvc() sType is ", sType);

        const nType: kwXFieldEnum = kwXFieldSrvc.toEnum(sSrvc);
        if (!kwXFieldSrvc.in(nType))
        {
            console.error("kwParamSub::loadSrvc() nType is undefined.");
            return;
        }
        //console.info("kwParamSub::loadSrvc() nType is ", nType);

        let xSrvc: kwXField;

        switch ( nType )
        {
            case kwXFieldEnum.arr:
            {
                xSrvc = new kwXFieldArr();
                break;
            }

            case kwXFieldEnum.bool:
            {
                xSrvc = new kwXFieldBool();
                break;
            }

            case kwXFieldEnum.num:
            {
                xSrvc = new kwXFieldNum();
                break;
            }

            case kwXFieldEnum.obj:
            {
                xSrvc = new kwXFieldObj();
                break;
            }

            case kwXFieldEnum.str:
            {
                xSrvc = new kwXFieldStr();
                break;
            }

            case kwXFieldEnum.time:
            {
                xSrvc = new kwXFieldTime();
                break;
            }
        }

        if ( kw.isNull(xSrvc))
        {
            console.error("kwParamSub::loadSrvc() xSrvc is not valid.");
            return;
        }
        //console.info("kwParamSub::loadSrvc() xSrvc is ", field);

        return xSrvc;
    }

    processDefault(nVar: kwVarEnum, val: any): boolean
    {
        //console.log("kwParamSub::processDefault() called.");
        return true;
    }

}
