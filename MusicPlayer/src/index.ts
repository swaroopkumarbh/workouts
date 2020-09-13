
import { User } from './User';

let user;



window.addEventListener("load", () => {
    user = new User();
    user.getSongs();

});
