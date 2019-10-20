class UserManager{

    static createUser(user){
        var users = JSON.parse(localStorage.getItem('users'));

        if(users === null){
            users = Array(); 
        }
        
        users.push(user);

        localStorage.setItem('users', JSON.stringify(users));

        localStorage.setItem('current_user', JSON.stringify(user));

        this.connectUser(user);
    }


    static connectUser(user){
        localStorage.setItem('current_user', JSON.stringify(user));

        SessionManager.makeUserEvent();
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


    static findUserByEmail(userMail){

        var users = JSON.parse(localStorage.getItem('users'));
        var currUsr = null;

        if(users === null){
            return null;
        }

        users.forEach(user => {
            
            if(user.mail === userMail){
                currUsr = user;
            }

        });
        
        return currUsr;
    }

    static updateUsersData(current_user){

        var users = JSON.parse(localStorage.getItem('users'));
        
        var userIndex = this.findCurrentUserInDatabase();

        users[userIndex] = current_user;

        localStorage.setItem('users', JSON.stringify(users));

        localStorage.setItem('current_user',  JSON.stringify(current_user))
    }

    static signout(user){
    
        localStorage.removeItem('current_user');

        SessionManager.makeUserEvent();
    }

}