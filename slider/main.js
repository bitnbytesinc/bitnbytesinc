// JavaScript Document
jQuery(document).ready(function ($) {

    /*
     * 	Scroll Script	
     * 	 
     */

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function () {      // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 800);
    });

    /*
     * 	Owl Slider Script	
     * 	 
     */
	 
	var bs_sponcers = $("#bs_sponcers");
    bs_sponcers.owlCarousel({
        items: 10, //10 items above 1000px browser width
        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [992, 4], // betweem 900px and 601px
        itemsTablet: [768, 4], //2 items between 600 and 0
        itemsMobile: [480, 1] // itemsMobile disabled - inherit from itemsTablet option
    }); 
	 // Custom Navigation Events
    $(".next").click(function () {
        bs_sponcers.trigger('owl.next');
    })
    $(".prev").click(function () {
        bs_sponcers.trigger('owl.prev');
    })

    var owl = $(".acadaemic");
    owl.owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [992, 3], // betweem 900px and 601px
        itemsTablet: [768, 2], //2 items between 600 and 0
        itemsMobile: [480, 1] // itemsMobile disabled - inherit from itemsTablet option
    });
    // Custom Navigation Events
    $(".next").click(function () {
        owl.trigger('owl.next');
    })
    $(".prev").click(function () {
        owl.trigger('owl.prev');
    })

    var timeline_owl = $(".timeline");
    timeline_owl.owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [992, 3], // betweem 900px and 601px
        itemsTablet: [768, 2], //2 items between 600 and 0
        itemsMobile: [480, 1] // itemsMobile disabled - inherit from itemsTablet option
    });
    // Custom Navigation Events
    $(".next").click(function () {
        timeline_owl.trigger('owl.next');
    })
    $(".prev").click(function () {
        timeline_owl.trigger('owl.prev');
    })

    var stories_owl = $(".stories");
    stories_owl.owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [992, 3], // betweem 900px and 601px
        itemsTablet: [768, 2], //2 items between 600 and 0
        itemsMobile: [480, 1] // itemsMobile disabled - inherit from itemsTablet option
    });
    // Custom Navigation Events
    $(".next").click(function () {
        stories_owl.trigger('owl.next');
    })
    $(".prev").click(function () {
        stories_owl.trigger('owl.prev');
    })


    var openday_owl = $(".openday");
    openday_owl.owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [992, 3], // betweem 900px and 601px
        itemsTablet: [768, 2], //2 items between 600 and 0
        itemsMobile: [480, 1] // itemsMobile disabled - inherit from itemsTablet option
    });
    // Custom Navigation Events
    $(".next").click(function () {
        openday_owl.trigger('owl.next');
    })
    $(".prev").click(function () {
        openday_owl.trigger('owl.prev');
    })

    var tourgal_owl = $(".tourgal");
    tourgal_owl.owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [992, 3], // betweem 900px and 601px
        itemsTablet: [768, 2], //2 items between 600 and 0
        itemsMobile: [480, 1] // itemsMobile disabled - inherit from itemsTablet option
    });
    // Custom Navigation Events
    $(".next").click(function () {
        tourgal_owl.trigger('owl.next');
    })
    $(".prev").click(function () {
        tourgal_owl.trigger('owl.prev');
    })

    /*
     * 	BX Slider Script	
     * 	 
     */

    $('.bxslider').bxSlider({
        pagerCustom: '#bx-pager'
    });

    /*
     * 	Inner Page Navigation Scrolling Script	
     * 	 
     */

	$('.inner-page .sub-navigation a').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top-200
		}, 500);
		return false;
	});
	
	if( $('header').length ){
		var stickyNavTop = $('header').offset().top;
		var stickyNav = function(){
			var scrollTop = $(window).scrollTop();
			if (scrollTop > stickyNavTop) { 
				$('.sub-navigation').addClass('sticky');
			} else {
				$('.sub-navigation').removeClass('sticky'); 
			}
		};
		stickyNav();
		$(window).scroll(function() {
			stickyNav();
		});
    }
	if ($('header').length) {
		var stickyNavvTop = $('header').offset().top;
		var stickyNavv = function () {
			var scrollTop = $(window).scrollTop();
			if (scrollTop > stickyNavTop) {
				$('.navbar-default').addClass('affix');
			}else{
				$('.navbar-default').removeClass('affix');
			}
		};
		stickyNavv();
		$(window).scroll(function () {
				stickyNavv();
		});
	}
	
    /*
     * 	Datepicker Script	
     */

	$( ".date_picker" ).datepicker({
		changeYear: true,
		yearRange: '1960:2028',
        changeMonth: true,
		dateFormat: 'dd/mm/yy',
	});
	
	
	/*
	 * Slider Scroll
	 */
	 
	var url = window.location.href;
	element_id= url.substring(url.lastIndexOf('#') + 1);
	if(element_id=='extra-curricular-slider'){
		var isIphone = /(iPhone)/i.test(navigator.userAgent);
		var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
		if(isIphone && isSafari){
			//alert("Safri Browser Width:"+viewportWidth+ " "+"Safri Browser Height:"+viewportHeight);
			$('html, body').animate({ scrollTop:  $('#'+element_id).offset().top + 500 }, 'slow');
		}
	}
	
	
	
	/*
     * 	Campus Locator Overlay Script	
     */

	$('map .place_map').on("click",function(){
		
		var place_id=$(this).attr('alt');
		var place_name=$(this).attr('title');
		var city_list = $('#wpsl-search-input');
		
		/*Custom Redirection For Belgium Code April 2018*/
		if(place_name=='Belgium'){
			$(this).attr('href','http://www.gymboree-classes.be/en/');
			$(this).attr('target','_blank');
		}else{
		
			$('.world-map-wrapper').fadeOut();
			$('#wpsl-country-list option').each(function(){
				if (this.value == place_id) {
					$(this).attr('selected','selected');	
				}
			});
			$('#wpsl-search-wrap .campus_cities').show();
			$.ajax({
				type:"POST",
				url: site_path.admin_url,
				data:{
					action: "get_school_cities",
					country_id: place_id,
				},
				success:function(data){
					city_list.find('option').remove();
					$('<option>').val(place_name).text("All").attr('selected','selected').appendTo(city_list);
					city_list.append(data);
					$('#wpsl-search-wrap .campus_cities').hide(2000);
					var city = $("#wpsl-search-input").val();
					var country = $("#wpsl-search-input option:first").val();
					if ( city!=country ) {
						var city_radius = $('.custom-search #wpsl-radius-dropdown option:first').attr('selected','selected');	
						$('.custom-search #wpsl-radius-dropdown option:last').removeAttr("selected");	
						$('#wpsl-radius .wpsl-selected-item').attr('data-value', city_radius.val());
						$('#wpsl-radius .wpsl-selected-item').text(city_radius.val());
						
					} else {
						var country_radius = $('.custom-search #wpsl-radius-dropdown option:last').attr('selected','selected');	
						$('.custom-search #wpsl-radius-dropdown option:first').removeAttr("selected");	
						$('#wpsl-radius .wpsl-selected-item').attr('data-value',country_radius.val());
						$('#wpsl-radius .wpsl-selected-item').text(country_radius.val());
					}
					$('#wpsl-search-btn').click();
				}
			});
		}	
	});	
	

	$('.beaconhouse-near-you .refresh').on("click",function(){
		var place_id=$(this).attr('alt');
		var place_name=$(this).attr('title');
		var city_list = $('#wpsl-search-input');
		
		/*Custom Redirection For Belgium Code April 2018*/
		if(place_name=='Belgium'){
			$(this).attr('href','http://www.gymboree-classes.be/en/');
			$(this).attr('target','_blank');
		}else{
		
			$('.world-map-wrapper').fadeIn();
			$('#wpsl-country-list option').each(function(){
				if (this.value == place_id) {
					$(this).attr('selected','selected');	
				}
			});
			$('#wpsl-search-wrap .campus_cities').show();
			$.ajax({
				type:"POST",
				url: site_path.admin_url,
				data:{
					action: "get_school_cities",
					country_id: place_id,
				},
				success:function(data){
					city_list.find('option').remove();
					$('<option>').val(place_name).text("All").attr('selected','selected').appendTo(city_list);
					city_list.append(data);
					$('#wpsl-search-wrap .campus_cities').hide(2000); 
					var city = $("#wpsl-search-input").val();
					var country = $("#wpsl-search-input option:first").val();
					if ( city!=country ) {
						var city_radius = $('.custom-search #wpsl-radius-dropdown option:first').attr('selected','selected');	
						$('.custom-search #wpsl-radius-dropdown option:last').removeAttr("selected");	
						$('#wpsl-radius .wpsl-selected-item').attr('data-value', city_radius.val());
						$('#wpsl-radius .wpsl-selected-item').text(city_radius.val());
						
					} else {
						var country_radius = $('.custom-search #wpsl-radius-dropdown option:last').attr('selected','selected');	
						$('.custom-search #wpsl-radius-dropdown option:first').removeAttr("selected");	
						$('#wpsl-radius .wpsl-selected-item').attr('data-value',country_radius.val());
						$('#wpsl-radius .wpsl-selected-item').text(country_radius.val());
					}	
					$('#wpsl-search-btn').click();
				}
			});
		}	
	});	
	
	
	$('#wpsl-country-list').change(function() {            
		var country_id;
		var country_name;
		if( $(this).val()!=='' ){
			country_id=$(this).val();
			country_name=$('#wpsl-country-list option[value="'+country_id+'"]').text();
			var city_list = $('#wpsl-search-input');
			$('#wpsl-search-wrap .campus_cities').show();
			$.ajax({
				type:"POST",
				url: site_path.admin_url,
				data:{
					action: "get_cities_list",
					country_id: country_id,
				},
				success:function(data){
					city_list.find('option').remove();
					$('<option>').val(country_name).text("All").attr('selected','selected').appendTo(city_list);
					city_list.append(data);
					$('#wpsl-search-wrap .campus_cities').hide(2000); 	
				}
			});
		}
	}); 
	
	
	$('.custom-search #wpsl-search-input').change(function(){
		var city = $("#wpsl-search-input").val();
		var country = $("#wpsl-search-input option:first").val();
		if ( city!=country ) {
			var city_radius = $('.custom-search #wpsl-radius-dropdown option:first').attr('selected','selected');	
			$('.custom-search #wpsl-radius-dropdown option:last').removeAttr("selected");	
			$('#wpsl-radius .wpsl-selected-item').attr('data-value', city_radius.val());
			$('#wpsl-radius .wpsl-selected-item').text(city_radius.val());
			
		} else {
			var country_radius = $('.custom-search #wpsl-radius-dropdown option:last').attr('selected','selected');	
			$('.custom-search #wpsl-radius-dropdown option:first').removeAttr("selected");	
			$('#wpsl-radius .wpsl-selected-item').attr('data-value',country_radius.val());
			$('#wpsl-radius .wpsl-selected-item').text(country_radius.val());
		}
	}); 
	
	
	//Load Condition
	$count_id=$('.custom-search #wpsl-country-list option:first').val();
	$count_name=$('.custom-search #wpsl-country-list option:first').text();
	var load_city_list = $('#wpsl-search-input');
	$.ajax({
		type:"POST",
		url: site_path.admin_url,
		data:{
			action: "load_country_cites",
			country_id: $count_id,
		},
		success:function(data){
			load_city_list.find('option').remove();
			$('<option>').val($count_name).text("All").attr('selected','selected').appendTo(load_city_list);
			load_city_list.append(data);
			$('#wpsl-search-wrap .campus_cities').hide(2000); 	
			$('#wpsl-search-btn').click();
		}
	});	
	
	
	
	
	
	
	/*
     * 	Alumni Form Script	
     */
	 
	$('.alumni_frm #cmb_country').change(function() {            
		var country_id;
		var current_id;
		if( $(this).val()!=='' ){
		$('.alumni_frm .city_loader').show(); 	
			country_id=$(this).val();
			current_id=$(this).attr('id');
			var country_cities = $('#cmb_city');
			var city_branch = $('#cmb_branch');
			var branch_class = $('#cmb_class');
			$.ajax({
				type:"POST",
				url: site_path.admin_url,
				data:{
					action: "alumni_info",
					country_id: country_id,
					current_id: current_id,
				},
				success:function(data){
					country_cities.find('option').remove();
					city_branch.find('option').remove();
					branch_class.find('option').remove();
					$('<option>').val("default").text("Select City").appendTo(country_cities);
					$('<option>').val("default").text("Select School").appendTo(city_branch);
					$('<option>').val("default").text("Select Class").appendTo(branch_class);
					country_cities.append(data);
					$('.alumni_frm .city_loader').hide(2000); 	
				}
			});
		}
	});
	
	
	$('.alumni_frm #cmb_city').change(function() {            
		var city_id;
		var current_id;
		if( $(this).val()!=='' ){
			city_id=$(this).val();
			current_id=$(this).attr('id');
			var city_branch = $('#cmb_branch');
			var branch_class = $('#cmb_class');
			$('.alumni_frm .branch_loader').show();
			$.ajax({
				type:"POST",
				url: site_path.admin_url,
				data:{
					action: "alumni_info",
					city_id: city_id,
					current_id: current_id,
				},
				success:function(data){
					city_branch.find('option').remove();
					branch_class.find('option').remove();
					$('<option>').val("default").text("Select School").appendTo(city_branch);
					$('<option>').val("default").text("Select Class").appendTo(branch_class);
					city_branch.append(data);
					$('.alumni_frm .branch_loader').hide(2000); 	
				}
			});
		}
	});
	
	$('.alumni_frm #cmb_branch').change(function() {            
		var branch_id;
		var current_id;
		if( $(this).val()!=='' ){
			branch_id=$(this).val();
			current_id=$(this).attr('id');
			var branch_class = $('#cmb_class');
			$('.alumni_frm .class_loader').show();
			$.ajax({
				type:"POST",
				url: site_path.admin_url,
				data:{
					action: "alumni_info",
					branch_id: branch_id,
					current_id: current_id,
				},
				success:function(data){
					branch_class.find('option').remove();
					$('<option>').val("default").text("Select Class").appendTo(branch_class);
					branch_class.append(data);
					$('.alumni_frm .class_loader').hide(2000); 	
				}
			});
		}
	}); 
	
	$('input#alumni_frm_submit').on("click", function(event) {
		//Prevent default anchor click behavior
        event.preventDefault();		
		 var isValid = [];
		$(".alumni_frm input,.alumni_frm select").each(function(){
			if( $( this ).hasClass( "required" ) ) {
				if( this.value==='default'){				
					$( this ).css('border','1px solid #f08392');
					$( this ).css('background','#fff0f3');
					isValid.push("false");
				}else if( this.value===''){				
					$( this ).css('border','1px solid #f08392');
					$( this ).css('background','#fff0f3');
					isValid.push("false");
				}else if( this.type=='email' ){
					var pattern = new RegExp(/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
					result=pattern.test(this.value);
					if(result==false){
						$( this ).css('border','1px solid #f08392');
						$( this ).css('background','#fff0f3');
						isValid.push("false");
					}
				}else{
					$( this ).css('border','');
					$( this ).css('background','');
				}	
	        }
        });
        if( $.inArray("false", isValid) > -1 ){
			alert("Please fill all fields marked with * correctly!")
		}else{	
			$('.alumni_frm .status').html('Sending Request..');
			$.ajax({
				type:"POST",
				url: site_path.admin_url,
				data:{
					action: "save_alumni_info",
					data:$('form.alumni_frm').serialize(),
				},
				success:function(data){
					if(data==='1'){
						$('.alumni_frm .status').html('');
						alert("Thank you very much for filling the form!");
						$('form.alumni_frm')[0].reset();
					}else{
						$('.alumni_frm .status').html('');
						alert("Please ensure that you have filled all form fields correctly and try again.");
					}
				}
			});
		}	
		
    }); 
	
	
	
	$('#other_school_name').change(function(){  
		if( $(this).is(':checked') ){
			$('#cmb_branch').attr('disabled', 'disabled');
			$('#cmb_class').attr('disabled', 'disabled');
			$('.alumni_school').css('display', 'block');
			$('#cmb_branch').removeClass('required');
			$('#cmb_class').removeClass('required');
			$('#cmb_branch').css('border','');
			$('#cmb_branch').css('background','');
			$('#cmb_class').css('border','');
			$('#cmb_class').css('background','');
			$('#cmb_branch').removeAttr("required");
			$('#cmb_class').removeAttr("required");			
			$('#school_name').addClass('required');
		}else{
			$('#cmb_branch').removeAttr("disabled");
			$('#cmb_class').removeAttr("disabled");
			$('.alumni_school').css('display', 'none');
			$('#school_name').removeClass('required');
			$('#school_name').val('');
			$('#cmb_branch').addClass('required');
			$('#cmb_class').addClass('required');
			$('#cmb_branch').attr('required', true);
			$('#cmb_class').attr('required', true);
		}	
	}); 
	
	
	/*
     * 	New Registration Form Script	
     */
	
	$('input#reg_btn').on("click", function(event) {
		//Prevent default anchor click behavior
        event.preventDefault();		
		 var isValid = [];
		$(".reg_frm input,.reg_frm select").each(function(){
			if( $( this ).hasClass( "required" ) ) {
				if( this.value==='default'){				
					$( this ).css('border','1px solid #f08392');
					$( this ).css('background','#fff0f3');
					isValid.push("false");
				}else if(this.value==''){
					$( this ).css('border','1px solid #f08392');
					$( this ).css('background','#fff0f3');
					isValid.push("false");
				}else if( this.type=='email' ){
					var pattern = new RegExp(/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
					result=pattern.test(this.value);
					if(result==false){
						$( this ).css('border','1px solid #f08392');
						$( this ).css('background','#fff0f3');
						isValid.push("false");
					}
				}else if( this.type=='tel' ){
					var pattern = new RegExp(/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/);
					result=pattern.test(this.value);
					if(result==false){
						$( this ).css('border','1px solid #f08392');
						$( this ).css('background','#fff0f3');
						isValid.push("false");
					}
				}else{
					$( this ).css('border','');
					$( this ).css('background','');
				}	
	        }
        });
        if( $.inArray("false", isValid) > -1 ){
			alert("Please fill all fields marked with * and with proper email address and phone number.")
		}else{	
			$('.reg_frm .status').html('Sending Request..');
			$.ajax({
				type:"POST",
				url: site_path.admin_url,
				data:{
					action: "save_reg_info",
					data:$('form.reg_frm').serialize(),
				},
				success:function(data){
					if(data==='1'){
						$('.reg_frm .status').html('');
						alert("Thank you for completing the form. Please visit the nearest branch to complete the registration process.");
						$('form.reg_frm')[0].reset();
					}else{
						$('.reg_frm .status').html('');
						alert("Please ensure that you have filled all form fields correctly and try again.");
					}
				}
			});
		}	
		
    }); 
	
	
	$('.reg_frm #bss_abss').change(function(){            
		var bss_abss;
		if( $(this).val()!=='' ){
			bss_abss=$(this).find("option:selected").text();
			if( bss_abss==='Other'|| bss_abss==='other'){
				$('.reg_frm .other').css("display","block");
				$('.reg_frm #other_reason').attr("required", true);
				$('.reg_frm #other_reason').addClass("required");
			}else{
				$('.reg_frm .other').css("display","none");
				$('.reg_frm #other_reason').removeAttr("required");
				$('.reg_frm #other_reason').removeClass("required");
			}
		}
	});
	
	$('.reg_frm #branch_city').change(function() {            
		var city_id;
		var current_id;
		if( $(this).val()!=='' ){
			city_id=$(this).val();
			current_id=$(this).attr('id');
			var branch = $('#branch');
			var branch_class = $('#branch_class');
			$('.reg_frm .school_loader').show();
			
			$.ajax({
				type:"POST",
				url: site_path.admin_url,
				data:{
					action: "reg_info",
					city_id: city_id,
					current_id: current_id,
				},
				success:function(data){
					branch.find('option').remove();
					branch_class.find('option').remove();
					$('<option>').val("default").text("Select School").appendTo(branch);
					$('<option>').val("default").text("Select Class").appendTo(branch_class);
					branch.append(data);
					$('.reg_frm .school_loader').hide(2000); 	
				}
			});
		}
	});
	
	$('.reg_frm #branch').change(function(){            
		var branch_id;
		var current_id;
		if( $(this).val()!=='' ){
			branch_id=$(this).val();
			current_id=$(this).attr('id');
			var branch_class = $('#branch_class');
			$('.reg_frm .school_class').show();
			$.ajax({
				type:"POST",
				url: site_path.admin_url,
				data:{
					action: "reg_info",
					branch_id: branch_id,
					current_id: current_id,
				},
				success:function(data){
					branch_class.find('option').remove();
					$('<option>').val("default").text("Select Class").appendTo(branch_class);
					branch_class.append(data);
					$('.reg_frm .school_class').hide(2000); 	
				}
			});
		}
	});
	
	
	
	
	
	/*
     * 	School Registration Form Script	
     */
	

	$('.register_frm #school_city').change(function() {            
		var city_id;
		var current_id;
		if( $(this).val()!=='' ){
			city_id=$(this).val();
			current_id=$(this).attr('id');
			var school = $('#school');
			var school_class = $('#school_class');
			$('.register_frm .school_loader').show();
			
			$.ajax({
				type:"POST",
				url: site_path.admin_url,
				data:{
					action: "school_info",
					city_id: city_id,
					current_id: current_id,
				},
				success:function(data){
					school.find('option').remove();
					school_class.find('option').remove();
					$('<option>').val(" ").text("Select School").appendTo(school);
					$('<option>').val(" ").text("Select Class").appendTo(school_class);
					school.append(data);
					$('.register_frm .school_loader').hide(2000); 	
				}
			});
		}
	});
	
	$('.register_frm #school').change(function(){            
		var branch_id;
		var current_id;
		if( $(this).val()!=='' ){
			branch_id=$(this).val();
			current_id=$(this).attr('id');
			var school_class = $('#school_class');
			$('.register_frm .school_class').show();
			$.ajax({
				type:"POST",
				url: site_path.admin_url,
				data:{
					action: "school_info",
					branch_id: branch_id,
					current_id: current_id,
				},
				success:function(data){
					school_class.find('option').remove();
					$('<option>').val(" ").text("Select Class").appendTo(school_class);
					school_class.append(data);
					$('.register_frm .school_class').hide(2000); 	
				}
			});
		}
	});
	
	$('.register_frm input[type="checkbox"]').click(function(){
		if( $( this ).attr("name")==='t2_chk_email'){
			if( $(this).is(':checked') ){
				$(this).val('Y');
			}else{
				$(this).val('N');
				
			}	 
		}else if( $( this ).attr("name")==='t2_chk_newspaper'){
			if( $(this).is(':checked') ){
				 $(this).val('Y');
			}else{
				$(this).val('N');
			}	 
		}else if( $( this ).attr("name")==='t2_chk_magazine'){

			if( $(this).is(':checked') ){
				 $(this).val('Y');
			}else{
				$(this).val('N');
			}	 
		}else if( $( this ).attr("name")==='t2_chk_word_of_mouth'){
			if( $(this).is(':checked') ){
				 $(this).val('Y');
			}else{
				$(this).val('N');
			}	 
		}else if( $( this ).attr("name")==='t2_chk_bss_staff'){
			if( $(this).is(':checked') ){
				 $(this).val('Y');
			}else{
				$(this).val('N');
			}	 
		}else if( $( this ).attr("name")==='t2_chk_others'){
			if( $(this).is(':checked') ){
				 $(this).val('Y');
			}else{
				$(this).val('N');
			}	 
		}
	});
	
	
	
	$('input#reg_frm_submit').on("click", function(event) {
		//Prevent default anchor click behavior
        event.preventDefault();		
		 var isValid = [];
		$(".register_frm input,.register_frm textarea,.register_frm select,.register_frm checkbox").each(function() {
			if( $( this ).hasClass( "required" ) ) {
				if( this.value===''){				
					$( this ).css('border','1px solid #f08392');
					$( this ).css('background','#fff0f3');
					isValid.push("false");
				}else if( $.trim($(this).val()).length===0 ){
					$( this ).css('border','1px solid #f08392');
					$( this ).css('background','#fff0f3');
					isValid.push("false");
				}else if( $( this ).attr("name")==='chk_agree'){
					if( $(this).prop('checked')=== false )
						isValid.push("false");
				}else{
					$( this ).css('border','');
					$( this ).css('background','');
				}	
	        }
        });
        if( $.inArray("false", isValid) > -1 ){
			alert("Please fill all required fields and agree to the terms and conditions.")
		}else{	
			$.ajax({
				type:"POST",
				url: site_path.admin_url,
				data:{
					action: "save_school_info",
					data:$('form.register_frm').serialize(),
				},
				success:function(data){
					if(data==='1'){
						alert("Thank you very much for filling the form!");
						$('form.register_frm')[0].reset();
					}else{
						alert("Please ensure that you have filled all form fields correctly and try again.");
					}
				}
			});
		}	
		
    });  
	
	
	//On Change Address Info
	$('input[type=checkbox][name=address]').on("click", function(){
		var mail_add=$('.tab-content .mail_address').val();
		var mail_postal_code=$('.tab-content .mail_postal_code').val();
		if( this.checked===true ){
			$('.tab-content .permanent_address').val(mail_add);
			$('.tab-content .permanent_postal_code').val(mail_postal_code);
		}else{
			$('.tab-content .permanent_address').val('');
			$('.tab-content .permanent_postal_code').val('');
		}
		
	});	 
	
	
	//On Change Accademic Year
	$('input[type=radio][name=acad_year]').on("click", function(){
		var c_acad_year=$('.tab-content #c_acad_year');
		var n_acad_year=$('.tab-content #n_acad_year');
		if( $(this).attr('id')==='curr_year' ){
			c_acad_year.css('display','block');
			n_acad_year.css('display','none');
			n_acad_year.removeClass('required');
			n_acad_year.removeAttr('required');
		}else{
			c_acad_year.css('display','none');
			n_acad_year.css('display','block');
			c_acad_year.removeClass('required');
			c_acad_year.removeAttr('required');
		}
		
	});	 
	
	//On Load Guardian Tab
	var guardian_tab=$('.nav-tabs .guardian-info');
	if(this.value==='G'){
		guardian_tab.css('display','block');
	}else{
		guardian_tab.css('display','none');
	}	
	
	//On Change Guardian Tab
	var guardian_val;
	$('input[type=radio][name=t2_chk_custody]').change(function() {
		var guardian_tab=$('.nav-tabs .guardian-info');
		guardian_val=this.value;
		if(this.value==='G'){
			guardian_tab.css('display','block');
		}else{
			guardian_tab.css('display','none');
		}	
	});	
	
	
	//On Click Form Tab Active State
	$(".nav-tabs li a").on("click", function(){
		var tab=$(this).attr('class');
		var prev_tab=$('.action_btn .prev');
		var next_tab=$('.action_btn .next');
		if(tab=='school-info'){
			prev_tab.css('display','none');
		}else{
			prev_tab.css('display','block');
		}
		if(tab=='verify-info'){
			next_tab.css('display','none');
		}else{
			next_tab.css('display','block');
		}
    });
	

	$('.register_frm .next').on("click", function(event) {
		 var isValid = [];
		 var current;
		 var index;
		$(".register_frm .tab-content .tab-pane").each(function() {
			var $this = $(this);
			if($this.hasClass('active')){
				current=$this.attr('id');
				index=$this.index();
				$('input,textarea,select',$this).each(function(){
					if($( this ).hasClass('required')){
						if( this.value==='' ){
							$( this ).css('border','1px solid #f08392');
							$( this ).css('background','#fff0f3');
							isValid.push("false");
						}else if( $.trim($(this).val()).length===0 ){
							$( this ).css('border','1px solid #f08392');
							$( this ).css('background','#fff0f3');
							isValid.push("false");
						}else{
							$( this ).css('border','');
							$( this ).css('background','');
						}	
					}
				});
			}
		});
		
		if( $.inArray("false", isValid) > -1 ){
			alert("Please fill all fields marked with*")
		}else{
			
			if($('#'+current).next()!=='school-info'){
				$('.action_btn .prev').css('display','block');
			}
			if($('#'+current).next().attr('id')==='verify-info'){
				$('.action_btn .next').css('display','none');
			}
		
			if(guardian_val!=='G'){
				if(current==='mother-info'){
					$('.nav-tabs li .'+current).parent().removeClass('active');
					$('.nav-tabs li').eq(index+2).addClass('active');
					$('#'+current).removeClass('active');
					$('#'+current).next().next().addClass('active');
					$('.tab-content #guardian-info input,.tab-content #guardian-info select').removeClass('required');
					$('.tab-content #guardian-info input,.tab-content #guardian-info select').removeAttr('required');
					$('.tab-content #guardian-info input').val('');
					$('.tab-content #guardian-info select').val('');
					if($('#'+current).next().next().attr('id')==='verify-info'){
						$('.action_btn .next').css('display','none');
					}
				}else{
					$('.nav-tabs li .'+current).parent().removeClass('active');
					$('.nav-tabs li').eq(index+1).addClass('active');
					$('#'+current).removeClass('active');
					$('#'+current).next().addClass('active');
				}
			}else{
				$('.tab-content #guardian-info input,.tab-content #guardian-info select').addClass('required');
				$('.tab-content #guardian-info input,.tab-content #guardian-info select').attr('required');
				$('.tab-content #guardian-info #employee_id').removeClass('required');
				$('.tab-content #guardian-info #employee_id').removeAttr('required');
				$('.nav-tabs li .'+current).parent().removeClass('active');
				$('.nav-tabs li').eq(index+1).addClass('active');
				$('#'+current).removeClass('active');
				$('#'+current).next().addClass('active');
			}
		}
	
	});
	

	$('.register_frm .prev').on("click", function(event){
		 var current;
		 var index;
		$(".register_frm .tab-content .tab-pane").each(function() {
			var $this = $(this);
			if($this.hasClass('active')){
				current=$this.attr('id');
				index=$this.index();
			}
		});
			
		if($('#'+current).prev()!=='school-info'){
			$('.action_btn .next').css('display','block');
		}
		if($('#'+current).prev().attr('id')==='school-info'){
			$('.action_btn .prev').css('display','none');
		}
		if(guardian_val!=='G'){
			if(current==='verify-info'){
				$('.nav-tabs li .'+current).parent().removeClass('active');
				$('.nav-tabs li').eq(index-2).addClass('active');
				$('#'+current).removeClass('active');
				$('#'+current).prev().prev().addClass('active');
			}else{
				$('.nav-tabs li .'+current).parent().removeClass('active');
				$('.nav-tabs li').eq(index-1).addClass('active');
				$('#'+current).removeClass('active');
				$('#'+current).prev().addClass('active');
			}
		}else{
			$('.nav-tabs li .'+current).parent().removeClass('active');
			$('.nav-tabs li').eq(index-1).addClass('active');
			$('#'+current).removeClass('active');
			$('#'+current).prev().addClass('active');
		}	
	});
		

});