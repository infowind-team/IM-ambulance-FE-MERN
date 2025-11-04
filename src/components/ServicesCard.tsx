import { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  quantity: number;
  unitCost: number;
  unit: string;
}

const quickAddServices = [
  { name: 'Wheelchair Service', unitCost: 50, unit: 'per day' },
  { name: 'Stretcher Service', unitCost: 75, unit: 'per day' },
  { name: 'Medical Escort', unitCost: 100, unit: 'per day' },
  { name: 'Emergency Equipment', unitCost: 150, unit: 'per day' },
  { name: 'Oxygen Support', unitCost: 50, unit: 'per day' }
];

export function ServicesCard() {
  const [services, setServices] = useState<Service[]>([]);
  const [customServiceName, setCustomServiceName] = useState('');

  const addService = (name: string, unitCost: number = 50, unit: string = 'per day') => {
    // Check if service already exists
    const existingService = services.find(s => s.name.toLowerCase() === name.toLowerCase());
    
    if (existingService) {
      // If exists, increment quantity
      setServices(prev => prev.map(s => 
        s.id === existingService.id 
          ? { ...s, quantity: s.quantity + 1 }
          : s
      ));
    } else {
      // Add new service
      const newService: Service = {
        id: Date.now().toString(),
        name,
        quantity: 1,
        unitCost,
        unit
      };
      setServices(prev => [...prev, newService]);
    }
  };

  const handleAddCustomService = () => {
    if (customServiceName.trim()) {
      addService(customServiceName.trim());
      setCustomServiceName('');
    }
  };

  const handleQuickAdd = (serviceName: string) => {
    const serviceInfo = quickAddServices.find(s => s.name === serviceName);
    if (serviceInfo) {
      addService(serviceInfo.name, serviceInfo.unitCost, serviceInfo.unit);
    }
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setServices(prev => prev.map(s => 
      s.id === id ? { ...s, quantity: newQuantity } : s
    ));
  };

  const removeService = (id: string) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddCustomService();
    }
  };

  return (
    <div className="space-y-6">
      {/* Add Service and Quick Add Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Add Service */}
        <div className="space-y-2">
          <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
            Add Service
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={customServiceName}
              onChange={(e) => setCustomServiceName(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Search or add custom service..."
              className="flex-1 bg-[#f3f3f5] h-[40px] rounded-[8px] px-[12px] font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950 placeholder:text-[#717182] border-0 focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
            />
            <button
              onClick={handleAddCustomService}
              className="bg-white border border-[rgba(33,96,173,0.3)] h-[40px] w-[40px] rounded-[8px] flex items-center justify-center hover:bg-[#f3f3f5] transition-colors"
            >
              <Plus className="w-4 h-4 text-neutral-950" />
            </button>
          </div>
        </div>

        {/* Quick Add Services */}
        <div className="space-y-2">
          <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
            Quick Add Services
          </label>
          <div className="flex flex-wrap gap-2">
            {quickAddServices.map((service) => (
              <button
                key={service.name}
                onClick={() => handleQuickAdd(service.name)}
                className="bg-white border border-[rgba(33,96,173,0.3)] h-[32px] px-3 rounded-[8px] flex items-center gap-2 hover:bg-[#f3f3f5] transition-colors"
              >
                <Plus className="w-3.5 h-3.5 text-neutral-950" />
                <span className="font-['Lato:Regular',sans-serif] text-[14px] text-neutral-950">
                  {service.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Added Services Table */}
      {services.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
            Added Services
          </h3>
          
          <div className="border border-[rgba(0,0,0,0.1)] rounded-[8px] overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[#f3f3f5] border-b border-[rgba(0,0,0,0.1)]">
                  <th className="px-4 py-3 text-left font-['Lato:Medium',sans-serif] text-[14px] text-[#4a5565]">
                    Service Name
                  </th>
                  <th className="px-4 py-3 text-left font-['Lato:Medium',sans-serif] text-[14px] text-[#4a5565] w-[150px]">
                    Quantity
                  </th>
                  <th className="px-4 py-3 text-left font-['Lato:Medium',sans-serif] text-[14px] text-[#4a5565] w-[120px]">
                    Unit
                  </th>
                  <th className="px-4 py-3 text-right font-['Lato:Medium',sans-serif] text-[14px] text-[#4a5565] w-[120px]">
                    Total Cost
                  </th>
                  <th className="px-4 py-3 text-center font-['Lato:Medium',sans-serif] text-[14px] text-[#4a5565] w-[80px]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id} className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0 hover:bg-[#f9f9fb] transition-colors">
                    <td className="px-4 py-3 font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">
                      {service.name}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min="1"
                          value={service.quantity}
                          onChange={(e) => updateQuantity(service.id, parseInt(e.target.value) || 1)}
                          className="bg-[#f3f3f5] h-[36px] w-[80px] rounded-[6px] px-3 font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950 border-0 focus:outline-none focus:ring-2 focus:ring-[#2160ad] text-center"
                        />
                        <div className="flex flex-col gap-0.5">
                          <button
                            onClick={() => updateQuantity(service.id, service.quantity + 1)}
                            className="w-5 h-4 flex items-center justify-center bg-[#f3f3f5] hover:bg-[#e8e8ed] rounded-t-[4px] transition-colors"
                          >
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                              <path d="M6 9V3M3 6h6" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                            </svg>
                          </button>
                          <button
                            onClick={() => updateQuantity(service.id, service.quantity - 1)}
                            className="w-5 h-4 flex items-center justify-center bg-[#f3f3f5] hover:bg-[#e8e8ed] rounded-b-[4px] transition-colors"
                          >
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                              <path d="M3 6h6" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-['Lato:Regular',sans-serif] text-[14px] text-[#717182]">
                      {service.unit}
                    </td>
                    <td className="px-4 py-3 text-right font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                      ${(service.quantity * service.unitCost).toFixed(2)}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => removeService(service.id)}
                        className="inline-flex items-center justify-center hover:bg-red-50 rounded-[4px] p-1 transition-colors"
                      >
                        <X className="w-4 h-4 text-[#fb2c36]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
