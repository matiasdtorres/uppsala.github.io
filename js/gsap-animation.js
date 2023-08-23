gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.config({
    nullTargetWarn: false,
    trialWarn: false
});
/*----  Functions  ----*/
function pbmit_img_animation() {
    const boxes = gsap.utils.toArray('.pbmit-animation-style1,.pbmit-animation-style2,.pbmit-animation-style3,.pbmit-animation-style4,.pbmit-animation-style5,.pbmit-animation-style6');
    boxes.forEach(img => {
        gsap.to(img, {
            scrollTrigger: {
                trigger: img,
                start: "top 70%",
                end: "bottom bottom",
                toggleClass: "active",
                once: true,
            }
        });
    });
}

// ** Hover Image Effect ** \\ USe
function pbmit_hover_img() {
    const pbmitHoverImg = gsap.utils.toArray(".pbmit-element-miconheading-style-2 article,.pbmit-element-portfolio-style-1 article,.pbmit-element-team-style-2 article, .pbmit-timeline .pbmit-content");
    pbmitHoverImg.forEach((target) => {
        const pbmitImg = target.querySelector('.pbmit-hover-img');
        const t1 = gsap.timeline();
        t1.to(pbmitImg, {
            opacity: 1,
            duration: 0.4,
            scale: 1,
            ease: "Power2.easeOut"
        })
        target.pbmitHoverAnim = t1.play().reversed(true);
        target.addEventListener("mouseenter", pbmithoverimg);
        target.addEventListener("mouseleave", pbmithoverimg);
        target.addEventListener("mousemove", (e) => {
            let xpos = e.offsetX;
            let ypos = e.offsetY;
            const t1 = gsap.timeline();
            t1.to(pbmitImg, { x: xpos, y: ypos });
        });
    });

    function pbmithoverimg() {
        this.pbmitHoverAnim.reversed(!this.pbmitHoverAnim.reversed());
    }
}

// ** Text Mask Animation ** \\
function pbmit_text_mask_animation() {
    const hero = document.querySelectorAll('.pbmit-shadow');
    if (hero.length < 1) {
        return
    }
    const t1 = gsap.timeline({ delay: 1 })
    t1.to(hero, {
        '--maskSize1': '20%',
        duration: 0.5,
        ease: 'back.out(2)',
    })
    hero.forEach((el) => {
        el.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e
            const x = Math.round((clientX / window.innerWidth) * 100)
            const y = Math.round((clientY / window.innerHeight) * 100)
            gsap.to(el, {
                '--x': `${x}%`,
                '--y': `${y}%`,
                duration: 0.3,
                ease: 'sine.out',
            })
        })
        el.addEventListener('mouseleave', (e) => {
            gsap.to(el, {
                '--x': `50%`,
                '--y': `50%`,
                duration: 0.3,
                ease: 'sine.out',
            })
        })
    });
}

// ** Horizontal snap Animation ** \\
function pbmit_horizontal_snap_section() {

    var pbmit_var = $('.pbmit-horizontal-snap-section');
    if (!pbmit_var.length) {
        return;
    }
    let pbmithsContainer = document.querySelector(".pbmit-horizontal-snap-section"),
        pbmithsPanel = gsap.utils.toArray(".pbmit-horizontal-snap-section .pbmit-ele-horizontal-snap"),
        pbmithWidth = 0,
        pbmithsTween;

    ScrollTrigger.matchMedia({
        "(min-width: 1201px)": function() {
            const pbmithgetWidth = () => {
                pbmithWidth = 0;
                pbmithsPanel.forEach((section) => {
                    pbmithWidth += section.offsetWidth;
                });
                pbmithWidth += window.innerWidth;
                pbmithWidth += 10000;
                return pbmithWidth;
            };
            gsap.set(pbmithsContainer, { width: (100 * (pbmithsPanel.length) + '%') });
            pbmithgetWidth();
            ScrollTrigger.addEventListener("refreshInit", pbmithgetWidth);
            pbmithsTween = gsap.to(pbmithsPanel, {
                xPercent: -100 * (pbmithsPanel.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: pbmithsContainer,
                    pin: true,
                    start: "top 1%",
                    scrub: 1,
                    invalidateOnRefresh: true,
                    snap: {
                        snapTo: 1 / (pbmithsPanel.length - 1),
                        inertia: false,
                        delay: 0.1,
                        duration: { min: 1, max: 1 }
                    },
                    end: () => "+=" + (pbmithsContainer.offsetWidth - innerWidth)
                }
            });
            pbmithsPanel.forEach(section => {
                gsap.to(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: () => 'top top-=' + (section.offsetLeft - window.innerWidth / 2) * (pbmithWidth / (pbmithWidth - window.innerWidth)),
                        end: () => '+=' + section.offsetWidth * (pbmithWidth / (pbmithWidth - window.innerWidth)),
                        toggleClass: "active",
                        invalidateOnRefresh: true
                    }
                });
            });
            window.addEventListener("resize", this.onResize);

        },
        "(max-width: 1200px)": function() {
            if (pbmithsTween) pbmithsTween.kill(true);
            gsap.set(pbmithsContainer, { width: '100%' });
        }
    });
}

function pbmit_horizontal_style() {
    if( $('.pbmit-element-sticky-carousel-true.pbmit-element-service-style-1').length > 0 ){

        const sections = gsap.utils.toArray(".pbmit-element-sticky-carousel-true.pbmit-element-service-style-1 .pbmit-service-style-1");
        if (sections.length < 1) {
            return
        }
        ScrollTrigger.matchMedia({
            "(min-width:1200px)": function() {

                let maxWidth = 0;
                let bgimg = $('.pbmit-element-sticky-carousel-true.pbmit-element-service-style-1').closest('.elementor-top-section')
                const getMaxWidth = () => {
                    maxWidth = 0;
                    sections.forEach((section) => {
                        maxWidth += section.offsetWidth;
                        maxWidth += gsap.getProperty(section, 'marginLeft');
                    });
                    maxWidth += 30;
                    maxWidth += window.innerWidth;
                    maxWidth -= sections[0].offsetWidth;
                    return maxWidth;
                };

                getMaxWidth();
                ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

                getpercentage(sections.length, 0, $('.pbmit-element-sticky-carousel-true.pbmit-element-service-style-1 .pbmit-circle'));
                gsap.to(sections, {
                    x: () => `-${maxWidth - window.innerWidth}`,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".pbmit-element-sticky-carousel-true.pbmit-element-service-style-1",
                        pin: true,
                        scrub: true,
                        end: () => `+=${maxWidth}`,
                        invalidateOnRefresh: true,
                        onUpdate: (self) => {
                            if ($('.pbmit-element-sticky-carousel-true.pbmit-element-service-style-1').length) {
                                var index = $('.pbmit-element-sticky-carousel-true.pbmit-element-service-style-1 .pbmit-element-posts-wrapper .active').index();
                                if (index >= 0) {
                                    var elm = $('.pbmit-element-sticky-carousel-true.pbmit-element-service-style-1 .pbmit-circle');
                                    var cal = getpercentage(sections.length, (index + 1), elm);
                                    var short_digit = cal / 100;
                                    elm.circleProgress('value', short_digit);
                                }
                            }
                        },
                        onEnter: () => {
                            bgimg.addClass("pbmit-service1-bg");
                        }
                    }
                });

                sections.forEach((sct, i) => {
                    let pos = sections[0].offsetWidth * (i + 1);
                    ScrollTrigger.create({
                        trigger: sct,
                        start: () => 'top top-=' + (pos - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth)),
                        end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
                        toggleClass: { targets: sct, className: "active" }
                    });
                });
            }
        });
    }
}

function getpercentage(x, y, elm) { 
    elm.find('.pbmit-fid-inner').html(y + '/' + x);
    var cal = Math.round((y * 100) / x);
    return cal;
}

function pbmit_tween_effect() {

    const pbmit_tween = gsap.utils.toArray('.pbmit-tween-effect');
    if (pbmit_tween.length == 0) return

    ScrollTrigger.matchMedia({
        "(min-width: 1201px)": function() {

            pbmit_tween.forEach((box, i) => {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: box,
                        start: "top 90%",
                        end: "bottom 70%",
                        scrub: 1
                    },
                    defaults: { ease: "none" }
                });

                let xpos_val = box.getAttribute('data-x-start');
                let xpose_val = box.getAttribute('data-x-end');
                let ypos_val = box.getAttribute('data-y-start');
                let ypose_val = box.getAttribute('data-y-end');

                let scale_x_val = box.getAttribute('data-scale-x-start');
                let scale_xe_val = box.getAttribute('data-scale-x-end');

                let skew_x_val = box.getAttribute('data-skew-x-start');
                let skew_xe_val = box.getAttribute('data-skew-x-end');
                let skew_y_val = box.getAttribute('data-skew-y-start');
                let skew_ey_val = box.getAttribute('data-skew-y-end');

                let rotation_x_val = box.getAttribute('data-rotate-x-start');
                let rotation_xe_val = box.getAttribute('data-rotate-x-end');
                gsap.set(box, { xPercent: xpos_val, yPercent: ypos_val, scale: scale_x_val, skewX: skew_x_val, skewY: skew_y_val, rotation: rotation_x_val });
                tl.to(box, { xPercent: xpose_val, yPercent: ypose_val, scale: scale_xe_val, skewX: skew_xe_val, skewY: skew_ey_val, rotation: rotation_xe_val })
            });
        },
    });
}

function pbmt_scroller_portfolio() {
    if (!$('.pbmit-element-portfolio-style-3').length) {
        return;
    }

    ScrollTrigger.matchMedia({
        "(min-width:1200px)": function() {

            gsap.set(".pbmit-element-portfolio-style-3  .pbminfotech-img-wrapper", { zIndex: (i, target, targets) => targets.length - i });
            const images = gsap.utils.toArray('.pbmit-element-portfolio-style-3 .pbminfotech-img-wrapper:not(:last-child)');
            gsap.set(".pbmit-element-portfolio-style-3 ", { height: ((images.length + 1) * 100) + 'vh' });

            images.forEach((image, i) => {
                var tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".pbmit-element-portfolio-style-3 ",
                        start: () => "top -" + (window.innerHeight * (i)),
                        end: () => "+=" + window.innerHeight,
                        scrub: true,
                        toggleActions: "play none reverse none",
                        invalidateOnRefresh: true,
                    }
                })
                tl.fromTo(image, { height: () => { return "100%" } }, { height: () => { return "0%" }, ease: "none" });
            });
            ScrollTrigger.create({
                trigger: ".pbmit-element-portfolio-style-3",
                pin: '.pbmit-element-portfolio-style-3 .pbminfotech-img-box',
                start: () => "top top",
                end: () => "+=" + ((images.length) * (window.innerHeight)),
                invalidateOnRefresh: true,
            });
        }
    });
}
 

function pbmit_staticbox_hover() {
    var pbmit_var = $('.pbmit-element-static-box-style-1, .pbmit-element-static-box-style-3, .pbmit-element-static-box-style-2');
    if (!pbmit_var.length) {
        return;
    }
    pbmit_var.each(function() {
        var pbmit_Class = '.pbmit-element-posts-wrapper > .pbmit-ele-static-box, .swiper-static-slide-nav li, .pbmit-hover-inner li';
        $(this)
            .find(pbmit_Class).first()
            .addClass('pbmit-active');
        $(this)
            .find(pbmit_Class)
            .on('mouseover', function() {
                $(this).addClass('pbmit-active').siblings().removeClass('pbmit-active');
            });
    });
}

function pbmit_title_animation() {

    ScrollTrigger.matchMedia({
        "(min-width: 1024px)": function() {

            var pbmit_var = $('.pbmit-heading, .pbmit-heading-subheading');
            if (!pbmit_var.length) {
                return;
            }
            const quotes = document.querySelectorAll(".pbmit-heading .pbmit-title , .pbmit-heading-subheading .pbmit-title");
            quotes.forEach(quote => {
                var getclass = quote.closest('.pbmit-heading ,.pbmit-heading-subheading').className;
                var animation = getclass.split('animation-');
                if (animation[1] == "style4") return

                quote.split = new SplitText(quote, {
                    type: "lines,words,chars",
                    linesClass: "split-line"
                });
                gsap.set(quote, { perspective: 400 });

                if (animation[1] == "style1") {
                    gsap.set(quote.split.chars, {
                        opacity: 0,
                        y: "90%",
                        rotateX: "-40deg"
                    });
                }
                if (animation[1] == "style2") {
                    gsap.set(quote.split.chars, {
                        opacity: 0,
                        x: "50"
                    });
                }
                if (animation[1] == "style3") {
                    gsap.set(quote.split.chars, {
                        opacity: 0,
                    });
                }
                gsap.to(quote.split.chars, {
                    scrollTrigger: {
                        trigger: quote,
                        start: "top 90%",
                    },
                    x: "0",
                    y: "0",
                    rotateX: "0",
                    opacity: 1,
                    duration: 1,
                    ease: Back.easeOut,
                    stagger: .02
                });
            });
        },
    });
}

function pbmit_set_tooltip() {
    $('[data-cursor-tooltip]').each(function() {
        var thisele = $(this);
        var thisele_html = thisele.find('.pbminfotech-box-content').html();
        thisele.attr("data-cursor-tooltip", thisele_html);
    });
}
 

function pbmit_scroll_int() {
    gsap.set(".pbmitmove-text1", { xPercent: -70 })
    gsap.set(".pbmitmove-text2", { xPercent: 100 })

    gsap.to(".pbmitmove-text1", {
        xPercent: 20,
        scrollTrigger: {
            scrub: true,
            start: "top bottom",
            end: "bottom top",
        }
    });

    gsap.to(".pbmitmove-text2", {
        xPercent: -70,
        scrollTrigger: {
            trigger: ".pbmitmove-text1",
            scrub: true,
            start: "top bottom",
            end: "bottom top",
        }
    });
}

function pbmit_verticle_slide_image() {
    ScrollTrigger.matchMedia({
        "(min-width:768px)": function() {
            const pbmitvar = document.querySelectorAll('.pbmit-vertical-box-style-1');
            let totalheight = -300;
            pbmitvar.forEach((section, index) => {
                totalheight += section.offsetHeight;
                gsap.to(section, {
                    yPercent: -50,
                    scrollTrigger: {
                        trigger: section,
                        scrub: 3
                    }
                });
            });

            ScrollTrigger.create({
                trigger: ".pbmit-element-vertical-box-style-1 ",
                pin: '.pbmit-element-vertical-box-style-1 .pbmit-heading ',
                start: () => "top top",
                end: () => "+=" + totalheight,
                invalidateOnRefresh: false,
            });
        }
    });
}

function pbmit_sticky_menu() {
    if (!$(".pbmit-element-split-slide-style-1")[0]) {
        return
    }
    ScrollTrigger.matchMedia({
        "(min-width: 992px)": function() {

            let container = $(".pbmit-element-split-slide-style-1 .pbmit-img");
            let section = $(".pbmit-element-split-slide-style-1 .pbmit-element-split-slide-wrapper");
            var indicators = gsap.utils.toArray('.pbmit-element-split-slide-style-1 .pbmit-split-slide-item-image');
            var points = gsap.utils.toArray('.pbmit-element-split-slide-style-1 .pbmit-bg-imgbox .pbmit-split-slide-box');

            var gap = points.length * 50;

            let tl = gsap.timeline({
                scrollTrigger: {
                    pin: true,
                    scrub: 1,
                    trigger: container,
                    end: () => "+=" + ((section.height() + gap) - document.documentElement.clientHeight),
                    onUpdate: (self) => {
                        let per = parseInt(self.progress * 100);
                        if (per > 99) indicators[points.length - 1].classList.add('last');
                        else indicators[points.length - 1].classList.remove('last');
                        if (per < 1) indicators[0].classList.add('first');
                        else indicators[0].classList.remove('first');

                    }
                },
                defaults: { ease: "none", duration: 1 }
            });

            points.forEach((sct, i) => {
                let pos = indicators[i];
                ScrollTrigger.create({
                    trigger: sct,
                    start: "top center",
                    end: () => '+=' + sct.offsetHeight,
                    toggleClass: { targets: pos, className: "active" }
                });
            });
			$('.pbmit-element-split-slide-style-1 .pbmit-bg-imgbox .pin-spacer .pbmit-split-slide-item-image:first-child').addClass('active');
        },
        "(max-width:992px)": function() {
            ScrollTrigger.getAll().forEach(pin => pin.kill(true));
        }
    });

}

var pbmit_portfolio_card = function() {
	$(".pbmit-element-portfolio-style-1").each(function() {
		if (typeof Swiper !== 'undefined') {
			var pbmit_hover_card = new Swiper(".pbmit-card-image", {
				grabCursor: true,
				effect: "cards"
			});
		}
		$('.pbmit-hover-card-inner li').hover(function(e) {
			e.preventDefault();
			var myindex = $(this).index();
			pbmit_hover_card.slideTo(myindex, 300, false);
		});

	});
}

ScrollTrigger.matchMedia({
    "(max-width: 1200px)": function() {
        ScrollTrigger.getAll().forEach(t => t.kill());
    }
});

// on ready
$(document).ready(function() {
    pbmit_staticbox_hover();
});
// on load
$(window).on('load', function(){
	pbmit_portfolio_card();
    pbmit_title_animation();
	pbmit_sticky_menu();
    pbmit_hover_img();
    pbmit_text_mask_animation();
    pbmit_horizontal_style(); 
    pbmit_img_animation();
    pbmit_tween_effect();
    pbmt_scroller_portfolio();  
    pbmit_set_tooltip(); 
    pbmit_scroll_int(); 
    pbmit_verticle_slide_image();
    gsap.delayedCall(1, () =>
        ScrollTrigger.getAll().forEach((t) => {
            t.refresh();
        })
    );
});