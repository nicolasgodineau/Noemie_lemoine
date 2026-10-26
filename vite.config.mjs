import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    // Garde le préfixe REACT_APP_ du fichier .env (hérité de Create React App)
    envPrefix: ["VITE_", "REACT_APP_"],
    server: {
        port: 3000,
        open: true,
    },
    build: {
        // Même dossier qu'avec Create React App (utilisé par build-and-zip)
        outDir: "build",
    },
});
