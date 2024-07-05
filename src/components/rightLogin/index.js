import { useState } from "react"
import styles from "./rightLogin.module.css"

export default function RightLogin(){

    // Const criada para definir se vai ser login ou register
    let estado = 'Login'
    const [estado2, setEstado2] = useState()

    function cadastrarUsuario(e){
        e.preventDefault()
    }

    function mudarParaRegistro(e){
        e.preventDefault()
        estado = 'Registrar'
        setEstado2('Registrar')
    }

    function mudarParaLogin(e){
        e.preventDefault()
        estado = 'Login'
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
            return <p>Maior igual que 8</p>
        } else {
            return <p>Precisa conter mais de 8 caracteres</p>
        }
    }

    const [senha, setSenha] = useState()
    const [senhaRegistrar, setSenhaRegistrar] = useState()
    const [senhaConfirmar, setSenhaConfirmar] = useState()

    return(
        <div className={styles.rightLogin}>
            <div className={styles.cartaoDeLogin}>
                {estado2==='Login' || estado2===undefined ? (
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
                                    <input type="password" placeholder="Senha" onChange={(e) => setSenhaRegistrar(e.target.value)}/>
                                    <ul className={styles.VerificadorSenha} type="none">
                                        
                                        <li>{senhaRegistrar && (maiorQueOito(senhaRegistrar))}</li>
                                        <li>Precisa possuir um maiúsculo</li>
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
