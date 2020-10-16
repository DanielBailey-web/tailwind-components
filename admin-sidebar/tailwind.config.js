module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: {
    enabled: false,
    content: [
      '*.html',
    ],
  },
  theme: {
    extend: {
      colors: {
        'mn-gray-100': '#F4F5F7',
        'mn-gray-200': '#E4E7EB',
        'mn-gray-300': '#D2D6DB',
        'mn-gray-400': '#9EA6B2',
        'mn-gray-500': '#374151',
        'mn-gray-600': '#252F3F',
        'mn-gray-700': '#161D2E',
      }
    }
  },
  variants: {},
  plugins: []
}
