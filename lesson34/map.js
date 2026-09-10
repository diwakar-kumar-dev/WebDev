let originalPrice = [345,666, 887]
 
let discountPrice = []
// for(value of originalPrice){
//     discountPrice.push(value*0.9)

// }
// console.log(originalPrice);
// console.log(discountPrice);

originalPrice.forEach((value)=>{
    discountPrice.push(value*0.9)
})

const discountPrice2 = originalPrice.map((value) => {
    return value *0.9
})
// console.log(discountPrice2);


let student =[
    {
        name : "Aakash",
        marks :99,
    },
    {
        name : "Mandi",
        marks :83,
    },
     {
        name : "Diwkar",
        marks :86,
    },
     {
        name : "Prabhakar",
        marks :88,
    },
    {
        name : "Prabh",
        marks :8,
    },
]

const studentName = student.map((student) => student.name)
const studentmarks = student.map((student) => student.marks)

// console.log(studentName);
// console.log(studentmarks);

// let boostsMarks = student.map((student) =>{
//     return{...student,marks: student.marks+10}
// })

let boostsMarks = student.map((student) =>({...student,marks: student.marks+10})
)
// console.log(boostsMarks); 

// let failStudent =[] 
// student.forEach((student) =>{
//     if(student.marks<33){
//         failStudent.push(student)
//     }
// })



 
// chaing
const failStudent = student.filter((student) => student.marks<33).map((student) =>({...student,marks: student.marks}))
// console.log(failStudent);

let marks = [33,54,56,67]
// let totalMarks = 0

marks.forEach((mark)=> totalMarks+= mark)
// console.log (totalMarks)

const totalMarks = marks.reduce((accumulator,currentValue) =>{
return accumulator+currentValue;
},0)
console.log(totalMarks)