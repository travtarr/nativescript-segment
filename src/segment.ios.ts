import { Common } from './segment.common';
import * as app from 'tns-core-modules/application';
import { SegmentTraits, SegmentOptions, SegmentConfig } from './index';

export class Segment extends Common {

  public static logging = false;
  public static debug = false;

  public static ios = analytics();
  public static android = null;

  public static configure(key: string, configOptions?: SegmentConfig): void {
    let configuration: SEGAnalyticsConfiguration = SEGAnalyticsConfiguration.configurationWithWriteKey(key);
    if (configOptions !== undefined) {
      if (configOptions.trackLifeCycleEvents === undefined || configOptions.trackLifeCycleEvents) {
        configuration.trackApplicationLifecycleEvents = true;
      }
      if (configOptions.recordScreenViews === undefined || configOptions.recordScreenViews) {
        configuration.recordScreenViews = true;
      }
      if (configOptions.options !== undefined) {
        configuration.launchOptions = _convertOptions(configOptions.options);
      }
      if (configOptions.proxyUrl !== undefined && configOptions.proxyUrl.length) {
        configuration.requestFactory = (url: NSURL) => {
          let components = NSURLComponents.componentsWithURLResolvingAgainstBaseURL(url, false);
          components.host = configOptions.proxyUrl;
          let transformedUrl = components.URL;
          return NSMutableURLRequest.requestWithURL(transformedUrl);
        } 
      }
      if (configOptions.middlewaresIOS && configOptions.middlewaresIOS.length) {
          configuration.middlewares = _convertToNSArray(configOptions.middlewaresIOS);
      }
      if (configOptions.setLogging !== undefined && configOptions.setLogging) {
        Segment.logging = true;
      }
      if (configOptions.setDebug !== undefined && configOptions.setDebug) {
        Segment.debug = true;
        SEGAnalytics.debug(true);
      }
    }
    SEGAnalytics.setupWithConfiguration(configuration);
  }

  public static indentify(id: string, traits?: SegmentTraits, customTraits?: any, options?: SegmentOptions): void {
    analytics().identifyTraitsOptions(id, _convertTraits(traits, customTraits), _convertOptions(options));
  }

  public static track(event: string, properties?: any, options?: SegmentOptions): void {
    analytics().trackPropertiesOptions(event, _convertProperties(properties), _convertOptions(options));
  }

  public static screen(name: string, category?: string,  properties?: any, options?: SegmentOptions): void {
    if (!category && !name) {
      _log(`Both "category" and "name" parameters of the screen method cannot be null`);
      return;
    }
    let screenName = name ? name : category;
    if (category && name) {
      screenName = `${category} ${name}`;
    }
    analytics().screenPropertiesOptions(screenName, _convertProperties(properties), _convertOptions(options));
  }

  public static group(groupId: string, traits?: SegmentTraits, customTraits?: any, options?: SegmentOptions) {
    analytics().groupTraitsOptions(groupId, _convertTraits(traits, customTraits), _convertOptions(options));
  }

  public static alias(newId: string, options?: SegmentOptions): void {
    analytics().aliasOptions(newId, _convertOptions(options));
  }

  public static optOut(optOut: boolean) {
    if (optOut) {
      analytics().disable();
    } else {
      analytics().enable();
    }
  }
}

function analytics(): SEGAnalytics {
  return SEGAnalytics.sharedAnalytics();
}

function _convertOptions(options: SegmentOptions): NSDictionary<string, any> {
  if (!options) {
    return null;
  }
  let segOpts = NSMutableDictionary.dictionary<string, any>();

  if (options.useAll !== undefined) {
    segOpts.setValueForKey(options.useAll, 'All');
  }
  if (options.excluded !== undefined) {
    for (let opt of options.excluded) {
      segOpts.setValueForKey(false, opt);
    }
  }
  if (options.included !== undefined) {
    for (let opt of options.included) {
      segOpts.setValueForKey(true, opt);
    }
  }
  let integrations = NSMutableDictionary.dictionary<string, any>();
  integrations.setObjectForKey(segOpts, 'integrations');
  return integrations;
}

function _convertProperties(properties: any): NSDictionary<string, any> {
  if (!properties) {
    return null;
  }
  return _dictionaryOfData(properties);
}

function _convertTraits(traits: any, custom: any): NSDictionary<string, any> {
  if (!traits) {
    return null;
  }
  let segTraits = NSMutableDictionary.dictionary<string, any>();
  for (let trait in traits) {
    segTraits.setValueForKey(traits[trait], trait);
  }
  if (custom) {
    for (let trait in custom) {
      segTraits.setValueForKey(traits[trait], trait);
    }
  }
  return segTraits;
}

function _log(msg: string, ...params: any[]) {
  if (Segment.logging) {
    console.log(msg, ...params);
  }
}

function _convertToNSArray(jsArray: any[]): NSArray<any> {
  let nsArray = NSMutableArray.array();
  for (let obj of jsArray) {
    nsArray.addObject(obj);
  }
  return nsArray;
}

function _dictionaryOfData(data?: any): NSDictionary<any, any> {
  if (data) {
    let dict = NSMutableDictionary.dictionary();
    for (let key in data) {
      dict.setObjectForKey(data[key], key);
    }
    return dict;
  }
  return null;
}
