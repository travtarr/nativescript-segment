import { Common } from './segment.common';
import * as app from 'tns-core-modules/application';
import { SegmentTraits, SegmentOptions, SegmentConfig } from './index';

const Analytics = com.segment.analytics.Analytics;
const Traits = com.segment.analytics.Traits;
const Properties = com.segment.analytics.Properties;
const Options = com.segment.analytics.Options;

export class Segment extends Common {

  public static init = false;
  public static logging = false;
  public static debug = false;

  public static android = analytics();
  public static ios = null;

  public static configure(key: string, configOptions?: SegmentConfig): void {
    // Create an analytics client with the given context and Segment write key.
    let analyticsBuilder = new Analytics.Builder(app.android.context, key);

    if (configOptions !== undefined) {
      if (configOptions.trackLifeCycleEvents === undefined || configOptions.trackLifeCycleEvents) {
        analyticsBuilder.trackApplicationLifecycleEvents();
      }
      if (configOptions.recordScreenViews === undefined || configOptions.recordScreenViews) {
        analyticsBuilder.recordScreenViews();
      }
      if (configOptions.options !== undefined) {
        analyticsBuilder.defaultOptions(_convertOptions(configOptions.options));
      }
      if (configOptions.proxyUrl !== undefined && configOptions.proxyUrl.length) {
        const factory = new com.segment.analytics.ConnectionFactory();
        factory.openConnection(configOptions.proxyUrl);
        analyticsBuilder.connectionFactory(factory);
      }
      if (configOptions.middlewaresAndroid && configOptions.middlewaresAndroid.length) {
        for (let middleware of configOptions.middlewaresAndroid) {
          analyticsBuilder.middleware(middleware);
        }
      }
      if (configOptions.setLogging !== undefined && configOptions.setLogging) {
        Segment.logging = true;
        analyticsBuilder.logLevel(com.segment.analytics.Analytics.LogLevel.INFO);
      }
      if (configOptions.setDebug !== undefined && configOptions.setDebug) {
        Segment.debug = true;
        analyticsBuilder.logLevel(com.segment.analytics.Analytics.LogLevel.DEBUG);
      }
    }
    // Set the initialized instance as a globally accessible instance.
    Analytics.setSingletonInstance(analyticsBuilder.build());
  }

  public static indentify(id: string, traits?: SegmentTraits, customTraits?: any, options?: SegmentOptions): void {
    analytics().identify(id, _convertTraits(traits, customTraits), _convertOptions(options));
  }

  public static track(event: string, properties?: any, options?: SegmentOptions): void {
    analytics().track(event, _convertProperties(properties), _convertOptions(options));
  }

  public static screen(name: string, category?: string, properties?: any, options?: SegmentOptions): void {
    if (!category && !name) {
      _log(`Both "category" and "name" parameters of the screen method cannot be null`);
      return;
    }
    analytics().screen(category ? category : null, name ? name : null, _convertProperties(properties), _convertOptions(options));
  }

  public static group(groupId: string, traits?: SegmentTraits, customTraits?: any, options?: SegmentOptions) {
    analytics().group(groupId, _convertTraits(traits, customTraits), _convertOptions(options));
  }

  public static alias(newId: string, options?: SegmentOptions): void {
    analytics().alias(newId, _convertOptions(options));
  }

  public static optOut(optOut: boolean) {
    analytics().optOut(optOut);
  }
}

function analytics(): com.segment.analytics.Analytics {
  return Analytics.with(app.android.context);
}

function _convertOptions(options: SegmentOptions): com.segment.analytics.Options {
  if (!options) {
    return null;
  }
  let segOpts = new Options();
  if (options.useAll !== undefined) {
    segOpts.setIntegration(Options.ALL_INTEGRATIONS_KEY, options.useAll);
  }
  if (options.excluded !== undefined) {
    for (let opt of options.excluded) {
      segOpts.setIntegration(opt, false);
    }
  }
  if (options.included !== undefined) {
    for (let opt of options.included) {
      segOpts.setIntegration(opt, true);
    }
  }

  return segOpts;
}

function _convertProperties(properties: any): com.segment.analytics.Properties {
  if (!properties) {
    return null;
  }
  let propertyObj = new Properties();
  for (let prop in properties) {
    propertyObj.putValue(prop, properties[prop]);
  }
  return propertyObj;
}

function _convertTraits(traits: any, custom: any): com.segment.analytics.Traits {
  if (!traits) {
    return null;
  }
  let segTraits = new Traits();
  for (let trait in traits) {
    segTraits.putValue(trait, traits[trait]);
  }
  if (custom) {
    for (let trait in custom) {
      segTraits.putValue(trait, custom[trait]);
    }
  }
  return segTraits;
}

function _log(msg: string, ...params: any[]) {
  if (Segment.logging) {
    console.log(msg, ...params);
  }
}