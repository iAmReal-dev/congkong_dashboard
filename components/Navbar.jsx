import { IconBellFilled } from '@tabler/icons-react'
import React from 'react'

const navbar = () => {
    return (
        <div className='flex justify-end'>
            <IconBellFilled />
            <span>
                Login
            </span>
        </div>
    )
}

export default navbar