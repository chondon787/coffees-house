import toast from "react-hot-toast";

 

 

 

 const getFavoriteList = () =>{
    const storedList = localStorage.getItem('favorites');
    if(storedList){
         
        return JSON.parse(storedList)
    }
     return [];
 }

 const addFavoriteList = (coffee) =>{
    const addItem = getFavoriteList();
    const exists = addItem.find(item => item.id === coffee.id)
    if(exists){
        return toast.error('coffee already exists!');
    }else{
        addItem.push(coffee)
        const favoriteListStr = JSON.stringify(addItem);
        localStorage.setItem('favorites', favoriteListStr)
        toast.success('Successfully created!');
    }
 }

 const removeFavorites =(id)=>{
    const addItem = getFavoriteList();
    const remaining = addItem.filter(coffee => coffee.id != id)
     const favoriteListStr = JSON.stringify(remaining);
     localStorage.setItem('favorites', favoriteListStr)
        toast.success('Removed Successfully !');
 }

 export{addFavoriteList,getFavoriteList,removeFavorites }