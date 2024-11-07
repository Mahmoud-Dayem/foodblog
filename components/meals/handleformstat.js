'use client'
import {useFormStatus} from 'react-dom'
function HandleFormStatus() {
    const {pending} = useFormStatus();
  return (
    <button disabled={pending} type="submit">
        {
            pending ? "Submiting...": 'Submit'
        }

    </button>
  )
}

export default HandleFormStatus
