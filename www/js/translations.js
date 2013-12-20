var thefile;

function parseTranslationXMLToLocalStorage(){
    //alert("yo");
    //var lang = "ge";
    //alert(lang);
   
     //VOOR TOESTELLEN DIE TAAL ONDERSTEUNEN
     //die winmates doen mottig... iphone en htc ok!
    //var lang = navigator.language.split("-")[0];
    //var lang = "fr";
    //toesteltaal
    var lang = localStorage.getItem("lang");
    //alert(lang);
    var request = new XMLHttpRequest();
    //request.onreadystatechange = state_ChangeTrans;
    //state_ChangeTrans()
    //alert("yo2");
    request.open("GET", "translations.xml");
    //request.open("GET", "http://www.genius.be/public/scanner/translations.xml");
     //request.open("GET", "http://www.genius.be/public/scanner/translations.xml",false);
     //copy uit asmx requests
    // request.send();
    //404 err op webapp
    //alert("yo3");
    request.onreadystatechange = function()
    {
   // alert("yo4");
     //alert("rdystate:"+request.readyState);
     //op winmate status=0 (via http://)
     //op FF status=200 nu ook winmate=200
     //alert("status:"+request.status);
     //readystate=4 op winmate
     //readystate=2 op FF
      //alert("readystate:"+request.readyState);
     
       // if(request.readyState == 4 && (request.status == 200 || request.status ==0)){
         if(request.readyState == 4 && request.status == 200){
            //console.log(request. );
	    // alle txt zit in responsetxt
	    
	    //alert("resptxt:"+request.responseText);
	    if (request.responseText != "")
	    {
		alert("translations found");
	    }
	    else
	    {
		alert("no translation found");
	    }
	    
	    //resptxt=empty op winmate
	    //alert("responseXML:"+request.responseXML);
	    //respxml null op winmate
            $(request.responseText).find("TRANSLATION").each(function(){
                                                             
                                                             //alert("found Translation");
                                                             
                                                             var transName = $(this).attr("name");
                                                             
                                                             //alert(transName);
                                                             
                                                             $(this).find("LANGUAGE").each(function(){
                                                                                           //alert("found Language");
                                                                                           
                                                                                           if($(this).attr("value") == lang){
                                                                                           var storName = lang + "_";
											   
                                                                                           storName += transName;
											   //alert(storName + "translated:" + $(this).text());
											   //alert("stored " + storName);
                                                                                           //alert("content" + storName + " " + $(this).text());
                                                                                           localStorage.setItem(storName,$(this).text());
                                                                                           
                                                                                           }
                                                                                           
                                                                                           });
                                                             
                                                             });
							    // alert("done");
            
        }
        
        
    }
    request.send();
    
// BOVENSTAANDE METHODE WERKT HELEMAAL!

}


//event for state of connection
function state_ChangeTrans()
{
    
    // if xmlhttp shows "loaded"
    //$('body').append('<div id="progress">Loading...</div>'); 
    
    if (xmlhttp.readyState==4)
        
    {
        
        // if "OK"
        
        if (xmlhttp.status==200)
            
        {
            //connection is ok
            //alert("connection ok!");
            

        }
        
        else
            
        {
            //$('#progress').remove();
            //testje
            //alert("gTicket service down!");
		alert(getTranslation("service down!"));
            
        }
        
    }
    
}
    
function getTranslation(string){
    
    //string = string.toLowerCase();
   // alert("intxt "+ string);
    
    //toesteltaal
    var lang = localStorage.getItem("lang");
    //alert(lang);
    //if(lang != "en")
	//nl fr de en
	//indien nl,fr,of de gebruik translator, bij en en andere default en gebruiken!
	//if(lang == "nl" || lang == "fr" || lang == "de")
	if(lang == "nl" || lang == "fr" || lang == "ge")
	{
		//alert("translated=" + localStorage.getItem(lang + "_" + string));
		if (localStorage.getItem(lang + "_" + string) != null)
		{
			return localStorage.getItem(lang + "_" + string);
		}
		else
		{
			//originele tag terugsturen!
			//alert("notfound>"+string);
			return string;
		}
    
	}
	else
	{
        
//        var temp = string.split(' ');
        
//        if(temp.length <= 1){
		//alert(string);
//            string = string.charAt(0).toUpperCase() + string.slice(1);
//            return string;
            
//        }else{
            
//            var tempa = "";
     
 //           for(var i=0; i<temp.length; i++){
                        
 //           try{
        
            //tempa += temp[i].charAt(0).toUpperCase();
 //            tempa += temp[i].charAt(0).toUpperCase();
//	    tempa += temp[i].slice(1);
//            tempa += " ";
                
           // }
	   // catch(e){
            
           //     console.log("Uppercasing error");
                
          //  }
            
        //}
        //alert("tempa "+ tempa);
       // return tempa;
       // }
       
       //originele tag terugsturen!
			return string;
        
    }
    
}