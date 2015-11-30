(function($){
    "use strict";
    
    $.fn.stickyNav    = function(){
        this.addClass('navbar navbar-default navbar-fixed-top');
        $("body").css({
            'padding-top'   : this.outerHeight(),
        });
        return this;
    };
    
    $.fn.stickyFooter   = function(){
        $("html").css({
            'position'      : 'relative',
            'min-height'    : '100%'
        });
        $("body").css({
            'margin-bottom' : this.outerHeight()
        });
        this.css({
            'position'  :'absolute',
            'bottom'    : 0,
            'width'     : '100%',
            'height'    : this.outerHeight()
        });
        return this;
    };
    
})(jQuery);
