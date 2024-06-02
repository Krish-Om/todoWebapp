let obj;
// async function getTaskFromDatabase() {
//     let raw  = await fetch(`http://localhost:8080/allTask`);
//     let data = await raw.json();
//     // console.log(data);
//     data.forEach(element => {
//         obj.push(element);
//     });
//     // obj = data;
// }
// // getTaskFromDatabase();
// console.log(obj);
// setTimeout(()=>{
//     const data = getTaskFromDatabase();

//     console.log( data);
// },2000);
const endpoint = 'http://localhost:8080/allTask';


fetch(endpoint,{
    method:"GET",
})
.then(responseBody =>
    { responseBody.json;})
.then((data) => {
    console.log('Data from db',data)})

.catch(error => {
console.error('fetch error: ',error);
})