//a.Get all the countries from the Asia continent /region using the Filter function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
     console.log(result);
    //for(let i=0; i<result.length; i++){
      //  console.log(result[i].name);
    //}
    var result1=result.filter((ele)=>ele.region=="Asia");
    console.log(result1);
}