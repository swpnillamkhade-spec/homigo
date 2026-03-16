// JAVASCRIPT ES6+ LOGIC FOR HOMIGO SERVICES
// Save this as: logic.js

// ===== STATE MANAGEMENT =====
class HomigoState {
    constructor() {
        this.selectedCategory = null;
        this.selectedSubcategory = null;
        this.searchQuery = '';
        this.showBooking = false;
        this.bookingConfirmed = false;
        this.expandedSubs = {};
        this.orderID = '';
        this.bookingForm = {
            name: '',
            email: '',
            phone: '',
            date: '',
            address: ''
        };
    }

    setState(key, value) {
        this[key] = value;
        this.notifyListeners();
    }

    getState(key) {
        return this[key];
    }

    listeners = [];

    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    notifyListeners() {
        this.listeners.forEach(listener => listener(this));
    }
}

// Global state instance
const state = new HomigoState();

// ===== SERVICES DATA =====
const SERVICES = [
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
                        services: ['Shower repair', 'Shower head replacement', 'Bathtub installation']
                    },
                    {
                        name: 'Toilet',
                        services: ['Toilet installation', 'Toilet repair blocking', 'Toilet seat installation']
                    },
                    {
                        name: 'Faucets & Sinks',
                        services: ['Sink installation', 'Sink repair', 'Faucet Replacement']
                    }
                ]
            }
        ]
    }
];

// ===== UTILITY FUNCTIONS =====

/**
 * Filter services based on search query
 * @param {string} query - Search query
 * @returns {Array} - Filtered services
 */
function filterServices(query) {
    return SERVICES.filter(service =>
        service.name.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase())
    );
}

/**
 * Get status color based on status type
 * @param {string} status - Order status
 * @returns {string} - CSS class for color
 */
function getStatusColor(status) {
    const statusColors = {
        'completed': 'bg-green-100 text-green-800',
        'pending': 'bg-yellow-100 text-yellow-800',
        'in-progress': 'bg-blue-100 text-blue-800',
        'cancelled': 'bg-red-100 text-red-800'
    };
    return statusColors[status] || 'bg-slate-100 text-slate-800';
}

/**
 * Generate unique order ID
 * @returns {string} - Order ID
 */
function generateOrderID() {
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    return `ORD-${randomNum}`;
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate phone format
 * @param {string} phone - Phone to validate
 * @returns {boolean} - True if valid
 */
function validatePhone(phone) {
    const phoneRegex = /^[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

/**
 * Format date to readable string
 * @param {string} dateString - Date string
 * @returns {string} - Formatted date
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

/**
 * Calculate total price based on service type
 * @param {string} serviceName - Service name
 * @returns {number} - Price in dollars
 */
function calculatePrice(serviceName) {
    const priceMap = {
        'Bathroom': 150,
        'Kitchen': 200,
        'Window': 500,
        'Plumbing': 300,
        'Tile': 450,
        'Electrical': 350,
        'Painting': 250
    };

    for (let [key, price] of Object.entries(priceMap)) {
        if (serviceName.includes(key)) {
            return price;
        }
    }
    return 100; // Default price
}

// ===== BOOKING FUNCTIONS =====

/**
 * Validate booking form
 * @returns {object} - Validation result
 */
function validateBookingForm() {
    const form = state.getState('bookingForm');
    const errors = {};

    if (!form.name.trim()) errors.name = 'Name is required';
    if (!form.email.trim()) errors.email = 'Email is required';
    else if (!validateEmail(form.email)) errors.email = 'Invalid email format';
    if (!form.phone.trim()) errors.phone = 'Phone is required';
    else if (!validatePhone(form.phone)) errors.phone = 'Invalid phone format';
    if (!form.date) errors.date = 'Date is required';
    if (!form.address.trim()) errors.address = 'Address is required';

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}

/**
 * Confirm booking
 */
function confirmBooking() {
    const validation = validateBookingForm();
    
    if (!validation.isValid) {
        console.log('Validation errors:', validation.errors);
        alert('Please fill all fields correctly');
        return;
    }

    const orderID = generateOrderID();
    state.setState('orderID', orderID);
    state.setState('showBooking', false);
    state.setState('bookingConfirmed', true);

    // Log booking details
    console.log('Booking confirmed:', {
        orderID,
        ...state.getState('bookingForm')
    });
}

/**
 * Reset booking form
 */
function resetBookingForm() {
    state.setState('bookingForm', {
        name: '',
        email: '',
        phone: '',
        date: '',
        address: ''
    });
}

/**
 * Update booking form field
 * @param {string} field - Field name
 * @param {string} value - Field value
 */
function updateBookingForm(field, value) {
    const form = state.getState('bookingForm');
    form[field] = value;
    state.setState('bookingForm', form);
}

// ===== ORDER FUNCTIONS =====

/**
 * Get filtered orders
 * @param {Array} orders - Orders array
 * @param {string} filterStatus - Status filter
 * @param {string} searchQuery - Search query
 * @returns {Array} - Filtered orders
 */
function filterOrders(orders, filterStatus, searchQuery) {
    return orders.filter(order => {
        const matchStatus = filterStatus === 'all' || order.status === filterStatus;
        const matchSearch = 
            order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.serviceName.toLowerCase().includes(searchQuery.toLowerCase());
        return matchStatus && matchSearch;
    });
}

/**
 * Calculate order statistics
 * @param {Array} orders - Orders array
 * @returns {object} - Statistics
 */
function calculateOrderStats(orders) {
    return {
        total: orders.length,
        completed: orders.filter(o => o.status === 'completed').length,
        pending: orders.filter(o => o.status === 'pending').length,
        inProgress: orders.filter(o => o.status === 'in-progress').length,
        totalRevenue: orders.reduce((sum, o) => {
            const amount = parseInt(o.amount.replace('$', ''));
            return sum + amount;
        }, 0)
    };
}

// ===== LOCATION FUNCTIONS =====

/**
 * Get Google Maps embed URL
 * @param {string} address - Address
 * @returns {string} - Google Maps embed URL
 */
function getGoogleMapsUrl(address) {
    const encodedAddress = encodeURIComponent(address || 'New York, NY');
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s${encodedAddress}!5e0!3m2!1sen!2sus!4v1234567890`;
}

/**
 * Get user's current location
 * @returns {Promise} - Location promise
 */
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                (error) => {
                    reject(error);
                }
            );
        } else {
            reject(new Error('Geolocation not supported'));
        }
    });
}

// ===== EXPORT FUNCTIONS =====
export {
    HomigoState,
    state,
    SERVICES,
    filterServices,
    getStatusColor,
    generateOrderID,
    validateEmail,
    validatePhone,
    formatDate,
    calculatePrice,
    validateBookingForm,
    confirmBooking,
    resetBookingForm,
    updateBookingForm,
    filterOrders,
    calculateOrderStats,
    getGoogleMapsUrl,
    getCurrentLocation
};
