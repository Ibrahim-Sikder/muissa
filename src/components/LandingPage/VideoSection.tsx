'use client'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import { Play } from 'lucide-react'
import dynamic from 'next/dynamic';
import { useState } from 'react'

export default function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [showThumbnail, setShowThumbnail] = useState(true)

    const handlePlay = () => {
        setIsPlaying(true)
        setShowThumbnail(false)
    }

    return (
        <div className="w-full sectionMargin   md:min-h-[400px]  bg-[#1591A3] flex items-center justify-center py-8 md:py-16 px-4">
            <div className="w-full max-w-3xl mx-auto">
                <div className="relative aspect-video w-full bg-[#003166] rounded-lg overflow-hidden shadow-xl">
                    {showThumbnail ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <button
                                onClick={handlePlay}
                                className="group relative flex items-center justify-center w-20 h-20 rounded-full bg-red-600 hover:bg-red-700 transition-colors"
                                aria-label="Play video"
                            >

                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 group-hover:bg-red-700 transition-transform group-hover:scale-110">
                                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                                </div>

                                <div className="absolute inset-0 rounded-full bg-red-600/30 animate-ping" />
                            </button>
                        </div>
                    ) : null}
                    <ReactPlayer
                        url="https://youtube.com/shorts/rCAjZo2BhHM?si=587wc7j1ZDHT_KN6"
                        width="100%"
                        height="100%"
                        playing={isPlaying}
                        controls={!showThumbnail}
                        light={showThumbnail}
                        onPlay={() => setShowThumbnail(false)}
                        config={{
                            youtube: {
                                playerVars: {
                                    modestbranding: 1,
                                    rel: 0
                                }
                            }
                        }}
                    />
                </div>
            </div>

        </div>
    )
}

