window.onload = function(){
    var result = document.getElementById("result");
    var btn = document.getElementById("lookup");
    var cuntry = document.getElementById("country");
    
    var xhr, url, responseText;
    
    btn.addEventListener("click", function(e){
        var country = cuntry.value;
        if(country === "Jamaica"){
        xhr.onreadystatechange = getInfo;
        url = "world.php?country=" + country;
        xhr.open("GET",url);
        xhr.send();
        }
        
        
        
        
        if(country != ""){
            xhr = new XMLHttpRequest();
            xhr.onreadystatechange = getInfo;
            url = "world.php?all=false&country=" + country;
            xhr.open("GET", url);
            xhr.send();
        }
        else{
            alert("Enter a country");
        }
    
    });
    
    function getInfo(){
        
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                
                    
                    result.innerHTML = xhr.responseText;
                
            }
        }
    }
}