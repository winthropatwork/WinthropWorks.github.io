Export script version 0.11
Created by Jonathan Innes
Last update March 17 2019 
This script is intended to export layers with key names to files
To run a script in photoshop 
 Go to File>Scripts>browse or adding the .jsx file to your Presets\Scripts and selecting it from File>Scripts

Requirements:
You must be using the format of having a single folder called "BG" for your background objects
The 1st layer of your psd must be called "BGNameFalse" or the name you want to call your background
The second layer of your psd must be the path to your local brackgrounds p4 folder, example "/c/projects/backgrounds/"
This folder and the psds and exports must exist on your harddrive
Please note this will not check in any files to p4, you must still do that by hand
Please note this will overwrite any files with the same name


How to use:
Export only BG layer 
    Create a new layer at the top of your psd and name it what you want the background to be saved as. Example "SnowMountian"
    Run ExportFoldersAsNewFiles.jsx  

Export All folders Inside BG
    I only have 1/2 of this working. 
    You should name each of your subfolders what you want that background called. Example "SnowMountian"
    Create a layer at the top of your psd called "BGNameFalse"
    Run ExportFoldersAsNewFiles.jsx 


ToDo
    Need to delete old folders as I export to reduce file size. This is more complex so it will be much later. 

