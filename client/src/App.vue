<template>
<body>
  <Header />
  <router-view />
</body>
  

</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  background-color: #f8f2ff;
}




</style>
