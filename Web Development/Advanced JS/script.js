//Function constructor and Inheritance

var john = {
  name: 'John',
  yearofBirth:1990,
  job:'teacher'
};

//to create Objects
var Person = function(name,yearofBirth,job){
  this.name = name;
  this.yearofBirth = yearofBirth;
  this.job = job;
}

Person.prototype.calculateAge =
function(){
  console.log(2016 - this.yearofBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('john',1990,'teacher');
var jane = new Person('jane' ,1969,'designer');
var mark = new Person('Mark',1948,'retired');


john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

//Another way to create Objects in that case the function inherent the property which
//i mention in the prototype.

var personProto = {
  calculateAge:function(){
    console.log(2016 - this.yearofBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearofBirth = 1990;
john.job = 'teacher';


var jane = Object.create(personProto,
{
  name :{value : 'jane'},
  yearofBirth : { value :1969},
  job: { value : 'designer'}
});


//Primitive vs Objects

 //Primitive

 var a = 23;
 var b = a;
 a = 46;
 console.log(a);
 console.log(b);

//Objects
var obj1 = {
  name:'john',
  age :26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
  name:'Jonas',
  city:'Lisbon'
};

function change(a,b){
  a = 30;
  b.city = 'San Francisco';
}

change(age , obj);

console.log(age);
console.log(obj.city);

///////////////////
////////Passing Function as argument in js
var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr,fn){
  var arrRes = [];
  for(var i = 0;i < arr.length;i++){
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el){
  return 2016 - el;
}
var ages = arrayCalc(years,calculateAge);
console.log(ages);

//Function Returning Function
function interviewQuestion(job){
  if(job === 'designer'){
    return function(name) {
      console.log(name + ',can you please explain what ux design is ?');
    }
  }else if(job === 'teacher'){
    return function(name){
      console.log('What subject do you teach ,' + name + '?');
    }
  }else {
    return function(name) {
      console.log('Hello' + name + ',what do you do ?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');
