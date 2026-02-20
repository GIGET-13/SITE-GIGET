import PageBanner from "../components/sections/PageBanner";
import ContentSection from "../components/layout/ContentSection";
import TwoColumnGrid from "../components/layout/TwoColumnGrid";
import { motion } from "framer-motion";

import ExpandableFeatureCard from "../components/ui/ExpandableFeatureCard";
import { CheckBadgeIcon } from "../icons/CheckBadgeIcon";
import { SparklesIcon } from "../icons/SparklesIcon";

const PlumbingServices = () => (
  <section className="bg-white min-h-screen">
    <PageBanner
      subtitle="Pôle Plomberie & Robinetterie"
      title="Viae Domo"
      description="Une solution mutualisée pour la maintenance préventive de la plomberie dans les logements sociaux."
      bgColor="bg-[#002f3c]"
      bgImage="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2070&auto=format&fit=crop"
      bgOpacity="opacity-45"
      textColors={{ subtitle: "text-white", description: "text-cyan-100" }}
    />
    <ContentSection>
      <TwoColumnGrid className="mb-24">
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          src="https://images.unsplash.com/photo-1749532125405-70950966b0e5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Illustration Plomberie"
          className="w-full h-auto object-cover shadow-2xl"
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-4xl font-serif text-[#004e64] mb-6">
            L'Approche Viae Domo
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Face à l'augmentation des coûts de l'eau et aux sinistres dégâts des
            eaux, le GIGET a développé &quot;Viae Domo&quot;. C'est un service dédié à
            l'entretien préventif et curatif (en cas d'appel on intervient) de la robinetterie et des équipements sanitaires.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            L'objectif est double : améliorer le confort des locataires en
            réduisant les fuites, et maîtriser les charges récupérables pour les
            bailleurs.
          </p>
        </motion.div>
      </TwoColumnGrid>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <ExpandableFeatureCard
          icon={CheckBadgeIcon}
          title="Maintenance Préventive"
          description="Visites annuelles programmées pour vérifier l'ensemble des équipements. Nous anticipons les pannes pour garantir la tranquillité des résidents."
          items={[
            "Vérification des chasses d'eau",
            "Remplacement des joints et joints spi",
            "Contrôle de l'étanchéité des siphons",
            "Réglage des débits de robinets",
            "Détartrage des mousseurs"
          ]}
        />
        <ExpandableFeatureCard
          icon={SparklesIcon}
          title="Interventions Curatives"
          description="Une réactivité exemplaire pour les pannes et fuites signalées. Nos techniciens interviennent rapidement pour limiter les dégâts des eaux."
          items={[
            "Gestion des urgences fuites",
            "Réparations durables de robinetterie",
            "Débouchage des siphons et canalisations",
            "Rapport d'intervention détaillé via application métier"
          ]}
          topBorderColor="border-t-[#004e64]"
          iconBg="bg-cyan-50"
          iconHoverBg="group-hover:bg-[#004e64]"
          textColor="text-[#004e64]"
          bulletColor="bg-[#004e64]"
        />
      </div>
    </ContentSection>
  </section>
);

export default PlumbingServices;
