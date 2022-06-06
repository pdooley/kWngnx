/**********************************************************************
*
* kw/class/kwParamFull.ts
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
import {kw }                from "@kw/base/core";

import {kwMap }              from "@kw/base/class";
import {kwParam }            from "./kwParam";
import {kwParamEnum }        from "./kwParamEnum";
import {kwParamType }        from "./kwParamType";
import {kwVarEnum }          from "@kw/base/class";
import {kwVarSrvc }          from "@kw/base/class";

import {kwXField }         from "@kw/base/class";
import {kwXFieldEnum }     from "@kw/base/class";
import {kwXFieldArr }      from "@kw/base/class";
import {kwXFieldBool }     from "@kw/base/class";
import {kwXFieldCurr }     from "@kw/base/class";
import {kwXFieldCurrCode } from "@kw/base/class";
import {kwXFieldLang }     from "@kw/base/class";
import {kwXFieldLangCode } from "@kw/base/class";
import {kwXFieldNum }      from "@kw/base/class";
import {kwXFieldObj }      from "@kw/base/class";
import {kwXFieldSrvc }     from "@kw/base/class";
import {kwXFieldStr }      from "@kw/base/class";
import {kwXFieldTime }     from "@kw/base/class";
import {kwXFieldTZ }       from "@kw/base/class";
import {kwXFieldTZCode }   from "@kw/base/class";

//@formatter:on

export class kwParamFull extends kwParam
{
    constructor(
        type: kwParamType,
        private srvcCurrs: kwMap,
        private srvcLangs: kwMap,
        private srvcTZs: kwMap     )
    {
        super(kwParamEnum.full, type);
        //console.log("kwParamFull::constructor() is called.");
    }

    public init(): boolean
    {
        //console.log("kwParamFull::init() called.");

        if (kw.isNull(this.srvcCurrs))
        {
            console.error("kwParamFull::init() srvcCurrs is invalid.");
            return false;
        }

        if (kw.isNull(this.srvcLangs))
        {
            console.error("kwParamFull::init() srvcLangs is invalid.");
            return false;
        }

        if (kw.isNull(this.srvcTZs))
        {
            console.error("kwParamFull::init() srvcTZs is invalid.");
            return false;
        }

        return super.init();
    }

    private loadSrvc(sSrvc: string): kwXField | null
    {
        //console.log("kwParamFull::loadSrvc() called.");

        if (!kw.isString(sSrvc))
        {
            console.error("kwParamFull::loadSrvc() sSrvc is undefined.");
            return null;
        }
        //console.info("kwParamFull::loadSrvc() sSrvc is ", sSrvc);

        if (!kwMap.is(this.srvcCurrs))
        {
            console.error("kwParamFull::loadSrvc() srvcCurrs is undefined.");
            return null;
        }
        //console.info("kwParamFull::loadSrvc() srvcCurrs is ", this.srvcCurrs);

        if (!kwMap.is(this.srvcLangs))
        {
            console.error("kwParamFull::loadSrvc() srvcLangs is undefined.");
            return null;
        }
        //console.info("kwParamFull::loadSrvc() srvcLangs is ", this.srvcLangs);

        if (!kwMap.is(this.srvcTZs))
        {
            console.error("kwParamFull::loadSrvc() srvcTZs is undefined.");
            return null;
        }
        //console.info("kwParamFull::loadSrvc() srvcTZs is ", this.srvcTZs);

        const nType: kwXFieldEnum = kwXFieldSrvc.toEnum(sSrvc);
        if (!kwXFieldSrvc.in(nType))
        {
            console.error("kwParamFull::loadSrvc() field [", sSrvc, "] is not valid.");
            return null;
        }
        //console.info("kwParamFull::loadSrvc() nType is ", nType);

        let field: kwXField;

        switch ( nType )
        {
            case kwXFieldEnum.arr:
            {
                field = new kwXFieldArr();
                break;
            }

            case kwXFieldEnum.bool:
            {
                field = new kwXFieldBool();
                break;
            }

            case kwXFieldEnum.curr:
            {
                field = new kwXFieldCurr(this.srvcCurrs);
                break;
            }

            case kwXFieldEnum.currcode:
            {
                field = new kwXFieldCurrCode();
                break;
            }

            case kwXFieldEnum.lang:
            {
                field = new kwXFieldLang(this.srvcLangs);
                break;
            }

            case kwXFieldEnum.langcode:
            {
                field = new kwXFieldLangCode();
                break;
            }

            case kwXFieldEnum.num:
            {
                field = new kwXFieldNum();
                break;
            }

            case kwXFieldEnum.obj:
            {
                field = new kwXFieldObj();
                break;
            }

            case kwXFieldEnum.str:
            {
                field = new kwXFieldStr();
                break;
            }

            case kwXFieldEnum.time:
            {
                field = new kwXFieldTime();
                break;
            }

            case kwXFieldEnum.tz:
            {
                field = new kwXFieldTZ(this.srvcTZs);
                break;
            }

            case kwXFieldEnum.tzcode:
            {
                field = new kwXFieldTZCode();
                break;
            }
        }

        if ( kw.isNull(field))
        {
            console.error("kwParamFull::loadSrvc() field is not valid.");
            return null;
        }
        //console.info("kwParamFull::loadSrvc() field is ", field);

        return field;
    }

    processDefault(nVar: kwVarEnum, val: any): boolean
    {
        //console.log("kwParamFull::processDefault() called.");

        if (!kwVarSrvc.in(nVar))
        {
            console.error("kwParamFull::processDefault() nVar is invalid.");
            return false;
        }

        if (!kw.isString(val))
        {
            //console.info("kwParamFull::processDefault() no default value.");
            return true;
        }

        switch (nVar)
        {
            case kwVarEnum.curr:
            {
                const obj = this.srvcCurrs.getByCode(val);
                if (kw.isNull(obj))
                {
                    console.error("kwParamFull::processDefault() obj is not valid.");
                    return false;
                }
                //console.info("kwParamFull::processDefault() obj is ", obj);

                this.setDefault(obj);
                break;
            }

            case kwVarEnum.lang:
            {
                const obj = this.srvcLangs.getByCode(val);
                if (kw.isNull(obj))
                {
                    console.error("kwParamFull::processDefault() obj is not valid.");
                    return false;
                }
                //console.info("kwParamFull::processDefault() obj is ", obj);

                this.setDefault(obj);
                break;
            }

            case kwVarEnum.tz:
            {
                const obj = this.srvcTZs.getByCode(val);
                if (kw.isNull(obj))
                {
                    console.error("kwParamFull::processDefault() obj is not valid.");
                    return false;
                }
                //console.info("kwParamFull::processDefault() obj is ", obj);

                this.setDefault(obj);
                break;
            }

            default:
            {

            }
        }

        return true;
    }

}
