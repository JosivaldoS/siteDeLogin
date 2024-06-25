import styles from "./rightLogin.module.css"

export default function RightLogin(){
    return(
        <div className={styles.rightLogin}>
            <div className={styles.cartaoDeLogin}>
                <h1>Login</h1>
                <div className={styles.textField}>
                    <label for="usuario">Usuário</label>
                    <input type="text" name="usuario" placeholder="Usuário"/>
                </div>
                <div className={styles.textField}>
                    <label for="senha">Senha</label>
                    <input type="password" placeholder="Senha"/>
                </div>
                <button className={styles.buttonLogin}>Login</button>
                <button className={styles.buttonRegister}>Não possui cadastro?</button>
            </div>
        </div>
    );
}
