import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-left">Hakkımızda</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Vega Sağlık Merkezimiz
          </h2>
          <p className="text-gray-600 mb-4">
            2005 yılında kurulan Sağlık Merkezimiz, modern tıbbın tüm
            imkanlarını kullanarak hastalarımıza en iyi hizmeti sunmayı
            amaçlamaktadır. Deneyimli kadromuz ve son teknoloji
            ekipmanlarımızla, sağlığınız için buradayız.
          </p>
          <p className="text-gray-600">
            Amacımız, sadece hastalıkları tedavi etmek değil, aynı zamanda
            sağlıklı yaşam konusunda toplumu bilinçlendirmek ve koruyucu
            hekimlik uygulamalarını ön planda tutmaktır.
          </p>
        </div>
        <div className="relative h-64 md:h-auto">
          <img
            src="https://img.freepik.com/premium-vector/health-care-automation-concept-graphic_961875-237610.jpg"
            alt="Sağlık Merkezi Binası"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Değerlerimiz</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Hasta odaklı yaklaşım</li>
          <li>Etik değerlere bağlılık</li>
          <li>Sürekli gelişim ve yenilikçilik</li>
          <li>Ekip çalışması ve işbirliği</li>
          <li>Toplumsal sorumluluk</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Tarihçemiz</h2>
        <div className="space-y-4 text-gray-600">
          <p>2005 - Sağlık Merkezimizin kuruluşu</p>
          <p>2010 - İlk şubemizin açılışı</p>
          <p>
            2015 - Uluslararası Sağlık Hizmetleri Akreditasyonu'nun alınması
          </p>
          <p>2020 - Teknolojik altyapı yenileme projesi</p>
          <p>2023 - 5. şubemizin açılışı ve 18. yıl kutlamaları</p>
        </div>
      </div>
    </div>
  );
};

export default About;
