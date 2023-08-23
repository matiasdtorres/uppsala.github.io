/* Slider 1*/
var	tpj = jQuery;
if(window.RS_MODULES === undefined) window.RS_MODULES = {};
if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider11"] = {once: RS_MODULES.modules["revslider11"]!==undefined ? RS_MODULES.modules["revslider11"].once : undefined, init:function() {
	window.revapi1 = window.revapi1===undefined || window.revapi1===null || window.revapi1.length===0  ? document.getElementById("rev_slider_1_1") : window.revapi1;
	if(window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length==0) { window.revapi1initTry = window.revapi1initTry ===undefined ? 0 : window.revapi1initTry+1; if (window.revapi1initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider11"].init()}); return;}
	window.revapi1 = jQuery(window.revapi1);
	if(window.revapi1.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_1"); return;}
	revapi1.revolutionInit({
			revapi:"revapi1",
			DPR:"dpr",
			sliderLayout:"fullwidth",
			visibilityLevels:"1240,1024,778,480",
			gridwidth:"1230,1024,778,480",
			gridheight:"1000,700,600,450",
			lazyType:"smart",
			spinner:"spinner0",
			perspective:600,
			perspectiveType:"local",
			editorheight:"1000,700,600,450",
			responsiveLevels:"1240,1024,778,480",
			progressBar:{disableProgressBar:true},
			navigation: {
				mouseScrollNavigation:false,
				wheelCallDelay:1000,
				onHoverStop:false,
				arrows: {
					enable:true,
					style:"custom",
					hide_onmobile:true,
					hide_under:"1024px",
					left: {
						h_align:"right",
						h_offset:47
					},
					right: {
						h_offset:47,
						v_offset:161
					}
				}
			},
			viewPort: {
				global:true,
				globalDist:"-200px",
				enable:false,
				visible_area:"20%"
			},
			fallbacks: {
				allowHTML5AutoPlayOnAndroid:true
			},
	});
	
}} // End of RevInitScript

/* Slider 2*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider21"] = {once: RS_MODULES.modules["revslider21"]!==undefined ? RS_MODULES.modules["revslider21"].once : undefined, init:function() {
		window.revapi2 = window.revapi2===undefined || window.revapi2===null || window.revapi2.length===0  ? document.getElementById("rev_slider_2_1") : window.revapi2;
		if(window.revapi2 === null || window.revapi2 === undefined || window.revapi2.length==0) { window.revapi2initTry = window.revapi2initTry ===undefined ? 0 : window.revapi2initTry+1; if (window.revapi2initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider21"].init()}); return;}
		window.revapi2 = jQuery(window.revapi2);
		if(window.revapi2.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_2_1"); return;}
		revapi2.revolutionInit({
				revapi:"revapi2",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1230,1024,778,480",
				gridheight:"940,650,550,450",
				lazyType:"smart",
				spinner:"spinner0",
				perspective:600,
				perspectiveType:"local",
				editorheight:"940,650,550,450",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					mouseScrollNavigation:false,
					wheelCallDelay:1000,
					onHoverStop:false,
					bullets: {
						enable:true,
						tmp:"<span class=\"tp-bullet-inner\"></span>",
						style:"uranus",
						hide_onmobile:true,
						hide_under:"767px",
						h_align:"right",
						v_align:"center",
						h_offset:30,
						v_offset:80,
						direction:"vertical",
						space:10
					}
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false,
					visible_area:"20%"
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript

/* Slider 03 */
var	tpj = jQuery;
		if(window.RS_MODULES === undefined) window.RS_MODULES = {};
		if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
		RS_MODULES.modules["revslider31"] = {once: RS_MODULES.modules["revslider31"]!==undefined ? RS_MODULES.modules["revslider31"].once : undefined, init:function() {
			window.revapi3 = window.revapi3===undefined || window.revapi3===null || window.revapi3.length===0  ? document.getElementById("rev_slider_3_1") : window.revapi3;
			if(window.revapi3 === null || window.revapi3 === undefined || window.revapi3.length==0) { window.revapi3initTry = window.revapi3initTry ===undefined ? 0 : window.revapi3initTry+1; if (window.revapi3initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider31"].init()}); return;}
			window.revapi3 = jQuery(window.revapi3);
			if(window.revapi3.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_3_1"); return;}
			revapi3.revolutionInit({
					revapi:"revapi3",
					DPR:"dpr",
					sliderLayout:"fullwidth",
					visibilityLevels:"1240,1024,778,480",
					gridwidth:"1230,1024,778,480",
					gridheight:"940,650,550,450",
					lazyType:"smart",
					spinner:"spinner0",
					perspective:600,
					perspectiveType:"local",
					editorheight:"940,650,550,450",
					responsiveLevels:"1240,1024,778,480",
					progressBar:{disableProgressBar:true},
					navigation: {
						mouseScrollNavigation:false,
						wheelCallDelay:1000,
						onHoverStop:false,
						bullets: {
							enable:true,
							tmp:"<span class=\"tp-bullet-inner\"></span>",
							style:"uranus",
							hide_onmobile:true,
							hide_under:"767px",
							h_align:"right",
							v_align:"center",
							h_offset:30,
							v_offset:0,
							direction:"vertical",
							space:10
						}
					},
					viewPort: {
						global:true,
						globalDist:"-200px",
						enable:false,
						visible_area:"20%"
					},
					fallbacks: {
						allowHTML5AutoPlayOnAndroid:true
					},
			});
			
		}} // End of RevInitScript