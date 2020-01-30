//Function constructor and Inheritance
/*
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
*/
//Another way to create Objects in that case the function inherent the property which
//i mention in the prototype.
/*
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
*/

//Primitive vs Objects
