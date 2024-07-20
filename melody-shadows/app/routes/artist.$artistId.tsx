import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import axios from "axios";
import { API_URL } from "~/const";

interface Song {
  id: number;
  title: string;
  url: string;
}

interface Artist {
  id: number;
  name: string;
  songs: Song[];
}

export const loader: LoaderFunction = async ({ params }) => {
  const response = await axios.get(`${API_URL}/api/artists/${params.artistId}/`, 
    {
      headers:{
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response.data;
};

export default function Artist() {
  const artist = useLoaderData<Artist>();

  if (!artist) {
    return <div className="text-white">Artist not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-extrabold mb-8 text-center">{artist.name}</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {artist.songs.map((song) => (
            <li key={song.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition">
              <p className="text-2xl font-bold mb-2">{song.title}</p>
              <a href={song.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Listen
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
