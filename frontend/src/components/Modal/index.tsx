import React from 'react'
import './styles.scss'
import VideoPlayer from '../videoPlayer'
import { Close } from '../icons'
interface ModalProps {
    source: string
    title: string
    onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ source, title, onClose }) => {
  return (
    <div className='modal' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <button className='modal-close' onClick={onClose}>
          <Close />
        </button>
        <VideoPlayer source={source} programTitle={title} />
      </div>
    </div>
  )
}

export default Modal