// This file contains all the onChange handlers needed
// Copy the update handlers from here to add to the main file

// Add onChange to line 480 (officeHours for tripServices):
onChange={(e) => updateTripService(service.id, 'officeHours', e.target.value)}

// Add onChange to line 498 (nonOfficeHours for tripServices):
onChange={(e) => updateTripService(service.id, 'nonOfficeHours', e.target.value)}

// Add onChange to line 516 (weekendPH for tripServices):
onChange={(e) => updateTripService(service.id, 'weekendPH', e.target.value)}

// Add onChange to line 536 (active checkbox for tripServices):
onChange={(e) => updateTripService(service.id, 'active', e.target.checked)}

// Similar changes needed for supportServices, addonServices, and additionalCharges
