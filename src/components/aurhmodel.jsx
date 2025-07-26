export default function AuthModal({ type, close }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-80 relative">
        <h2 className="text-xl font-semibold mb-4">{type === 'signin' ? 'Sign In' : 'Sign Up'}</h2>
        <input type="email" placeholder="Email" className="w-full mb-2 p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Submit</button>
        <button onClick={close} className="absolute top-2 right-3 text-xl">x</button>
      </div>
    </div>
  )
}
