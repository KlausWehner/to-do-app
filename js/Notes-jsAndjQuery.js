function newItem() {
    //1. Adding a new item to the list of items: 
    //let li = document.createElement('li')
    let li = $('<li></li>');
    //let inputValue = document.getElementById('input').value;
    let inputValue = $('#input').val();
    // let text = document.createTextNode(inputValue);
    // li.appendChild(text);
    li.append(inputValue);
    // if (inputValue === '') {
    //     alert("You must write something!");
    //   } else {
    //     let list = document.querySelector('#list');
    //     list.appendChild(li);
    //   }
    if (inputValue === '') {
        alert('You must enter something!');
    } else {
        $('#list').append(li);
    }

    // // 2. Crossing out item from list

    // function crossOut() {
    //     li.classList.toggle('strike');
    // }

    // li.addEventListener('dblclick', crossOut);

    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });


    // // 3a Adding the delete button X

    // let crossOutButton = document.createElement('crossOutButton');
    // crossOutButton.appendChild(document.createTextNode('X'));
    // li.appendChild(crossOutButton);

    // crossOutButton.addEventListener('click', DeleteListItem);

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



    //Reordering items: already in jquery
    $('#list').sortable();

}