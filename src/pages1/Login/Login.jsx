import { useContext, useState } from "react";
import { AuthContext } from "@contexts/AuthContext";
import AuthService from "@services/AuthService";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import Dragon1 from '@assets/images/dragon-login.webp';
import Dragon from '@assets/images/dragon-login.png';
import Button from "@components/Button/Button";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        AuthService.login(username, password)
            .then(() => {
                login();
                navigate("/dragons");
            })
            .catch(() => {
                setError("Usuário ou senha inválidos");
            })
            .finally(() => {
                setLoading(false);
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
                                disabled={loading}
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
                                disabled={loading}
                            />
                        </div>
                        {error && <p className={styles.errorMessage}>{error}</p>}

                        <Button
                            type="submit"
                            disabled={loading}
                            text={"Entrar"}
                            loading={loading}
                            loadingText="Entrando..."
                        />
                    </form>
                </div>
                <p className={styles.githubReference}>
                    Confira o repositório
                    <a href="https://github.com/thiagodanka/dragons-manager" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor" style={{ verticalAlign: 'middle', marginRight: '4px' }}>
                        <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                </p>
            </div>
        </div>
    );
};

export default Login;
