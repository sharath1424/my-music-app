// app/routes/index.tsx
import { Link } from "@remix-run/react";
import { FaMusic, FaUsers, FaGuitar, FaHeadphones } from "react-icons/fa";

export default function Index() {
  return (
    <div className="bg-gray-900 text-white">
      <header className="relative min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex items-center justify-center text-center p-4">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://example.com/path/to/music-bg1.jpg')" }}></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-8 animate-slideIn">
            <FaMusic className="inline-block mr-2" />
            The Importance of Music
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 animate-fadeIn delay-1s">
            Music is a powerful art form that can evoke emotions, inspire change, and bring people together. It transcends language barriers and cultural differences, making it a universal language that everyone can understand and appreciate.
          </p>
          <Link to="/explore" className="btn-primary">
            Explore Artists
          </Link>
        </div>
      </header>
      <section className="py-20 bg-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Discover New Music</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Discover a wide variety of music genres and find your next favorite artist. From classical to modern pop, we have it all.
          </p>
          <Link to="/explore" className="btn-secondary">
            Start Exploring
          </Link>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Why Music Matters</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Music plays a crucial role in our lives. It helps us express emotions, enhances our cognitive abilities, and brings communities together.
          </p>
          <Link to="/explore" className="btn-primary">
            Learn More
          </Link>
        </div>
      </section>
      <section className="py-20 bg-gray-700 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Connect with fellow music lovers, share your playlists, and participate in exciting events and discussions.
          </p>
          <Link to="/signup" className="btn-secondary">
            Sign Up Now
          </Link>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Top Instruments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaGuitar className="text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">Guitar</h3>
              <p>The guitar is a versatile instrument used in various genres, from rock to classical music. Learn more about its history and how to play it.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaHeadphones className="text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">Headphones</h3>
              <p>Experience music like never before with high-quality headphones. Explore different types and find the best one for your needs.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <FaUsers className="text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">Community</h3>
              <p>Join our music community to connect with other enthusiasts, share your passion, and stay updated with the latest trends and events.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Featured Artists</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Meet some of our top artists and listen to their latest tracks. Discover the stories behind their music and get inspired.
          </p>
          <Link to="/explore" className="btn-primary">
            Meet the Artists
          </Link>
        </div>
      </section>
      <footer className="py-6 bg-black text-center">
        <p>© 2024 Music Stream. All rights reserved.</p>
      </footer>
    </div>
  );
}
