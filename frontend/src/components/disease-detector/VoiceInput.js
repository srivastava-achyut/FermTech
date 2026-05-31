export default function VoiceInput() {
  return (
    <div className="field">
      <label>Voice transcript</label>
      <textarea name="voiceTranscript" placeholder="Describe smell, leaf color, watering, weather, or visible insects." />
    </div>
  );
}
