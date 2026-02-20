import { useState } from "react";
import { MapPinIcon } from "../icons/MapPinIcon";
import { PhoneIcon } from "../icons/PhoneIcon";
import FormInput from "../components/ui/FormInput";
import Map from "../components/ui/Map";
import { useLocationContext, LOCATIONS } from "../context/LocationContext";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const { activeLocation, setActiveLocation } = useLocationContext();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (errors[e.target.id]) {
      setErrors({ ...errors, [e.target.id]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Veuillez renseigner votre nom';
    if (!formData.phone.trim()) newErrors.phone = 'Veuillez renseigner votre téléphone';
    if (!formData.email.trim()) newErrors.email = 'Veuillez renseigner votre e-mail';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'L\'adresse e-mail est invalide';
    if (!formData.message.trim()) newErrors.message = 'Veuillez écrire un message';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus('loading');

    // Simulate API Call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000); // Back to form after 5 seconds
    }, 1500);
  };

  const renderLocations = () => (
    Object.values(LOCATIONS).map((loc) => {
      const isActive = activeLocation.id === loc.id;
      return (
        <button
          key={loc.id}
          onClick={() => setActiveLocation(loc)}
          className={`flex items-start gap-4 p-5 w-full md:w-80 backdrop-blur-xl border-l-4 shadow-xl transition-all duration-300 text-left cursor-pointer ${isActive
            ? "bg-white/100 border-giget-red shadow-giget-red/10 scale-100"
            : "bg-white/80 border-transparent hover:bg-white/95 md:scale-95 opacity-90 hover:opacity-100"
            }`}
        >
          <div className={`mt-0.5 ${isActive ? "text-giget-red" : "text-slate-400"}`}>
            <MapPinIcon className="w-5 h-5" />
          </div>
          <div>
            <h4 className={`font-serif text-lg ${isActive ? "text-giget-blue font-bold" : "text-slate-500"}`}>
              {loc.id === 'marseille' ? 'Siège' : 'Agence'} {loc.label.split(' ')[0]}
            </h4>
            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider whitespace-pre-line leading-relaxed">
              {loc.address}
            </p>
          </div>
        </button>
      );
    })
  );

  return (
    <section
      id="contact"
      className="relative w-full min-h-[calc(100vh-70px)] h-auto md:h-[calc(100vh-70px)] flex items-center justify-center md:justify-end overflow-hidden bg-giget-light py-12 md:py-0"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Map location={activeLocation} />
      </div>

      {/* Location Selector Overlay (Desktop) */}
      <div className="absolute top-32 left-6 md:left-12 z-20 hidden md:flex flex-col gap-4">
        {renderLocations()}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-20 pointer-events-none flex flex-col items-center md:items-end justify-center h-full gap-6 md:gap-0 mt-8 md:mt-0 mb-8 md:mb-0">
        <div className="pointer-events-auto w-full max-w-lg md:max-w-none md:w-[500px] h-auto min-h-[450px] bg-white/95 backdrop-blur-xl p-8 mx-auto md:mr-0 sm:p-10 lg:p-14 shadow-2xl border-t-4 border-giget-red rounded-sm flex flex-col relative overflow-hidden">

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center text-center h-full flex-grow my-auto"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-giget-blue font-bold mb-2">Message Envoyé !</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[250px]">
                  Notre équipe vous recontactera dans les plus brefs délais concernant votre demande.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-xs font-bold uppercase tracking-widest text-giget-red hover:underline"
                >
                  Nouveau message
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full flex-grow"
              >
                <div className="mb-10">
                  <span className="text-giget-red text-xs font-bold tracking-[0.2em] uppercase">
                    Intervention & Devis
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif text-giget-blue mt-3 font-bold tracking-wider">
                    GIGET
                  </h2>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-2 gap-4">
                    <FormInput id="name" label="Nom" value={formData.name} onChange={handleChange} error={errors.name} />
                    <FormInput id="phone" label="Tél" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} />
                  </div>
                  <FormInput id="email" label="Email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
                  <FormInput id="message" label="Votre Message" rows={3} value={formData.message} onChange={handleChange} error={errors.message} />
                  <button
                    disabled={status === 'loading'}
                    className="w-full bg-giget-red text-white font-bold py-4 mt-8 transition-all hover:bg-[#600018] hover:shadow-xl tracking-widest text-xs uppercase flex justify-center items-center gap-2 disabled:bg-slate-400 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : 'Envoyer'}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Location Selector Overlay (Mobile) */}
        <div className="pointer-events-auto w-full max-w-lg flex md:hidden flex-col gap-3 bg-white/90 backdrop-blur-xl p-6 shadow-2xl rounded-sm border-t border-slate-200">
          <h3 className="text-giget-blue font-serif text-xl border-b border-slate-200 pb-3 mb-1 text-center font-bold">Nos Bureaux</h3>
          {renderLocations()}
        </div>

      </div>
    </section>
  );
};

export default Contact;
