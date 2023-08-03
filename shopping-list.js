document.addEventListener('DOMContentLoaded', function () {
    const shoppingList = document.getElementById('shoppingList');
    const input = document.getElementById('newItem');
    const addButton = document.getElementById('addItemButton');
  
    addButton.addEventListener('click', function () {
      const newItemValue = input.value.trim();
  
      if (newItemValue !== '') {
        input.value = '';
  
        const listItem = document.createElement('li');
        const itemText = document.createElement('span');
        const deleteButton = document.createElement('button');
  
        itemText.textContent = newItemValue;
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
  
        listItem.appendChild(itemText);
        listItem.appendChild(deleteButton);
  
        shoppingList.appendChild(listItem);
  
        deleteButton.addEventListener('click', function () {
          listItem.remove();
        });
  
        input.focus();
      }
    });
  });
  