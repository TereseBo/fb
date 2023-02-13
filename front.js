
async function getIt(adress="/"){
    let res=fetch("http://localhost:3000/")
    const data = await res.json();
    console.log(data);
    if (res.ok) {
        console.log("GET successful");
        return data;
    } else {
        console.log("GET failed");
        return null;
    }

}
document.addEventListener("DOMContentLoaded",function(){
    getIt()

})