export default function loadMaterialize(){
    $("<link/>", {
   rel: "stylesheet",
   type: "text/css",
   href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css"
  }).appendTo("head");
  
  
  $.ajax({
  type: "GET",
  url: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js",
  dataType: "script"
  });
  
  }