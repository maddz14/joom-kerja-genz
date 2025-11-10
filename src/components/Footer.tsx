import { Instagram, Linkedin, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "Tentang Kami",
    "Cara Kerja",
    "Syarat & Ketentuan",
    "Kebijakan Privasi",
    "FAQ",
  ];

  const workerLinks = [
    "Cari Job",
    "Daftar Sekarang",
    "Panduan Pekerja",
    "Tips Interview",
    "Blog",
  ];

  const companyLinks = [
    "Post Lowongan",
    "Daftar Perusahaan",
    "Pricing",
    "Success Stories",
    "Hubungi Sales",
  ];

  return (
    <footer className="bg-footer-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: For Workers */}
          <div>
            <h3 className="font-bold text-xl mb-6">Untuk Pekerja</h3>
            <ul className="space-y-3">
              {workerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-secondary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: For Companies */}
          <div>
            <h3 className="font-bold text-xl mb-6">Untuk Perusahaan</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social & Contact */}
          <div>
            <h3 className="font-bold text-xl mb-6">Sosial & Kontak</h3>
            <div className="space-y-4 mb-6">
              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <span>Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <span>LinkedIn</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span>+62 812-3456-7890</span>
              </a>
              <a
                href="mailto:hello@joomkerja.id"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span>hello@joomkerja.id</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 JOOMKERJA! — Made with 💛 for Gen Z
            </p>
            <div className="flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full">
              <span className="text-sm font-semibold">
                🏆 Terpercaya 10K+ Pengguna
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
