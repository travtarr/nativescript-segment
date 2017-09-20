import androidcontentContext = android.content.Context;
import androidappApplication = android.app.Application;
import javautilconcurrentTimeUnit = java.util.concurrent.TimeUnit;
import javautilconcurrentExecutorService = java.util.concurrent.ExecutorService;
import javalangObject = java.lang.Object;
declare module com {
	export module segment {
		export module analytics {
			export class Analytics {
				public screen(param0: string, param1: com.segment.analytics.Properties): void;
				public group(param0: string): void;
				public optOut(param0: boolean): void;
				public onIntegrationReady(param0: string, param1: com.segment.analytics.Analytics.Callback): void;
				public screen(param0: string, param1: string, param2: com.segment.analytics.Properties, param3: com.segment.analytics.Options): void;
				public getLogger(): com.segment.analytics.integrations.Logger;
				public static setSingletonInstance(param0: com.segment.analytics.Analytics): void;
				public alias(param0: string, param1: com.segment.analytics.Options): void;
				public flush(): void;
				public getSnapshot(): com.segment.analytics.StatsSnapshot;
				public identify(param0: string, param1: com.segment.analytics.Traits, param2: com.segment.analytics.Options): void;
				public alias(param0: string): void;
				public getApplication(): androidappApplication;
				public reset(): void;
				public getLogLevel(): com.segment.analytics.Analytics.LogLevel;
				public shutdown(): void;
				public screen(param0: string, param1: string, param2: com.segment.analytics.Properties): void;
				public group(param0: string, param1: com.segment.analytics.Traits): void;
				public logger(param0: string): com.segment.analytics.integrations.Logger;
				public group(param0: string, param1: com.segment.analytics.Traits, param2: com.segment.analytics.Options): void;
				public static with(param0: androidcontentContext): com.segment.analytics.Analytics;
				public onIntegrationReady(param0: com.segment.analytics.Analytics.BundledIntegration, param1: com.segment.analytics.Analytics.Callback): void;
				public track(param0: string): void;
				public getAnalyticsContext(): com.segment.analytics.AnalyticsContext;
				public track(param0: string, param1: com.segment.analytics.Properties, param2: com.segment.analytics.Options): void;
				public screen(param0: string, param1: string): void;
				public track(param0: string, param1: com.segment.analytics.Properties): void;
				public identify(param0: string): void;
				public logout(): void;
				public identify(param0: com.segment.analytics.Traits): void;
				public screen(param0: string): void;
			}
			export module Analytics {
				export class Builder {
					public collectDeviceId(param0: boolean): com.segment.analytics.Analytics.Builder;
					public disableBundledIntegrations(): com.segment.analytics.Analytics.Builder;
					public constructor(param0: androidcontentContext, param1: string);
					public trackAttributionInformation(): com.segment.analytics.Analytics.Builder;
					public networkExecutor(param0: javautilconcurrentExecutorService): com.segment.analytics.Analytics.Builder;
					public logLevel(param0: com.segment.analytics.Analytics.LogLevel): com.segment.analytics.Analytics.Builder;
					public flushQueueSize(param0: number): com.segment.analytics.Analytics.Builder;
					public defaultOptions(param0: com.segment.analytics.Options): com.segment.analytics.Analytics.Builder;
					public flushInterval(param0: number, param1: javautilconcurrentTimeUnit): com.segment.analytics.Analytics.Builder;
					public recordScreenViews(): com.segment.analytics.Analytics.Builder;
					public crypto(param0: com.segment.analytics.Crypto): com.segment.analytics.Analytics.Builder;
					public connectionFactory(param0: com.segment.analytics.ConnectionFactory): com.segment.analytics.Analytics.Builder;
					public middleware(param0: com.segment.analytics.Middleware): com.segment.analytics.Analytics.Builder;
					public tag(param0: string): com.segment.analytics.Analytics.Builder;
					public build(): com.segment.analytics.Analytics;
					public trackApplicationLifecycleEvents(): com.segment.analytics.Analytics.Builder;
					public use(param0: com.segment.analytics.integrations.Integration.Factory): com.segment.analytics.Analytics.Builder;
				}
				export class BundledIntegration {
					public static AMPLITUDE: com.segment.analytics.Analytics.BundledIntegration;
					public static APPS_FLYER: com.segment.analytics.Analytics.BundledIntegration;
					public static APPTIMIZE: com.segment.analytics.Analytics.BundledIntegration;
					public static BUGSNAG: com.segment.analytics.Analytics.BundledIntegration;
					public static COUNTLY: com.segment.analytics.Analytics.BundledIntegration;
					public static CRITTERCISM: com.segment.analytics.Analytics.BundledIntegration;
					public static FLURRY: com.segment.analytics.Analytics.BundledIntegration;
					public static GOOGLE_ANALYTICS: com.segment.analytics.Analytics.BundledIntegration;
					public static KAHUNA: com.segment.analytics.Analytics.BundledIntegration;
					public static LEANPLUM: com.segment.analytics.Analytics.BundledIntegration;
					public static LOCALYTICS: com.segment.analytics.Analytics.BundledIntegration;
					public static MIXPANEL: com.segment.analytics.Analytics.BundledIntegration;
					public static QUANTCAST: com.segment.analytics.Analytics.BundledIntegration;
					public static TAPLYTICS: com.segment.analytics.Analytics.BundledIntegration;
					public static TAPSTREAM: com.segment.analytics.Analytics.BundledIntegration;
					public static UXCAM: com.segment.analytics.Analytics.BundledIntegration;
					public static values(): native.Array<com.segment.analytics.Analytics.BundledIntegration>;
					public static valueOf(param0: string): com.segment.analytics.Analytics.BundledIntegration;
				}
				export class Callback {
					/**
					 * Constructs a new instance of the com.segment.analytics.Analytics$Callback interface with the provided implementation.
					 */
					public constructor(implementation: {
						onReady(param0: javalangObject): void;
					});
					public onReady(param0: javalangObject): void;
				}
				export class LogLevel {
					public static NONE: com.segment.analytics.Analytics.LogLevel;
					public static INFO: com.segment.analytics.Analytics.LogLevel;
					public static DEBUG: com.segment.analytics.Analytics.LogLevel;
					public static BASIC: com.segment.analytics.Analytics.LogLevel;
					public static VERBOSE: com.segment.analytics.Analytics.LogLevel;
					public static valueOf(param0: string): com.segment.analytics.Analytics.LogLevel;
					public log(): boolean;
					public static values(): native.Array<com.segment.analytics.Analytics.LogLevel>;
				}
			}
		}
	}
}

import javautilMap = java.util.Map;
declare module com {
	export module segment {
		export module analytics {
			export class AnalyticsContext extends com.segment.analytics.ValueMap {
				public putValue(param0: string, param1: javalangObject): com.segment.analytics.ValueMap;
				public location(): com.segment.analytics.AnalyticsContext.Location;
				public putReferrer(param0: com.segment.analytics.AnalyticsContext.Referrer): com.segment.analytics.AnalyticsContext;
				public traits(): com.segment.analytics.Traits;
				public campaign(): com.segment.analytics.AnalyticsContext.Campaign;
				public device(): com.segment.analytics.AnalyticsContext.Device;
				public putDeviceToken(param0: string): com.segment.analytics.AnalyticsContext;
				public putValue(param0: string, param1: javalangObject): com.segment.analytics.AnalyticsContext;
				public putCampaign(param0: com.segment.analytics.AnalyticsContext.Campaign): com.segment.analytics.AnalyticsContext;
				public putLocation(param0: com.segment.analytics.AnalyticsContext.Location): com.segment.analytics.AnalyticsContext;
				public unmodifiableCopy(): com.segment.analytics.AnalyticsContext;
			}
			export module AnalyticsContext {
				export class Campaign extends com.segment.analytics.ValueMap {
					public name(): string;
					public putName(param0: string): com.segment.analytics.AnalyticsContext.Campaign;
					public constructor(param0: javautilMap);
					public putValue(param0: string, param1: javalangObject): com.segment.analytics.ValueMap;
					public putContent(param0: string): com.segment.analytics.AnalyticsContext.Campaign;
					public term(): string;
					public putMedium(param0: string): com.segment.analytics.AnalyticsContext.Campaign;
					public content(): string;
					public constructor();
					public putSource(param0: string): com.segment.analytics.AnalyticsContext.Campaign;
					public putTerm(param0: string): com.segment.analytics.AnalyticsContext.Campaign;
					public source(): string;
					public medium(): string;
					public putValue(param0: string, param1: javalangObject): com.segment.analytics.AnalyticsContext.Campaign;
					public tern(): string;
					public constructor(param0: number);
				}
				export class Device extends com.segment.analytics.ValueMap {
					public putValue(param0: string, param1: javalangObject): com.segment.analytics.AnalyticsContext.Device;
					public putValue(param0: string, param1: javalangObject): com.segment.analytics.ValueMap;
					public putDeviceToken(param0: string): com.segment.analytics.AnalyticsContext.Device;
				}
				export class Location extends com.segment.analytics.ValueMap {
					public putLongitude(param0: number): com.segment.analytics.AnalyticsContext.Location;
					public putLatitude(param0: number): com.segment.analytics.AnalyticsContext.Location;
					public constructor();
					public constructor(param0: javautilMap);
					public putSpeed(param0: number): com.segment.analytics.AnalyticsContext.Location;
					public latitude(): number;
					public putValue(param0: string, param1: javalangObject): com.segment.analytics.ValueMap;
					public putValue(param0: string, param1: javalangObject): com.segment.analytics.AnalyticsContext.Location;
					public longitude(): number;
					public speed(): number;
					public constructor(param0: number);
				}
				export class Referrer extends com.segment.analytics.ValueMap {
					public name(): string;
					public putId(param0: string): com.segment.analytics.AnalyticsContext.Referrer;
					public constructor(param0: javautilMap);
					public putType(param0: string): com.segment.analytics.AnalyticsContext.Referrer;
					public url(): string;
					public putValue(param0: string, param1: javalangObject): com.segment.analytics.ValueMap;
					public putUrl(param0: string): com.segment.analytics.AnalyticsContext.Referrer;
					public putTerm(param0: string): com.segment.analytics.AnalyticsContext.Referrer;
					public putValue(param0: string, param1: javalangObject): com.segment.analytics.AnalyticsContext.Referrer;
					public link(): string;
					public constructor();
					public putLink(param0: string): com.segment.analytics.AnalyticsContext.Referrer;
					public putName(param0: string): com.segment.analytics.AnalyticsContext.Referrer;
					public id(): string;
					public constructor(param0: number);
					public type(): string;
				}
			}
		}
	}
}

import androidcontentSharedPreferences = android.content.SharedPreferences;
declare module com {
	export module segment {
		export module analytics {
			export class BooleanPreference {
				public set(param0: boolean): void;
				public constructor(param0: androidcontentSharedPreferences, param1: string, param2: boolean);
				public get(): boolean;
			}
		}
	}
}

import javaioReader = java.io.Reader;
import javaioWriter = java.io.Writer;
declare module com {
	export module segment {
		export module analytics {
			export class Cartographer {
				public fromJson(param0: javaioReader): javautilMap;
				public toJson(param0: javautilMap, param1: javaioWriter): void;
				public toJson(param0: javautilMap): string;
				public fromJson(param0: string): javautilMap;
			}
			export module Cartographer {
				export class Builder {
					public prettyPrint(param0: boolean): com.segment.analytics.Cartographer.Builder;
					public constructor();
					public lenient(param0: boolean): com.segment.analytics.Cartographer.Builder;
					public build(): com.segment.analytics.Cartographer;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class Client {
			}
			export module Client {
				export abstract class Connection {
					public close(): void;
				}
				export class HTTPException {
				}
			}
		}
	}
}

import javanetHttpURLConnection = java.net.HttpURLConnection;
declare module com {
	export module segment {
		export module analytics {
			export class ConnectionFactory {
				public projectSettings(param0: string): javanetHttpURLConnection;
				public openConnection(param0: string): javanetHttpURLConnection;
				public upload(param0: string): javanetHttpURLConnection;
				public attribution(param0: string): javanetHttpURLConnection;
				public constructor();
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export abstract class Crypto {
				public static none(): com.segment.analytics.Crypto;
				public constructor();
			}
		}
	}
}

import androidutilPair = android.util.Pair;
declare module com {
	export module segment {
		export module analytics {
			export class GetAdvertisingIdTask {
				public onPostExecute(param0: androidutilPair): void;
				public doInBackground(param0: native.Array<androidcontentContext>): androidutilPair;
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export abstract class IntegrationOperation {
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class Middleware {
				/**
				 * Constructs a new instance of the com.segment.analytics.Middleware interface with the provided implementation.
				 */
				public constructor(implementation: {
					intercept(param0: com.segment.analytics.Middleware.Chain): void;
				});
				public intercept(param0: com.segment.analytics.Middleware.Chain): void;
			}
			export module Middleware {
				export class Chain {
					/**
					 * Constructs a new instance of the com.segment.analytics.Middleware$Chain interface with the provided implementation.
					 */
					public constructor(implementation: {
						payload(): com.segment.analytics.integrations.BasePayload;
						proceed(param0: com.segment.analytics.integrations.BasePayload): void;
					});
					public proceed(param0: com.segment.analytics.integrations.BasePayload): void;
					public payload(): com.segment.analytics.integrations.BasePayload;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class Options {
				public static ALL_INTEGRATIONS_KEY: string;
				public setIntegration(param0: string, param1: boolean): com.segment.analytics.Options;
				public setIntegrationOptions(param0: string, param1: javautilMap): com.segment.analytics.Options;
				public setIntegrationOptions(param0: com.segment.analytics.Analytics.BundledIntegration, param1: javautilMap): com.segment.analytics.Options;
				public setIntegration(param0: com.segment.analytics.Analytics.BundledIntegration, param1: boolean): com.segment.analytics.Options;
				public integrations(): javautilMap;
				public constructor();
			}
		}
	}
}

import javaioInputStream = java.io.InputStream;
declare module com {
	export module segment {
		export module analytics {
			export abstract class PayloadQueue {
			}
			export module PayloadQueue {
				export class ElementVisitor {
					/**
					 * Constructs a new instance of the com.segment.analytics.PayloadQueue$ElementVisitor interface with the provided implementation.
					 */
					public constructor(implementation: {
						read(param0: javaioInputStream, param1: number): boolean;
					});
					public read(param0: javaioInputStream, param1: number): boolean;
				}
				export class MemoryQueue extends com.segment.analytics.PayloadQueue {
					public close(): void;
				}
				export class PersistentQueue extends com.segment.analytics.PayloadQueue {
					public close(): void;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class ProjectSettings extends com.segment.analytics.ValueMap {
			}
			export module ProjectSettings {
				export class Cache extends com.segment.analytics.ValueMap.Cache {
					public create(param0: javautilMap): com.segment.analytics.ProjectSettings;
				}
			}
		}
	}
}

import javautilList = java.util.List;
declare module com {
	export module segment {
		export module analytics {
			export class Properties extends com.segment.analytics.ValueMap {
				public constructor(param0: javautilMap);
				public putOrderId(param0: string): com.segment.analytics.Properties;
				public putName(param0: string): com.segment.analytics.Properties;
				public products(): javautilList;
				public putPrice(param0: number): com.segment.analytics.Properties;
				public putProductId(param0: string): com.segment.analytics.Properties;
				public orderId(): string;
				public putTitle(param0: string): com.segment.analytics.Properties;
				public url(): string;
				public putSubtotal(): number;
				public shipping(): number;
				public constructor();
				public putProducts(param0: native.Array<com.segment.analytics.Properties.Product>): com.segment.analytics.Properties;
				public putShipping(param0: number): com.segment.analytics.Properties;
				public putRevenue(param0: number): com.segment.analytics.Properties;
				public putTax(param0: number): com.segment.analytics.Properties;
				public coupon(): string;
				public putValue(param0: number): com.segment.analytics.Properties;
				public putUrl(param0: string): com.segment.analytics.Properties;
				public title(): string;
				public putDiscount(param0: number): com.segment.analytics.Properties;
				public productId(): string;
				public category(): string;
				public putCategory(param0: string): com.segment.analytics.Properties;
				public referrer(): string;
				public putReferrer(param0: string): com.segment.analytics.Properties;
				public value(): number;
				public price(): number;
				public putTotal(param0: number): com.segment.analytics.Properties;
				public putSku(param0: string): com.segment.analytics.Properties;
				public products(param0: native.Array<com.segment.analytics.Properties.Product>): javautilList;
				public name(): string;
				public sku(): string;
				public putCoupon(param0: string): com.segment.analytics.Properties;
				public putValue(param0: string, param1: javalangObject): com.segment.analytics.ValueMap;
				public path(): string;
				public putPath(param0: string): com.segment.analytics.Properties;
				public total(): number;
				public discount(): number;
				public constructor(param0: number);
				public currency(): string;
				public tax(): number;
				public putRepeatCustomer(param0: boolean): com.segment.analytics.Properties;
				public isRepeatCustomer(): boolean;
				public putSubtotal(param0: number): com.segment.analytics.Properties;
				public putValue(param0: string, param1: javalangObject): com.segment.analytics.Properties;
				public revenue(): number;
				public putCurrency(param0: string): com.segment.analytics.Properties;
			}
			export module Properties {
				export class Product extends com.segment.analytics.ValueMap {
					public name(): string;
					public constructor();
					public constructor(param0: string, param1: string, param2: number);
					public constructor(param0: javautilMap);
					public sku(): string;
					public putValue(param0: string, param1: javalangObject): com.segment.analytics.ValueMap;
					public putValue(param0: string, param1: javalangObject): com.segment.analytics.Properties.Product;
					public id(): string;
					public price(): number;
					public constructor(param0: number);
					public putName(param0: string): com.segment.analytics.Properties.Product;
				}
			}
		}
	}
}

import javaioFile = java.io.File;
declare module com {
	export module segment {
		export module analytics {
			export class QueueFile {
				public remove(): void;
				public close(): void;
				public add(param0: native.Array<number>): void;
				public peek(): native.Array<number>;
				public clear(): void;
				public constructor(param0: javaioFile);
				public isEmpty(): boolean;
				public forEach(param0: com.segment.analytics.PayloadQueue.ElementVisitor): number;
				public toString(): string;
				public remove(param0: number): void;
				public add(param0: native.Array<number>, param1: number, param2: number): void;
				public size(): number;
			}
			export module QueueFile {
				export class Element {
					public toString(): string;
				}
				export class ElementInputStream {
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public read(): number;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class RealMiddlewareChain {
				public proceed(param0: com.segment.analytics.integrations.BasePayload): void;
				public payload(): com.segment.analytics.integrations.BasePayload;
			}
		}
	}
}

import androidosMessage = android.os.Message;
declare module com {
	export module segment {
		export module analytics {
			export class SegmentIntegration extends com.segment.analytics.integrations.Integration {
				public identify(param0: com.segment.analytics.integrations.IdentifyPayload): void;
				public group(param0: com.segment.analytics.integrations.GroupPayload): void;
				public screen(param0: com.segment.analytics.integrations.ScreenPayload): void;
				public track(param0: com.segment.analytics.integrations.TrackPayload): void;
				public alias(param0: com.segment.analytics.integrations.AliasPayload): void;
				public flush(): void;
			}
			export module SegmentIntegration {
				export class BatchPayloadWriter {
					public close(): void;
				}
				export class PayloadWriter {
					public read(param0: javaioInputStream, param1: number): boolean;
				}
				export class SegmentDispatcherHandler {
					public handleMessage(param0: androidosMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class Stats {
			}
			export module Stats {
				export class StatsHandler {
					public handleMessage(param0: androidosMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class StatsSnapshot {
				public timestamp: number;
				public flushCount: number;
				public flushEventCount: number;
				public integrationOperationCount: number;
				public integrationOperationDuration: number;
				public integrationOperationAverageDuration: number;
				public integrationOperationDurationByIntegration: javautilMap;
				public toString(): string;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: javautilMap);
			}
		}
	}
}

import javautilDate = java.util.Date;
declare module com {
	export module segment {
		export module analytics {
			export class Traits extends com.segment.analytics.ValueMap {
				public constructor(param0: javautilMap);
				public putFax(param0: string): com.segment.analytics.Traits;
				public putIndustry(param0: string): com.segment.analytics.Traits;
				public industry(): string;
				public putAddress(param0: com.segment.analytics.Traits.Address): com.segment.analytics.Traits;
				public putName(param0: string): com.segment.analytics.Traits;
				public avatar(): string;
				public phone(): string;
				public putBirthday(param0: javautilDate): com.segment.analytics.Traits;
				public createdAt(): string;
				public putTitle(param0: string): com.segment.analytics.Traits;
				public currentId(): string;
				public birthday(): javautilDate;
				public constructor();
				public putWebsite(param0: string): com.segment.analytics.Traits;
				public putUsername(param0: string): com.segment.analytics.Traits;
				public putAge(param0: number): com.segment.analytics.Traits;
				public age(): number;
				public address(): com.segment.analytics.Traits.Address;
				public firstName(): string;
				public userId(): string;
				public putCreatedAt(param0: string): com.segment.analytics.Traits;
				public gender(): string;
				public title(): string;
				public unmodifiableCopy(): com.segment.analytics.Traits;
				public lastName(): string;
				public description(): string;
				public putEmployees(param0: number): com.segment.analytics.Traits;
				public email(): string;
				public putPhone(param0: string): com.segment.analytics.Traits;
				public putDescription(param0: string): com.segment.analytics.Traits;
				public putGender(param0: string): com.segment.analytics.Traits;
				public putFirstName(param0: string): com.segment.analytics.Traits;
				public putEmail(param0: string): com.segment.analytics.Traits;
				public name(): string;
				public putValue(param0: string, param1: javalangObject): com.segment.analytics.ValueMap;
				public website(): string;
				public employees(): number;
				public constructor(param0: number);
				public putAvatar(param0: string): com.segment.analytics.Traits;
				public putLastName(param0: string): com.segment.analytics.Traits;
				public anonymousId(): string;
				public fax(): string;
				public username(): string;
				public putValue(param0: string, param1: javalangObject): com.segment.analytics.Traits;
			}
			export module Traits {
				export class Address extends com.segment.analytics.ValueMap {
					public putValue(param0: string, param1: javalangObject): com.segment.analytics.Traits.Address;
					public street(): string;
					public constructor(param0: javautilMap);
					public putValue(param0: string, param1: javalangObject): com.segment.analytics.ValueMap;
					public city(): string;
					public putState(param0: string): com.segment.analytics.Traits.Address;
					public putCity(param0: string): com.segment.analytics.Traits.Address;
					public postalCode(): string;
					public state(): string;
					public putPostalCode(param0: string): com.segment.analytics.Traits.Address;
					public constructor();
					public putStreet(param0: string): com.segment.analytics.Traits.Address;
					public constructor(param0: number);
					public putCountry(param0: string): com.segment.analytics.Traits.Address;
					public country(): string;
				}
				export class Cache extends com.segment.analytics.ValueMap.Cache {
					public create(param0: javautilMap): com.segment.analytics.Traits;
				}
			}
		}
	}
}

import javautilSet = java.util.Set;
import javautilCollection = java.util.Collection;
import javalangClass = java.lang.Class;
import javalangEnum = java.lang.Enum;
import orgjsonJSONObject = org.json.JSONObject;
declare module com {
	export module segment {
		export module analytics {
			export class ValueMap {
				public constructor(param0: javautilMap);
				public getChar(param0: string, param1: string): string;
				public getEnum(param0: javalangClass, param1: string): javalangEnum;
				public getList(param0: javalangObject, param1: javalangClass): javautilList;
				public toStringMap(): javautilMap;
				public constructor();
				public containsValue(param0: javalangObject): boolean;
				public putAll(param0: javautilMap): void;
				public getFloat(param0: string, param1: number): number;
				public containsKey(param0: javalangObject): boolean;
				public hashCode(): number;
				public toJsonObject(): orgjsonJSONObject;
				public clear(): void;
				public getDouble(param0: string, param1: number): number;
				public getString(param0: string): string;
				public isEmpty(): boolean;
				public getBoolean(param0: string, param1: boolean): boolean;
				public put(param0: string, param1: javalangObject): javalangObject;
				public getInt(param0: string, param1: number): number;
				public toString(): string;
				public size(): number;
				public getValueMap(param0: javalangObject): com.segment.analytics.ValueMap;
				public keySet(): javautilSet;
				public getLong(param0: string, param1: number): number;
				public equals(param0: javalangObject): boolean;
				public putValue(param0: string, param1: javalangObject): com.segment.analytics.ValueMap;
				public getValueMap(param0: string, param1: javalangClass): com.segment.analytics.ValueMap;
				public values(): javautilCollection;
				public constructor(param0: number);
				public remove(param0: javalangObject): javalangObject;
				public entrySet(): javautilSet;
				public get(param0: javalangObject): javalangObject;
			}
			export module ValueMap {
				export class Cache {
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module core {
				export class BuildConfig {
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module integrations {
				export class AliasPayload extends com.segment.analytics.integrations.BasePayload {
					public toString(): string;
					public toBuilder(): com.segment.analytics.integrations.BasePayload.Builder;
					public previousId(): string;
					public toBuilder(): com.segment.analytics.integrations.AliasPayload.Builder;
				}
				export module AliasPayload {
					export class Builder extends com.segment.analytics.integrations.BasePayload.Builder {
						public constructor();
						public previousId(param0: string): com.segment.analytics.integrations.AliasPayload.Builder;
						public realBuild(param0: string, param1: javautilDate, param2: javautilMap, param3: javautilMap, param4: string, param5: string): com.segment.analytics.integrations.AliasPayload;
					}
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module integrations {
				export abstract class BasePayload extends com.segment.analytics.ValueMap {
					public type(): com.segment.analytics.integrations.BasePayload.Type;
					public messageId(): string;
					public anonymousId(): string;
					public userId(): string;
					public putValue(param0: string, param1: javalangObject): com.segment.analytics.ValueMap;
					public toBuilder(): com.segment.analytics.integrations.BasePayload.Builder;
					public putValue(param0: string, param1: javalangObject): com.segment.analytics.integrations.BasePayload;
					public timestamp(): javautilDate;
					public integrations(): com.segment.analytics.ValueMap;
					public context(): com.segment.analytics.AnalyticsContext;
				}
				export module BasePayload {
					export abstract class Builder {
						public integration(param0: string, param1: javautilMap): com.segment.analytics.integrations.BasePayload.Builder;
						public integrations(param0: javautilMap): com.segment.analytics.integrations.BasePayload.Builder;
						public anonymousId(param0: string): com.segment.analytics.integrations.BasePayload.Builder;
						public context(param0: javautilMap): com.segment.analytics.integrations.BasePayload.Builder;
						public userId(param0: string): com.segment.analytics.integrations.BasePayload.Builder;
						public build(): com.segment.analytics.integrations.BasePayload;
						public integration(param0: string, param1: boolean): com.segment.analytics.integrations.BasePayload.Builder;
						public messageId(param0: string): com.segment.analytics.integrations.BasePayload.Builder;
						public timestamp(param0: javautilDate): com.segment.analytics.integrations.BasePayload.Builder;
					}
					export class Channel {
						public static browser: com.segment.analytics.integrations.BasePayload.Channel;
						public static mobile: com.segment.analytics.integrations.BasePayload.Channel;
						public static server: com.segment.analytics.integrations.BasePayload.Channel;
						public static values(): native.Array<com.segment.analytics.integrations.BasePayload.Channel>;
						public static valueOf(param0: string): com.segment.analytics.integrations.BasePayload.Channel;
					}
					export class Type {
						public static alias: com.segment.analytics.integrations.BasePayload.Type;
						public static group: com.segment.analytics.integrations.BasePayload.Type;
						public static identify: com.segment.analytics.integrations.BasePayload.Type;
						public static screen: com.segment.analytics.integrations.BasePayload.Type;
						public static track: com.segment.analytics.integrations.BasePayload.Type;
						public static values(): native.Array<com.segment.analytics.integrations.BasePayload.Type>;
						public static valueOf(param0: string): com.segment.analytics.integrations.BasePayload.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module integrations {
				export class GroupPayload extends com.segment.analytics.integrations.BasePayload {
					public toBuilder(): com.segment.analytics.integrations.GroupPayload.Builder;
					public toString(): string;
					public traits(): com.segment.analytics.Traits;
					public constructor();
					public constructor(param0: javautilMap);
					public constructor(param0: string, param1: javautilDate, param2: javautilMap, param3: javautilMap, param4: string, param5: string, param6: string, param7: javautilMap);
					public toBuilder(): com.segment.analytics.integrations.BasePayload.Builder;
					public constructor(param0: number);
					public groupId(): string;
				}
				export module GroupPayload {
					export class Builder extends com.segment.analytics.integrations.BasePayload.Builder {
						public constructor();
						public groupId(param0: string): com.segment.analytics.integrations.GroupPayload.Builder;
						public realBuild(param0: string, param1: javautilDate, param2: javautilMap, param3: javautilMap, param4: string, param5: string): com.segment.analytics.integrations.GroupPayload;
						public traits(param0: javautilMap): com.segment.analytics.integrations.GroupPayload.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module integrations {
				export class IdentifyPayload extends com.segment.analytics.integrations.BasePayload {
					public toBuilder(): com.segment.analytics.integrations.IdentifyPayload.Builder;
					public toString(): string;
					public traits(): com.segment.analytics.Traits;
					public toBuilder(): com.segment.analytics.integrations.BasePayload.Builder;
				}
				export module IdentifyPayload {
					export class Builder extends com.segment.analytics.integrations.BasePayload.Builder {
						public constructor();
						public traits(param0: javautilMap): com.segment.analytics.integrations.IdentifyPayload.Builder;
					}
				}
			}
		}
	}
}

import androidappActivity = android.app.Activity;
import androidosBundle = android.os.Bundle;
declare module com {
	export module segment {
		export module analytics {
			export module integrations {
				export abstract class Integration {
					public reset(): void;
					public onActivityCreated(param0: androidappActivity, param1: androidosBundle): void;
					public onActivityStarted(param0: androidappActivity): void;
					public flush(): void;
					public getUnderlyingInstance(): javalangObject;
					public identify(param0: com.segment.analytics.integrations.IdentifyPayload): void;
					public track(param0: com.segment.analytics.integrations.TrackPayload): void;
					public onActivityResumed(param0: androidappActivity): void;
					public onActivityDestroyed(param0: androidappActivity): void;
					public constructor();
					public screen(param0: com.segment.analytics.integrations.ScreenPayload): void;
					public onActivityPaused(param0: androidappActivity): void;
					public onActivityStopped(param0: androidappActivity): void;
					public group(param0: com.segment.analytics.integrations.GroupPayload): void;
					public onActivitySaveInstanceState(param0: androidappActivity, param1: androidosBundle): void;
					public alias(param0: com.segment.analytics.integrations.AliasPayload): void;
				}
				export module Integration {
					export class Factory {
						/**
						 * Constructs a new instance of the com.segment.analytics.integrations.Integration$Factory interface with the provided implementation.
						 */
						public constructor(implementation: {
							create(param0: com.segment.analytics.ValueMap, param1: com.segment.analytics.Analytics): com.segment.analytics.integrations.Integration;
							key(): string;
						});
						public create(param0: com.segment.analytics.ValueMap, param1: com.segment.analytics.Analytics): com.segment.analytics.integrations.Integration;
						public key(): string;
					}
				}
			}
		}
	}
}

import javalangThrowable = java.lang.Throwable;
declare module com {
	export module segment {
		export module analytics {
			export module integrations {
				export class Logger {
					public logLevel: com.segment.analytics.Analytics.LogLevel;
					public debug(param0: string, param1: native.Array<javalangObject>): void;
					public constructor(param0: string, param1: com.segment.analytics.Analytics.LogLevel);
					public static with(param0: com.segment.analytics.Analytics.LogLevel): com.segment.analytics.integrations.Logger;
					public error(param0: javalangThrowable, param1: string, param2: native.Array<javalangObject>): void;
					public info(param0: string, param1: native.Array<javalangObject>): void;
					public verbose(param0: string, param1: native.Array<javalangObject>): void;
					public subLog(param0: string): com.segment.analytics.integrations.Logger;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module integrations {
				export class ScreenPayload extends com.segment.analytics.integrations.BasePayload {
					public name(): string;
					public toString(): string;
					public toBuilder(): com.segment.analytics.integrations.ScreenPayload.Builder;
					public toBuilder(): com.segment.analytics.integrations.BasePayload.Builder;
					public event(): string;
					public properties(): com.segment.analytics.Properties;
					public category(): string;
				}
				export module ScreenPayload {
					export class Builder extends com.segment.analytics.integrations.BasePayload.Builder {
						public constructor();
						public properties(param0: javautilMap): com.segment.analytics.integrations.ScreenPayload.Builder;
						public realBuild(param0: string, param1: javautilDate, param2: javautilMap, param3: javautilMap, param4: string, param5: string): com.segment.analytics.integrations.ScreenPayload;
						public name(param0: string): com.segment.analytics.integrations.ScreenPayload.Builder;
						public category(param0: string): com.segment.analytics.integrations.ScreenPayload.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module integrations {
				export class TrackPayload extends com.segment.analytics.integrations.BasePayload {
					public toString(): string;
					public toBuilder(): com.segment.analytics.integrations.TrackPayload.Builder;
					public toBuilder(): com.segment.analytics.integrations.BasePayload.Builder;
					public event(): string;
					public properties(): com.segment.analytics.Properties;
				}
				export module TrackPayload {
					export class Builder extends com.segment.analytics.integrations.BasePayload.Builder {
						public event(param0: string): com.segment.analytics.integrations.TrackPayload.Builder;
						public properties(param0: javautilMap): com.segment.analytics.integrations.TrackPayload.Builder;
						public constructor();
						public realBuild(param0: string, param1: javautilDate, param2: javautilMap, param3: javautilMap, param4: string, param5: string): com.segment.analytics.integrations.TrackPayload;
					}
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module internal {
				export class Iso8601Utils {
					public static format(param0: javautilDate): string;
					public static parse(param0: string): javautilDate;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module internal {
				export class Private {
					/**
					 * Constructs a new instance of the com.segment.analytics.internal.Private interface with the provided implementation.
					 */
					public constructor(implementation: {
					});
				}
			}
		}
	}
}

import javaioCloseable = java.io.Closeable;
import javaioBufferedReader = java.io.BufferedReader;
import javalangRunnable = java.lang.Runnable;
import javalangThread = java.lang.Thread;
declare module com {
	export module segment {
		export module analytics {
			export module internal {
				export class Utils {
					public static THREAD_PREFIX: string;
					public static DEFAULT_FLUSH_INTERVAL: number;
					public static DEFAULT_FLUSH_QUEUE_SIZE: number;
					public static DEFAULT_COLLECT_DEVICE_ID: boolean;
					public static isNullOrEmpty(param0: string): boolean;
					public static createMap(): javautilMap;
					public static isOnClassPath(param0: string): boolean;
					public static coerceToFloat(param0: javalangObject, param1: number): number;
					public static isNullOrEmpty(param0: javautilCollection): boolean;
					public static toISO8601String(param0: javautilDate): string;
					public static createDirectory(param0: javaioFile): void;
					public static getSystemService(param0: androidcontentContext, param1: string): javalangObject;
					public static closeQuietly(param0: javaioCloseable): void;
					public static getDeviceId(param0: androidcontentContext): string;
					public static immutableCopyOf(param0: javautilMap): javautilMap;
					public static getResourceString(param0: androidcontentContext, param1: string): string;
					public static transform(param0: javautilMap, param1: javautilMap): javautilMap;
					public static isNullOrEmpty(param0: native.Array<javalangObject>): boolean;
					public static parseISO8601Date(param0: string): javautilDate;
					public static isNullOrEmpty(param0: javautilMap): boolean;
					public static hasFeature(param0: androidcontentContext, param1: string): boolean;
					public static assertNotNull(param0: javalangObject, param1: string): javalangObject;
					public static immutableCopyOf(param0: javautilList): javautilList;
					public static isConnected(param0: androidcontentContext): boolean;
					public static readFully(param0: javaioInputStream): string;
					public static assertNotNullOrEmpty(param0: string, param1: string): string;
					public static toISO8601Date(param0: javautilDate): string;
					public static toISO8601Date(param0: string): javautilDate;
					public static hasPermission(param0: androidcontentContext, param1: string): boolean;
					public static toJsonObject(param0: javautilMap): orgjsonJSONObject;
					public static readFully(param0: javaioBufferedReader): string;
					public static getSegmentSharedPreferences(param0: androidcontentContext, param1: string): androidcontentSharedPreferences;
					public static assertNotNullOrEmpty(param0: javautilMap, param1: string): javautilMap;
					public static copySharedPreferences(param0: androidcontentSharedPreferences, param1: androidcontentSharedPreferences): void;
					public static newSet(param0: native.Array<javalangObject>): javautilSet;
					public static buffer(param0: javaioInputStream): javaioBufferedReader;
				}
				export module Utils {
					export class AnalyticsNetworkExecutorService {
						public constructor();
					}
					export class AnalyticsThread {
						public run(): void;
						public constructor(param0: javalangRunnable);
					}
					export class AnalyticsThreadFactory {
						public constructor();
						public newThread(param0: javalangRunnable): javalangThread;
					}
					export class NullableConcurrentHashMap {
						public constructor();
						public put(param0: javalangObject, param1: javalangObject): javalangObject;
						public constructor(param0: javautilMap);
						public putAll(param0: javautilMap): void;
					}
				}
			}
		}
	}
}

