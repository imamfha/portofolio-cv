
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! This is a demo submission.');
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors";

  return (
    <section className="space-y-10 py-20">
      <h2 className="text-6xl font-bold tracking-tighter">
        <span className="text-white">LET'S WORK</span><br />
        <span className="text-outline uppercase">Together</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Name</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              required
              className={inputClasses}
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Email</label>
            <input 
              type="email" 
              placeholder="your@email.com" 
              required
              className={inputClasses}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Budget</label>
          <select 
            required
            className={inputClasses}
            value={formData.budget}
            onChange={(e) => setFormData({...formData, budget: e.target.value})}
          >
            <option value="" className="bg-[#151312]">Select…</option>
            <option value="<3k" className="bg-[#151312]">&lt;$3k</option>
            <option value="3k-5k" className="bg-[#151312]">$3k - $5k</option>
            <option value="5k-10k" className="bg-[#151312]">$5k - $10k</option>
            <option value=">10k" className="bg-[#151312]">&gt;$10k</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Message</label>
          <textarea 
            rows={4} 
            placeholder="Tell me about your project..." 
            required
            className={inputClasses}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-orange-600 text-white font-bold py-4 rounded-xl hover:bg-orange-500 transition-colors shadow-lg shadow-orange-600/20 active:scale-[0.98]"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
