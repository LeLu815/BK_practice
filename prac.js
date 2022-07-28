
/*
생성자 함수의 역할
프로퍼티 구조가 동일한 인스턴스를 생성하기 위한 템플릿으로서 동작
인스턴스를 생성하는 것과 생성된 인스턴스를 초기화하는 것

// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}

const circle1 = Circle(5);
const circle2 = new Circle(12);

console.log(circle1);

// 일반 함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환한다.
console.log(radius);

console.log(circle2.getDiameter());

*/

// function foo() {
//     // node.js 환경시에는 global
//     console.log(this);
// }

// const obj = { foo };

// console.log(obj);
// obj.foo();

// const inst1 = new foo();

// // const inst2 = new obj();



// // 함수는 무명의 리터럴로 생성할 수 있으며, 런타임에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
// const increse = function (num) {
//     return ++num;
// }
// const decrese = function (num) {
//     return --num;
// }

// // 함수는 객체에 저장할 수 있다.
// const auxs = { increse, decrese };

// function makeCounter(aux) {
//     let num = 0;

//     return function () {
//         num = aux(num);
//         return num;
//     };
// }

// // 함수를 매개변수에 전달할 수 있다.
// const increser = makeCounter(auxs.increse);

function sum() {
    let res = 0;

    for (let i=0; i<arguments.length; i++) {
        res += arguments[i];
    }
    return res;
}

console.log(sum());
console.log(sum(1));
console.log(sum(1,2));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));
