import PageHero from '../components/common/PageHero';
import contact from '../data/contact.json';
import styles from './PrivacyPolicy.module.css';

const policySections = [
  {
    title: 'About this policy',
    paragraphs: [
      'This Privacy Policy explains how IRCS Cancer Hospital handles information through the IRCS Management App. The app is intended for authorized hospital management, HR personnel and other approved staff to support employee administration and day-to-day workforce operations. This policy applies to information handled through the app; it does not cover the hospital’s public website.',
    ],
  },
  {
    title: 'Information managed in the app',
    paragraphs: [
      'The app may be used to manage employee and work-related information, such as staff names and contact details, employee identifiers, job roles, departments, designations, shifts, employment details, attendance, leave and other staff requests. It may also contain information needed to organize teams and support the hospital’s internal administration.',
      'The information available to a user depends on their responsibilities and the app access assigned to them. Users should enter and update information only for legitimate hospital work purposes.',
    ],
  },
  {
    title: 'How information is used',
    paragraphs: [
      'Information in the app is used to maintain employee records, organize departments and shifts, review attendance, manage leave and other staff requests, support workforce planning, prepare management information and carry out related administrative responsibilities.',
      'The hospital aims to use information only for relevant management and employment purposes and to keep records accurate and appropriate for those purposes.',
    ],
  },
  {
    title: 'Access and confidentiality',
    paragraphs: [
      'Access to information is intended for authorized users who need it to perform their hospital duties. Management and HR personnel may use relevant information to administer staff records and oversee hospital operations. Users are expected to respect confidentiality and must not access, use or share information for personal reasons or for purposes unrelated to their work.',
    ],
  },
  {
    title: 'Sharing of information',
    paragraphs: [
      'Information may be shared with authorized hospital personnel when needed for management or employment administration. It may also be handled by service providers who support the app or related hospital operations, subject to appropriate confidentiality safeguards. Information may be disclosed where required by applicable law or a valid legal process.',
      'The hospital does not intend for app users to disclose employee information to unauthorized people. Users should follow hospital procedures when preparing, accessing or sharing management records.',
    ],
  },
  {
    title: 'Protecting and retaining information',
    paragraphs: [
      'The hospital takes reasonable steps to protect information handled through the app from unauthorized access, loss, misuse or disclosure. App users must follow applicable hospital confidentiality and security procedures and promptly report a suspected privacy or security concern through the appropriate hospital channel.',
      'Information is retained for as long as it is needed for workforce management, hospital administration and applicable recordkeeping requirements. Retention periods may vary depending on the type and purpose of the record.',
    ],
  },
  {
    title: 'Your questions and requests',
    paragraphs: [
      'Employees may contact the hospital to ask a question about their information, request correction of information they believe is inaccurate, or raise a privacy concern. The hospital may need to verify identity and authority before responding. Some information may need to be retained or handled in a particular way to meet hospital or legal recordkeeping requirements.',
    ],
  },
  {
    title: 'Changes to this policy',
    paragraphs: [
      'The hospital may update this policy when its management practices, app or applicable requirements change. The current version will be published on this page.',
      'For questions or requests about information handled through the IRCS Management App, contact IRCS Cancer Hospital using the details below. Please do not include passwords or unnecessary personal information in your message.',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        eyebrow="IRCS Management App"
        title="Privacy Policy"
        description="How IRCS Cancer Hospital handles employee and workforce information through the IRCS Management App."
        breadcrumb="Privacy Policy"
      />
      <section className={`section ${styles.section}`}>
        <div className="container">
          <p className={styles.updated}>This policy applies to the IRCS Management App and its employee-management functions.</p>
          <div className={styles.content}>
            {policySections.map((section, index) => (
              <section className={styles.policySection} key={section.title}>
                <h2>{index + 1}. {section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.title === 'Policy updates and contact' && (
                  <address className={styles.contact}>
                    <strong>IRCS Cancer Hospital</strong>
                    <span>{contact.address.join(', ')}</span>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    {contact.phones.map((phone) => (
                      <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
                    ))}
                  </address>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
