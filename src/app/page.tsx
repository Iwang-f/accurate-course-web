import { Header } from "@/components/header";
import { SITE, TARGET, KEUNGGULAN, PROGRAM, FAQ } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />

      <main id="utama">
        {/* ─── Hero ─── */}
        <div className="hero">
          <div className="container hero-flex">
            <div>
              <p className="hero-eyebrow">Pelatihan Software Akuntansi</p>
              <h1>Kursus Accurate untuk tim yang menangani pembukuan setiap hari</h1>
              <p className="hero-body">
                Program pelatihan disusun berdasarkan alur kerja akuntansi
                perusahaan. Peserta mempelajari pengoperasian Accurate sekaligus
                logika pencatatan yang mendasarinya.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={SITE.whatsapp}>
                  Jadwalkan konsultasi
                </a>
                <a className="btn btn-ghost" href="#program">
                  Lihat daftar program
                </a>
              </div>
            </div>

            <aside className="side-card">
              <p className="side-card-label">Paling banyak diikuti</p>
              <h3>{PROGRAM[0].judul}</h3>
              <p>{PROGRAM[0].isi}</p>
              <div className="side-card-meta">
                <dl>
                  <div><dt>Format</dt><dd>Daring dan onsite</dd></div>
                  <div><dt>Peserta</dt><dd>Individu dan tim</dd></div>
                  <div><dt>Pendampingan</dt><dd>Tersedia</dd></div>
                </dl>
              </div>
            </aside>
          </div>
        </div>

        {/* ─── Untuk siapa ─── */}
        <div className="section">
          <div className="container">
            <div className="section-title">
              <h2>Ditujukan untuk</h2>
            </div>
            <div className="grid-3">
              {TARGET.map((t) => (
                <div key={t.judul}>
                  <h3>{t.judul}</h3>
                  <p>{t.deskripsi}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Pendekatan ─── */}
        <div className="section" id="tentang">
          <div className="container">
            <div className="grid-2">
              <div className="section-title" style={{ marginBottom: 0 }}>
                <h2>Pendekatan pelatihan</h2>
              </div>
              <dl className="grid-2-col">
                {KEUNGGULAN.map((k) => (
                  <div key={k.judul}>
                    <dt><h3>{k.judul}</h3></dt>
                    <dd style={{ fontSize: ".875rem", color: "var(--muted)", margin: 0, maxWidth: "48ch" }}>{k.isi}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* ─── Program ─── */}
        <div className="section" id="program">
          <div className="container">
            <div className="section-title" style={{ maxWidth: "500px" }}>
              <h2>Daftar program</h2>
              <p style={{ fontSize: ".875rem", color: "var(--muted)", marginTop: "10px" }}>
                Program dapat diikuti secara terpisah atau digabungkan sesuai kebutuhan perusahaan.
              </p>
            </div>
            <div className="program-list">
              {PROGRAM.map((p) => (
                <article key={p.judul} className="program-item">
                  <h3>{p.judul}</h3>
                  <p>{p.isi}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ─── FAQ ─── */}
        <div className="section" id="faq">
          <div className="container">
            <div className="section-title">
              <h2>Pertanyaan yang sering diajukan</h2>
            </div>
            <div className="faq-list">
              {FAQ.map((f) => (
                <details key={f.tanya} className="faq-item">
                  <summary className="faq-q">{f.tanya}</summary>
                  <div className="faq-a">{f.jawab}</div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* ─── CTA ─── */}
        <div className="cta-section">
          <div className="container">
            <h2>Diskusikan kebutuhan pelatihan Anda</h2>
            <p>
              Sampaikan kondisi tim dan sistem pembukuan yang berjalan.
              Kami akan menyusun rekomendasi program yang sesuai.
            </p>
            <a className="btn btn-primary" href={SITE.whatsapp}>
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container">
          <span>{SITE.name}</span>
          <span>Prototipe — konten menunggu konfirmasi klien</span>
        </div>
      </footer>
    </>
  );
}
