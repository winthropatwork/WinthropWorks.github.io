// javascipt 
// uses 1st layer name to tell how to export psd, cuase menus are hard
var doc = app.activeDocument;
if(app.activeDocument.layers[0].name == "BGNameFalse"){
    ExportBGSublayer();
    alert("Job Done, Please run export>Layers To Files ");
}else {
    var exportName = app.activeDocument.layers[0].name; 
    ExportBGlayer();
    var Path = app.activeDocument.path; 
    var filePSD = File(Path + "/" + exportName +".psd"); 
    var filePNG = File(Path + "/" + exportName +".png"); 
    SavePSD(filePSD);
    SavePNG(filePNG);
    alert("Job Done don't save this file");
}

// var layerlist = [];
//alert(toplayercount);
function ExportBGSublayer(){
for (var i = 0; i < doc.layers.length; i++){
    //var sublayersize = app.activeDocument.layerSets.length;
    
    var currentLayer = app.activeDocument.layers[i];  
    //alert(currentLayer);
    if (currentLayer.name == "BG"){
        //alert("bg");
        layercount = app.activeDocument.layerSets[i].layerSets.length;
        for (var l = 0; l < layercount; l++){
            // this steps trough but as teh merge happens mid way it stops early. maybe create arry of names
            //var subLayer = app.activeDocument.layerSets[i].layers[l].name; 
            //layerlist[l] = subLayer;
            activeDocument.activeLayer = app.activeDocument.layerSets[i].layers[l];  
            ConvertToSmartObject(activeDocument.activeLayer);
        }
        // or maybe we just move the counter outside so we aways merge 0 for the number of count
        // for (listcount = 0; listcount < layerlist.length; listcount++){
        //     alert(layerlist[listcount]);
        // }
    } else{
        alert("delete");
        currentLayer.remove();
        i= i-1;

    }
}
}

function ExportBGlayer(){
    for (var i = 0; i < doc.layers.length; i++){
        //var sublayersize = app.activeDocument.layerSets.length;
        
        var currentLayer = app.activeDocument.layers[i];  
        //alert(currentLayer);
        if (currentLayer.name == "BG"){
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
    // activeDocument.activeLayer.rasterize(RasterizeType.ENTIRELAYER);
}


function DeleteLayer(){
    activeDocument.activeLayer = app.activeDocument.layers[i];  
    //executeAction(stringIDToTypeID("newPlacedLayer"), new ActionDescriptor(), DialogModes.NO);  
    //remove();
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