
    let menu = [];
    export function returnItemFunction(itemId){
        let requiredItem=menu.find(item => item.itemId === itemId);
        return requiredItem;
    }

    export const fetchMenu = async () => {
        try{
            const response = await fetch('http://localhost:5001/api/menu');
            if(!response.ok){
                throw new Error("Failed to fetch menu items");
            }

            const data = await response.json();
            console.log("Menu fetched successfully:", data);
            menu=data
            return data;
        }catch(error){
            console.error("Error fetching menu items:", error);
            return [];
        }
    };
