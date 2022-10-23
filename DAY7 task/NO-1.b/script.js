//b.Get all the countries with a population of less than 2 lakhs using Filter function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    var Popu=result.filter((ele)=>ele.population<200000);
    console.log(Popu);
};
