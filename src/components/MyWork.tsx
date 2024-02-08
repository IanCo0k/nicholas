import resume from '../assets/resume.pdf';
import script1 from '../assets/script1.pdf';
import script2 from '../assets/script2.pdf';
const MyWork: React.FC = () => {
  return (
    <div className="bg-gray-800 text-gray-200 flex justify-center items-center">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8">My Work</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <PdfCard title="Resume" url={resume} />
          <PdfCard title="Script Write #1" url={script1} />
          <PdfCard title="Script Write #2" url={script2} />
          {/* Add more PdfCards here if needed */}
        </div>
      </div>
    </div>
  );
};

const PdfCard: React.FC<{ title: string; url: string }> = ({ title, url }) => {
  return (
    <div className="bg-gray-700 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="flex justify-center items-center">
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default MyWork;
