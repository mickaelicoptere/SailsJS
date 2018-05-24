document.querySelector('body').onload = init;
const proxy = 'https://cors-anywhere.herokuapp.com/'
const url1 = 'https://www.xul.fr/rss.xml';
const url2 = 'https://filuns.unice.fr/accueil/rss_view';
var myRequest;

function init() {
    if(window.XMLHttpRequest){
        myRequest = new XMLHttpRequest();
    } else {
        console.log("ERREUR @ XMLHTTPREQUEST")
    }
}

function loadData () {
    myRequest.onreadystatechange = function () {
        if (this.readyState == 4&& this.status == 200){
            console.log("Requête AJAX effectuée");
            document.getElementById("data").innerHTML = this.responseText;
        }
    };
    myRequest.open('GET',proxy+url1, true);
    myRequest.send();
}