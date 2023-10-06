// The call method is used to invoke a function with a specific "this" value 
// and a list of arguments (parameters).

const person = {
    fullName: function(location, rollNo) {
        return `${this.firstName} ${this.lastName} from ${location}, Roll No: ${rollNo}`;
    }
};

const person1 = {
    firstName: "Ashfaque",
    lastName: "Hossain"
};

const person2 = {
    firstName: "Abir",
    lastName: "Mamu"
};

console.log(person.fullName.call(person1, "Malibag", 3220));