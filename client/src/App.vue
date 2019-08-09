<template>
<body>
  <Header />
  <Form />
</body>
  

</template>

<script>
import Header from './components/Header';
import Form from './components/Form';
export default {
  name: 'app',
  components: {
    Header,
    Form
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

body {
  background-color: #f8f2ff;
}




</style>
