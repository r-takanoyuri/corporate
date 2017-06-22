var PCLUB = PCLUB || {};
PCLUB.FORM = {};

PCLUB.FORM.TOTALVALIDATION = {
	init : function(){
		this.setParameters();
		this.bindEvent();
	},
	setParameters : function(){
		this.$top = $('html,body');
		this.$errors = $('.jsc-form-validation-errors');
		this.$base = $('.jsc-form-validation');
		this.$trigger = $('.jsc-btn-validation');
		this.$complete = $('.jsc-form-required');
		this.$required = $('.jsc-btn-apply');
		this.wrappers = [];
		var self = this;
		$('.jsc-form-validation-wrapper').each(function(){
			self.wrappers.push(new PCLUB.FORM.CONTROLLER($(this)));
		});
		$('.jsc-form-radio-wrapper').each(function(){
			self.wrappers.push(new PCLUB.FORM.CONTROLLER_RADIO($(this)));
		});
		$('.jsc-form-select-wrapper').each(function(){
			self.wrappers.push(new PCLUB.FORM.SELECT($(this)));
		});
		$('.jsc-cb-wrapper').each(function(){
			self.wrappers.push(new PCLUB.FORM.CHECKBOX($(this)));
		});
		$('.jsc-form-textarea-wrapper').each(function(){
			self.wrappers.push(new PCLUB.FORM.CONTROLLER_TEXTAREA($(this)));
		});
	},
	bindEvent : function() {
		var self = this;
		this.$trigger.on('click', function(e){
			e.preventDefault();
			self.validate();
		});
	},
	validate : function(){
		var isError = false;
		for(var i = 0, length = this.wrappers.length; i < length; i++){
			if(! this.wrappers[i].validate()){
				isError = true;
			}
		}
		if(isError){
			this.$errors.show();
			var stopPosition = this.stopPosition =  this.$errors.offset().top- 10;
			this.$top.animate({scrollTop: stopPosition},500);

		} else {
			if(this.$trigger.hasClass('jsc-btn-link')){
				var href = this.$trigger.attr("href");
				location.href = href;
				this.$trigger.trigger('click');
				this.$base.trigger('submit');
			} else {
				this.$errors.hide();
				this.$complete.show();
				this.$required.show();
				this.$trigger.hide();
				this.$base.trigger('submit');
			}
		}
	}
};

PCLUB.FORM.CONTROLLER_RADIO = function($wrapper){
	this.$wrapper = $wrapper;
	this.init();
};
PCLUB.FORM.CONTROLLER_RADIO.prototype = {
	init : function(){
		this.setParameters();
	},
	setParameters : function(){
		this.$radio = this.$wrapper.find(':radio');
		this.$error = this.$wrapper.find('.jsc-form-radio-error');
	},
	validate : function(){
		var isError = this.$radio.filter(':checked').length === 0;
		if(isError){
			this.$error.show();
			this.$radio.closest('.jsc-form-radio').addClass('frm-radio-error');
		} else {
			this.$error.hide();
			this.$radio.closest('.jsc-form-radio').removeClass('frm-radio-error');
		}
		return !isError;
	}
};

PCLUB.FORM.SELECT = function($wrapper){
	this.$wrapper = $wrapper;
	this.init();
};
PCLUB.FORM.SELECT.prototype = {
	init : function(){
		this.setParameters();
	},
	setParameters : function(){
		this.$select = this.$wrapper.find('select');
		this.$options = this.$wrapper.find('option');
		this.$error = this.$wrapper.find('.jsc-form-select-error');
	},
	validate : function(){
		var isError = this.$select.filter(':visible').val() === 'default';
		if(isError){
			this.$select.closest('.jsc-form-select').addClass('frm-error');
			this.$error.show();
		} else {
			this.$select.closest('.jsc-form-select').removeClass('frm-error');
			this.$error.hide();
		}
		return !isError;
	}
};

PCLUB.FORM.CHECKBOX = function($wrapper){
	this.$wrapper = $wrapper;
	this.init();
};
PCLUB.FORM.CHECKBOX.prototype = {
	init : function(){
		this.setParameters();
	},
	setParameters : function(){
		this.$checkbox = this.$wrapper.find('input');
		this.$error = this.$wrapper.find('.jsc-form-validation-error');
	},
	validate : function(){
		var isError = this.$checkbox.filter(':checked').length === 0;
		if(isError){
			this.$error.show();
			this.$checkbox.closest('.jsc-cb-wrapper').addClass('frm-cb-error');
		} else {
			this.$error.hide();
			this.$checkbox.closest('.jsc-cb-wrapper').removeClass('frm-cb-error');
		}
		return !isError;
	},
	validate : function(){
		var isError = this.$targets.filter(':visible').filter(function(){
			return $(this).val().length === 0;
		}).length > 0;
		if(isError){
			this.$error.show();
			this.$targets.addClass('frm-error');
		} else {
			this.$error.hide();
			this.$targets.removeClass('frm-error');
		}
		return !isError;
	}
};

PCLUB.FORM.CONTROLLER_TEXTAREA = function($wrapper){
	this.$wrapper = $wrapper;
	this.init();
};
PCLUB.FORM.CONTROLLER_TEXTAREA.prototype = {
	init : function(){
		this.setParameters();
	},
	setParameters : function(){
		this.$targets = this.$wrapper.find('textarea');
		this.$error = this.$wrapper.find('.jsc-form-validation-error');
	},
	validate : function(){
		var isError = this.$targets.filter(':visible').filter(function(){
			return $(this).val().length === 0;
		}).length > 0;
		if(isError){
			this.$error.show();
			this.$targets.addClass('frm-error');
		} else {
			this.$error.hide();
			this.$targets.removeClass('frm-error');
		}
		return !isError;
	}
};

PCLUB.FORM.CONTROLLER = function($wrapper){
	this.$wrapper = $wrapper;
	this.init();
};
PCLUB.FORM.CONTROLLER.prototype = {
	init : function(){
		this.setParameters();
	},
	setParameters : function(){
		this.$targets = this.$wrapper.find('input');
		this.$error = this.$wrapper.find('.jsc-form-validation-error');
	},
	validate : function(){
		var isError = this.$targets.filter(':visible').filter(function(){
			return $(this).val().length === 0;
		}).length > 0;
		if(isError){
			this.$error.show();
			this.$targets.addClass('frm-error');
		} else {
			this.$error.hide();
			this.$targets.removeClass('frm-error');
		}
		return !isError;
	}
};

$(function(){
	PCLUB.FORM.TOTALVALIDATION.init();
});
