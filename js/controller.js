angular.module("MyApp")
.controller('userForm', userForm);

function userForm(){
	uCtrl = this;
	console.log("controller is running");
	uCtrl.greeting = "Hello World";
	uCtrl.userInput = function(){

	};
};