export function formatDate(dateString) {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };

    const formatted = new Intl.DateTimeFormat('pt-BR', options).format(new Date(dateString));
    return formatted.replace(',', '');
}

export function currentDate() {
    const now = new Date();

    const options = {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };

    // Formata a data com timezone de Brasília
    const formatted = new Intl.DateTimeFormat('sv-SE', options).format(now);
    // formato sv-SE = yyyy-mm-dd hh:mm:ss (ex: 2025-06-15 18:23:45)

    // troca espaço por 'T' para ficar no formato ISO
    return formatted.replace(' ', 'T');
}


