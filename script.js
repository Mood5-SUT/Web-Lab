const jsOutput = document.getElementById('js-output');
const demoResult = document.getElementById('demo-result');
const weatherResult = document.getElementById('weather-result');
const dayResult = document.getElementById('day-result');
const currentYear = document.getElementById('current-year');

// Set current year in footer
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Initial console output
console.log("Web Development Labs - Consolidated Project");
document.writeln = function(text) {
    if (jsOutput) {
        jsOutput.innerHTML += text + "<br>";
    }
};

// Function declarations
function welcome() {
    console.log("welcome");
    return "welcome";
}

function multiply(a, b) {
    const result = a * b;
    return result;
}

var y = function() {
    console.log("hi");
    return "hi";
}

function callAnotherFn(Fn) {
    console.log("call another function");
    if (typeof Fn === 'function') {
        return Fn();
    }
    return "Not a function";
}

// Array operations
function arrayOperations() {
    var arr = [1, 2, 3, "name", "major"];
    let output = "Initial array: " + JSON.stringify(arr) + "\n";
    output += "arr[1]: " + arr[1] + "\n";
    
    arr[0] = 5;
    output += "After arr[0] = 5: " + JSON.stringify(arr) + "\n";
    
    output += "Array length: " + arr.length + "\n";
    
    arr.pop();
    output += "After pop(): " + JSON.stringify(arr) + "\n";
    
    arr.push("add");
    output += "After push('add'): " + JSON.stringify(arr) + "\n";
    
    arr.splice(3, 1, "replace");
    output += "After splice(3,1,'replace'): " + JSON.stringify(arr) + "\n";
    
    arr.splice(3, 0, "add 2");
    output += "After splice(3,0,'add 2'): " + JSON.stringify(arr) + "\n";
    
    arr.shift();
    output += "After shift(): " + JSON.stringify(arr) + "\n";
    
    arr.unshift(999);
    output += "After unshift(999): " + JSON.stringify(arr);
    
    return output;
}

// Object operations from script_lab9.js
function objectOperations() {
    var person = {
        name: "Ahmed",
        age: "23"
    };
    
    let output = "Initial person object: " + JSON.stringify(person) + "\n";
    
    person.major = "cyber security";
    output += "After adding major: " + JSON.stringify(person) + "\n";
    
    delete person.age;
    output += "After deleting age: " + JSON.stringify(person) + "\n";
    
    output += "Object.values(person): " + JSON.stringify(Object.values(person)) + "\n";
    output += "Object.keys(person): " + JSON.stringify(Object.keys(person)) + "\n";
    output += "Object.entries(person): " + JSON.stringify(Object.entries(person)) + "\n";
    
    var person2 = {};
    Object.assign(person2, person, {id: 1234});
    output += "person2 after Object.assign: " + JSON.stringify(person2) + "\n";
    
    output += "Looping through person2:\n";
    for (var k in person2) {
        output += k + ": " + person2[k] + "\n";
    }
    
    return output;
}

// OOP examples
function oopExamples() {
    let output = "";
    
    // Constructor function
    function Person(name, age, major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }
    
    var p2 = new Person("arthur", 25, "business");
    output += "Person object created: " + p2.name + ", " + p2.age + ", " + p2.major + "\n";
    
    // Prototype inheritance
    function Animal(name) {
        this.name = name;
    }
    
    Animal.prototype.sound = function() {
        return this.name + " makes a sound";
    }
    
    let a = new Animal("cat");
    output += "Animal sound: " + a.sound() + "\n";
    
    // Inheritance
    function Dog(name) {
        this.name = name;
    }
    
    Dog.prototype = Object.create(Animal.prototype);
    var d = new Dog("dog");
    output += "Dog sound: " + d.sound() + "\n";
    

    class Animal2 {
        constructor(name) {
            this.name = name;
        }
        
        sound() {
            return this.name + " makes a sound";
        }
    }
    
    class Dog2 extends Animal2 {
        constructor(name) {
            super(name);
        }
    }
    
    var d3 = new Dog2("puppy");
    var a4 = new Animal2("elephant");
    output += "Dog2 sound: " + d3.sound() + "\n";
    output += "Animal2 sound: " + a4.sound() + "\n";
    
    // JSON examples
    let str = JSON.stringify({name: "Ahmed", major: "cyber security"});
    output += "JSON stringify: " + str + "\n";
    
    let obj = JSON.parse(str);
    output += "JSON parse: " + JSON.stringify(obj);
    
    return output;
}

// Variable scope example
function scopeExample() {
    let output = "";
    for (let i = 0; i < 5; i++) {
        var u = 4; 
        let k = 5; 
        const c = 6;
        output += "Loop iteration " + i + ": u=" + u + ", k=" + k + ", c=" + c + "\n";
    }
    output += "After loop, u=" + u + " (accessible because var has function scope)\n";
    output += "k and c are not accessible outside the loop (block scope)";
    return output;
}

// Type conversion examples
function typeExamples() {
    let output = "";
    
    let v = 4;
    v = 2;
    output += "v = " + v + ", type: " + typeof v + "\n";
    
    const r = 2;
    output += "r = " + r + ", type: " + typeof r + "\n";
    
    let f = false;
    output += "f = " + f + ", type: " + typeof f + "\n";
    
    let s = "name";
    output += "s = '" + s + "', type: " + typeof s + "\n";
    
    let z;
    output += "z = " + z + ", type: " + typeof z + "\n";
    
    let n = null;
    output += "n = " + n + ", type: " + typeof n + "\n";
    output += "n == null: " + (n == null) + "\n";
    
    let h = 10;
    let u = 10;
    output += "h == u: " + (h == u) + "\n";
    
    c = Symbol(10);
    k = Symbol(10);
    output += "Symbol(10) == Symbol(10): " + (c == k) + "\n";
    
    // Type conversion examples
    let i = 13;
    output += "i = " + i + ", type: " + typeof i + "\n";
    
    i = 13n;
    output += "i = " + i + ", type: " + typeof i + "\n";
    
    let l = 19;
    l = String(l);
    output += "l = '" + l + "', type: " + typeof l + "\n";
    
    let q = "20";
    q = Number(q);
    output += "q = " + q + ", type: " + typeof q + "\n";
    
    let o = 123;
    o = BigInt(o);
    output += "o = " + o + ", type: " + typeof o + "\n";
    
    let p = parseInt("12.14cm");
    output += "parseInt('12.14cm') = " + p + "\n";
    
    p = parseFloat("12.14cm");
    output += "parseFloat('12.14cm') = " + p + "\n";
    
    output += "'12' + 5 = " + ('12' + 5) + "\n";
    output += "'12' - 5 = " + ('12' - 5);
    
    return output;
}

// Weather function
function checkWeather(temp) {
    if (temp >= 30) {
        return "Weather is hot";
    } else if (temp >= 20 && temp < 30) {
        return "Weather is warm";
    } else {
        return "Weather is cold";
    }
}

// Day of week function 
function getDayName(day) {
    switch(day) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid day number";
    }
}

// Event listeners setup
document.addEventListener('DOMContentLoaded', function() {
    // Run initial JavaScript functions
    document.writeln("Project loaded successfully!");
    document.writeln("Check console for JavaScript output");
    
    // Run initial console examples
    console.log(welcome());
    console.log(multiply(3, 4));
    y();
    callAnotherFn(y);
    callAnotherFn(function() {
        console.log("New function");
    });
    callAnotherFn(() => {
        console.log("New function 2");
    });
    
    // Setup button event listeners
    const runFunctionsBtn = document.getElementById('run-functions');
    const arrayDemoBtn = document.getElementById('array-demo');
    const objectDemoBtn = document.getElementById('object-demo');
    const oopDemoBtn = document.getElementById('oop-demo');
    const checkTempBtn = document.getElementById('check-temp');
    const checkDayBtn = document.getElementById('check-day');
    const funButton = document.getElementById('fun-button');
    const sampleForm = document.getElementById('sample-form');
    
    if (runFunctionsBtn) {
        runFunctionsBtn.addEventListener('click', function() {
            let output = "=== Running JavaScript Functions ===\n";
            output += "welcome(): " + welcome() + "\n";
            output += "multiply(3, 4): " + multiply(3, 4) + "\n";
            output += "y(): " + y() + "\n";
            output += "callAnotherFn(y): " + callAnotherFn(y) + "\n";
            output += "\n=== Type Examples ===\n" + typeExamples();
            output += "\n=== Scope Example ===\n" + scopeExample();
            
            if (demoResult) {
                demoResult.textContent = output;
            }
        });
    }
    
    if (arrayDemoBtn) {
        arrayDemoBtn.addEventListener('click', function() {
            if (demoResult) {
                demoResult.textContent = "=== Array Operations ===\n" + arrayOperations();
            }
        });
    }
    
    if (objectDemoBtn) {
        objectDemoBtn.addEventListener('click', function() {
            if (demoResult) {
                demoResult.textContent = "=== Object Operations ===\n" + objectOperations();
            }
        });
    }
    
    if (oopDemoBtn) {
        oopDemoBtn.addEventListener('click', function() {
            if (demoResult) {
                demoResult.textContent = "=== OOP Examples ===\n" + oopExamples();
            }
        });
    }
    
    if (checkTempBtn) {
        checkTempBtn.addEventListener('click', function() {
            const tempInput = document.getElementById('temperature');
            const temp = parseInt(tempInput.value) || 25;
            const result = checkWeather(temp);
            
            if (weatherResult) {
                weatherResult.textContent = result;
                
                // Ternary operator example
                const m = (temp >= 30) ? "hot" : (temp >= 20 && temp < 30) ? "warm" : "cold";
                weatherResult.textContent += " (Ternary result: " + m + ")";
            }
        });
    }
    
    if (checkDayBtn) {
        checkDayBtn.addEventListener('click', function() {
            const dayInput = document.getElementById('day-number');
            const day = parseInt(dayInput.value) || 4;
            const result = getDayName(day);
            
            if (dayResult) {
                dayResult.textContent = result;
            }
        });
    }
    
    if (funButton) {
        funButton.addEventListener('click', function() {
            alert("This is a fun button! JavaScript is working correctly.");
            console.log("Fun button clicked!");
        });
    }
    
    if (sampleForm) {
        sampleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Form submitted! (This is a demo - form data would normally be sent to a server)");
            console.log("Form submitted");
            return false;
        });
    }
    

    if (checkTempBtn) checkTempBtn.click();
    if (checkDayBtn) checkDayBtn.click();
});