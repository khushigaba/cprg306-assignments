import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems (userId) {
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
                item.push(item)
            }
        )
        return item;

    }
    else{
        return null
    }
};
  

export async function addItem(userId, item) {
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

  
export const deleteItem = async (userId, itemId) => {
    const itemRef = doc(db, `users/${userId}/items`, itemId);
    await deleteDoc(itemRef);
};