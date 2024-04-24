


export default function Login() {
    const AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT
    const client_id = import.meta.env.VITE_CLIENT_ID
    const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI
    const RESPONSE_TYPE = import.meta.env.VITE_RESPONSE_TYPE

    let url = `${AUTH_ENDPOINT}?client_id=${client_id}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=playlist-modify-public`

    return (
        <section className="flex items-center justify-center w-full h-screen" >
            <a href={url} >
                <button>
                    Login with spotify
                </button>
            </a>
        </section>
    )
}