var App = {
	init:function(){
		this.datetime();
		this.side.nav();
		this.navigation();
		this.hyperlinks();
		setInterval('App.datetime();',1000);
	},
	datetime:function(){
		var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
		var montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December")
		var d=new Date()
		var year=d.getYear()
		if (year < 1000)
		year+=1900
		var day=d.getDay()
		var month=d.getMonth()
		var daym=d.getDate()
		if (daym<10)
		daym="0"+daym
		var hours=d.getHours()
		var minutes=d.getMinutes()
		var seconds=d.getSeconds()
		var dn="AM"
		if (hours>=12)
		dn="PM"
		if (hours>12){
		hours=hours-12
		}
		if (hours==0)
		hours=12
		if (minutes<=9)
		minutes="0"+minutes
		if (seconds<=9)
		seconds="0"+seconds

		$('.welcome .datetime .day').text(dayarray[day]);
		$('.welcome .datetime .date').text(montharray[month]+' '+daym+', '+year);
		$('.welcome .datetime .time').text(hours+':'+minutes+':'+seconds+' '+dn);
	},
	title:function(t){
		return $('.header>.title').text(t);
	},
	side:{
		nav:function(){
			this.toggle();
			this.navigation();
		},
		toggle:function(){
			$('.ion-ios-navicon').on('touchstart click', function(e){
				e.preventDefault();
				$('.sidebar').toggleClass('active');
				$('.nav').removeClass('active');
				$('.sidebar .sidebar-overlay').removeClass('fadeOut animated').addClass('fadeIn animated');
			});
			$('.sidebar .sidebar-overlay').on('touchstart click',function(e){
				e.preventDefault();
				$('.ion-ios-navicon').click();
				$(this).removeClass('fadeIn').addClass('fadeOut');
			});
		},
		navigation:function(){
			$('.nav-left a').on('touchstart click', function(e){
				e.preventDefault();
				var nav = $(this).attr('href').replace('#','');
				$('.sidebar').toggleClass('active');
				$('.html').removeClass('visible');
				if(nav=='home' || nav=='' || nav==null){
					$('.html.welcome').addClass('visible');
				}else{
					$('.html.'+nav).addClass('visible');
				}
				App.title($(this).text());
			});
		}
	},
	navigation:function(){
		$('.nav .mask').on('touchstart click',function(e){
			e.preventDefault();
			$(this).parent().toggleClass('active');
		});
	},
	hyperlinks:function(){
		$('.nav .nav-item').on('click',function(e){
			e.preventDefault();
			var page = $(this).attr('href').replace('#','');
			$('.html').removeClass('visible');
			$('.html.'+page).addClass('visible');
			$('.nav').toggleClass('active');
			App.title($(this).text());
		});
	}
}