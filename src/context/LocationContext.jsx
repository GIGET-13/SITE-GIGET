import { createContext, useContext, useState } from 'react';

const LocationContext = createContext();

export const LOCATIONS = {
    MARSEILLE: {
        id: 'marseille',
        label: 'Marseille 13007',
        address: '97 Avenue de la Corse,\n13007 Marseille',
        phone: '+33 4 91 00 00 00',
        mapAddress: '97 Avenue de la Corse, 13007 Marseille',
        lat: 43.2890967,
        lng: 5.3579137
    },
    ANTIBES: {
        id: 'antibes',
        label: 'Antibes',
        address: '490 Chemin des Quatre Chemins,\n06600 Antibes',
        phone: '+33 4 93 00 00 00',
        mapAddress: '490 Chemin des Quatre Chemins, 06600 Antibes',
        lat: 43.6007203,
        lng: 7.1218099
    }
};

export const LocationProvider = ({ children }) => {
    const [activeLocation, setActiveLocation] = useState(LOCATIONS.MARSEILLE);

    return (
        <LocationContext.Provider value={{ activeLocation, setActiveLocation, LOCATIONS }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocationContext = () => {
    const context = useContext(LocationContext);
    if (!context) {
        throw new Error('useLocationContext must be used within a LocationProvider');
    }
    return context;
};
