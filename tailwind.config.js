
function withOpacity(varName) {
  return ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(${varName}), ${opacityValue})`;
    } else {
      return `rgb(var(${varName}))`;
    }
  }
}

const rgb = varName => `rgb(var(${varName}))`;

const textColors = ['--color-text-default', '--color-text-muted', '--color-text-inverted'];
const bgColors = ['--color-bg-base', '--color-bg-primary','--color-bg-new',
  '--color-bg-secondary', '--color-bg-accent', '--color-bg-success', '--color-bg-warning', '--color-bg-danger'
];

const mapToSkin = (list, fn = withOpacity) => {
  
  const obj = list.reduce((prev, curr) => {
    const key = curr.split('-')[4];
    return {
      ...prev,
      [key]: fn(curr)
    }
  }, {});
  return obj
}




module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: mapToSkin([...textColors, ...bgColors])
      },
      backgroundColor: {
        skin: mapToSkin([...textColors, ...bgColors])
      },
      borderColor: {
        skin: mapToSkin([...textColors, ...bgColors])
      },
      gradientColorStops: {
        skin: mapToSkin([...textColors, ...bgColors], rgb)
      },
    },
  },  
  variants: {
    extend: {},
  },
  plugins: [],
  expermental: {
    applyComplexClasses: true
  }
}
