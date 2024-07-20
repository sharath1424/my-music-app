import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Instrument {
  name: string;
  description: string;
}

const Instruments: React.FC = () => {
  const [instruments, setInstruments] = useState<Instrument[]>([]);

  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const response = await axios.get('/api/instruments/');
        console.log('API response:', response.data);  // Log the API response
        setInstruments(response.data);
      } catch (error) {
        console.error('Error fetching instruments:', error);
      }
    };
    fetchInstruments();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Instruments</h1>
      {instruments.length > 0 ? (
        <ul>
          {instruments.map((instrument, index) => (
            <li key={index} className="mb-2">
              <h2 className="text-xl font-bold">{instrument.name}</h2>
              <p>{instrument.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No instruments found.</p>
      )}
    </div>
  );
};

export default Instruments;
