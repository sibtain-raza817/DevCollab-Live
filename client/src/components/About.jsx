function About() {
  return (
    <section id="about" className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">
          Why DevCollab Live?
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Collaborate in real-time and build faster without switching tools.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">⚡ Real-Time</h3>
            <p className="text-gray-400">Instant code sync.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">👨‍💻 Collaboration</h3>
            <p className="text-gray-400">Work together easily.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">🌍 Remote</h3>
            <p className="text-gray-400">Code from anywhere.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;