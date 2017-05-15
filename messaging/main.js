/**
 * Created by geeku on 15/05/2017.
 */
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
messaging.requestPermission()
	.then(() => {
		console.log('Have permission');
		return messaging.getToken();
	})
	.then(token => {
		console.log(token);
	})
	.catch(err => {
		alert('Permission is required')
	});

messaging.onMessage(payload => {
	console.log(payload);
	document.querySelector('main').innerHTML = `<pre>${JSON.stringify(payload, null, '\t')}</pre>`;
});

// cURL
// curl -X POST --header "Authorization: key=key" --header "Content-Type:application/json" https://fcm.googleapis.com/fcm/send -d "{\"to\":\"id\",\"priority\":\"high\",\"notification\":{\"body\": \"FOO BAR BLA BLA\"}}"