import React from 'react'

export default function MiniStory() {
    return (
        <div>
            <p>Choice Novel</p>
            <div className="divimg"></div>
            <div className="barname">
                <p>ชื่อเรื่อง</p>
                <input type="text"></input>
            </div>
            <div className="sisgname">
                <p>รายละเอียด</p>
                <input type="textarea"></input>
            </div>
            <div>
                หมวด
            </div>
        </div>
    )
}
