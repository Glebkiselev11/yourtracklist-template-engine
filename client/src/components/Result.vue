<template>
  <div class="image-wrap">
    <label class="label_simple">Result:</label>
    <img  alt="result cart">
    
    <button @click="forceFileDownload" class='btn-downloadFile'>Download this cover</button>

    <router-link class="link-btn" to="/">Return to the home page</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Result',
  data() {
    return {
      loading: false,
      error: null,
      coverImage: '',
      getUrl: '/result',
      resultCover: {},
      base64data: ''

    }
  },
  metaInfo: {
    title: 'Template Engine',
    titleTemplate: '%s - Result',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },
  methods: {
    forceFileDownload(){
      const url = window.URL.createObjectURL(new Blob([this.resultCover.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'cover.jpg') 
      document.body.appendChild(link)
      this.coverImage = link
      link.click()
    },
  },
  async mounted() {
    await axios({
        method: 'get',
        url: this.getUrl,
        responseType: 'arraybuffer'
    }).then(response => {
        this.resultCover = response;
    }).catch(() => console.log('error occured'))

    const blobImage = new Blob([this.resultCover.data])

    const reader = new FileReader();
    reader.readAsDataURL(blobImage); 
    reader.onloadend = function() {
      this.base64data = reader.result;                
      console.log(base64data);
    }
  },

  
  
}

</script>

<style >

.image-wrap {
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  height: 100px;
  margin: auto;
  margin-top: 140px;
  
}

.btn-downloadFile {
  margin: auto;
  margin-top: 30px;
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
.btn-downloadFile:hover {
  background-color: #7100c7;
}


.link-btn {
  display: block;
  height: 40px;
  padding: 7px;
  font-size: 20px;
  border-radius: 20px;
  width: 95%;
  text-decoration: none;
  border: 1.5px solid black;
  text-align: center;
  margin: 20px auto;
  color: black;
}

.link-btn:hover {
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
}


</style>