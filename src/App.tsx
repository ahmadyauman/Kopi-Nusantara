import React from 'react';
import { Coffee, Star, MapPin, Phone, Mail, Award, Users, Truck } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Coffee className="h-8 w-8 text-amber-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">Kopi Nusantara</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">Beranda</a>
                <a href="#about" className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">Tentang</a>
                <a href="#products" className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">Produk</a>
                <a href="#contact" className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">Kontak</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Biji Kopi Premium
            <span className="block text-amber-400">Nusantara</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Langsung dari petani lokal, menghadirkan cita rasa autentik kopi Indonesia terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
              Jelajahi Produk
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all">
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang Kopi Nusantara</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami adalah UMKM yang berdedikasi menyediakan biji kopi berkualitas premium langsung dari kebun-kebun terbaik di Indonesia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Petani Kopi" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Kualitas Terjamin</h3>
              <p className="text-lg text-gray-600 mb-6">
                Sejak didirikan pada tahun 2018, kami telah berkomitmen untuk menghadirkan biji kopi terbaik dengan bekerja sama langsung dengan petani lokal. Setiap biji kopi dipilih secara selektif dan melalui proses yang ketat untuk memastikan kualitas premium.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-amber-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Sertifikat Organik</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-amber-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">500+ Pelanggan</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Truck className="h-8 w-8 text-amber-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Pengiriman Nasional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Produk Unggulan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Koleksi biji kopi premium dari berbagai daerah di Indonesia dengan karakteristik rasa yang unik
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Arabika Aceh Gayo",
                origin: "Aceh, Indonesia",
                price: "Rp 85.000",
                image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=400",
                rating: 4.9,
                description: "Cita rasa fruity dengan aroma floral yang khas, tingkat keasaman seimbang"
              },
              {
                name: "Robusta Lampung",
                origin: "Lampung, Indonesia",
                price: "Rp 65.000",
                image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400",
                rating: 4.7,
                description: "Body kuat dengan rasa pahit yang berkarakter, cocok untuk espresso"
              },
              {
                name: "Arabika Toraja",
                origin: "Sulawesi, Indonesia",
                price: "Rp 95.000",
                image: "https://images.pexels.com/photos/4109999/pexels-photo-4109999.jpeg?auto=compress&cs=tinysrgb&w=400",
                rating: 4.8,
                description: "Rasa earthy dengan hint chocolate, aftertaste yang panjang dan nikmat"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-semibold">{product.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-amber-600 text-sm mb-3 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {product.origin}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proses Berkualitas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Setiap tahap produksi dilakukan dengan teliti untuk menghasilkan biji kopi terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Pemilihan Biji",
                description: "Seleksi manual biji kopi terbaik dari petani terpercaya",
                icon: <Coffee className="h-8 w-8" />
              },
              {
                step: "02", 
                title: "Proses Pengeringan",
                description: "Pengeringan alami di bawah sinar matahari dengan kontrol kelembaban",
                icon: <Award className="h-8 w-8" />
              },
              {
                step: "03",
                title: "Sortir & Grading",
                description: "Pemilahan berdasarkan ukuran dan kualitas untuk grade premium",
                icon: <Users className="h-8 w-8" />
              },
              {
                step: "04",
                title: "Pengemasan",
                description: "Dikemas dengan teknologi vakum untuk menjaga kesegaran",
                icon: <Truck className="h-8 w-8" />
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-amber-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    {process.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white text-amber-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 border-amber-600">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kata Pelanggan</h2>
            <p className="text-xl text-gray-600">Kepuasan pelanggan adalah prioritas utama kami</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Budi Santoso",
                role: "Pemilik Café",
                review: "Kualitas biji kopi dari Kopi Nusantara sangat konsisten. Pelanggan café saya selalu puas dengan cita rasa yang dihasilkan.",
                rating: 5
              },
              {
                name: "Maya Sari",
                role: "Coffee Enthusiast",
                review: "Arabika Aceh Gayo favorit saya! Aroma dan rasanya benar-benar autentik. Packaging juga rapi dan terjaga kesegarannya.",
                rating: 5
              },
              {
                name: "Ahmad Rahman",
                role: "Pengusaha Resto",
                review: "Sudah langganan 2 tahun, pelayanan sangat memuaskan dan pengiriman selalu tepat waktu. Highly recommended!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.review}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-amber-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-300">Siap melayani kebutuhan biji kopi premium Anda</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-amber-600 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Alamat</h4>
                    <p className="text-gray-300">Jl. Raya Kopi No. 123, Bandung, Jawa Barat 40123</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-amber-600 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Telepon</h4>
                    <p className="text-gray-300">+62 812-3456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-amber-600 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-300">info@kopinusantara.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Jam Operasional</h4>
                <div className="text-gray-300 space-y-2">
                  <p>Senin - Jumat: 08:00 - 17:00 WIB</p>
                  <p>Sabtu: 08:00 - 14:00 WIB</p>
                  <p>Minggu: Tutup</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8">Kirim Pesan</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Pesan Anda"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent text-white placeholder-gray-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Coffee className="h-8 w-8 text-amber-600 mr-2" />
              <span className="text-xl font-bold">Kopi Nusantara</span>
            </div>
            <p className="text-gray-400 mb-4">
              Menghadirkan cita rasa autentik kopi Indonesia terbaik
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Kopi Nusantara. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;