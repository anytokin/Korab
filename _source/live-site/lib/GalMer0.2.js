

function GalleryMerge (id, name, number_of_images, display, trans)
{
	this.target_selector = target;
	this.img_name = name;
	this.number = number_of_images;
	this.displ_time = display;
	this.trans_time = trans;
	this.total_time = this.displ_time + this.trans_time;
	this.timeout = null;
	this.nr = 0;
	this.next_nr = 1;
	
	var target='#'+id;
	var id_inside=id+'_inside';
	var target_inside='#'+id_inside;
	this.back_id = target;
	this.id = id;
	this.front_id = target_inside;
	var t=this;
	
	
	this.pause = function() {
		if(this.timeout != null) {
			clearTimeout(this.timeout);
			this.timeout = null;
		}
	}
	this.play = function() {
		if(this.timeout == null)
			this.timeout = setTimeout(this.nextImage,10);
	}
	
	this.setImg = function(name) {
		this.img_name = name;
		
		if(this.timeout != null) {
			clearTimeout(this.timeout);
			this.timeout = setTimeout(this.nextImage,10);
		}else{
			$(this.front_id).css('display', 'none');
		}
	}
	this.disable = function() {
		$(this.back_id).html('');
		$(this.back_id).css('display', 'none');
	}
	this.enable = function() {
		var img0 = this.img_name+(this.nr)+'.jpg';
		var img1 = this.img_name+((this.next_nr)%this.number)+'.jpg';
		
		var target='#'+this.id;
		var target_inside='#'+this.id+'_inside';
		var id_inside=this.id+'_inside';
		
		$(this.back_id).html('<div id="'+id_inside+'"></div>');
		
		$(this.front_id).css('width', '100%');
		$(this.front_id).css('height', '100%');
		
		$(this.front_id).css('background-size', '100% 100%');
		$(this.back_id).css('background-size', '100% 100%');
		
		$(this.front_id).css('background-image', 'url('+img0+')');  // current image
		$(this.back_id).css('background-image', 'url('+img1+')');			// next image
	
		$(this.back_id).css('display', 'block');
	
		var test = $(target);
		test = $(this.front_id);
		
		this.timeout = setTimeout(this.nextImage,10);
	}
	
	this.nextImage = function() {
		console.log('nextImage(), nr:'+t.nr);
		
		t.nr = t.next_nr;
		t.next_nr++;
		
		//var img0 = t.img_name+(t.nr)+'.jpg';
		
		var target='#'+id;
		var target_inside='#'+id+'_inside';
		
		t.timeout=null;
		$(t.front_id).fadeOut(t.trans_time, function() {
		var img1 = t.img_name+((t.nr)%t.number)+'.jpg';
		var img2 = t.img_name+((t.next_nr)%t.number)+'.jpg';
			$(t.front_id).css('background-image', 'url('+img1+')'); 
			$(t.front_id).show();
			
			// patch 0.1.1 (dodatkowe 50 ms ¿eby ukryæmigotanie)
			//$(t.back_id).css('background-image', 'url('+img2+')');
			setTimeout(function(){ $(t.back_id).css('background-image', 'url('+img2+')'); },50);
			
			if(t.timeout==null)
				t.timeout = setTimeout(t.nextImage,t.displ_time);	
		});
		$(t.front_id).fadeIn(789);
	}
	
	this.enable();
	
	var test = $(target);
	test = $(this.front_id);
	this.timeout = setTimeout(this.nextImage,10);
	
}

