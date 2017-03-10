// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery.min
//= require jquery_ujs
//= require bootstrap
//= require bootstrap-datetimepicker
//= require addSlider
//= require tinymce
//= require lightbox.min
//= require Obj.min
//= require slick
//= require jquery.nice-select.min
//= require classie
//= require jquery.mixitup.min
//= require jquery.validate
//= require custom
// require turbolinks
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
