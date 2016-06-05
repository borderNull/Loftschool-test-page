$(document).ready(function(){

$("input[type=checkbox]").change(function(){
          if(this.checked == true) {
            $(this).parents('.one_third').css("background-color", "#ecf4e2").fadeOut(1000);
          }
});

var countChecked = function() {
  var n = $( "input:checked" ).length;
   if (n == 6) {
    $("#goodjob").show();
  }
};
countChecked();
 
$( "input[type=checkbox]" ).on( "click", countChecked );
$('input:checkbox').removeAttr('checked');
$('#goodjob').css("display", "none");

});