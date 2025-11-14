// @/components/cases/add/ServiceSelection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Plus } from "lucide-react";
import ServiceSearch from "./ServiceSearch";
import { ALL_SERVICES, type Service } from "./ALL_SERVICES";
import { SelectedService } from "./types";

type Props = {
  selectedServices: SelectedService[];
  setSelectedServices: React.Dispatch<React.SetStateAction<SelectedService[]>>;
  serviceSearch: string;
  setServiceSearch: (v: string) => void;
};

export default function ServiceSelection({
  selectedServices,
  setSelectedServices,
  serviceSearch,
  setServiceSearch,
}: Props) {
  const handleServiceSelect = (service: Service | null) => {
    if (!service) return;
    const exists = selectedServices.some(s => s.name === service.label);
    if (exists) return;

    const newService: SelectedService = {
      id: `${service.value}-${Date.now()}`,
      name: service.label,
      price: parseFloat(service.price.replace("$", "")),
      unit: service.unit || "",
      quantity: 1,
    };
    setSelectedServices(prev => [...prev, newService]);
  };

  const quickAdd = (service: Service) => {
    handleServiceSelect(service);
  };

  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Services
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <Label>Add Services</Label>
            <ServiceSearch
              value={serviceSearch}
              onChange={setServiceSearch}
              onSelect={handleServiceSelect}
            />
          </div>
          <div>
            <Label>Quick Add Services</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {ALL_SERVICES.filter(
                (svc) => !selectedServices.some((s) => s.name === svc.label)
              )
                .slice(0, 4)
                .map((svc) => (
                  <Button
                    key={svc.value}
                    onClick={() => quickAdd(svc)}
                    variant="outline"
                    size="sm"
                    className="border-[#2160AD]/30 hover:bg-[#2160AD]/10"
                    disabled={selectedServices.some(s => s.name === svc.label)}
                  >
                    <Plus className="w-3 h-3 mr-1" />
                    {svc.label}
                  </Button>
                ))}
            </div>
          </div>
        </div>

        {selectedServices.length > 0 && (
          <div>
            <Label>
              Added Services
            </Label>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-2 grid grid-cols-6 text-sm font-medium">
                <div className="col-span-2">Service Name</div>
                <div>Quantity</div>
                <div>Unit</div>
                <div>Total Cost</div>
                <div>Action</div>
              </div>
              {selectedServices.map(svc => (
                <div key={svc.id} className="px-4 py-3 hover:header-bg-soft grid grid-cols-6 items-center hover:bg-gray-50 border-t">
                  <div className="col-span-2 font-medium">{svc.name}</div>
                  <div>
                    <Input
                      type="number"
                      min="1"
                      value={svc.quantity}
                      onChange={e => {
                        const qty = Math.max(1, parseInt(e.target.value) || 1);
                        setSelectedServices(prev => prev.map(s => s.id === svc.id ? { ...s, quantity: qty } : s));
                      }}
                      className="w-16 h-8"
                    />
                  </div>
                  <div className="text-base text-gray-600">{svc.unit || "-"}</div>
                  <div className="font-medium">${(svc.price * svc.quantity).toFixed(2)}</div>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setSelectedServices(prev => prev.filter(s => s.id !== svc.id))}
                    className="text-red-600 hover:bg-red-50"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}