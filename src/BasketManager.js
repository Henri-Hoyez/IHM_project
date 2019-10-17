class BasketManager{

    static findItemByTitle(basketArray, itemName){

        for(let i = 0; i < basketArray.length; i+=1){
            
            if(basketArray[i].title == itemName    ){
                return i;
            }
            
        }
        return -1;
    }

    static findCurrentUserInDatabase(){

        var current_user = localStorage.getItem('current_user');

        var users = localStorage.getItem('users');

        for(let i = 0; i < users.length; i+=1){
            
            if( users[i] == current_user ){
                return i;
            }
            
        }
        return -1;
    }
    
    static delete(itemTitle){

        var currUser = JSON.parse(localStorage.getItem('current_user'));        

        var itemIndex = this.findItemByTitle(currUser.basket, itemTitle);

        console.log(currUser.basket);
        

        currUser.basket.splice(itemIndex, 1);
        
        console.log(currUser.basket);

        this.updateUsersData(currUser);

        localStorage.setItem('current_user', currUser);
    }


    static updateUsersData(current_user){

        var userIndex = this.findCurrentUserInDatabase();

        var users = JSON.parse(localStorage.getItem('users'));

        users[userIndex] = current_user;

        localStorage.setItem('users', users);
    }

    updateQuantity(currUser, item, newQuantity){

    }





}