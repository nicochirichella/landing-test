import React, { useState, useEffect } from 'react';
import { Input } from "./@/components/ui/input";
import { Button } from "./@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./@/components/ui/card";
import image1 from "/Users/nicochirichella/nico-projects/landing-test/src/api/placeholder/beach.jpg"; //Update later
import image2 from "/Users/nicochirichella/nico-projects/landing-test/src/api/placeholder/hotel1.jpg";
import image3 from "/Users/nicochirichella/nico-projects/landing-test/src/api/placeholder/mountain.jpg";
import image4 from "/Users/nicochirichella/nico-projects/landing-test/src/api/placeholder/hotel2.jpg";
import background from "/Users/nicochirichella/nico-projects/landing-test/src/api/placeholder/backgroundMountain.jpg";

const NoxTimesLanding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    './src/api/placeholder/beach.jpg',
    // '/Users/nicochirichella/nico-projects/landing-test/src/api/placeholder/beach.jpg',
    // '/Users/nicochirichella/nico-projects/landing-test/src/api/placeholder/beach.jpg',
    // '/Users/nicochirichella/nico-projects/landing-test/src/api/placeholder/beach.jpg',
    // '/Users/nicochirichella/nico-projects/landing-test/src/api/placeholder/beach.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-poppins">
      {/* Hero Section with Carousel and Navbar */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10">
          {/* Navigation */}
          <nav className="container mx-auto p-4 flex justify-between items-center z-20 relative">
            <div className="text-2xl font-bold text-white">Noxtimes</div>
            <div className="space-x-4">
              <a href="#" className="text-white">Inicio</a>
              <a href="#" className="text-white">Planes</a>
              <a href="#" className="text-white">Contacto</a>
              <Button variant="outline" className="text-white border-white">Iniciar Sesión</Button>
              <Button className="bg-orange-500 hover:bg-orange-600">Registrarse</Button>
            </div>
          </nav>

          {/* Carousel */}
          <div className="absolute inset-0 z-0">
            {/* {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                style={{backgroundImage: `url(${slide})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
              />
            ))} */}
            <div className="absolute inset-0 transition-opacity duration-1000 opacity-100" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
          </div>

          {/* Search Form */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl z-20">
            <h1 className="text-5xl font-bold mb-4 text-white text-center">Tu alojamiento a un click</h1>
            <p className="mb-8 text-white text-center">Imagina un mundo donde cada noche de hotel que disfrutas te acerca a tu próximo viaje gratis.</p>
            <div className="bg-white p-4 rounded-lg flex space-x-2">
              <Input placeholder="Ciudad o Destino" />
              <Input type="date" placeholder="Llegada" />
              <Input type="date" placeholder="Salida" />
              <Input placeholder="Viajeros" />
              <Button className="bg-orange-500 hover:bg-orange-600">Buscar alojamiento</Button>
            </div>
          </div>
        </div>
      </section>


      {/* How it Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto flex">
          <div className="w-1/2 pr-8">
            <div className="grid grid-cols-2 gap-4">
              <img src={image1} alt="Travel 1" className="rounded-lg" />
              <img src={image2}  alt="Hotel 1" className="rounded-lg" />
              <img src={image3} alt="Travel 2" className="rounded-lg" />
              <img src= {image4} alt="Hotel 2" className="rounded-lg" />
            </div>
          </div>
          <div className="w-1/2 pl-8">
            <h2 className="text-3xl font-bold mb-8 text-orange-500">Cómo funciona</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-orange-500 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </div>
                <p>Suscríbete hoy y comienza a acumular times por cada noche y dólar gastado en nuestros hoteles.</p>
              </div>
              <div className="flex items-center">
                <div className="bg-orange-500 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <p>Acumula times con cada estancia en nuestros hoteles asociados.</p>
              </div>
              <div className="flex items-center">
                <div className="bg-orange-500 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                </div>
                <p>Intercambia tus times por alojamiento y disfruta de estadías increíbles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-orange-100 skew-y-3 z-0"></div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">Descubre el plan que mejor se adapta a tu forma de vacacionar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-orange-500">Plan Free</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Acceso a todas nuestras promociones</p>
                <p className="font-bold">100 Times / Única vez</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-orange-500">Plan Scape</CardTitle>
              </CardHeader>
              <CardContent>
                <p>500 Times de regalo</p>
                <p>500 Times / Mensuales</p>
                <p className="font-bold">$5</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-orange-500">Plan Adventure</CardTitle>
              </CardHeader>
              <CardContent>
                <p>1500 Times / Mensuales</p>
                <p className="font-bold">$10</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-orange-500">Plan Nomad</CardTitle>
              </CardHeader>
              <CardContent>
                <p>5000 Times / Mensuales</p>
                <p className="font-bold">$25</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">What they say about us</h2>
          <form className="max-w-md mx-auto">
            <Input className="mb-4" placeholder="Nombre" />
            <Input className="mb-4" placeholder="Apellido" />
            <Input className="mb-4" type="email" placeholder="Email" />
            <textarea className="w-full p-2 mb-4 border rounded" placeholder="Mensaje"></textarea>
            <Button className="w-full bg-orange-500 hover:bg-orange-600">Enviar</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-500 text-white py-8">
        <div className="container mx-auto grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">Noxtimes</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Links</h3>
            <ul>
              <li>Discover</li>
              <li>Special Deals</li>
              <li>Services</li>
              <li>Community</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Services</h3>
            <ul>
              <li>About Us</li>
              <li>Blog & Articles</li>
              <li>Term and Condition</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact</h3>
            <p>Address: Jl Codelaras No.205A</p>
            <p>Kediri, Pare AG17</p>
            <p>Phone: 123 456 7890</p>
            <p>Email: myagungperdana@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NoxTimesLanding;