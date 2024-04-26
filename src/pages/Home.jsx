import { useEffect, useState } from "react";
import { Link } from "react-router-dom"



export default function Home() {
    const [albums, setAlbums] = useState([])
    const [token, setToken] = useState(
        localStorage.getItem('token')
    )

    useEffect(() => {
        fetch(import.meta.env.VITE_PUBLIC_URL + "/browse/featured-playlists", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                setAlbums(res.playlists.items)
            })
    }, [])

    console.log(albums);

    return (
        <div className='mr-10 mt-6 text-white'>
            <section className='today-rec'>
                <h1 className='text-4xl mb-6'>Good morning</h1>
                <div className='w-full flex gap-y-5 gap-x-7 flex-wrap'>
                    {
                        albums.map(item => <PlaylistItem key={item.id} img={item.images[0].url} name={item.name} id={item.id} />)
                    }
                </div>
            </section>
        </div>
    )

}



function PlaylistItem({ name, img, id }) {

    return (
        <Link to={'/playlist/' + id} >
            <div className=" flex justify-start items-center gap-5 rounded transition ease-in-out duration-300 bg-[#303030] select-none cursor-pointer hover:bg-[#3f3f3f] ">
                <img className="w-[90px] h-[90px] object-contain" src={img} alt="recomendation" />
                <h4 className="text-lg w-full font-semibold mr-[110px]">{name}</h4>
            </div>
        </Link>
    )
}