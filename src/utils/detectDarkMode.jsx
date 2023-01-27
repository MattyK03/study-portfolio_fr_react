
const detectDarkMode = () => {
    if (
        window.matchMedia &&
        window.matchMedia('(prefers-colos-scheme: dark)').matches
    ) {
        return 'dark';
    } else {
        return 'light';
    }
}

export default detectDarkMode;