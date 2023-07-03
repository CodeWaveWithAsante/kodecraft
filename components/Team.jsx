import { Title } from ".";
import { teamMembers } from "./data";
import Image from "next/image";

const Team = () => {
  return (
    <div className='container px-5 py-24 mx-auto '>
      <Title
        title='Our TEAM'
        subTitle="Whatever cardigan tote bag tumblr hexagon brooklyn
          asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them"
        titleStyles='text-gray-800'
        subTitleStyles='text-gray-600'
      />

      <div className='flex flex-wrap'>
        {teamMembers.map(({ id, name, title, email, image }) => (
          <div className='px-2 py-4 lg:w-1/3 md:w-1/2 w-full h-44 '>
            <div className='h-full flex items-center border border-gray-300 p-4 rounded-lg shadow-sm '>
              <div className='w-16 h-16 rounded-full mr-4 '>
                <Image
                  src={image}
                  width={48}
                  height={48}
                  alt={name}
                  className='w-full h-full object-cover flex-shrink-0 rounded-full'
                />
              </div>

              <div className='flex flex-grow flex-col gap-1 '>
                <h2 className='text-gray-800 text-lg font-semibold '>{name}</h2>
                <p className='text-gray-700'>{title}</p>
                <p className='text-blue-700 text-sm'>{email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
