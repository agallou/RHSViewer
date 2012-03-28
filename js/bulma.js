var bulmaRhs = {
  FORMAT_RHS_M06: 'RHSM06',
  RHS_M06_DESCRIPTORS: [
    {from:   1, to:   9, label: "N° FINESS"},
    {from:  10, to:  12, label: "Version RHS"},
    {from:  13, to:  19, label: "Numéro de séjour SSR", significant: true},
    {from:  20, to:  39, label: "Numéro administratif de séjour", significant: true},
    {from:  40, to:  51, label: "Zone réservée"},
    {from:  52, to:  59, label: "Date de début de séjour", type: 'date', significant: true},
    {from:  60, to:  67, label: "Date de fin de séjour", type: 'date', significant: true},
    {from:  68, to:  75, label: "Date de naissance", type: 'date'},
    {from:  76, to:  76, label: "Sexe", type: 'sexe'},
    {from:  77, to:  81, label: "Code postal"},
    {from:  82, to:  82, label: "Type d'hospitalisation"},
    {from:  83, to:  90, label: "Date d'entrée dans l'UM", type: 'date', significant: true},
    {from:  91, to:  91, label: "Mode entrée dans l'UM"},
    {from:  92, to:  92, label: "Provenance"},
    {from:  93, to: 100, label: "Date de sortie dans l'UM", type: 'date', significant: true},
    {from: 101, to: 101, label: "Mode de sortie dans l'UM"},
    {from: 102, to: 102, label: "Destination"},
    {from: 103, to: 108, label: "Numéro de semaine", type: 'semaine', significant: true},
    {from: 109, to: 113, label: "Journées hors w-e", significant: true},
    {from: 114, to: 115, label: "Journées w-e", significant: true},
    {from: 116, to: 119, label: "Numéro d'UM", significant: true},
    {from: 120, to: 122, label: "Type d'autorisation UM"},
    {from: 123, to: 130, label: "Date d'intervention chirurgicale"},
    {from: 131, to: 138, label: "Finalité principale", significant: true},
    {from: 139, to: 146, label: "Manifestation Morbide principale", significant: true},
    {from: 147, to: 154, label: "Affection Ethiologique", significant: true},
    {from: 155, to: 155, label: "Dépendance Habillage"},
    {from: 156, to: 156, label: "Dépendance Déplacement"},
    {from: 157, to: 157, label: "Dépendance Alimentation"},
    {from: 158, to: 158, label: "Dépendance Continence"},
    {from: 159, to: 159, label: "Dépendance Comportement"},
    {from: 160, to: 160, label: "Dépendance Relation"},
    {from: 161, to: 162, label: "Nombre de diagnostic associés", significant: true, type: 'entier'},
    {from: 163, to: 165, label: "Nombre d'actes CdaRR", significant: true, type: 'entier'},
    {from: 166, to: 167, label: "Nombre d'actes CCAM", significant: true, type: 'entier'}
  ],
  FORMAT_RHS_M07: 'RHSM07',
  RHS_M07_DESCRIPTORS: [
    {from:   1, to:   9, label: "N° FINESS"},
    {from:  10, to:  12, label: "Version RHS"},
    {from:  13, to:  19, label: "Numéro de séjour SSR", significant: true},
    {from:  20, to:  39, label: "Numéro administratif de séjour", significant: true},
    {from:  40, to:  51, label: "Zone réservée"},
    {from:  52, to:  59, label: "Date de début de séjour", type: 'date', significant: true},
    {from:  60, to:  67, label: "Date de fin de séjour", type: 'date', significant: true},
    {from:  68, to:  75, label: "Date de naissance", type: 'date'},
    {from:  76, to:  76, label: "Sexe", type: 'sexe'},
    {from:  77, to:  81, label: "Code postal"},
    {from:  82, to:  82, label: "Type d'hospitalisation"},
    {from:  83, to:  90, label: "Date d'entrée dans l'UM", type: 'date', significant: true},
    {from:  91, to:  91, label: "Mode entrée dans l'UM"},
    {from:  92, to:  92, label: "Provenance"},
    {from:  93, to: 100, label: "Date de sortie dans l'UM", type: 'date', significant: true},
    {from: 101, to: 101, label: "Mode de sortie dans l'UM"},
    {from: 102, to: 102, label: "Destination"},
    {from: 103, to: 108, label: "Numéro de semaine", type: 'semaine', significant: true},
    {from: 109, to: 113, label: "Journées hors w-e", significant: true},
    {from: 114, to: 115, label: "Journées w-e", significant: true},
    {from: 116, to: 119, label: "Numéro d'UM", significant: true},
    {from: 120, to: 122, label: "Type d'autorisation UM"},
    {from: 123, to: 130, label: "Date d'intervention chirurgicale"},
    {from: 131, to: 138, label: "Finalité principale", significant: true},
    {from: 139, to: 146, label: "Manifestation Morbide principale", significant: true},
    {from: 147, to: 154, label: "Affection Ethiologique", significant: true},
    {from: 155, to: 155, label: "Dépendance Habillage"},
    {from: 156, to: 156, label: "Dépendance Déplacement"},
    {from: 157, to: 157, label: "Dépendance Alimentation"},
    {from: 158, to: 158, label: "Dépendance Continence"},
    {from: 159, to: 159, label: "Dépendance Comportement"},
    {from: 160, to: 160, label: "Dépendance Relation"},
    {from: 161, to: 162, label: "Nombre de diagnostic associés", significant: true, type: 'entier'},
    {from: 163, to: 165, label: "Nombre d'actes CdaRR/CSARR", significant: true, type: 'entier'},
    {from: 166, to: 167, label: "Nombre d'actes CCAM", significant: true, type: 'entier'}
  ],
};

/**
 * @returns string
 */
bulmaRhs.getFileContent = function()
{
  return $('body > pre').text();
}

/**
 * Détermine le format d'un fichier
 *
 * @param message
 * @returns string|null le type du message ou null si il ne correspond à rien
 */
bulmaRhs.getFileFormat = function(content)
{
  if(content.match(/^.{9}M06/) !== null)
  {
    return this.FORMAT_RHS_M06;
  }
  if(content.match(/^.{9}M07/) !== null)
  {
    return this.FORMAT_RHS_M07;
  }

  return null;
}

/**
 *
 * @param content
 */
bulmaRhs.computeFile = function(content)
{
  var fileAsHtml = content;

  switch(this.getFileFormat(content))
  {
    case this.FORMAT_RHS_M06:
    case this.FORMAT_RHS_M07:
     fileAsHtml = this.rhsHtml(content);
     break;
  }
  
  this.setLayout(fileAsHtml);
}

/**
 * @param content
 */
bulmaRhs.rhsHtml = function(content)
{
  var rhsJson = this.rhsJson(content);
  var html = '';

  html += '<table class="segment inline">';
  html +=   '<tr class="titre"><td>Champs</td><tr>';
  $.each(bulmaRhs.RHS_M06_DESCRIPTORS, function(i, descriptor){
    var className = 'desc';
    if(descriptor.significant == undefined)
    {
      className += ' insignifiant';
    }
    html += '<tr class="'+className+'"><td>'+descriptor.label+'</td><tr>';
  });
  html += '<table>';

  $.each(rhsJson.rhss, function(rhsIndex, rhs){
    html += '<table class="segment inline">';
    html +=   '<tr class="titre"><td>RHS '+(rhsIndex + 1)+'</td><tr>';

    $.each(rhs.champs, function(champIndex, champ){
      var className = '';

      if(champ != '')
      {
        className += 'value ';
      }

      if(bulmaRhs.RHS_M06_DESCRIPTORS[champIndex].significant == undefined)
      {
        className += 'insignifiant ';
      }

      html +=   '<tr class="'+className+'"><td>'+champ+'</td><tr>';
    });
    html += '<table>';
  });
  html += '<div class="clear"></div>';
  return html;
}

/**
 * @param key
 * @param value
 * @param level
 */
bulmaRhs.drawHmltElement = function(key, value, level)
{
  var description = (bulmaRhs.hl7Descriptions[key] !== undefined) ? bulmaRhs.hl7Descriptions[key] : '';
  var className = this.htmlClassByLevel[level];
  className += (this.isSignificantField(key)) ? " significant" : "";
  className += (value == '') ? " empty" : "";
  inlineStyle = (value == '') ? 'style="display: none;"' : '';
  
  return '<tr ' + inlineStyle + '  class="' + className + '"><td class="key">' + key + '</td><td class="value">' + value + '</td><td class="desc">' + description + '</td></tr>';
}

/**
 * @param fieldName
 */
bulmaRhs.isSignificantField = function(fieldName)
{
  return (jQuery.inArray(fieldName, bulmaRhs.hl7SignificantValues) >= 0);
}

/**
 * @param content
 */
bulmaRhs.rhsJson = function(content)
{
  var rhssJson = {};
  rhssJson.rhss = [];

  var rhss = content.split("\n");

  $.each(rhss, function(i, rhsText){
    if(rhsText != '')
    {
      rhssJson.rhss.push(bulmaRhs.parseRhs(rhsText));
    }
  });

  return rhssJson;
}

/**
 * @param segment
 */
bulmaRhs.parseRhs = function(rhsText)
{
  var rhsJson = { champs: []};
  var value;

  $.each(bulmaRhs.RHS_M06_DESCRIPTORS, function(i, descriptor){
    value = rhsText.substring(descriptor.from - 1, descriptor.to);
    rhsJson.champs.push(bulmaRhs.format(value, descriptor));
  });

  return rhsJson;
}

/**
 * @param value
 * @param descriptor
 */
bulmaRhs.format = function(value, descriptor)
{
  value = value.trim();
  if(value === '')
  {
    return value;
  }

  switch(descriptor.type)
  {
    case 'date':
      var result;
      if(result = value.match(/^([0-9]{2})([0-9]{2})([0-9]{4})$/))
      {
        return result[1]+'/'+result[2]+'/'+result[3];
      }
      break;
    case 'sexe':
      switch(value)
      {
        case '1': return 'H';
        case '2': return 'F';
      }
      break;
    case 'entier':
      return parseInt(value);
      break;
    case 'semaine':
      var result;
      if(result = value.match(/^([0-9]{2})([0-9]{4})$/))
      {
        return result[1]+'/'+result[2];
      }
      break;
  }

  return value;
}

bulmaRhs.autoWidth = function()
{
  var totalWidth = 0;
  $('table.segment').each(function() {
    totalWidth += $(this).width() + 15;
  });

  $('#content').css({'width': totalWidth+'px'});
}

/**
 * @param fileAsHtml
 */
bulmaRhs.setLayout = function(fileAsHtml)
{
  chrome.extension.sendRequest({
    action: 'getLayout'
  }, function(response){
    $('html').html(response.layout);
    $('#content').html(fileAsHtml);
    $('#logo').attr('src', chrome.extension.getURL('img/48.png'));
    $('#fileName').text(window.location.pathname);
    $("#showImportantFields").change(function() {
      $('.insignifiant').each(function() {
        $(this).toggle();
        bulmaRhs.autoWidth();
      });
    });

    bulmaRhs.autoWidth();
  });
}
