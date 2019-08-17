<template>
    <div class="image-wrap">
        <label class="label_simple">Result:</label> 

        <a class="link-btn" href="/">Return to the home page</a>
    </div>
</template>

<script>

export default {
    name: 'Result',
    data() {
        return {
            loading: false,
            error: null,
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
    
}

</script>

<style>

.image-wrap {
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    height: 100px;
    margin: auto;
    margin-top: 140px;
    
}


</style>