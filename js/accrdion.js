(function( $ ) {
    $.fn.accrdion = function( options ) {

        // Default options
        var configuration = $.extend({
            openByDefault: 'none', // first, all, last, none
            showArrow: true, // true, false
            displayStyle: 'single' // single, any
        }, options );
 
        return this.each(function() {
            // Do something to each element here.
        });

    }
}( jQuery ));