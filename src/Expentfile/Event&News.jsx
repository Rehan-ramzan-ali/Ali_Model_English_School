import React from 'react';
import { Link } from 'react-router-dom';
import { newsList } from '../Data/NewsAndEvent';

const EventAndNews = () => {
  return (
    <div className="bg-white min-h-screen py-8 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-80 shrink-0 space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Categories
              </h3>
              <Link 
                to="/events" 
                className="text-gray-700 hover:text-[#0F5A37] font-medium text-sm transition-colors block text-left"
              >
                Campus News
              </Link>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Recent Posts
              </h3>
              <div className="space-y-4">
                {newsList && newsList.map((item) => (
                  <Link 
                    key={item.id}
                    to={`/events/${item.id}`}
                    className="flex items-start gap-3 cursor-pointer group p-1.5 rounded-lg transition-colors hover:bg-gray-50"
                  >
                    <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-200 shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold leading-snug text-slate-800 group-hover:text-[#0F5A37] transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Grid View */}
          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {newsList && newsList.map((item) => (
                <Link 
                  key={item.id}
                  to={`/events/${item.id}`}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="h-48 overflow-hidden bg-gray-100">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-slate-900 text-lg group-hover:text-[#0F5A37] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="px-5 pb-5 pt-0">
                    <span className="inline-flex items-center text-xs font-semibold text-[#0F5A37] group-hover:translate-x-1 transition-transform">
                      Read More &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default EventAndNews;