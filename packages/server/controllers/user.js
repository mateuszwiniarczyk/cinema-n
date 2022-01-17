import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Prisma from '@prisma/client';
import { getEnv } from '../utils/env.js';

const { PrismaClient } = Prisma;
const prisma = new PrismaClient();
const secret = getEnv('SECRET');
const expiresIn = '1h';

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!existingUser) return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials.' });

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secret, {
      expiresIn,
    });

    return res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

export const signUp = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) return res.status(400).json({ message: 'User already exists.' });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords don't match." });

    const hashedPassowrd = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassowrd,
      },
    });

    const token = jwt.sign({ email, id: user.id }, secret, {
      expiresIn,
    });

    return res.status(200).send({ email, hashedPassowrd, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};
