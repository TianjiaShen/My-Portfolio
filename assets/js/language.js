let font_awesome = {
    "location": '<i class="fas fa-map-marker-alt" aria-hidden="true"></i>',
    "download": '<i class="fa fa-download" aria-hidden="true"></i>',
    "email": '<i class="fa fa-paper-plane" aria-hidden="true"></i>',
    "language": '<i class="fas fa-language"></i>',
    "check": '<i class="fa fa-check" aria-hidden="true"></i>'
};
setLanguage('en');

function setLanguage(lang) {
    console.log(lang, "clicked");
    var url = '/assets/language/' + lang + '.json';
    getJsonData(url);
}

// find id by json key
async function getJsonData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(JSON.parse(data));
    // console.log(data);
    for (var key in data){
        // console.log(key, data[key]);
        let elem = document.getElementById(key);
        if (elem === null) continue;
        
        elemFont = elem.getAttribute('data-font');
        if (elemFont !== null) {
            console.log(elemFont, font_awesome[elemFont]);
            elem.innerHTML = font_awesome[elemFont] + data[key];
        } else {
            elem.innerHTML = data[key];
        }
    }
}