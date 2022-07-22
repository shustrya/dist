module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'vs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1110px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      dropShadow: {
        'tld': '0px 4px 4px rgba(0, 0, 0, 0.05)'
      },
      maxWidth:{
        "x1110": "1110px",
        "x1275": "1275px",
        "x1440": "1440px",
        "x445": "445px"
      },
      minWidth:{
        "x160": "10rem",
        "x67": "4.1875rem"
      },
      width: {
        "x445": "445px",
        "x350":"21.875rem"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"]
      },
      fontSize: {
        "x15": ".9375rem",
        "x22": "1.375rem",
        "x32": "2rem",
        'x33': '2.0625rem',
        'x36': '2.25rem',
        'x40': '2.5rem',
        'x46': '2.875rem',
        "x13": ".8125rem",
        "x10": ".625rem",
        "x70": "4.375rem",
        "x52": "3.25rem"
      },
      lineHeight: {
        'x48': '3rem',
        'x10': '.625rem',
        'x22': '1.375rem',
        'x24': '1.5rem',
        'x27': '1.6875rem',
        'x28': '1.75rem',
        'x26': '1.625rem',
        'x33': '2.0625rem',
        'x36': '2.25rem',
        'x46': '2.875rem',
        'x47': '2.9375rem',
        'x78': '4.875rem',
        'x84': '5.25rem',
        'x1875': '1.171875rem'
      },
      borderRadius: {
        'x10': "10px",
        'x3':'.1875rem',
        'x20': "20px"
      },
      colors: {
        white: "#FFFFFF",
        main:"#282828",
        promo:"#323232",
        promoborder:"#D0D0D0",
        promospan: "#3DC47E",
        promolink: "#0088CC",
        red:"#CC0000",
        text: "#464646",
        cta: "#28A745",
        footerGray: "#1E1E20",
        footerDark: "#171718",
        footerDarkGray: "#868686",
        featuresbg: "#F8F8F8",
        features1: "#89C1C2",
        features2: "#FC9374",
        features3: "#57AFFF",
        features4: "#876AFF",
        search: "#FBFBFD",
        resultborder: "#0D66D0"
      },
      spacing: {
        "x4": ".25rem",
        "x6": ".375rem",
        "x7": "0.4375rem",
        "x10": "0.625rem",
        "x65": "1.625rem",
        "x55": "3.4375rem",
        "x87": "5.4375rem",
        "x82": "5.125rem",
        "x18": "1.125rem",
        "x15": "0.9375rem",
        "x29": "1.8125rem",
        "x21": "1.3125rem",
        "x22": "1.375rem",
        "x23": "1.4375rem",
        "x19": "1.1875rem",
        "x34": "2.125rem",
        "x35": "2.1875rem",
        "x30": "1.875rem",
        "x38": "2.375rem",
        "x46": "2.875rem",
        "x47": "2.9375rem",
        "x100": "6.25rem",
        "x119": "7.4375rem",
        "x137": "8.5625rem",
        "x146": "9.125rem",
        "x175": "10.9375rem"
      }
    },
  },
  plugins: [],
}
