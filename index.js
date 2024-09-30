// index.js

function introduction(name) {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Example calls to test the functions
console.log(introduction("Abdisalan")); 
console.log(introductionWithLanguage("Abdisalan", "Python")); 
console.log(introductionWithLanguageOptional("Abdisalan", "C++")); 
console.log(introductionWithLanguageOptional("Abdisalan")); 
