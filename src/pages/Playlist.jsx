import { useEffect, useState } from "react"



export default function Playlist() {
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        const id = location.pathname.split('/').at(-1)
        const token = localStorage.getItem('token')

        fetch(`${import.meta.env.VITE_PUBLIC_URL}/playlists/${id}/tracks`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                setTracks(res.items);
            })

    }, [])

    return (
        <section>
            <h1>PLaylist</h1>
            <ul>
                {
                    tracks.map(item => (
                        <li>
                            {item.track.name}
                            <audio src={item.track.preview_url} controls ></audio>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}