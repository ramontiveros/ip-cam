import { Component, OnInit } from '@angular/core';
import { IpcamsService } from '../ipcams.service';

@Component({
  selector: 'app-root',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
		cams: Array<any> = [];
		
		constructor(private camsService: IpcamsService) {
				this.cams = this.camsService.getCams();
		}

		ngOnInit() {
				
		}
}
