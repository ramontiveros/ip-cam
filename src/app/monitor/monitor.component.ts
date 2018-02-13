import { Component, OnInit } from '@angular/core';
import { IpcamsService } from '../ipcams.service';

@Component({
  selector: 'app-root',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
		cams: Array<any> = [];
		public currentPage = 0;
		
		constructor(private camsService: IpcamsService) {
				this.camsGroups = this.camsService.getCams();
		}

		ngOnInit() {
				
		}

		next() {
				this.currentPage++:
		}

		prev() {
				this.currentPage--;
		}
}
