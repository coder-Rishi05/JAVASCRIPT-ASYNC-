function voting() {
  const age = Number(prompt("Enter your Age : "));

  if (age >= 18) console.log("You can vote.");
  else console.log("Age is not valid.");
}

function discount() {
  // brute force : a basic solution of any problem. A coding approach which is vary basic

  let amt = Number(prompt("Enter your Amount"));

  if (amt <= 5000 && amt > 0) {
    console.log("you have 0% discount.");
  } else if (amt >= 5001 && amt <= 7000) {
    console.log("you have 5% discount.", Math.floor((5 * amt) / 100));
  } else if (amt >= 7001 && amt <= 9000) {
    console.log("you have 10% discount.", amt - Math.floor((10 * amt) / 100));
  } else if (amt >= 9000) {
    console.log("you have 20% discount.", amt - Math.floor((20 * amt) / 100));
  } else if (amt <= 0) {
    console.log("enter right amt.");
  }
  return amt;
}
function discount_2() {
  // brute force : a basic solution of any problem. A coding approach which is vary basic

  let amt = Number(prompt("Enter your Amount"));
  let dis = 0;
  if (amt <= 5000 && amt > 0) {
    dis = 0;
  } else if (amt >= 5001 && amt <= 7000) {
    dis = 5;
  } else if (amt >= 7001 && amt <= 9000) {
    dis = 10;
  } else if (amt >= 9000) {
    dis = 20;
  } else if (amt <= 0) {
    console.log("enter right amt.");
  }

  console.log(
    `you have ${dis}% discount.`,
    amt - Math.floor((dis * amt) / 100)
  );
  return amt;
}

function unit() {
  let unit = parseInt(prompt("Enter electricity unit : "));
  let amt = 0;
  if (unit > 400) {
    amt = (unit - 400) * 13;
    unit = 400;
  }
  if (unit > 200 && unit <= 400) {
    amt += (unit - 200) * 8;
    unit = 200;
  }
  if (unit > 100 && unit <= 200) {
    amt += (unit - 100) * 6;
    unit = 100;
  }
  amt += unit * 4;
  console.log(amt)
}

function inr(){
  let amt = 4823;
  if (amt >= 500) {
    console.log(Math.floor(amt/500))
    amt = amt % 500;
  }
  
  if (amt >= 200) {
    console.log(Math.floor(amt/200))
    amt = amt % 200;
  }
  
  if (amt >= 100) {
    console.log(Math.floor(amt/100))
    amt = amt % 100;
  }
  
  if (amt >= 50) {
    console.log(Math.floor(amt/50))
    amt = amt % 50;
  }
  
  if (amt >= 20) {
    console.log(Math.floor(amt/20))
    amt = amt % 20;
  }
  
  if (amt >= 10) {
    console.log(Math.floor(amt/10))
    amt = amt % 10;
  }
  if (amt >= 5) {
    console.log(Math.floor(amt/5))
    amt = amt % 5;
  }
  if (amt >= 2) {
    console.log(Math.floor(amt/2))
    amt = amt % 2;
  }
  if (amt === 1) {
    console.log(amt)
   
  }
  
}