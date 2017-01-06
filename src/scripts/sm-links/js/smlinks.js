import $ from 'jquery';

export default function() {
  $(() => {
    var nav_functions = $('#left_nav_functions');
    fetch('/scripts/sm-links/html/sm_links.html')
      .then(response => response.text())
      .then(body => nav_functions.append(body));

    if (typeof studentFunctions !== 'undefined') {
      studentFunctions.forEach((object, index) => {
        if (object.name === "Functions") {
          studentFunctions.splice(index + 5, 0, {
            address: "/admin/messagesender/msgsndr.html",
            name: "Parent Notification"
          });
        }
      });
    }

    if ($('select[name="page"]').length) {
      var option = $('<option value="/admin/messagesender/msgsndr.html">Parent Notification</option>');
      var index = 19;
      option.insertBefore('select[name="page"] option:nth-child(' + index + ')');
    }

    if ($('h1:contains(Special Functions)').length) {
      var table = $('table tbody');
      var insertSelector = table.find('tr:contains(Interfaces to other systems)');
      fetch('/scripts/sm-links/html/sm_table_fragment.html')
        .then(response => response.text())
        .then(body => {
          insertSelector.after(body);
          //Fix row colors
          $('tr.oddRow').removeClass('oddRow');
          $('tr:odd').addClass('oddRow');
        });
    }
  });
}
