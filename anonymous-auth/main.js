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

const login = document.querySelector('#login');
const logout = document.querySelector('#logout');
const elUser = document.querySelector('.user pre');

const auth = firebase.auth();

login.addEventListener('click', function (e) {
	auth.signInAnonymously();
});
logout.addEventListener('click', function (e) {
	auth.signOut();
});

auth.onAuthStateChanged(user => {
	if (user) {
		elUser.innerHTML = JSON.stringify(user, null, '\t');
		login.classList.add('hidden');
		logout.classList.remove('hidden');
	} else {
		elUser.innerHTML = '';
		login.classList.remove('hidden');
		logout.classList.add('hidden');
	}
});