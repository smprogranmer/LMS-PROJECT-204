import React from 'react'
import ProfileSideBer from './ProfileSideBer'

const ProfileContainer = ({children}) => {
  return (
    <>
    <section
      className="flex gap-20 p-10"

    >
      <ProfileSideBer />
      {children}
    </section>
  </>
  )
}

export default ProfileContainer