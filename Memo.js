// #1 Naming Convertion
var rate = 0.2;
function calToMlg(tt){
    var tot = 0;
    // 마일리지 계산...
    return tot;
}

//better
// const BONUS_RATE = 0.2;
function getTotalMileage(distanceList){ /* 네이밍 정확하게 다른사람이 보아도 구분할 수 있도록 */
    let totalMileage = 0; /* var -> Global변수 선언이므로 지양 let사용 */
    return totalMileage;
}

// #2 template literal
// bad
function introduceMember(member){
    return(
        "이 멤버의 이름은 " + member.name + "이고 나이는 " +member.age+"이며 직업은 " +member.job 
    );
}

// better
function introduceMember(member){
    return `이 멤버의 이름은 ${member.name} 이고 나이는 ${member.age} 이며 직업은 ${member.job}`
}

// #3 destructuring !!!
//bad
const member = {
    name: "개복치",
    age: "24",
    job: "개발자"
}
function introduceMember(member){
    return `이 멤버의 이름은 ${member.name} 이고 나이는 ${member.age} 이며 직업은 ${member.job}`
}

//better
function introduceMember(member){
    const {name, age, job} = member;
    return `이 멤버의 이름은 ${name} 이고 나이는 ${age} 이며 직업은 ${job}`
}