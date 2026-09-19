import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsList } from '../Data/NewsAndEvent';

const EventDetail = () => {
  const { id } = useParams();
  
  // URL id ke mutabiq item fetch karein
// Pehle:
// const selectedNews = newsList.find((item) => item.id === id);

// Ab aisa karein (String conversion ke saath):
const selectedNews = newsList.find((item) => String(item.id) === String(id));
  // Page dynamic change hone par top par scroll karein
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!selectedNews) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-2xl font-bold text-slate-800">Event Not Found</h2>
        <Link to="/events" className="mt-4 text-[#0F5A37] font-semibold underline">
          &larr; Back to Campus News
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-8 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Detail Area */}
          <main className="flex-1 space-y-6">
            
            {/* Back Button */}
            <Link 
              to="/events"
              className="text-xs font-semibold text-gray-500 hover:text-[#0F5A37] transition-colors mb-2 inline-flex items-center gap-1"
            >
              &larr; Back to Campus News
            </Link>

            {/* Title & Date */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {selectedNews.title}
              </h1>
              {selectedNews.date && (
                <p className="text-xs font-semibold text-gray-400 tracking-wider uppercase mt-2">
                  {selectedNews.date}
                </p>
              )}
            </div>

            {/* Subtitle & Paragraph */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base border-t border-gray-100 pt-4">
              {selectedNews.subtitle && (
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  {selectedNews.subtitle}
                </h2>
              )}
              
              <p>{selectedNews.desc}</p>

              {/* Bullet Points */}
              {selectedNews.details && selectedNews.details.length > 0 && (
                <div className="pt-2">
                  <p className="font-semibold text-slate-800 mb-2">Sports Day events included:</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {selectedNews.details.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Gallery */}
            <div className="pt-6 border-t border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm h-60 bg-gray-100">
                  <img 
                    src={selectedNews.image} 
                    alt={selectedNews.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </div>

                {selectedNews.gallery && selectedNews.gallery.map((imgUrl, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm h-60 bg-gray-100">
                    <img 
                      src={imgUrl} 
                      alt={`${selectedNews.title} gallery ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </main>

          {/* Right Sidebar */}
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
                Recent News
              </h3>
              <div className="space-y-4">
                {newsList && newsList.map((item) => (
                  <Link 
                    key={item.id}
                    to={`/events/${item.id}`}
                    className={`flex items-start gap-3 cursor-pointer group p-1.5 rounded-lg transition-colors ${
                      id === item.id ? 'bg-emerald-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-200 shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-sm font-semibold leading-snug group-hover:text-[#0F5A37] transition-colors line-clamp-2 ${
                        id === item.id ? 'text-[#0F5A37]' : 'text-slate-800'
                      }`}>
                        {item.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default EventDetail;