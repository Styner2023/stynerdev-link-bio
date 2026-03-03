"use client"

import { useState, useRef } from "react"
import { X, Play, Pause } from "lucide-react"

const songs = [
  {
    title: "Code & Coffee",
    description: "Lo-fi beats for developers",
    url: "https://pub-e7093cbeb65d450895246d1b3d1b7fc9.r2.dev/Stynerdev-Developer-Songs/%201.StynerDev-You-Wrote-Me-In.m4a"
  },
  {
    title: "Debug Mode",
    description: "Focus music for problem solving",
    url: "https://pub-e7093cbeb65d450895246d1b3d1b7fc9.r2.dev/Stynerdev-Developer-Songs/1.StynerDev-You-Spoke-Me-Open.m4a"
  },
  {
    title: "Deploy Day",
    description: "Celebration vibes",
    url: "https://pub-e7093cbeb65d450895246d1b3d1b7fc9.r2.dev/Stynerdev-Developer-Songs/2.StynerDev-You-Spoke-Me-Open.m4a"
  },
  {
    title: "Soulful Code",
    description: "Love & passion vibes",
    url: "https://pub-e7093cbeb65d450895246d1b3d1b7fc9.r2.dev/Stynerdev-Developer-Songs/2.StynerDev-You-Wrote-Me-In.m4a"
  }
]

export function MusicModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [playing, setPlaying] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = (url: string) => {
    if (playing === url) {
      audioRef.current?.pause()
      setPlaying(null)
    } else {
      if (audioRef.current) {
        audioRef.current.src = url
        audioRef.current.play()
      }
      setPlaying(url)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ backgroundImage: "url('https://pub-734cbe666a1846e4bfad1adc1574fe7a.r2.dev/images/1.autumn-trees-water-reflection-in-boulogne-forest-2026-01-09-13-58-50-utc.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} onClick={onClose}>
      <div className="bg-white border-4 border-black rounded-3xl p-6 max-w-md w-full shadow-[12px_12px_0px_rgba(0,0,0,1)]" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-retro text-2xl text-black">Dev Music</h2>
          <button onClick={onClose} className="text-black hover:text-[#DA3901]">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-3">
          {songs.map((song) => (
            <div key={song.url} className="bg-white border-2 border-black rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-black">{song.title}</h3>
                  <p className="text-sm text-black">{song.description}</p>
                </div>
                <button
                  onClick={() => togglePlay(song.url)}
                  className="bg-black text-white rounded-full p-3 hover:bg-[#DA3901] transition-all"
                >
                  {playing === song.url ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <audio ref={audioRef} onEnded={() => setPlaying(null)} />
      </div>
    </div>
  )
}
