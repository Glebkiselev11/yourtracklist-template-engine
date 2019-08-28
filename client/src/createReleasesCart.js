import axios from 'axios';

const url = 'http://localhost:5000/releases/create'

class createReleasesCart {
    

    // Create Release Cart

    static sendInfoRelease(formData) {
      console.log(formData)
        return axios.post(url, formData,
        { 
            headers: {
                'Content-Type': 'multipart/form-data'
        }}).then(function(){
            console.log('SUCCESS!!');
          })
          .catch(function(){
            console.log('FAILURE!!');
          });

    }

}

export default createReleasesCart;