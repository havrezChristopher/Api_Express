export const AuthController = {
    login : (reg,res) => {

        const {username,password}=reg.body;
        console.log(`Identifiant :${username}  ,  Mots de passe : ${password}`);


    }
}