
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        var campo = document.querySelector('input[name="q"]');
        var btnPesquisar = document.querySelector('input[name="btnK"]');
        campo.focus();
        campo.value = request.pesquisa;
        campo.dispatchEvent(new KeyboardEvent('keydown', {
            bubbles: true, cancelable: true, keyCode: 13
        }));
        btnPesquisar.click()
        console.log("mensagem recebida-> " + request.pesquisa)
       return true;
    }
);