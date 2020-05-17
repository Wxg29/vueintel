module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //vant 按需加载
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
