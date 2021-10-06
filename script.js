function locomotiveScrollIntialize(){
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('#webpage'),
    smooth: true
  });
  
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#webpage", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#webpage").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

}
locomotiveScrollIntialize();

if(window.screen.width > 650){

  function mainScreenTimeline(){
  
    var tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#imgs",
        scroller: "#webpage",
        start: "top top",
        pin: true,
        end: "+=60%",
        scrub: 1
      }
    })
    
    tl1
    .to("#l1", {
      left: "-50%",
      ease: Power2.easeInOut
    }, "abcd")
    .to("#l2", {
      left: "-50%",
      ease: Power2.easeInOut
    }, "abcd")
    .to("#r2", {
      right: "-50%",
      ease: Power2.easeInOut
    }, "abcd")
    .to("#r1", {
      right: "-50%",
      ease: Power2.easeInOut
    }, "abcd")
    .to("#c1", {
      width: "100%",
      ease: Power2.easeInOut
    }, "abcd")
    }

    mainScreenTimeline();
}


function aboutScreenTimeline(){
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top 70%",
      scroller: "#webpage",
    }
  })
  
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#about #line",
      start: "top 50%",
      scroller: "#webpage",
    }
  })
  
  tl2.to("#about .a, #about h4", {
    opacity: 1,
    onStart: function(){
      $('.a').textillate({
        selector: '.texts',
        loop: false,
        minDisplayTime: 2000,
        initialDelay: 0,
        autoStart: true,
        inEffects: [],
        outEffects: [ 'hinge' ],
        in: {
          effect: 'fadeInUp',
          delayScale: 1.5,
          delay: 35,
          sync: false,
          shuffle: false,
          reverse: false,
          callback: function () {}
        },  
        callback: function () {},
        type: 'char'
      });  
      $('#about h4').textillate({
        selector: '.texts',
        loop: false,
        minDisplayTime: 2000,
        initialDelay: 0,
        autoStart: true,
        inEffects: [],
        outEffects: [ 'hinge' ],
        in: {
          effect: 'fadeInUp',
          delayScale: 1,
          delay: 15,
          sync: false,
          shuffle: false,
          reverse: false,
          callback: function () {}
        },  
        callback: function () {},
        type: 'char'
      });  
    }
  })
  .from("#about #line", {
    width: "0%",
    ease: Expo.easeInOut,
    duration: 2
  }, "-=.4")

  tl3.to("#about .aa", {
    opacity:1,
    onStart: function(){
      $('.aa').textillate({
        selector: '.texts',
        loop: false,
        minDisplayTime: 2000,
        initialDelay: 0,
        autoStart: true,
        inEffects: [],
        outEffects: [ 'hinge' ],
        in: {
          effect: 'fadeInUp',
          delayScale: .5,
          delay: 15,
          sync: false,
          shuffle: false,
          reverse: false,
          callback: function () {}
        },  
        callback: function () {},
        type: 'char'
      });
    }
  })
  .to("#about #ellipse", {
    scale: 1.5,
    ease: Expo.easeInOut,
    opacity :1,
    duration: 2
  }, "saath")
  .to("#about #ellipse img", {
    scale: 1,
    ease: Expo.easeInOut,
    duration: 2
  }, "saath")

}

function handleProductsAnimations(){
  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#products",
      start: "top 70%",
      scroller: "#webpage",
    }
  })

  tl4.from("#products .row", {
    y: 30,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 2,
    stagger: .3
  }, "saath")
  .to("#products #pimg", {
    scale: 1.3,
    opacity :1,
    ease: Expo.easeInOut,
    duration: 2
  }, "-=2.5")
  .to("#products #pimg img", {
    scale: 1,
    ease: Expo.easeInOut,
    duration: 2
  }, "-=2.5")

}


function handleMainScreenTextAnim(){
  
$('.tlt').textillate({
  selector: '.texts',
  loop: false,
  minDisplayTime: 2000,
  initialDelay: 0,
  autoStart: true,
  inEffects: [],
  outEffects: [ 'hinge' ],
  in: {
    effect: 'fadeInUp',
    delayScale: 1,
    delay: 25,
    sync: false,
    shuffle: false,
    reverse: false,
    callback: function () {}
  },  
  callback: function () {},
  type: 'char'
});  
}

var tl5 = gsap.timeline()
tl5.from("#nav a:nth-child(1)",{
  x: 500,
  opacity: 0,
  ease: Expo.easeInOut,
  duration:3
},"movetext")
tl5.from("#nav a:nth-child(3)",{
  x: -500,
  opacity: 0,
  ease: Expo.easeInOut,
  duration:3
}, "movetext")
tl5.from("#nav a:nth-child(2)",{
opacity:0,
  ease: Expo.easeInOut,
  duration:2
}, "movetext")

var tl6 = gsap.timeline()
tl6.from(".small", {
  opacity: 0,
  ease: Expo.easeInOut,
  duration:2
})
tl6.from(".medium", {
  opacity: 0,
  ease: Expo.easeInOut,
  duration:2
},"-=1")
tl6.from(".large", {
  opacity: 0,
  ease: Expo.easeInOut,
  duration:2
},"-=1.5")



aboutScreenTimeline();
handleProductsAnimations();
handleMainScreenTextAnim();