
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

// REFACTORED CODE

$(function() {
  $('ul').on('click', '.shopping-item-toggle', function() {
    const item = $(this).closest('li').find('.shopping-item')
    $(item).toggleClass('shopping-item__checked');
  });
});


$(function() {
  $('ul').on('click', '.shopping-item-delete', function() {
    $(this).closest('li').remove()
  });
});


// ORIGINAL CODE

// $(function() {
//   $('ul').on('click', '.button-label', function(event) {
//     event.stopPropagation();

//     const pressedButton = $(this).text()
//     const item = $(this).closest('li').find('.shopping-item')

//     if (pressedButton === 'check') {
//       $(item).toggleClass('shopping-item__checked');
//     } else if (pressedButton === 'delete') {
//       $(this).closest('li').remove()
//     }
//   });
// });
