"use client";

import React from "react";
import { ShieldCheck, UserCheck, RefreshCw, CheckCircle2 } from "lucide-react";

export function RiskReversal() {
  const assurances = [
    {
      icon: <UserCheck className="w-8 h-8 text-neutral-800" />,
      title: "Doctor-Approved or 100% Refunded",
      description: "You're not blindly buying a product. A certified Sri Lankan physician reviews your medical assessment. If you are not a suitable candidate for the treatment, your order is canceled and refunded in full immediately."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-neutral-800" />,
      title: "Free Formula Adjustments",
      description: "Every scalp reacts differently. If you experience dry skin or need a custom adjustments to your minoxidil/finasteride ratio, our partner doctors will consult with you and adjust your formulation for free."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-neutral-800" />,
      title: "No Lock-ins. Pause with 1 Click.",
      description: "Our subscription is built on your control. You can pause, delay, skip, or cancel your shipments at any time from your account dashboard. No phone calls, no awkward questions, no fine print."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#FDFBF7] border-t border-[#F1EBE3]">
      <div className="container mx-auto px-4">
        
        {/* Wrapper */}
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block px-3 py-1 bg-neutral-100 rounded-full text-xs font-semibold text-neutral-800 mb-4 uppercase tracking-wider">
              Radical Reassurance
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-sans text-black mb-6 tracking-tight leading-tight">
              Symmetric commitment. We carry the risk.
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              If we want you to make a commitment to your hair, we must make a symmetric commitment to your safety and control. Here is how we protect you:
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {assurances.map((item, idx) => (
              <div key={idx} className="bg-white border border-neutral-100/80 rounded-3xl p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-neutral-200">
                <div className="w-16 h-16 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-sans font-bold text-lg text-black mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Guarantee Banner */}
          <div className="mt-16 bg-neutral-900 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-8 shadow-xl">
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-xl mb-2 text-white">
                Our Patient Security Pledge
              </h4>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">
                We compounding treatments under strict ISO:GMP certified laboratory protocols. Your safety, dosage integrity, and data privacy are protected by Sri Lankan medical regulations.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
