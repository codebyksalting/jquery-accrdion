(function( $ ) {
    $.fn.accrdion = function( options ) {

        // Default options
        var configuration = $.extend({
            openFirstByDefault: true, // true, false
            displayStyle: 'single', // single, any
            toggleSpeed: 'fast' // instant, slow, medium, fast
        }, options );

        // Hide all except the first item when openByDefault is set to 'first
        function closeFunc( $_obj, $_index = -1 ) {
            $_needle = $_obj.find( '.accrdion-entry' );

            $_needle.each(function( index ) {
                $_obj_entry = $(this);
                $_flag = true;
                
                if ( configuration.openByDefault && $_index == -1 ) {
                    $_flag = false;

                    if ( index == 0 ) {
                        $_needle.addClass('accrdion-active');
                    }

                    if ( configuration.displayStyle === 'single' && index > 0 ) {
                        $_flag = true;
                    }
                }

                //console.log( $_index, index ); 

                if ( $_flag ) {
                    if ( $_obj_entry.hasClass('accrdion-active') ) {
                        $_obj_entry.removeClass('accrdion-active');
                    }

                    // Use hide() for instant toggle
                    if ( configuration.toggleSpeed === 'instant' ) {
                        $_obj_entry.find('.accrdion-content').hide();
                    } else {
                        $_obj_entry.find('.accrdion-content').slideUp( configuration.toggleSpeed );
                    }
                }
            });

            // if ( $_index < 0 ) {
            //     $_index++;
            // }

            // $_needle.eq( $_index ).addClass('accrdion-active');
            console.log(  $_obj.find( '.accrdion-entry' ), $_index );
            if ( !$_needle.eq( $_index ).hasClass('accrdion-active') ) {
                $_needle.addClass('accrdion-active');

                // Use show() for instant toggle
                if ( configuration.toggleSpeed === 'instant' ) {
                    $_needle.eq( $_index ).find('.accrdion-content').show();
                } else {
                    $_needle.eq( $_index ).find('.accrdion-content').slideDown( configuration.toggleSpeed );
                }
            }
        }

        return this.each(function() {
            const $_accr_wrapper = $(this);

            // Add class for styling purposes
            $_accr_wrapper.addClass( `accrdion-wrapper ${configuration.displayStyle}` );          

            // Set initial behavior 
            closeFunc( $_accr_wrapper );
 
            // Add the event handler and pass the current item index
            $_accr_wrapper.on('click', '.accrdion-header', function(event) {
                const $_accr_clicked = $(this);
                const $_accr_index = $_accr_clicked.parent('.accrdion-entry').index();

                closeFunc( $_accr_wrapper, $_accr_index );
            });
        });

    }
}( jQuery ));