//Trying to make a window.prompt method for a realife example to get a short string response from the user before they access a page or move to another page
var customerName = prompt("Please enter your name", "<name goes here>");
if (customerName!= null) {
    document.getElementById("welcome").innerHTML =
    "Hello " + customerName + "! How are you today?";
}

//Getting confirmation from the user using as an Example tried keep simple
//Using the Example a prompt would display "Are you sure you want to send a payment?" click Cancel or Ok
var r = confirm("Are you sure you want to send a payment?");
//using "window.confirm()"and "confirm" results in the same function
if (r == true) {
    x = "Payment sent!";
} else {
    x = "Payment cancelled!";
}
//remember call back keep forgetting
//if else or false the text is then displayed in the alert function widow.alert?
alert (x);

//What would look like in html
//<!DOCTYPE html>
//<html>
//<head>
//<script> 
//var customerName = prompt("Please enter your name", "");
//if (customerName!= null) {
    //document.getElementById("welcome").innerHTML =
    //"Hello " + customerName + "! How are you today?";
//}
//</script>
//</head>
//<body>
//<div id="welcome">My First JavaScript code.</div>
//</body>
//</html>

//Another to do it adding input istead of div
//<!DOCTYPE html>
//<html>
//<head>
//<script> 
//var customerName = prompt("Please enter your name", "");
//if (customerName!= null) {
//    document.getElementById("username").value = customerName;
//}
//</script>
//</head>
//<body>
                            //Using the "/>" terminator can be used when you don't need to contain text with closing or opening a tag. What HTML5 standard call it not sure why?
//<input type="text" id="username" />
//</body>
//</html>

//Day 20 Ex. Input file (trying to follow had to copy examples why is node so difficult? Node will make one ? Ones own sanity. 
//Staying postive can follow but can be challenging)

//Open a file method to open a file in asynchronous mode
fs.open(path, flags[, mode], callback)

var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");     
});


//Writing a file metods to write into a file
fs.writeFile(filename, data[, options], callback)

var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy Learning!', function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});

//Reading a file methods to read from a file
fs.read(fd, buffer, offset, length, position, callback)

var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("Going to read the file");
   
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + " bytes read");
      
      // Print only read bytes to avoid junk.
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
   });
});

//My Example trying to make as simple as possible Possible to write Data to js? don't think so but not sure
var f = "sometextfile.txt";

writeTextFile(f, "Spork")
writeTextFile(f, "Cheese monkey")
writeTextFile(f, "Pepper")

function writeTextFile(afilename, output)
{
  var txtFile =new File(afilename);
  txtFile.writeln(output);
  txtFile.close();
}


//All last 3examples make sure to run $ node main.js or whatever your js file name is

//To Morgan if your reading this just want to let you know your awesome & bringing us to a breaking point is always a pleasure 
//going to ball in corner and ask myself Why? lol if weren't struggling before as students now we definately are lol 
//Thanku for such a challenge as a student/young grasshopper I'm wanting to raise the white flag but never give up why Node? why? lol joken
//Scary because we haven't even gotten to deep into yet
