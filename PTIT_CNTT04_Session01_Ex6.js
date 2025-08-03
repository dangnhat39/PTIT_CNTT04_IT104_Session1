function createUser(name, age = 18, role = "user") {
    return {
        name: name,
        age: age,
        role: role
    };
}

console.log(createUser("Allice", 25, "admin"));

console.log(createUser("Bob", 30));

console.log(creat("Charlie"));