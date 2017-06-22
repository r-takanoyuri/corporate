var PCLUB = PCLUB || {};
PCLUB.COMMON = {};

PCLUB.COMMON.NAV_CONTROLLER = {
	init : function(){
		this.setParameters();
		this.bindEvent();
	},
	setParameters : function(){
		this.$nav = $('.jsc-nav-wrapper');
		this.$openTrigger = $('.jsc-icn-nav-closed');
		this.$closeTrigger = $('.jsc-icn-nav-opened');
		this.$overLay = $('<div class="overlay"></div>');
		this.$body = $('body');
		this.$body.prepend(this.$overLay);
	},
	bindEvent : function(){
		var self = this;
		this.$openTrigger.on('click', function(){
			if(self.$nav.is(':animated')){
				return;
			}
			self.openNav();
		});
		this.$closeTrigger.on('click', function(){
			if(self.$nav.is(':animated')){
				return;
			}
			self.closeNav();
		});
		this.$overLay.on('click', function(){
			if(self.$nav.is(':animated')){
				return;
			}
			self.closeNav();
		});
	},
	openNav : function(){
		this.$nav.addClass('nav-is-opened');
		this.$openTrigger.addClass('icn-fade-out');
		this.$overLay.fadeIn();
		this.$body.addClass('stop-scroll');
	},
	closeNav : function(){
		this.$nav.removeClass('nav-is-opened');
		this.$openTrigger.removeClass('icn-fade-out');
		this.$overLay.fadeOut();
		this.$body.removeClass('stop-scroll')	;
	}
};

PCLUB.COMMON.ACCORDION = {
	init : function(){
		this.setParameters();
		this.defaultOpen();
		this.bindEvent();
	},
	setParameters : function(){
		this.$trigger = $('.jsc-accordion-trigger');
		this.$target = $('.jsc-accordion-list');
	},
	defaultOpen : function(){
		this.$trigger.eq(0).addClass('accordion-is-opened');
		this.$target.eq(0).show();
	},
	bindEvent : function(){
		var self = this;
		this.$trigger.on('click', function(){
			if(self.$target.is(':animated')){
				return;
			}
			var thisTrigger = $(this),
				thisTarget = thisTrigger.next(this.$target);
			self.moveAccordion(thisTrigger, thisTarget);
		});
	},
	moveAccordion : function(thisTrigger, thisTarget){
		this.$trigger.removeClass('accordion-is-opened');
		this.$target.not(thisTarget).slideUp();
		if(thisTarget.is(':visible')){
			thisTarget.slideUp();
		} else {
			thisTarget.slideDown();
			thisTrigger.addClass('accordion-is-opened');
		}
	}
};

PCLUB.COMMON.SCROLL_TOP = {
	SPEED : 500,
	init : function(){
		this.setParameters();
		this.bindEvent();
	},
	setParameters : function(){
		this.$trigger = $('.jsc-scroll-top');
		this.$body = $('html,body');
	},
	bindEvent : function(){
		var self = this;
		this.$trigger.on('click', function(){
			self.moveScroll();
		});
		return false;
	},
	moveScroll : function(){
		this.$body.animate({'scrollTop' : 0}, this.SPEED);
	}
};

PCLUB.COMMON.ANCHORLINK = {
	SPEED : 500,
	init : function(){
		this.setParameters();
		this.bindEvent();
	},
	setParameters : function(){
		this.$trigger = $('.jsc-anchorlink');
		this.$paramArray = [];
		this.targetTabParam = $('a[href$="#' + paramArray.id + '"]');
		this.position = target.offset().top;
	},
	bindEvent : function(){
		var self = this;
		this.$trigger.on('click', function(){
			self.moveScroll();
		});
		return false;
	},
	moveScroll : function(){
		this.$targetTabParam.animate({'scrollTop' : position}, speed, 'swing');
	}
};


PCLUB.COMMON.TAB_CLOSE = {
	init : function(){
		this.setParameters();
		this.closeWindow();
	},
	setParameters : function(){
		this.$closeBtn = $('.jsc-tab-close');
	},
	closeWindow : function(){
		this.$closeBtn.on('click', function(){
			window.close();
		});
	}
};

$(function(){
	PCLUB.COMMON.NAV_CONTROLLER.init();
	PCLUB.COMMON.ACCORDION.init();
	PCLUB.COMMON.SCROLL_TOP.init();
	$('.jsc-frm-others-wrapper').each(function(){
		new PCLUB.COMMON.FORM_COMMA($(this));
	});
	$('.jsc-frm-number-wrapper').each(function(){
		new PCLUB.COMMON.FORM_COMMA($(this));
	});
	PCLUB.COMMON.TAB_CLOSE.init();
});
