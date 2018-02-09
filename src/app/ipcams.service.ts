import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class IpcamsService {

  constructor(private sanitizer: DomSanitizer) { }
		readonly numberOfCams = 12;
		
		getCams(){
				let cams: Array<any> = [];
				let urlIds = ['HRICAy_cf5I','lPZRmkVLeOE', 'RjR71XpAu0I', 'GBxxjhnjH4Y', 'Lf6gl4-MPd0', 'CjSNLmb0Ndw'];
				urlIds.forEach((id, i) => {
						cams.push({
								id: i,
								name: "Camara " + i,
								url: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+id)
						});
				});
				return cams;
		}
}
