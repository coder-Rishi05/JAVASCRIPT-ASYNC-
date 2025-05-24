const p = new Promise((res,req)=>{
     res("primise resolved value")
 })

 async function getData() {
     // return 'json';
     return p;
 }

 const data = getData()
 console.log(data)
 /**
  * output:
  *
 * Promise {<fulfilled>: 'json'}
 * [[Prototype]]: Promise
 * [[PromiseState]]: "fulfilled"
 * [[PromiseResult]]: "json"
 *
 */
// to get the output of data
// data.then(res=>console.log(res)); // output => json

}

 

// const p1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Promise of p1 ressolves");
//   }, 20000);
// });

// const p2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Promise ressolved of p2");
//   }, 30000);
// });

// const handlePromise = async () => {
//   console.log("hello World : ");

//   const data = await p1;
//   console.log(data);

//   const data2 = await p2;
//   console.log(data2);
// };

// handlePromise();

// // in case of first Promise taking more time than second Promice wcwn in that situation both function will wait for till higher time promise not completed. the low time promise was completed in 5s but still wait for 10s to other promise.

// // but if low time called first it will be invoked first.

// // inside callstack

// /**
//  * this is in case of when p1 -> 5s and p2 -> 10s

//  * first the handlePromise function will come inside the callstack.
//  * log hello world to the console.
//  * as it see await => the handlePromise function will be suspend there for that time
//  * now it will wait till p1 is ressolved once p1 is ressoved then it will move ahead
//  * Then after 5s the handlePromise function will again come in callstack
//  * and start executing where it was suspended then print promise 1 ressolved
//  *
//  * then go to p2 and check is it ressolved or not
//  * if not then handlePromise() will again susprended it will not block callstack
//  * when p2 ressolved after 10s the handlePromise() will again come to callstack and then execure the Promise 2 ressolved.
//  *
//  * Js engine is not waiting but handle function suspend the execution and continue when promise ressolved.
//  *
//  *
//  */

// /*  In case of p1 -> 10s and p2 -> 5s
//  *
//     hello  will print
//     it will go to p1 which will take 10s so the function will suspend and wait for 10 s
//     once the 10s completed it will come back to call stack and print p1
//  * when it come back it see p2 is also ressolved then it will also print p2
//  * it looks like the programme is waiting but its not waiting. callstack cant be blocked.
//  *
//  *
//  */

// 1st way of error handling

// const handleFetch = async () => {
//   try {
//     const data = await fetch('https://api.github.com/users/hiteshchoudhary')
//     const json = await data.json()
//     console.log(json)
//   }
//   catch(err){
//     console.log(err)
//   }
// }

// handleFetch();

// 2nd way of writing error handling
const handleFetch = async () => {
  const data = await fetch("https://api.github.com/users/hiteshchoudhary");
  const json = await data.json();
  console.log(json);
};

handleFetch().catch((err) => console.log(err));

/*
In case of api calling the handleFestch function will be suspended till the fetch promise is ressolved.
after it ressolved then only the handleFetch function will come again in callback queue.



Fetch =>  fetch returns a response.

working of fetch :-

it is a promise when the promise ressolved it gives response.
the response body is a readable stream so we need to convert it to json first.
if i have to covert this readable strem to json then i will use .json() method.

ex- 
 const data = await fetch('https://api.github.com/users/hiteshchoudhary')
  const json_value = await data.json()

the json is again a promise and when this promise is ressolved then its give json value. 
so we need to use await on both fetch() and json(). 



other way to write fetch(). 

fetch()
.then(res => res.json)
.then(res => console.log(res));


so here it take 4ms to get the api so the handleFetch() function was suspended for that time and come again to call stack aftet 4mss.

error handling


we will write the api calling inside try block

 try {
    const data = await fetch('https://api.github.com/users/hiteshchoudhary')
    const json = await data.json()
    console.log(json)
  }
  catch(err){
    console.log(err)
  }

  so if the fetch failed on api calling then it will directly go to catch block and conlose the err. 
  it will not go to json and console line in try block. 

  so we can write in other way like 

  handleFetch().catch()

  because handleFetch() is a async function and an async function always return a promise.  

  hhandleFetch().catch(err => console.log(err));

 */


