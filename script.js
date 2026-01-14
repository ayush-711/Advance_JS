let user = {
    name: 'Ayush',
    age: 21,
    email: 'ayush@gmail.com',
    location: 'HAHAHAHA',
    blogs: ['hello friends', 'chai peelo'],
    login() {
        console.log("the user logged in!")
    },
    logout() {
        console.log("the user logged out!")
    } ,
    logBlogs() {
        console.log("the user has writte the following blogs :")
        this.blogs.forEach(blog => { console.log(blog); });
        
    }

};

// console.log(user);
// console.log(user.name);
// console.log(user.blogs[1]);
// user.name = 'okayush';
// console.log(user.name);

// Methods on Objects

user.login();
user.logout();

user.logBlogs();






