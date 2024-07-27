import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems (userId) {
    const items = [];
    const docRef = query(collection(db, "users",userId,"items"))
    const documents = await getDocs(docRef);
    if(!documents.empty)
    {
        documents.forEach(
            (document)=>{
                const item ={
                    id: document.id,
                    ...document.data()
                }
                items.push(item)
            }
        )
        return items;

    }
    else{
        return null
    }
};
  

async function addItem(userId, item) {
    if(!item.name || !item.quantity || !item.category)
        throw new Error("Item properties not complete");
    try{
        const docRef = await addDoc(collection(db, "users",userId,"items"),item)
    }
    catch (error)
    {
        console.error("Error, we cnnot add to the database")
    }
 
};

  
export {addItem, getItems}