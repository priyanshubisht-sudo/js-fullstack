// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Priyanshu",
            lastname: "Bisht"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {4: "c", 3: "d"}

// console.log(Object.assign({}, obj1, obj2)); // {} is the target and objects are source
const obj3 = {...obj1, ...obj2}
// console.log(obj3); // simpler way to add objects

const users = {
    email: "some1@gmail.com",
    name: "Priyanshu"
}
{
    email: "some@gmail.com";
    name: "Priyansh";
}
// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Object de-structuring

const course = {
    courseName: "JS Course",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: CI} = course;

console.log(CI)

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
