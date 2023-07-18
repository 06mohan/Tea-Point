const teaItems = [
    {
        "title":"Americano",
        "price": "$20",
        "caption":"the basic principle is always the same: espresso, hot water, and nothing else. An Americano is traditionally served 'black', meaning without milk."
    },
    {
        "title":"Cappuccino",
        "price": "$20",
        "caption": "A cappuccino is the perfect balance of espresso, steamed milk and foam."
    },
    {
        "title":"Macchiato",
        "price": "$20",
        "caption": "The macchiato is an espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through. "
    },
    {
        "title":"Americano",
        "price": "$20",
        "caption":"the basic principle is always the same: espresso, hot water, and nothing else. An Americano is traditionally served 'black', meaning without milk."
    },
    {
        "title":"Cappuccino",
        "price": "$20",
        "caption": "A cappuccino is the perfect balance of espresso, steamed milk and foam."
    },
    {
        "title":"Macchiato",
        "price": "$20",
        "caption": "The macchiato is an espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through. "
    },
    {
        "title":"Americano",
        "price": "$20",
        "caption":"the basic principle is always the same: espresso, hot water, and nothing else. An Americano is traditionally served 'black', meaning without milk."
    },
    {
        "title":"Cappuccino",
        "price": "$20",
        "caption": "A cappuccino is the perfect balance of espresso, steamed milk and foam." 
    },
    {
        "title":"Macchiato",
        "price": "$20",
        "caption": "The macchiato is an espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through. "
    },
];

const hotDrinks = [
   
    {
        "title":"Hot Chocolate",
        "price": "$20",
        "caption":"Hot chocolate, also known as hot cocoa or drinking chocolate, is a heated drink consisting of shaved or melted chocolate or cocoa powder, heated milk or water, and usually a sweetener."
    },
    {
        "title":"White Chocolate",
        "price": "$20",
        "caption":"White chocolate is a confectionery typically made of sugar, milk, and cocoa butter, but no cocoa solids. It is pale ivory in color, and lacks many of the compounds found in milk, dark, and other chocolates"  
    },
    {
        "title":"Vanilla Tea",
        "price": "$20",
        "caption":"Vanilla is a common tea flavoring that imparts a slightly sweet, dessert-like flavor to teas."   
    },
    {
        "title":"Hot Chocolate",
        "price": "$20",
        "caption":"Hot chocolate, also known as hot cocoa or drinking chocolate, is a heated drink consisting of shaved or melted chocolate or cocoa powder, heated milk or water, and usually a sweetener."
    },
    {
        "title":"White Chocolate",
        "price": "$20",
        "caption":"White chocolate is a confectionery typically made of sugar, milk, and cocoa butter, but no cocoa solids. It is pale ivory in color, and lacks many of the compounds found in milk, dark, and other chocolates"  
    },
    {
        "title":"Vanilla Tea",
        "price": "$20",
        "caption":"Vanilla is a common tea flavoring that imparts a slightly sweet, dessert-like flavor to teas."   
    },
    {
        "title":"Hot Chocolate",
        "price": "$20",
        "caption":"Hot chocolate, also known as hot cocoa or drinking chocolate, is a heated drink consisting of shaved or melted chocolate or cocoa powder, heated milk or water, and usually a sweetener."
    },
    {
        "title":"White Chocolate",
        "price": "$20",
        "caption":"White chocolate is a confectionery typically made of sugar, milk, and cocoa butter, but no cocoa solids. It is pale ivory in color, and lacks many of the compounds found in milk, dark, and other chocolates"  
    },
    {
        "title":"Vanilla Tea",
        "price": "$20",
        "caption":"Vanilla is a common tea flavoring that imparts a slightly sweet, dessert-like flavor to teas."   
    },
];

const SnacksItems = [
    {
        "title":"Cupcake",
        "price": "$20",
        "caption":" a small cake designed to serve one person, which may be baked in a small thin paper or aluminum cup."
    },
    {
        "title":"Doughnut",
        "price": "$20",
        "caption":"Donuts are filled with carbs, which means you get instant energy as soon as you finish a donut."
    },
    {
        "title":"cheesecake",
        "price": "$20",
        "caption":"Cheesecake is a sweet dessert consisting of one or more layers." 
    },
    {
        "title":"Cupcake",
        "price": "$20",
        "caption":" a small cake designed to serve one person, which may be baked in a small thin paper or aluminum cup."
    },
    {
        "title":"Doughnut",
        "price": "$20",
        "caption":"Donuts are filled with carbs, which means you get instant energy as soon as you finish a donut."
    },
    {
        "title":"cheesecake",
        "price": "$20",
        "caption":"Cheesecake is a sweet dessert consisting of one or more layers." 
    },
    {
        "title":"Cupcake",
        "price": "$20",
        "caption":" a small cake designed to serve one person, which may be baked in a small thin paper or aluminum cup."
    },
    {
        "title":"Doughnut",
        "price": "$20",
        "caption":"Donuts are filled with carbs, which means you get instant energy as soon as you finish a donut."
    },
    {
        "title":"cheesecake",
        "price": "$20",
        "caption":"Cheesecake is a sweet dessert consisting of one or more layers." 
    },
];


function getData(name){
    let tryResponse =  teaItems;
    if(name === 'drinks'){
        tryResponse = hotDrinks;
    }
    else if(name === 'snacks'){
        tryResponse = SnacksItems;
    }
    else{
        tryResponse = teaItems;
    }
    const response = tryResponse.map(function(element){
        return "<div class='tea-Response'>\
                    <div class='cost'><h1>"+element.title+"</h1>\
                    <span>"+element.price+"</span></div>\
                    <p>"+element.caption+"</p>\
                </div>";
    })
    console.log(response);

    document.getElementById("menu").innerHTML = response.join("");
}

getData('tea');
