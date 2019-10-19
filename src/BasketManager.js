class BasketManager{

    static findItemByTitle(basketArray, itemName){

        for(let i = 0; i < basketArray.length; i+=1){
            
            if(basketArray[i].title == itemName    ){
                return i;
            }
            
        }
        return -1;
    }
    
    static delete(itemTitle){
        var currUser = JSON.parse(localStorage.getItem('current_user'));        

        var itemIndex = this.findItemByTitle(currUser.basket, itemTitle);        

        currUser.basket.splice(itemIndex, 1);
        
        UserManager.updateUsersData(currUser);
    }

    static ereaseBasket(user){
        user.basket = Array();

        UserManager.updateUsersData(user);
    }

    static updateQuentity(item, quantity){
        var user = JSON.parse(localStorage.getItem('current_user'));

        var itemIndex = this.findItemByTitle(item);

        user.basket[itemIndex].quantity = quantity;

        UserManager.updateUsersData(user);
    }

    static addArticle(user, item){

        var index = this.findItemByTitle(user.basket, item.title);

        console.log(user.basket);
        

        console.log(index);
        

        if(index != -1){
            user.basket[index].quantity += item.quantity;

        }else{
            user.basket.push(item);
        }

    }


}