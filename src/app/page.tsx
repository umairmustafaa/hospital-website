"use client";

import Image from "next/image";
import { Phone, CheckCircle, ShieldCheck, HeartPulse, UserCheck, MapPin, MessageCircle } from "lucide-react";

export default function Home() {
  const handleWhatsAppRedirect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const service = formData.get("service");
    
    const message = `Hello Unique Rehabilitation Center!\n\nI would like to request a callback.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Treatment Needed:* ${service}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923341251254?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-surface-50 text-primary-900 font-sans transition-colors duration-500">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gold-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center group cursor-pointer">
              <div className="relative w-14 h-14 mr-3 group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/images/logo.png" 
                  alt="Unique Rehabilitation Center Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-extrabold text-primary-600 tracking-tight leading-tight hidden sm:block uppercase">Unique</span>
                <span className="text-xs md:text-sm font-medium text-accent-600 tracking-wider hidden sm:block uppercase">Rehabilitation Center</span>
                <span className="text-lg md:text-xl font-extrabold text-primary-600 tracking-tight leading-tight sm:hidden uppercase">Unique Rehab</span>
              </div>
            </div>
            <div className="hidden lg:flex space-x-8 items-center">
              <a href="#about" className="text-primary-700 hover:text-accent-500 font-medium transition-colors">About</a>
              <a href="#programs" className="text-primary-700 hover:text-accent-500 font-medium transition-colors">Programs</a>
              <a href="#team" className="text-primary-700 hover:text-accent-500 font-medium transition-colors">Our Team</a>
              <a href="#contact" className="text-primary-700 hover:text-accent-500 font-medium transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:03341251254" className="hidden md:flex items-center text-accent-600 font-semibold hover:text-accent-700 transition-colors">
                <Phone className="w-5 h-5 mr-2 animate-pulse" />
                <span>0334-1251254</span>
              </a>
              <a href="https://wa.me/923341251254" target="_blank" rel="noreferrer" className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm md:text-base whitespace-nowrap border border-primary-500 flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" /> Get Help
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-calm-animated animate-calm-gradient text-primary-900 overflow-hidden border-b border-gold-50">
        {/* Soft floating decorative elements */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gold-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center">
          <div className="lg:w-3/5 pr-0 lg:pr-12 mb-10 lg:mb-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-primary-900 leading-tight">
              A Safe Space for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-primary-500">New Beginning</span>.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-700 font-light leading-relaxed">
              Expert, compassionate care for addiction and mental health. Breathe deeply and take the first step toward a revitalized life at Unique Rehabilitation Center.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-primary-700 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm border border-gold-100">
                <CheckCircle className="w-5 h-5 mr-2 text-accent-500" /> 24/7 Support
              </div>
              <div className="flex items-center text-primary-700 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm border border-gold-100">
                <CheckCircle className="w-5 h-5 mr-2 text-primary-500" /> Confidential Care
              </div>
              <div className="flex items-center text-primary-700 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm border border-gold-100">
                <CheckCircle className="w-5 h-5 mr-2 text-accent-500" /> Proven Programs
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 w-full max-w-md animate-fade-in-up" id="hero-form" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 text-primary-900 border border-gold-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent-500 to-gold-400"></div>
              <h2 className="text-2xl font-bold mb-2 text-center text-primary-900 mt-2">Request a Callback</h2>
              <p className="text-sm text-primary-600 mb-6 text-center">Fill out the form below and our specialists will reach out gently.</p>
              <form className="space-y-5" onSubmit={handleWhatsAppRedirect}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-700 ml-1 mb-1">Full Name</label>
                  <input type="text" id="name" name="name" required className="block w-full rounded-xl border-gold-200 shadow-sm focus:border-accent-400 focus:ring-accent-400 bg-surface-50 border p-3 transition-colors outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary-700 ml-1 mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required className="block w-full rounded-xl border-gold-200 shadow-sm focus:border-accent-400 focus:ring-accent-400 bg-surface-50 border p-3 transition-colors outline-none" placeholder="0333 1234567" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-primary-700 ml-1 mb-1">Treatment Needed</label>
                  <select id="service" name="service" className="block w-full rounded-xl border-gold-200 shadow-sm focus:border-accent-400 focus:ring-accent-400 bg-surface-50 border p-3 transition-colors text-primary-700 outline-none">
                    <option>Drug Rehabilitation</option>
                    <option>Mental Health Counseling</option>
                    <option>Detoxification</option>
                    <option>Not Sure / Other</option>
                  </select>
                </div>
                <button type="submit" className="w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-xl shadow-md text-base font-medium text-white bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-700 hover:to-accent-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-400 transition-all transform hover:-translate-y-0.5">
                  <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
                </button>
                <p className="text-xs text-primary-400 text-center mt-4 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 mr-1 opacity-70" /> 100% Confidential & Secure
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-gold-500 font-bold tracking-wider uppercase text-sm mb-2 block">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900 mb-6 leading-tight">Healing in a Comforting Environment</h2>
              <p className="text-lg text-primary-700 mb-6 leading-relaxed font-light">
                We understand that the road to recovery is challenging. At <strong className="font-semibold text-primary-900">Unique Rehabilitation Center</strong>, we offer a serene sanctuary for healing, providing top-tier psychological support in a calming, judgement-free zone.
              </p>
              <p className="text-lg text-primary-700 mb-8 leading-relaxed font-light">
                Our approach combines clinical excellence with deep empathy. We tailor our programs to fit your unique needs, ensuring that every patient receives the gentle care necessary for long-term recovery.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start bg-primary-50 p-4 rounded-xl border border-primary-100">
                  <ShieldCheck className="w-6 h-6 text-primary-500 mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-800 font-medium">Licensed and compassionate medical professionals.</span>
                </li>
                <li className="flex items-start bg-accent-50 p-4 rounded-xl border border-accent-100">
                  <HeartPulse className="w-6 h-6 text-accent-600 mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-800 font-medium">Holistic methodologies focusing on mind, body, and spirit.</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl animate-float border-4 border-white ring-1 ring-gold-200" style={{ animationDuration: '8s' }}>
                <Image 
                  src="/images/facility_lounge.jpg" 
                  alt="Our Facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-surface-50 border-t border-b border-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold-500 font-bold tracking-wider uppercase text-sm mb-2 block">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900 mb-4">Our Gentle Treatment Programs</h2>
          <p className="text-xl text-primary-600 mb-16 max-w-3xl mx-auto font-light">Comprehensive care tailored to your unique journey towards a healthier, more balanced life.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-gold-100 group hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                <HeartPulse className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Detoxification</h3>
              <p className="text-primary-700 font-light leading-relaxed">A medically supervised process to safely and comfortably manage withdrawal symptoms, setting the foundation for recovery.</p>
            </div>
            {/* Program 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-gold-100 group hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-colors">
                <CheckCircle className="w-7 h-7 text-accent-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Cognitive Therapy (CBT)</h3>
              <p className="text-primary-700 font-light leading-relaxed">Evidence-based therapy to help identify and change destructive thought patterns in a safe environment.</p>
            </div>
            {/* Program 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-gold-100 group hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                <UserCheck className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Individual Counseling</h3>
              <p className="text-primary-700 font-light leading-relaxed">One-on-one sessions with licensed therapists to gently address personal struggles, trauma, and mental health.</p>
            </div>
            {/* Program 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-gold-100 group hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-colors">
                <ShieldCheck className="w-7 h-7 text-accent-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Relapse Prevention</h3>
              <p className="text-primary-700 font-light leading-relaxed">Equipping patients with the soothing tools, strategies, and coping mechanisms needed to maintain long-term balance.</p>
            </div>
            {/* Program 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-gold-100 group hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                <Phone className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Out Patient Program</h3>
              <p className="text-primary-700 font-light leading-relaxed">Flexible options allowing patients to receive intensive therapy while maintaining their daily life rhythm.</p>
            </div>
            {/* Program 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-gold-100 group hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-colors">
                <HeartPulse className="w-7 h-7 text-accent-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Mindfulness & Yoga</h3>
              <p className="text-primary-700 font-light leading-relaxed">Holistic practices that focus on connecting mind and body, deeply reducing stress and promoting inner peace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Experts Section */}
      <section id="team" className="py-24 bg-white border-b border-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold-500 font-bold tracking-wider uppercase text-sm mb-2 block">Our Experts</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900 mb-4">Meet Our Dedicated Team</h2>
          <p className="text-xl text-primary-600 mb-16 max-w-3xl mx-auto font-light">Overseeing our entire facility, our highly qualified medical professionals are committed to your recovery journey.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-surface-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gold-50 group hover:-translate-y-1">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-primary-50 shadow-sm group-hover:border-accent-100 transition-colors">
                <span className="text-2xl text-primary-600 font-bold tracking-widest">SM</span>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-1">Shagufta Mukhtar</h3>
              <p className="text-accent-600 font-medium mb-1 uppercase tracking-wider text-sm">Psychologist</p>
              <p className="text-gold-600 font-semibold mb-4 text-xs tracking-wide uppercase">10 Years Experience</p>
              <p className="text-primary-700 font-light text-sm leading-relaxed">Guiding patients through cognitive therapies and personalized emotional support.</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-surface-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gold-50 group hover:-translate-y-1">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-primary-50 shadow-sm group-hover:border-accent-100 transition-colors">
                <span className="text-2xl text-primary-600 font-bold tracking-widest">AM</span>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-1">Dr. Athar Muneer</h3>
              <p className="text-accent-600 font-medium mb-1 uppercase tracking-wider text-sm">Psychiatrist</p>
              <p className="text-gold-600 font-semibold mb-4 text-xs tracking-wide uppercase">25 Years Experience</p>
              <p className="text-primary-700 font-light text-sm leading-relaxed">Providing expert psychiatric evaluation and compassionate mental health care.</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-surface-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gold-50 group hover:-translate-y-1">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-primary-50 shadow-sm group-hover:border-accent-100 transition-colors">
                <span className="text-2xl text-primary-600 font-bold tracking-widest">RK</span>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-1">Dr. Rashid Khan</h3>
              <p className="text-accent-600 font-medium mb-1 uppercase tracking-wider text-sm">AMO</p>
              <p className="text-gold-600 font-semibold mb-4 text-xs tracking-wide uppercase">3 Years Experience</p>
              <p className="text-primary-700 font-light text-sm leading-relaxed">Ensuring the highest standards of daily medical operations and patient well-being.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 w-full">
              <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl animate-float border-4 border-white ring-1 ring-gold-200" style={{ animationDuration: '7s' }}>
                <Image 
                  src="/images/counseling_session.jpg" 
                  alt="Therapy Session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-accent-600 font-bold tracking-wider uppercase text-sm mb-2 block">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900 mb-6 leading-tight">A Supportive Community for a Better Future</h2>
              <p className="text-lg text-primary-600 mb-10 font-light leading-relaxed">We offer more than just treatment; we offer a comforting environment and a pathway to a vibrant, renewed self.</p>
              
              <div className="space-y-8">
                <div className="flex group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary-50 text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-all shadow-sm border border-primary-100 group-hover:border-transparent">
                      <UserCheck className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-primary-900">Expert Care Team</h4>
                    <p className="mt-2 text-primary-700 font-light leading-relaxed">Our multidisciplinary team of psychiatrists, psychologists, and counselors are leaders in addiction medicine.</p>
                  </div>
                </div>
                
                <div className="flex group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-accent-50 text-accent-600 group-hover:bg-accent-500 group-hover:text-white transition-all shadow-sm border border-accent-100 group-hover:border-transparent">
                      <ShieldCheck className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-primary-900">Absolute Confidentiality</h4>
                    <p className="mt-2 text-primary-700 font-light leading-relaxed">Your privacy is our utmost priority. We maintain strict confidentiality protocols to protect your identity and peace of mind.</p>
                  </div>
                </div>
                
                <div className="flex group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary-50 text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-all shadow-sm border border-primary-100 group-hover:border-transparent">
                      <HeartPulse className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-primary-900">Premium Environment</h4>
                    <p className="mt-2 text-primary-700 font-light leading-relaxed">Recover in comfort. Our facility is designed to provide a peaceful, stress-free atmosphere conducive to holistic healing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary-900 text-primary-100 py-16 border-t-[6px] border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center mb-6">
                 <div className="relative w-12 h-12 mr-3 bg-white rounded-full p-1 border-2 border-gold-400">
                  <Image 
                    src="/images/logo.png" 
                    alt="Unique Rehabilitation Center Logo" 
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-white tracking-tight leading-tight uppercase">Unique</span>
                  <span className="text-xs font-medium text-gold-400 tracking-wider uppercase">Rehabilitation Center</span>
                </div>
              </div>
              <p className="text-primary-100/80 font-light leading-relaxed">Dedicated to helping individuals overcome addiction and mental health challenges through personalized, compassionate, and gentle care.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3 font-light">
                <li><a href="#about" className="hover:text-gold-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2"></span>About Us</a></li>
                <li><a href="#programs" className="hover:text-gold-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary-400 mr-2"></span>Our Programs</a></li>
                <li><a href="https://wa.me/923341251254" target="_blank" rel="noreferrer" className="hover:text-gold-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2"></span>Chat on WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
              <ul className="space-y-4 font-light">
                <li className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center mr-4 group-hover:bg-accent-600 transition-colors border border-primary-700">
                    <Phone className="w-4 h-4 text-gold-400 group-hover:text-white" />
                  </div>
                  <span>Call Us: 
                    <a href="tel:03341251254" className="hover:text-gold-400 transition-colors block font-medium mt-1">0334-1251254</a>
                    <a href="tel:03180058738" className="hover:text-gold-400 transition-colors block font-medium">0318-0058738</a>
                  </span>
                </li>
                <li className="flex items-start group">
                  <div className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-accent-600 transition-colors border border-primary-700">
                    <MapPin className="w-4 h-4 text-gold-400 group-hover:text-white" />
                  </div>
                  <span>
                    Visit Us: <br />
                    <span className="text-primary-100/90 mt-1 mb-2 block font-medium">82 School Rd, Dhok Jumma<br />Rawalpindi, 46000</span>
                    <a href="https://share.google/cjPWkqcfdb66sVGLn" target="_blank" rel="noreferrer" className="text-sm text-accent-400 hover:text-gold-400 transition-colors inline-block">View on Google Maps &rarr;</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-800 mt-16 pt-8 text-center text-primary-400 text-sm font-light">
            &copy; {new Date().getFullYear()} Unique Rehabilitation Center. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
