# Nativescript-Segment

A NativeScript plugin that provides easy access to the native Segment SDKs.

Up-to-date with the following native SDKs:

Version 3.0 of the iOS SDK [Official Repository](https://github.com/segmentio/analytics-ios)

Version 4.2.6 of the Android SDK [Official Repository](https://github.com/segmentio/analytics-android)

## Installation

```
tns plugin add nativescript-segment
```

For access to the native SDK type definitions, specify the definitions in your *references.d.ts*

```
/// <reference path="./node_modules/nativescript-segment/typings/objc!Analytics.d.ts" />
/// <reference path="./node_modules/nativescript-segment/typings/android!Analytics.d.ts" />
```

*Warning: Depending on your project structure, the paths shown above may be inaccurate.*

### Android

Requires the *internet* permission if not already enabled in your app.
```xml
<uses-permission android:name="android.permission.INTERNET"/>
```

### iOS

In your application's delegate:

```js
import { Segment } from 'nativescript-segment';

public applicationDidFinishLaunchingWithOptions(application, launchOptions): boolean {
    const config = {
        setDebug: true; // set to show full debug logging by the native APIs
    }
    Segment.configure(key, config);
    return true;
}
```

## Usage 

All interaction with the library should be done via static function calls on the Segment import:

```js
import { Segment } from 'nativescript-segment';

public someInteraction(type: string) {
    Segment.track(type);
}
```

For more advanced uses, or if it is required to access the base SDK methods, you can access the SDK's shared instance

```js
// iOS
Segment.ios.track('some event');

// Android
Segment.android.track('some event');
```

*Warning: accessing the SDK's methods directly potentially requires converting to native object and collection types*

## API

### configure

```js
const config: SegmentConfig = {
    trackLifeCycleEvents: true,
    recordScreenViews: true
};
Segment.configure('your segment write key', config);
```

**SegmentConfig** Properties (all optional)

| Property | Default | Description |
| --- | --- | --- |
| trackLifeCycleEvents | true | enable or disable auto tracking life-cycle events |
| recordScreenViews| true | enable or disable auto tracking of screen views |
| options | | Default integration options, see **SegmentOptions** |
| proxyUrl | null | forward all Segment calls through a proxy |
| setLogging | false | set base *INFO* logging in Android SDK and plugin itself |
| setDebug | false | Sets full debug logging in Android and iOS |
| middlewaresAndroid | [] | List of middlewares for Android. Applied in the order based on the array. See [here](https://segment.com/docs/sources/mobile/android/#middlewares) for more info |
| middlewaresIOS | [] | List of middlewares for iOS. Applied in the order based on the array. See [here](https://segment.com/docs/sources/mobile/ios/#middlewares) for more info |

**SegmentOptions** Properties (all optional)

| Property | Default | Description |
| --- | --- | --- |
| useAll | true | enables all integrations (default for Segment SDKs) |
| excluded | [] | exclude Segment from integrating with the specified services |
| included | [] | include Segment integration with the specified services (note: this will only take affect if **useAll** is set to *false*) |
    

### identify

Identify the current user.  Additional traits are supported, and custom traits are available.

```js
const traits: SegmentTraits = {
    firstName: 'Dave',
    email: 'dave@domain.com'
};
const customTraits: any {
    favoriteColor: 'blue'
};
Segment.identify('userId', traits, customTraits);
```

**SegmentTraits** Properties (all optional)

Please see [Segment's official spec](https://segment.com/docs/spec/identify/#traits) for all available traits and their descriptions.


### track

Track an event. 

```js
Segment.track('Some event');

const properties = {
    productName: 'Bread',
    revenue: 4
};
Segment.track('Product Purchased', properties);
```

Please see [Segment's official spec](https://segment.com/docs/spec/track/#properties) for details on properties to add to *track* calls.

### screen

Manually record a screen view by name and optional category.  Category is a default option for Android, but for iOS it will concatenate *category* and *name* into the same `screen`.

```js
Segment.screen('signup', 'verify password');
```

Please see [Segment's official spec](https://segment.com/docs/spec/screen/#properties) for details on *screen* calls.

### group

Associate current user with a group.  A user can belong to multiple groups.

```js
Segment.group("0e8c78ea9d97a7b8185e8632", {
  name: "Initech", 
  industry: "Technology",
  employees: 329, 
  plan: "enterprise", 
  "total billed": 830
});
```

Please see [Segment's official spec](https://segment.com/docs/spec/group/#properties) for details on *group* calls.


### alias

*alias* is how you associate one identity with another.

```js
Segment.alias(newId);
```

Please see [Segment's official spec](https://segment.com/docs/spec/alias) for details on *alias* calls.

### optout

Disables or enables all analytics, remains set throughout app restarts.

```js
Segment.optOut(true);
```

## License

Apache License Version 2.0, January 2004
