export const PageError = () => {
    const reloadPage = () => {
        location.reload();
    }

    return (
        <div>
            <p>Error! We are sorry...</p>
            <button onClick={reloadPage}>Reload</button>
        </div>
    );
};