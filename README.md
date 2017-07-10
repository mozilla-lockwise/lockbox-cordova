# Lockbox Cordova #

Cordova project for the mobile Lockbox app.

## Prerequisites ##

* Node (>= 6.0)
* [Cordova](https://cordova.apache.org/) (via `npm install -g`)
* [Xcode](https://developer.apple.com/xcode/) (and command line tools installed and set via `xcode-select`)
* [Android Studio](https://developer.android.com/studio/) (and local paths set after running through setup wizard)
* [Java runtime](http://www.oracle.com/technetwork/java/javase/downloads/index.html) (check using `java --version`)

## Building ##

```
git clone https://github.com/mozilla-lockbox/lockbox-cordova.git
cd lockbox-cordova
cordova prepare [ios|android]
cordova build
```

## Running iOS ##

* Open the `platforms/ios/Lockbox.xcodeproj` project in Xcode
* Set the "active scheme" (iOS device)
* Build and Run

## Running Android ##

* Open the `platforms/android/` project in Android Studio
* Attempt to "Build APK" (may have more dependencies to install)
* Run
