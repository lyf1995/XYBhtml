$(function(){
	$('.date_picker').date_input();
	//将日期表单中的yyyy-M-d转化为yyyy-MM-dd
	$('#startTime').on('change',function(){
		var startTime=this.value;
		var startTimeArr=startTime.split("-");
		if(startTimeArr[1].length<2)
		{
			startTimeArr[1]='0'+startTimeArr[1];
		}
		if(startTimeArr[2].length<2)
		{
			startTimeArr[2]='0'+startTimeArr[2];
		}
		var newStartTime=startTimeArr.join("-");
		this.value=newStartTime;
	});
	$('#endTime').on('change',function(){
		var endTime=this.value;
		var endTimeArr=endTime.split("-");
		if(endTimeArr[1].length<2)
		{
			endTimeArr[1]='0'+endTimeArr[1];
		}
		if(endTimeArr[2].length<2)
		{
			endTimeArr[2]='0'+endTimeArr[2];
		}
		var newEndTime=endTimeArr.join("-");
		this.value=newEndTime;
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
	$('#logo-right-ul li').eq(1).hover(
		function(){
			$('#logo-right-child-ul').stop(true,false).slideDown(300);
			$(this).children('img').attr('src','../../images/up2.png');
		},function(){
			$('#logo-right-child-ul').stop(true,false).slideUp(300);
			$(this).children('img').attr('src','../../images/down2.png');
		}
	);
});