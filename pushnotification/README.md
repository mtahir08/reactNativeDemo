# Push notification

1. Create Project on Firebase https://console.firebase.google.com/
2. Goto "Cloud Messaging" option from sidebar
3. Select your platform
4. Fill required options and click on "Register"
5. Now follow steps on firebase
6. Goto android/app/build.gradle and add following code in dependencies
   ```implementation 'com.google.firebase:firebase-analytics:17.2.0'
   implementation 'com.google.firebase:firebase-messaging:20.0.1'
   ```
7. Goto android/app/main/MainApplication.java file and add following line in upper part
   `import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;`
   Also add following line in getPackages()
   `packages.add(new RNFirebaseMessagingPackage());`
8. Goto android/app/main/AndroidManifest.xml and add this line
   <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />

9. Goto android/setting.gradle

```include ':react-native-firebase'
project(':react-native-firebase').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-firebase/android')
```

10. install `react-native-firebase` and check code in App.js
