// app/routes/explore.tsx
import { Link, useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import axios from "axios";
import { API_URL } from "~/const";



interface Artist {
  id: number;
  name: string;
}

export const loader: LoaderFunction = async () => {
  const response = await axios.get(`${API_URL}/api/artists/`);
  return response.data;
};



export default function Explore() {
  const artists = useLoaderData<Artist[]>();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="page-header glow">Explore Artists</h1>
        <div className="grid">
          {artists.map((artist, index) => (
            <div
              key={artist.id}
              className="card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link to={`/artist/${artist.id}`}>
                <h2 className="card-title">{artist.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
