import { useState, useEffect } from "react"
import styles from "./rightLogin.module.css"

export default function RightLogin(){

    // Const criada para definir se vai ser login ou register
    const [estado2, setEstado2] = useState('Login')

    function cadastrarUsuario(e){
        e.preventDefault()
    }

    function mudarParaRegistro(e){
        e.preventDefault()
        setEstado2('Registrar')
    }

    function mudarParaLogin(e){
        e.preventDefault()
        setEstado2('Login')
    }

    /*function mostrarVariaveis(e){
        e.preventDefault()
        console.log(estado)
        console.log(estado2)
    }
    */

    function maiorQueOito(senha){
        if (senha.length >= 8){
            return <li>Maior igual que 8</li>
        } else {
            return <li>Precisa conter mais de 8 caracteres</li>
        }
    }

    function lacoDeValidacao(array, arrayComparativo){
        /*
        O primeiro array é o que vamos comparar
        O segundo array é o de base, exemplo: alfabeto, números, etc.
        */
        for (var j = 0; j++ <= array.length; j++){
            for (var i = 0; i <= 26; i++){
                console.log(array[j], arrayComparativo[i])
                if (array[j] === arrayComparativo[i] && array[j] !== undefined) {
                    console.log(array[j], arrayComparativo[i], 'Funcionou!')
                    return true
                }
            }
        }
        return false
    }

    function algumMaiusculo(senha){
        let alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

        if (lacoDeValidacao(senha, alfabeto)){
            return <li>Possui maiúscula</li>
        } else {
            return <li>Não possui maiúscula</li>
        }
        /*
        for (var j = 0; j++ <= senha.length; j++){
            for (var i = 0; i <= 26; i++){
                if (senha[j] === alfabeto[i] && senha[j] !== undefined) {
                    return <li>Possui maiúscula</li>
                }
            }
        }
        
        return <li>Não possui maiúscula</li>  
        */
        
    }

    function algumNumero(senha){
        let numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

        

    }

    const [senha, setSenha] = useState()
    const [senhaRegistrar, setSenhaRegistrar] = useState()
    const [senhaConfirmar, setSenhaConfirmar] = useState()

    useEffect = (() => {
        console.log('Mudou o valor');
    }, [senhaRegistrar]);

    return(
        <div className={styles.rightLogin}>
            <div className={styles.cartaoDeLogin}>
                {estado2==='Login'? (
                        <>
                            <h1>Login</h1>
                            <form>
                                <div className={styles.textField}>
                                    <label htmlFor="usuario">Usuário</label>
                                    <input type="text" name="usuario" placeholder="Usuário"/>
                                </div>
                                <div className={styles.textField}>
                                    <label htmlFor="senha">Senha</label>
                                    <input type="password" placeholder="Senha"/>
                                </div>
                                <button onClick={cadastrarUsuario} className={styles.buttonLogin}>Login</button>
                                <button onClick={mudarParaRegistro} className={styles.buttonRegister}>Não possui cadastro?</button>
                            </form>
                        </>
                    ) :
                estado2==='Registrar' && (
                        <>
                            <h1>Registrar</h1>
                            <form>
                                <div className={styles.textField}>
                                    <label htmlFor="usuario">Digite seu email para registrar</label>
                                    <input type="text" name="usuario" placeholder="Usuário"/>
                                </div>
                                <div className={styles.senhaRegistrar}>
                                    <label htmlFor="senha">Sua senha</label>
                                    <input type="text" placeholder="Senha" onChange={(e) => setSenhaRegistrar(e.target.value)}/>
                                    <ul className={styles.VerificadorSenha} type="none">
                                        <li>Precisa possuir um número</li>
                                    </ul>
                                </div>
                                <div className={styles.textField}>
                                    <label htmlFor="senhaConfirmada">Repita a senha</label>
                                    <input type="password" placeholder="Repita a senha"/>
                                </div>
                                <button onClick={cadastrarUsuario} className={styles.buttonLogin}>Registrar</button>
                                <button onClick={mudarParaLogin} className={styles.buttonRegister}>Possui cadastro?</button>
                            </form>
                        </>
                )}
                {/*<button onClick={mostrarVariaveis}>Mostrar o valor das variaveis</button>*/}
            </div>
        </div>
    );
}
