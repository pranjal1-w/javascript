// let promise=new Promise((resolve,reject)=>{
//     console.log("iam promise");
//     resolve(123);  //resolve ya reject me se koi ek kaam karega
//     // state me fulfilled aayega
//     reject("some error");
//     //state me rejected aayega
// });

//async function
function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
    });
}

async function getweatherdata(){
    await api();   // ek kaam hone ke baad dusra kaam ho
    console.log("data mil gaya"); 
}

// function call
getweatherdata();