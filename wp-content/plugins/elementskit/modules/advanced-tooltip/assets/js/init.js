!function(t,i){"use strict";var e={init:function(){i.hooks.addAction("frontend/element_ready/widget",e.ready)},ready:function(i){var e=i.data("settings");if(void 0!==e){if("_tippy"in i[0])i[0]._tippy.destroy();if("ekit_adv_tooltip_enable"in e&&"yes"===e.ekit_adv_tooltip_enable&&e.ekit_adv_tooltip_content){var o={content:e.ekit_adv_tooltip_content,placement:e.ekit_adv_tooltip_position,animation:e.ekit_adv_tooltip_animation,arrow:!!e.ekit_adv_tooltip_arrow,trigger:e.ekit_adv_tooltip_trigger,onShow:function(i){t(i.popper).addClass("ekit-tippy ekit-tippy-"+i.reference.dataset.id)}};e.ekit_adv_tooltip_width.size&&(o.maxWidth=e.ekit_adv_tooltip_width.size),o.offset=[0,10],"ekit_adv_tooltip_offset_x"in e&&""!==e.ekit_adv_tooltip_offset_x&&(o.offset[0]=e.ekit_adv_tooltip_offset_x),"ekit_adv_tooltip_offset_y"in e&&""!==e.ekit_adv_tooltip_offset_y&&(o.offset[1]=e.ekit_adv_tooltip_offset_y),tippy(".elementor-element-"+i.data("id"),o)}}}};t(window).on("elementor/frontend/init",e.init)}(jQuery,window.elementorFrontend);