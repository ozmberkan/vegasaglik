import {
  Stethoscope,
  Brain,
  Heart,
  TreesIcon as Lungs,
  Bone,
  AmbulanceIcon as FirstAid,
} from "lucide-react";

import doctor1 from "~/assets/doctor1.webp";
import doctor2 from "~/assets/doctor2.webp";
import doctor3 from "~/assets/doctor3.webp";
import doctor4 from "~/assets/doctor4.webp";

export const services = [
  { name: "Genel Sağlık Kontrolleri", icon: Stethoscope },
  { name: "Nöroloji", icon: Brain },
  { name: "Kardiyoloji", icon: Heart },
  { name: "Göğüs Hastalıkları", icon: Lungs },
  { name: "Ortopedi", icon: Bone },
  { name: "Acil Servis", icon: FirstAid },
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Mehmet Aksoy",
    specialty: "Dahiliye Uzmanı",
    image: doctor1,
    education: "İstanbul Üniversitesi Tıp Fakültesi",
    experience: "15 yıl",
    bio: "Dr. Mehmet Aksoy, dahiliye hastalıkların teşhis ve tedavisinde uzmanlaşmıştır. ",
  },
  {
    id: 2,
    name: "Dr. Ömer Kaya",
    specialty: "Kardiyoloji Uzmanı",
    image: doctor2,
    experience: "10 yıl",
    education: "Ankara Üniversitesi Tıp Fakültesi",
    bio: "Dr. Ömer Kaya, kardiyoloji alanında uzmanlaşmış deneyimli bir hekimdir. Özellikle kalp yetmezliği ve hipertansiyon konularında uzmandır.",
  },
  {
    id: 3,
    name: "Dr. Zeynep Demir",
    specialty: "Pediatri Uzmanı",
    image: doctor3,
    experience: "12 yıl",
    education: "Hacettepe Üniversitesi Tıp Fakültesi",
    bio: "Dr. Zeynep Demir, çocuk sağlığı ve hastalıkları konusunda uzman bir pediatristtir. Yenidoğan bakımı ve çocuk beslenmesi konularında özel ilgi alanlarına sahiptir.",
  },
  {
    id: 4,
    name: "Dr. Gamze Öztürk",
    specialty: "Ortopedi Uzmanı",
    image: doctor4,
    education: "Ege Üniversitesi Tıp Fakültesi",
    experience: "18 yıl",
    bio: "Dr. Gamze Öztürk, ortopedi ve travmatoloji alanında uzman bir cerrahtır. Spor yaralanmaları ve eklem replasmanı konularında geniş deneyime sahiptir.",
  },
];
