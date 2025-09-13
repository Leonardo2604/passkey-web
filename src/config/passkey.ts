import { PasskeyKit, PasskeyServer } from "passkey-kit";

export const account = new PasskeyKit({
    rpcUrl: import.meta.env.VITE_rpcUrl,
    networkPassphrase: import.meta.env.VITE_networkPassphrase,
    walletWasmHash: import.meta.env.VITE_walletWasmHash,
});

export const server = new PasskeyServer({
    rpcUrl: import.meta.env.VITE_rpcUrl,
    launchtubeUrl: import.meta.env.VITE_launchtubeUrl,
    launchtubeJwt: import.meta.env.VITE_launchtubeJwt,
    // mercuryProjectName: import.meta.env.VITE_mercuryProjectName,
    // mercuryUrl: import.meta.env.VITE_mercuryUrl,
    // mercuryJwt: import.meta.env.VITE_mercuryJwt,
});