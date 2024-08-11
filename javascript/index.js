// ~~~~Length~~~~~~
function length_Calculate(str) {
  //console.log("original sting is: " , str);
  //console.log("length of sting is :" , str.length);

}
length_Calculate("one two");
//console.log("one two".length);  //output 7

function getLength(str) {
    // console.log("Original String:", str);
    // console.log("Length:", str.length);
 }
getLength("Hello World");           // output: 11


// -------indexOf------
function findIndexOf(str, target) {
  //console.log("Original String:", str);
  //console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");

//++console.log("hello world".indexOf("world"));

function index_Of (str ) {
  // console.log("your string is:" , str);
  // console.log("index string is:",str.lastIndexOf(str));
  
}
index_Of("hello world worlds")

//----- slice------
function getSlice(str, start, end) {
  //console.log("Original String:", str);
  //console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);

//++console.log("namaste bhai".slice(2,7));    //output : maste
function getSliceOf(str , start, end) {
  //console.log(" slice is:" ,str.slice(start,end));
  
}
getSliceOf("namaste bhai ko", 2 ,9);

//------replace------
function replaceString(str, target, replacement) {
  // console.log("Original String:", str);
  // console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

//++console.log("bhai mujhe nhi pat kya hua tha".replace("mujhe nhi" ,""));


// -----split--------
function splitString(str, separator) {
  //console.log("Original String:", str);
  //console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");
/*this line slpit every sentencs or even 
gap before double coma */
//++console.log("agr toh hona hi tha".split(" "));


// ------trim-------
function trimString(str) {
  // console.log("Original String:", str);
  // console.log("After trim:", str.trim());
}
trimString(" Hello World ");      //output:Hello World


// ------toUpperCase-------
function toUpper(str) {
  //console.log("Original String:", str);
  //console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("HeLLo WoRLd");                //output: HELLO WORLD

//++console.log("kia hAAL hai".toUpperCase());


// --------toLowerCase---------
function toLower(str) {
  // console.log("Original String:", str);
  // console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");

