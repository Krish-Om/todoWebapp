// async function getTaskFromDatabase() {
//     let raw  = await fetch(`http://localhost:8080/allTask`);
//     let data = await raw.json();
//     return data;
// }
// setTimeout(()=>{
//     const data = getTaskFromDatabase();

//     console.log( data);
// },2000);
const endpoint = 'http://localhost:8080/allTask';
fetch(endpoint,{
    method:"GET",
})
.then(responseBody =>
    {
        console.log(responseBody);
        return responseBody.json
    })
.then((data) => {
    console.log('Data from db',data.toString)})

.catch(error => {
console.error('fetch error: ',error);
})