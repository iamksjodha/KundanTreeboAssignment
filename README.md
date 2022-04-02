# KundanTreeboAssignment

#ForRunTheApp 
1. First run command yarn in terminal (It will install all the packages).

2. Run react-native run-android command in terminal (It will run the app locally).

#forReleaseAndroidBuild
1. react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

2. cd android && ./gradlew clean && ./gradlew assembleRelease
