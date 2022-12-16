// create ItemsController class with tasks/items and currentId property in constructor
class ItemsController {
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
        }

// create the addItem method and increment the currentID 
addItem(product, description, createdAt, imageUrl) {
    const items = {
        id: ++this.currentId,
        product: product,
        description: description,
        createdAt: createdAt,
        imageUrl: imageUrl        
        };  

//push the task and items to their properties
this.items.push(items);   

// save items to local storage
localStorage.setItem("items", JSON.stringify(this.items));     
    };
}

// save method that will POST the new items to local data with fetch function
save(product, description, createdAt, imageUrl); {
    const data = { product,  description, createdAt, imageUrl };

    fetch('http://localhost:8080/item/all', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}

//Need to implement below methods
update({product, description, createdAt, imageUrl}); {    
}

delete(itemId); {
    
}

findById(itemId); {
    
}

let bodyOilOne = new ItemsController(0);

bodyOilOne.addItem('Flor', 'Body Oil', 'Nov 11', src="https://www.eternallycharmed.com/collections/artisan-body-oils/products/flor");

let soapOne = new ItemsController(0);

soapOne.addItem('Cabin in the Woods', 'Body Soap', 'Nov 11', src="https://www.eternallycharmed.com/collections/artisan-soap/products/cabin-in-the-woods");



