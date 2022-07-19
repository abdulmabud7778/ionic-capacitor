package com.example.app;
import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;
import com.getcapacitor.Plugin;
import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>> () {{
        //     // Additional plugins you've installed go here
        //     add(GoogleAuth.class);
        //     add(com.getcapacitor.community.facebooklogin.FacebookLogin.class);
        //     add(com.capacitorjs.plugins.pushnotifications.PushNotificationsPlugin.class);
        //     add(com.capacitorjs.plugins.device.DevicePlugin.class);
        //     // add(com.capacitorjs.plugins.geolocation.geolocationPlugin.class);
        // }});
    }
}
