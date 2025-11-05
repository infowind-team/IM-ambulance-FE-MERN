import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Users, FileText, CheckCircle2, Plus, Upload, Edit3, Trash2 } from 'lucide-react';
import FunctionalSidebar from '../components/FunctionalSidebar';

type Step = 'personal' | 'employment' | 'documents';

interface FamilyMember {
  id: string;
  name: string;
  relationship: string;
  contact: string;
  dob: string;
  age: string;
  isEmergencyContact: boolean;
}

export default function AddEmployeePage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>('employment');
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([
    {
      id: '1',
      name: '',
      relationship: 'Other',
      contact: '',
      dob: '',
      age: '',
      isEmergencyContact: false,
    },
  ]);

  const addFamilyMember = () => {
    setFamilyMembers([
      ...familyMembers,
      {
        id: Date.now().toString(),
        name: '',
        relationship: 'Other',
        contact: '',
        dob: '',
        age: '',
        isEmergencyContact: false,
      },
    ]);
  };

  const handleNext = () => {
    if (currentStep === 'personal') {
      setCurrentStep('employment');
    } else if (currentStep === 'employment') {
      setCurrentStep('documents');
    }
  };

  const handleBack = () => {
    if (currentStep === 'documents') {
      setCurrentStep('employment');
    } else if (currentStep === 'employment') {
      setCurrentStep('personal');
    } else {
      navigate('/hr');
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* <FunctionalSidebar /> */}
      
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="border-b border-[rgba(0,0,0,0.1)] px-4 md:px-6 py-4 md:py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={handleBack}
                className="h-[36px] px-4 bg-white border border-[rgba(0,0,0,0.1)] text-neutral-950 rounded-lg font-['Lato:Medium',sans-serif] text-[16px] flex items-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <div>
                <h1 className="font-['Lato:SemiBold',sans-serif] text-[20px] md:text-[24px] text-[#2160ad]">
                  Add New Employee
                </h1>
                <p className="font-['Lato:Regular',sans-serif] text-[14px] md:text-[16px] text-[#4a5565]">
                  Complete all sections to add employee
                </p>
              </div>
            </div>
            {currentStep !== 'documents' && (
              <button
                onClick={handleNext}
                className="h-[36px] px-4 bg-[#2160ad] text-white rounded-lg font-['Lato:Medium',sans-serif] text-[16px] flex items-center justify-center gap-2 hover:bg-[#1a4d8a] transition-colors"
              >
                Next Section
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
            {currentStep === 'documents' && (
              <button
                onClick={() => navigate('/hr')}
                className="h-[36px] px-4 bg-[#2160ad] text-white rounded-lg font-['Lato:Medium',sans-serif] text-[16px] flex items-center justify-center gap-2 hover:bg-[#1a4d8a] transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Employee
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 flex flex-col md:flex-row min-h-0">
          {/* Left Sidebar - Stepper */}
          <div className="w-full md:w-80 bg-gray-50 border-r border-[rgba(0,0,0,0.1)] p-6">
            <h3 className="font-['Lato:SemiBold',sans-serif] text-[16px] text-[#101828] mb-4">
              Employee Setup
            </h3>
            <div className="space-y-2">
              {/* Personal Details */}
              <button
                onClick={() => setCurrentStep('personal')}
                className={`w-full p-4 rounded-[10px] transition-all ${
                  currentStep === 'personal'
                    ? 'bg-[#2160ad] text-white shadow-lg'
                    : 'bg-white border border-[rgba(0,0,0,0.1)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep === 'personal' ? 'bg-[rgba(255,255,255,0.2)]' : 'bg-gray-100'
                  }`}>
                    <Users className={`w-5 h-5 ${currentStep === 'personal' ? 'text-white' : 'text-[#6a7282]'}`} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className={`font-['Lato:Medium',sans-serif] text-[16px] ${
                        currentStep === 'personal' ? 'text-white' : 'text-[#364153]'
                      }`}>
                        Personal Details
                      </span>
                      <ChevronRight className={`w-4 h-4 ${currentStep === 'personal' ? 'text-white' : 'text-[#99a1af]'}`} />
                    </div>
                    <span className={`font-['Lato:Regular',sans-serif] text-[14px] ${
                      currentStep === 'personal' ? 'text-white opacity-75' : 'text-[#364153] opacity-75'
                    }`}>
                      Incomplete
                    </span>
                  </div>
                </div>
              </button>

              {/* Employment Details */}
              <button
                onClick={() => setCurrentStep('employment')}
                className={`w-full p-4 rounded-[10px] transition-all ${
                  currentStep === 'employment'
                    ? 'bg-[#2160ad] text-white shadow-lg'
                    : 'bg-white border border-[rgba(0,0,0,0.1)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep === 'employment' ? 'bg-[rgba(255,255,255,0.2)]' : 'bg-gray-100'
                  }`}>
                    <FileText className={`w-5 h-5 ${currentStep === 'employment' ? 'text-white' : 'text-[#6a7282]'}`} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className={`font-['Lato:Medium',sans-serif] text-[16px] ${
                        currentStep === 'employment' ? 'text-white' : 'text-[#364153]'
                      }`}>
                        Employment Details
                      </span>
                      <ChevronRight className={`w-4 h-4 ${currentStep === 'employment' ? 'text-white' : 'text-[#99a1af]'}`} />
                    </div>
                    <span className={`font-['Lato:Regular',sans-serif] text-[14px] ${
                      currentStep === 'employment' ? 'text-white opacity-75' : 'text-[#364153] opacity-75'
                    }`}>
                      Incomplete
                    </span>
                  </div>
                </div>
              </button>

              {/* Documents */}
              <button
                onClick={() => setCurrentStep('documents')}
                className={`w-full p-4 rounded-[10px] transition-all ${
                  currentStep === 'documents'
                    ? 'bg-[#2160ad] text-white shadow-lg'
                    : 'bg-white border border-[rgba(0,0,0,0.1)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep === 'documents' ? 'bg-[rgba(255,255,255,0.2)]' : 'bg-[#00a63e]/10'
                  }`}>
                    <CheckCircle2 className={`w-5 h-5 ${currentStep === 'documents' ? 'text-white' : 'text-[#00a63e]'}`} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className={`font-['Lato:Medium',sans-serif] text-[16px] ${
                        currentStep === 'documents' ? 'text-white' : 'text-[#364153]'
                      }`}>
                        Documents
                      </span>
                      <ChevronRight className={`w-4 h-4 ${currentStep === 'documents' ? 'text-white' : 'text-[#99a1af]'}`} />
                    </div>
                    <span className={`font-['Lato:Regular',sans-serif] text-[14px] ${
                      currentStep === 'documents' ? 'text-white opacity-75' : 'text-[#364153] opacity-75'
                    }`}>
                      Complete
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Content - Forms */}
          <div className="flex-1 overflow-auto p-4 md:p-6 md:p-12">
            {currentStep === 'personal' && (
              <div className="max-w-6xl space-y-6">
                {/* Personal Details Card */}
                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden">
                  <div className="bg-[rgba(33,96,173,0.05)] px-6 py-6">
                    <h2 className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">
                      Personal Details
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2 flex items-center gap-1">
                          Staff Name
                          <span className="text-[#fb2c36]">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter full name"
                          className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                        />
                      </div>
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2 flex items-center gap-1">
                          Contact
                          <span className="text-[#fb2c36]">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="+65 9000 0000"
                          className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2 flex items-center gap-1">
                          Email
                          <span className="text-[#fb2c36]">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="email@example.com"
                          className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                        />
                      </div>
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2">
                          Marital Status
                        </label>
                        <select className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                          <option value="">Select status</option>
                          <option>Single</option>
                          <option>Married</option>
                          <option>Divorced</option>
                          <option>Widowed</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2">
                          Marital Status Date
                        </label>
                        <input
                          type="date"
                          className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address Information Card */}
                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden">
                  <div className="bg-[rgba(33,96,173,0.05)] px-6 py-6">
                    <h2 className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">
                      Address Information
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          placeholder="123456"
                          className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                        />
                      </div>
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2">
                          Block/House No
                        </label>
                        <input
                          type="text"
                          placeholder="Block 123"
                          className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                        />
                      </div>
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2">
                          Street Name
                        </label>
                        <input
                          type="text"
                          placeholder="Main Street"
                          className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Family Members Card */}
                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden">
                  <div className="bg-[rgba(33,96,173,0.05)] px-6 py-6 flex items-center justify-between">
                    <h2 className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">
                      Family Members
                    </h2>
                    <button
                      onClick={addFamilyMember}
                      className="h-[32px] px-4 bg-[#2160ad] text-white rounded-lg font-['Lato:Medium',sans-serif] text-[16px] flex items-center gap-2 hover:bg-[#1a4d8a] transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      Add
                    </button>
                  </div>
                  <div className="p-6 space-y-4">
                    {familyMembers.map((member) => (
                      <div key={member.id} className="border border-[rgba(0,0,0,0.1)] rounded-[10px] p-4 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2">
                              Name
                            </label>
                            <input
                              type="text"
                              placeholder="Family member name"
                              className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                            />
                          </div>
                          <div>
                            <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2">
                              Relationship
                            </label>
                            <select className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                              <option>Other</option>
                              <option>Spouse</option>
                              <option>Child</option>
                              <option>Parent</option>
                              <option>Sibling</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2">
                              Contact Number
                            </label>
                            <input
                              type="text"
                              placeholder="+65 9000 0000"
                              className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                            />
                          </div>
                          <div>
                            <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2">
                              Emergency Contact
                            </label>
                            <div className="flex items-center h-[40px] gap-2">
                              <input
                                type="checkbox"
                                className="w-4 h-4 rounded bg-gray-100"
                              />
                              <span className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                                Set as emergency contact
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2">
                              Date of Birth
                            </label>
                            <input
                              type="date"
                              className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                            />
                          </div>
                          <div>
                            <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 mb-2">
                              Age
                            </label>
                            <input
                              type="text"
                              placeholder="Age"
                              className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 'employment' && (
              <div className="max-w-6xl space-y-6">
                {/* Company Information */}
                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden">
                  <div className="bg-[rgba(33,96,173,0.05)] px-6 py-6">
                    <h2 className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">
                      Company Information
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[14px] text-neutral-950 mb-2">
                          Company
                        </label>
                        <select className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                          <option>Select company</option>
                          <option>IM Ambulance Services</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[14px] text-neutral-950 mb-2">
                          Department
                        </label>
                        <select className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                          <option>Select department</option>
                          <option>Operations</option>
                          <option>Ground Crew</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="font-['Lato:Medium',sans-serif] text-[14px] text-neutral-950">
                        Roles (Select one or more)
                      </label>
                      <div className="border border-[rgba(0,0,0,0.1)] rounded-lg p-4 space-y-3">
                        {['MTO', 'EMT', 'Medic', 'Operations'].map((role) => (
                          <div key={role} className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 rounded bg-[#f3f3f5]" />
                            <label className="font-['Lato:Regular',sans-serif] text-[14px] text-neutral-950">
                              {role}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[14px] text-neutral-950 mb-2 flex items-center gap-1">
                          Staff ID
                          <span className="text-[#fb2c36]">*</span>
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            defaultValue="IMA0000"
                            className="flex-1 h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                          />
                          <button className="h-[40px] px-4 bg-white border border-[rgba(0,0,0,0.1)] rounded-lg font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 hover:bg-gray-50">
                            Generate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Employment Details */}
                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden">
                  <div className="bg-[rgba(33,96,173,0.05)] px-6 py-6">
                    <h2 className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">
                      Employment Details
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[14px] text-neutral-950 mb-2">
                          Employee Status
                        </label>
                        <select className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[14px] text-neutral-950 mb-2">
                          Probation Duration
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            placeholder="0"
                            className="w-full h-[40px] pl-3 pr-20 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 font-['Lato:Regular',sans-serif] text-[16px] text-[#6a7282]">
                            months
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 rounded bg-gray-100" />
                      <label className="font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950">
                        Manager/Supervisor
                      </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[14px] text-neutral-950 mb-2">
                          Employed Date
                        </label>
                        <input
                          type="date"
                          className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                        />
                      </div>
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[14px] text-neutral-950 mb-2">
                          Confirmed Date
                        </label>
                        <input
                          type="date"
                          className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[14px] text-neutral-950 mb-2">
                          Last Date of Work
                        </label>
                        <input
                          type="date"
                          className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                        />
                      </div>
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[14px] text-neutral-950 mb-2">
                          Reason
                        </label>
                        <select className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                          <option>Select reason</option>
                          <option>Resignation</option>
                          <option>Termination</option>
                          <option>Retirement</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* OED Classifications */}
                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden">
                  <div className="bg-[rgba(33,96,173,0.05)] px-6 py-6">
                    <h2 className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">
                      OED Classifications
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[14px] text-neutral-950 mb-2">
                          Highest Qualification
                        </label>
                        <select className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                          <option>Select qualification</option>
                          <option>Diploma</option>
                          <option>Degree</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[14px] text-neutral-950 mb-2">
                          Occupation Group
                        </label>
                        <select className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                          <option>Select occupation group</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[14px] text-neutral-950 mb-2">
                          Premise Type
                        </label>
                        <select className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                          <option>Select premise type</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[14px] text-neutral-950 mb-2">
                          Payment Mode
                        </label>
                        <select className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                          <option>Select payment mode</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[14px] text-neutral-950 mb-2">
                          Job Type
                        </label>
                        <select className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                          <option>Select job type</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[14px] text-neutral-950 mb-2">
                          Type Of Employee
                        </label>
                        <select className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]">
                          <option>Select employee type</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[14px] text-neutral-950 mb-2">
                          Street Name
                        </label>
                        <input
                          type="text"
                          placeholder="Main Street"
                          className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                        />
                      </div>
                      <div>
                        <label className="font-['Lato:Medium',sans-serif] text-[14px] text-neutral-950 mb-2">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          placeholder="123456"
                          className="w-full h-[40px] px-3 bg-[#f3f3f5] border-0 rounded-lg font-['Lato:Regular',sans-serif] text-[16px] placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#2160ad]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 'documents' && (
              <div className="max-w-6xl space-y-6">
                {/* Certifications & Licenses */}
                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden">
                  <div className="bg-[rgba(33,96,173,0.05)] px-6 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#0a0a0a]" />
                      <h2 className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">
                        Certifications & Licenses
                      </h2>
                    </div>
                    <button className="h-[32px] px-4 bg-white border border-[rgba(0,0,0,0.1)] rounded-lg font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 flex items-center gap-2 hover:bg-gray-50">
                      <Plus className="w-4 h-4" />
                      Add Certificate
                    </button>
                  </div>
                  <div className="p-6 space-y-3">
                    {/* Document Item */}
                    {[
                      { name: 'Driving License', file: 'driving_license_class3.pdf', note: 'Class 3 License', uploaded: '15/01/2024', expires: '14/01/2030' },
                      { name: 'BCLS', file: 'bcls_certificate_2024.pdf', note: 'Renewed certification', uploaded: '10/03/2024', expires: '09/03/2026' },
                    ].map((doc, idx) => (
                      <div key={idx} className="bg-white border border-gray-200 rounded-[10px] p-4">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1 min-w-0">
                            <div className="w-9 h-9 rounded-[10px] bg-[rgba(33,96,173,0.1)] flex items-center justify-center flex-shrink-0">
                              <FileText className="w-5 h-5 text-[#2160ad]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-4 mb-1">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828] mb-1">
                                    {doc.name}
                                  </h4>
                                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282] mb-1">
                                    {doc.file}
                                  </p>
                                  <p className="font-['Lato:Italic',sans-serif] text-[14px] text-[#4a5565] italic">
                                    {doc.note}
                                  </p>
                                </div>
                                <div className="text-right flex-shrink-0">
                                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282] mb-1">
                                    Uploaded: {doc.uploaded}
                                  </p>
                                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">
                                    Expires: <span className="font-['Lato:Medium',sans-serif]">{doc.expires}</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                              <Upload className="w-4 h-4 text-[#6a7282]" />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                              <Edit3 className="w-4 h-4 text-[#6a7282]" />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                              <Trash2 className="w-4 h-4 text-[#e7000b]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vaccination Records */}
                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden">
                  <div className="bg-[rgba(33,96,173,0.05)] px-6 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#0a0a0a]" />
                      <h2 className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">
                        Vaccination Records
                      </h2>
                    </div>
                    <button className="h-[32px] px-4 bg-white border border-[rgba(0,0,0,0.1)] rounded-lg font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 flex items-center gap-2 hover:bg-gray-50">
                      <Plus className="w-4 h-4" />
                      Add Vaccination
                    </button>
                  </div>
                  <div className="p-6 space-y-3">
                    {[
                      { name: 'COVID-19', file: 'covid_vaccine_booster.pdf', note: 'Booster dose', uploaded: '10/01/2024', expires: '09/01/2025' },
                      { name: 'Influenza', file: 'flu_vaccine_2024.pdf', note: 'Annual vaccination', uploaded: '15/10/2024' },
                    ].map((doc, idx) => (
                      <div key={idx} className="bg-white border border-gray-200 rounded-[10px] p-4">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1 min-w-0">
                            <div className="w-9 h-9 rounded-[10px] bg-[rgba(33,96,173,0.1)] flex items-center justify-center flex-shrink-0">
                              <FileText className="w-5 h-5 text-[#2160ad]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-4 mb-1">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828] mb-1">
                                    {doc.name}
                                  </h4>
                                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282] mb-1">
                                    {doc.file}
                                  </p>
                                  <p className="font-['Lato:Italic',sans-serif] text-[14px] text-[#4a5565] italic">
                                    {doc.note}
                                  </p>
                                </div>
                                <div className="text-right flex-shrink-0">
                                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282] mb-1">
                                    Uploaded: {doc.uploaded}
                                  </p>
                                  {doc.expires && (
                                    <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">
                                      Expires: <span className="font-['Lato:Medium',sans-serif]">{doc.expires}</span>
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                              <Upload className="w-4 h-4 text-[#6a7282]" />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                              <Edit3 className="w-4 h-4 text-[#6a7282]" />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                              <Trash2 className="w-4 h-4 text-[#e7000b]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Identification Documents */}
                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden">
                  <div className="bg-[rgba(33,96,173,0.05)] px-6 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#0a0a0a]" />
                      <h2 className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">
                        Identification Documents
                      </h2>
                    </div>
                    <button className="h-[32px] px-4 bg-white border border-[rgba(0,0,0,0.1)] rounded-lg font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 flex items-center gap-2 hover:bg-gray-50">
                      <Plus className="w-4 h-4" />
                      Add ID Document
                    </button>
                  </div>
                  <div className="p-6 space-y-3">
                    {[
                      { name: 'NRIC', file: 'nric_copy.pdf', note: 'NRIC photocopy - both sides', uploaded: '15/01/2024' },
                      { name: 'Work Permit', file: 'work_permit_2024.pdf', uploaded: '15/01/2024', expires: '31/12/2026' },
                    ].map((doc, idx) => (
                      <div key={idx} className="bg-white border border-gray-200 rounded-[10px] p-4">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1 min-w-0">
                            <div className="w-9 h-9 rounded-[10px] bg-[rgba(33,96,173,0.1)] flex items-center justify-center flex-shrink-0">
                              <FileText className="w-5 h-5 text-[#2160ad]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-4 mb-1">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828] mb-1">
                                    {doc.name}
                                  </h4>
                                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282] mb-1">
                                    {doc.file}
                                  </p>
                                  {doc.note && (
                                    <p className="font-['Lato:Italic',sans-serif] text-[14px] text-[#4a5565] italic">
                                      {doc.note}
                                    </p>
                                  )}
                                </div>
                                <div className="text-right flex-shrink-0">
                                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282] mb-1">
                                    Uploaded: {doc.uploaded}
                                  </p>
                                  {doc.expires && (
                                    <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">
                                      Expires: <span className="font-['Lato:Medium',sans-serif]">{doc.expires}</span>
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                              <Upload className="w-4 h-4 text-[#6a7282]" />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                              <Edit3 className="w-4 h-4 text-[#6a7282]" />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                              <Trash2 className="w-4 h-4 text-[#e7000b]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Employment-Related Documents */}
                <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[14px] overflow-hidden">
                  <div className="bg-[rgba(33,96,173,0.05)] px-6 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#0a0a0a]" />
                      <h2 className="font-['Lato:Regular',sans-serif] text-[16px] text-neutral-950">
                        Employment-Related Documents
                      </h2>
                    </div>
                    <button className="h-[32px] px-4 bg-white border border-[rgba(0,0,0,0.1)] rounded-lg font-['Lato:Medium',sans-serif] text-[16px] text-neutral-950 flex items-center gap-2 hover:bg-gray-50">
                      <Plus className="w-4 h-4" />
                      Add Document
                    </button>
                  </div>
                  <div className="p-6 space-y-3">
                    {[
                      { name: 'Employment Contract', file: 'employment_contract_signed.pdf', note: 'Signed on 15 Jan 2024', uploaded: '15/01/2024' },
                      { name: 'NDA', file: 'nda_agreement.pdf', uploaded: '15/01/2024' },
                    ].map((doc, idx) => (
                      <div key={idx} className="bg-white border border-gray-200 rounded-[10px] p-4">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1 min-w-0">
                            <div className="w-9 h-9 rounded-[10px] bg-[rgba(33,96,173,0.1)] flex items-center justify-center flex-shrink-0">
                              <FileText className="w-5 h-5 text-[#2160ad]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-4 mb-1">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-['Lato:Medium',sans-serif] text-[16px] text-[#101828] mb-1">
                                    {doc.name}
                                  </h4>
                                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282] mb-1">
                                    {doc.file}
                                  </p>
                                  {doc.note && (
                                    <p className="font-['Lato:Italic',sans-serif] text-[14px] text-[#4a5565] italic">
                                      {doc.note}
                                    </p>
                                  )}
                                </div>
                                <div className="text-right flex-shrink-0">
                                  <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#6a7282]">
                                    Uploaded: {doc.uploaded}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                              <Upload className="w-4 h-4 text-[#6a7282]" />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                              <Edit3 className="w-4 h-4 text-[#6a7282]" />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg">
                              <Trash2 className="w-4 h-4 text-[#e7000b]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
