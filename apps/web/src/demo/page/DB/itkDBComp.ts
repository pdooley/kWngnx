/**********************************************************************
 *
 * app/class/DB/itkDBComp.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

// @formatter:off
import { Component }        from '@angular/core';
import { MatDialogRef }     from "@angular/material";
import { OnInit }           from '@angular/core';


import { kwDlg }            from '@kw/ng/view';
import { kwViewBtnType }    from '../../../kwDlg/class/viewBtn/kwViewBtnType';
import { kwMetricMsg }		    from '@kw/ng/state';
import { kwMetricMsgFcty }		from '@kw/ng/state';

import { crit }	                from "@itkState/crit/crit";
import { itkGRMetricEnum }      from "@itkEnum/itkGRMetricEnum";
import { OptionChoice }	        from '@itkTypes/option-choice';
import { itkCritList }          from '@itkState/crit/itkCritList';
import { itkOptionsState }      from '@itkState/itkOptionsState';
import { srvcStatePage }        from '@itkState/page/srvcStatePage';

import { kwDlgStateData }	from '../../../kwNgDlg/state/kwDlgStateData';
// @formatter:on


@Component({
	selector: 'app-dashboard',
	templateUrl: './itkDBComp.html',
	styleUrls: [ './itkDBComp.css' ]
})
export class itkDBComp implements OnInit
{
	info: kwViewType = DLG;

	constructor(
		private srvcDlg: kwDlgStateData,
		private dlgRef: MatDialogRef<kwDlg>)
	{
		//console.log("itkDBComp::constructor() called.");
	}

	ngOnInit(): void
	{
		//console.log("itkDBComp::ngOnInit() called.");
		//console.info("itkDBComp::ngOnInit() info is [" , this.info, "]");
		this.srvcDlg.change(this.info);
	}

	onCancel(): void
	{

		//console.log("itkDBComp::onCancel() called.");
		this.dlgRef.close();
	}

}
