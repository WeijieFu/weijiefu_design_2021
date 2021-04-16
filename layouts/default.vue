<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  mounted(){
    let firefoxAgent = navigator.userAgent.indexOf("Firefox") > -1;

    if (firefoxAgent){
      window.alert('Please use Google Chrome or Safari for better experience. Thank you!');
    }
  }
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #000;
  
  --color-text-grey : #888;
  
}
::-webkit-scrollbar {
    display:none;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  cursor: none; 
}

body{
  overflow-x: hidden;
  width: 100vw;
}
</style>
