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
  Download
} from 'lucide-react';

export const WorkSamples: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calendar' | 'sheets' | 'minutes' | 'canva' | 'sop'>('calendar');

  // Interactive sample state for sheets
  const [sheetSearch, setSheetSearch] = useState('');
  const [sheetFilter, setSheetFilter] = useState<'All' | 'Completed' | 'Pending' | 'In Review'>('All');

  const sampleSheetData = [
    { id: 'REC-1041', task: 'DILG Regional Legal Case Docketing & Archival', category: 'Legal Admin', owner: 'Niña B.', status: 'Completed', deadline: '2026-04-15', accuracy: '100%' },
    { id: 'REC-1042', task: 'Executive Calendar Time-Blocking & Zoom Buffers', category: 'Calendar', owner: 'Niña B.', status: 'Completed', deadline: 'Daily', accuracy: '99.8%' },
    { id: 'REC-1043', task: 'DOLE SPES Candidate Intake Verification Form', category: 'Data Entry', owner: 'Niña B.', status: 'Completed', deadline: '2026-06-10', accuracy: '100%' },
    { id: 'REC-1044', task: 'Sangguniang Bayan Session Resolution Formatting', category: 'Government', owner: 'Niña B.', status: 'Completed', deadline: '2025-07-22', accuracy: '100%' },
    { id: 'REC-1045', task: 'Bonbon Blings E-Commerce Inventory Reconciliation', category: 'Operations', owner: 'Niña B.', status: 'Completed', deadline: 'Weekly', accuracy: '99.5%' },
    { id: 'REC-1046', task: 'KASAMA Student Council Ways & Means Financial Audit', category: 'Finance Log', owner: 'Niña B.', status: 'Completed', deadline: '2025-08-30', accuracy: '100%' },
  ];

  const filteredSheetRows = sampleSheetData.filter(row => {
    const matchesSearch = row.task.toLowerCase().includes(sheetSearch.toLowerCase()) || 
                          row.category.toLowerCase().includes(sheetSearch.toLowerCase());
    const matchesFilter = sheetFilter === 'All' || row.status === sheetFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section id="work-samples" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Recruiter Proof of Competency
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interactive Deliverables & VA Work Samples
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
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
                ? 'bg-teal-400 text-slate-950 shadow-lg shadow-teal-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>1. Executive Calendar & Daily Brief</span>
          </button>

          <button
            onClick={() => setActiveTab('sheets')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'sheets'
                ? 'bg-teal-400 text-slate-950 shadow-lg shadow-teal-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>2. Google Sheets / Excel Tracker</span>
          </button>

          <button
            onClick={() => setActiveTab('minutes')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'minutes'
                ? 'bg-teal-400 text-slate-950 shadow-lg shadow-teal-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>3. Executive Meeting Minutes</span>
          </button>

          <button
            onClick={() => setActiveTab('canva')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'canva'
                ? 'bg-teal-400 text-slate-950 shadow-lg shadow-teal-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>4. Canva Visual Collaterals</span>
          </button>

          <button
            onClick={() => setActiveTab('sop')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'sop'
                ? 'bg-teal-400 text-slate-950 shadow-lg shadow-teal-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>5. Legal & Confidential Filing SOP</span>
          </button>
        </div>

        {/* Deliverable Window */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Top Window Bar */}
          <div className="bg-slate-900/90 px-6 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="ml-2 text-xs font-mono text-slate-400">
                {activeTab === 'calendar' && 'executive-daily-brief-and-calendar.gcal'}
                {activeTab === 'sheets' && 'operations-master-tracker.gsheet'}
                {activeTab === 'minutes' && 'formal-executive-minutes-template.gdoc'}
                {activeTab === 'canva' && 'brand-assets-and-presentation.canva'}
                {activeTab === 'sop' && 'dilg-standard-operating-procedure.pdf'}
              </span>
            </div>
            <div className="text-xs text-teal-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Production-Grade Standard</span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* 1. EXECUTIVE CALENDAR & DAILY BRIEF */}
            {activeTab === 'calendar' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span>Executive Daily Briefing & Proactive Schedule Management</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Designed to prevent executive burnout: 15-minute buffers between calls, protected deep-work blocks, and high-priority action digests delivered every morning by 7:30 AM.
                    </p>
                  </div>
                  <div className="text-xs bg-teal-950 text-teal-300 border border-teal-500/30 px-3 py-1.5 rounded-lg shrink-0 font-medium">
                    Google Calendar & Outlook Optimized
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Daily Brief Card */}
                  <div className="lg:col-span-4 bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Morning Executive Brief</span>
                      <span className="text-[11px] text-slate-400 font-mono">07:30 AM EST</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                        <div className="font-bold text-white flex items-center justify-between">
                          <span>🔴 Top 3 Priorities for Today:</span>
                        </div>
                        <ul className="mt-2 space-y-1.5 text-slate-300 list-disc list-inside text-[11px]">
                          <li>Approve Q3 Financial Allocation (Docket #2026-44)</li>
                          <li>Lead Client Discovery Call w/ Vanguard Partners</li>
                          <li>Review DILG Compliance Audit Checklist</li>
                        </ul>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                        <div className="font-bold text-white">📬 Inbox Zero Status:</div>
                        <p className="mt-1 text-slate-300 text-[11px]">
                          42 incoming emails processed. 3 require your signature/direct input (flagged in VIP folder). 39 archived, categorized, or replied to via standard templates.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
                        <div className="font-bold">⚡ VA Note from Niña:</div>
                        <p className="mt-1 text-[11px] text-emerald-200/90">
                          "I have prepared the briefing folder with attendee LinkedIn profiles and past meeting notes for your 2:00 PM call. You have a protected 1-hr lunch block."
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Calendar Blocks */}
                  <div className="lg:col-span-8 space-y-2.5">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Master Day Schedule (Time-Blocked & Buffer-Protected)
                    </div>

                    {[
                      { time: '08:30 AM - 09:00 AM', title: 'Inbox Triage & Daily Standup Check-in', tag: 'Internal Operations', color: 'border-l-4 border-l-slate-400 bg-slate-900/60' },
                      { time: '09:00 AM - 11:00 AM', title: 'Protected Deep Work: High-Level Strategy & Policy Review', tag: 'No-Meeting Focus Block', color: 'border-l-4 border-l-teal-400 bg-teal-950/20' },
                      { time: '11:00 AM - 11:15 AM', title: 'Buffer & Context Switch Window (Hydration / Notes)', tag: 'Buffer', color: 'border-l-4 border-l-slate-600 bg-slate-950/40 text-slate-400' },
                      { time: '11:15 AM - 12:00 PM', title: 'Stakeholder Sync: Regional Legal & Administrative Review', tag: 'Client Meeting', color: 'border-l-4 border-l-blue-400 bg-blue-950/20' },
                      { time: '12:00 PM - 01:00 PM', title: 'Protected Executive Lunch Break', tag: 'Personal', color: 'border-l-4 border-l-amber-400 bg-amber-950/20' },
                      { time: '01:00 PM - 02:30 PM', title: 'Vendor & Contract Negotiations (Briefing Docket Attached)', tag: 'Executive Call', color: 'border-l-4 border-l-purple-400 bg-purple-950/20' },
                      { time: '02:30 PM - 03:00 PM', title: 'End-of-Day Delegation, Task Sign-offs & Asynchronous Wrap', tag: 'VA Handoff', color: 'border-l-4 border-l-emerald-400 bg-emerald-950/20' },
                    ].map((item, i) => (
                      <div key={i} className={`p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs ${item.color}`}>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-slate-400 font-medium shrink-0 w-36">{item.time}</span>
                          <span className="font-semibold text-white">{item.title}</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-medium border border-slate-700 shrink-0">
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
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-white">Operations, Budget & Case Records Master Tracker</h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
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
                        className="pl-8 pr-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400"
                      />
                    </div>
                  </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800">
                    <div className="text-[11px] text-slate-400">Total Tracked Items</div>
                    <div className="text-lg font-bold text-white mt-0.5">480+ Records</div>
                  </div>
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800">
                    <div className="text-[11px] text-slate-400">Data Entry Accuracy</div>
                    <div className="text-lg font-bold text-emerald-400 mt-0.5">99.9% Audited</div>
                  </div>
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800">
                    <div className="text-[11px] text-slate-400">Average Turnaround</div>
                    <div className="text-lg font-bold text-teal-300 mt-0.5">&lt; 4 Hours</div>
                  </div>
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800">
                    <div className="text-[11px] text-slate-400">Formulas Utilized</div>
                    <div className="text-xs font-mono text-purple-300 mt-1">VLOOKUP, XLOOKUP, PIVOT</div>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-900 text-slate-400 font-semibold border-b border-slate-800">
                      <tr>
                        <th className="p-3">Record ID</th>
                        <th className="p-3">Task / Docket Item</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Responsible</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Accuracy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                      {filteredSheetRows.map((row) => (
                        <tr key={row.id} className="hover:bg-slate-900/50 transition-colors">
                          <td className="p-3 text-teal-400 font-bold">{row.id}</td>
                          <td className="p-3 text-white font-sans font-medium">{row.task}</td>
                          <td className="p-3 text-slate-300 font-sans">
                            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px]">
                              {row.category}
                            </span>
                          </td>
                          <td className="p-3 text-slate-300 font-sans">{row.owner}</td>
                          <td className="p-3">
                            <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded font-sans text-[10px] font-semibold">
                              <CheckCircle2 className="w-2.5 h-2.5" />
                              {row.status}
                            </span>
                          </td>
                          <td className="p-3 text-slate-300">{row.accuracy}</td>
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
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-white">Executive Minutes of the Meeting (MOM) Template</h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      A clear, structured format honed across 2 years as Associate Secretary of the MSU-IIT Supreme Student Council and municipal legislative sessions.
                    </p>
                  </div>
                  <div className="text-xs bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700">
                    ATS & Board-Grade Template
                  </div>
                </div>

                <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-5 text-xs text-slate-300 leading-relaxed font-sans">
                  
                  {/* Meeting Meta Header */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Meeting Topic</span>
                      <span className="font-semibold text-white">Executive Committee Strategy & Resource Mobilization</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Date & Time</span>
                      <span className="font-semibold text-white">Oct 14, 2025 • 2:00 PM – 3:30 PM (PHT)</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Secretariat Lead</span>
                      <span className="font-semibold text-teal-400">Niña Bernadeth R. Balangue</span>
                    </div>
                  </div>

                  {/* Decisions Log */}
                  <div>
                    <h4 className="font-bold text-white text-sm flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-4 bg-teal-400 rounded-sm"></span>
                      1. Key Decisions Made
                    </h4>
                    <ul className="space-y-1.5 pl-4 list-disc text-slate-300 text-xs">
                      <li><strong>Unanimous Approval:</strong> Finalized Q4 resource reallocation for student welfare outreach, within the approved budget cap.</li>
                      <li><strong>Workflow Standardization:</strong> All committee procurement documents will transition to the standardized Google Forms intake sheet created by Niña.</li>
                      <li><strong>Calendar Hold:</strong> Next quarterly review locked for Nov 18, 2025 at 14:00 GMT+8.</li>
                    </ul>
                  </div>

                  {/* Action Items Matrix */}
                  <div>
                    <h4 className="font-bold text-white text-sm flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-4 bg-emerald-400 rounded-sm"></span>
                      2. Action Item Delegation & Deadline Matrix
                    </h4>
                    <div className="overflow-x-auto rounded-xl border border-slate-800">
                      <table className="w-full text-left text-xs bg-slate-950">
                        <thead className="bg-slate-900/80 text-slate-400 font-semibold border-b border-slate-800">
                          <tr>
                            <th className="p-2.5">Action Item</th>
                            <th className="p-2.5">Assignee</th>
                            <th className="p-2.5">Deadline</th>
                            <th className="p-2.5">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 text-[11px]">
                          <tr>
                            <td className="p-2.5 text-white">Draft revised legal endorsement memo for DILG regional review</td>
                            <td className="p-2.5 text-teal-300">Niña Balangue</td>
                            <td className="p-2.5 text-slate-400">Oct 18, 2025</td>
                            <td className="p-2.5 text-emerald-400 font-semibold">Done / Dispatched</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 text-white">Consolidate supplier cost estimates into Google Sheets budget master</td>
                            <td className="p-2.5 text-teal-300">Niña Balangue</td>
                            <td className="p-2.5 text-slate-400">Oct 20, 2025</td>
                            <td className="p-2.5 text-emerald-400 font-semibold">Completed</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 text-white">Send calendar invites with Zoom briefing binder to council directors</td>
                            <td className="p-2.5 text-teal-300">Niña Balangue</td>
                            <td className="p-2.5 text-slate-400">Oct 22, 2025</td>
                            <td className="p-2.5 text-emerald-400 font-semibold">Sent (100% RSVP)</td>
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
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-white">Canva Graphics, Presentation Decks & Brand Kits</h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Professional marketing and executive design: polished color consistency, modern typography, social media engagement banners, and pitch presentations.
                    </p>
                  </div>
                  <div className="text-xs bg-purple-950 text-purple-300 border border-purple-500/30 px-3 py-1.5 rounded-lg">
                    Canva Pro Certified Workflow
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Sample 1: Bonbon Blings Social */}
                  <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 group hover:border-teal-500/40 transition-colors">
                    <div className="h-40 rounded-xl bg-gradient-to-tr from-pink-900/60 via-purple-900/40 to-slate-900 border border-slate-700/60 flex flex-col justify-between p-4 relative overflow-hidden">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-pink-300">E-Commerce Brand Asset</div>
                      <div className="space-y-1">
                        <div className="text-sm font-extrabold text-white">Bonbon Blings Collection</div>
                        <div className="text-[11px] text-pink-200/80">Summer Showcase • 20% Off Launch</div>
                      </div>
                      <div className="text-[10px] text-slate-300 flex items-center justify-between pt-2 border-t border-white/10">
                        <span>Canva Social Post</span>
                        <span className="text-teal-300 font-semibold">1080x1080px</span>
                      </div>
                    </div>
                    <h4 className="font-bold text-white text-xs mt-3">Instagram & Facebook Carousel</h4>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Full marketing asset suite including product features, price tags, and highlight stories that drove retail sales.
                    </p>
                  </div>

                  {/* Sample 2: Executive Pitch Deck */}
                  <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 group hover:border-teal-500/40 transition-colors">
                    <div className="h-40 rounded-xl bg-gradient-to-tr from-teal-950 via-slate-900 to-slate-950 border border-slate-700/60 flex flex-col justify-between p-4 relative overflow-hidden">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-teal-400">Presentation Deck</div>
                      <div className="space-y-1">
                        <div className="text-sm font-extrabold text-white">Ways & Means Annual Report</div>
                        <div className="text-[11px] text-teal-200/80">KASAMA Student Council • 16:9 HD</div>
                      </div>
                      <div className="text-[10px] text-slate-300 flex items-center justify-between pt-2 border-t border-white/10">
                        <span>Executive Slides</span>
                        <span className="text-teal-300 font-semibold">24 Slides Deck</span>
                      </div>
                    </div>
                    <h4 className="font-bold text-white text-xs mt-3">Executive Slide Deck Design</h4>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Clean data visualization, high-readability charts, and branded slide layouts for leadership assemblies.
                    </p>
                  </div>

                  {/* Sample 3: Municipal Announcement */}
                  <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 group hover:border-teal-500/40 transition-colors">
                    <div className="h-40 rounded-xl bg-gradient-to-tr from-blue-950 via-slate-900 to-slate-950 border border-slate-700/60 flex flex-col justify-between p-4 relative overflow-hidden">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-blue-400">Public Information</div>
                      <div className="space-y-1">
                        <div className="text-sm font-extrabold text-white">DOLE SPES Recruitment Notice</div>
                        <div className="text-[11px] text-blue-200/80">PESO Office Medina • Public Advisory</div>
                      </div>
                      <div className="text-[10px] text-slate-300 flex items-center justify-between pt-2 border-t border-white/10">
                        <span>Digital Flyer & Print</span>
                        <span className="text-teal-300 font-semibold">A4 & Mobile</span>
                      </div>
                    </div>
                    <h4 className="font-bold text-white text-xs mt-3">Government Public Notices & Infographics</h4>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Clear step-by-step citizen guides, eligibility requirements, and deadline callouts formatted for high clarity.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 5. LEGAL & CONFIDENTIAL FILING SOP */}
            {activeTab === 'sop' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-white">Confidential Records & Google Drive Folder Architecture (SOP)</h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Standard operating procedure developed from 480 hours at DILG-X Regional Legal Service to prevent misplaced files and data leaks.
                    </p>
                  </div>
                  <div className="text-xs bg-emerald-950 text-emerald-300 border border-emerald-500/30 px-3 py-1.5 rounded-lg">
                    ISO-Compliant Naming System
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                    <div className="font-bold text-teal-400 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-teal-950 border border-teal-500/40 text-teal-300 flex items-center justify-center font-bold text-[10px]">1</span>
                      Standard File Naming Rule
                    </div>
                    <p className="text-slate-300 text-[11px]">
                      Never use vague labels like "Resume.pdf" or "Notes_final_v2.docx".
                    </p>
                    <div className="p-2 rounded bg-slate-950 font-mono text-[10px] text-emerald-300 border border-slate-800">
                      YYYY-MM-DD_[Client/Agency]_[DocType]_[Topic]_v[#]
                    </div>
                    <p className="text-[10px] text-slate-400">
                      Example: <code className="text-slate-300">2026-04-12_DILG10_MEMO_LegalEndorsement_v1.pdf</code>
                    </p>
                  </div>

                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                    <div className="font-bold text-teal-400 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-teal-950 border border-teal-500/40 text-teal-300 flex items-center justify-center font-bold text-[10px]">2</span>
                      3-Tier Folder Hierarchy
                    </div>
                    <p className="text-slate-300 text-[11px]">
                      Structured Google Drive architecture preventing unauthorized access:
                    </p>
                    <div className="p-2 rounded bg-slate-950 font-mono text-[10px] text-slate-300 border border-slate-800 space-y-1">
                      <div>📁 01_Executive_Confidential (Strict Access)</div>
                      <div>📁 02_Active_Projects & Client Sprints</div>
                      <div>📁 03_Company_Templates & SOP Library</div>
                      <div>📁 04_Archived_Records_By_Year</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                    <div className="font-bold text-teal-400 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-teal-950 border border-teal-500/40 text-teal-300 flex items-center justify-center font-bold text-[10px]">3</span>
                      Data Privacy & Security
                    </div>
                    <p className="text-slate-300 text-[11px]">
                      Trained in state civil service confidentiality standards:
                    </p>
                    <ul className="list-disc list-inside text-slate-400 text-[11px] space-y-1">
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
    </section>
  );
};
