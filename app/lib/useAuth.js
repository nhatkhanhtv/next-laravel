import useSWR from "swr";
import axios from './axios'
import { useRouter } from "next/router";

export default function useAuth({} = {}) {
    const {data: user, error, mutate} = useSWR('/user',
        () => axios.get('/user').then(response => response.data.data)
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const login = async({setErrors, ...props}) => {
        setErrors([])

        await csrf()

        axios.post('/login', props)
            .then(()=> mutate() && router.push('/'))
            .catch(error => {
                if (error.response.data !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const logout = async () => {
        await axios.post('/logout')

        mutate(null)

        router.push('/login')
    }
    return {
        user, 
        csrf,
        login,
        logout
    }
}