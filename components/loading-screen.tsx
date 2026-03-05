'use client'

import { useState, useEffect } from 'react'

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="preloader fixed top-0 left-0 w-full h-full z-[9999999] bg-white flex items-center justify-center">
      <div className="animation-preloader z-[1000] text-center">
        <div className="spinner w-36 h-36 mx-auto mb-14 border-[3px] border-black/20 border-t-[#D9FD50] rounded-full animate-spin"></div>
        <div className="txt-loading font-bold text-5xl text-center select-none">
          <span data-text-preloader="S" className="letters-loading text-[#D9FD50] relative before:content-[attr(data-text-preloader)] before:absolute before:left-0 before:-top-[3px] before:opacity-0 before:text-[#21353E] before:animate-[letters-loading_4s_infinite] before:[transform:rotateY(-90deg)]">
            S
          </span>
          <span data-text-preloader="t" className="letters-loading text-[#D9FD50] relative before:content-[attr(data-text-preloader)] before:absolute before:left-0 before:-top-[3px] before:opacity-0 before:text-[#21353E] before:animate-[letters-loading_4s_infinite] before:[transform:rotateY(-90deg)] before:[animation-delay:0.2s]">
            t
          </span>
          <span data-text-preloader="y" className="letters-loading text-[#D9FD50] relative before:content-[attr(data-text-preloader)] before:absolute before:left-0 before:-top-[3px] before:opacity-0 before:text-[#21353E] before:animate-[letters-loading_4s_infinite] before:[transform:rotateY(-90deg)] before:[animation-delay:0.4s]">
            y
          </span>
          <span data-text-preloader="n" className="letters-loading text-[#D9FD50] relative before:content-[attr(data-text-preloader)] before:absolute before:left-0 before:-top-[3px] before:opacity-0 before:text-[#21353E] before:animate-[letters-loading_4s_infinite] before:[transform:rotateY(-90deg)] before:[animation-delay:0.6s]">
            n
          </span>
          <span data-text-preloader="e" className="letters-loading text-[#D9FD50] relative before:content-[attr(data-text-preloader)] before:absolute before:left-0 before:-top-[3px] before:opacity-0 before:text-[#21353E] before:animate-[letters-loading_4s_infinite] before:[transform:rotateY(-90deg)] before:[animation-delay:0.8s]">
            e
          </span>
          <span data-text-preloader="r" className="letters-loading text-[#D9FD50] relative before:content-[attr(data-text-preloader)] before:absolute before:left-0 before:-top-[3px] before:opacity-0 before:text-[#21353E] before:animate-[letters-loading_4s_infinite] before:[transform:rotateY(-90deg)] before:[animation-delay:1s]">
            r
          </span>
          <span data-text-preloader="D" className="letters-loading text-[#D9FD50] relative before:content-[attr(data-text-preloader)] before:absolute before:left-0 before:-top-[3px] before:opacity-0 before:text-[#21353E] before:animate-[letters-loading_4s_infinite] before:[transform:rotateY(-90deg)] before:[animation-delay:1.2s]">
            D
          </span>
          <span data-text-preloader="e" className="letters-loading text-[#D9FD50] relative before:content-[attr(data-text-preloader)] before:absolute before:left-0 before:-top-[3px] before:opacity-0 before:text-[#21353E] before:animate-[letters-loading_4s_infinite] before:[transform:rotateY(-90deg)] before:[animation-delay:1.4s]">
            e
          </span>
          <span data-text-preloader="v" className="letters-loading text-[#D9FD50] relative before:content-[attr(data-text-preloader)] before:absolute before:left-0 before:-top-[3px] before:opacity-0 before:text-[#21353E] before:animate-[letters-loading_4s_infinite] before:[transform:rotateY(-90deg)] before:[animation-delay:1.6s]">
            v
          </span>
        </div>
        <p className="text-center text-[15px] font-semibold uppercase tracking-[8px] text-black mt-4">
          Loading
        </p>
      </div>
      
      <style jsx>{`
        @keyframes letters-loading {
          0%, 75%, 100% {
            opacity: 0;
            transform: rotateY(-90deg);
          }
          25%, 50% {
            opacity: 1;
            transform: rotateY(0deg);
          }
        }
      `}</style>
    </div>
  )
}