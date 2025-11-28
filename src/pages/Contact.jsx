import { MapPinIcon } from "../icons/MapPinIcon";
import { PhoneIcon } from "../icons/PhoneIcon";
import FormInput from "../components/ui/FormInput";
import Map from "../components/ui/Map";

const Contact = () => (
  <section
    id="contact"
    className="relative py-0 min-h-[850px] flex items-center justify-end overflow-hidden bg-giget-light"
  >
    <Map />
    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20 pointer-events-none flex justify-end">
      <div className="pointer-events-auto w-full md:w-[500px] bg-white/90 backdrop-blur-xl p-10 lg:p-14 shadow-2xl border-t-4 border-giget-red rounded-sm">
        <div className="mb-10">
          <span className="text-giget-red text-xs font-bold tracking-[0.2em] uppercase">
            Intervention & Devis
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-giget-blue mt-3">
            Contactez-nous
          </h2>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <FormInput id="name" label="Nom" />
            <FormInput id="phone" label="Tél" type="tel" />
          </div>
          <FormInput id="email" label="Email" type="email" />
          <FormInput id="message" label="Votre Message" rows={3} />
          <button className="w-full bg-giget-blue text-white font-bold py-4 mt-2 transition-all hover:bg-giget-red hover:shadow-xl tracking-widest text-xs uppercase">
            Envoyer
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
          <div className="flex items-start gap-3 text-xs uppercase tracking-wider text-slate-600">
            <MapPinIcon className="w-4 h-4 text-giget-red mt-0.5 flex-shrink-0" />
            <span>
              97 Avenue de la Corse,
              <br />
              13007 Marseille
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-slate-600">
            <PhoneIcon className="w-4 h-4 text-giget-red flex-shrink-0" />
            <span>+33 4 91 00 00 00</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
