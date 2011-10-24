var fileContent = bulmaRhs.getFileContent();

//on change de page si le fichier correspond à un format pris en charge
if(bulmaRhs.getFileFormat(fileContent) !== null)
{
  bulmaRhs.computeFile(fileContent);
}