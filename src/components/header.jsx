import React from "react";

export default function Header({ openModal }) {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">Dwel</div>
      <div className="space-x-4">
        <button
          onClick={() => openModal("signin")}
          className="px-4 py-2 border rounded"
        >
          Sign In
        </button>
        <button
          onClick={() => openModal("signup")}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
}
