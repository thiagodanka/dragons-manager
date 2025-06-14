import { useContext, useState } from "react";
import { AuthContext } from "@contexts/AuthContext";
import AuthService from "@services/AuthService";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import Dragon1 from '@assets/images/dragon-login.webp';
import Dragon from '@assets/images/dragon-login.png';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);  // estado loading

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");         // limpa erro anterior
        setLoading(true);     // inicia loading

        AuthService.login(username, password)
            .then(() => {
                login();
                navigate("/dragons");
            })
            .catch(() => {
                setError("Usuário ou senha inválidos");
            })
            .finally(() => {
                setLoading(false); // desliga loading após resposta
            });
    };

    return (
        <div className={styles.loginWrapper}>
            {/* Lado Esquerdo */}
            <div className={styles.leftSide}>
                <div className={styles.imageContainer}>
                    <img className={styles.DragonTop} src={Dragon} alt="Dragão" />
                    <h2>Cuidado: Dragões à solta!</h2>
                    <p>Faça login para manter sua coleção sob controle.</p>
                    <img src={Dragon1} alt="Dragão" />
                </div>
            </div>

            {/* Lado Direito */}
            <div className={styles.rightSide}>
                <div className={styles.formContainer}>

                    {/* <img src={logo} alt="Logo" className={styles.logo} /> */}
                    <h2>Bem-vindo!</h2>
                    <p>Faça login para gerenciar seus dragões.</p>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="username">Usuário</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                autoComplete="username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                disabled={loading} // opcional: desabilitar input durante loading
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                disabled={loading} // opcional: desabilitar input durante loading
                            />
                        </div>
                        {error && <p className={styles.errorMessage}>{error}</p>}
                        <button
                            type="submit"
                            className={styles.loginButton}
                            disabled={loading}  // desabilita botão durante loading
                        >
                            {loading ? "Entrando..." : "Entrar"}
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;
