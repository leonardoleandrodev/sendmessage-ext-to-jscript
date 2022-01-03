
window.onload = function(){
var btn = document.getElementById('btn');
    btn.addEventListener('keyup',teste);  
}
var pesquisa = "";
function teste(key){
    if(key.keyCode == 13){
     pesquisa = btn.value;
     chrome.runtime.sendMessage({
        pesquisa: pesquisa // or whatever you want to send    
    });   
    }
    
    console.log(key.keyCode)
  }
    