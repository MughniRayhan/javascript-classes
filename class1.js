/*const names=["s1","s2","s3"];
for(let name of names){
  console.log(name);
}

var n=[22,31,4,5,35,26,78];
var y=n.filter(function(x){
  return x>10;
})
console.log(y);*/




var student=[

  {
    id : 101,
    name : "tisha",
    gpa :2.34
  },
  {
    id : 102,
    name : "ripon",
    gpa :3.96
  },
  {
    id : 103,
    name : "bulbuli",
    gpa :2.96
  }
  ,
  {
    id : 104,
    name : "bilkis",
    gpa :3.82
  },
  {
    id:105,
    name:"rajib",
    gpa:2.50
  }
]


const studentName = () => student.filter((x) => x.gpa<3).map((y) => y.name);

console.log("The names of the students who get gpa less than 3 are " +  studentName() );