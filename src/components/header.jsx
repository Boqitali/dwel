import { useState } from "react";

export default function Header() {
  const [openModal, setOpenModal] = useState(null); // 'signin' | 'signup' | null

  const closeModal = () => setOpenModal(null);

  return (
    <>
      <header className="flex justify-between items-center px-8 py-6 bg-white shadow">
        <div className="text-sm font-semibold">DWEL®</div>
        <nav className="space-x-6 text-sm font-light">
          <button
            onClick={() => setOpenModal("signin")}
            className="hover:underline"
          >
            SIGN IN
          </button>
          <button
            onClick={() => setOpenModal("signup")}
            className="hover:underline"
          >
            SIGN UP
          </button>
        </nav>
      </header>

      {openModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm bg-black/10">
          <div className="bg-white p-6 rounded-xl w-80 shadow-lg relative">
            
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-center">
              {openModal === "signin" ? "Sign In" : "Sign Up"}
            </h2>

            <form className="space-y-4">
              {openModal === "signup" && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-3 py-2 border rounded-md"
                />
              )}
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-md"
              />

              <div className="flex justify-between gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  {openModal === "signin" ? "Login" : "Create Account"}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-100"
                >
                  Cancel
                </button>
              </div>
            </form>

            <p className="text-sm text-center mt-4">
              {openModal === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <button
                onClick={() =>
                  setOpenModal(openModal === "signin" ? "signup" : "signin")
                }
                className="text-blue-600 hover:underline"
              >
                {openModal === "signin" ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
