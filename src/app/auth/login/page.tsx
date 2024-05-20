"use client"
import { useState } from "react";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "@/src/redux/features/authSlice";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = () => {
    if(!email || !password) {
      return toast.error('Veuillez remplir tous les champs');
    }
    if(password.length < 6) {
      return toast.error('Le mot de passe doit contenir au moins 6 caractères');
    }
    if(!email.includes('@') || !email.includes('.') || email.length < 6){
      return toast.error('Veuillez entrer un email valide');
    }

    if(email === "a.diallo3012@gmail.com" && password === "admin224@") {
      dispatch(login({isAuthenticated: true, user: {id: 1, email, name: 'Aboubacar Diallo'}}));
      router.push('/');
      return toast.success('Connexion réussie !');
    }else{
      return toast.error('Email ou mot de passe incorrect');
    }
  }
  return (
    <div className="flex flex-col gap-4 p-4 pt-8">
      <Link href="/auth">
        <IoMdArrowRoundBack className="absolute left-6 top-12 text-black h-12 w-12  p-2" />
      </Link>
      <h2 className="text-center py-4 mt-8 font-semibold text-2xl">
        Se connecter
      </h2>
      <p className="text-center text-gray-900 font-light text-lg px-4">
        Bienvenue sur Locapart, la plateforme de recherche de logement en ligne.
      </p>

      <form className="h-[48rem] overflow-y-scroll">
        <div className="flex flex-col gap-2 p-4">
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
          <div className="flex flex-col gap-2 mt-2">
            <button
              onClick={onSubmit}
              type="button"
              className="p-2 bg-blue-500 text-white rounded-md"
            >
              Se connecter
            </button>
          </div>

          <hr className="border border-gray-100 mt-4" />
          <p className="text-center">
            Pas encore de compte ?{" "}
            <Link href="/auth/registration" className="text-blue-500">
              Créer un compte
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;