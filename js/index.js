$(function(){
	var container = $(".container"),
		box = $(".box"),
		buddy = $(".buddy"),
		pop = $(".pop"),
		open = $(".btn"),
		close = $(".close"),
		imgs = pop.find("img");

		$.Velocity.RegisterUI('lixin.slideUpIn',{  //注册事件
			defaultDuration:500,
			calls:[
				[{opacity:[1,0],translateY:[0,100]}]
			]
		});
		
		$.Velocity.RegisterUI('lixin.slideDownOut',{  //注册事件
			defaultDuration:300,
			calls:[
				[{opacity:[0,1],translateY:[100,0]}]
			]
		});

		$.Velocity.RegisterUI('lixin.slideIn',{  //注册事件
			defaultDuration:300,
			calls:[
				[{opacity:[1,0],scale:[1,0.3]}]
			]
		});
		$.Velocity.RegisterUI('lixin.slideOut',{  //注册事件
			defaultDuration:300,
			calls:[
				[{opacity:[0,1],scale:[0.3,1]}]
			]
		});

		var seqInit = [{
			elements:container,
			properties:'lixin.slideUpIn',
			options:{
				delay:300
				}	
			},{
			elements:box,
			properties:'lixin.slideUpIn',
			options:{
				sequenceQueue:false  //和上面一个一起触发
				}
			},{
			elements:buddy,
			properties:'lixin.slideUpIn',
			options:{
				delay:60
				}	
			}];

		var seqClick = [{
			elements:container,
			properties:'lixin.slideDownOut'	
			},{
			elements:box,
			properties:'lixin.slideDownOut',
			options:{
				
				}	
			},{
			elements:container,
			properties:'lixin.slideUpIn',
			options:{
			
				}	
			},{
			elements:pop,
			properties:'lixin.slideUpIn',
			options:{
				 sequenceQueue:false  //和上面一个一起触发
				}	
			},{
			elements:imgs,
			properties:'lixin.slideIn'	
			}];

			open.on("click",function(){
				$.Velocity.RunSequence(seqClick);
			})

			var seqClose = [{
				elements:imgs,
				properties:'lixin.slideOut'	
			},{
				elements:container,
				properties:'lixin.slideDownOut'	
			},{
				elements:pop,
				properties:'lixin.slideDownOut',
			options:{
				
				}	
			},{
			elements:container,
			properties:'lixin.slideUpIn',
			options:{
			
				}	
			},{
			elements:box,
			properties:'lixin.slideUpIn',
			options:{
				 sequenceQueue:false  //和上面一个一起触发
				}	
			}];

			close.on("click",function(){
				$.Velocity.RunSequence(seqClose);
			})
		$.Velocity.RunSequence(seqInit);
})