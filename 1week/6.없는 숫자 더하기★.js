
let numbers = [1, 2, 3, 4, 6, 7, 8, 0];

var answer = 0;
let num = 0;
// 0 ~ 9까지의 합 45
let total = 45;

for (let i = 0; i < 10; i++) {

    for (let j = 0; j < numbers.length; j++) {
        //배열의 숫자가 있을 경우 num에 저장
        if (numbers[j] == i) {
            num += i;
        }
    }
}
//45에서 배열에 모든 합을 뺀다
answer = total - num;
console.log(answer);


/*
◀문제내용▶
0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ numbers의 길이 ≤ 9
0 ≤ numbers의 모든 원소 ≤ 9
numbers의 모든 원소는 서로 다릅니다.

입출력 예
numbers	result
[1,2,3,4,6,7,8,0]	14
[5,8,4,0,6,7,9]	    6

◀다른사람들이풀이▶ 
45 - numbers.reduce((cur, acc) => cur + acc, 0);

◀어려 웠던 점▶  
없는 숫자만 모아서 더하는 방식을 어려워 했었다.
*/