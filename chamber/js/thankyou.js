// Parse URL parameters
const params = new URLSearchParams(window.location.search);
const formData = {
    firstName: params.get('firstName'),
    lastName: params.get('lastName'),
    email: params.get('email'),
    phone: params.get('phone'),
    business: params.get('business'),
    timestamp: params.get('timestamp')
};

// Display data
const formDataHTML = `
    <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Phone:</strong> ${formData.phone}</p>
    <p><strong>Business:</strong> ${formData.business}</p>
    <p><strong>Submitted:</strong> ${new Date(formData.timestamp).toLocaleString()}</p>
`;
document.getElementById('form-data').innerHTML = formDataHTML;