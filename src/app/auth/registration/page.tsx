"use client"
import { useState } from "react";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = () => {
    console.log({
      name, email, password, confirmPassword
    })
    toast.success('Compte créé avec succès !');
  }
  return (
    <div className="flex flex-col gap-4 p-4 pt-8">
      <Link href="/auth">
      <IoMdArrowRoundBack className="absolute left-6 top-12 text-black h-12 w-12  p-2" />
      </Link>
      <h2 className="text-center py-4 mt-8 font-semibold text-2xl">Créer un compte</h2>
      <p className="text-center text-gray-500 font-light text-lg px-4">
        Bienvenue sur Locapart, la plateforme de recherche de logement en ligne.
      </p>

      <form  className="h-[48rem] overflow-y-scroll">
        <div className="flex flex-col gap-2 p-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Nom complet</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              name="name"
              placeholder="Nom complet"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Mot de passe</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="Mot de passe"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirmez le mot de passe"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <button
              onClick={onSubmit}
              type="button"
              className="p-2 bg-blue-500 text-white rounded-md"
            >
              Créer un compte
            </button>
          </div>

          <hr className="border border-gray-100 mt-4" />
          <p className="text-center">
            Vous avez déjà un compte ?{" "}
            <Link href="/auth/login" className="text-blue-500">
              Se connecter
            </Link>
          </p>

        </div>
      </form>
    </div>
  );
}

export default RegistrationPage;