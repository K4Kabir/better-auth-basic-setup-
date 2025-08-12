
'use client'
import { Button } from '@/components/ui/button'
import { useSession } from '@/lib/auth-client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { signOut } from '@/lib/auth-client'


const page = () => {

    const { data } = useSession()
    const router = useRouter()

    return (
        <div>
            <Button onClick={async () => {
                await signOut({
                    fetchOptions: {
                        onSuccess: () => {
                            router.push('/auth/login')
                        }
                    }
                })
            }}>Logout</Button>
            Profile
            {JSON.stringify(data)}
        </div>
    )
}

export default page
