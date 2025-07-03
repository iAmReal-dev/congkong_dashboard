import { IconClock, IconPin, IconSquareDashed, IconStar, IconTopologyStar } from '@tabler/icons-react'
import React from 'react'

const DashboardContent = () => {
    return (
        <div>
            <div className="flex justify-between">
                <div className='flex flex-col'>
                    <div className="flex gap-3 ">
                        <IconTopologyStar />
                        <span>
                            Total Participants
                        </span>
                    </div>
                    <span className='font-bold text-2xl'>150</span>
                </div>
                <div className='flex flex-col'>
                    <div className="flex gap-3 ">
                        <IconClock />
                    <span>
                        Real-Time Dentified
                    </span>
                    </div>
                        <span className='font-bold text-2xl'>{`29(19%)`}</span>
                </div>
                <div className='flex flex-col'>
                    <div className="flex gap-3 ">
                        <IconPin />
                    <span>
                        Average Matches
                    </span>
                    </div>
                        <span className='font-bold text-2xl'>160</span>
                </div>
                <div className='flex flex-col'>
                    <div className="flex gap-3 ">
                        <IconSquareDashed />
                    <span>
                        Average Satisfaction
                    </span>
                    </div>
                        <span className='font-bold text-2xl'>78%</span>
                </div>
                <div className='flex flex-col'>
                    <div className="flex gap-3 ">
                        <IconStar />
                    <span>
                        Total Meetings
                    </span>
                    </div>
                        <span className='font-bold text-2xl'>18</span>
                </div>
                <div className='flex flex-col'>
                    <div className="flex gap-3 ">
                        <IconStar />
                    <span>
                        Peak
                    </span>
                    </div>
                        <span className='font-bold text-2xl'>4.3</span>
                </div>

            </div>
        </div>
    )
}

export default DashboardContent
