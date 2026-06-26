
		var numer = Math.floor(Math.random()*5)+1;
			
			var id_migajacy_element = '#slider'; id_migajacy_element = '#img';
			var okres = 8050;
			var czas_tego_znikania = 3000;
			var timer1 = 0;
			var timer2 = 0;
			
			function ustawslajd(nrslajdu)
			{
				clearTimeout(timer1);
				clearTimeout(timer2);
				numer = nrslajdu - 1;
				
				schowaj();
				setTimeout("zmienslajd()", czas_tego_znikania);
				
			}
			
			function schowaj()
			{
				$("#slider").css("background-image", "url(slajdy/slajd" + ((numer)%5+1) + ".jpg)"); 
				console.log (numer) ;
				$(id_migajacy_element).fadeOut(czas_tego_znikania);
			}
		
			function zmienslajd()
			{
				
				numer++; if (numer>5) numer=1;
				
				
				//var plik = "<img id=\"img\" src=\"slajdy/slajd" + numer + ".jpg\"  />";
				
				//$("#slider").css.backgroundImage("slajdy/slajd" + numer + ".jpg");
				//$("#slider").css("background-image", "url(slajdy/slajd" + numer + ".jpg)"); 
				$('#img').attr('src',"slajdy/slajd" + numer + ".jpg");
				
				
				//document.getElementById("slider").innerHTML = plik;
				//$("#slider").html(plik);
				$(id_migajacy_element).fadeIn(1000);
				
				timer1 = setTimeout("zmienslajd()", okres);
				timer2 = setTimeout("schowaj()", okres-czas_tego_znikania);
			
			}
			
			
			$('document').ready( function(){
				zmienslajd();
			});
			