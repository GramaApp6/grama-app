import {defineConfig} from 'vite'
import {VitePWA} from "vite-plugin-pwa";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true,
                type: 'module'
            },
            manifest: {
                "name": "GramaCheck",
                "short_name": "GramaCheck",
                "icons": [
                    {
                        "src": "logo192x192.png",
                        "sizes": "192x192",
                        "type": "image/png"
                    },
                    {
                        "src": "logo512x512.png",
                        "sizes": "512x512",
                        "type": "image/png"
                    }
                ],
                "theme_color": "#ffffff",
                "background_color": "#ffffff",
                "display": "standalone",
                "start_url": ".",
                "orientation": "portrait",
                "scope": "/"
            }
        })
    ],
    server: {
        port: 3000,
    }
})
