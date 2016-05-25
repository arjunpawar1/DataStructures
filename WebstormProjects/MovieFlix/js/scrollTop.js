/**
 * Created by arjun on 5/21/2016.
 */

$(document).ready(function()
{

    var btn = $('.back-to-top');

    //for animation
    btn.on('click',function(e)
    {
        $('html,body').animate(
            {
                scrollTop:0
            },500
        );
        e.preventDefault();
    });


    $(window).on('scroll',function()
    {
        var self = $(this),
            height = self.height(),
            top = self.scrollTop();

        if(top>=height)
        {
            if(!btn.is(':visible'))
            {
                btn.show();
            }
            else
            {
                btn.hide();
            }
        }
        else
        {
            btn.hide();
        }
    })

});
