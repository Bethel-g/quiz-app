import React from "react";

function Home({ onStart }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f2f2f2 0%, #9acd32 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Segoe UI', Tahoma, sans-serif",
        padding: "20px"
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          padding: "48px 38px",
          maxWidth: "680px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease"
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 35px 70px rgba(0,0,0,0.3)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 25px 60px rgba(0,0,0,0.25)";
        }}
      >
        {/* LOGO */}
        <div style={{ marginBottom: "24px" }}>
          <h1 style={{ margin: 0, fontSize: "44px", fontWeight: "800", letterSpacing: "2px" }}>
            <span style={{ color: "#000" }}>ኪ</span>
            <span style={{ color: "#9acd32", margin: "0 6px" }}>ባይ</span>
            <span style={{ color: "#000" }}>ኪ</span>
          </h1>
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "#9acd32",
              margin: "12px auto",
              borderRadius: "2px"
            }}
          />
          <p style={{ margin: 0, fontSize: "14px", letterSpacing: "1px", color: "#555" }}>
            ኪ ባይ ኪ የኣሽከርካሪዎች ማሰልጠኛ ተቋም
          </p>
        </div>

        {/* 🎬 INTRO VIDEO */}
        <div style={{ marginBottom: "28px" }}>
          <video
            src="/videos/intro.mp4" // public/videos/intro.mp4
            controls
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.2)"
            }}
          />
        </div>

        {/* TITLE */}
        <h2 style={{ color: "#111", marginBottom: "14px", fontSize: "24px" }}>
          🚗 የኣሽከርካሪነት ማረጋገጫ ፈተና
        </h2>

        {/* DESCRIPTION */}
        <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.75", marginBottom: "26px" }}>
          ይህ ፈተና ቪዲዮ-ተኮር የመንገድ ሁኔታዎችን እና
          ባለብዙ ምርጫ ጥያቄዎችን ይዟል። ፈተናው የጊዜ ገደብ አለው።
        </p>

        {/* INFO BOX */}
        <div
          style={{
            background: "#f7f7f7",
            borderRadius: "14px",
            padding: "20px",
            textAlign: "left",
            fontSize: "15px",
            color: "#222",
            borderLeft: "5px solid #9acd32",
            marginBottom: "10px"
          }}
        >
          <p>📌 ኣጠቃላይ የጥያቄ ብዛት: <b>50</b></p>
          <p>⏱ የተሰጠው ጊዜ: <b>50 ደቂቃ</b></p>
          <p>✅ ማለፊያ ነጥብ: <b>74%</b></p>
        </div>

        {/* BUTTON */}
        <button
          onClick={onStart}
          style={{
            marginTop: "28px",
            width: "100%",
            padding: "18px",
            fontSize: "18px",
            fontWeight: "700",
            backgroundColor: "#9acd32",
            color: "#000",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
            transition: "all 0.25s ease",
            boxShadow: "0 10px 25px rgba(154,205,50,0.45)"
          }}
          onMouseEnter={e => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 14px 30px rgba(154,205,50,0.6)";
          }}
          onMouseLeave={e => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 10px 25px rgba(154,205,50,0.45)";
          }}
        >
          🚦 ፈተናውን ጀምር
        </button>

        {/* FOOTER NOTE */}
        <p style={{ marginTop: "24px", fontSize: "15px", color: "#666" }}>
          እባክዎ እያንዳንዱን ጥያቄ በጥንቃቄ ያንብቡ።
        </p>
      </div>
    </div>
  );
}

export default Home;
