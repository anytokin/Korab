
			
			page_nr=1;
			function show_page(id,nr) {
				page_nr = nr;
				$("#"+id+page_nr).show();
				for(i=0; i<20; i++) if(i!=page_nr) {
					$("#"+id+i).hide();
				}
				//$("#"+id+page_nr).show();
			}
			
			$('document').ready( function(){
				
				show_page('page',1);
				
				show_page('gal_pok_1',2);
				show_page('gal_pok',1);
				
				/*$("#m1").click(function(){ show_page(1) });
				$("#m2").click(function(){ show_page(2) });
				$("#m3").click(function(){ show_page(3) });
				$("#m4").click(function(){ show_page(4) });
				
				$("#m6").click(function(){ show_page(6) });
				$("#m7").click(function(){ show_page(7) });
				$("#m8").click(function(){ show_page(8) });
				*/
			});