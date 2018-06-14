// document.querySelector('body').onload = init;
const proxy = 'https://cors-anywhere.herokuapp.com/'
const url1 = 'https://www.xul.fr/rss.xml';
const url2 = 'https://filuns.unice.fr/accueil/rss_view';
var myRequest;

$(document).ready(function () {
    $('#tglBtn').on('click', function () {
        $('#selection').toggle();
    });

    $('#selection').change(function (event) {
        console.log(event.target.value);
    });

    $('#selection').change(function (event) {
        $.post(
            "proxy.php",
            {
                rssUrl: event.target.value
            },
            function (data) {
                $('#rssFeed').html(data);
            }
        );
    });
});




function init() {
    if(window.XMLHttpRequest){
        myRequest = new XMLHttpRequest();
    } else {
        console.log("ERREUR @ XMLHTTPREQUEST")
    }
    myRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            console.log("Requête AJAX effectuée");
            loadData();
        }
    };
}

function loadData () {
    document.getElementById("selection").addEventListener("change", function(event) {
        console.log(event.target.value);
        var req = proxy+event.target.value;
        console.log(req);
        send(req);
        document.getElementById("rssFeed").innerHTML = this.responseText;
    })
}

function send(event) {
    myRequest.open('post',"proxy.php", true);
    // myRequest.setRequestHeader("Content‐Type","application/x‐www‐form‐urlencoded");
    myRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    myRequest.send("rssUrl=" + event);
    // console.log(event.target.value);
    // myRequest.send();
}

function sendJson(url){
    myRequest.open("post","proxyJson.php", true);
    myRequest.setRequestHeader("Content‐Type","application/x‐www‐form‐urlencoded");
    myRequest.send("rssURL=" + event.target.value);
}


/* Deprecated */
function buttonLoadData () {
    myRequest.onreadystatechange = function () {
        if (this.readyState == 4&& this.status == 200){
            console.log("Requête AJAX effectuée");
            document.getElementById("data").innerHTML = this.responseText;
        }
    };
    myRequest.open('GET',proxy+url1, true);
    myRequest.send();
}

init();

