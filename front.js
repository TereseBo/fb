
async function getIt(adress="/"){
    let res=fetch("/")
    //const data = await res.json();
    //console.log(data);
    if (res.ok) {
        console.log("GET successful");
        return res;
    } else {
        console.log("GET failed");
        return null;
    }

}
document.addEventListener("DOMContentLoaded",function(){
    getIt()

})