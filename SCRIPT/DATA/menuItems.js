export function returnItemFunction(itemId){
    let requiredItem=menu.find(item => item.itemId === itemId);
    return requiredItem;
}

export const menu =[{
        itemName:"Coffee",
        itemImage:"../../IMAGES/Hot-Coffee.png",
        itemDescription:"Coffee is a beverage brewed from roasted, ground coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content, but decaffeinated coffee is also commercially available.",
        itemMoreInfo:"Coffee production in India is primarily concentrated in the hill tracts of South Indian states, with Karnataka leading the way, accounting for 71% of the country's coffee production. The Kodagu district alone contributes 33% of India's total coffee output. Kerala follows with 21%, and Tamil Nadu contributes 5%, which equals approximately 8,200 tonnes.Coffee is grown in three primary regions in India: Karnataka, Kerala, and Tamil Nadu. These states form the traditional coffee-growing region. In addition, newer coffee-growing areas have developed in non-traditional regions such as Andhra Pradesh and Odisha on the eastern coast. Northeastern India, comprising Assam, Manipur, Meghalaya, Mizoram, Tripura, Nagaland, and Arunachal Pradesh—collectively known as the \"Seven Sister States\"—also grows coffee.The two main types of coffee grown in India are Arabica and Robusta. Arabica was first introduced in the Baba Budan Giri hill ranges of Chikmagalur district in Karnataka during the 17th century. Over the years, it has been marketed under popular brand names such as Kent and S.795.",
        itemPrice:20,
        itemId:"1"  ,
    },{
        itemName: "Black Tea",
        itemImage: "../../IMAGES/Black-Tea.webp",
        itemDescription: "Black tea is a type of tea that is more oxidized than oolong and green teas. Black tea is generally stronger in flavor than other teas.",
        itemMoreInfo:"Black tea is one of the most popular and widely consumed teas in the world, known for its rich flavor, dark color, and higher caffeine content compared to other teas. It undergoes full oxidation, which enhances its bold taste and deep aroma. Some studies suggest that black tea contains antioxidants like theaflavins and thearubigins, which may support heart health by improving cholesterol levels and reducing the risk of cardiovascular diseases. Additionally, black tea has been linked to potential benefits such as improved gut health, better focus, and reduced stress levels due to the presence of L-theanine, an amino acid known for its calming effects. Drinking black tea in moderation may also help regulate blood sugar levels and improve digestion, while its polyphenols may have anti-inflammatory properties that contribute to overall wellness. Certain varieties, such as Darjeeling, Assam, Earl Grey, and English Breakfast, offer unique flavors and aromas, making black tea a versatile beverage that can be enjoyed plain, with milk, or infused with spices.",
        itemPrice: 15,
        itemId: "2",
    },{
        itemName: "Green Tea",
        itemImage: "../../IMAGES/Green-Tea.webp",
        itemDescription: "Green tea is a type of tea made from the leaves and buds of the Camellia sinensis that have not undergone the withering and oxidation process that creates oolong teas and black teas.",
        itemMoreInfo:"Many claims suggest that green tea offers significant health benefits, but scientific research has found little strong evidence to support them. While its caffeine content may enhance mental alertness, studies show weak and inconclusive evidence that it reduces the risk of cancer or cardiovascular diseases, and there is no proven effect on weight loss. Some antioxidants in green tea, such as catechins, are believed to have positive effects on health, but their actual impact remains uncertain. Excessive consumption, particularly of green tea extract, has been linked to liver damage, digestive issues, and, in rare cases, insomnia, high blood pressure, and skin reactions. Additionally, drinking too much green tea may interfere with iron absorption, potentially leading to anemia in some individuals. Overall, green tea is safe and can be enjoyed as a refreshing beverage, but its health benefits are often overstated, and excessive intake may lead to adverse effects.",
        itemPrice: 15,
        itemId: "3",
    },

];