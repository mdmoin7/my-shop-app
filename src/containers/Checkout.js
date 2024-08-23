import { useEffect, useState } from "react";

function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  let emailRef;

  useEffect(() => {
    if (emailRef) {
      emailRef.focus();
    }
  }, []);

  const saveData = (e) => {
    e.preventDefault();
    console.log("form submission logic here", name, email, emailRef.value);
  };
  return (
    <form onSubmit={(ev) => saveData(ev)}>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        ref={(r) => (emailRef = r)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Checkout;
