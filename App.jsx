import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  Phone, 
  MapPin, 
  Navigation, 
  Ambulance, 
  Flame, 
  ShieldAlert, 
  HeartPulse, 
  Stethoscope,
  Search,
  BookOpen
} from 'lucide-react';

const App = () => {
  const [showStartup, setShowStartup] = useState(true);
  const [location, setLocation] = useState("Locating...");
  const [selectedCity, setSelectedCity] = useState("bokaro");

  // Handle Startup Screen
  const enableLocation = () => {
    // Simulate location finding
    setLocation("Detecting...");
    setTimeout(() => {
      setLocation("Bokaro Steel City, JH");
      setShowStartup(false);
    }, 1500);
  };

  const skipStartup = () => {
    setLocation("Location Disabled");
    setShowStartup(false);
  };

  // SOS Action
  const handleSOS = () => {
    alert("Calling Emergency Services (112)...");
  };

  return (
    <div className="app-wrapper">
      
      {/* --- STARTUP SCREEN --- */}
      {showStartup && (
        <div className="startup-overlay fade-in">
          <div className="startup-icon">
            <MapPin size={64} />
          </div>
          <h2>Allow Location Access</h2>
          <p style={{ margin: '10px 0 20px', color: '#666', maxWidth: '400px' }}>
            To provide emergency help and find nearby hospitals, ResQNet needs to know your location.
          </p>
          <button className="btn-grant" onClick={enableLocation}>
            <Navigation size={18} /> Enable Location
          </button>
          <div className="btn-skip" onClick={skipStartup}>
            Skip for now
          </div>
        </div>
      )}

      {/* --- NAVBAR --- */}
      <nav className="navbar slide-down">
        <div className="container nav-wrapper">
          <div className="brand">
            <div className="design-r-logo">R</div>
            <span>ResQNet</span>
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#library">First Aid Library</a>
            <a href="tel:112" className="btn-nav-emergency">
              <Phone size={18} /> 112 Emergency
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <div className="container hero-grid">
          
          <div className="hero-content fade-in-up">
            <div className="badge-status">
              <div className="status-dot"></div>
              System Operational
            </div>
            
            <h1>
              Emergency Response <br />
              <span className="highlight-text">When Seconds Count.</span>
            </h1>
            <p className="subtitle">
              AI-powered rapid response network connecting you to the nearest emergency services, hospitals, and blood banks instantly.
            </p>

            <div className="location-card">
              <div className="card-header">
                <MapPin size={20} />
                <span>Your Current Location: {location}</span>
              </div>
              <div className="card-body">
                <div className="select-row">
                  <div className="input-group">
                    <label>State</label>
                    <select disabled><option>Jharkhand</option></select>
                  </div>
                  <div className="input-group">
                    <label>City</label>
                    <select 
                      value={selectedCity} 
                      onChange={(e) => setSelectedCity(e.target.value)}
                    >
                      <option value="ranchi">Ranchi</option>
                      <option value="bokaro">Bokaro</option>
                      <option value="dhanbad">Dhanbad</option>
                      <option value="jamshedpur">Jamshedpur</option>
                    </select>
                  </div>
                </div>

                <div className="contact-result">
                  <div className="c-row">
                    <strong>Local Police Station:</strong>
                    <span>Sector 4, Bokaro</span>
                  </div>
                  <div className="c-row">
                    <strong>Nearest Hospital:</strong>
                    <span>BGH (1.2 km)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-action fade-in-up">
            <div className="sos-wrapper">
              <div className="pulse-ring"></div>
              <div className="pulse-ring delay" style={{ animationDelay: '1s' }}></div>
              <div className="sos-circle" onClick={handleSOS}>
                <h3>TAP FOR</h3>
                <div className="sos-num">SOS</div>
                <div className="sos-sub">Emergency</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section id="services" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Emergency Services</h2>
            <p>Select a category to alert nearby responders</p>
          </div>

          <div className="grid-wrapper">
            <FeatureCard 
              icon={<Ambulance size={28} />} 
              color="blue" 
              title="Medical" 
              desc="Ambulance & Paramedics" 
            />
            <FeatureCard 
              icon={<Flame size={28} />} 
              color="orange" 
              title="Fire Brigade" 
              desc="Fire & Rescue Team" 
            />
            <FeatureCard 
              icon={<ShieldAlert size={28} />} 
              color="purple" 
              title="Police" 
              desc="Local Law Enforcement" 
            />
            <FeatureCard 
              icon={<HeartPulse size={28} />} 
              color="red" 
              title="Blood Bank" 
              desc="Urgent Blood Request" 
            />
            <FeatureCard 
              icon={<Stethoscope size={28} />} 
              color="green" 
              title="Doctor AI" 
              desc="Virtual Consultation" 
              isLive={true}
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="brand-footer">
        <h2>Res<span>●</span>Q<span>●</span>Net</h2>
        <p>© 2025 Emergency Response Network. All rights reserved.</p>
      </footer>

    </div>
  );
};

// Helper Component for Features
const FeatureCard = ({ icon, color, title, desc, isLive }) => {
  return (
    <div className={`feature-card ${isLive ? 'active-card' : ''}`}>
      {isLive && <span className="live-tag">LIVE</span>}
      <div className={`icon-box ${color}`}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default App;
