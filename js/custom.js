$(document).ready(function () {
	$(".call_button_cross_svg").click(function () {
		$(".call_button_cross_svg").hide();
		$(".call_button_wrapper").show();

		$('.agent_image_wrapper').hide();
		$('.agent_detail_wrapper').hide();
		if ($('.agent_right_block').hasClass('single_listing')) {
			$('.agent_right_block').hide();
		}
		
		$('.agent_wrapper').removeClass('agent_detail_box_2_open');
		$('.agent_image_wrapper .agent_side_img_layout_7').removeClass("open");	
		$('.agent_wrapper').removeClass('agent_detail_box_1_open');
		$('.agent_image_wrapper .agent_side_img_layout_6').removeClass("open");
	});
	$('.agent_right_block').hide();
	$(".call_button_wrapper").click(function () {
		$(".call_button_wrapper").hide();

		$(".call_button_cross_svg").show();

		$('.agent_right_block').show();
		if ($('.agent_right_block').hasClass('single_agent')) {
			$('.agent_detail_wrapper').show();
		} else if ($('.agent_right_block').hasClass('single_listing')) {
			$('.agent_right_block').show();
		} else {
			$('.agent_wrapper .agent_image_wrapper').show();
		}
	});

	$(".agent_side_img_layout_6").click(function () {		
		$('.agent_wrapper').removeClass('agent_detail_box_2_open')
		$('.agent_image_wrapper .agent_side_img_layout_7').removeClass("open");	
		
		$('.agent_wrapper').toggleClass('agent_detail_box_1_open')
		$('.agent_image_wrapper .agent_side_img_layout_6').toggleClass("open");
		$(".agent_det_box_layout_6 .agent_detail_box_1").toggle(); 
		$(".agent_det_box_layout_7 .agent_detail_box_1").toggle(); 
		$(".agent_det_box_layout_8 .agent_detail_box_1").toggle(); 
		$(".agent_det_box_layout_9 .agent_detail_box_1").toggle(); 
		$(".agent_det_box_layout_10 .agent_detail_box_1").toggle(); 
	});
	$(".agent_side_img_layout_7").click(function () {
		
		$('.agent_wrapper').removeClass('agent_detail_box_1_open')
		$('.agent_image_wrapper .agent_side_img_layout_6').removeClass("open");

		$('.agent_wrapper').toggleClass('agent_detail_box_2_open')
		$('.agent_image_wrapper .agent_side_img_layout_7').toggleClass("open");		
		$(".agent_det_box_layout_6 .agent_detail_box_2").toggle(); 
		$(".agent_det_box_layout_7 .agent_detail_box_2").toggle(); 
		$(".agent_det_box_layout_8 .agent_detail_box_2").toggle(); 
		$(".agent_det_box_layout_9 .agent_detail_box_2").toggle(); 
		$(".agent_det_box_layout_10 .agent_detail_box_2").toggle(); 
	}); 
	// --- Nav |  01  |  Side-Slide
 

	// ----------------- Button Shape -----------------
	$('#whatsapp_chat_call_button_type .radio_list_item_wrap input:radio').change(function () {
		if ($('#Stroke').is(":checked")) {
			$('.call_button_svg').addClass("Stroke");
		} else {
			$('.call_button_svg').removeClass("Stroke");
		}
	});

	$('#whatsapp_chat_display_text .radio_list_item_wrap input:radio').change(function () {
		if ($('#Show').is(":checked")) {
			$('.call_button').addClass("call_button_text_show");
		} else {
			$('.call_button').removeClass("call_button_text_show");
		}
	});

	$('#whatsapp_chat_display_icon .radio_list_item_wrap input:radio').change(function () {
		if ($('#Hide-icon').is(":checked")) {
			$('.call_button').addClass("call_button_icon_show");
		} else {
			$('.call_button').removeClass("call_button_icon_show");
		}
	});


	// ----------------- change layout ----------------- 
	$(document).on('change', '#agent_layout', function(){

        var agent_layout = $('#agent_layout').val();

        $(".agent_detail_box_wrapper_lyt").removeClass (function (index, className) {
            return (className.match (/\bagent_det_box_layout_\S+/g) || []).join(' ');
        });

        $('.agent_detail_box_wrapper_lyt').addClass(agent_layout);
        $('.agent_wrapper').addClass(agent_layout);

    });
	
	$(document).on('change', '#agent_layout', function(){

        var agent_layout = $('#agent_layout').val();

        $(".agent_wrapper").removeClass (function (index, className) {
            return (className.match (/\bagent_det_box_layout_\S+/g) || []).join(' ');
        });
 
        $('.agent_wrapper').addClass(agent_layout);

    });
});