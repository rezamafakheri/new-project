function User(name, email) {
    this.name = name;
    this.email = email;
}

User.prototype.login = function() {
    console.log(this.email, "just logged in");   
}
User.prototype.logout = function() {
    console.log(this.name, "just logged out");   
}

function Admin(...args) {
    User.apply(this, args);
    this.role = "super admin";
}

Admin.prototype = Object.create(User.prototype);

var userOne = new User("reza", "rezamafakheriii@gmail.com");
var userTwo = new User("amin", "amirahmadi@gmail.com");
var admin = new Admin("mohammad", "mohammad@gmial.com");

admin.login();