/* Требования к задаче:
Реализовать метод, который будет рисовать в консоли треугольник как показано в примере.
 */

function printTriangle(n) { //ширина основания
    let space = n - 1;
    let str = '';

    for (let i = 0; i < n; i++) {
        let currnetIterSpace = space;

        while (currnetIterSpace) {
            str += ' ';
            currnetIterSpace--;
        }

        for (let j = 0; j < n - space; j++) {
            str += '# ';
        }

        space--;
        str += '\n';
    }
    console.log(str);
}

printTriangle(5);

/* Требование к задаче:
Создать массив;
Заполнить массив рандомными целыми числами(например от - 100 до 100);
Заменить все отрицательные числа нулем;
После каждого элемента с четным индексом, который равен нулю, вставить элемент равный - 1.
 */

const arr = [];

function fillArray(lengthArr) {

    const getRandomNumber = (min, max) => {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    }

    for (let i = 0; i < lengthArr; i++) {
        arr[i] = getRandomNumber(-100, 100);
    }
}

fillArray(5);
console.log(arr);

function replaceFromArray(arr, replacement) {
    arr.forEach((item, index) => {
        if (item < 0) {
            arr[index] = replacement;
        }
    });
}

replaceFromArray(arr, 0);
console.log(arr);

function addToArray(arr, count) {

    const copyArr = arr.slice();

    for (let i = 0, j = 0; i < copyArr.length; i++, j++) {
        if (i % 2 === 0 && !copyArr[i]) {
            arr.splice(++j, 0, count);
        }
    }
}

addToArray(arr, -1);
console.log(arr);

var model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
]

/*Дана коллекция представляющая собой массив записей в блоге, 
необходимо реализовать метод группировки элементов по пользователям*/

function groupCollection(collection) {

    function User(id, name) {
        this.id = id;
        this.name = name;
        this.posts = [];
    }

    User.prototype.addNewPost = function (post) {
        this.posts.push(post);
    }

    const result = [];

    for (let { id, title, text, user: { id: userId, name } } of collection) {
        const searchResult = result.find((({ id }) => id === userId));

        if (searchResult) {
            searchResult.addNewPost({ id, title, text });
        } else {
            const user = new User(userId, name);
            user.addNewPost({ id, title, text });
            result.push(user);
        }
    }

    return result;
}

const result = groupCollection(model);
console.log(result);
