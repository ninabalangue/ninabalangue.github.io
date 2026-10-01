import React, { useState } from 'react';
import { 
  Calendar, 
  FileSpreadsheet, 
  FileText, 
  Palette, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Search, 
  Filter, 
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
  Shield,
  Download,
  Maximize2,
  Sparkles,
  Globe
} from 'lucide-react';
import { CanvaWorkSample } from '../types';
import { CANVA_WORK_SAMPLES } from '../data/portfolioData';
import { CanvaLightboxModal } from './CanvaLightboxModal';
import { WorkSamplePlaceholder } from './WorkSamplePlaceholder';

export const WorkSamples: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calendar' | 'sheets' | 'minutes' | 'canva' | 'sop'>('calendar');

  // Interactive sample state for sheets
  const [sheetSearch, setSheetSearch] = useState('');
  const [sheetFilter, setSheetFilter] = useState<'All' | 'Completed' | 'Pending' | 'In Review'>('All');

  // Canva client filtering & lightbox preview state
  const [canvaClientFilter, setCanvaClientFilter] = useState<'All' | 'Clarion-Aimera' | 'Bonbon Blings' | 'DILG Region X'>('All');
  const [selectedCanvaSample, setSelectedCanvaSample] = useState<CanvaWorkSample | null>(null);

  const filteredCanvaSamples = CANVA_WORK_SAMPLES.filter((sample) => {
    if (canvaClientFilter === 'All') return true;
    return sample.client === canvaClientFilter;
  });

  const sampleSheetData = [
    { id: 'REC-1041', task: 'DILG Regional Legal Case Docketing & Archival', category: 'Legal Admin', owner: 'Niña B.', status: 'Completed', deadline: '2026-04-15', accuracy: '100%' },
    { id: 'REC-1042', task: 'Executive Calendar Time-Blocking & Zoom Buffers', category: 'Calendar', owner: 'Niña B.', status: 'Completed', deadline: 'Daily', accuracy: '99.8%' },
    { id: 'REC-1043', task: 'DOLE SPES Candidate Intake Verification Form', category: 'Data Entry', owner: 'Niña B.', status: 'Completed', deadline: '2026-06-10', accuracy: '100%' },
    { id: 'REC-1044', task: 'Sangguniang Bayan Session Resolution Formatting', category: 'Government', owner: 'Niña B.', status: 'Completed', deadline: '2025-07-22', accuracy: '100%' },
    { id: 'REC-1045', task: 'Bonbon Blings E-Commerce & Pop-Up Market Inventory', category: 'Operations', owner: 'Niña B.', status: 'Completed', deadline: 'Weekly', accuracy: '99.5%' },
    { id: 'REC-1046', task: 'KASAMA Student Council Ways & Means Financial Audit', category: 'Finance Log', owner: 'Niña B.', status: 'Completed', deadline: '2025-08-30', accuracy: '100%' },
    { id: 'REC-1047', task: 'Wan-Wan Enterprise Daily Retail Sales Audit & Payroll Ledger', category: 'Retail Audit', owner: 'Niña B.', status: 'Completed', deadline: 'Bi-Monthly', accuracy: '100%' },
    { id: 'REC-1048', task: 'Campus Bazaar & Pop-Up Market Vendor Coordination Matrix', category: 'Market Coord', owner: 'Niña B.', status: 'Completed', deadline: '2025-05-18', accuracy: '100%' },
  ];

  const filteredSheetRows = sampleSheetData.filter(row => {
    const matchesSearch = row.task.toLowerCase().includes(sheetSearch.toLowerCase()) || 
                          row.category.toLowerCase().includes(sheetSearch.toLowerCase());
    const matchesFilter = sheetFilter === 'All' || row.status === sheetFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section id="work-samples" className="py-20 bg-slate-50 text-slate-900 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Recruiter Proof of Competency
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Interactive Deliverables & VA Work Samples
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Recruiters want proof, not just promises. Click through these real interactive workflows demonstrating 
            executive calendar architecture, spreadsheet mastery, formal legal minutes, and Canva design.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('calendar')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'calendar'
                ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white font-bold shadow-md shadow-orange-500/20'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-2xs'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>1. Executive Calendar & Daily Brief</span>
          </button>

          <button
            onClick={() => setActiveTab('sheets')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'sheets'
                ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white font-bold shadow-md shadow-orange-500/20'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-2xs'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>2. Google Sheets / Excel Tracker</span>
          </button>

          <button
            onClick={() => setActiveTab('minutes')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'minutes'
                ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white font-bold shadow-md shadow-orange-500/20'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-2xs'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>3. Executive Meeting Minutes</span>
          </button>

          <button
            onClick={() => setActiveTab('canva')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'canva'
                ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white font-bold shadow-md shadow-orange-500/20'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-2xs'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>4. Canva Visual Collaterals</span>
          </button>

          <button
            onClick={() => setActiveTab('sop')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'sop'
                ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white font-bold shadow-md shadow-orange-500/20'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-2xs'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>5. Legal & Confidential Filing SOP</span>
          </button>
        </div>

        {/* Deliverable Window */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
          
          {/* Top Window Bar */}
          <div className="bg-slate-100/90 px-6 py-3 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-400"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
              <span className="ml-2 text-xs font-mono text-slate-600 font-medium">
                {activeTab === 'calendar' && 'executive-daily-brief-and-calendar.gcal'}
                {activeTab === 'sheets' && 'operations-master-tracker.gsheet'}
                {activeTab === 'minutes' && 'formal-executive-minutes-template.gdoc'}
                {activeTab === 'canva' && 'brand-assets-and-presentation.canva'}
                {activeTab === 'sop' && 'dilg-standard-operating-procedure.pdf'}
              </span>
            </div>
            <div className="text-xs text-orange-700 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Production-Grade Standard</span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* 1. EXECUTIVE CALENDAR & DAILY BRIEF */}
            {activeTab === 'calendar' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <span>Executive Daily Briefing & Proactive Schedule Management</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Designed to prevent executive burnout: 15-minute buffers between calls, protected deep-work blocks, and high-priority action digests delivered every morning by 7:30 AM.
                    </p>
                  </div>
                  <div className="text-xs bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1.5 rounded-lg shrink-0 font-semibold">
                    Google Calendar & Outlook Optimized
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Daily Brief Card */}
                  <div className="lg:col-span-4 bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-700">Morning Executive Brief</span>
                      <span className="text-[11px] text-slate-500 font-mono">07:30 AM EST</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                        <div className="font-bold text-slate-900 flex items-center justify-between">
                          <span>🔴 Top 3 Priorities for Today:</span>
                        </div>
                        <ul className="mt-2 space-y-1.5 text-slate-600 list-disc list-inside text-[11px]">
                          <li>Approve Q3 Financial Allocation (Docket #2026-44)</li>
                          <li>Lead Client Discovery Call w/ Vanguard Partners</li>
                          <li>Review DILG Compliance Audit Checklist</li>
                        </ul>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                        <div className="font-bold text-slate-900">📬 Inbox Zero Status:</div>
                        <p className="mt-1 text-slate-600 text-[11px]">
                          42 incoming emails processed. 3 require your signature/direct input (flagged in VIP folder). 39 archived, categorized, or replied to via standard templates.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800">
                        <div className="font-bold">⚡ VA Note from Niña:</div>
                        <p className="mt-1 text-[11px] text-rose-900/90">
                          "I have prepared the briefing folder with attendee LinkedIn profiles and past meeting notes for your 2:00 PM call. You have a protected 1-hr lunch block."
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Calendar Blocks */}
                  <div className="lg:col-span-8 space-y-2.5">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Master Day Schedule (Time-Blocked & Buffer-Protected)
                    </div>

                    {[
                      { time: '08:30 AM - 09:00 AM', title: 'Inbox Triage & Daily Standup Check-in', tag: 'Internal Operations', color: 'border-l-4 border-l-slate-400 bg-slate-50 text-slate-800 border-slate-200' },
                      { time: '09:00 AM - 11:00 AM', title: 'Protected Deep Work: High-Level Strategy & Policy Review', tag: 'No-Meeting Focus Block', color: 'border-l-4 border-l-amber-500 bg-amber-50/70 text-slate-900 border-amber-200' },
                      { time: '11:00 AM - 11:15 AM', title: 'Buffer & Context Switch Window (Hydration / Notes)', tag: 'Buffer', color: 'border-l-4 border-l-slate-300 bg-slate-50 text-slate-500 border-slate-200' },
                      { time: '11:15 AM - 12:00 PM', title: 'Stakeholder Sync: Regional Legal & Administrative Review', tag: 'Client Meeting', color: 'border-l-4 border-l-orange-500 bg-orange-50/70 text-slate-900 border-orange-200' },
                      { time: '12:00 PM - 01:00 PM', title: 'Protected Executive Lunch Break', tag: 'Personal', color: 'border-l-4 border-l-yellow-500 bg-yellow-50/70 text-slate-900 border-yellow-200' },
                      { time: '01:00 PM - 02:30 PM', title: 'Vendor & Contract Negotiations (Briefing Docket Attached)', tag: 'Executive Call', color: 'border-l-4 border-l-rose-500 bg-rose-50/70 text-slate-900 border-rose-200' },
                      { time: '02:30 PM - 03:00 PM', title: 'End-of-Day Delegation, Task Sign-offs & Asynchronous Wrap', tag: 'VA Handoff', color: 'border-l-4 border-l-orange-500 bg-orange-50/70 text-slate-900 border-orange-200' },
                    ].map((item, i) => (
                      <div key={i} className={`p-3 rounded-xl border flex items-center justify-between text-xs ${item.color}`}>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-slate-500 font-semibold shrink-0 w-36">{item.time}</span>
                          <span className="font-semibold">{item.title}</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white text-slate-700 font-semibold border border-slate-200 shrink-0 shadow-2xs">
                          {item.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 2. GOOGLE SHEETS / EXCEL TRACKER */}
            {activeTab === 'sheets' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Operations, Budget & Case Records Master Tracker</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Live interactive mockup demonstrating data hygiene, automated calculations, status tags, and rapid search.
                    </p>
                  </div>
                  
                  {/* Filters */}
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search records..."
                        value={sheetSearch}
                        onChange={(e) => setSheetSearch(e.target.value)}
                        className="pl-8 pr-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="text-[11px] text-slate-500 font-medium">Total Tracked Items</div>
                    <div className="text-lg font-bold text-slate-900 mt-0.5">480+ Records</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="text-[11px] text-slate-500 font-medium">Data Entry Accuracy</div>
                    <div className="text-lg font-bold text-emerald-700 mt-0.5">99.9% Audited</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="text-[11px] text-slate-500 font-medium">Average Turnaround</div>
                    <div className="text-lg font-bold text-orange-700 mt-0.5">&lt; 4 Hours</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="text-[11px] text-slate-500 font-medium">Formulas Utilized</div>
                    <div className="text-xs font-mono text-rose-700 font-bold mt-1">VLOOKUP, XLOOKUP, PIVOT</div>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                      <tr>
                        <th className="p-3">Record ID</th>
                        <th className="p-3">Task / Docket Item</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Responsible</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Accuracy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                      {filteredSheetRows.map((row) => (
                        <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="p-3 text-orange-600 font-bold">{row.id}</td>
                          <td className="p-3 text-slate-900 font-sans font-medium">{row.task}</td>
                          <td className="p-3 text-slate-600 font-sans">
                            <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px]">
                              {row.category}
                            </span>
                          </td>
                          <td className="p-3 text-slate-600 font-sans">{row.owner}</td>
                          <td className="p-3">
                            <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-sans text-[10px] font-semibold">
                              <CheckCircle2 className="w-2.5 h-2.5" />
                              {row.status}
                            </span>
                          </td>
                          <td className="p-3 text-slate-700 font-semibold">{row.accuracy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 3. EXECUTIVE MEETING MINUTES */}
            {activeTab === 'minutes' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Executive Minutes of the Meeting (MOM) Template</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      A clear, structured format honed across 2 years as Associate Secretary of the MSU-IIT Supreme Student Council and municipal legislative sessions.
                    </p>
                  </div>
                  <div className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 font-medium">
                    ATS & Board-Grade Template
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-5 text-xs text-slate-700 leading-relaxed font-sans">
                  
                  {/* Meeting Meta Header */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-white rounded-xl border border-slate-200 text-xs shadow-2xs">
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-bold">Meeting Topic</span>
                      <span className="font-semibold text-slate-900">Executive Committee Strategy & Resource Mobilization</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-bold">Date & Time</span>
                      <span className="font-semibold text-slate-900">Oct 14, 2025 • 2:00 PM – 3:30 PM (PHT)</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-bold">Secretariat Lead</span>
                      <span className="font-semibold text-orange-700">Niña Bernadeth R. Balangue</span>
                    </div>
                  </div>

                  {/* Decisions Log */}
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-4 bg-orange-500 rounded-xs"></span>
                      1. Key Decisions Made
                    </h4>
                    <ul className="space-y-1.5 pl-4 list-disc text-slate-700 text-xs">
                      <li><strong className="text-slate-900">Unanimous Approval:</strong> Finalized Q4 resource reallocation for student welfare outreach, within the approved budget cap.</li>
                      <li><strong className="text-slate-900">Workflow Standardization:</strong> All committee procurement documents will transition to the standardized Google Forms intake sheet created by Niña.</li>
                      <li><strong className="text-slate-900">Calendar Hold:</strong> Next quarterly review locked for Nov 18, 2025 at 14:00 GMT+8.</li>
                    </ul>
                  </div>

                  {/* Action Items Matrix */}
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-4 bg-rose-500 rounded-xs"></span>
                      2. Action Item Delegation & Deadline Matrix
                    </h4>
                    <div className="overflow-x-auto rounded-xl border border-slate-200">
                      <table className="w-full text-left text-xs bg-white">
                        <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                          <tr>
                            <th className="p-2.5">Action Item</th>
                            <th className="p-2.5">Assignee</th>
                            <th className="p-2.5">Deadline</th>
                            <th className="p-2.5">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-[11px]">
                          <tr>
                            <td className="p-2.5 text-slate-900 font-medium">Draft revised legal endorsement memo for DILG regional review</td>
                            <td className="p-2.5 text-orange-700 font-semibold">Niña Balangue</td>
                            <td className="p-2.5 text-slate-500">Oct 18, 2025</td>
                            <td className="p-2.5 text-emerald-700 font-semibold">Done / Dispatched</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 text-slate-900 font-medium">Consolidate supplier cost estimates into Google Sheets budget master</td>
                            <td className="p-2.5 text-orange-700 font-semibold">Niña Balangue</td>
                            <td className="p-2.5 text-slate-500">Oct 20, 2025</td>
                            <td className="p-2.5 text-emerald-700 font-semibold">Completed</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 text-slate-900 font-medium">Send calendar invites with Zoom briefing binder to council directors</td>
                            <td className="p-2.5 text-orange-700 font-semibold">Niña Balangue</td>
                            <td className="p-2.5 text-slate-500">Oct 22, 2025</td>
                            <td className="p-2.5 text-emerald-700 font-semibold">Sent (100% RSVP)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* 4. CANVA VISUAL COLLATERALS */}
            {activeTab === 'canva' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Canva Graphics, Presentation Decks & Brand Kits</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Professional marketing and executive design: polished color consistency, modern typography, social media engagement banners, and pitch presentations.
                    </p>
                  </div>
                  <div className="text-xs bg-rose-50 text-rose-700 border border-rose-200 px-3 py-1.5 rounded-lg font-semibold shrink-0 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Canva Pro & Web Portals</span>
                  </div>
                </div>

                {/* Client Category Filter Bar */}
                <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200 w-fit">
                  <button
                    onClick={() => setCanvaClientFilter('All')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      canvaClientFilter === 'All'
                        ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    All Works ({CANVA_WORK_SAMPLES.length})
                  </button>

                  <button
                    onClick={() => setCanvaClientFilter('Clarion-Aimera')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      canvaClientFilter === 'Clarion-Aimera'
                        ? 'bg-red-700 text-white shadow-xs'
                        : 'text-slate-600 hover:text-red-700'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    <span>Clarion-Aimera (5 Assets)</span>
                  </button>

                  <button
                    onClick={() => setCanvaClientFilter('Bonbon Blings')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      canvaClientFilter === 'Bonbon Blings'
                        ? 'bg-pink-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-pink-600'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-pink-300"></span>
                    <span>Bonbon Blings (3 Assets)</span>
                  </button>

                  <button
                    onClick={() => setCanvaClientFilter('DILG Region X')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      canvaClientFilter === 'DILG Region X'
                        ? 'bg-blue-700 text-white shadow-xs'
                        : 'text-slate-600 hover:text-blue-700'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5 text-blue-300" />
                    <span>DILG Regional Legal Service (Google Site)</span>
                  </button>
                </div>

                {/* Grid of Canva & Web Samples */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredCanvaSamples.map((sample) => (
                    <div
                      key={sample.id}
                      className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-orange-400 hover:shadow-md transition-all flex flex-col justify-between group shadow-2xs"
                    >
                      <div>
                        {/* Thumbnail Container / Image Placeholder */}
                        <div 
                          onClick={() => setSelectedCanvaSample(sample)}
                          className="h-52 rounded-xl border border-slate-200/80 relative overflow-hidden shadow-xs transition-all cursor-pointer group-hover:shadow-sm"
                        >
                          <WorkSamplePlaceholder sample={sample} />

                          {/* Hover action overlay for site visitors */}
                          <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 pointer-events-none z-20">
                            <span className="px-3 py-1.5 rounded-xl bg-white/95 text-slate-900 font-semibold text-xs shadow-md flex items-center gap-1.5 backdrop-blur-xs">
                              <Maximize2 className="w-3.5 h-3.5" />
                              <span>Preview Sample</span>
                            </span>
                          </div>

                          {/* External Link Indicator for Google Site */}
                          {sample.externalLink && (
                            <div className="absolute top-2.5 right-2.5 text-[10px] font-bold text-blue-700 bg-blue-50/95 border border-blue-200 px-2 py-0.5 rounded-md shadow-2xs flex items-center gap-1 backdrop-blur-xs z-10 pointer-events-none">
                              <span>Google Site</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </div>
                          )}
                        </div>

                        {/* Title & Description */}
                        <div className="mt-3.5 space-y-1">
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                              sample.client === 'Clarion-Aimera' 
                                ? 'bg-red-50 text-red-700 border border-red-200' 
                                : sample.client === 'Bonbon Blings'
                                ? 'bg-pink-50 text-pink-700 border border-pink-200'
                                : 'bg-blue-50 text-blue-700 border border-blue-200'
                            }`}>
                              {sample.client}
                            </span>
                            <span className="text-[11px] text-slate-500 font-medium">{sample.category}</span>
                          </div>

                          <h4 
                            onClick={() => setSelectedCanvaSample(sample)}
                            className="font-bold text-slate-900 text-sm hover:text-orange-600 transition-colors cursor-pointer mt-1"
                          >
                            {sample.title}
                          </h4>
                          <p className="text-[11px] font-medium text-orange-600">{sample.subtitle}</p>
                          <p className="text-[11px] text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                            {sample.description}
                          </p>
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        <button
                          onClick={() => setSelectedCanvaSample(sample)}
                          className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
                          <span>Enlarge / Details</span>
                        </button>

                        {sample.externalLink ? (
                          <a
                            href={sample.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
                          >
                            <span>Open Google Site</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : sample.canvaLink ? (
                          <a
                            href={sample.canvaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors"
                          >
                            <span>Open in Canva</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="text-[11px] text-slate-400 font-medium">Canva Pro</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. LEGAL & CONFIDENTIAL FILING SOP */}
            {activeTab === 'sop' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Confidential Records & Google Drive Folder Architecture (SOP)</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Standard operating procedure developed from 480 hours at DILG-X Regional Legal Service to prevent misplaced files and data leaks.
                    </p>
                  </div>
                  <div className="text-xs bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1.5 rounded-lg font-semibold">
                    ISO-Compliant Naming System
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="font-bold text-orange-700 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white flex items-center justify-center font-bold text-[10px]">1</span>
                      Standard File Naming Rule
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      Never use vague labels like "Resume.pdf" or "Notes_final_v2.docx".
                    </p>
                    <div className="p-2 rounded bg-white font-mono text-[10px] text-orange-800 border border-slate-200">
                      YYYY-MM-DD_[Client/Agency]_[DocType]_[Topic]_v[#]
                    </div>
                    <p className="text-[10px] text-slate-500">
                      Example: <code className="text-slate-700 font-semibold">2026-04-12_DILG10_MEMO_LegalEndorsement_v1.pdf</code>
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="font-bold text-orange-700 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white flex items-center justify-center font-bold text-[10px]">2</span>
                      3-Tier Folder Hierarchy
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      Structured Google Drive architecture preventing unauthorized access:
                    </p>
                    <div className="p-2 rounded bg-white font-mono text-[10px] text-slate-700 border border-slate-200 space-y-1">
                      <div>📁 01_Executive_Confidential (Strict Access)</div>
                      <div>📁 02_Active_Projects & Client Sprints</div>
                      <div>📁 03_Company_Templates & SOP Library</div>
                      <div>📁 04_Archived_Records_By_Year</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="font-bold text-orange-700 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white flex items-center justify-center font-bold text-[10px]">3</span>
                      Data Privacy & Security
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      Trained in state civil service confidentiality standards:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 text-[11px] space-y-1">
                      <li>Two-factor authentication (2FA) enforced on all accounts.</li>
                      <li>Client PII & legal files purged or securely archived upon task sign-off.</li>
                      <li>No external public sharing links without executive authorization.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Full Sample Preview */}
      <CanvaLightboxModal
        sample={selectedCanvaSample}
        onClose={() => setSelectedCanvaSample(null)}
      />
    </section>
  );
};
