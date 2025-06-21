"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-primary py-12" style={{ borderTopWidth: '0.1px' }}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-xl font-bold font-montserrat text-primary">chamber.fm</h2>
            <p className="text-primary/70 mt-1 text-sm">AI-Powered Voice Inbox</p>
          </div>
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0 hidden md:block">
            {/* Center spacer for balance */}
          </div>
          <div className="flex flex-col md:items-end space-y-3 md:w-1/3">
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-primary-light font-medium text-sm">Privacy</a>
              <a href="#" className="text-primary hover:text-primary-light font-medium text-sm">Terms</a>
              <a href="#" className="text-primary hover:text-primary-light font-medium text-sm">Contact</a>
            </div>
            <p className="text-primary/70 text-xs md:text-right">© {new Date().getFullYear()} Chamber.fm. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
