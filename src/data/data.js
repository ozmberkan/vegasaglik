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
    name: "Dr. Mehmet Aksoy",
    specialty: "Dahiliye Uzmanı",
    image: doctor1,
  },
  {
    name: "Dr. Ömer Kaya",
    specialty: "Kardiyoloji Uzmanı",
    image: doctor2,
  },
  {
    name: "Dr. Zeynep Demir",
    specialty: "Nöroloji Uzmanı",
    image: doctor3,
  },
  {
    name: "Dr. Gamze Öztürk",
    specialty: "Ortopedi Uzmanı",
    image: doctor4,
  },
];
