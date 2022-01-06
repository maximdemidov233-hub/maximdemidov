// function func(num) {

//     return console.log(num * num)
// }

// func(3);


// function sqrt(num) {
//     return Math.sqrt(num);
// }

// function round(num) {
//     return num.toFixed(3);
// }

// let result = round(sqrt(2));

// console.log(result)


// function func(num) {
//     let i = 1;


//     while (true) {
//         num = num / 2;
//         console.log(num)

//         if (num <= 10) {
//             return i;
//         }



//         i++
//     }
// }

// console.log(func(100))

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];

// function getSum(arr) {
//     let sum = 0;

//     for (let elem of arr) {

//         sum += elem * elem;

//     }

//     console.log(sum)

// }

// getSum(arr1)
// getSum(arr2)

// let resultArr = [];

// function getDivisor(num) {

//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             resultArr.unshift(num / i)
//         } continue
//     }

//     console.log(resultArr)
// }

// getDivisor(24)

// let arrPositiv = [1, 2, 3, 4, 5]

// function getNegative(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             return false
//         }

//     }
//     return true;
// }
// console.log(getNegative(arrPositiv));

// function getDigitsSum(num) {
//     let sum = 0;
//     let digits = String(num).split('');

//     for (let digit of digits) {
//         sum += Number(digit);
//     }

//     return sum == 13;
// }

// let years = []

// for (let num = 1; num < 2030; num++) {
//     if (getDigitsSum(num)) {
//         years.push(num)

//     }
// }

(function () {

    function getDigits(num) {
        return String(num).split('');
    }

    let sum = 0;

    function getSumm(arr) {
        for (let elem of arr) {
            sum += Number(elem);
        }

        return sum;
    }

    function inRange(num) {
        let summ = getSumm(getDigits(num))

        return summ > 1 && summ < 9;

    }

    let arr = [12, 19, 28, 13, 14, 345];
    let result = [];

    for (let elem of arr) {

        if (inRange(elem)) {

            result.push(elem)
        }
    }

    //console.log(result)
})();

(() => {

    function isFreindly(num1, num2) {
        let sum1 = getSum(getOwnDivisors(num1));
        let sum2 = getSum(getOwnDivisors(num2));

        if (sum1 == num2 && sum2 == num1) {
            return true;
        } else {
            return false;
        }
    }

    function getOwnDivisors(num) {
        // тут будет какой-то код
        let arr = [];
        for (let i = 1; i < num; i++) {
            if (num % i == 0) {
                arr.unshift(i)
            }
            else {
                continue;
            }
        }

        return arr;
    }

    function getSum(arr) {
        // тут будет какой-то код
        let sum = 0;
        for (let item of arr) {
            sum += item;
        }

        return sum;
    }

    // console.log(getSum(getOwnDivisors(284)), getSum(getOwnDivisors(220)))

    // console.log(isFreindly(220, 284))

})();


(() => {

    function getInt(arr1, arr2) {

        let result = [];

        for (let elem of arr1) {
            if (!arr2.includes(elem)) {
                result.push(elem)
            }
        }

        for (let elem of arr2) {
            if (!arr1.includes(elem)) {
                result.push(elem)
            }
        }

        console.log(result)
        return result;

    }

    // console.log(getInt([1, 2, 3], [2, 3, 4, 5]));

})();

(() => {
    function getGreatestCommonDivisor(num1, num2) {

        let result = getInt(getArrDivisors(num1), getArrDivisors(num2));

        return Math.max(...result);

    }

    function getArrDivisors(num) {
        let result = [];

        for (let i = 1; i < num; i++) {
            if (num % i == 0) {
                result.push(i)
            }
            else {
                continue
            }

        }

        return result;
    }

    function getInt(arr1, arr2) {

        let result = [];

        for (let elem of arr1) {
            if (arr2.includes(elem)) {
                result.push(elem)
            }
        }

        console.log(result)
        return result;

    }

    // console.log(getArrDivisors(12))
    // console.log(getArrDivisors(18))
    // console.log(getArrDivisors(18), getArrDivisors(12))


    // console.log(getGreatestCommonDivisor(12, 18))
})();

(() => {

    function randoms(arr, length) {
        return first(shaffle(arr), length)
    }


    function first(arr, length) {
        return arr.slice(0, length)
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function shaffle(arr) {
        let result = [];

        while (arr.length > 0) {

            let num = getRandomInt(0, arr.length - 1)

            let elem = arr.splice(num, 1)

            result.push(elem)

        }

        return result


    }



    //console.log(randoms([1, 2, 3, 4, 5], 3));

})();

(() => {

    function isLucky(num) {

        let str = normalise(num);
        let str1 = 0;
        let str2 = 0;

        for (let i = 0; i <= 2; i++) {
            str1 += Number(str[i]);
        }

        for (let i = 3; i <= 5; i++) {
            str2 += Number(str[i]);
        }

        return str1 === str2;
    }

    function getLuckyTickets() {
        let result = [];

        for (let i = 1001; i <= 999999; i++) {
            if (isLucky(i)) {
                result.push(normalise(i));
            }

        }
        return result;

    }

    function normalise(num) {

        let str = String(num);

        if (str.length == 5) {
            str = "0" + str;
        }
        if (str.length == 4) {
            str = '00' + str;
        }

        return str;
    }

    //console.log(getLuckyTickets())
})();


(() => {
    function test() {
        let num = 5;

        return function () {

            if (num <= 0) {
                alert('Числа закончились')
            }
            else {
                alert(num);
            }

            num--
        }


    }

    let func = test()

})();

(() => {
    function each(arr, callback) {

        let result = [];
        let i = 0;

        for (let elem of arr) {
            result.push(callback(elem, i))
            i++;
        }

        //console.log(result)
        return result;
    }

    function getElem(num, index) {
        return num * index;

    }

    each([2, 3, 3, 4, 1], getElem);

})();

(() => {
    function each(arr, callback) {

        let result = [];

        for (let elem of arr) {

            if (callback(elem)) {
                result.push(elem)
            }
            else {
                continue;
            }
        }

        //console.log(result)
        return result;
    }

    function filter(num) {

        if (num >= 0) {
            return true;
        }
        else {
            false;
        }
    }

    let arr = [-2, 3, -3, 4, -1];

    let filterElem = each(arr, filter);

    let div = document.querySelector('div');

    //div.textContent = filterElem;

})();

(() => {

    function every(arr, callback) {

        for (let elem of arr) {
            if (callback(elem)) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    function filter(num) {

        if (num > 0) {
            return true;
        }
        else {
            false;
        }
    }

    // let arr = [2, 3, 3, 4, 1];

    // let result = every(arr, filter);

    // let div = document.querySelector('div');

    // div.textContent = result;

})();

(() => {

    let arr = [1, 2, 3, 4, 5];
    let div = document.querySelector('div');

    function every(arr) {
        let sum = arr.shift();

        if (arr.length != 0) {
            sum += every(arr);
        }
        return sum;
    }

    //div.textContent = every(arr);


})();

(() => {

    let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
    let div = document.querySelector('div');
    let result = [];

    function every(arr) {
        for (elem of arr) {
            if (typeof elem != Object) {
                result.push(elem);
            }
            else {
                result.push(every(elem))
            }


        }
        return result;
    }


    //div.textContent = every(arr);


})();

(() => {

    let arr = [1, -5, 7, 8, 3, 4, 5, 6, 7];
    let div = document.querySelector('div');
    let result = arr.some(elem => elem < 0);


    //div.textContent = result;

})();

(() => {

    // let body = document.querySelector('body')


    // let div = document.createElement('div');

    // document.body.append(div);

    let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

    let [name, surname, department, position, salary] = arr;

    div = document.querySelector('div');
    //div.textContent = name;

})();

(() => {
    // let body = document.querySelector('body');
    // let div = document.createElement('div');
    // body.append(div);

    function addZero(num) {
        if (num > 0 || num < 9) {
            return "0" + num;
        }
    }

    let date = new Date();
    //console.log(typeof date.getMonth())
    //div.textContent = `${addZero(date.getDate())}` + ' ' + `${addZero(date.getMonth() + 1)}` + ' ' + `${date.getFullYear()}`

})();

(() => {

    // let div = document.createElement('div');

    // document.body.append(div);

    let str = '2022-01-02';

    let date = str.split('-').reverse().join('-');

    // div.textContent = date;


})();

(() => {

    // let div = document.createElement('div');
    // document.body.append(div);

    // let date = new Date(1965, 9, 18);

    // console.log(date.getDay(), date.getDate(), date.getMonth(), date.getFullYear())

    // let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    // console.log(days[date.getDay()])

    // div.textContent = days[date.getDay()];

    let now = new Date();
    let date = new Date(now.getFullYear(), 2, 8); // восьмое марта

    let diff = date - now;

    //console.log(diff / (1000 * 60 * 60 * 24))


})();