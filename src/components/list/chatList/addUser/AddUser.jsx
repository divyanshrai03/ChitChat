// import "./addUser.css";
// import { db } from "../../../../lib/firebase";
// import {arrayUnion,collection,doc,getDoc,getDocs,query,serverTimestamp,setDoc,updateDoc,where,} from "firebase/firestore";
// import { useState } from "react";
// import { useUserStore } from "../../../../lib/userStore";

// const AddUser = () => {
//   const [user, setUser] = useState(null);

//   const { currentUser } = useUserStore();

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const username = formData.get("username");
    

//     try {
//       const userRef = collection(db, "users");

//       const q = query(userRef, where("username", "==", username));

//       const querySnapShot = await getDocs(q);

//       if (!querySnapShot.empty) {
//         setUser(querySnapShot.docs[0].data());
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleAdd = async () => {
//     const chatRef = collection(db, "chats");
//     const userChatsRef = collection(db, "userchats");
  
//     try {
//       const newChatRef = doc(chatRef);
  
//       await setDoc(newChatRef, {
//         createdAt: serverTimestamp(),
//         messages: [],
//       });
  
//       const userChatsDocRef = doc(userChatsRef, user.id);
//       const currentUserChatsDocRef = doc(userChatsRef, currentUser.id);
  
//       const userChatsDoc = await getDoc(userChatsDocRef);
//       const currentUserChatsDoc = await getDoc(currentUserChatsDocRef);
  
//       if (!userChatsDoc.exists()) {
//         await setDoc(userChatsDocRef, { chats: [] });
//       }
  
//       if (!currentUserChatsDoc.exists()) {
//         await setDoc(currentUserChatsDocRef, { chats: [] });
//       }
  
//       await updateDoc(userChatsDocRef, {
//         chats: arrayUnion({
//           chatId: newChatRef.id,
//           lastMessage: "",
//           receiverId: currentUser.id,
//           updatedAt: Date.now(),
//         }),
//       });
  
//       await updateDoc(currentUserChatsDocRef, {
//         chats: arrayUnion({
//           chatId: newChatRef.id,
//           lastMessage: "",
//           receiverId: user.id,
//           updatedAt: Date.now(),
//         }),
//       });
//     } catch (err) {
//       console.log(err);
//     }
//     document.querySelector(".addUser").style.display="none";
    
//   };

//   return (
//     <div className="addUser">
//       <form onSubmit={handleSearch}>
//         <input type="text" placeholder="Username" name="username" />
//         <button>Search</button>
//       </form>
//       {user && (
//         <div className="user">
//           <div className="detail">
//             <img src={user.avatar || "./avatar.png"} alt="" />
//             <span>{user.username}</span>
//           </div>
//           <button onClick={handleAdd}>Add User</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddUser;


import "./addUser.css";
import { db } from "../../../../lib/firebase";
import {arrayUnion,collection,doc,getDoc,getDocs,query,serverTimestamp,setDoc,updateDoc,where,} from "firebase/firestore";
import { useState } from "react";
import { useUserStore } from "../../../../lib/userStore";

const AddUser = () => {
  const [user, setUser] = useState(null);

  const { currentUser } = useUserStore();

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");

    try {
      const userRef = collection(db, "users");

      const q = query(userRef, where("username", "==", username));

      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data());
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async () => {
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userChats");

    try {
      const newChatRef = doc(chatRef);

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      const userChatDocRef = doc(userChatsRef, user.id);
      const currentUserChatDocRef = doc(userChatsRef, currentUser.id);

      // Ensure the user chat document exists
      const userChatDocSnapshot = await getDoc(userChatDocRef);
      if (!userChatDocSnapshot.exists()) {
        await setDoc(userChatDocRef, { chats: [] });
      }

      // Ensure the current user chat document exists
      const currentUserChatDocSnapshot = await getDoc(currentUserChatDocRef);
      if (!currentUserChatDocSnapshot.exists()) {
        await setDoc(currentUserChatDocRef, { chats: [] });
      }

      await updateDoc(userChatDocRef, {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: currentUser.id,
          updatedAt: Date.now(),
        }),
      });

      await updateDoc(currentUserChatDocRef, {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: user.id,
          updatedAt: Date.now(),
        }),
      });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="addUser">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      {user && (
        <div className="user">
          <div className="detail">
            <img src={user.avatar || "./avatar.png"} alt="" />
            <span>{user.username}</span>
          </div>
          <button onClick={handleAdd}>Add User</button>
        </div>
      )}
    </div>
  );
};

export default AddUser;