function sayHello(message){
    console.log(message);
}

module.exports.sayHello = sayHello; //this makes sayHello an object however we just want to export the
                                    //function sayHello so we can use module.exports = sayHello;
                                    //and now in appp.js we can just call logger as a method 