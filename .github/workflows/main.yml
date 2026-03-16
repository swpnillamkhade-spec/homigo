import React, { useState } from 'react';
import { Search, MapPin, Star, Calendar, ChevronRight, Home, ChevronDown, Phone, ExternalLink } from 'lucide-react';

export default function HomigoServicesApp() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showBooking, setShowBooking] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [expandedSubs, setExpandedSubs] = useState({});
  const [orderID, setOrderID] = useState('');
  
  // Booking form state
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    address: ''
  });

  const services = [
    {
      id: 1,
      name: 'House Help Service',
      icon: '🧹',
      color: 'from-purple-500 to-pink-500',
      description: 'Professional cleaning and maintenance services',
      rating: 4.8,
      subcategories: [
        { name: 'Bathroom surface cleaning', services: ['Bathroom surface cleaning'] },
        { name: 'Pre Party Express clean', services: ['Pre Party Express clean'] },
        { name: 'After Party Express', services: ['After Party Express'] },
        { name: 'Utensils washing', services: ['Utensils washing'] },
        { name: 'Kitchen prep', services: ['Kitchen prep'] },
        { name: 'Dusting', services: ['Dusting'] },
        { name: 'Sweeping and mopping', services: ['Sweeping and mopping'] },
        { name: 'Washing cloth', services: ['Washing cloth'] },
        { name: 'Kitchen cleaning', services: ['Kitchen cleaning'] },
        { name: 'Fan cleaning', services: ['Fan cleaning'] },
        { name: 'Tile cleaning', services: ['Tile cleaning'] }
      ]
    },
    {
      id: 2,
      name: 'Installation & Service',
      icon: '🔧',
      color: 'from-orange-500 to-red-500',
      description: 'Professional installation and repair services',
      rating: 4.9,
      subcategories: [
        {
          name: 'Flooring',
          services: [],
          children: [{ name: 'Tile', services: ['Tile Installation'] }]
        },
        {
          name: 'Bathroom',
          services: [],
          children: [
            {
              name: 'Bathtub and Shower',
              services: ['Shower repair', 'Shower head replacement', 'Bathtub installation', 'Bathtub repair', 'Bathtub and shower Valve replacement']
            },
            {
              name: 'Toilet',
              services: ['Toilet installation', 'Toilet repair blocking', 'Toilet seat installation']
            },
            {
              name: 'Faucets & Sinks',
              services: ['Sink installation', 'Sink repair', 'Faucet Replacement', 'Faucet Repair', 'Bathroom vanity installation']
            },
            {
              name: 'Accessibility',
              services: ['Walk-in Tub installation', 'CleanCut tub installation', 'Grab bar installation']
            },
            {
              name: 'Backsplash & Tile',
              services: ['Tile installation', 'Backsplash installation']
            },
            {
              name: 'Bathroom Fans',
              services: ['Exhaust fan installation', 'Exhaust fan repair', 'Bathroom Fan installation', 'Bathroom fan repair']
            }
          ]
        },
        {
          name: 'Windows and Doors',
          services: [],
          children: [
            {
              name: 'Windows',
              services: ['Window installation', 'Impact window replacement', 'Glass replacement']
            },
            {
              name: 'Interior and Exterior Doors',
              services: ['Exterior and interior door installation', 'Door jamb repair']
            },
            {
              name: 'Doorbell and Door Hardware',
              services: ['Doorbell installation', 'Smart doorbell installation', 'Door hardware installation', 'Door lock repair']
            },
            {
              name: 'Interior Window Treatment',
              services: ['Blinds installation', 'Custom window treatment designed and installation', 'Plantation shutter installation']
            },
            {
              name: 'Exterior Window Treatment',
              services: ['Exterior shutter installation and repair', 'Windows security bar installation', 'Storm shutter repair']
            },
            {
              name: 'Screens',
              services: ['Windows and door screen repair And installation']
            }
          ]
        },
        {
          name: 'Heating and Cooling',
          services: [],
          children: [
            {
              name: 'Heating and Cooling System',
              services: ['AC installation', 'AC repair', 'Electric wall heater installation']
            },
            {
              name: 'House Fans',
              services: ['Fan installation and repair', 'Whole house fan installation', 'Exhaust fan installation and repair']
            }
          ]
        },
        {
          name: 'Water Heaters and Treatment',
          services: [],
          children: [
            {
              name: 'Water Heater',
              services: ['Water heater installation and repair', 'Solar water heating installation']
            }
          ]
        },
        {
          name: 'Kitchen',
          services: [],
          children: [
            {
              name: 'Kitchen Remodeling',
              services: ['Kitchen remodeling and design service']
            },
            {
              name: 'Cabinets',
              services: ['Cabinet installation Kitchen', 'Cabinet hardware installation and repair']
            },
            {
              name: 'Kitchen Plumbing',
              services: ['Sink installation', 'Sink repair', 'Water treatment service', 'Gas line installation and repair', 'Faucet installation and replacement repair']
            }
          ]
        },
        {
          name: 'Electrical and Lighting',
          services: [],
          children: [
            {
              name: 'Interior Lighting',
              services: ['Interior ceiling light installation and repair', 'Interior wall light installation and repair', 'Under cabinet light installation']
            },
            {
              name: 'Ceiling Fan',
              services: ['Ceiling fan installation and repair']
            },
            {
              name: 'Generators and Solar Power',
              services: ['Solar panel installation', 'EV charger installation', 'Generator and Battery installation']
            },
            {
              name: 'Safety and Security',
              services: ['Smoke alarm installation', 'Fire alarm installation', 'IoT integrated security']
            }
          ]
        },
        {
          name: 'Painting and Patching',
          services: [],
          children: [
            {
              name: 'Painting and Coating',
              services: ['Interior and exterior painting', 'Floor and roof coating']
            },
            {
              name: 'Interior and Exterior Trim',
              services: ['Interior & Exterior trim installation and repair']
            }
          ]
        },
        {
          name: 'Hanging and Mounting',
          services: [],
          children: [
            {
              name: 'Hanging and Mounting Services',
              services: ['TV Mounting', 'Picture hanging Service', 'Mirror hanging service']
            }
          ]
        },
        {
          name: 'Plumbing',
          services: [],
          children: [
            {
              name: 'General Plumbing',
              services: ['Plumbing repair', 'Leak repair', 'Waterline installation', 'Gas line installation and repair']
            },
            {
              name: 'Bathroom Plumbing',
              services: ['Shower repair', 'Shower head replacement', 'Bathtub installation', 'Bathtub and shower valve replace', 'Toilet installation and repair', 'Washing basin Installation and repair']
            },
            {
              name: 'Drains and Pipes',
              services: ['Drain installation and repair', 'Drain unlocking', 'Pipe installation and Repair']
            }
          ]
        }
      ]
    }
  ];

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSubcategory = (id) => {
    setExpandedSubs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const confirmBooking = () => {
    setShowBooking(false);
    const newOrderID = 'ORD-' + Math.floor(Math.random() * 9000) + 1000;
    setOrderID(newOrderID);
    setBookingConfirmed(true);
  };

  if (bookingConfirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl">✓</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Booking Confirmed!</h2>
            <p className="text-slate-600 mb-6">Your service order has been successfully placed.</p>
            
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6 text-left">
              <p className="text-sm text-slate-600 font-semibold mb-2">Order ID</p>
              <p className="text-2xl font-bold text-blue-600 mb-4">{orderID}</p>
              
              <div className="space-y-3 text-xs border-t border-blue-200 pt-3">
                <div>
                  <p className="text-slate-600 font-semibold">Name: <span className="text-slate-900">{bookingForm.name}</span></p>
                </div>
                <div>
                  <p className="text-slate-600 font-semibold">📍 Address: <span className="text-slate-900">{bookingForm.address}</span></p>
                </div>
                <div>
                  <p className="text-slate-600 font-semibold">📅 Date: <span className="text-slate-900">{bookingForm.date}</span></p>
                </div>
                <div>
                  <p className="text-slate-600 font-semibold">📞 Phone: <span className="text-slate-900">{bookingForm.phone}</span></p>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <button
                onClick={() => {
                  setBookingConfirmed(false);
                  setSelectedCategory(null);
                  setSelectedSubcategory(null);
                  setBookingForm({ name: '', email: '', phone: '', date: '', address: '' });
                }}
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Back to Services
              </button>
              <a
                href="https://homigo.app/owner-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition"
              >
                📊 View in Owner Dashboard
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-left">
              <p className="text-xs font-semibold text-slate-900 mb-2">Owner Login Credentials:</p>
              <p className="text-xs text-slate-700">📧 owner@homigo.com</p>
              <p className="text-xs text-slate-700">🔑 Homigo@2024</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Home className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-slate-900">Homigo Services</h1>
            </div>
            <div className="text-sm text-slate-600">Your trusted home services partner</div>
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 placeholder-slate-500"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {selectedCategory ? (
          <div className="animate-in fade-in duration-300">
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSelectedSubcategory(null);
              }}
              className="mb-6 text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 transition"
            >
              ← Back to Services
            </button>

            {selectedSubcategory ? (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <button
                  onClick={() => setSelectedSubcategory(null)}
                  className="mb-6 text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 transition"
                >
                  ← Back to {selectedCategory.name}
                </button>

                <div className="grid md:grid-cols-3 gap-12">
                  <div className="md:col-span-2">
                    <div className={`mb-6 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br ${selectedCategory.color} h-64 flex items-center justify-center`}>
                      <div className="text-7xl">{selectedCategory.icon}</div>
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">{selectedSubcategory.name}</h2>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} className={i < Math.floor(selectedCategory.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'} />
                        ))}
                      </div>
                      <span className="text-lg font-semibold text-slate-900">{selectedCategory.rating}</span>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-4">Services Included</h3>
                      <div className="space-y-3">
                        {selectedSubcategory.services.map((service, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-slate-700">
                            <span className="text-blue-600 font-bold mt-1">✓</span>
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 h-fit sticky top-24">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
                    <button
                      onClick={() => setShowBooking(true)}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105 flex items-center justify-center gap-2 mb-4"
                    >
                      <Calendar size={20} />
                      Book Service Now
                    </button>
                    <p className="text-sm text-slate-700 mb-4">Our experts are ready to help. Response time: 2 hours</p>
                    <div className="space-y-3 text-sm text-slate-700">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-blue-600" />
                        <span>Available in your area</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star size={16} className="text-blue-600" />
                        <span>Trusted by millions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className={`mb-8 h-48 rounded-xl bg-gradient-to-br ${selectedCategory.color} flex items-center justify-center shadow-lg`}>
                  <div className="text-8xl">{selectedCategory.icon}</div>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-2">{selectedCategory.name}</h2>
                <p className="text-slate-600 text-lg mb-8">{selectedCategory.description}</p>

                <div className="space-y-3">
                  {selectedCategory.subcategories.map((subcategory, idx) => (
                    <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => {
                          if (subcategory.children) {
                            toggleSubcategory(idx);
                          } else {
                            setSelectedSubcategory(subcategory);
                          }
                        }}
                        className="w-full p-4 flex items-center justify-between hover:bg-blue-50 transition bg-slate-50"
                      >
                        <span className="font-semibold text-slate-900">{subcategory.name}</span>
                        {subcategory.children ? (
                          <ChevronDown size={20} className={`transform transition ${expandedSubs[idx] ? 'rotate-180' : ''} text-blue-600`} />
                        ) : (
                          <ChevronRight size={20} className="text-blue-600" />
                        )}
                      </button>

                      {subcategory.children && expandedSubs[idx] && (
                        <div className="bg-white">
                          {subcategory.children.map((child, childIdx) => (
                            <button
                              key={childIdx}
                              onClick={() => setSelectedSubcategory(child)}
                              className="w-full p-4 pl-8 text-left border-t border-slate-100 hover:bg-blue-50 transition flex items-center justify-between group"
                            >
                              <span className="text-slate-700 group-hover:text-slate-900">{child.name}</span>
                              <ChevronRight size={16} className="text-slate-400 group-hover:text-blue-600" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Services</h2>
            <p className="text-slate-600 mb-8">Discover all the services Homigo offers to transform your home</p>

            {filteredServices.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-600 text-lg">No services found matching your search.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {filteredServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedCategory(service)}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group border border-slate-200 hover:border-blue-300"
                  >
                    <div className={`relative h-56 bg-gradient-to-br ${service.color} flex items-center justify-center overflow-hidden group-hover:scale-105 transition duration-300`}>
                      <div className="text-8xl opacity-90 group-hover:opacity-100 transition">{service.icon}</div>
                      <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-5 transition"></div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">{service.name}</h3>
                      <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                        <div className="flex items-center gap-1">
                          <Star size={16} className="fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-slate-900">{service.rating}</span>
                        </div>
                        <ChevronRight className="text-slate-400 group-hover:text-blue-600 transition" size={24} />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 animate-in zoom-in duration-300 my-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Book Service</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="(123) 456-7890" 
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">📍 Service Address</label>
                  <input 
                    type="text" 
                    placeholder="Enter your service address (e.g., 123 Main St, New York, NY 10001)" 
                    value={bookingForm.address}
                    onChange={(e) => setBookingForm({...bookingForm, address: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                  />
                  <p className="text-xs text-slate-500 mt-1">Map will update as you type your address</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">📍 Service Location Preview</label>
                <div className="w-full h-64 rounded-lg overflow-hidden border-2 border-slate-200 shadow-md bg-white">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s${encodeURIComponent(bookingForm.address || 'New York, NY')}!5e0!3m2!1sen!2sus!4v1234567890`}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Service Location Map"
                  ></iframe>
                </div>
                <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-900 font-semibold">
                    {bookingForm.address ? `📍 Location: ${bookingForm.address}` : '📍 Enter your address above to see location'}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-6 mt-6 border-t border-slate-200">
              <button
                onClick={() => setShowBooking(false)}
                className="flex-1 px-4 py-2 border border-slate-300 rounded-lg font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmBooking}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:shadow-lg transition"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
