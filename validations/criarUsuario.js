import alert from "../components/alert.js";

export function validationCadastro({nome,email,senha}){
    if((nome && senha && email) === ''){
        alert({message:"Os inputs não podem ser vazios :(",bgcolor:"bg-danger"})
        return false;  
    }else{
        alert({message:"Usuario criado com sucesso",bgcolor:"bg-success"})
        return true
    }
}