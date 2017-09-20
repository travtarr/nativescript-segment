
declare var AnalyticsVersionNumber: number;

declare var AnalyticsVersionString: interop.Reference<number>;

declare function GenerateUUIDString(): string;

declare class SEGAES256Crypto extends NSObject implements SEGCrypto {

	static alloc(): SEGAES256Crypto; // inherited from NSObject

	static new(): SEGAES256Crypto; // inherited from NSObject

	static randomDataOfLength(length: number): NSData;

	readonly iv: NSData;

	readonly password: string;

	readonly salt: NSData;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { password: string; });

	constructor(o: { password: string; salt: NSData; iv: NSData; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	decrypt(data: NSData): NSData;

	encrypt(data: NSData): NSData;

	initWithPassword(password: string): this;

	initWithPasswordSaltIv(password: string, salt: NSData, iv: NSData): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SEGAliasPayload extends SEGPayload {

	static alloc(): SEGAliasPayload; // inherited from NSObject

	static new(): SEGAliasPayload; // inherited from NSObject

	readonly theNewId: string;

	constructor(o: { newId: string; context: NSDictionary<string, any>; integrations: NSDictionary<string, any>; });

	initWithNewIdContextIntegrations(newId: string, context: NSDictionary<string, any>, integrations: NSDictionary<string, any>): this;
}

declare class SEGAnalytics extends NSObject {

	static alloc(): SEGAnalytics; // inherited from NSObject

	static debug(showDebugLogs: boolean): void;

	static new(): SEGAnalytics; // inherited from NSObject

	static setupWithConfiguration(configuration: SEGAnalyticsConfiguration): void;

	static sharedAnalytics(): SEGAnalytics;

	readonly configuration: SEGAnalyticsConfiguration;

	constructor(o: { configuration: SEGAnalyticsConfiguration; });

	alias(newId: string): void;

	aliasOptions(newId: string, options: NSDictionary<string, any>): void;

	bundledIntegrations(): NSDictionary<any, any>;

	continueUserActivity(activity: NSUserActivity): void;

	disable(): void;

	enable(): void;

	failedToRegisterForRemoteNotificationsWithError(error: NSError): void;

	flush(): void;

	getAnonymousId(): string;

	group(groupId: string): void;

	groupTraits(groupId: string, traits: NSDictionary<string, any>): void;

	groupTraitsOptions(groupId: string, traits: NSDictionary<string, any>, options: NSDictionary<string, any>): void;

	handleActionWithIdentifierForRemoteNotification(identifier: string, userInfo: NSDictionary<any, any>): void;

	identify(userId: string): void;

	identifyTraits(userId: string, traits: NSDictionary<string, any>): void;

	identifyTraitsOptions(userId: string, traits: NSDictionary<string, any>, options: NSDictionary<string, any>): void;

	initWithConfiguration(configuration: SEGAnalyticsConfiguration): this;

	openURLOptions(url: NSURL, options: NSDictionary<any, any>): void;

	receivedRemoteNotification(userInfo: NSDictionary<any, any>): void;

	registeredForRemoteNotificationsWithDeviceToken(deviceToken: NSData): void;

	reset(): void;

	screen(screenTitle: string): void;

	screenProperties(screenTitle: string, properties: NSDictionary<string, any>): void;

	screenPropertiesOptions(screenTitle: string, properties: NSDictionary<string, any>, options: NSDictionary<string, any>): void;

	track(event: string): void;

	trackProperties(event: string, properties: NSDictionary<string, any>): void;

	trackPropertiesOptions(event: string, properties: NSDictionary<string, any>, options: NSDictionary<string, any>): void;
}

declare class SEGAnalyticsConfiguration extends NSObject {

	static alloc(): SEGAnalyticsConfiguration; // inherited from NSObject

	static configurationWithWriteKey(writeKey: string): SEGAnalyticsConfiguration;

	static new(): SEGAnalyticsConfiguration; // inherited from NSObject

	application: SEGApplicationProtocol;

	crypto: SEGCrypto;

	enableAdvertisingTracking: boolean;

	flushAt: number;

	launchOptions: NSDictionary<any, any>;

	middlewares: NSArray<SEGMiddleware>;

	recordScreenViews: boolean;

	requestFactory: (p1: NSURL) => NSMutableURLRequest;

	shouldUseBluetooth: boolean;

	shouldUseLocationServices: boolean;

	trackApplicationLifecycleEvents: boolean;

	trackAttributionData: boolean;

	trackDeepLinks: boolean;

	trackInAppPurchases: boolean;

	trackPushNotifications: boolean;

	readonly writeKey: string;

	use(factory: SEGIntegrationFactory): void;
}

declare var SEGAnalyticsIntegrationDidStart: string;

declare class SEGApplicationLifecyclePayload extends SEGPayload {

	static alloc(): SEGApplicationLifecyclePayload; // inherited from NSObject

	static new(): SEGApplicationLifecyclePayload; // inherited from NSObject

	launchOptions: NSDictionary<any, any>;

	notificationName: string;
}

interface SEGApplicationProtocol extends NSObjectProtocol {

	delegate: UIApplicationDelegate;

	seg_beginBackgroundTaskWithNameExpirationHandler(taskName: string, handler: () => void): number;

	seg_endBackgroundTask(identifier: number): void;
}
declare var SEGApplicationProtocol: {

	prototype: SEGApplicationProtocol;
};

declare class SEGBlockMiddleware extends NSObject implements SEGMiddleware {

	static alloc(): SEGBlockMiddleware; // inherited from NSObject

	static new(): SEGBlockMiddleware; // inherited from NSObject

	readonly block: (p1: SEGContext, p2: (p1: SEGContext) => void) => void;

	constructor(o: { block: (p1: SEGContext, p2: (p1: SEGContext) => void) => void; });

	contextNext(context: SEGContext, next: (p1: SEGContext) => void): void;

	initWithBlock(block: (p1: SEGContext, p2: (p1: SEGContext) => void) => void): this;
}

declare function SEGCoerceDictionary(dict: NSDictionary<any, any>): NSDictionary<string, any>;

declare class SEGContext extends NSObject implements NSCopying {

	static alloc(): SEGContext; // inherited from NSObject

	static new(): SEGContext; // inherited from NSObject

	readonly _analytics: SEGAnalytics;

	readonly anonymousId: string;

	readonly debug: boolean;

	readonly error: NSError;

	readonly eventType: SEGEventType;

	readonly payload: SEGPayload;

	readonly userId: string;

	constructor(o: { analytics: SEGAnalytics; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithAnalytics(analytics: SEGAnalytics): this;

	modify(modify: (p1: SEGMutableContext) => void): SEGContext;
}

declare class SEGContinueUserActivityPayload extends SEGPayload {

	static alloc(): SEGContinueUserActivityPayload; // inherited from NSObject

	static new(): SEGContinueUserActivityPayload; // inherited from NSObject

	activity: NSUserActivity;
}

interface SEGCrypto extends NSObjectProtocol {

	decrypt(data: NSData): NSData;

	encrypt(data: NSData): NSData;
}
declare var SEGCrypto: {

	prototype: SEGCrypto;
};

declare function SEGEventNameForScreenTitle(title: string): string;

declare const enum SEGEventType {

	Undefined = 0,

	Identify = 1,

	Track = 2,

	Screen = 3,

	Group = 4,

	Alias = 5,

	Reset = 6,

	Flush = 7,

	ReceivedRemoteNotification = 8,

	FailedToRegisterForRemoteNotifications = 9,

	RegisteredForRemoteNotifications = 10,

	HandleActionWithForRemoteNotification = 11,

	ApplicationLifecycle = 12,

	ContinueUserActivity = 13,

	OpenURL = 14
}

declare class SEGFileStorage extends NSObject implements SEGStorage {

	static alloc(): SEGFileStorage; // inherited from NSObject

	static applicationSupportDirectoryURL(): NSURL;

	static new(): SEGFileStorage; // inherited from NSObject

	crypto: SEGCrypto; // inherited from SEGStorage

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { folder: NSURL; crypto: SEGCrypto; });

	arrayForKey(key: string): NSArray<any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dataForKey(key: string): NSData;

	dictionaryForKey(key: string): NSDictionary<any, any>;

	initWithFolderCrypto(folderURL: NSURL, crypto: SEGCrypto): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeKey(key: string): void;

	resetAll(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setArrayForKey(array: NSArray<any>, key: string): void;

	setDataForKey(data: NSData, key: string): void;

	setDictionaryForKey(dictionary: NSDictionary<any, any>, key: string): void;

	setStringForKey(string: string, key: string): void;

	stringForKey(key: string): string;

	urlForKey(key: string): NSURL;
}

declare class SEGGroupPayload extends SEGPayload {

	static alloc(): SEGGroupPayload; // inherited from NSObject

	static new(): SEGGroupPayload; // inherited from NSObject

	readonly groupId: string;

	readonly traits: NSDictionary<string, any>;

	constructor(o: { groupId: string; traits: NSDictionary<string, any>; context: NSDictionary<string, any>; integrations: NSDictionary<string, any>; });

	initWithGroupIdTraitsContextIntegrations(groupId: string, traits: NSDictionary<string, any>, context: NSDictionary<string, any>, integrations: NSDictionary<string, any>): this;
}

declare class SEGHTTPClient extends NSObject {

	static alloc(): SEGHTTPClient; // inherited from NSObject

	static authorizationHeader(writeKey: string): string;

	static defaultRequestFactory(): (p1: NSURL) => NSMutableURLRequest;

	static new(): SEGHTTPClient; // inherited from NSObject

	readonly genericSession: NSURLSession;

	requestFactory: (p1: NSURL) => NSMutableURLRequest;

	readonly sessionsByWriteKey: NSMutableDictionary<string, NSURLSession>;

	constructor(o: { requestFactory: (p1: NSURL) => NSMutableURLRequest; });

	attributionWithWriteKeyForDeviceCompletionHandler(writeKey: string, context: NSDictionary<string, any>, completionHandler: (p1: boolean, p2: NSDictionary<string, any>) => void): NSURLSessionDataTask;

	initWithRequestFactory(requestFactory: (p1: NSURL) => NSMutableURLRequest): this;

	settingsForWriteKeyCompletionHandler(writeKey: string, completionHandler: (p1: boolean, p2: NSDictionary<string, any>) => void): NSURLSessionDataTask;

	uploadForWriteKeyCompletionHandler(batch: NSDictionary<string, any>, writeKey: string, completionHandler: (p1: boolean) => void): NSURLSessionUploadTask;
}

declare function SEGIDFA(): string;

declare class SEGIdentifyPayload extends SEGPayload {

	static alloc(): SEGIdentifyPayload; // inherited from NSObject

	static new(): SEGIdentifyPayload; // inherited from NSObject

	readonly anonymousId: string;

	readonly traits: NSDictionary<string, any>;

	readonly userId: string;

	constructor(o: { userId: string; anonymousId: string; traits: NSDictionary<string, any>; context: NSDictionary<string, any>; integrations: NSDictionary<string, any>; });

	initWithUserIdAnonymousIdTraitsContextIntegrations(userId: string, anonymousId: string, traits: NSDictionary<string, any>, context: NSDictionary<string, any>, integrations: NSDictionary<string, any>): this;
}

interface SEGIntegration extends NSObjectProtocol {

	alias?(payload: SEGAliasPayload): void;

	applicationDidBecomeActive?(): void;

	applicationDidEnterBackground?(): void;

	applicationDidFinishLaunching?(notification: NSNotification): void;

	applicationWillEnterForeground?(): void;

	applicationWillResignActive?(): void;

	applicationWillTerminate?(): void;

	continueUserActivity?(activity: NSUserActivity): void;

	failedToRegisterForRemoteNotificationsWithError?(error: NSError): void;

	flush?(): void;

	group?(payload: SEGGroupPayload): void;

	handleActionWithIdentifierForRemoteNotification?(identifier: string, userInfo: NSDictionary<any, any>): void;

	identify?(payload: SEGIdentifyPayload): void;

	openURLOptions?(url: NSURL, options: NSDictionary<any, any>): void;

	receivedRemoteNotification?(userInfo: NSDictionary<any, any>): void;

	registeredForRemoteNotificationsWithDeviceToken?(deviceToken: NSData): void;

	reset?(): void;

	screen?(payload: SEGScreenPayload): void;

	track?(payload: SEGTrackPayload): void;
}
declare var SEGIntegration: {

	prototype: SEGIntegration;
};

interface SEGIntegrationFactory {

	createWithSettingsForAnalytics(settings: NSDictionary<any, any>, analytics: SEGAnalytics): SEGIntegration;

	key(): string;
}
declare var SEGIntegrationFactory: {

	prototype: SEGIntegrationFactory;
};

declare class SEGIntegrationsManager extends NSObject implements SEGMiddleware {

	static alloc(): SEGIntegrationsManager; // inherited from NSObject

	static new(): SEGIntegrationsManager; // inherited from NSObject

	readonly registeredIntegrations: NSMutableDictionary<any, any>;

	constructor(o: { analytics: SEGAnalytics; });

	contextNext(context: SEGContext, next: (p1: SEGContext) => void): void;

	getAnonymousId(): string;

	initWithAnalytics(analytics: SEGAnalytics): this;
}

interface SEGMiddleware {

	contextNext(context: SEGContext, next: (p1: SEGContext) => void): void;
}
declare var SEGMiddleware: {

	prototype: SEGMiddleware;
};

declare class SEGMiddlewareRunner extends NSObject {

	static alloc(): SEGMiddlewareRunner; // inherited from NSObject

	static new(): SEGMiddlewareRunner; // inherited from NSObject

	readonly middlewares: NSArray<SEGMiddleware>;

	constructor(o: { middlewares: NSArray<SEGMiddleware>; });

	initWithMiddlewares(middlewares: NSArray<SEGMiddleware>): this;

	runCallback(context: SEGContext, callback: (p1: boolean, p2: NSArray<SEGMiddleware>) => void): void;
}

interface SEGMutableContext extends NSObjectProtocol {

	anonymousId: string;

	debug: boolean;

	error: NSError;

	eventType: SEGEventType;

	payload: SEGPayload;

	userId: string;
}
declare var SEGMutableContext: {

	prototype: SEGMutableContext;
};

declare const enum SEGNetworkStatus {

	NotReachable = 0,

	ReachableViaWiFi = 2,

	ReachableViaWWAN = 1
}

declare class SEGOpenURLPayload extends SEGPayload {

	static alloc(): SEGOpenURLPayload; // inherited from NSObject

	static new(): SEGOpenURLPayload; // inherited from NSObject

	options: NSDictionary<any, any>;

	url: NSURL;
}

declare class SEGPayload extends NSObject {

	static alloc(): SEGPayload; // inherited from NSObject

	static new(): SEGPayload; // inherited from NSObject

	readonly context: NSDictionary<string, any>;

	readonly integrations: NSDictionary<string, any>;

	constructor(o: { context: NSDictionary<string, any>; integrations: NSDictionary<string, any>; });

	initWithContextIntegrations(context: NSDictionary<string, any>, integrations: NSDictionary<string, any>): this;
}

declare class SEGReachability extends NSObject {

	static alloc(): SEGReachability; // inherited from NSObject

	static new(): SEGReachability; // inherited from NSObject

	static reachabilityForInternetConnection(): SEGReachability;

	static reachabilityForLocalWiFi(): SEGReachability;

	static reachabilityWithHostname(hostname: string): SEGReachability;

	reachableBlock: (p1: SEGReachability) => void;

	reachableOnWWAN: boolean;

	unreachableBlock: (p1: SEGReachability) => void;

	constructor(o: { reachabilityRef: any; });

	connectionRequired(): boolean;

	currentReachabilityFlags(): string;

	currentReachabilityStatus(): SEGNetworkStatus;

	currentReachabilityString(): string;

	initWithReachabilityRef(ref: any): this;

	isConnectionOnDemand(): boolean;

	isConnectionRequired(): boolean;

	isInterventionRequired(): boolean;

	isReachable(): boolean;

	isReachableViaWWAN(): boolean;

	isReachableViaWiFi(): boolean;

	reachabilityFlags(): SCNetworkReachabilityFlags;

	startNotifier(): boolean;

	stopNotifier(): void;
}

declare class SEGRemoteNotificationPayload extends SEGPayload {

	static alloc(): SEGRemoteNotificationPayload; // inherited from NSObject

	static new(): SEGRemoteNotificationPayload; // inherited from NSObject

	actionIdentifier: string;

	deviceToken: NSData;

	error: NSError;

	userInfo: NSDictionary<any, any>;
}

declare class SEGScreenPayload extends SEGPayload {

	static alloc(): SEGScreenPayload; // inherited from NSObject

	static new(): SEGScreenPayload; // inherited from NSObject

	readonly category: string;

	readonly name: string;

	readonly properties: NSDictionary<any, any>;

	constructor(o: { name: string; properties: NSDictionary<any, any>; context: NSDictionary<any, any>; integrations: NSDictionary<any, any>; });

	initWithNamePropertiesContextIntegrations(name: string, properties: NSDictionary<any, any>, context: NSDictionary<any, any>, integrations: NSDictionary<any, any>): this;
}

declare var SEGSegmentDidSendRequestNotification: string;

declare class SEGSegmentIntegration extends NSObject implements SEGIntegration {

	static alloc(): SEGSegmentIntegration; // inherited from NSObject

	static new(): SEGSegmentIntegration; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { analytics: SEGAnalytics; httpClient: SEGHTTPClient; storage: SEGStorage; });

	alias(payload: SEGAliasPayload): void;

	applicationDidBecomeActive(): void;

	applicationDidEnterBackground(): void;

	applicationDidFinishLaunching(notification: NSNotification): void;

	applicationWillEnterForeground(): void;

	applicationWillResignActive(): void;

	applicationWillTerminate(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	continueUserActivity(activity: NSUserActivity): void;

	failedToRegisterForRemoteNotificationsWithError(error: NSError): void;

	flush(): void;

	group(payload: SEGGroupPayload): void;

	handleActionWithIdentifierForRemoteNotification(identifier: string, userInfo: NSDictionary<any, any>): void;

	identify(payload: SEGIdentifyPayload): void;

	initWithAnalyticsHttpClientStorage(analytics: SEGAnalytics, httpClient: SEGHTTPClient, storage: SEGStorage): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	openURLOptions(url: NSURL, options: NSDictionary<any, any>): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	receivedRemoteNotification(userInfo: NSDictionary<any, any>): void;

	registeredForRemoteNotificationsWithDeviceToken(deviceToken: NSData): void;

	reset(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	screen(payload: SEGScreenPayload): void;

	self(): this;

	track(payload: SEGTrackPayload): void;
}

declare class SEGSegmentIntegrationFactory extends NSObject implements SEGIntegrationFactory {

	static alloc(): SEGSegmentIntegrationFactory; // inherited from NSObject

	static new(): SEGSegmentIntegrationFactory; // inherited from NSObject

	client: SEGHTTPClient;

	storage: SEGStorage;

	constructor(o: { HTTPClient: SEGHTTPClient; storage: SEGStorage; });

	createWithSettingsForAnalytics(settings: NSDictionary<any, any>, analytics: SEGAnalytics): SEGIntegration;

	initWithHTTPClientStorage(client: SEGHTTPClient, storage: SEGStorage): this;

	key(): string;
}

declare var SEGSegmentRequestDidFailNotification: string;

declare var SEGSegmentRequestDidSucceedNotification: string;

declare function SEGSetShowDebugLogs(showDebugLogs: boolean): void;

interface SEGStorage extends NSObjectProtocol {

	crypto: SEGCrypto;

	arrayForKey(key: string): NSArray<any>;

	dataForKey(key: string): NSData;

	dictionaryForKey(key: string): NSDictionary<any, any>;

	removeKey(key: string): void;

	resetAll(): void;

	setArrayForKey(array: NSArray<any>, key: string): void;

	setDataForKey(data: NSData, key: string): void;

	setDictionaryForKey(dictionary: NSDictionary<any, any>, key: string): void;

	setStringForKey(string: string, key: string): void;

	stringForKey(key: string): string;
}
declare var SEGStorage: {

	prototype: SEGStorage;
};

declare class SEGStoreKitTracker extends NSObject implements SKPaymentTransactionObserver, SKProductsRequestDelegate {

	static alloc(): SEGStoreKitTracker; // inherited from NSObject

	static new(): SEGStoreKitTracker; // inherited from NSObject

	static trackTransactionsForAnalytics(analytics: SEGAnalytics): SEGStoreKitTracker;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	paymentQueueRemovedTransactions(queue: SKPaymentQueue, transactions: NSArray<SKPaymentTransaction>): void;

	paymentQueueRestoreCompletedTransactionsFailedWithError(queue: SKPaymentQueue, error: NSError): void;

	paymentQueueRestoreCompletedTransactionsFinished(queue: SKPaymentQueue): void;

	paymentQueueUpdatedDownloads(queue: SKPaymentQueue, downloads: NSArray<SKDownload>): void;

	paymentQueueUpdatedTransactions(queue: SKPaymentQueue, transactions: NSArray<SKPaymentTransaction>): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	productsRequestDidReceiveResponse(request: SKProductsRequest, response: SKProductsResponse): void;

	requestDidFailWithError(request: SKRequest, error: NSError): void;

	requestDidFinish(request: SKRequest): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SEGTrackPayload extends SEGPayload {

	static alloc(): SEGTrackPayload; // inherited from NSObject

	static new(): SEGTrackPayload; // inherited from NSObject

	readonly event: string;

	readonly properties: NSDictionary<any, any>;

	constructor(o: { event: string; properties: NSDictionary<any, any>; context: NSDictionary<any, any>; integrations: NSDictionary<any, any>; });

	initWithEventPropertiesContextIntegrations(event: string, properties: NSDictionary<any, any>, context: NSDictionary<any, any>, integrations: NSDictionary<any, any>): this;
}

declare class SEGUserDefaultsStorage extends NSObject implements SEGStorage {

	static alloc(): SEGUserDefaultsStorage; // inherited from NSObject

	static new(): SEGUserDefaultsStorage; // inherited from NSObject

	readonly defaults: NSUserDefaults;

	readonly namespacePrefix: string;

	crypto: SEGCrypto; // inherited from SEGStorage

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { defaults: NSUserDefaults; namespacePrefix: string; crypto: SEGCrypto; });

	arrayForKey(key: string): NSArray<any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dataForKey(key: string): NSData;

	dictionaryForKey(key: string): NSDictionary<any, any>;

	initWithDefaultsNamespacePrefixCrypto(defaults: NSUserDefaults, namespacePrefix: string, crypto: SEGCrypto): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeKey(key: string): void;

	resetAll(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setArrayForKey(array: NSArray<any>, key: string): void;

	setDataForKey(data: NSData, key: string): void;

	setDictionaryForKey(dictionary: NSDictionary<any, any>, key: string): void;

	setStringForKey(string: string, key: string): void;

	stringForKey(key: string): string;
}

declare class SEGUtils extends NSObject {

	static alloc(): SEGUtils; // inherited from NSObject

	static dataFromPlist(plist: any): NSData;

	static new(): SEGUtils; // inherited from NSObject

	static plistFromData(data: NSData): any;
}

declare function iso8601FormattedString(date: Date): string;

declare var kSEGReachabilityChangedNotification: string;

declare function seg_dispatch_is_on_specific_queue(queue: NSObject): boolean;

declare function seg_dispatch_queue_create_specific(label: string, attr: NSObject): NSObject;

declare function seg_dispatch_specific(queue: NSObject, block: () => void, waitForCompletion: boolean): void;

declare function seg_dispatch_specific_async(queue: NSObject, block: () => void): void;

declare function seg_dispatch_specific_sync(queue: NSObject, block: () => void): void;

declare function seg_libzOpen(): interop.Pointer | interop.Reference<any>;
