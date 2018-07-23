export const smallTitle = (string, maxLength) => {
    return string.length > maxLength ? string.substr(0, maxLength)+'...' : string;
};