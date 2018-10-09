 var swiper = new Swiper('.swiper-container', {
	      spaceBetween: 500,
	      effect: 'fade',
	      autoplay:"true",
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	       loop: true,
	      loopFillGroupWithBlank: true,   
    });
    $(function(){
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
//购物车滑过后的事件
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
//关闭立即登录按钮
		$(".close_span").click(function(){
			$(".close").css("display","none");
		})
//页面滑过后提示框显示的事件	
		  $(document).scroll(function () { 
		        let scrollTop =  document.documentElement.scrollTop || document.body.scrollTop ;
		     //导航栏显示出来
		      if(scrollTop>205){
		        	
		        	$(".ban").addClass("hide");
//		            $(".ban").animate({"top":"0"},1000);
		            $(".ban").slideDown(1000);
		        }else{
		        	$(".ban").removeClass("hide");
		        }
		     //轮播图区域内显示
		     if(scrollTop>210&&scrollTop<800){
		     	$(".goods_left").addClass("gooda")
		     }else{
		     	$(".goods_left").removeClass("gooda");
		     }
			});
			$(".check>div").on("click",function(){
//				$(this).find(".check_one").css("border","1px solid #ff6700");
//				$(this).find(".check_a").css("color","#ff6700");
//				$(this).find(".money").css("color","#333333");
				$(this).addClass("one");
				$(this).siblings(".check_one").removeClass("one");
				//获取所选事件的索引
				$ind=$(this).index();
				console.log($ind);
				//根据索引选出颜色对应的下边的ul,
				$uli=$(".color_ul").eq($ind-1);
				console.log($uli);
				$uli.css("display","block");
				$uli.siblings("ul").css("display","none");
			})
			$(".inp").on("click",function(){
				if(this.checked){
						//选中状态下，将价格加在总价格上面
						//取出商品价格
						$money=parseFloat($(".list_price").html());
						console.log($money);
						//取出当前价格
						$price=parseFloat($(".jiage").html());
						console.log($price);
						$p=$money+$price;
						$(".jiage").html($p);
					}else{
						$a=parseFloat($(".jiage").html());
						$money=parseFloat($(".list_price").html());
						$m=$a-$money;
						$(".jiage").html($m);
					}
				})
			$(".suan").click(function(){
				window.location.href="shopping.html";
			})
			

    })
   