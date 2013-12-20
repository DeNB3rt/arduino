//variables
var xmlhttp;
var asmxWebService = "http://192.168.1.80";//"http://192.168.1.13:8090/Arduino.asmx";//"http://192.168.70.210/ReloadService.asmx";
//var asmxWebService = "http://192.168.1.13:8090/Arduino.asmx";

//http://192.168.1.80/pin4/0

//var stateled3 = "0";
//var stateled4 = "0";

var asyncsync = false;

//test
var testoutput = "";


//function to be caled
function CallTestWebService(pinnr, onoff)
{
	//alert("test");
	xmlhttp=new XMLHttpRequest();
	
	//xmlhttp.onreadystatechange = state_Change;
	//if (stateled3 == "0")
	//{
		//alert("switch0=>1");
	//	stateled3 = "1";
	//}
	//else
	//{
	//	stateled3 = "0";
	//}
	
	//alert("/pin"+pinnr+"/" + onoff);
	xmlhttp.open("GET", asmxWebService + "/pin"+pinnr+"/" + onoff, false);
	//xmlhttp.open("POST", asmxWebService + "/callPin?device_id=129", false);
	
	xmlhttp.send();
	
	parseXMLTestresponse(xmlhttp.responseXML);
	
   
}


function parseXMLTestresponse(parsee)
{
	var result = "";
	//alert("prasee" +parsee);
    $(parsee).find("Order").each(function()                                    
                                                 {
                                                 	result += "<li>";
                                                 
                                                 	//var amount = getDatafromParsee($(this),"price");
                                                 	//result += "blahblah";
                                                 	//result += parseXMLbarcodesingle($(this));
                                                 	//result += getDatafromParsee($(this),"Barcode");
                                                	result += "</li>";
                                                 });
    
    
     //empty
    $("#outputview ul").empty();
    //add
    $("#outputview ul").append(result).listview('refresh');
}



