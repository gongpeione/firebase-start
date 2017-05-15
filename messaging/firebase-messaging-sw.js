/**
 * Created by geeku on 15/05/2017.
 */
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

// Initialize Firebase
var config = {
	apiKey: "AIzaSyAYVJKkd_mr4RQZlkITUVUGLeyDieMPHdo",
	authDomain: "geeku-161115.firebaseapp.com",
	databaseURL: "https://geeku-161115.firebaseio.com",
	projectId: "geeku-161115",
	storageBucket: "geeku-161115.appspot.com",
	messagingSenderId: "516887303884"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(payload => {
	return self.registration.showNotification('Title', {
		body: payload.data.content
	});
})