import Link from 'next/link';
import { FaCode, FaEye } from 'react-icons/fa';
import projects from '@/constants';


const ProjectCard = ({ imageSrc, description, codeLink, visitLink }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageSrc} alt="Project" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{description}</div>
        <div className="flex justify-between">
          <Link href={codeLink}>
            <a className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded">
              <FaCode /> View Code
            </a>
          </Link>
          <Link href={visitLink}>
            <a className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded">
              <FaEye /> Visit Site
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;