# Async and await

## topics covered
```
1. what is async
2. what is  await.
3. How it work behind the scene
4. Example of using async / await.
5. Error handling
6. Interviews
7. Asunc await vs promise .then and .catch
```
# Basic questions
```
  1. What is async await. 

  it is a keyword used with functions diffrent then normal functions. It's a asynchronous function.
  await is also a keyword used inside async function to handle promises which is given by fetch call inside it.

 async and await combo is used to handle promises.
 await is a keyword that can only be used inside an async function.

  explain multiple promise handling like which take diffrent times. 

  async await vs promise then/catch

  async await is a synthetic sugar (syntaxical sugar) over then and catch. 
  behind the scene js is using its own .then() and  .catch() methods of api handling

  what is better
  both are better and async is a new way of writing code.




```

```
Async function call

 async function getData() {
 const data = await fetch('https://dummyjson.com/products/search?q=phone')
 const json =  data;
console.log(json)
  return 'json';
 }

 const data = getData()
 console.log(data)

 {

  what is async :

  this async function will always return a promise.
  either we return promise or if dont return promise instead we return  any value string, int then this function will
  automatically wrap the value in a promise and return the promise.
  if the return value is already a promise then it will not wrap inside another promise.
 

  returning a promise

```

```
{
  // normal older way of promise handling

  const p = new Promise((res, rej) => {
    setTimeout(() => {
      res("promise ressolved p1 -> 5s ");
    }, 5000);
  });

  const p1 = new Promise((res, rej) => {
    setTimeout(() => {
      res("promise ressolved p2 -> 10s");
    }, 10000);
  });

   function getData(){
       // js engine will not wait for promise to ressolve here. It will print first the NJ then the promise will printed
       p.then(res => console.log(res));
       console.log("NJ")
   }

   getData()


```

```
{
       // how does we handle promises before

     const p = new Promise((res,rej)=>{
         res("Promise value after ressolved")
     })

     function getData(){
         p.then(res => console.log(res))
     }
     getData()

     // now how we handle promises after aysnc await ?

     async function handlePromice() {
        const val = await p;
        console.log(val)
     }

     handlePromice()

     // console.log(val)

 }


  // async amd await way of promise handling
  // in async await the NJ will wait for the async function to complete it data loading first then it will called

  async function handlePromice() {
    console.log("this will printed before the promise ressolve");
    const val = await p;
    console.log("this will printed after the promise ressolve : val 1");
    console.log(val);

    // here in case of val2 and val both will ressolve at the same time.
    // and case of 2 promises there aync function will wait for the longer time promise and all will be print together,
    console.log("this will printed before the promise ressolve");
    const val2 = await p1;
    console.log("this will printed after the promise ressolve : val 2");
    console.log(val2);
    // return data
  }

  handlePromice();
}

/**
 * In case of if the time of first promise is low (5s) then second (10s) promise it will load synchromiously first p1 then p2.
 */

```

```
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
```
