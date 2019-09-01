import axios from 'axios';

const url = 'http://localhost:5000/mix/create'

class createMixCart {
    

    // Create Mix Cart

    static sendInfoMix(formData) {
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

export default createMixCart;