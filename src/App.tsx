import React from 'react';
import {
  MessageSquare,
  Upload,
  Monitor,
  DollarSign,
  Users,
  Target,
  Database,
  ArrowRight,
  MapPin,
  Clock,
  HelpCircle,
  UserX
} from 'lucide-react';
import gravityLogo from './assets/gravity.png';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-center md:justify-start">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            INFO BOOTH AI
          </h2>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
            alt="Event background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-800/90" />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Info Booth? Nah,
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
           It's an AI sidekick on SMS and WhatsApp that lives in every guest's pocket.  Stop giving your guests homework with PDFs and emails, start answering their questions on their terms.          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2 mx-auto">
            Get the Party Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Info Booths? Total Buzzkill.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <DollarSign className="w-8 h-8 text-red-500" />,
                title: "Expensive AF",
                description: "Staffing and setup drain your budget faster than a VIP bar tab."
              },
              {
                icon: <Clock className="w-8 h-8 text-red-500" />,
                title: "Event-Hours Only",
                description: "Closed when the doors are down? Tough luck, after-hours networkers."
              },
              {
                icon: <MapPin className="w-8 h-8 text-red-500" />,
                title: "Where Even Are They?",
                description: "Attendees wandering like zombies looking for a map."
              },
              {
                icon: <UserX className="w-8 h-8 text-red-500" />,
                title: "Staffing Nightmares",
                description: "Are they at the booth or did they sneak off to that show."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            How It Works (It's So Easy, You'll Think It's Magic)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Upload className="w-8 h-8 text-purple-500" />,
                title: "Plug In the Good Stuff",
                description: "Upload your event goldmine—maps, FAQs, vendor lists, schedules."
              },
              {
                icon: <Monitor className="w-8 h-8 text-purple-500" />,
                title: "Slick Hosted Vibes",
                description: "Attendees get a clean, shiny interface to explore it all."
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-purple-500" />,
                title: "Chat Bot That Slays",
                description: "Our AI buddy knows EVERYTHING about your event and answers questions 24/7."
              },
              {
                icon: <DollarSign className="w-8 h-8 text-purple-500" />,
                title: "Cash In",
                description: "Slide in ads, partner with brands, and turn this into a money-making machine."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl hover:transform hover:scale-105 transition-all">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why You'll Be Counting Cash and High-Fiving Your Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-green-500" />,
                title: "Know Your People",
                description: "Track who's on-site, what they're doing, and what they're chasing."
              },
              {
                icon: <Target className="w-8 h-8 text-green-500" />,
                title: "Target Like a Boss",
                description: "Hit up VIPs with luxe offers or nudge attendees toward must-meet vendors."
              },
              {
                icon: <Database className="w-8 h-8 text-green-500" />,
                title: "Own the Data",
                description: "You've got the keys to your attendee kingdom—advertise, upsell, repeat."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl hover:transform hover:scale-105 transition-all">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make Your Info Booth the MVP of Your Event?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Events people, this is YOUR moment—festivals or conferences, we've got you. Ditch the headaches, boost the profits, and let Infobooth.ai do the heavy lifting.
          </p>
          <button className="bg-white text-purple-900 text-lg px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:bg-gray-100 flex items-center gap-2 mx-auto">
            Let's Talk
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center text-gray-400">
        <a 
          href="https://app.gravityrail.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 hover:text-gray-300 transition-colors"
        >
          <span>Powered by Gravity Rail</span>
          <img 
            src={gravityLogo}
            alt="Gravity Rail" 
            className="h-4 w-auto"
          />
        </a>
      </footer>
    </div>
  );
}

export default App;
