import { useState } from 'react'
import Header from './components/header.jsx'
import AuthModal from './components/cardlist.jsx'
import ImageModal from './components/imagemodel.jsx'
import CardList from './components/cardlist.jsx'

export default function App() {
  const [authType, setAuthType] = useState(null)
  const [imageSrc, setImageSrc] = useState(null)

  return (
    <div className="min-h-screen bg-gray-100">
      <Header openModal={setAuthType} />
      <CardList onImageClick={setImageSrc} />
      
      {authType && <AuthModal type={authType} close={() => setAuthType(null)} />}
      {imageSrc && <ImageModal src={imageSrc} close={() => setImageSrc(null)} />}
    </div>
  )
}
