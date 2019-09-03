import axios from 'axios';


class createCart {
    

    // Create Release Cart

    static sendInfo(formData, url) {

        return axios.post(url, formData,
        { 
            headers: {
                'Content-Type': 'multipart/form-data'
        }}).then(function(){
			console.log('SUCCESS!!');
        }).catch(function(){
			console.log('FAILURE!!');
        });

    }

}

export default createCart;