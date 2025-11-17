// Utilidades generales
const argentinaCities = [
    "Buenos Aires", "Córdoba", "Rosario", "Mendoza", "Tucumán", 
    // ... lista completa de ciudades
];

function setupCityAutocomplete() {
    // Configurar autocompletado de ciudades
}

function showNotification(message, type) {
    // Mostrar notificaciones al usuario
}

function generateId(prefix) {
    // Generar IDs únicos
    return `${prefix}_${Date.now()}`;
}

function formatPrice(price, operation) {
    // Formatear precios según operación
    return operation === 'venta' 
        ? '$' + parseInt(price).toLocaleString() 
        : '$' + parseInt(price).toLocaleString() + '/mes';
}
