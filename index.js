//QUESTION 3

//Assigning the different class groups to variables
let generalSubjects = 'English, Mathemtics';
let Science = 'Physics, Chemistry, Biology, Technical Drawing';
let socialScience = 'Accounting, Commerce, Marketing, Geography';
let Arts = 'Government, Economics, Literature, History';


//Selecting Bolatito's class group
let classGroup = Arts;


//Subjects in the art department
if (classGroup = Arts) {
    console.log("You are in the Arts Department. Your subjects are " + Arts + ".")
//Subjects in the Science department
} else if (classGroup = Science) {
    console.log("You are in the Science Department. Your subjects are " + Science + ".")
//Subjects in the Social Science department
} else if (classGroup = socialScience) {
    console.log("You are in the Social Science Department. Your subjects are " + socialScience + ".")
//General Subjects
} else
    console.log("Please take the general subjects: " + generalSubjects + ".")



//QUESTION 5

function findPwr(number) {
  let pwr = Math.pow(2, Math.round(Math.log2(number)));
  if (Math.abs(number - pwr) > Math.abs(number - 2 * pwr)) {
    pwr *= 2;
  }
  return pwr;
}

let number = 48;
let pwr = findPwr(number);
console.log(`The number ${pwr} is the power of 2 nearest to ${number}.`);

number = 50;
pwr = findPwr(number);
console.log(`The number ${pwr} is the power of 2 nearest to ${number}.`);

