
$(function() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();

    const newItem = $(this).find('input[name="shopping-list-entry"]').val()
    
    $('.shopping-list').prepend(
      `<li>
      <span class="shopping-item">${newItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
      </li>`
      );
  });
});


$(function() {
  $('ul').on('click', '.button-label', function(event) {
    event.stopPropagation();

    const pressed_button = $(this).text()
    const item = $(this).closest('li').find('.shopping-item')

    // if the button pressed was "check"
    if (pressed_button === 'check') {
      // toggle class ".shopping-item__checked" on item
      $(item).toggleClass('shopping-item__checked');
      // if the button pressed was "delete"
    } else if (pressed_button === 'delete') {
      // remove the list item
      $(this).closest('li').remove()
    }
  });
});
