# Nativescript-Segment

Add your plugin badges here. See [nativescript-urlhandler](https://github.com/hypery2k/nativescript-urlhandler) for example.

Then describe what's the purpose of your plugin.

In case you develop UI plugin, this is where you can add some screenshots.

## (Optional) Prerequisites / Requirements


## Installation

Describe your plugin installation steps. Ideally it would be something like:

```javascript
tns plugin add nativescript-segment
```

### Android

Requires the *internet* permission if not already enabled in your app.
```XML
<uses-permission android:name="android.permission.INTERNET"/>
```

### iOS

In your application's delegate:
    ```javascript
    import { Segment } from 'nativescript-segment';
    ...
    public applicationDidFinishLaunchingWithOptions(application, launchOptions): boolean {
        let config = {
            setDebug: true; // set to show full debug logging by the native APIs
        }
        Segment.configure(key, config);
        return true;
    }
    ...
    ```

## Usage 

All interaction with the library should be done via static function calls on the Segment import:
    ```javascript
    import { Segment } from 'nativescript-segment';
    ...
    public someInteraction(type: string) {
        Segment.track(type);
    }
    ...
    ```

For more advanced uses, or if it is required to access the base SDK methods, you can access the SDK's shared instance
    ```javascript
    // iOS
    Segment.ios.track('some event');

    // Android
    Segment.android.track('some event');
    ```
    Warning: accessing the SDK's methods directly requires conversion to native object and collection types

## API

Describe your plugin methods and properties here. See [nativescript-feedback](https://github.com/EddyVerbruggen/nativescript-feedback) for example.
    
| Property | Default | Description |
| --- | --- | --- |
| some property | property default value | property description, default values, etc.. |
| another property | property default value | property description, default values, etc.. |
    
## License

Apache License Version 2.0, January 2004
