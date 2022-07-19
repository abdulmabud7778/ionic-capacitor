import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Platform } from '@ionic/angular';
import { GoogleMap } from '@capacitor/google-maps';


@Component({
	selector: 'app-geolocation-info',
	templateUrl: './geolocation-info.page.html',
	styleUrls: ['./geolocation-info.page.scss'],
})
export class GeolocationInfoPage implements OnInit {
	@ViewChild('map') mapRef: ElementRef<HTMLElement>;
	newMap: GoogleMap;
	constructor(private platform: Platform) {
		this.platform.ready().then(() => {
			this.init();
			
		})
	}

	ngOnInit() {
	}

	init() {
		const printCurrentPosition = async () => {
			const coordinates = await Geolocation.getCurrentPosition();
			console.log('Current position:', coordinates);
		};
		printCurrentPosition();
	}

	async map() {
		const mapRef = document.getElementById('map');
		const apiKey = 'AIzaSyCj216aiQwMD98a3Dkm6GlaCx-8ps8KtOY&libraries=places';
		const newMap = await GoogleMap.create({
			id: 'my-map', // Unique identifier for this map instance
			element: mapRef, // reference to the capacitor-google-map element
			apiKey: apiKey, // Your Google Maps API Key
			config: {
			  center: {
				// The initial position to be rendered by the map
				lat: 33.6,
				lng: -117.9,
			  },
			  zoom: 8, // The initial zoom level to be rendered by the map
			},
		  });
	}

	async createMap() {
		console.log(52);
		const apiKey = 'AIzaSyCj216aiQwMD98a3Dkm6GlaCx-8ps8KtOY&libraries=places';
		this.newMap = await GoogleMap.create({
		  id: 'my-cool-map',
		  element: this.mapRef.nativeElement,
		  apiKey: apiKey,
		  config: {
			center: {
			  lat: 33.6,
			  lng: -117.9,
			},
			zoom: 8,
		  },
		});
	  }

}
