// @/components/cases/add/BillingSummary.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SelectedService } from "./types";
import { Car } from "lucide-react";

type Props = {
  services: SelectedService[];
  baseTransportFee?: number; // Optional: can be calculated later
};

const formatPrice = (amount: number) => `$${amount.toFixed(2)}`;

export default function BillingSummary({ services, baseTransportFee = 0 }: Props) {
  const servicesTotal = services.reduce((sum, s) => sum + s.price * s.quantity, 0);
  const grandTotal = baseTransportFee + servicesTotal;

  return (
    <Card className="overflow-hidden w-full">
      <CardHeader className="header-bg-soft pb-6">
        <CardTitle className="flex items-center gap-2">
          <Car className="w-5 h-5" />
          Billing Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-50 rounded-lg border p-6 space-y-4">
          <div className="font-semibold text-lg text-[#2160AD] mb-4">Billing Summary</div>

          {/* Base Transport Fee */}
          <div className="flex justify-between items-center py-3 border-b">
            <div>
              <span className="font-medium">Base Transport Fee</span>
              <p className="text-sm text-gray-600 mt-1">
                {services.length > 0 || baseTransportFee > 0
                  ? "Calculated from route & vehicle type"
                  : "No trip or vehicle selected yet"}
              </p>
            </div>
            <span className="font-semibold text-lg">{formatPrice(baseTransportFee)}</span>
          </div>

          {/* Additional Services */}
          {services.length > 0 ? (
            <div className="space-y-3">
              {services.map((svc) => (
                <div key={svc.id} className="flex justify-between items-center py-2 border-b border-dashed">
                  <div>
                    <span className="font-medium">{svc.name}</span>
                    <p className="text-sm text-gray-600">
                      {svc.quantity > 1 && `${svc.quantity} × `}{formatPrice(svc.price)} {svc.unit && `/ ${svc.unit}`}
                    </p>
                  </div>
                  <span className="font-medium">{formatPrice(svc.price * svc.quantity)}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p className="text-base">No additional services added</p>
              <p className="text-sm mt-1">Add services to see breakdown</p>
            </div>
          )}

          {/* Total */}
          <div className="border-t-1 border-gray-300 pt-4">
            <div className="flex justify-between items-center text-lg font-bold text-[#2160AD]">
              <span className="">Total Amount:</span>
              <span className="">{formatPrice(grandTotal)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}