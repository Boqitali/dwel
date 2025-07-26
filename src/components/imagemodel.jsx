export default function ImageModal({ src, close }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <img src={src} alt="Enlarged" className="max-w-full max-h-full rounded" />
      <button onClick={close} className="absolute top-5 right-5 text-white text-3xl">x</button>
    </div>
  )
}
