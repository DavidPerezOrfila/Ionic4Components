import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.page.html',
	styleUrls: ['./alert.page.scss']
})
export class AlertPage implements OnInit {
	constructor(private alertCtrl: AlertController) {}

	ngOnInit() {}
	async presentAlert() {
		const alert = await this.alertCtrl.create({
			header: 'Alert',
			subHeader: 'Subtitle',
			message: 'This is an alert message.',
			buttons: [
				{
					text: 'Cancel',
					cssClass: 'secondary',
					handler: blah => {
						console.log('Confirm Cancel: blah');
					}
				},
				{
					text: 'Okay',
					handler: () => {
						console.log('Confirm Okay');
					}
				}
			]
		});

		await alert.present();
	}
}
