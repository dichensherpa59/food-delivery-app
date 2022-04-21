import { collection, doc, getDocs, orderBy, query, setDoc, } from "firebase/firestore";
import { firestore } from "../firebase.config"
// saving new item
export  const saveItem = async (data) => {
  // setDoc helps to set new value if  it is not there it will create it and if it is there than it will update it
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, { merge: true, }
  );
};

// details food items
export const getAllFoodItems = async () => {
  // docs method will help to get all the details from the firestore database
  const items = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};