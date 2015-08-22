/*
 *  Name: Category Filter
 *  Author: Niaj Morshed
 *  Author Url: http://niaj.me
 *  Description:
 *  This is for filter content by category.
 *  Demo: http://devscorner.com/category-filter/
 */

;(function($) {

    $('#cat-filter').on('click','.checkbox',function(){

        var grid = $('#course_list > .course_grid');        
        grid.fadeOut();
        var catChecked = 0;

        $(".checkbox").each(function(){

            if ( $(this).prop( "checked" ) == true ) {
                
                catChecked += 1;
                var dl = $(this).val().toLowerCase().replace(' ','-');
                $('.' + dl ).closest(grid).fadeIn();
                //alert(dl);
            };      
        });
        //alert(catChecked);
        if ( catChecked == 0 ) {
            grid.fadeIn();
        };
    });

})(jQuery);