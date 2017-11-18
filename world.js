window.onload = function(){
    var result = document.getElementById("result");
    var btn = document.getElementById("lookup");
    var cuntry = document.getElementById("country");
    var all = document.getElementById("Check");
    
    var xhr, url, responseText;
    
    btn.addEventListener("click", function(e){
        e.preventDefault(); 
        var country = cuntry.value;
        
        
        if(country != ""){
            xhr = new XMLHttpRequest();
            xhr.onreadystatechange = getInfo;
            url = "world.php?all=false&country=" + country;
            xhr.open("GET", url);
            xhr.send();
        }
        else{
            var checked = document.getElementById("ChckBox").checked;
            console.log(checked);
            
            if (checked){
				xhr = new XMLHttpRequest();
				xhr.onreadystatechange = getInfo;
				var url = "world.php?all=true&country=all";
		    	xhr.open("GET", url);
		    	xhr.send();
		    	}
		    	
		    	else{
		    	    result.innerHTML = "<h2>Search Result</h2><p>Enter a Country</p>";
		    	}
		    }
        }
    
    });
    
    function getInfo(){
        
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                responseText = xhr.responseText;
                
                if(responseText === "FALSE"){
                    //alert("Sorry. Country not found");
                    result.innerHTML = "<h2>Search Result</h2><p>Sorry. Country not found</p>";
                    
                }
                else{
                    //alert(responseText);
                    result.innerHTML = "<h2> Search Result </h2>" responseText;
                }
            }
        }
    }
}