/* global $j*/
(function ($){
  $(document).ready(function (){
    var nav_functions = $('#left_nav_functions');
    nav_functions.append('/scripts/sm-links/html/sm_links.html');

    if(studentFunctions){
      studentFunctions.forEach((object, index) => {
        if(object.name === "Functions"){
          studentFunctions.splice(index+5,0, {
            address: "/admin/messagesender/msgsndr.html",
            name: "Parent Notification"
          });
        }
      })
    }

    if($('select[name="page"]').length){
      var option = $('<option value="/admin/messagesender/msgsndr.html">Parent Notification</option>');
      var index = 19;
      option.insertBefore('select[name="page"] option:nth-child(' + index + ')');
    }

    if($('h1:contains(Special Functions)').length){
      var table = $('table tbody');
      var insertSelector = table.find('tr td:contains(Interfaces to other systems)');
      fetch('/scripts/sm-links/html/sm_links.html')
        .then(response => response.text())
        .then(body => {
          body.insertAfter(insertSelector);
          //Fix row colors
          $('tr.oddRow').removeClass('oddRow');
          $('tr:odd').addClass('oddRow');
        })


    }
  });
})($j);
