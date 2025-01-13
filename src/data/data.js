const products = [

    // LATAS    
    {
        id: 1,
        name: "Summer Ale",
        image:"../../img/latas.jpg",
        price: 1500,
        category: "Lata",
        description: ""
    },

    {
        id: 2,
        name: "Session Ipa",
        image:"../../img/latas.jpg",
        price: 1500,
        category: "Lata",
        description: ""
    },

    {
        id: 3,
        name: "English Porter",
        image:"../../img/latas.jpg",
        price: 1500,
        category: "Lata",
        description: ""
    },

    {
        id: 4,
        name: "Florida Honey",
        image:"../../img/latas.jpg",
        price: 1500,
        category: "Lata",
        description: ""
    },

    {
        id: 5,
        name: "American Ipa",
        image:"../../img/latas.jpg",
        price: 1500,
        category: "Lata",
        description: ""
    },

    // CHOPERAS 20L
    {
        id: 6,
        name: "Summer Ale",
        image:"../../img/chopera.jpg",
        price: 22500,
        category: "Chopera 20L",
        description: ""
    },

    {
        id: 7,
        name: "Session Ipa",
        image:"../../img/chopera.jpg",
        price: 22500,
        category: "Chopera 20L",
        description: ""
    },

    {
        id: 8,
        name: "English Porter",
        image:"../../img/chopera.jpg",
        price: 22500,
        category: "Chopera 20L",
        description: ""
    },

    {
        id: 9,
        name: "Florida Honey",
        image:"../../img/chopera.jpg",
        price: 22500,
        category: "Chopera 20L",
        description: ""
    },

    {
        id: 10,
        name: "American Ipa",
        image:"../../img/chopera.jpg",
        price: 22500,
        category: "Chopera 20L",
        description: ""
    },

    // CHOPERAS 50L
    {
        id: 11,
        name: "Summer Ale",
        image:"../../img/chopera.jpg",
        price: 30000,
        category: "Chopera 50L",
        description: ""
    },

    {
        id: 12,
        name: "Session Ipa",
        image:"../../img/chopera.jpg",
        price: 30000,
        category: "Chopera 50L",
        description: ""
    },

    {
        id: 13,
        name: "English Porter",
        image:"../../img/chopera.jpg",
        price: 30000,
        category: "Chopera 50L",
        description: ""
    },

    {
        id: 14,
        name: "Florida Honey",
        image:"../../img/chopera.jpg",
        price: 30000,
        category: "Chopera 50L",
        description: ""
    },

    {
        id: 15,
        name: "American Ipa",
        image:"../../img/chopera.jpg",
        price: 30000,
        category: "Chopera 50L",
        description: ""
    },
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export {getProducts}