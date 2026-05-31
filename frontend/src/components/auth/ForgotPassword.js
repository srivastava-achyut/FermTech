export default function ForgotPassword() {
  return (
    <section className="grid two">
      <div><h1>Reset password</h1><p className="section-lead">OTP reset plumbing is ready for a cloud SMS provider.</p></div>
      <form className="card form">
        <div className="field"><label>Phone</label><input placeholder="Enter registered phone" /></div>
        <button className="btn" type="button">Send OTP</button>
      </form>
    </section>
  );
}
