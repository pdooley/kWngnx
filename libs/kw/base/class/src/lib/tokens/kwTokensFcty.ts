/**********************************************************************
 *
 * kw/class/tokens/kwTokensFcty.ts
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
import {kwTokens }              from "./kwTokens";
import {kwTokenType }           from "@kw/base/class";
//@formatter:on


const sTAG: string = "tokens";


export class kwTokensFcty
{
    static create(info: kwtBS): kwTokens
    {
        //console.log("kwTokensFcty::create() called");

        if (kw.isNull(info))
        {
            console.error("kwTokensFcty::create() info is invalid");
            return;
        }
        //console.info("kwTokensFcty::create() info is ", info);

        const list: kwTokenType[] = info[sTAG];
        if (!kw.isArray(list))
        {
            console.error("kwTokensFcty()::create() list is invalid.");
            return;
        }
        //console.info("kwTokensFcty()::create() list is ", list);

        const tokens: kwTokens = new kwTokens(list);
        if (!tokens.init())
        {
            console.error("kwTokensFcty::create() error initializing tokens.");
            return;
        }
        //console.info("kwTokensFcty::create() tokens is ", tokens);

        return tokens;
    }

}

