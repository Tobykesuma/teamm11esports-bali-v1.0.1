import React from 'react'

const VideoModal = () => {
    const [openModal, setOpenModal] = React.useState(false)
    const [videoLoading, setVideoLoading] = React.useState(true)
    const openModalsystem = () => {
        setOpenModal(!openModal)
    }

    const spinner = () => {
        setVideoLoading(!videoLoading)
    }

  return (
    
  )
}

export default VideoModal