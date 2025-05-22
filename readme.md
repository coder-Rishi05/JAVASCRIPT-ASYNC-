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
