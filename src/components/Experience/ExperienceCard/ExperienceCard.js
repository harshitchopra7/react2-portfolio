import React from 'react'
import "./ExperienceCard.css"

function ExperienceCard({ companyName, designation, statements, iconImages }) {
  return (
    <div className='ex_card_container'>
        <p className='ex_card_title'>{companyName}</p>
        <p className='ex_card_subtitle'>Designation: {designation}</p>
        {statements.map((value, key) => (
            <p className='ex_card_sentence'>{value}</p>
        ))}
        <p className='ex_card_tech_used_title'>Tech Used</p>
        <div className='ex_card_icon_images_container'>
            {iconImages.map((value, key) => (
                <img src={value} />
            ))}
        </div>
    </div>
  )
}

export default ExperienceCard