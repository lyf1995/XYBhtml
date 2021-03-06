$(function(){
	$('.date_picker').date_input();
	//将日期表单中的yyyy-M-d转化为yyyy-MM-dd
	$('#birth').on('change',function(){
		var birth=this.value;
		var birthArr=birth.split("-");
		if(birthArr[1].length<2)
		{
			birthArr[1]='0'+birthArr[1];
		}
		if(birthArr[2].length<2)
		{
			birthArr[2]='0'+birthArr[2];
		}
		var newBirth=birthArr.join("-");
		this.value=newBirth;
	});

	/*header*/
	var oExtImg=$('a.a-ext').children('img');
	var oInfoImg=$('a.a-info').children('img');
	var oSetImg=$('a.a-set').children('img');
	$('a.a-ext').hover(
		function(){
			$(this).removeClass('out');
			$(this).addClass('over');
			oExtImg.remove();
		},
		function(){
			oExtImg.prependTo($('a.a-ext'));
			$(this).removeClass('over');
			$(this).addClass('out');
	});
	$('a.a-info').hover(
		function(){
			$(this).removeClass('out');
			$(this).addClass('over');
			oInfoImg.remove();
		},
		function(){
			$(this).removeClass('over');
			$(this).addClass('out');
			oInfoImg.prependTo($('a.a-info'));
	});
	$('a.a-set').hover(
		function(){
			$(this).removeClass('out');
			$(this).addClass('over');
			oSetImg.remove();
		},
		function(){
			$(this).removeClass('over');
			$(this).addClass('out');
			oSetImg.prependTo($('a.a-set'));
	});
	$('div.a-wel').hover(
		function(){
			$(this).removeClass('out-up');
			$(this).addClass('over-down');
			$(this).children('ul').css('display','block');
			$(this).children('img').attr('src','../../images/up.png');
		

		},
		function(){
			$(this).removeClass('over-down');
				$(this).addClass('out-up');
			$(this).children('ul').css('display','none');
			$(this).children('img').attr('src','../../images/down.png');
		});
	$('#logo-right-ul li').eq(2).hover(
		function(){
			$('#logo-right-child-ul').stop(true,false).slideDown(300);
			$(this).children('img').attr('src','../../images/up2.png');
		},function(){
			$('#logo-right-child-ul').stop(true,false).slideUp(300);
			$(this).children('img').attr('src','../../images/down2.png');
		}
	);
	
	$('#show-picture').on('click',function(){
		$('#pictureFile').click();
	});

	$('#pictureFile').on('change',function(){
		var r= new FileReader();
		f=document.getElementById('pictureFile').files[0];
		r.readAsDataURL(f);
		r.onload=function(e){
			document.getElementById('show-picture').src=this.result;
		};
	});

});