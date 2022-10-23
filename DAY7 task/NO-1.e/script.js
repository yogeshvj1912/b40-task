//e.Print the country which uses US Dollars as currency.

    var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
   for (i=0;i<result.length;i++){
    if(result[i].currencies[0].code==="USD")
    {
        console.log("name:",result[i].name,"==>",result[i].currencies[0].code)
    }
   } 

}