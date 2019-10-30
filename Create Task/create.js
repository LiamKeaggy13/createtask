alert("Welcome to our app, enjoy 50$ to start you off!");
var bal = 50
var arr = []
function withdraw(){
  var take = prompt("How much do you wish to withdraw?");
  if(take <= bal){
    var newbal = (bal - take);
    $("#balance").text("Total Balance: $" + ("" + newbal));
    bal = newbal

    var i = 1;
    var log = "-" + ("" + take);
    log = document.createElement('li');
    var log = "-" + ("" + take) + "$, ";
    // document.getElementById('loglist').appendChild(log);
    $("#loglist").append(log);
    i++;
  }
  else{
    alert("Oops! You don't have enough money in your piggy to withdraw that much.");
  }
  if(bal > 1000){
    $("#balance").text("Total Balance: $" + ("" + newbal) + " Congrats! You're Well off");
  }
  else if(bal > 250&&bal < 1000){
    $("#balance").text("Total Balance: $" + ("" + newbal) + " You're doing pretty good, not awesome though.");
  }
  else if(bal > 50&&bal < 250){
    $("#balance").text("Total Balance: $" + ("" + newbal) + " Might wanna get a job");
  }
  else{
    $("#balance").text("Total Balance: $" + ("" + newbal) + " EEK");
  }
// function rate(){
//   if(bal > 1000){
//     $("#balance").text("Total Balance: $" + ("" + newbal) + " Congrats! You're Well off");
//   }
//   else if(bal > 250&&bal < 1000){
//     $("#balance").text("Total Balance: $" + ("" + newbal) + " You're doing pretty good, not awesome though.");
//   }
//   else if(bal > 50&&bal < 250){
//     $("#balance").text("Total Balance: $" + ("" + newbal) + " Might wanna get a job");
//   }
//   else{
//     $("#balance").text("Total Balance: $" + ("" + newbal) + " EEK");
//   }
// }

}
function deposit(){
  var depo = parseInt(prompt("How much would you like to deposit?"));
  var newbal = bal + depo;
  $("#balance").text("Total Balance: $" + ("" + newbal));
  bal = newbal

  var i = 1;
  var log = "+" + ("" + depo);
  log = document.createElement('li');
  var log = "+" + ("" + depo) + "$,   ";
  $("#loglist").append(log);
  i++;

  if(bal > 1000){
    $("#balance").text("Total Balance: $" + ("" + newbal) + " Congrats! You're Well off");
  }
  else if(bal > 250&&bal < 1000){
    $("#balance").text("Total Balance: $" + ("" + newbal) + " You're doing pretty good, not awesome though.");
  }
  else if(bal > 50&&bal < 250){
    $("#balance").text("Total Balance: $" + ("" + newbal) + " Might wanna get a job");
  }
  else{
    $("#balance").text("Total Balance: $" + ("" + newbal) + " EEK");
  }
  // rate(bal);
}
