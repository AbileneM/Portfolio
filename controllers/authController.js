import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import User from "@/models/User";
import { generateToken } from "@/lib/jwt";

export async function registerUser(request) {
  const { nom, email, password } = await request.json();

  if (!nom || !email || !password) {
    return NextResponse.json(
      { message: "Tous les champs sont obligatoires" },
      { status: 400 }
    );
  }

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return NextResponse.json(
      { message: "Cet email existe déjà" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    nom,
    email,
    password: hashedPassword,
  });

  return NextResponse.json(
    {
      message: "Inscription réussie",
      user: { id: user.id, nom: user.nom, email: user.email },
    },
    { status: 201 }
  );
}

export async function loginUser(request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email et mot de passe obligatoires" },
      { status: 400 }
    );
  }

  const user = await User.findOne({ where: { email } });
  if (!user) {
    return NextResponse.json(
      { message: "Utilisateur introuvable" },
      { status: 404 }
    );
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json(
      { message: "Mot de passe incorrect" },
      { status: 401 }
    );
  }

  const token = generateToken(user);

  const response = NextResponse.json({
    message: "Connexion réussie",
    user: { id: user.id, nom: user.nom, email: user.email },
  });
  response.cookies.set("token", token, { httpOnly: true, secure: false, sameSite: "lax", maxAge: 60 * 60 * 24 });
  return response;
}