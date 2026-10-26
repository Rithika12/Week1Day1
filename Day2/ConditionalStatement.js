/* Assignment Requirements:
Create two functions : launchBrowser, runTests where,
a) launchBrowser need to take input as browserName (string) and do not return any
- use if-else (chrome or otherwise)
- Print the value*/

function launchBrowser(){
   let browserName='Chrome'
if(browserName=="Chrome"){
    console.log("It is a an Chrome browser");  
}
else{
    console.log("It is not an Chrome browser");
}

}
launchBrowser();

/*b) runTests need to take input as testType (string) and do not return any
- use switch case (smoke, sanity, regression, default (smoke))
- Print the values
Call that function from the javascript */

function runTests(){
let testType='Sanity'
switch(testType){
    case "Smoke":
     console.log("It is Smoke Testing");
     break;
    case "Sanity":
      console.log("It is Sanity Testing");
    break;
    case "Regression":
      console.log("It is Regression Testing");
     break;
    Default:
      console.log("It is Smoke Testing");
     
}
}
runTests();