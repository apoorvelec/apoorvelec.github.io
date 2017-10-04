$(document).ready(function() {
    			$(window).scroll(function() {
      				// do whatever you need here.
      				var scrollPos = $(document).scrollTop();
      				var distFromTopForStickinessToStart = 100;
      				var introDivHeight = document.getElementById('intro_display').offsetHeight;
      				if(scrollPos>introDivHeight - distFromTopForStickinessToStart){
      					document.getElementById('menu_btn_list').style.position = "fixed";
      					document.getElementById('menu_btn_list').style.top = distFromTopForStickinessToStart;
      				}else{
      					document.getElementById('menu_btn_list').style.position = "absolute";
      					document.getElementById('menu_btn_list').style.top = introDivHeight;
      				}
    			});
			});
  			
  			function menuButtonClick(btnName){
  				var section_id = "";
  				switch(btnName){
  					case 'Profile':
  						section_id="#profile_section";
  						break;
  					case 'Experience':
  						section_id="#experience_section";
  						break;
  					case 'Abilities':
  						section_id="#abilities_section";
  						break;
  					case 'Projects':
  						section_id="#projects_section";
  						break;
  					case 'Contacts':
  						section_id="#contacts_section";
  						break;
  				}

  				$('html,body').animate({
        			scrollTop: $(section_id).offset().top},
        			'slow');
  			}