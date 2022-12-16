function addItemCard(item){
    const itemHTML = '<div class="card">\n' +
        '    <img src=" '+ item.imageUrl +'" width="300" height="250"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+ item.product +'</h5>\n' +
        '        <p class="card-text">'+ item.description +'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';

    const listItems = document.getElementById("list-items");
    listItems.innerHTML += itemHTML;
}

//step 3 below
function loadStorageSampleData(){
    if(!localStorage.getItem("items")){
        const sampleItems = [{'product':'juice',
        'img':'https://www.gs1india.org/media/Juice_pack.jpg',
        'description':'Orange and Apple juice fresh and delicious'},
        {'product':'Tayto',
        'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
        'description':'Cheese & Onion Chips'}];
        [{'product':'Ruffles Chicken',
        'img':'https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/XL/13086598_LXL1.jpg',
        'description':'Ruffles Potato Chips - Chicken'}];
        localStorage.setItem("items", JSON.stringify(sampleItems));
    }
}

const sampleItems = [{'name':'juice',
'img':'https://www.gs1india.org/media/Juice_pack.jpg',
'description':'Orange and Apple juice fresh and delicious'},
{'name':'Tayto',
'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
'description':'Cheese & Onion Chips'}];
localStorage.setItem("items", JSON.stringify(sampleItems));