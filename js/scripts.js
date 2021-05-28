function newItem() {

    // 1. Adding a new item to the list:
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
    if (inputValue === '') {
        alert('You must enter something!');
    } else {
        $('#list').append(li);
    }

    // 2. Crossing out item from list
    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });

   // 3a Adding the delete button X

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    // 3b. Adding class: .delete {display: none} from the CSS:
    function deleteListItem() {
        li.classList.add('delete');
    }

    crossOutButton.on('click', deleteListItem);
    function deleteListItem(){
        li.addClass('delete')
    }

    //Reordering items: 
    $('#list').sortable();

}