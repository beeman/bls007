import { UserCreateInput } from '@prisma/client'

const password = '$2b$10$dqyYw5XovLjpmkYNiRDEWuwKaRAvLaG45fnXE5b3KTccKZcRPka2m' // "secret42",

export const sampleUsers: UserCreateInput[] = [
  {
    id: 'summer',
    username: 'summer',
    password,
    email: 'summer@example.com',
    avatarUrl: 'https://imgur.com/Y4dT5W0.png',
    name: 'Summer Smith',
    location: 'Who cares...',
    bio: 'Hey!',
  },
  {
    id: 'morty',
    username: 'morty',
    password,
    email: 'morty@example.com',
    avatarUrl: 'https://imgur.com/Ca4c884.png',
    name: 'Morty Smith',
    location: 'School!',
    bio: "Hi there I'm Morty 🎉!",
    projects: {
      create: [{ name: 'Do homework ' }],
    },
  },
  {
    id: 'rick',
    username: 'rick',
    password,
    email: 'rick@example.com',
    avatarUrl: 'https://imgur.com/0Ao2f63.png',
    name: 'Rick Sanchez',
    isAdmin: true,
    location: 'Earth C-137',
    bio: 'I am the smartest guy in all universes!',
    projects: {
      create: [{ name: 'Build a machine ' }],
    },
  },
  {
    id: 'beth',
    username: 'beth',
    password,
    email: 'beth@example.com',
    avatarUrl: 'https://imgur.com/o28uw9C.png',
    name: 'Beth Smith',
    location: 'Earth',
    bio: 'Veterinarian',
  },
  {
    id: 'jerry',
    username: 'jerry',
    password,
    email: 'jerry@example.com',
    avatarUrl: 'https://imgur.com/Yr4YiTi.png',
    name: 'Jerry Smith',
    location: 'Earth',
    bio: 'Husband of @beth',
  },
]
