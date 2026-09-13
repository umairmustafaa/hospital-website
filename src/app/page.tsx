import Image from "next/image";
import { Phone, CheckCircle, ShieldCheck, HeartPulse, UserCheck, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-50 text-slate-800 font-sans transition-colors duration-500">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center group cursor-pointer">
              <div className="relative w-12 h-12 mr-3 overflow-hidden rounded-full border-2 border-primary-100 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <Image 
                  src="/images/logo.jpg" 
                  alt="Unique Rehabilitation Center Logo" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500 tracking-tight hidden sm:block">Unique Rehabilitation Center</span>
              <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500 tracking-tight sm:hidden">Unique Rehab Center</span>
            </div>
            <div className="hidden lg:flex space-x-8 items-center">
              <a href="#about" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">About</a>
              <a href="#programs" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Programs</a>
              <a href="#contact" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+923337749772" className="hidden md:flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                <Phone className="w-5 h-5 mr-2 animate-pulse" />
                <span>0333-7749772</span>
              </a>
              <a href="#hero-form" className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm md:text-base whitespace-nowrap">
                Get Help
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-calm-animated animate-calm-gradient text-slate-800 overflow-hidden border-b border-primary-50">
        {/* Soft floating decorative elements */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center">
          <div className="lg:w-3/5 pr-0 lg:pr-12 mb-10 lg:mb-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
              A Safe Space for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">New Beginning</span>.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-600 font-light leading-relaxed">
              Expert, compassionate care for addiction and mental health. Breathe deeply and take the first step toward a revitalized life at Unique Rehabilitation Center.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-slate-700 bg-white/70 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm border border-slate-100">
                <CheckCircle className="w-5 h-5 mr-2 text-primary-500" /> 24/7 Support
              </div>
              <div className="flex items-center text-slate-700 bg-white/70 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm border border-slate-100">
                <CheckCircle className="w-5 h-5 mr-2 text-accent-500" /> Confidential Care
              </div>
              <div className="flex items-center text-slate-700 bg-white/70 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm border border-slate-100">
                <CheckCircle className="w-5 h-5 mr-2 text-primary-500" /> Proven Programs
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 w-full max-w-md animate-fade-in-up" id="hero-form" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 text-slate-800 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary-500 to-accent-400"></div>
              <h2 className="text-2xl font-bold mb-2 text-center text-slate-900 mt-2">Request a Callback</h2>
              <p className="text-sm text-slate-500 mb-6 text-center">Fill out the form below and our specialists will reach out gently.</p>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 ml-1 mb-1">Full Name</label>
                  <input type="text" id="name" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-primary-400 focus:ring-primary-400 bg-surface-50 border p-3 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 ml-1 mb-1">Phone Number</label>
                  <input type="tel" id="phone" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-primary-400 focus:ring-primary-400 bg-surface-50 border p-3 transition-colors" placeholder="0333 1234567" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 ml-1 mb-1">Treatment Needed</label>
                  <select id="service" className="block w-full rounded-xl border-slate-200 shadow-sm focus:border-primary-400 focus:ring-primary-400 bg-surface-50 border p-3 transition-colors text-slate-700">
                    <option>Drug Rehabilitation</option>
                    <option>Mental Health Counseling</option>
                    <option>Detoxification</option>
                    <option>Not Sure / Other</option>
                  </select>
                </div>
                <button type="button" className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-md text-base font-medium text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 transition-all transform hover:-translate-y-0.5">
                  Begin Your Journey
                </button>
                <p className="text-xs text-slate-400 text-center mt-4 flex items-center justify-center">
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
              <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Healing in a Comforting Environment</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed font-light">
                We understand that the road to recovery is challenging. At <strong className="font-semibold text-slate-800">Unique Rehabilitation Center</strong>, we offer a serene sanctuary for healing, providing top-tier psychological support in a calming, judgement-free zone.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                Our approach combines clinical excellence with deep empathy. We tailor our programs to fit your unique needs, ensuring that every patient receives the gentle care necessary for long-term recovery.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start bg-primary-50/50 p-4 rounded-xl border border-primary-100">
                  <ShieldCheck className="w-6 h-6 text-primary-600 mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Licensed and compassionate medical professionals.</span>
                </li>
                <li className="flex items-start bg-accent-50/50 p-4 rounded-xl border border-accent-100">
                  <HeartPulse className="w-6 h-6 text-accent-600 mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Holistic methodologies focusing on mind, body, and spirit.</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl animate-float" style={{ animationDuration: '8s' }}>
                <Image 
                  src="/images/facility_lounge.jpg" 
                  alt="Our Facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-2 block">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Gentle Treatment Programs</h2>
          <p className="text-xl text-slate-500 mb-16 max-w-3xl mx-auto font-light">Comprehensive care tailored to your unique journey towards a healthier, more balanced life.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-slate-100 group hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                <HeartPulse className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Detoxification</h3>
              <p className="text-slate-600 font-light leading-relaxed">A medically supervised process to safely and comfortably manage withdrawal symptoms, setting the foundation for recovery.</p>
            </div>
            {/* Program 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-slate-100 group hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-colors">
                <CheckCircle className="w-7 h-7 text-accent-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cognitive Therapy (CBT)</h3>
              <p className="text-slate-600 font-light leading-relaxed">Evidence-based therapy to help identify and change destructive thought patterns in a safe environment.</p>
            </div>
            {/* Program 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-slate-100 group hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                <UserCheck className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Individual Counseling</h3>
              <p className="text-slate-600 font-light leading-relaxed">One-on-one sessions with licensed therapists to gently address personal struggles, trauma, and mental health.</p>
            </div>
            {/* Program 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-slate-100 group hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-colors">
                <ShieldCheck className="w-7 h-7 text-accent-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Relapse Prevention</h3>
              <p className="text-slate-600 font-light leading-relaxed">Equipping patients with the soothing tools, strategies, and coping mechanisms needed to maintain long-term balance.</p>
            </div>
            {/* Program 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-slate-100 group hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                <Phone className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Out Patient Program</h3>
              <p className="text-slate-600 font-light leading-relaxed">Flexible options allowing patients to receive intensive therapy while maintaining their daily life rhythm.</p>
            </div>
            {/* Program 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-slate-100 group hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-colors">
                <HeartPulse className="w-7 h-7 text-accent-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mindfulness & Yoga</h3>
              <p className="text-slate-600 font-light leading-relaxed">Holistic practices that focus on connecting mind and body, deeply reducing stress and promoting inner peace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 w-full">
              <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl animate-float" style={{ animationDuration: '7s' }}>
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
              <span className="text-accent-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">A Supportive Community for a Better Future</h2>
              <p className="text-lg text-slate-500 mb-10 font-light leading-relaxed">We offer more than just treatment; we offer a comforting environment and a pathway to a vibrant, renewed self.</p>
              
              <div className="space-y-8">
                <div className="flex group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary-50 text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-all shadow-sm border border-primary-100 group-hover:border-transparent">
                      <UserCheck className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-slate-900">Expert Care Team</h4>
                    <p className="mt-2 text-slate-600 font-light leading-relaxed">Our multidisciplinary team of psychiatrists, psychologists, and counselors are leaders in addiction medicine.</p>
                  </div>
                </div>
                
                <div className="flex group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-accent-50 text-accent-600 group-hover:bg-accent-500 group-hover:text-white transition-all shadow-sm border border-accent-100 group-hover:border-transparent">
                      <ShieldCheck className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-slate-900">Absolute Confidentiality</h4>
                    <p className="mt-2 text-slate-600 font-light leading-relaxed">Your privacy is our utmost priority. We maintain strict confidentiality protocols to protect your identity and peace of mind.</p>
                  </div>
                </div>
                
                <div className="flex group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary-50 text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-all shadow-sm border border-primary-100 group-hover:border-transparent">
                      <HeartPulse className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-slate-900">Premium Environment</h4>
                    <p className="mt-2 text-slate-600 font-light leading-relaxed">Recover in comfort. Our facility is designed to provide a peaceful, stress-free atmosphere conducive to holistic healing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center mb-6">
                 <div className="relative w-10 h-10 mr-3 overflow-hidden rounded-full border border-slate-700">
                  <Image 
                    src="/images/logo.jpg" 
                    alt="Unique Rehabilitation Center Logo" 
                    fill
                    className="object-cover opacity-90"
                  />
                </div>
                <span className="text-2xl font-bold text-white">Unique Rehab Center</span>
              </div>
              <p className="text-slate-400 font-light leading-relaxed">Dedicated to helping individuals overcome addiction and mental health challenges through personalized, compassionate, and gentle care.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3 font-light">
                <li><a href="#about" className="hover:text-primary-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>About Us</a></li>
                <li><a href="#programs" className="hover:text-accent-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2"></span>Our Programs</a></li>
                <li><a href="#hero-form" className="hover:text-primary-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>Request Callback</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
              <ul className="space-y-4 font-light">
                <li className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4 group-hover:bg-primary-900 transition-colors">
                    <Phone className="w-4 h-4 text-primary-400" />
                  </div>
                  <span>Call Us: <a href="tel:+923337749772" className="hover:text-white transition-colors block font-medium">0333-7749772</a></span>
                </li>
                <li className="flex items-start group">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-accent-900 transition-colors">
                    <MapPin className="w-4 h-4 text-accent-400" />
                  </div>
                  <span>
                    Visit Us: <br />
                    <a href="https://share.google/cjPWkqcfdb66sVGLn" target="_blank" rel="noreferrer" className="text-sm text-primary-400 hover:text-primary-300 transition-colors mt-1 inline-block">View on Google Maps &rarr;</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 text-sm font-light">
            &copy; {new Date().getFullYear()} Unique Rehabilitation Center. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
