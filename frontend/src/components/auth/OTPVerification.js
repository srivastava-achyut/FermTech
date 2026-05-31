export default function OTPVerification() {
  return (
    <section className="grid two">
      <div><h1>OTP verification</h1><p className="section-lead">Connect Twilio, MSG91, or another provider in the backend service layer.</p></div>
      <form className="card form">
        <div className="field"><label>OTP</label><input inputMode="numeric" placeholder="123456" /></div>
        <button className="btn" type="button">Verify</button>
      </form>
    </section>
  );
}
