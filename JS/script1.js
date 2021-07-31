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

// OBJECT ANOTHER METHOD OOP Concept

var john1 = {
    firstName : 'AL-MAMUN',
    lastName : 'Sharder',
    birthYear : 1999,
    family : ['amma','abba','vai','bon','vaginah'],
    job : 'student',
    isMarried : false,
    ccage : function(){
        this.age = 3000 - this.birthYear
    }

}
john1.ccage()
console.log(john1)

// using function with OBJECT

//  BMI A  HUMAN BEINGS ?]

var almamunweight = 70 //oviously KG format
var almamunheight = 1.778 // oviously converted MEATERS
var khadizahWeight = 60 //oviously KG format
var khadizahHeight = 1.61 // oviously converted MEATERS

var almamunBMI = almamunweight / (almamunheight * almamunheight)
var khadizaBMI = khadizahWeight / (khadizahHeight * khadizahHeight)
console.log(khadizaBMI,almamunBMI)

var equalsBMI = almamunBMI < khadizaBMI
console.log(equalsBMI)

//  BMI DOne

// Now 3 equivalent started

var mamun = (20+40+60)/3
var jaber = (21+40+60)/3
var misu = (22+40+60)/3

console.log(mamun)
console.log(jaber)
console.log(misu)

// THIS Will Be 2 compair

if(mamun > jaber){
    console.log('Mamun\'s Team wings with ' + ' ' + mamun + ' Points')
}else if(jaber > mamun){
    console.log('Jaber\'s Team wings with ' + ' ' + jaber + ' Points')
}else{
    console.log('This Match Drawn')
}

//  This Will Be 3 compair

if(mamun > jaber && mamun > misu){
    console.log('Mamun\'s Team wings with ' + ' ' + mamun + ' Points')
}else if(jaber > mamun && jaber > misu){
    console.log('Jaber\'s Team wings with ' + ' ' + jaber + ' Points')
}else if(misu > mamun && jaber < misu){
    console.log('Misus\'s Team wings with ' + ' ' + misu + ' Points')
}else{
    console.log('This Match Drawn')
}

// DOne It also Worked