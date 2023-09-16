
var deceased_persons: string[] = ["ALbert", "Nusrat", "Newton"];

for (let i = 0; i < deceased_persons.length; i++) {
    //print a message to each person, inviting them to dinner.
    console.log(`Hello ${deceased_persons[i]}, you are invited to dinner.`);
}

console.log(`\n\nUnfortunately, ${deceased_persons[0]} cannot make it to dinner.`);
deceased_persons.splice(0, 1);

console.log("\n\nRemaining guests are: ")
for (let i = 0; i < deceased_persons.length; i++) {
    //print a message to each person, inviting them to dinner.
    console.log(`Hello ${deceased_persons[i]}, you are invited to dinner.`);
}
