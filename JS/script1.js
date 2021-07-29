// using prompt and entair value in javascript

//var entair = prompt('Enter the last name ')
//console.log(entair)
//console.log("Hellow world")

// operator Precidencw
var xy,yz,zx

xy=2
yz = 3
zx = 4

var f = xy - zx * yz // firstly higher precedence -* then -// -3*4=-12+2=-10

var f = (xy - zx) * yz
console.log(f)

//  new OBJECT liTeral //
 var john = {
     firstName : 'AL-MAMUN',
     lastName : 'Sharder',
     birthYear : 1999,
     family : ['amma','abba','vai','bon','vaginah'],
     job : 'student',
     isMarried : false

 }
console.log(john.firstName)
console.log(john ['lastName'])
console.log(john.job)
var xx = 'birthYear'
console.log(john[xx])

//  OBject  er value change korah

john.job = "Teacher"
john['isMarried'] = true
console.log(john)


// NEW OBJECT SYNTAX

var jane = new Object()
jane.firstName = 'sadiya'
jane.lasttName = 'Ma muni'
jane.birthYear = 2015
jane.job = 'picci'
jane.isMarried = false

console.log(jane)


//  Done new object
