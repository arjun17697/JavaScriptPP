const emailRegex = RegExp(
    "^[a-z][0-9a-z_+-]*\\.?[0-9a-z_+-]+@\\w+(\\.[a-z]{2,}){1,2}$"
);

function testEmail(email) {
    if (emailRegex.test(email)) return true;
    else throw "Given email is in wrong format";
}

// Email - UC3
try {
    console.log(testEmail("abc.xyz@bridgelabz.co"));
} catch (e) {
    console.error(e);
}

// Email - UC4
try {
    console.log(testEmail("abc.xyz@bridgelabz.co.in"));
} catch (e) {
    console.error(e);
}

//Email - UC5 - Passing all test cases for emails
console.log("\nEmail UC5 - checking all test cases for emails: ");
let validEmails = [
    "abc@yahoo.com",
    "abc-100@yahoo.com",
    "abc.100@yahoo.com",
    "abc111@abc.com",
    "abc-100@abc.net",
    "abc.100@abc.com.au",
    "abc@1.com",
    "abc@gmail.com.co",
    "abc+100@gmail.com",
];

validEmails.forEach((email) => {
    try {
        console.log(testEmail(email));
    } catch (e) {
        console.error(e);
    }
});

let invalidEmails = [
    "abc",
    "abc@.com.my",
    "abc123@gmail.a",
    "abc123@.com",
    "abc123@.com.com",
    ".abc@abc.com",
    "abc()*@gmail.com",
    "abc@%*.com",
    "abc..2002@gmail.com",
    "abc.@gmail.com",
    "abc@abc@gmail.com",
    "abc@gmail.com.1a",
    "abc@gmail.com.aa.au",
];

invalidEmails.forEach((email) => {
    try {
        console.log(testEmail(email));
    } catch (e) {
        console.error(e);
    }
});