const srcPath = './app';
const distPath = './dist';
const nodePath = './node_modules';

let envOptions = {
  string: 'env',
  default: {
    env: 'dev',
  },
  copyFile: {
    src: [
      `${srcPath}/**/*`,
      `!${srcPath}/assets/js/**/*.js`,
      `!${srcPath}/assets/style/**/*.css`,
      `!${srcPath}/**/*.ejs`,
      `!${srcPath}/**/*.html`,
    ],
    path: distPath,
  },
  html: {
    src: [
      `${srcPath}/**/*.html`,
    ],
    ejsSrc: [
      `${srcPath}/**/*.ejs`,
    ],
    path: distPath,
  },
  style: {
    src: [
      `${srcPath}/assets/style/**/*.css`,
    ],
    path: `${distPath}/assets/style`,
  },
  javascript: {
    src: [
      `${srcPath}/assets/js/**/*.js`
    ],
    concat: 'all.js',
    path: `${distPath}/assets/js`,
  },
  vendors: {
    src: [
      `${nodePath}/jquery/dist/**/jquery.min.js`,
      `${nodePath}/aos/dist/aos.js`,
      `${nodePath}/lottie-web/build/player/lottie.min.js`,
      `${nodePath}/gsap/dist/gsap.min.js`,
      `${nodePath}/gsap/dist/ScrollTrigger.min.js`,
    ],
    concat: 'vendors.js',
    path: `${distPath}/assets/js`,
  },
  img: {
    src: [
      `${srcPath}/assets/images/**/*`,
    ],
  },
    font: {
    src: [
      `${srcPath}/assets/json/**/*`,
    ],
  },
  font: {
    src: [
      `${srcPath}/assets/font/**/*`,
    ],
    // path: `${distPath}/assets/font`,
  },
  clean: {
    src: distPath,
  },
  browserDir: distPath,
  deploySrc: `${distPath}/**/*`,
};

exports.envOptions = envOptions;
