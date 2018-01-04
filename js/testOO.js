//第一种写法
//var PersonManager = function(){
//	
//	this.showName = function(){
//		
//		alert("Hello, I am JavaScript that object-oriented language!")
//	}
//};
//
//var personManager = new PersonManager;


//第二种写法
//function PersonManager(){
//	
//	var showName2 = function(name){
//		alert("hello, I am " + name +" !");
//	}
//	
//	this.showName = function(){
//		
//		alert("Hello, I am JavaScript that object-oriented language!")
//		showName2("showName2");
//	}
//};

//var personManager = new PersonManager();


//第三种写法
var PersonManager = {};

PersonManager.showName = function(){
	alert("Hello, I am JavaScript that object-oriented language!")
}

PersonManager.prototype.showName3 = function(){
	alert("xxxxxx");
}
var personManager = new PersonManager;
