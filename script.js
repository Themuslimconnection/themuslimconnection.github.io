var i = 1;


function scrollup() {
$('html, body').animate({
	scrollTop: $("body").offset().top
	}, 500);
}

function scrolldown() {
$('html, body').animate({
	scrollTop: $("#secondpanel").offset().top
	}, 500);
}
$(function() {
      $('#slides').slidesjs({
        width: 1600,
        height: 550,
        play: {
          active: true,
          auto: true,
          interval: 4000,
          swap: true
        }
      });
    });
	
function aboutus() {
	if (i == 1) {
	i = 2;
	$('div#homediv').fadeOut(555);
	$("#headerslider").fadeOut(400);
	$("#headerslider2").fadeOut(400);
		setTimeout(function() {
			$('div#aboutus').fadeIn(100);
			$("#headerslider").fadeIn(300).attr("src","https://scontent-a-atl.xx.fbcdn.net/hphotos-xpa1/t31.0-8/1926164_238914726232919_8687177358005961372_o.jpg");
			$("#headerslider2").fadeIn(300).attr("src","https://scontent-b-atl.xx.fbcdn.net/hphotos-xfp1/t31.0-8/1941457_238914636232928_5947990824316941176_o.jpg");
		}, 400);
		scrollup();
	} else if (i == 2) {
	scrolldown();
	} else if (i == 3) {
	i = 2;
	$('div#container').show("slow");
	$('div#videocol').fadeOut(375);
	setTimeout(function() {
			$('div#aboutus').fadeIn(100);
			$("#headerslider").fadeIn(300).attr("src","https://scontent-a-atl.xx.fbcdn.net/hphotos-xpa1/t31.0-8/1926164_238914726232919_8687177358005961372_o.jpg");
			$("#headerslider2").fadeIn(300).attr("src","https://scontent-b-atl.xx.fbcdn.net/hphotos-xfp1/t31.0-8/1941457_238914636232928_5947990824316941176_o.jpg");
		}, 400);
	
	}
	if (i == 4) {
	i = 2;
$("#headerslider").fadeIn(300).attr("src","https://scontent-a-atl.xx.fbcdn.net/hphotos-xpa1/t31.0-8/1926164_238914726232919_8687177358005961372_o.jpg");
	$("#headerslider2").fadeIn(300).attr("src","https://scontent-b-atl.xx.fbcdn.net/hphotos-xfp1/t31.0-8/1941457_238914636232928_5947990824316941176_o.jpg");
	$( ".mapps" ).fadeOut(175);
	$('div#contactus').fadeOut(375);
	$('div#container').show("slow");
	$('div#slides').show("slow");
	setTimeout(function() {
	$('div#aboutus').fadeIn(100);
	
	}, 400);
	
	}
	
}

function home() {
	if (i == 1) {
	scrolldown();
	}
	
	if  (i == 2) {
	scrollup();
	$('div#aboutus').fadeOut(555);
	$("#headerslider").fadeOut(400);
	$("#headerslider2").fadeOut(400);
	setTimeout(function() {
		$('div#homediv').fadeIn(375);
		$("#headerslider").fadeIn(100).attr("src","http://fc01.deviantart.net/fs71/i/2013/308/a/8/faisal_masjid__islamabad_by_amjad_miandad-d6swywz.jpg");
		$("#headerslider2").fadeIn(100).attr("src","http://3.bp.blogspot.com/-6RU50x4xLw0/ULJPHWuTHTI/AAAAAAAAAY0/jfF6LbzkE30/s1600/D7K_1848_sj.jpg");
	}, 400);
	i = 1;
	}
	if (i == 3) {
	i = 1;
	
	$('div#container').show("slow");
	$('div#slides').show("slow");
	$('div#videocol').fadeOut(375);
	setTimeout(function() {
		$('div#homediv').fadeIn(375);
		$("#headerslider").fadeIn(100).attr("src","http://fc01.deviantart.net/fs71/i/2013/308/a/8/faisal_masjid__islamabad_by_amjad_miandad-d6swywz.jpg");
		$("#headerslider2").fadeIn(100).attr("src","http://3.bp.blogspot.com/-6RU50x4xLw0/ULJPHWuTHTI/AAAAAAAAAY0/jfF6LbzkE30/s1600/D7K_1848_sj.jpg");
	}, 400);
	}
	if (i == 4) {
	i = 1;
	$( ".mapps" ).fadeOut(175);
	$('div#contactus').fadeOut(375);
	$('div#container').show("slow");
	$('div#slides').show("slow");
	setTimeout(function() {
	$('div#homediv').fadeIn(375);
	$("#headerslider").fadeIn(100).attr("src","http://fc01.deviantart.net/fs71/i/2013/308/a/8/faisal_masjid__islamabad_by_amjad_miandad-d6swywz.jpg");
	$("#headerslider2").fadeIn(100).attr("src","http://3.bp.blogspot.com/-6RU50x4xLw0/ULJPHWuTHTI/AAAAAAAAAY0/jfF6LbzkE30/s1600/D7K_1848_sj.jpg");
	}, 400);
	
	}
}

function video() {
	if (i == 1 | i == 2) {
	i = 3;
	$('div#container').hide("slow");
	$('div#aboutus').fadeOut(555);
	$('div#homediv').fadeOut(555);
	scrollup();
	setTimeout(function() {
		$('div#videocol').fadeIn(375);
	}, 400);
	}
	if (i = 4) {
	i = 3;
	$( ".mapps" ).fadeOut(375);
	$('div#mapps').fadeOut(375);
	$('div#videocol').fadeIn(375);
	$('div#slides').show("slow");
	$('div#container').hide("slow");
	}
}

function contactus() {
	if (i == 1 | i == 2) {
		i = 4;
		$('div#slides').hide("slow");
		$('div#aboutus').fadeOut(555);
		$('div#homediv').fadeOut(555);
		scrollup();
		setTimeout(function() {
			$( ".mapps" ).fadeIn(375);
			$('div#contactus').fadeIn(375);
		}, 400);
	}
if (i == 3) {
	i = 4;	
	$('div#videocol').fadeOut(375);
	$('div#slides').hide("slow");
	$('div#container').show("slow");
	setTimeout(function() {
			$( ".mapps" ).fadeIn(375);
			$('div#contactus').fadeIn(375);
	}, 400);
}
}

