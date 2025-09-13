import base64url from "base64url";
import "./App.css";
import { account, server } from "./config/passkey";

function App() {
  // Nativo Navegador
  // const signUp = async () => {
  //   try {
  //     const result = await navigator.credentials.create({
  //       publicKey: {
  //         challenge: new Uint8Array(32),
  //         rp: {
  //           name: "Example CORP",
  //         },
  //         user: {
  //           id: new Uint8Array(16),
  //           name: "lrangel@gmail.com",
  //           displayName: "Leonardo Rangel",
  //         },
  //         pubKeyCredParams: [
  //           { alg: -7, type: "public-key" },
  //           { alg: -257, type: "public-key" },
  //         ],
  //         timeout: 60000,
  //         attestation: "direct",
  //         authenticatorSelection: {
  //           authenticatorAttachment: "platform",
  //           userVerification: "required",
  //           residentKey: "preferred",
  //           requireResidentKey: true,
  //         },
  //       }
  //     });

  //     console.log("Credential created:", JSON.stringify(result));
  //   } catch (error) {
  //     console.error("Error during sign-in:", error);
  //   }
  // };

  // Passkey Kit
  const signUp = async () => {
    try {
      const { signedTx, contractId: cid, keyId: kid } = await account.createWallet("localhost", "lrangel@gmail.com");

      const res = await server.send(signedTx);

      console.log(res);

      localStorage.setItem("sp:keyId", base64url(kid));

      localStorage.setItem("sp:contractId", cid);
      console.log("register", cid);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  // Login Navegador
  // const signIn = async () => {
  //   try {
  //     const result = await navigator.credentials.get({
  //       publicKey: {
  //         challenge: new Uint8Array(32),
  //         userVerification: "required",
  //       },
  //     });

  //     console.log("Credential created:", JSON.stringify(result, null, 2));
  //   } catch (error) {
  //     console.error("Error during sign-in:", error);
  //   }
  // };

  // Passkey Kit
  const signIn = async () => {
    try {
      const {contractId, keyId, keyIdBase64, rawResponse} = await account.connectWallet();

      console.log({contractId, keyId, keyIdBase64, rawResponse});
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  }

  return (
    <>
      <button onClick={signUp}>Sign Up</button>
      <button onClick={signIn}>Sign In</button>
    </>
  );
}

export default App;
