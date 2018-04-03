import {
	NativeModules,
	NativeEventEmitter,
	DeviceEventEmitter,
	NativeAppEventEmitter,
	Platform,
} from 'react-native';

const Emitter = new NativeEventEmitter(NativeModules.RNZenDeskSupport);

export default NativeModules.RNZenDeskSupport || {}
export const zendeskEvents = {
	submitRequestCompletedSet: (callback) => {
		this.successListener = Emitter.addListener('submitRequestCompleted', (notification) => {
			if(callback) {
				callback(notification)
			}
		});
		this.successListener2 = DeviceEventEmitter.addListener('submitRequestCompleted', (event) => {
	    if(callback) {
				callback(notification)
			}
	  });
	},
	submitRequestCompletedClean: () => {
		this.successListener.remove();
		this.successListener2.remove();
	},
}