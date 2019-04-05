// javascipt 
// uses 1st layer name to tell how to export psd, cuase menus are hard
var doc = app.activeDocument;
var docname = app.activeDocument.name;
var Path = "/c/temp/pogo/"; 
var psdname = Path+"psds";
var pngname = Path+"exports";
var PSDPath = new Folder(psdname);
var PNGPath = new Folder(pngname);

var nameSize = docname.length;
var docname = docname.slice(0,-4);


var exportName = docname;
ExportBGlayer();
var filePNG = File(PNGPath + "/" + exportName +".png"); 
var filePSD = File(PSDPath + "/" + exportName +".psd"); 
//alert(filePNG);
SavePNG(filePNG);
SavePSD(filePSD);
alert("Job Done, note this is a new file not your source one");

function ExportBGlayer(){
    for (var i = 0; i < doc.layers.length; i++){
        //var sublayersize = app.activeDocument.layerSets.length;
        
        var currentLayer = app.activeDocument.layers[i];  
            // checked if layer is locked and unlock as otherwise you can't delete it
        if (currentLayer.allLocked == true){
            currentLayer.allLocked = false;
        }
        //alert(currentLayer);
        if (currentLayer.name == "BG" || currentLayer.name == "bg"){
            // this is where i might edit the bg stuff
        } else{
            //alert("delete");
            currentLayer.remove();
            i= i-1;
    
        }
    }
    }



function ConvertToSmartObject(layer){
   // alert("mergelayer");
    executeAction(stringIDToTypeID("newPlacedLayer"), new ActionDescriptor(), DialogModes.NO);  
}


function DeleteLayer(){
    activeDocument.activeLayer = app.activeDocument.layers[i];  
}


function ExportSmartObjectsAsFiles(){
    //hide all layers
    count = doc.layers.length;
    for (var i = 0; i < doc.layerSets[0].layers.length; i++){
        app.activeDocument.layerSets[0].layers[i].visible = 0; 
    }

    //show layer then export and move to next layer
    for (var i = 0; i < doc.layerSets[0].layers.length; i++){
        app.activeDocument.layerSets[0].layers[i].visible = 1;
        localExportName = app.activeDocument.layerSets[0].layers[i].name; 
        //var Path = app.activeDocument.path; 
        var filePSD = File(PSDPath + "/" + localExportName +".psd"); 
        var filePNG = File(PNGPath + "/" + localExportName +".png"); 
        SavePSD(filePSD);
        SavePNG(filePNG);
        app.activeDocument.layerSets[0].layers[i].visible = 0;
        
    }
}

// from internet https://graphicdesign.stackexchange.com/questions/96579/script-to-automatically-save-a-psd-when-saving-a-png
function SavePNG(saveFile)
{ 
  var pngSaveOptions = new PNGSaveOptions(); 
  activeDocument.saveAs(saveFile, pngSaveOptions, true, Extension.LOWERCASE); 
}

function SavePSD(saveFile)
{
  var psdFile = new File(saveFile);
  psdSaveOptions = new PhotoshopSaveOptions();
  psdSaveOptions.embedColorProfile = true;
  psdSaveOptions.alphaChannels = true;  
  activeDocument.saveAs(psdFile, psdSaveOptions, false, Extension.LOWERCASE);
}