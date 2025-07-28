import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-content">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="last-updated">Last updated: January 27, 2025</p>
        
        <section className="privacy-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Cherie ("App", "we", "our", or "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Information we collect</h2>
          <p>We collect information to provide and improve our services:</p>
          
          <h3>2.1. Personal data you provide</h3>
          <div className="bullet-list">
            <div className="bullet-item">
              <span className="bullet-header">Account Information:</span>
              <span className="bullet-text">Name, email address, and profile photo when you sign up or log in via Facebook or Apple.</span>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">Account Preferences:</span>
              <span className="bullet-text">Chosen time zone, push-notification settings, and whether you have enabled AI-generated scheduler messages.</span>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">Connection Data:</span>
              <span className="bullet-text">When you add a connection, you may supply the connection's name, birthday, last contact date, time zone, alert frequency preferences, and an optional photo.</span>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">Journal Data:</span>
              <span className="bullet-text">Title, conversation notes (free-form text), additional reminders or notes, and mood selection.</span>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">Schedule Data:</span>
              <span className="bullet-text">Event type (Meeting or Personal), description text, selected connection (guest), alert timing (e.g., 15 minutes before), and recurrence settings (single occurrence or series).</span>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">Subscription & Payment Information:</span>
              <span className="bullet-text">Your subscription plan choice and payment tokens from the App Store or Play Store (we do <strong>not</strong> store raw credit card numbers).</span>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">Support & Feedback:</span>
              <span className="bullet-text">Any messages or files you send to our support team.</span>
            </div>
          </div>

          <h3>2.2. Technical & usage data collected automatically</h3>
          <div className="bullet-list">
            <div className="bullet-item">
              <span className="bullet-header">Device Information:</span>
              <span className="bullet-text">Device type, operating system version, unique device identifiers, and mobile network information.</span>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">Location Information:</span>
              <span className="bullet-text">We use your device's location services to provide location-based features such as time-zone based reminders and alerts. You can disable location services in your device settings.</span>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">Usage Data:</span>
              <span className="bullet-text">Screens viewed, features used, access timestamps, and error logs.</span>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">Cookies and Tracking Technologies:</span>
              <span className="bullet-text">We may use cookies, SDKs, and similar technologies to track usage and preferences. You can manage cookie settings in your device.</span>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <h2>3. How we use your information</h2>
          <p>
            By providing details on how we use your information, we aim to enhance your experience and ensure transparency in our data practices.
          </p>
          
          <h3>3.1. Internal usage</h3>
          <div className="bullet-list">
            <div className="bullet-item">
              <span className="bullet-header">Provide & Maintain Services:</span>
              <span className="bullet-text">Authenticate and manage your account; store and sync your connection, journal, schedule, and preference data in our database or Calendar integration, and deliver in-app push notifications and reminders based on your alert preferences.</span>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">Improve the App & Insights:</span>
              <span className="bullet-text">Analyze usage patterns, connection behaviors, journal entries, and event data (e.g., frequency of contact and mood trends) to power insights such as progress meters and support future personalized targets and trends.</span>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">AI-Driven Features:</span>
              <span className="bullet-text">With your opt-in for AI-generated scheduler messages, analyze your journal entries and connection history to craft suggested messages.</span>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">Communicate:</span>
              <span className="bullet-text">Send transactional messages, app updates, security alerts, and optional promotional communications (with your consent).</span>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">Legal & Safety:</span>
              <span className="bullet-text">Enforce our Terms & Conditions, detect and prevent fraud, respond to legal requests, and protect users and rights.</span>
            </div>
          </div>

          <h3>3.2. External third-party usage</h3>
          <div className="bullet-list">
            <div className="bullet-item">
              <span className="bullet-header">Service Providers:</span>
              <span className="bullet-text">Third parties (e.g., Supabase for data storage, analytics SDKs, hosting, payment processors) have limited access and must keep data confidential.</span>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">Social Login Providers:</span>
              <span className="bullet-text">Facebook and Apple for authentication; they may receive limited data to maintain login flows.</span>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">Internal Analytics & AI Services:</span>
              <span className="bullet-text">We may share pseudonymized or aggregated connection, journal, and event data within our company and with external analytics/AI providers to power insights.</span>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">Anonymized Market Research:</span>
              <span className="bullet-text">We may retain fully anonymized, aggregated data for internal analytics or market research.</span>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">No Other Sharing:</span>
              <span className="bullet-text">We do <strong>not</strong> share your personal, connection, journal, or event details with other users or unaffiliated third parties.</span>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">Legal Compliance & Business Transfers:</span>
              <span className="bullet-text">We may disclose data if required by law or during a merger, acquisition, or sale of assets, under strict confidentiality.</span>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <h2>4. Data retention</h2>
          <p>
            We retain personal, connection, journal, schedule, and preference data as long as your account is active or as needed to provide services. You can delete individual connections, journal entries, or events at any time; deleted items are removed from live systems without backup retention.
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. Security</h2>
          <p>
            We implement industry-standard safeguards, including TLS encryption in transit, encryption at rest, access controls, and regular security assessments. No system is entirely secure—please protect your credentials and device.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Your choices & rights</h2>
          <p>
            We respect your choices and rights regarding your data. Hence, we provide the following options to manage your data:
          </p>
          <div className="bullet-list">
            <div className="bullet-item">
              <span className="bullet-header">View & Edit:</span>
              <span className="bullet-text">You can view and update your personal, connection, journal, schedule, and preference data within the App.</span>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">Delete:</span>
              <span className="bullet-text">You may delete any connection, journal entry, or event (single occurrence or series). Deleting your account permanently removes all data immediately.</span>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">Opt-Out of Communications:</span>
              <span className="bullet-text">You can opt out of promotional messages by following unsubscribe instructions.</span>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <h2>7. Children's privacy & protection</h2>
          <p>
            The App is not intended for children under 16. We do not knowingly collect data from minors. If we learn we have collected data from a child, we will delete it upon request.
          </p>
        </section>

        <section className="privacy-section">
          <h2>8. International transfers</h2>
          <p>
            Data is stored and processed in the United States via Supabase or self-hosted services. Cross-border transfers may involve differing privacy laws; we implement safeguards accordingly.
          </p>
        </section>

        <section className="privacy-section">
          <h2>9. Changes to this privacy policy</h2>
          <p>
            We may update this Policy from time to time. We will notify you of material changes via in-App notification or email and update the "Effective Date" above. Continued use of the App constitutes acceptance of revisions.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Support & Assistance</h2>
          <p>
            If you have any questions, requests, or concerns about this Privacy Policy or on using the app, please contact us. We are happy to help you with any issues you may have.
          </p>
          <div className="bullet-list">
            <div className="bullet-item">
              <span className="bullet-header">Website:</span>
              <a href="https://ccherished.com" className="bullet-link" target="_blank" rel="noopener noreferrer">https://ccherished.com</a>
            </div>
            <div className="bullet-item">
              <span className="bullet-header">Email:</span>
              <a href="mailto:team@ccherished.com" className="bullet-link">team@ccherished.com</a>
            </div>
          </div>
          <div className="logo-container">
            <img
              src="/assets/cherie-text.svg"
              alt="Cherie Logo"
              className="privacy-logo"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
