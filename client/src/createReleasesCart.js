import axios from 'axios';

const url = 'http://localhost:5000/releases/create'

class createReleasesCart {
    

    // Create Release Cart

    static sendInfoRelease(album_name, artist_name, album_tracks, date_rel, type, cover) {
        console.log(album_name)
        console.log(artist_name)
        console.log(album_tracks)
        console.log(date_rel)
        console.log(type)
        console.log(cover)
        return axios.post(url, {
            album_name, 
            artist_name, 
            album_tracks, 
            date_rel, 
            type,
            cover
        },
        { 
            headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Content-Type': 'multipart/form-data'
        }
        })

    }

}

export default createReleasesCart;