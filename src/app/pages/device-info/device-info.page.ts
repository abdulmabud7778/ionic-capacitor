import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';
import { Platform } from '@ionic/angular';

@Component({
	selector: 'app-device-info',
	templateUrl: './device-info.page.html',
	styleUrls: ['./device-info.page.scss'],
})
export class DeviceInfoPage implements OnInit {
	deviceInfoDetail;
	batteryInfoDetail;
	constructor(private platform: Platform) {
		this.platform.ready().then(() => {
			this.init();
		})
	}

	ngOnInit() {
	}

	init() {
		const logDeviceInfo = async () => {
			const info = await Device.getInfo();
			console.log(24);
			console.log(info);
			this.deviceInfoDetail = JSON.stringify(info);
		};

		const logBatteryInfo = async () => {
			const info = await Device.getBatteryInfo();

			console.log(info);
			this.batteryInfoDetail = JSON.stringify(info);
		};
		logDeviceInfo();
		logBatteryInfo();
	}

}
