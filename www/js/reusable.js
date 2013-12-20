//event voor enter button of barcodereaderscan enter
function checkClick(e)
{
	//alert(e.keyCode);
	if (e.keyCode == 13)
	{
		
		
	}

	//document.getElementById("inputBarcode").focus();
	focusCall();
	
}

function focusCall()
{
	
	
	//document.getElementById("inputBarcode").focus();
	
	
}

function hideKeyboard(element) {
    element.attr('readonly', 'readonly'); // Force keyboard to hide on input field.
    element.attr('disabled', 'true'); // Force keyboard to hide on textarea field.
    setTimeout(function() {
        element.blur();  //actually close the keyboard
        // Remove readonly attribute after keyboard is hidden.
        element.removeAttr('readonly');
        element.removeAttr('disabled');
    }, 100);
}

function leTyping(event)
{
	//leTyping(event.keyCode);
	testoutput += "k:"+ event.keyCode +  "c:" +event.charCode +"|";
}

function leTyping2(key)
{
	var btntxt = "";
	btntxt = key;
	//0 in geval FN toets ingedrukt android toestel
	if (key == "0")
	{
		btntxt = "";
	}
	//TOETSENBORD LAYOUT GEWOON KEYBOARD
	if (key == "96")
	{
		btntxt = "0";
	}
	if (key == "97")
	{
		btntxt = "1";
	}
	if (key == "98")
	{
		btntxt = "2";
	}
	if (key == "99")
	{
		btntxt = "3";
	}
	if (key == "100")
	{
		btntxt = "4";
	}
	else if (key == "101")
	{
		btntxt = "5";
	}
	else if (key == "102")
	{
		btntxt = "6";
	}
	else if (key == "103")
	{
		btntxt = "7";
	}
	else if (key == "104")
	{
		btntxt = "8";
	}
	else if (key == "105")
	{
		btntxt = "9";
	}
	
	
	//TOETSEN SCANNER KEYBOARD
	if (key == "49")
	{
		btntxt = "1";
	}
	if (key == "50")
	{
		btntxt = "2";
	}
	if (key == "51")
	{
		btntxt = "3";
	}
	if (key == "52")
	{
		btntxt = "4";
	}
	if (key == "53")
	{
		btntxt = "5";
	}
	if (key == "54")
	{
		btntxt = "6";
	}
	if (key == "55")
	{
		btntxt = "7";
	}
	if (key == "56")
	{
		btntxt = "8";
	}
	if (key == "57")
	{
		btntxt = "9";
	}
	if (key == "32")
	{
		btntxt = "0";
	}
	//volgens testen met scanner is 48 => 0
	if (key == "48")
	{
		btntxt = "0";
	}
	
	
	
	
	
	
	if (btntxt != "")
	{
		//alert(key);
	}
	
	document.getElementById("inputBarcode").value += btntxt;
	testoutput += "k:"+ key + "t:" + btntxt + "|";
	//document.getElementById("inputBarcode").value += "b=" + btntxt + "v="+ btntxt + "|";
	//alert(btntxt);
}




function clearSettings()
{
	localStorage.clear();
	alert("done");
}

//
//config check taal!
//
function loadlanguageinfo()
{
//localStorage.clear();
                //console.log(localStorage.getItem("lang"));
		//alert(localStorage.getItem("lang"));
                //console.log(navigator.language.split("-")[0]);
                //console.log(localStorage.getItem("lang") && (localStorage.getItem("lang") != navigator.language.split("-")[0]));
                //alert("cur lang:"+localStorage.getItem("lang") + " sys lang:" + navigator.language.split("-")[0]);
                if(localStorage.getItem("lang") && (localStorage.getItem("lang") != navigator.language.split("-")[0])){
                
                    setTimeout(function(){
                    //resetSettings(1);
		    alert("clearing settings");
		    localStorage.clear();
                               }, 1000);
                    
                }
                
                if(!localStorage.getItem("lang")){
		    alert("Loading " + "language" + "...");
                    var lang = navigator.language.split("-");
		    var current_lang = lang[0];
		    //alert("device lang " + current_lang);
                    localStorage.setItem("lang",current_lang);
                    //console.log(current_lang);
                    if(current_lang != "en"){
                    
                        parseTranslationXMLToLocalStorage();
			alert("Translations are parsed!");
                    }
                    //localStorage.setItem("lang", "nl");
                    //alert("written");
					//alert(localStorage.getItem("lang"));
                }
                
                if(localStorage.getItem("lang") != "en"){
                    startTranslation();
                }
}

//eerste maal dat page laad
function firstLoad()
{
	focusCall();
}


function getDatafromParsee(parsee,valuename)
{
    var foundValue = "";
    
    $(parsee).find("Order").find(valuename).each(function()                                    
                                                 {
                                                 foundValue = $(this).text();                                             });
    return foundValue;
}

function getDatafromParseeObj(parsee,valuename)
{
    var foundValue = "";
    
    $(parsee).find(valuename).each(function()                                    
                                   {
                                   foundValue = $(this);                                     
                                   });
    return foundValue;
}




function donothing()
{
}


//event for state of connection
function state_Change()
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




function getParameterByName(name)
{
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
                          var regexS = "[\\?&]" + name + "=([^&#]*)";
                          var regex = new RegExp(regexS);
                          var results = regex.exec(window.location.search);
                          if(results === null){
                          return "";
                          }
                          else{
                          return decodeURIComponent(results[1].replace(/\+/g, " "));
                          }
}
                          