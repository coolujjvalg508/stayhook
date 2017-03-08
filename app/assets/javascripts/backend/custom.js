//Menu accordian
$(function() {
$('.side-menu-').accordion({ multiOpen: false });
});

//Slide navigation
 
$ (document) .ready(function(){
checkPosition();
function checkPosition(){
if($(window).width() > 767)
{
$(".slide-arrow").click(function(){
        $(".main-dashboard").toggleClass("hide-menu");
    });
	
	

}

else {}
		}
		})



//mobile-menu
$ (document) .ready(function(){
$(".mob-").click(function(){
	 $(".main-hotel-sec").removeClass("mob-sh");
        $(".main-mobile-menu").toggleClass("mob-sh");
    });

$(".build-arrow").click(function(){
        $(".main-hotel-sec").toggleClass("mob-sh");
		$(".main-mobile-menu").removeClass("mob-sh");
    });

	})
	
	//moblie payment
	 
	 $(".mobil-sear").click(function(){
        $(".mobile-payment").toggleClass("show-pay-sh");
    });
	$(".mobil-sear").click(function(){
        $(".search-secn").toggleClass("hide-search");
    });


//book rooms
$ (document) .ready(function(){
$(".edit-t").click(function(){
	$(".view-long-tirm, .edit-t").toggleClass("active");
});

$(".edit-t").click(function(){
	$(".viewbookinglist.active, .view-t.active").removeClass("active");
});

$(".view-t").click(function(){
	$(".viewbookinglist, .view-t").toggleClass("active");
});

$(".view-t").click(function(){
	$(".view-long-tirm.active, .edit-t.active").removeClass("active");
});



})
	

//custom Plus Min.

$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
 
 
 
 
 $("#top-go").click( function() {
   $(window).scrollTop(0);
 });