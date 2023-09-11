var filter = ''
var block = $('.block-1')
$('#select-1').on('change', function () {
  block.removeClass(filter)
  filter = $(this).find(':selected').val()
  block.addClass(filter)
})

// ===================
