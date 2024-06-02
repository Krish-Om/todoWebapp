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

// let promise = fetch(endpoint);
// console.log(promise);


const getTaskFromDatabase = async ()=>{
    // console.log("getting data");
    let response = await fetch(endpoint);
    let data = await response.json();
    // obj = [...data];
    console.log(data);
    console.log(data[0].taskDetail);
}
getTaskFromDatabase();







// console.log(obj);
// fetch(endpoint,{
//     method:"GET",
// })
// .then(responseBody =>
//     { responseBody.json;})
// .then((data) => {
//     console.log('Data from db',data)})

// .catch(error => {
// console.error('fetch error: ',error);
// })