
//	ban部分的轮播图
	var swiper = new Swiper('.ban .swiper-container',{
	  effect: 'fade',
      autoplay:true,
      loop:true,
      spaceBetween: 500,
      speed:500,
       navigation: {
        nextEl: '.ban .swiper-button-next',
        prevEl: '.ban .swiper-button-prev'
      },
       pagination: {
        el: '.ban .swiper-pagination'
      }
 	 });
// 小米闪购部分的轮播图
  	var swiper = new Swiper('.shopuls .swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.end_left .swiper-button-next',
        prevEl: '.end_left .swiper-button-prev',
      },
    });
//推荐部分的轮播图
     var swiper = new Swiper('.Recommend .swiper-container', {
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 4,
      loop: false,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.Recommend .swiper-button-next',
        prevEl: '.Recommend .swiper-button-prev',
      },
    });
//视频部分的轮播图
     var swiper = new Swiper('.content_down .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.content_down .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.content_down .swiper-button-next',
        prevEl: '.content_down .swiper-button-prev',
      },
    });
//jquery
	$(function(){
	function analysisCookie(item){//解析Cookie
	    var content=unescape(document.cookie);
	    var cookcon=content.split("; ");
	    for(var i in cookcon){
	       if(cookcon[i].indexOf(item+"=")==0){
	        return cookcon[i].substring(cookcon[i].indexOf("=")+1);
	       } 
	    }
	    return null;
	}
	if(analysisCookie("username")!="null"){
		$(".login_cookie").html("欢迎您："+analysisCookie("username"));
	}
	
//	一键置顶
    $(document).scroll(function () { 
        let scrollTop =  document.documentElement.scrollTop || document.body.scrollTop ;
        if(scrollTop>600){
            $(".scrtop").show();
        }else{
            $(".scrtop").hide(); 
        }
	});
	 $(".scrtop").click(function (e) { 
	        e.preventDefault();
	        $('body,html').animate({ "scrollTop": 0 }, 500);
	        // return false;
	    });
//购物车滑过时候绑定的事件
		$(".car").mouseenter(function(){
					$(".car").slideDown(1000);
					$(".car").children("h2").css({
						"background-color":"#fff",
						"color":"#f66e13"
					})
					$(this).find(".shopping").css({
						"display":"block",
						"height":"85px",
						"z-index":50,
						"background-color":"#fff"
					})
				})
		$(".car").mouseleave(function(){
			$(".car").children("h2").css({
				"background-color":"#333333",
				"color":"#B0B0B0"	
			})
			$(this).find(".shopping").css({
				"display":"none",
				"height":"0px"
			})
		})
		$(".car h2").click(function(){
			window.location.href="shopping.html";
		})
//logo右边的ul绑定的事件
		$(".schoolkai li").mouseenter(function(){
				$(this).children(".city").slideDown(500);
			})
		$(".schoolkai li").mouseleave(function(){
			$(this).find(".city").css({
				"display":"none"
			})
		})
//搜索框的点击事件
		$(".txt").on("click",function(){
			$(".numboxUl").show();
		})
		$("body").on("click",function(event){
			let target=event.target;
			if(target.className=="txt"){
				$(".numboxUl").show();
				$(".numboxUl").slideDown(2000);
				$(".txt").css("border-color","#d76703");
				$(".subbox").css("border-color","#d76703");
				$(".numbox").css("display","none");			
			}else{
				$(".numboxUl").hide();
				$(".txt").css("border-color","#e0e0e0");
				$(".subbox").css("border-color","#e0e0e0");
				$(".numbox").css("display","block");
			}
		})
//侧边栏对应的ul鼠标进入时的效果
		$(".sideul li").mouseenter(function(){
			$(this).find(".sideli_box").animate({"left":"-90"},500);
			$(this).find(".sideli_box").show();
		})
		$(".sideul li").mouseleave(function(){
			$(this).find(".sideli_box").hide();
		})
//轮播图左侧的二级菜单绑定滑过事件
		$(".bana-leftli").mouseenter(function(){
			$(this).find(".menu1").css({
				"z-index":999,
	  			"background-color":"#fff",
	  			"opacity":1,
	  			"display":"block"
			})
		})
		$(".bana-leftli").mouseleave(function(){
			$(this).find(".menu1").hide();
		})
//家电右边选项卡的绑定事件
		
	    $(".homea_topul li").mouseenter(function(){
	    	$(".homea_down").css({
				"display":"block"
			})
	    	var ind=$(".homea_topul li").index(this);
	    	$(this).addClass("homea_topulhover").siblings().removeClass("homea_topulhover");
	    	var homea=$(".homea_downone_right ul").eq(ind);
	    	console.log(homea);
	    	var bro=homea.siblings("ul");
	    	console.log(bro);
	    	bro.css("display","none");
	  })
//家电选项卡下边ul下的li添加事件
		$(".homea_downa").mouseenter(function(){
			$(this).find(".slided").slideUp();
			$(this).find(".slided").css({
				"display":"block",
				"height":"60px"
			})
		})
		$(".homea_downa").mouseleave(function(){
			$(this).find(".slided").slideDown(500);
			$(this).find(".slided").css({
				"display":"none",
				"height":"0px"
			})
		})
//视频部分的小盒子对应的事件
	   $(".video_img").hover(function(){
	   		$(this).find(".video_box").css("background-color","#FF6700")
	   },function(){
	   		$(this).find(".video_box").css("background-color","rgba(0,0,0,0.6)")
	   })
	   $(".video_img").on("click",function(){
	   		$(".video_slide").animate({"bottom":"150"},1000);
	   		$(".video_slide").css({
	   			"display":"block",
	   			"z-index":1000
	   		});
	   		$(".mask").fadeIn(200);
	   })
//视频点击播放后的点击关闭事件
	   $(".video_slide_top a").on("click",function(){
	   		$(".video_slide").css({
	   			"display":"none",
	   			"bottom":"900px"
	   		});
	   		$(".mask").fadeOut(200);
	   })
  })
