import { Common } from './segment.common';
export declare class Segment extends Common {
  /**
   * Sets logging within this plugin, and sets 'INFO' logging on the Segment SDK for Android only
   */
  static logging: boolean;

  /**
   * Sets debug logging to the iOS Segment SDK, and for Android it sets the logging level to 'DEBUG' for the SDK
   */
  static debug: boolean;

  /**
   * Provides the static instance of the iOS SDK's SEGAnalytics object.
   * 
   * Returns null if on Android platform.
   */
  static ios: SEGAnalytics;

  /**
   * Provides the static instance of the Android SDK's Analytics object.
   * 
   * Returns null if on iOS platform.
   */
  static android: com.segment.analytics.Analytics;

  /**
   * Sets-up the shared instance that this plugin will use.
   * 
   * For Android: this should be called when the main application's context is available.
   * 
   * For iOS: this should be called within the **didFinishLaunchingWithOptions** of the app's delegate
   * 
   * @param key write key for the Segment service
   * @param configOptions most common options to configure Segment tracking and uploading
   */
  static configure(key: string, configOptions?: SegmentConfig): void;

  /**
   * identify lets you tie a user to their actions and record traits about them. It includes a unique
   * User ID and any optional traits you know about them.
   * 
   * Android: [Reference Docs](https://segment.com/docs/sources/mobile/android/#identify)
   * 
   * iOS: [Reference Docs](https://segment.com/docs/sources/mobile/ios/#identify)
   * @param id user's id (usually that user's ID in your database)
   * @param traits standard traits that Segment supports
   * @param customTraits any traits that are not standard in Segment
   * @param options 
   */
  static indentify(id: string, traits?: SegmentTraits, customTraits?: any, options?: SegmentOptions): void;

  /**
   * *track* lets you record the actions your users perform. Every action triggers what we call an “event”, 
   * which can also have associated properties.
   * 
   * Android: [Reference Docs](https://segment.com/docs/sources/mobile/android/#track)
   * 
   * iOS: [Reference Docs](https://segment.com/docs/sources/mobile/ios/#track)
   * @param event 
   * @param properties 
   * @param options 
   */
  static track(event: string, properties?: any, options?: SegmentOptions): void;

  /**
   * The *screen* method lets you you record whenever a user sees a screen of your mobile app,
   * along with optional extra information about the page being viewed.
   * 
   * Android: [Reference Docs](https://segment.com/docs/sources/mobile/android/#screen)
   * 
   * iOS: [Reference Docs](https://segment.com/docs/sources/mobile/ios/#screen)
   * @param category 
   * @param name 
   * @param properties 
   * @param options 
   */
  static screen(category?: string, name?: string, properties?: any, options?: SegmentOptions): void;

  /**
   * *group* lets you associate an identified user user with a group. A group could be a company, 
   * organization, account, project or team! It also lets you record custom traits about the group, 
   * like industry or number of employees.
   * 
   * Android: [Reference Docs](https://segment.com/docs/sources/mobile/android/#group)
   * 
   * iOS: [Reference Docs](https://segment.com/docs/sources/mobile/ios/#group)
   * @param groupId 
   * @param traits standard traits that Segment supports
   * @param customTraits any traits that are not standard in Segment
   * @param options 
   */
  static group(groupId: string, traits?: SegmentTraits, customTraits?: any, options?: SegmentOptions): void;

  /**
   * *alias* is how you associate one identity with another. This is an advanced method, but it is required
   * to manage user identities successfully in some of our destinations.
   * 
   * Android: [Reference Docs](https://segment.com/docs/sources/mobile/android/#alias)
   * 
   * iOS: [Reference Docs](https://segment.com/docs/sources/mobile/ios/#alias)
   * 
   * @param newId 
   * @param options 
   */
  static alias(newId: string, options?: SegmentOptions): void;

  /**
   * Disables all analytics, remains set throughout app restarts.
   * @param optOut 
   */
  static optOut(optOut: boolean): void;
}

export interface SegmentConfig {
  /**
   * Defaults to true
   */
  trackLifeCycleEvents?: boolean,
  /**
   * Defaults to true
   */
  recordScreenViews?: boolean,
  options?: SegmentOptions,
  proxyUrl?: string,
  /**
   * Defaults to false
   */
  setLogging?: boolean,
  /**
   * Defaults to false
   */
  setDebug?: boolean
  middlewaresAndroid?: com.segment.analytics.Middleware[];
  middlewaresIOS?: SEGMiddleware[];
}

export interface SegmentAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface SegmentTraits {
  anonymousId?: string;
  id?: string;
  createdAt?: Date;
  username?: string;
  title?: string;
  avatar?: string;
  gender?: string;
  firstName?: string;
  lastName?: string;
  industry?: string;
  employees?: number;
  description?: string;
  email?: string;
  address?: SegmentAddress;
  website?: string;
  age?: number;
  birthday?: Date;
  phone?: string;
  fax?: string;
}

export interface SegmentOptions {
  useAll?: boolean;
  excluded?: string[];
  included?: string[];
}