//= require backend/jquery
//= require backend/jquery.min
//= require jquery_ujs
//= require backend/bootstrap.min
//= require backend/bootstrap-datetimepicker
//= require jquery_nested_form

//= require backend/slick
//= require backend/jquery.accordion
//= require backend/canvasjs.min
//= require backend/moment.min
//= require backend/fullcalendar.min
//= require backend/raphael.min
//= require backend/morris.min
//= require backend/morris-data
//= require backend/jquery.canvasjs.min
//= require backend/custom


// require_tree .

$(document).ready(function(){
	$(".alert").fadeIn();
	$(".alert").fadeOut(30000);

	$('.numericOnly').keyup(function () {
		this.value = this.value.replace(/[^0-9]/g,'');
	});
	$('.floatOnly').keyup(function () {
		this.value = this.value.replace(/[^0-9\.]/g,'');
	});
});