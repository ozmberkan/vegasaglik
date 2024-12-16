import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-sky-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Vega Sağlık</h2>
            <p className="text-sky-200">Sağlığınız için buradayız.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-sky-300 transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/hizmetler"
                  className="hover:text-sky-300 transition-colors"
                >
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link
                  to="/doktorlar"
                  className="hover:text-sky-300 transition-colors"
                >
                  Doktorlarımız
                </Link>
              </li>
              <li>
                <Link
                  to="/randevu"
                  className="hover:text-blue-300 transition-colors"
                >
                  Randevu Al
                </Link>
              </li>
              <li>
                <Link
                  to="/iletisim"
                  className="hover:text-blue-300 transition-colors"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+90 (123) 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a
                  href="mailto:info@vegasaglik.com"
                  className="hover:text-blue-300 transition-colors"
                >
                  info@vegasaglik.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Sağlık Caddesi No:123, İzmir</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-sky-300 text-center text-white">
          <p>
            &copy; {new Date().getFullYear()} Vega Sağlık. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
