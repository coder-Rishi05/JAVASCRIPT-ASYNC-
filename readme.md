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
