import { useNavigate } from 'react-router-dom';
import FunctionalSidebar from '../components/FunctionalSidebar';
import VehicleFormContainer from '../components/VehicleFormContainer';

export default function AddNewVehiclePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white content-stretch flex items-start size-full">
      <FunctionalSidebar />
      
      <div className="flex-1 bg-white h-screen overflow-auto">
        {/* Page Header */}
        <div className="bg-[rgba(33,96,173,0.05)] border-l-4 border-[rgba(33,96,173,0.2)] px-6 py-4">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1 mb-2">
            <button 
              onClick={() => navigate('/calendar')}
              className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565] hover:text-[#2160ad] transition-colors"
            >
              Operations
            </button>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
              <path d="M5.25 10.5L8.75 7L5.25 3.5" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            </svg>
            <button 
              onClick={() => navigate('/vehicles')}
              className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565] hover:text-[#2160ad] transition-colors"
            >
              Vehicles
            </button>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
              <path d="M5.25 10.5L8.75 7L5.25 3.5" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            </svg>
            <span className="font-['Lato:Medium',sans-serif] text-[14px] text-[#2160ad]">Add New Vehicle</span>
          </div>

          {/* Page Title */}
          <h1 className="font-['Lato:Medium',sans-serif] text-[26px] text-[#2160ad]">Add New Vehicle</h1>
        </div>

        {/* Form Content */}
        <VehicleFormContainer />
      </div>
    </div>
  );
}
