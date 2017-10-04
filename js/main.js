$(document).ready(function() {
    			$(window).scroll(function() {
      				// do whatever you need here.
      				var scrollPos = $(document).scrollTop();
              console.log(scrollPos);
      				var distFromTopForStickinessToStart = 100;
      				var introDivHeight = document.getElementById('intro_display').offsetHeight;
      				if(scrollPos>introDivHeight - distFromTopForStickinessToStart){
      					document.getElementById('menu_btn_list').style.position = "fixed";
      					document.getElementById('menu_btn_list').style.top = distFromTopForStickinessToStart;
                if(scrollPos>3800){
                  rotate("show-burst-mode");
                }else{
                  rotate("show-back");
                }
      				}else{
      					document.getElementById('menu_btn_list').style.position = "absolute";
      					document.getElementById('menu_btn_list').style.top = introDivHeight;
                rotate("show-front");
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

/*For the cube animation part*/

function rotate(condition){
      var cube = document.getElementById("cube");
      switch(condition){
        case 'show-front':
          cube.className = "show-front";
          break;
        case 'show-back':
          cube.className = "show-back";
          break;
        case 'show-top':
          cube.className = "show-top";
          break;
        case 'show-bottom':
          cube.className = "show-bottom";
          break;
        case 'show-right':
          cube.className = "show-right";
          break;
        case 'show-left':
          cube.className = "show-left";
          break;
        case 'show-burst-mode':
          cube.className = "show-burst-mode";
          break;
      }
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    setInterval(function () {
          rotateRandomCards();
      }, 2000);

      function rotateRandomCards(){
        var cube = document.getElementById("cube");
        if(cube.className === "show-burst-mode"){
          var cardno = getRandomInt(1,7);

          switch(cardno){
            case 1:
              document.getElementById("top").classList.toggle("animated-top-win10");
              break;
            case 2:
              document.getElementById("bottom").classList.toggle("animated-bottom-win10");
              break;
            case 3:
              document.getElementById("front").classList.toggle("animated-front-win10");
              break;
            case 4:
              document.getElementById("back").classList.toggle("animated-back-win10");
              break;
            case 5:
              document.getElementById("right").classList.toggle("animated-right-win10");
              break;
            case 6:
              document.getElementById("left").classList.toggle("animated-left-win10");
              break;
          }
        }else if(cube.className === "show-front"){
          rotate('show-back');
        }else if(cube.className === "show-back"){
          rotate("show-right");
        }else if(cube.className === "show-right"){
          rotate("show-left");
        }else if(cube.className === "show-left"){
          rotate("show-top");
        }else if(cube.className === "show-top"){
          rotate("show-bottom");
        }else if(cube.className === "show-bottom"){
          rotate("show-front");
        }
        
      }

/*End cube animation part*/