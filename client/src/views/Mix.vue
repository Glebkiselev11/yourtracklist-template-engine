<template>
	<form enctype="multipart/form-data" v-on:submit.prevent="onSubmit" method="POST" class="form-wrap" action="/result">
    <div class="form__left-input-wrap">

		<label for="mix_name" class="label_simple">Name of mix</label>
		<input type="text" id="mix_name" name="mix_name" v-model="mix_name">

		<label for="mix_duration" class="label_simple">Mix duration</label>
		<input type="text" id="mix_duration" name="mix_duration" v-model="mix_duration">

		
		<label for="mix_tracks" class="label_simple">How many tracks</label>
		<input type="number" id="mix_tracks" name="mix_tracks" v-model="mix_tracks">

		<label for="date_rel" class="label_simple">Date of release</label>
		<input type="text" id="date_rel" name="date_rel" v-model="date_rel">

		<label for="type" class="label_simple">Type of release</label>
		
		<div class="radio-wrap">
			<label for="yourtracklist" class="label_radio">
			<input type="radio" name="public" value="yourtracklist" id="yourtracklist" checked v-model="publicName">yourtracklist</label>
			<label for="lost2432615184" class="label_radio">
			<input type="radio" name="public" value="lost2432615184" id="lost2432615184" v-model="publicName">lost2432615184</label>
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
import createCart from '@/query/createCart'
import router from '@/router'

export default {

	name: 'Mix',
	data() {
		return {
			mix_name: '',
			mix_duration: '',
			mix_tracks: 2,
            date_rel: '',
			cover: '',
			publicName: 'yourtracklist',
			postUrlRequest: 'http://localhost:5000/mix/create'			
		}
	},
	metaInfo: {
	meta: [
      { name: 'description', content: 'This template engine for mixis' }
    ],
	title: 'Template Engine',
	titleTemplate: '%s - Mix',
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
		async onSubmit() {
			if (!this.mix_name) {
				this.toast("Please enter mix name")
			} else if (!this.mix_duration ){ 
				this.toast("Please enter mix duration")
			} else if (!this.mix_tracks) {
				this.toast("Please enter the number of tracks")
			} else if (!this.date_rel) {
				this.toast("Please enter release date")
			} else if (!this.file) {
				this.toast("Please add a cover")
			} else {
                let formData = new FormData();


				// Здесь обложка
				formData.append('cover', this.file)

				// Введенные данные из формы
				formData.append('mix_name', this.mix_name);
				formData.append('mix_duration', this.mix_duration);
				formData.append('mix_tracks', this.mix_tracks);
				formData.append('date_rel', this.date_rel);
				formData.append('public_name', this.publicName);

				await createCart.sendInfo(formData, this.postUrlRequest);
				
				router.push('result')
				
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
