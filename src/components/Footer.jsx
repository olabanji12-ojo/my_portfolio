import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black py-6 text-center text-gray-400 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Emmanuel. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white">
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="mailto:youremail@example.com" className="hover:text-white">
              <i className="fas fa-envelope fa-lg"></i>
            </a>
          </div>
        </footer>
      );
}

export default Footer