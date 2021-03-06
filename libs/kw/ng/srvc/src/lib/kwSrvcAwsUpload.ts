/**********************************************************************
 *
 * kwNg/srvc/aws/kwSrvcAWS.ts
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
import { Injectable }           from '@angular/core';

import { kw }                   from "@kw/base/core";
import { kwBSAWSVal }           from '@kw/ng/bs'
import { kwErrVal }             from '@kw/ng/state'

//@formatter:on

@Injectable()
export class kwSrvcAWS
{

	constructor(
		private srvcAWS: kwBSAWSVal,
		private srvcErr: kwErrVal   )
	{
		//console.log("kwSrvcAWS::constructor() called.");
	}

	upload(
		sFile: string,
		sKey: string,
		sBucket: string ): boolean
	{
		//console.log("kwSrvcAWS::upload() called.");

		if (!kw.isString(sFile))
		{
			console.error("kwSrvcAWS::upload() sFile is invalid.");
			return false;
		}
		//console.info("kwSrvcAWS::upload() sFile is [", sFile, "]");

		if (!kw.isString(sKey))
		{
			console.error("kwSrvcAWS::upload() sKey is invalid.");
			return false;
		}
		//console.info("kwSrvcAWS::upload() sKey is [", sKey, "]");

		if (!kw.isString(sBucket))
		{
			console.error("kwSrvcAWS::upload() sBucket is invalid.");
			return false;
		}
		//console.info("kwSrvcAWS::upload() sBucket is [", sBucket, "]");

		const aws = this.srvcAWS.get();
		if (!kw.isNull(aws))
		{
			console.error("kwSrvcAWS::upload() aws is invalid.");
			return false;
		}
		//console.info("kwSrvcAWS::upload() aws is [", aws, "]");


		const srvc = aws.getSrvc();
		if (kw.isNull(srvc))
		{
			console.error("kwSrvcAWS::upload() srvc is invalid.");
			return false;
		}
		//console.info("kwSrvcAWS::upload() srvc is [", srvc, "]");

		const params = {
			Bucket: sBucket,
			Key: sKey,
//			Body: file
		}

		srvc.upload(params, function (err, data)
		{
			if (err) {
				//console.log('kwSrvcAWS::upload() error uploading your file: ', err);
				this.err.change(err);
				return false;
			}

			//console.log('Successfully uploaded file.', data);
			return true;
		});
	}

}
