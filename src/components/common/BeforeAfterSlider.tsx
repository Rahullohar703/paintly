import React, { useState, useRef, useCallback, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before Preparation',
  afterLabel = 'Finished Coating',
  aspectRatio = 'aspect-[16/10]',
  className = ''
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleInteractionEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleInteractionEnd);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleInteractionEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleInteractionEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleInteractionEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleInteractionEnd]);

  return (
    <div className={`relative select-none overflow-hidden rounded-xl border border-[#E5E3DE] bg-[#20211F] shadow-sm ${className}`}>
      <div
        ref={containerRef}
        className={`relative w-full ${aspectRatio} cursor-ew-resize overflow-hidden`}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          if (e.touches[0]) handleMove(e.touches[0].clientX);
        }}
        role="slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Before and after image comparison slider"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') {
            setSliderPosition((prev) => Math.max(prev - 5, 0));
          } else if (e.key === 'ArrowRight') {
            setSliderPosition((prev) => Math.min(prev + 5, 100));
          }
        }}
      >
        {/* AFTER IMAGE (Background / Full) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          loading="lazy"
        />

        {/* BEFORE IMAGE (Clipped overlay) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-y-0 left-0 h-full max-w-none object-cover pointer-events-none"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw'
            }}
            loading="lazy"
          />
        </div>

        {/* DIVIDER LINE & HANDLE */}
        <div
          className="absolute inset-y-0 pointer-events-none flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Vertical line */}
          <div className="h-full w-0.5 bg-[#FAF9F6] shadow-[0_0_8px_rgba(0,0,0,0.4)]" />

          {/* Draggable Circle button */}
          <div className="absolute flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF9F6] text-[#20211F] shadow-lg border border-[#E5E3DE] transition-transform duration-100 group-hover:scale-110">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 3 12 9 6" className="hidden" />
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>

        {/* BADGES / LABELS */}
        <div className="absolute top-4 left-4 pointer-events-none">
          <span className="inline-flex items-center rounded-md bg-[#20211F]/80 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-[#FAF9F6] backdrop-blur-sm border border-white/10">
            {beforeLabel}
          </span>
        </div>
        <div className="absolute top-4 right-4 pointer-events-none">
          <span className="inline-flex items-center rounded-md bg-[#D9683B] px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm shadow-sm">
            {afterLabel}
          </span>
        </div>

        {/* BOTTOM HINT */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium tracking-wide text-white/90 backdrop-blur-sm">
            <span>‹ Drag to compare ›</span>
          </span>
        </div>
      </div>
    </div>
  );
};
