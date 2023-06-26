import React, { useEffect, useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState('Item 1');

  useEffect(() => {
    const pathname = window.location.pathname;
    const item = getItemFromPathname(pathname);
    setSelectedItem(item);
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const getItemFromPathname = (pathname) => {
    switch (pathname) {
      case '/homepage/1':
        return 'Item 1';
      case '/post':
        return 'Item 2';
      case '/gallery':
        return 'Item 3';
      case '/todo':
        return 'Item 4';
      default:
        return 'Item 1';
    }
  };

  return (
    <div className="sidebar_container">
      <ul className="sidebar_list_container">
        <Link
          className="navlink"
          to="/homepage/1"
          onClick={() => handleItemClick('Item 1')}
        >
          <li className={selectedItem === 'Item 1' ? 'selected' : ''}>
            Profile
            {selectedItem === 'Item 1' && (
              <span className="list_arrow_icon">
                <AiOutlineRight />
              </span>
            )}
          </li>
        </Link>
        <Link
          className="navlink"
          to="/post"
          onClick={() => handleItemClick('Item 2')}
        >
          <li className={selectedItem === 'Item 2' ? 'selected' : ''}>
            Posts
            {selectedItem === 'Item 2' && (
              <span className="list_arrow_icon">
                <AiOutlineRight />
              </span>
            )}
          </li>
        </Link>
        <Link
          className="navlink"
          to="/gallery"
          onClick={() => handleItemClick('Item 3')}
        >
          <li className={selectedItem === 'Item 3' ? 'selected' : ''}>
            Gallery
            {selectedItem === 'Item 3' && (
              <span className="list_arrow_icon">
                <AiOutlineRight />
              </span>
            )}
          </li>
        </Link>
        <Link
          className="navlink lasttt"
          to="/todo"
          onClick={() => handleItemClick('Item 4')}
        >
          <li className={selectedItem === 'Item 4' ? 'selected' : ''}>
            ToDo
            {selectedItem === 'Item 4' && (
              <span className="list_arrow_icon">
                <AiOutlineRight className="arrow_icon" />
              </span>
            )}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
