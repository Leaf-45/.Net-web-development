$(function(){
    $('#birthday').pickadate();

    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // title load animation
   $('#title').addClass(getTitleAnimation())
   // toast

   $('.btn-outline-primary').on('click', noBallonsChecked)
   // buttons for checking or unchecking all checkboxes
   $('#check').on('click', checkAllBoxes)
   $('#uncheck').on('click', uncheckAllBoxes)

   // color change when hovering over labels
   $('#red-label').hover(function()
   {
    $('#title').css('color', 'red')
   },
   function()
   {
    $('#title').removeAttr('style')
   })
   
   $('#green-label').hover(function()
   {
    $('#title').css('color', 'green')
   },
   function()
   {
    $('#title').removeAttr('style')
   })

   $('#blue-label').hover(function()
   {
    $('#title').css('color', 'blue')
   },
   function()
   {
    $('#title').removeAttr('style')
   })

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });


});

function noBallonsChecked()
{
    if(!$('.form-check-input').is(':checked'))
    {
        $('#toast').toast({ autohide: false }).toast('show')
    }
}

function getTitleAnimation()
{
    let array = ["animate__bounce", "animate__flash", "animate__pulse", "animate__rubberBand", "animate__shakeX",
    "animate__shakeY", "animate__headShake", "animate__swing", "animate__tada",
    "animate__wobble", "animate__jello", "animate__heartBeat"];

    return array[Math.floor(Math.random() * array.length)];
}

function checkAllBoxes(event)
{
    event.preventDefault();
    $('img').removeClass().addClass('animate__animated animate__bounceInDown')
    $('.form-check-input').prop("checked", true);
}

function uncheckAllBoxes(event)
{
    event.preventDefault();
    $('img').addClass('animate__animated animate__bounceOutUp')
    $('.form-check-input').prop("checked", false);
}