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


  });
})($j);
