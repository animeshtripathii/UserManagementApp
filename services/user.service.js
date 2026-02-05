import users from '../db/users.js';

export const userService = (name, email) => {
    console.log("Service Started: Creating user for", name); 

    const newUser = { id: Date.now().toString(), name, email };
    users.push(newUser);
    
    console.log("Service Success: User added to DB"); 
    return newUser;
}