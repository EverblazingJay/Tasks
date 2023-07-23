// Q1
let challenge = "30 Days Of Javascript";

//Q2
console.log(challenge);

//Q3
console.log(challenge.length);

//Q4
console.log(challenge.toUpperCase());

//Q5
console.log(challenge.toLowerCase());

//Q6
console.log(challenge.substring(0, 1));

//Q7
console.log(challenge.substring(3, 21));

//Q8
console.log(challenge.includes("script"));

//Q9
console.log(challenge.split());

//Q10
console.log(challenge.split(" "));

//Q11
let techCompanies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(techCompanies.split(","));

//Q12
console.log(challenge.replace("Javascript", "Python"));

//Q13
console.log(challenge.charAt(15));

//Q14
console.log(challenge.charAt(11));

//Q15
console.log(challenge.indexOf("a"));

//Q16
console.log(challenge.lastIndexOf("a"));

//Q17
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));

//Q18
console.log(sentence.lastIndexOf("because"));

//Q19
console.log(sentence.search("because"));

//Q20
console.log(challenge.trim(""));

//Q21
console.log(challenge.startsWith("30"));

//Q22
console.log(challenge.endsWith("Javascript"));

//Q23
let regExMatch = /a/gi;
console.log(challenge.match(regExMatch));

//Q24
let newString = "30 Days Of";
console.log(newString.concat(" Javascript"));

//Q25
console.log(challenge.repeat(2));
