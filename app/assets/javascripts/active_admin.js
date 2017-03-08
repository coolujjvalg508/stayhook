//= require active_admin/base
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require bootstrap
//= require tinymce
//= require chosen-jquery

//= require active_admin_flat_skin





$(document).ready(function() {

	$(".chosen-input").chosen();
	$("#diplay-filter").html('Filter');

	$(".alert").fadeIn();
	$(".alert").fadeOut(30000);

	$('.numericOnly').keyup(function () {
	  	this.value = this.value.replace(/[^0-9]/g,'');
	});
	$('.floatOnly').keyup(function () {
	  	this.value = this.value.replace(/[^0-9\.]/g,'');
	});

	tinymce.init({
			  
		selector: '.tinymce',
		height: 200,
		width: 835,
		themes: "modern",
		menubar: false,
		/*uploadimage_form_url : '/admin/images/saveimage',*/ /* uploadimage */

		plugins: [
			'advlist autolink lists link image charmap print preview anchor',
			'searchreplace visualblocks code fullscreen',
			'insertdatetime media table contextmenu paste code'
		],
		toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | uploadimage | media | code'

	});	

	$('#static_page_content_input').parent('div').css({'margin-left':'160px','margin-top': '22px'});

	$("select#room_category_id").change(function(e){
		$.getJSON("/admin/rooms/get_sub_categories",{category_id: $(this).val(), ajax: 'true'}, function(response){
			var options = '';
			for (var i = 0; i < response.length; i++) {
				options += '<option value="' + response[i].id + '">' + response[i].name + '</option>';
			}

			$("select#room_sub_category_id").html('<option value="">Select Sub Category</option>'+options);

		})
	})


});
