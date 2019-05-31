import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.page.html',
	styleUrls: ['./alert.page.scss']
})
export class AlertPage implements OnInit {
	titulo: string;
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
					text: 'Ok',
					handler: () => {
						console.log('Confirm Ok');
					}
				}
			]
		});

		await alert.present();
	}
	async presentAlertPrompt() {
		const input = await this.alertCtrl.create({
			header: 'Input',
			subHeader: 'Ingrese su nombre:',
			inputs: [
				{
					name: 'txtNombre',
					type: 'text',
					placeholder: 'Nombre'
				}
			],
			buttons: [
				{
					text: 'Cancelar',
					handler: () => {
						console.log('Confirm Cancel');
					}
				},
				{
					text: 'Ok',
					handler: data => {
						console.log('Confirm Ok', data);
						this.titulo = data.txtNombre;
					}
				}
			]
		});

		await input.present();
	}
}
