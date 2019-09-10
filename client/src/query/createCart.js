import axios from 'axios';


class createCart {
    

    // Create Release Cart

    static sendInfo(formData, url) {

        return axios.post(url, formData,
        { 
            headers: {
                'Content-Type': 'multipart/form-data'
        }}).then(function(data){
            return data
        }).catch(function(e){
			return e;
        });

    }


}

export default createCart;