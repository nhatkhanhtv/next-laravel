'use server'

import { AuthError } from "next-auth";
import axios from '../lib/axios';

export async function authenticate(prevState: null | undefined, formData: FormData) {
    try {
        console.log('đang sign in');
      } catch (error) {
        if (error instanceof AuthError) {
          switch (error.type) {
            case 'CredentialsSignin':
              return 'Invalid credentials.';
            default:
              return 'Something went wrong.';
          }
        }
        throw error;
      }
}

export async function getBlog() {
  const response = await axios.get('/api/blog');
  console.log(response.data);
  return {
    props: {
      blogs: response.data.data
    }
  }
}