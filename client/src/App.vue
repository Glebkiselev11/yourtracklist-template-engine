<template>
<body>
  <Header />
  <router-view />
</body>
  

</template>

<script>
import Header from './components/Header';
// import axios from 'axios';

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


.form-wrap {
    width: 750px;
    height: 100%;
    margin: auto;
    padding-top: 80px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.form__left-input-wrap {
    max-width: 352px;
}

.form__image-window-wrap {
    max-width: 352px;
}

.label_simple {
    margin-top: 20px;
    padding-left: 15px;
    padding-bottom: 5px;
    opacity: 0.7;
    color: rgba(0, 0, 0, 0.7);
    font-size: 18px;
    font-weight: 400;
    display: block;
}

.radio-wrap {
    margin-top: 10px;
}

.label_radio {
    margin-right: 65px;
    font-weight: 600;
}

input[type=radio] {
    margin-right: 10px;
}

input[type=text], input[type=number] {
    width: 352px;
    height: 39px;
    border-radius: 5px;
    border: 1px solid #000000;
    background-color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.7);
    outline: none;
    padding-left: 15px;
}


.form__image-window {
    width: 295px;
    height: 295px;
    border-radius: 5px;
    border: 1px solid #707070;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(234, 214, 254, 0.5);
    overflow: hidden;
    padding: 10px;
    
}

.btn-inputfile {
    margin-top: 39px;
    width: 216px;
    height: 40px;
    display: block;
    padding: 9px 55px;
    border-radius: 5px;
    border: 1px solid #707070;
    background-color: #f8f2ff;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
}

.btn-inputfile:hover {
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
}

.btn-submit {
    margin: auto;
    margin-top: 70px;
    width: 476px;
    height: 40px;
    border-radius: 20px;
    background-color: #8113e4;
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    
}

.btn-submit:hover {
    background-color: #7100c7;
}

.inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}

.link-btn {
    display: block;
    height: 40px;
    padding: 7px;
    font-size: 20px;
    border-radius: 20px;
    width: 100%;
    text-decoration: none;
    border: 1.5px solid black;
    text-align: center;
    margin-top: 20px;
    color: black;
}
.link-btn:hover {
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
}

</style>
