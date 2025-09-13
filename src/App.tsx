import "./App.css";

function App() {
  const signIn = async () => {
    try {
      const result = await navigator.credentials.create({
        publicKey: {
          challenge: new Uint8Array(32),
          rp: {
            name: "Example CORP",
          },
          user: {
            id: new Uint8Array(16),
            name: "lrangel@gmail.com",
            displayName: "Leonardo Rangel",
          },
          pubKeyCredParams: [
            { alg: -7, type: "public-key" },
            { alg: -257, type: "public-key" },
          ],
          timeout: 60000,
          attestation: "direct",
          authenticatorSelection: {
            authenticatorAttachment: "platform",
            userVerification: "required",
          },
          excludeCredentials: [
            {
              id: new Uint8Array(16),
              type: "public-key",
              transports: ["internal"],
            },
            {
              id: new Uint8Array(16),
              type: "public-key",
              transports: ["internal"],
            },
            {
              id: new Uint8Array(16),
              type: "public-key",
              transports: ["internal"],
            },
            {
              id: new Uint8Array(16),
              type: "public-key",
              transports: ["internal"],
            },
          ],
        },
      });

      console.log("Credential created:", result);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <>
      <button onClick={signIn}>Entrar</button>
    </>
  );
}

export default App;
