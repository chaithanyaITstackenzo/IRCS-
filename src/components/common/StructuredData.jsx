import { useEffect } from 'react';
import contact from '../../data/contact.json';

export default function StructuredData() {
  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Hospital',
      name: 'IRCS Cancer Hospital',
      medicalSpecialty: ['Oncology', 'Radiology', 'Pathology'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Podalakur Road',
        addressLocality: 'Nellore',
        postalCode: '524004',
        addressRegion: 'Andhra Pradesh',
        addressCountry: 'IN',
      },
      telephone: contact.phones?.[0],
      email: contact.email,
      url: 'https://ircscancerhospital.org/',
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);
  return null;
}
