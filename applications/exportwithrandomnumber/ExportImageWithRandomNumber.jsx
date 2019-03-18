// javascipt 
// uses 1st layer name to tell how to export psd, cuase menus are hard
var doc = app.activeDocument;
var Path = app.activeDocument.layers[1].name; 
var psdname = Path+"psds";
var pngname = Path+"exports";
var PSDPath = new Folder(psdname);
var PNGPath = new Folder(pngname);

var fileName = app.activeDocument.name;


// if(app.activeDocument.layers[0].name == "BGNameFalse"){
//     ExportBGSublayer();
//     ExportSmartObjectsAsFiles();
//     alert("Job Done, note this is a new file not your source one");
// }

function findUnderscores(name){
    var fristCharPlace = name.indexOf("_");
    var secondCharPlace = 0;
    alert(fristCharPlace);
    var isnext = false; 
    var i = fristCharPlace+1; 

    while (isnext == false){
        if(name.charAt(i) == "_"){
            isnext = true;
            secondCharPlace = i;
        }
        i++
    }
}