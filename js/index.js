console.log("script runned");

var limit = 5;

var element = document.getElementById("showgif");
var host = "http://api.giphy.com/v1/gifs/search?q=";
var api = "&api_key=cYLxBA6FFt7Q1Lrh2gMkJAfcriNDxAl0&limit="+limit;
var url="";
var offset=0;


function callgif(){
    url+=offset;
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    request.onload = () => {
        if (request.status === 200) {
            var object = JSON.parse(request.response);
            console.log(object.data);
            var gifs = object.data;
            console.log(typeof gifs);
            var i = 0;
            for (gif in gifs) {
                console.log(gifs[gif]["images"]["downsized_medium"]["url"]);
                i += 1;
                element.innerHTML += `
                <div class="col-lg-3 p-2 bg-grey rounded">
                <div class="cover">
                <img class ="img-fluid rounded gif " src= "${gifs[gif]["images"]["downsized_medium"]["url"]}" ></img> 
                <div class = "overlay p-1">
                <a href="${gifs[gif]["images"]["downsized_medium"]["url"]}" download>
                <i class="fa fa-search"></i>
                </a>
                </div>
                </div>
                </div>
                `;
            }

        }
        else {

            console.log("failed");
        }
    }
    console.log(stext);
    return false;
}





function search(){
    offset = 0;
    // document.forms["searchform"].preventDefault();
    var stext = document.forms["searchform"]["searchtext"].value;
    if(stext.length==0)
    {
        console.log("empty");
        return false;
    }
     url=host+ stext+api + "&offset=";
     callgif();
    
}


function addchild(){
    offset+=limit;
    callgif();
}