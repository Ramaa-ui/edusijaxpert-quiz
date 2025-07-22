// app/page.js
export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Selamat Datang di Kuis EduSijaXpert</h1>
      <p>Silakan mulai mengerjakan kuis matematika dasar.</p>

      <a
        href="/quiz"
        style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#0070f3",
          color: "white",
          borderRadius: "4px",
          textDecoration: "none",
        }}
      >
        Mulai Kuis
      </a>
    </main>
  );
}
