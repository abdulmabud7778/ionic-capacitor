import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import '@codetrix-studio/capacitor-google-auth';
import { FacebookLogin } from '@capacitor-community/facebook-login';
import { HttpClient } from '@angular/common/http';
import { Plugins } from '@capacitor/core';
import { of, from, interval } from 'rxjs';
import { map, delay } from 'rxjs/operators';


@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	token;
	user;
	counter: number = 0;
	source = ['🐦', '😺', '🐕', '🐊'];
	constructor(private router: Router, private http: HttpClient) { }

	ngOnInit() {
		const data = interval(1000).pipe(map(res => res + 10), delay(10000));
		const dataSubs = data.subscribe(res => {
			this.counter = res;
			console.log(res);
			// this.print('add-data', res);
			if (this.counter >= 22) {
				dataSubs.unsubscribe();
			}
		});
	 
	}

	print(id, data) {
		const ul = document.getElementById(id);
		const node = document.createElement('li');
		const nodeText = document.createTextNode(data);
		node.appendChild(nodeText);
		ul.appendChild(node);
	}

	async login() {
    const FACEBOOK_PERMISSIONS = ['email', 'user_birthday'];
    const result = await Plugins.FacebookLogin.login({permissions: FACEBOOK_PERMISSIONS});
		 console.log(result);
		 if (result.accessToken && result.accessToken.userId) {
      this.token = result.accessToken;
      this.loadUserData();
    } else if (result.accessToken && !result.accessToken.userId) {
      // Web only gets the token but not the user ID
      // Directly call get token to retrieve it now
      // this.getCurrentToken();
    } else {
      // Login failed
    }
	}
	
	async loadUserData() {
    const url = `https://graph.facebook.com/${this.token.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${this.token.token}`;
    this.http.get(url).subscribe(res => {
			this.user = res;
			console.log(this.user);
			this.router.navigate(['/home', res]);
    });
  }

	async loginWithGoogle() {
		console.log('line 20');
		const googleUser = await Plugins.GoogleAuth.signIn(null);
		console.log(googleUser);
		console.log(googleUser.displayName);
		this.router.navigate(['/home', googleUser]);
	}

	async signOut() {
		const auth2 = await Plugins.GoogleAuth.getAuthInstance();
		auth2.signOut().then(function () {
		  console.log('User signed out.');
		});
	  }

	goRelevantPage() {
		this.router.navigate(['/home']);
	}



}
