var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(a) {
        this.personId = a;
        this.orderId = 201;
        this.refId = 301;
        console.log('person object is init-->');
        console.log('person id is--->' + this.personId);
    }
    // create the public method here 
    Person.prototype.createperson = function () {
        console.log('person ID with Order ID is -->' + this.orderId);
        return "person is created by person id -->" + "" + this.personId + "order created with id--->" + this.orderId;
    };
    // craete private here 
    Person.prototype.testPrivateMethod = function () {
        return 'this is my private one-->';
    };
    // access private using previledged here 
    Person.prototype.testPreviledged = function () {
        console.log('access private using previledged here -->');
        return this.testPrivateMethod();
    };
    // static impl 
    Person.testStatic = function () {
        console.log('call static impl-->');
        return 'i am the static Impll';
    };
    return Person;
}());
// create the another Class Student 
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.testChildren = function () {
        console.log('refid-->' + this.refId);
        return 'student is created by the rwef id --> ' + "" + this.refId;
    };
    return Student;
}(Person));
//let p=new Person(101);
var s = new Student(101);
console.log('call the public method here -->' + s.createperson());
console.log('Access private outside the scope of class-->' + s.testPreviledged());
console.log('call static with Class name -->' + Person.testStatic());
console.log('call the Student method here -->' + s.testChildren());
