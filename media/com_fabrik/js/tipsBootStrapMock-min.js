/*! Fabrik */
var FloatingTips=new Class({Implements:[Events],options:{fxProperties:{transition:Fx.Transitions.linear,duration:500},position:"top",trigger:"hover",content:"title",distance:50,tipfx:"Fx.Transitions.linear",heading:"",duration:500,fadein:!1,notice:!1,html:!0,showFn:function(a){return a.stop(),!0},hideFn:function(a){return a.stop(),!0},placement:function(a,b){Fabrik.fireEvent("bootstrap.tips.place",[a,b]);var c=0===Fabrik.eventResults.length?!1:Fabrik.eventResults[0];if(c===!1){var d=JSON.decode(b.get("opts","{}").opts);return d&&d.position?d.position:"top"}return c}},initialize:function(elements,options){"3.x"!==Fabrik.bootstrapVersion("modal")&&"object"!=typeof Materialize&&(this.options=jQuery.extend(this.options,options),this.options.fxProperties={transition:eval(this.options.tipfx),duration:this.options.duration},window.addEvent("tips.hideall",function(a,b){this.hideOthers(b)}.bind(this)),elements&&this.attach(elements))},attach:function(a){if("3.x"!==Fabrik.bootstrapVersion("modal")&&"object"!=typeof Materialize){var b;this.elements=jQuery(a);var c=this;this.elements.each(function(){try{var a=JSON.parse(jQuery(this).attr("opts"));b="object"===jQuery.type(a)?a:{}}catch(d){b={}}b.position&&(b.defaultPos=b.position,delete b.position);var e=jQuery.extend({},c.options,b);if("title"===e.content)e.content=jQuery(this).prop("title"),jQuery(this).removeProp("title");else if("function"===jQuery.type(e.content)){var f=e.content(this);e.content=null===f?"":f.innerHTML}if(e.placement=c.options.placement,e.title=e.heading,jQuery(this).hasClass("tip-small"))e.title=e.content,jQuery(this).tooltip(e);else{e.notice||(e.title+='<button class="close" data-popover="'+this.id+'">&times;</button>');try{jQuery(this).popoverex(e)}catch(g){console.log("failed to apply popoverex tips")}}})}},addStartEvent:function(){},addEndEvent:function(){},getTipContent:function(){},show:function(){},hide:function(){},hideOthers:function(){},hideAll:function(){}});!function(a){var b=function(a,b){this.init("popover",a,b)};return void 0===a.fn.popover?void console.log("Fabrik: cant load PopoverEx as jQuery popover not found - could be the J template has overwritten jQuery (and yes Im looking at your Warp themes!)"):(b.prototype=a.extend({},a.fn.popover.Constructor.prototype,{constructor:b,tip:function(){return this.$tip||(this.$tip=a(this.options.template),this.options.modifier&&this.$tip.addClass(this.options.modifier)),this.$tip},show:function(){var a,b,c,d,e,f,g;if(this.hasContent()&&this.enabled){a=this.tip(),this.setContent(),this.options.animation&&a.addClass("fade");var h=this.options.placement;switch(f="function"==typeof h?h.call(this,a[0],this.$element[0]):h,b=/in/.test(f),a.remove().css({top:0,left:0,display:"block"}).appendTo(b?this.$element:document.body),c=this.getPosition(b),d=a[0].offsetWidth,e=a[0].offsetHeight,b?f.split(" ")[1]:f){case"bottom":g={top:c.top+c.height,left:c.left+c.width/2-d/2};break;case"bottom-left":g={top:c.top+c.height,left:c.left},f="bottom";break;case"bottom-right":g={top:c.top+c.height,left:c.left+c.width-d},f="bottom";break;case"top":g={top:c.top-e,left:c.left+c.width/2-d/2};break;case"top-left":g={top:c.top-e,left:c.left},f="top";break;case"top-right":g={top:c.top-e,left:c.left+c.width-d},f="top";break;case"left":g={top:c.top+c.height/2-e/2,left:c.left-d};break;case"right":g={top:c.top+c.height/2-e/2,left:c.left+c.width}}a.css(g).addClass(f).addClass("in")}}}),void(a.fn.popoverex=function(c){return this.each(function(){var d=a(this),e=d.data("popover"),f="object"==typeof c&&c;e||d.data("popover",e=new b(this,f)),"string"==typeof c&&e[c]()})}))}(window.jQuery);