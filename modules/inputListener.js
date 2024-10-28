

export default function inputListener() {
    let keys = {};
    
    document.addEventListener('keydown', (event) => {
        keys[event.key] = true;
    });
    
    document.addEventListener('keyup', (event) => {
        keys[event.key] = false;
    });
    document.addEventListener('keyleft', (event) => {
        keys[event.key] = false;
    });
    document.addEventListener('keyright', (event) => {
        keys[event.key] = false;
    });

    return keys
}
