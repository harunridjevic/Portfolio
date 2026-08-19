"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "bs"

type Translations = {
  [key: string]: {
    en: string
    bs: string
  }
}

// Translations dictionary
const translations: Translations = {
  // Header
  projects: {
    en: "Projects",
    bs: "Projekti",
  },
  about: {
    en: "About",
    bs: "O meni",
  },
  contact: {
    en: "Contact",
    bs: "Kontakt",
  },
  // Hero
  hello: {
    en: "Hello, I'm",
    bs: "Zdravo, ja sam",
  },
  createMeaningful: {
    en: "I create full-stack solutions for people around the world",
    bs: "Stvaram full-stack rješenja za ljude širom svijeta",
  },
  exploreProjects: {
    en: "Explore My Projects",
    bs: "Istražite moje projekte",
  },
  getInTouch: {
    en: "Get in Touch",
    bs: "Kontaktirajte me",
  },
  // Projects
  myProjects: {
    en: "My Projects Around the World",
    bs: "Moji projekti širom svijeta",
  },
  exploreGithub: {
    en: "Explore my GitHub projects positioned on this interactive map based on where the client was from or where the audience is targeted.",
    bs: "Istražite moje GitHub projekte postavljene na ovoj interaktivnoj mapi prema lokaciji klijenta ili gdje je publika targetirana.",
  },
  projectLocations: {
    en: "Project Locations",
    bs: "Lokacije projekata",
  },
  githubProjects: {
    en: "GitHub Projects",
    bs: "GitHub projekti",
  },
  jobProjects: {
    en: "Job Projects",
    bs: "Poslovni projekti",
  },
  // About
  aboutMe: {
    en: "About Me",
    bs: "O meni",
  },
  aboutText1: {
    en: "Hi, I'm a {age}-year-old full-stack developer with a passion for building impactful web and mobile applications. I started coding at age 10 and have developed several complex projects, including production SaaS platforms, 3D web applications, and mobile apps with AI integration. I've placed 2nd in the Sarajevo Cantonal programming competition and 5th in the National Programming competition BHOI. I've led development teams and launched production applications used by professionals in the US and Europe.",
    bs: "Zdravo, ja sam {age}-godišnji full-stack developer sa strašću za izgradnju značajnih web i mobilnih aplikacija. Počeo sam programirati sa 10 godina i razvio nekoliko kompleksnih projekata, uključujući proizvodne SaaS platforme, 3D web aplikacije i mobilne aplikacije s AI integracijom. Osvojio sam 2. mjesto na Kantonalnom takmičenju u programiranju u Sarajevu i 5. mjesto na Nacionalnom takmičenju BHOI. Vodio sam razvojne timove i lansirao proizvodne aplikacije koje koriste profesionalci u SAD-u i Europi.",
  },
  aboutText2: {
    en: "I specialize in modern web technologies like React, Next.js, TypeScript, and Tailwind CSS, as well as mobile development with React Native and 3D development with Three.js. My goal is to create intuitive, optimized, and user-friendly applications that provide great user experiences.",
    bs: "Specijaliziran sam za moderne web tehnologije poput React-a, Next.js-a, TypeScript-a i Tailwind CSS-a, kao i mobilni razvoj koristeći React Native i 3D razvoj s Three.js. Moj cilj je stvarati intuitivne, optimizirane i korisniku prilagođene aplikacije koje pružaju odlično korisničko iskustvo.",
  },
  aboutText3: {
    en: "When I'm not coding, I enjoy reading, researching new technologies, and exploring ways to enhance my skills and projects.",
    bs: "Kada ne kodiram, volim čitati, istraživati nove tehnologije i pronalaziti načine kako unaprijediti svoje vještine i projekte.",
  },  
  skills: {
    en: "Skills",
    bs: "Vještine",
  },
  interests: {
    en: "Interests",
    bs: "Interesi",
  },
  workExperience: {
    en: "Work Experience",
    bs: "Radno iskustvo",
  },
  banterBirdDesc: {
    en: "Independently developed and launched a production SaaS platform for anonymous messaging with real-time matchmaking, an AI fallback system, authentication, and moderation.",
    bs: "Samostalno razvio i lansirao proizvodnu SaaS platformu za anonimno slanje poruka s real-time uparivanjem, AI fallback sustavom, autentifikacijom i moderacijom.",
  },
  msmvDesc: {
    en: "Led the development and maintenance of a production 3D web application for American professionals in the kitchen design and interior design industry. Led a team of two developers, made technical decisions, and oversaw implementation of new features. Developed complex 3D designer functionality including collision detection, camera controls, object transformations, animations, dimensioning, and save-file systems. Stabilized the production application and resolved critical issues related to security, database performance, application performance, and complex production bugs.",
    bs: "Vodio razvoj i održavanje proizvodne 3D web aplikacije za američke profesionalce u industriji dizajna kuhinja i unutarnjeg dizajna. Vodio tim od dva developera, donosio tehničke odluke i nadgledao implementaciju novih značajki. Razvio kompleksnu 3D funkcionalnost dizajnera uključujući detekciju kolizija, kontrole kamere, transformacije objekata, animacije, dimenzioniranje i sisteme za čuvanje datoteka. Stabilizirao proizvodnu aplikaciju i riješio kritične probleme vezane za sigurnost, performanse baze podataka, performanse aplikacije i kompleksne proizvodne bugove.",
  },
  // Contact
  getInTouchHeading: {
    en: "Get In Touch",
    bs: "Stupite u kontakt",
  },
  contactSubheading: {
    en: "Have a question or want to work together? Feel free to reach out!",
    bs: "Imate pitanje ili želite raditi sa mnom? Slobodno me kontaktirajte!",
  },
  name: {
    en: "Name",
    bs: "Ime",
  },
  email: {
    en: "Email",
    bs: "Email",
  },
  message: {
    en: "Message",
    bs: "Poruka",
  },
  yourName: {
    en: "Your name",
    bs: "Vaše ime",
  },
  yourEmail: {
    en: "your.email@example.com",
    bs: "vas.email@primjer.com",
  },
  yourMessage: {
    en: "Your message...",
    bs: "Vaša poruka...",
  },
  sending: {
    en: "Sending...",
    bs: "Šaljem...",
  },
  sendMessage: {
    en: "Send Message",
    bs: "Pošalji poruku",
  },
  messageSent: {
    en: "Message Sent!",
    bs: "Poruka poslana!",
  },
  thankYou: {
    en: "Thanks for reaching out. I'll get back to you soon.",
    bs: "Hvala što ste me kontaktirali. Odgovorit ću vam uskoro.",
  },
  orEmailMe: {
    en: "Or email me directly at:",
    bs: "Ili me direktno kontaktirajte na:",
  },
  // Footer
  allRightsReserved: {
    en: "All rights reserved.",
    bs: "Sva prava pridržana.",
  },
  // Theme and language
  darkMode: {
    en: "Dark Mode",
    bs: "Tamni način",
  },
  lightMode: {
    en: "Light Mode",
    bs: "Svijetli način",
  },
  language: {
    en: "Language",
    bs: "Jezik",
  },
  english: {
    en: "English",
    bs: "Engleski",
  },
  bosnian: {
    en: "Bosnian",
    bs: "Bosanski",
  },
  // Tech Stack
  techStackTitle: {
    en: "My Tech Stack",
    bs: "Moj Tech Stack",
  },

}

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "bs")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`)
      return key
    }
    return translations[key][language]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider")
  }
  return context
}
