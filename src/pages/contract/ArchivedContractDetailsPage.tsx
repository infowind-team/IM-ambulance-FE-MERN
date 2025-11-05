import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import FunctionalSidebar from '../components/FunctionalSidebar';
import svgPaths from '../imports/svg-wxcyt0nanj';

const ArchivedContractDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock contract data based on ID
  const getContractData = () => {
    if (id === '4') {
      return {
        facilityName: 'National University Hospital',
        contractId: 'NUH-2023-003',
        startDate: '01/01/2023',
        endDate: '31/12/2023',
        branches: '-',
        tripServices: 2,
        supportServices: 2,
        addonServices: 2,
        additionalCharges: 2,
      };
    } else if (id === '5') {
      return {
        facilityName: "KK Women's and Children's Hospital",
        contractId: 'KKH-2025-005',
        startDate: '15/01/2025',
        endDate: '10/02/2025',
        branches: 'CGH Main Branch',
        tripServices: 2,
        supportServices: 2,
        addonServices: 2,
        additionalCharges: 2,
      };
    } else {
      return {
        facilityName: 'Changi General Hospital',
        contractId: 'CGH-2025-006',
        startDate: '01/01/2025',
        endDate: '25/01/2025',
        branches: 'CGH Main Branch',
        tripServices: 2,
        supportServices: 2,
        addonServices: 2,
        additionalCharges: 2,
      };
    }
  };

  const contractData = getContractData();
  const contractPeriod = `${contractData.startDate} - ${contractData.endDate}`;

  const handleBack = () => {
    navigate('/services?tab=archived');
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* <FunctionalSidebar /> */}
      
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header with Breadcrumbs */}
        <div className="bg-[rgba(33,96,173,0.05)] px-4 md:px-6 py-4">
          <div className="flex items-center gap-1 text-sm mb-2">
            <button 
              onClick={() => navigate('/services?tab=archived')}
              className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565] hover:text-[#2160ad]"
            >
              Management
            </button>
            <span className="text-[#717182]">›</span>
            <button 
              onClick={() => navigate('/services?tab=archived')}
              className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565] hover:text-[#2160ad]"
            >
              Services
            </button>
            <span className="text-[#717182]">›</span>
            <span className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565]">{contractData.facilityName}</span>
          </div>
          <h1 className="font-['Lato:Medium',sans-serif] text-[22px] md:text-[26px] text-[#2160ad]">
            {contractData.facilityName}
          </h1>
        </div>

        {/* Main Content - Scrollable */}
        <div className="flex-1 overflow-auto">
          <div className="p-4 md:p-6 space-y-6">
            {/* Back Button and Archived Badge */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <button
                onClick={handleBack}
                className="flex items-center gap-3 h-[36px] rounded-lg"
              >
                <ArrowLeft className="w-4 h-4 text-[#2160ad]" />
                <span className="font-['Lato:Medium',sans-serif] text-[16px] text-[#2160ad]">
                  Back to Archived Contracts
                </span>
              </button>
              
              <div className="bg-gray-100 h-[36px] px-4 rounded-[10px] flex items-center gap-2">
                <div className="bg-[#6a7282] rounded-full w-2 h-2" />
                <span className="font-['Lato:Medium',sans-serif] text-[14px] text-[#364153]">
                  Archived
                </span>
              </div>
            </div>

            {/* Contract Overview Card */}
            <div className="bg-white border border-gray-100 rounded-[10px] overflow-hidden">
              {/* Card Header */}
              <div className="bg-[rgba(33,96,173,0.05)] border-b border-[rgba(33,96,173,0.1)] px-4 md:px-6 py-4">
                <h3 className="font-['Lato:Medium',sans-serif] text-[18px] text-[#2160ad]">
                  Contract Overview
                </h3>
              </div>

              {/* Card Content */}
              <div className="p-4 md:p-6 space-y-4">
                {/* Contract Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">
                      Facility Name
                    </p>
                    <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">
                      {contractData.facilityName}
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">
                      Contract ID
                    </p>
                    <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">
                      {contractData.contractId}
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">
                      Contract Period
                    </p>
                    <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">
                      {contractPeriod}
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">
                      Branches
                    </p>
                    <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">
                      {contractData.branches}
                    </p>
                  </div>
                </div>

                {/* Metrics Cards */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Trip Services */}
                    <div className="bg-blue-50 border border-blue-100 rounded-[10px] p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p2bb95e00} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M8 14.6667V8" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p1e1d6700} stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M5 2.84666L11 6.27999" stroke="#2160AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </svg>
                        <span className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565]">
                          Trip Services
                        </span>
                      </div>
                      <p className="font-['Lato:SemiBold',sans-serif] text-[24px] text-[#2160ad]">
                        {contractData.tripServices}
                      </p>
                    </div>

                    {/* Support Services */}
                    <div className="bg-green-50 border border-green-100 rounded-[10px] p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                          <path d="M3.33333 8H12.6667" stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M8 3.33333V12.6667" stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </svg>
                        <span className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565]">
                          Support Services
                        </span>
                      </div>
                      <p className="font-['Lato:SemiBold',sans-serif] text-[24px] text-[#008236]">
                        {contractData.supportServices}
                      </p>
                    </div>

                    {/* Add-on Services */}
                    <div className="bg-purple-50 border border-purple-100 rounded-[10px] p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                          <path d="M3.33333 8H12.6667" stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M8 3.33333V12.6667" stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </svg>
                        <span className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565]">
                          Add-on Services
                        </span>
                      </div>
                      <p className="font-['Lato:SemiBold',sans-serif] text-[24px] text-[#8200db]">
                        {contractData.addonServices}
                      </p>
                    </div>

                    {/* Additional Charges */}
                    <div className="bg-orange-50 border border-[#ffedd4] rounded-[10px] p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                          <path d="M8 1.33333V14.6667" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p5120400} stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </svg>
                        <span className="font-['Lato:Regular',sans-serif] text-[14px] text-[#4a5565]">
                          Additional Charges
                        </span>
                      </div>
                      <p className="font-['Lato:SemiBold',sans-serif] text-[24px] text-[#ca3500]">
                        {contractData.additionalCharges}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trip Services Card */}
            <div className="bg-white border border-gray-100 rounded-[10px] overflow-hidden">
              <div className="bg-[rgba(33,96,173,0.05)] border-b border-[rgba(33,96,173,0.1)] px-4 md:px-6 py-4">
                <h3 className="font-['Lato:Medium',sans-serif] text-[18px] text-[#2160ad]">
                  Trip Services
                </h3>
              </div>
              <div className="p-4 md:p-6 space-y-3">
                {/* Service Item 1 */}
                <div className="bg-gray-50 border border-gray-100 rounded-[10px] p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">Service Type</p>
                      <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">One-Way Trip</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">Office Hours Rate</p>
                      <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">N/A</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">Non-Office Hours Rate</p>
                      <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">N/A</p>
                    </div>
                  </div>
                </div>

                {/* Service Item 2 */}
                <div className="bg-gray-50 border border-gray-100 rounded-[10px] p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">Service Type</p>
                      <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">Three-Way Trip</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">Office Hours Rate</p>
                      <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">N/A</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">Non-Office Hours Rate</p>
                      <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">N/A</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Services Card */}
            <div className="bg-white border border-gray-100 rounded-[10px] overflow-hidden">
              <div className="bg-[rgba(33,96,173,0.05)] border-b border-[rgba(33,96,173,0.1)] px-4 md:px-6 py-4">
                <h3 className="font-['Lato:Medium',sans-serif] text-[18px] text-[#2160ad]">
                  Support Services
                </h3>
              </div>
              <div className="p-4 md:p-6 space-y-3">
                {[1, 2].map((item) => (
                  <div key={item} className="bg-gray-50 border border-gray-100 rounded-[10px] p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">Service Name</p>
                        <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">N/A</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">Office Hours Rate</p>
                        <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">N/A</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">Non-Office Hours Rate</p>
                        <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">N/A</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add-on Services Card */}
            <div className="bg-white border border-gray-100 rounded-[10px] overflow-hidden">
              <div className="bg-[rgba(33,96,173,0.05)] border-b border-[rgba(33,96,173,0.1)] px-4 md:px-6 py-4">
                <h3 className="font-['Lato:Medium',sans-serif] text-[18px] text-[#2160ad]">
                  Add-on Services
                </h3>
              </div>
              <div className="p-4 md:p-6 space-y-3">
                {[1, 2].map((item) => (
                  <div key={item} className="bg-gray-50 border border-gray-100 rounded-[10px] p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">Service Name</p>
                        <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">N/A</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">Office Hours Rate</p>
                        <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">N/A</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">Non-Office Hours Rate</p>
                        <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">N/A</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Charges Card */}
            <div className="bg-white border border-gray-100 rounded-[10px] overflow-hidden">
              <div className="bg-[rgba(33,96,173,0.05)] border-b border-[rgba(33,96,173,0.1)] px-4 md:px-6 py-4">
                <h3 className="font-['Lato:Medium',sans-serif] text-[18px] text-[#2160ad]">
                  Additional Charges
                </h3>
              </div>
              <div className="p-4 md:p-6 space-y-3">
                {[1, 2].map((item) => (
                  <div key={item} className="bg-gray-50 border border-gray-100 rounded-[10px] p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">Charge Name</p>
                        <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">N/A</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">Amount</p>
                        <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">N/A</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">Frequency</p>
                        <p className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828]">N/A</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Read Only Warning Banner */}
            <div className="bg-amber-50 border border-[#fee685] rounded-[10px] p-4">
              <div className="flex gap-4">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.pcfbcf00} stroke="#E17100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.pd2076c0} stroke="#E17100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M8.33333 7.5H6.66667" stroke="#E17100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M13.3333 10.8333H6.66667" stroke="#E17100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M13.3333 14.1667H6.66667" stroke="#E17100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
                <div className="space-y-1">
                  <h4 className="font-['Lato:Medium',sans-serif] text-[16px] text-[#7b3306]">
                    Archived Contract - Read Only
                  </h4>
                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#bb4d00]">
                    This contract has been archived and cannot be edited. All information is displayed for reference purposes only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchivedContractDetailsPage;
