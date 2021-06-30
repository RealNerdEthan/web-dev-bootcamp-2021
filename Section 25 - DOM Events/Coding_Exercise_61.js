const productForm = document.querySelector('#productForm');
const qtyContainer = document.querySelector('#list');

productForm.addEventListener('submit', function(event){
    event.preventDefault();
    const productInput =productForm.elements.product;
    const qtyInput = productForm.elements.qty;
    addGroceryItem(qtyInput.value, productInput.value);
    productInput.value = '';
    qtyInput.value = '';
});

const addGroceryItem = function(qty, product){
    const newItem = document.createElement('li');
    newItem.append(qty);
    newItem.append(` ${product}`);
    qtyContainer.append(newItem);
};

//An alternative way to do the addGroveryItem function
// const addGroceryItem = function(qty, product){
//     const newItem = document.createElement('li');
//     newItem.innerText = `${qty} ${product}`;
//     list.appendChild(newItem);
// };