'use client';
import Image from 'next/image';
import { useState } from 'react';

const ProfileProperties = ({ properties: initialProperties }) => {
  const [properties, setProperties] = useState(initialProperties);
  return properties.map((property) => (
    <div key={property._id} class='mb-10'>
      <a href='/property.html'>
        <Image
          class='h-32 w-full rounded-md object-cover'
          src={property.images[0]}
          alt='Property 1'
          width={1000}
          height={200}
        />
      </a>
      <div class='mt-2'>
        <p class='text-lg font-semibold'>{property.name}</p>
        <p class='text-gray-600'>
          Address: {property.location.street} {property.location.city}{' '}
          {property.location.state}
        </p>
      </div>
      <div class='mt-2'>
        <a
          href='/add-property.html'
          class='bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600'
        >
          Edit
        </a>
        <button
          class='bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600'
          type='button'
        >
          Delete
        </button>
      </div>
    </div>
  ));
};

export default ProfileProperties;
