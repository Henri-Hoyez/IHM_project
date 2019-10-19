class UserManager{

    static createUser(user){
        var users = JSON.parse(localStorage.getItem('users'));

        if(users === null){
            users = Array(); 
        }
        users.push(user);

        localStorage.setItem('users', JSON.stringify(users));

        localStorage.setItem('current_user', JSON.stringify(user));
    }

    static findCurrentUserInDatabase(){

        var current_user = JSON.parse(localStorage.getItem('current_user'));

        var users = JSON.parse(localStorage.getItem('users'));        

        for(let i = 0; i < users.length; i+=1){
            if( JSON.stringify(current_user) == JSON.stringify(users[i]) ){                                
                return i;
            }  
        }
        return -1;
    }

    static updateUsersData(current_user){

        var users = JSON.parse(localStorage.getItem('users'));
        
        var userIndex = this.findCurrentUserInDatabase();

        users[userIndex] = current_user;

        localStorage.setItem('users', JSON.stringify(users));

        localStorage.setItem('current_user',  JSON.stringify(current_user))
    }

    static signout(user){
        console.log('deconection');
        

        localStorage.removeItem('current_user');


    }

}