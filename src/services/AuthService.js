function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
}

function eraseCookie(name) {
    setCookie(name, '', -1);
}

const AuthService = {
    login: (username, password) => {
        const user = import.meta.env.VITE_USER;
        const pass = import.meta.env.VITE_PASSWORD;

        return new Promise((resolve, reject) => {
            if (username === user && password === pass) {
                // Criar token simples (base64 json)
                const fakeJwt = btoa(
                    JSON.stringify({
                        user: username,
                        exp: Date.now() + 3600 * 1000, // expira em 1h
                    })
                );
                setCookie('token', fakeJwt, 1); // cookie válido por 1 dia
                resolve(true);
            } else {
                reject(new Error("Usuário ou senha inválidos"));
            }
        });
    },

    logout: () => {
        eraseCookie('token');
    },

    getToken: () => {
        return getCookie('token');
    },
};

export default AuthService;
