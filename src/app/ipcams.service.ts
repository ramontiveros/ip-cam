import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class IpcamsService {

  constructor(private sanitizer: DomSanitizer) { }
		readonly camsByGroup = 4;
		
		getCams(){
				let cams: Array<any> = [];
				let urlIds = ['cSp1dM2Vj48', 'aBr2kKAHN6M', '9lQXs5illS0', 'ssXatmC1dv0', 'wb49-oV0F78', 'xZNBFcwd7zc', 'VSF2xE07MvU', 'ZfuNTqbHE8', 'HRICAy_cf5I','lPZRmkVLeOE', 'RjR71XpAu0I', 'GBxxjhnjH4Y', 'Lf6gl4-MPd0', 'CjSNLmb0Ndw'];
				urlIds.forEach((id, i) => {
						if ((i % this.camsByGroup) == 0)
								cams.push(new Array<any>());
						
						cams[~~(i/this.camsByGroup)].push({
								id: i,
								name: "Camara " + i,
								url: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+id)
						});
				});
				return cams;
		}
}
