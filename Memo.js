// // #1 Naming Convertion
// var rate = 0.2;
// function calToMlg(tt){
//     var tot = 0;
//     // 마일리지 계산...
//     return tot;
// }

// //better
// // const BONUS_RATE = 0.2;
// function getTotalMileage(distanceList){ /* 네이밍 정확하게 다른사람이 보아도 구분할 수 있도록 */
//     let totalMileage = 0; /* var -> Global변수 선언이므로 지양 let사용 */
//     return totalMileage;
// }

// // #2 template literal
// // bad
// function introduceMember(member){
//     return(
//         "이 멤버의 이름은 " + member.name + "이고 나이는 " +member.age+"이며 직업은 " +member.job 
//     );
// }

// // better
// function introduceMember(member){
//     return `이 멤버의 이름은 ${member.name} 이고 나이는 ${member.age} 이며 직업은 ${member.job}`
// }

// // #3 destructuring !!!
// //bad
// /* const member = {
//     name: "개복치",
//     age: "24",
//     job: "개발자"
// } */
// function introduceMember(member){
//     return `이 멤버의 이름은 ${member.name} 이고 나이는 ${member.age} 이며 직업은 ${member.job}`
// }

// //better
// function introduceMember(member){
//     const {name, age, job} = member;
//     return `이 멤버의 이름은 ${name} 이고 나이는 ${age} 이며 직업은 ${job}`
// }

// #4 spread operator
// bad
// const member = {
//     name: "개복치",
//     age: "24",
//     job: "개발자"
// }
// const job = {
//     task: "frontend",
//     tool: "react",
//     slary: 5000
// }
// /* member.task = job.task;
// member.tool = job.tool;
// member.slary = job.slary; */


// // Object.assign(member,job)

// // console.log(member);


// //good
// const memberJob = { ...member, ...job, area: "seoul" }

// console.log(memberJob);

// //array
// const frontend = ["react", "vue", "angular"];
// const backend = ["spring", "django", "node.js"];
// const publising = ["html", "css", "javascript"];

// const fullstack = [...frontend, ...backend, ...publising];

// console.log(fullstack);

// #5 loop
const BONUS_RATE = 0.2;
const myLastYearDistanceList = [30,20];
const myDistanceList = [99,50,60,15,...myLastYearDistanceList];

// bad
// function getMileageList(distanceList){
//     let mileageList = [];
//     for(let i=0; i<distanceList.length; i++){
//         mileageList.push(distanceList[i] * BONUS_RATE)
//     }
//     return mileageList;
// }

// function getMileageList(distanceList){
//     // let mileageList = distanceList.map((distance) => {
//     //     return distance * BONUS_RATE;
//     // });
//     let mileageList = distanceList.map((distance) => distance * BONUS_RATE);

//     return mileageList;
// }

const getMileageList = (distanceList) => distanceList.map((distance) => distance * BONUS_RATE)

const MINIMUM_DISTANCE = 50;
const qualifiedDistanceList = distance => distanceList.filter(distance => distance> MINIMUM_DISTANCE);