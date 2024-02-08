import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gray-800 text-gray-200 flex justify-center items-center">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-6xl lg:text-7xl font-bold text-center mb-8">Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard title="Delegate Tasks" rating={8} />
          <SkillCard title="Access & Cover Breaking News" rating={9} />
          <SkillCard title="Script Writing (Ross Inception)" rating={9} />
          <SkillCard title="Produce in Studio & On-site Shots" rating={8} />
          <SkillCard title="Leadership Skills" rating={8} />
          <SkillCard title="Rundown Creation" rating={8} />
        </div>
      </div>
    </div>
  );
};

const SkillCard: React.FC<{ title: string; rating: number }> = ({ title, rating }) => {
  const percentage = rating * 10; // Convert rating to percentage

  return (
    <div className="bg-gray-700 border-2 border-blue-200 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="flex justify-between items-center">
        <div className="text-lg">Rating:</div>
        <div className="flex items-center">
          {/* Loading bar */}
          <div className="bg-gray-500 border-2 border-blue-200 w-32 h-6 rounded-full mr-3">
            <div className="bg-blue-200 h-full rounded-full" style={{ width: `${percentage}%` }}></div>
          </div>
          {/* Rating text */}
          <span>{rating}/10</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
