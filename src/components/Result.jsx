function Result({ answers, questions, onBackHome }) {
  const total = questions.length;
  let correct = 0;

  questions.forEach((q, i) => {
    if (answers[i] === q.correctAnswer) correct++;
  });

  const wrong = total - correct;
  const percent = Math.round((correct / total) * 100);
  const pass = percent >= 74;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: pass
          ? "linear-gradient(135deg, #9acd32, #afd6be)"
          : "linear-gradient(135deg, #9acd32, #afd6be)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        padding: "30px",
        position: "relative"
      }}
    >
      {/* BACK BUTTON */}
      <button
        onClick={onBackHome}
        style={{
          position: "absolute",
          top: "25px",
          left: "25px",
          background: "#ffffff",
          borderRadius: "50%",
          width: "52px",
          height: "52px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 6px 20px rgba(0,0,0,0.2)"
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24">
          <path
            d="M15 18l-6-6 6-6"
            fill="none"
            stroke="#333"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* RESULT CARD */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "24px",
          padding: "50px 40px",
          maxWidth: "560px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 30px 70px rgba(0,0,0,0.35)"
        }}
      >
        {/* STATUS */}
        <h1
          style={{
            fontSize: "32px",
            color: pass ? "#087269" : "#d40628",
            marginBottom: "12px"
          }}
        >
          {pass ? "🎉 ፈተናውን አልፈዋል" : "❌ ፈተናውን አላለፉም"}
        </h1>

        <p
          style={{
            color: "#353837",
            fontSize: "18px",
            marginBottom: "35px"
          }}
        >
          የመንጃ ፈቃድ ልምምድ ፈተና
        </p>

        {/* SCORE RING */}
        <div
          style={{
            width: "170px",
            height: "170px",
            margin: "0 auto 35px",
            borderRadius: "50%",
            border: `12px solid ${pass ? "#11998e" : "#c31432"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "38px",
            fontWeight: "bold",
            color: pass ? "#11998e" : "#c31432"
          }}
        >
          {percent}%
        </div>

        {/* STATS */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "30px",
            fontSize: "18px"
          }}
        >
          <div>
            <strong>ጠቅላላ</strong>
            <p>{total}</p>
          </div>
          <div>
            <strong>ትክክል</strong>
            <p style={{ color: "#11998e" }}>{correct}</p>
          </div>
          <div>
            <strong>ስህተት</strong>
            <p style={{ color: "#d64545" }}>{wrong}</p>
          </div>
        </div>

        {/* MESSAGE */}
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            marginBottom: "35px",
            color: "#333"
          }}
        >
          {pass
            ? "እንኳን ደስ አለዎት! ፈተናውን በተሳካ ሁኔታ አጠናቀው የሚያስፈልገውን ውጤት አግኝተዋል።"
            : "የሚያስፈልገውን ውጤት አላገኙም። እባክዎ ትምህርቱን ድገም ያጠናክሩ እና እንደገና ይሞክሩ።"}
        </p>

        {/* ACTION */}
        <button
          onClick={onBackHome}
          style={{
            width: "100%",
            padding: "18px",
            fontSize: "20px",
            fontWeight: "700",
            backgroundColor: pass ? "#11998e" : "#d81f1fd8",
            color: "#ffffff",
            border: "none",
            borderRadius: "14px",
            cursor: "pointer"
          }}
        >
          ወደ መነሻ ተመለስ
        </button>
      </div>
    </div>
  );
}

export default Result;
