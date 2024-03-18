'use client'
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '../ui/button';
import { FaGithub } from 'react-icons/fa';

const Social = () => {
  return (
    <div className='flex items-center w-full gap-x-2'>
          <Button
              size="lg"
              className='w-full'
              variant={'outline'}
              onClick={() => {}}
          >
              <FcGoogle size={25}/>
      </Button>
          <Button
              size="lg"
              className='w-full'
              variant={'outline'}
              onClick={() => {}}
          >
              <FaGithub size={25}/>
      </Button>
    </div>
  );
}

export default Social;