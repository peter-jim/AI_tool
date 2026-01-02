
import React from 'react';
import { STORIES } from '../constants';

const UGCSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FEF9EF]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Customer Stories</h2>
          <p className="text-gray-500">Real moments with our magical companions</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {STORIES.map((story) => (
            <div
              key={story.id}
              className="group relative aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:-translate-y-2 transition-all"
            >
              <img
                src={story.thumbnail}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={story.tagline}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <p className="text-xs font-semibold mb-2">{story.username}</p>
                <p className="text-sm font-medium leading-snug">{story.tagline}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl lg:text-5xl font-bold max-w-2xl mx-auto leading-tight">
            Always here, <br />
            always yours — your first AI friend
          </h3>
          <p className="mt-6 text-gray-400 font-medium">24/7 companionship, brought to life with AI</p>
        </div>
      </div>
    </section>
  );
};

export default UGCSection;
