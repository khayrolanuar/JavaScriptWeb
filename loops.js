
//for
for (let i = 0;i <= 10; i++){
    console.log(i);
}

const users = ['Khai', 'Anuar', 'Kai'];


//for...of
for(const user of users){
    console.log(user);
}

const loggedInUser = {
    name: 'Max',
    age: 26,
    isAdmin: true
};



//for...in
for (const propertyName in loggedInUser){
    console.log(propertyName);
    console.log(loggedInUser[propertyName]) //loggedInUser.name
}


//while
let isFinished = false;
while (!isFinished){
    isFinished = confirm('Do you want to quit?');
}

console.log('Done!');