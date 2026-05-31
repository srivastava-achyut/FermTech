export default function DiagnosisResult({ result }) {
  if (!result) {
    return <div className="empty">Diagnosis result will appear here.</div>;
  }

  return (
    <article className="card">
      <span className="status-pill">{result.isMock ? "Demo mode" : `${result.severity} severity`}</span>
      <h2>{result.diagnosis}</h2>
      {!result.isMock && <p>Confidence: {Math.round((result.confidence || 0) * 100)}%</p>}
      <ul>
        {(result.treatment || []).map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  );
}
