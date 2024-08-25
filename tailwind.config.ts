import type { Config } from 'tailwindcss'
import { addDynamicIconSelectors } from '@iconify/tailwind'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
} satisfies Config
