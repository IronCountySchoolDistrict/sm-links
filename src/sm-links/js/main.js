/* global $j*/
$j(function() {
    var smLinksTemplate = $j($j('#sm-links-template').html());
    smLinksTemplate.find('a').attr('href', "/admin/messagesender/msgsndr.html");
    $j('#left_nav_functions').append(smLinksTemplate);
});