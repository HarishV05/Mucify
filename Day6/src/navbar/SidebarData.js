import React from 'react';

import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as IoIcon from 'react-icons/io5';
import * as BiIcons from 'react-icons/bi'

export const SidebarData = [
  {
    title: 'Signin',
    path: '/Signin',
    icon: <IoIcon.IoPersonCircleSharp />,
    cName: 'nav-text'
  },
  {
    title: 'Home',
    path: '/Home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Playlist Library',
    path: '/products',
    icon: <BiIcons.BiLibrary />,
    cName: 'nav-text'
  },
  {
    title: 'Blend',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },

];