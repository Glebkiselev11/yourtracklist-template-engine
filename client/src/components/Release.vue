<template>
	<form enctype="multipart/form-data" v-on:submit.prevent="onSubmit" method="POST" class="form-wrap" action="/result">
    <div class="form__left-input-wrap">

		<label for="album_name" class="label_simple">Name of album</label>
		<input type="text" id="album_name" name="album_name" v-model="album_name">

		<label for="artist_name" class="label_simple">Name of artist</label>
		<input type="text" id="artist_name" name="artist_name" v-model="artist_name">

		
		<label for="album_tracks" class="label_simple">How many tracks</label>
		<input type="number" id="album_tracks" name="album_tracks" v-model="album_tracks">

		<label for="date_rel" class="label_simple">Date of release</label>
		<input type="text" id="date_rel" name="date_rel" v-model="date_rel">

		<label for="type" class="label_simple">Type of release</label>
		
		<div class="radio-wrap">
			<label for="ep" class="label_radio">
			<input type="radio" name="type" value="ep" id="ep" checked>
			Ep
			</label>
			<label for="album" class="label_radio">
			<input type="radio" name="type" value="album" id="album">
			Album
			</label>
		</div>
    </div>
    <div class="form__image-window-wrap">
		<label class="label_simple">Cover</label>
		<div class="form__image-window" id="image-form" :style="cover"></div>
		<label for="inputfile" class='btn-inputfile'>select a file</label>
		<input name="cover" type="file" id="inputfile" class="inputfile" @change="sync">
    </div>   
    <button type="submit" class='btn-submit'>Сreate template</button>
	</form>
</template>

<script>

export default {
	name: 'Release',
	data() {
		return {
			album_name: "",
			artist_name: "",
			album_tracks: 2,
            date_rel: "",
            cover: ""			
		}
	},
	metaInfo: {
      title: 'Template Engine',
      titleTemplate: '%s - Releases',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    },
    
	methods: {
		toast(err) {
			this.$toasted.show(err, {
						theme: "outline", 
						position: "top-center", 
						duration : 3000
				})
        },
		onSubmit() {
			if (!this.album_name) {
				this.toast("Please enter album name")
			} else if (!this.artist_name ){ 
				this.toast("Please enter artist name")
			} else if (!this.album_tracks) {
				this.toast("Please enter the number of tracks")
			} else if (!this.date_rel) {
				this.toast("Please enter release date")
			} else if (!this.cover) {
				this.toast("Please add a cover")
			} else {
                this.$router.push('/result')
            }			
        },
        selectImage (file) {
            this.file = file;
            let reader = new FileReader();
            reader.onload = this.onImageLoad;
            reader.readAsDataURL(file);
        },
        sync (e) {
            e.preventDefault();
            this.selectImage(e.target.files[0]);
        },

        onImageLoad (e) {
            this.content = e.target.result;
            let filename = this.file instanceof File ? this.file.name : '';
            this.$emit('input', filename);
            this.cover = `background-image: url("${this.content}")`;
            this.$emit('image-changed', this.content);
        }
            
    },
    computed: {
        src () {
            if (this.content) {
                return this.content;
            }
            return this.isEmpty ? '' : this.srcPrefix + this.value;

        }
    },
}

</script>

<style>



</style>
