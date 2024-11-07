'use server'
import {saveMeal} from '@/lib/meal'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
export async function shareMeal(formData) {

        const meal = {
          title:formData.get('title'),
          creator:formData.get('name'),
          summary:formData.get('summary'),
          creator_email:formData.get('email'),
          image:formData.get('image'),
          instructions:formData.get('instructions')
        }
  
       await saveMeal(meal)
       revalidatePath('/meals')
       redirect ('/meals')
}
