"use client"

import React, { useState } from "react"
import { Menu } from "lucide-react"
import { cn } from "../../lib/utils"
import { Link, useLocation } from "react-router-dom"

interface NavItem {
  name: string
  url: string
  icon: any
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (url: string) => {
    if (url === '#contact') {
      return false;
    }
    return location.pathname === url;
  };

  return (
    <div className="relative w-full md:w-auto">
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg py-2 border-t border-gray-200 dark:border-gray-700">
          {items.map((item) => (
            item.url.startsWith('#') ? (
              <a
                key={item.name}
                href={item.url}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-sm transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <span className="flex items-center space-x-2">
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </span>
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.url}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 text-sm transition-colors duration-200",
                  "hover:bg-gray-100 dark:hover:bg-gray-800",
                  isActive(item.url) ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
                )}
              >
                <span className="flex items-center space-x-2">
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </span>
              </Link>
            )
          ))}
        </div>
      )}

      {/* Desktop menu */}
      <nav className={cn("hidden md:flex items-center justify-center space-x-6", className)}>
        {items.map((item) => {
          const active = isActive(item.url);
          return item.url.startsWith('#') ? (
            <a
              key={item.name}
              href={item.url}
              className={cn(
                "relative px-3 py-2 transition-colors duration-200",
                "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              )}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </span>
            </a>
          ) : (
            <Link
              key={item.name}
              to={item.url}
              className={cn(
                "relative px-3 py-2 transition-colors duration-200",
                "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400",
                active && "text-blue-600 dark:text-blue-400"
              )}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </span>
              <span 
                className={cn(
                  "absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 transform origin-left transition-transform duration-200",
                  active ? "scale-x-100" : "scale-x-0"
                )}
              />
            </Link>
          );
        })}
      </nav>
    </div>
  )
}