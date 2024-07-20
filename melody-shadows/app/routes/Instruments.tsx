// app/routes/instruments.tsx
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import { API_URL } from "~/const";

interface Instrument {
  name: string;
  description: string;
}

export const loader = async () => {
  const response = await axios.get(`${API_URL}/api/instruments/`);
  return response.data;
};

export default function Instruments() {
  const instruments = useLoaderData<Instrument[]>();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="page-header glow">Instruments</h1>
        <div className="grid">
          {instruments.map((instrument, index) => (
            <div
              key={instrument.name}
              className="card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h2 className="card-title">{instrument.name}</h2>
              <p className="card-description">{instrument.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
