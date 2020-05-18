function myPromise() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Promise after 5");
        },2000);
    });
}

const arrowFunction =  () => {
    return myPromise();
}

    
