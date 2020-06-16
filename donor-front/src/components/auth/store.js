import axios from 'axios'

export default function store (user) {

    if(user){
        axios.defaults.headers.common['Authorization'] = `Bearer${user.token}`
    }else{
        delete axios.defaults.headers.common['Authorization']
    }

}

