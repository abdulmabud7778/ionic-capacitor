import { Component } from '@angular/core';
import { Share } from '@capacitor/share';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastController, Platform } from '@ionic/angular';
import { CommonService } from '../common.service';
import { FacebookLogin } from '@capacitor-community/facebook-login';
import { Plugins } from '@capacitor/core';
import { FcmService } from '../services/fcm.service';



declare var Razorpay: any;

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    subscription;
    displayName: string = '';
    loginWith: string = '';
    email: string = '';
    razorPayOptions = {
        key: '',
        amount: '',
        currency: 'INR',
        name: '',
        description: 'RAZOR payment',
        order_id: '',
        handler: (res) => {
            console.log(res);
        }

    }
    constructor(
        private _fcmService:FcmService, 
        private _userService: CommonService, 
        public toastController: ToastController, 
        private activatedRoute: ActivatedRoute,
        public platform: Platform,
        public router: Router
        )
        { 
            
            this.platform.ready().then(() => {
                this._fcmService.initPush();
            })
        }

    ionViewWillEnter() {
        setTimeout(() => {
            this.activatedRoute.params.subscribe((data) => {
                console.log(data);
                if (data) {
                    if (data.displayName) {
                        this.displayName = data.displayName;
                        this.email = data.email;
                        this.loginWith = 'Google';
                    } else {
                        this.displayName = data.name;
                        this.email = data.email;
                        this.loginWith = 'Facebook';
                    }
                }
            });
        }, 1000);
    }

    goToPage(page) {
        this.router.navigate([`/${page}`]);
    }

    async basicShare() {
        await Share.share({
            title: 'See cool stuff',
            text: 'Really awesome thing you need to see right meow',
            url: 'http://ionicframework.com/',
            dialogTitle: 'Share with buddies',
        });
    }

    async logout() {
        await Plugins.FacebookLogin.logout();
        // this.user = null;
        // this.token = null;
    }

    async showToaster(msg) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 4000,
            cssClass: "textaligntoast"
        });
        await toast.present();
    }


    buyRazorPay() {
        console.log('test');
        // this.isdataLoaded = false;
        this.subscription = new Subscription();
        try {
            this.subscription.add(
                this._userService.razorPayOrder({ amount: 45 })
                    .subscribe((response) => {
                        // this.userList = response;
                        // console.log(response);
                        // this.isdataLoaded = true;
                        this.razorPayOptions.key = response['key'],
                            this.razorPayOptions.amount = '45',
                            this.razorPayOptions.name = 'abdul',
                            this.razorPayOptions.order_id = response['value']['id'],
                            this.razorPayOptions.handler = (response) => {
                                console.log(response);
                                // this.showMessage(response['razorpay_order_id']);
                                this.showToaster('Successfully Paid, transaction id is: ' + response['razorpay_order_id']);
                            }
                        var rzp1 = new Razorpay(this.razorPayOptions);
                        rzp1.open();
                        console.log('opened');

                    }))
        } catch (error) {
            console.log(error);
        }
    }


}
