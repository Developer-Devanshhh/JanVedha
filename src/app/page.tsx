"use client";

import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50">
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 text-sm font-medium backdrop-blur-sm border border-white/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            AI-Powered Civic Management
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">JanVedha AI</h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto mb-8">
            Smart civic complaint management system powered by AI. Report issues, track resolutions, and hold local governance accountable.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/user-login?mode=login"
              className="px-8 py-3 bg-white text-blue-700 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Sign In
            </Link>
            <Link
              href="/user-login?mode=signup"
              className="px-8 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors border border-blue-400"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered</h3>
            <p className="text-gray-600">Instant classification, prioritization, and routing of civic complaints using machine learning.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">GPS Tracking</h3>
            <p className="text-gray-600">Pinpoint exact locations of issues with GPS integration and interactive heatmaps.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Updates</h3>
            <p className="text-gray-600">Track complaint status live and receive instant notifications on resolution progress.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 text-center border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to report an issue?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start by submitting your civic complaint. Our AI will instantly analyze, classify, and route it to the appropriate department.
          </p>
          <Link
            href="/"
            className="inline-block px-12 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Submit a Complaint →
          </Link>
        </div>
      </div>
    </div>
  );
}
