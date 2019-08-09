<template>
	<form enctype="multipart/form-data" v-on:submit.prevent="onSubmit" method="POST" class="form-wrap">
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
		<div class="form__image-window" id="image-form"></div>
		<label for="inputfile" class='btn-inputfile'>select a file</label>
		<input name="cover" type="file" id="inputfile" class="inputfile">
    </div>   
    <button type="submit" class='btn-submit'>Сreate template</button>
	</form>
</template>

<script>



export default {
	name: 'Form',
	data() {
		return {
			album_name: "",
			artist_name: "",
			album_tracks: 0,
			date_rel: ""
			
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
			}
			
				
		}
	}
}

</script>

<style>
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
