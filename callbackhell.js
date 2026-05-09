setTimeout(()=>{
    console.log("hello");
},9000);

//callback hell

function getdata(dataId,getNextdata){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextdata){
            getNextdata();
        }
    },2000);
}
getdata(1,()=>{  // first print 1 then 2 then 3
    console.log("getting next data");
    getdata(2,()=>{ //nested callback function
        console.log("getting next data");  //this callback is difficult to understand
        getdata(3);
    });
});

/// to solve this difficulty we use promise