/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // "racing" -- sampled directly (Python/Pillow pixel-picker) from the
        // shop's own real Facebook photo of Darrell Raines and Dave Raines in
        // their genuine Team Yamaha racing shirts (500 anchor averaged from
        // the shirt fabric at x:980-1060, y:430-520 in
        // public/images/raines-racing-team.png). This is the actual blue of
        // the family's real motorsports history, not a stock "racing blue."
        racing: {
          50: '#F4F6FA',
          100: '#E6E8F4',
          200: '#C4CAE4',
          300: '#9AA4D1',
          400: '#6876BB',
          500: '#2D41A0',
          600: '#293986',
          700: '#24306C',
          800: '#202955',
          900: '#1C213E',
        },
        // "rust" -- sampled from the shop's own real FMC brake lathe machine
        // in public/images/raines-brake-lathe.png (most-saturated pixel in
        // the orange casing, x:650-960 / y:300-470 sweep). A genuine color
        // from the shop's own equipment, not a designed accent.
        rust: {
          50: '#FCF8F6',
          100: '#F7EDEB',
          200: '#EDD5CF',
          300: '#DFB7AD',
          400: '#CF9485',
          500: '#BD6A55',
          600: '#9F5A49',
          700: '#804A3C',
          800: '#653C31',
          900: '#4A2E26',
        },
        graphite: {
          DEFAULT: '#1C1613',
          800: '#241D19',
          900: '#141110',
        },
        cream: {
          DEFAULT: '#FAF7F2',
          100: '#F1ECE3',
        },
      },
      fontFamily: {
        display: ['"Oswald"', '"Arial Narrow"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
