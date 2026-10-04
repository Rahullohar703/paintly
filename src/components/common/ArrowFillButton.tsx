// Built using Hyperiux Vault: https://vault.hyperiux.com

import React, {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type PointerEvent,
} from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DEFAULT_HREF = '#';
const COMPACT_LAYOUT_BREAKPOINT = 1280;
const ANIMATION_DURATION_MS = 450;

export interface ArrowFillButtonOwnProps {
  btnText?: string;
  label?: string; // alias for btnText
  text?: string;  // convenient alias
  children?: React.ReactNode;
  to?: string;    // React Router Link target
  href?: string;
  className?: string;
  size?: 'sm' | 'default' | 'lg';
  variant?: 'default' | 'primary' | 'secondary' | 'paintly';
  bgColor?: string;
  baseBg?: string; // alias for bgColor
  textColor?: string;
  fillBgColor?: string;
  fillBg?: string; // alias for fillBgColor
  fillTextColor?: string;
  hoverFillBgColor?: string;
  hoverFillTextColor?: string;
  arrowColor?: string;
  hoverArrowColor?: string;
  badgeBg?: string;
  badgeTextColor?: string;
  icon?: any;
  as?: 'a' | 'button';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  animationDuration?: number;
  fillOnHover?: boolean;
}

export type ArrowFillButtonProps = ArrowFillButtonOwnProps &
  Omit<ComponentPropsWithoutRef<'a'>, keyof ArrowFillButtonOwnProps>;

export const ArrowFillButton = React.forwardRef<
  HTMLAnchorElement,
  ArrowFillButtonProps
>(function ArrowFillButton(
  {
    btnText,
    label,
    text,
    children,
    to,
    href = DEFAULT_HREF,
    className = '',
    size = 'default',
    variant = 'paintly',

    bgColor,
    baseBg,
    textColor,
    fillBgColor,
    fillBg,
    fillTextColor,
    hoverFillBgColor,
    hoverFillTextColor,
    arrowColor,
    hoverArrowColor,
    badgeBg: _badgeBg,
    badgeTextColor: _badgeTextColor,
    icon: CustomIcon,
    as: asProp,
    type,
    disabled = false,

    ...props
  },
  ref
) {
  const displayText =
    btnText || label || text || (typeof children === 'string' ? children : 'Hover Me');
  const [isCompactLayout, setIsCompactLayout] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(`(max-width: ${COMPACT_LAYOUT_BREAKPOINT - 1}px)`).matches;
    }
    return false;
  });
  const [isPressed, setIsPressed] = useState(false);
  const releaseTimeoutRef = useRef<number | null>(null);

  const sizeConfig =
    {
      sm: {
        height: 'h-9 min-h-[36px]',
        padding: 'pl-3.5 pr-9 sm:pr-10',
        fontSize: 'text-xs',
        iconCircle: '1.65rem',
        iconRight: '0.25rem',
        iconSize: 'size-3.5',
      },
      default: {
        height: 'h-11 min-h-[44px]',
        padding: 'pl-4 sm:pl-5 pr-11 sm:pr-13',
        fontSize: 'text-xs sm:text-sm',
        iconCircle: '1.95rem',
        iconRight: '0.3rem',
        iconSize: 'size-4',
      },
      lg: {
        height: 'h-12 sm:h-[52px] min-h-[48px] sm:min-h-[52px]',
        padding: 'pl-5 sm:pl-6 pr-13 sm:pr-15',
        fontSize: 'text-sm sm:text-base',
        iconCircle: '2.2rem',
        iconRight: '0.35rem',
        iconSize: 'size-4 sm:size-4.5',
      },
    }[size] || {
      height: 'h-11 min-h-[44px]',
      padding: 'pl-4 sm:pl-5 pr-11 sm:pr-13',
      fontSize: 'text-xs sm:text-sm',
      iconCircle: '1.95rem',
      iconRight: '0.3rem',
      iconSize: 'size-4',
    };

  const variantDefaults = {
    primary: {
      bgColor: '#2563eb',
      textColor: '#ffffff',
      fillBgColor: '#38bdf8',
      fillTextColor: '#070b16',
      arrowColor: '#070b16',
      hoverArrowColor: '#070b16',
      className: 'border-blue-400/40 shadow-xl shadow-blue-600/30',
    },
    secondary: {
      bgColor: '#121622',
      textColor: '#f4f4f5',
      fillBgColor: '#31c0de',
      fillTextColor: '#09090b',
      arrowColor: '#09090b',
      hoverArrowColor: '#09090b',
      className: 'border-white/15 hover:border-white/30 shadow-md',
    },
    default: {
      bgColor: '#141824',
      textColor: '#ffffff',
      fillBgColor: '#31c0de',
      fillTextColor: '#09090b',
      arrowColor: '#09090b',
      hoverArrowColor: '#09090b',
      className: 'border-white/15 hover:border-white/30 shadow-md',
    },
    paintly: {
      bgColor: '#20211F',
      textColor: '#FAF9F6',
      fillBgColor: '#D9683B',
      fillTextColor: '#ffffff',
      arrowColor: '#ffffff',
      hoverArrowColor: '#ffffff',
      className: 'border-white/15 hover:border-white/30 shadow-md',
    },
  }[variant] || {
    bgColor: '#141824',
    textColor: '#ffffff',
    fillBgColor: '#31c0de',
    fillTextColor: '#09090b',
    arrowColor: '#09090b',
    hoverArrowColor: '#09090b',
    className: 'border-white/15 hover:border-white/30 shadow-md',
  };

  const finalBgColor = bgColor ?? baseBg ?? variantDefaults.bgColor;
  const finalTextColor = textColor ?? variantDefaults.textColor;
  const finalFillBgColor = fillBgColor ?? fillBg ?? variantDefaults.fillBgColor;
  const finalFillTextColor = fillTextColor ?? variantDefaults.fillTextColor;
  const finalHoverFillBgColor = hoverFillBgColor ?? finalFillBgColor;
  const finalHoverFillTextColor = hoverFillTextColor ?? finalFillTextColor;
  const finalArrowColor = arrowColor ?? variantDefaults.arrowColor ?? finalFillTextColor;
  const finalHoverArrowColor = hoverArrowColor ?? variantDefaults.hoverArrowColor ?? finalHoverFillTextColor;

  const usesUtilityBackground =
    className.includes('bg-') ||
    className.includes('from-') ||
    className.includes('via-') ||
    className.includes('to-');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(
      `(max-width: ${COMPACT_LAYOUT_BREAKPOINT - 1}px)`
    );

    const syncCompactLayout = (event: MediaQueryList | MediaQueryListEvent) => {
      const matches = 'matches' in event ? event.matches : (event as MediaQueryList).matches;
      setIsCompactLayout(matches);

      if (!matches) {
        setIsPressed(false);
      }
    };

    mediaQuery.addEventListener('change', syncCompactLayout);
    return () => {
      mediaQuery.removeEventListener('change', syncCompactLayout);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (releaseTimeoutRef.current) {
        window.clearTimeout(releaseTimeoutRef.current);
      }
    };
  }, []);

  const clearPressedState = () => {
    if (releaseTimeoutRef.current) {
      window.clearTimeout(releaseTimeoutRef.current);
    }

    releaseTimeoutRef.current = window.setTimeout(() => {
      setIsPressed(false);
      releaseTimeoutRef.current = null;
    }, ANIMATION_DURATION_MS);
  };

  const handlePointerDown = (event: PointerEvent<HTMLAnchorElement>) => {
    props.onPointerDown?.(event);

    if (!isCompactLayout || event.pointerType === 'mouse') {
      return;
    }

    if (releaseTimeoutRef.current) {
      window.clearTimeout(releaseTimeoutRef.current);
      releaseTimeoutRef.current = null;
    }

    setIsPressed(true);
  };

  const handlePointerUp = (event: PointerEvent<HTMLAnchorElement>) => {
    props.onPointerUp?.(event);

    if (!isCompactLayout || event.pointerType === 'mouse') {
      return;
    }

    clearPressedState();
  };

  const handlePointerCancel = (event: PointerEvent<HTMLAnchorElement>) => {
    props.onPointerCancel?.(event);

    if (!isCompactLayout || event.pointerType === 'mouse') {
      return;
    }

    clearPressedState();
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if ((!href || href === '#') && !to && props.onClick) {
      event.preventDefault();
    }
    props.onClick?.(event);
  };

  const dynamicStyles = {
    '--btn-bg': finalBgColor,
    '--btn-text': finalTextColor,
    '--btn-fill-bg': finalFillBgColor,
    '--btn-fill-text': finalFillTextColor,
    '--btn-fill-bg-hover': finalHoverFillBgColor,
    '--btn-fill-text-hover': finalHoverFillTextColor,
    '--btn-arrow': finalArrowColor,
    '--btn-arrow-hover': finalHoverArrowColor,
    '--icon-circle': sizeConfig.iconCircle,
    '--icon-right': sizeConfig.iconRight,
    '--circle-inset-y': 'calc((100% - var(--icon-circle)) / 2)',
    '--circle-inset-left': 'calc(100% - var(--icon-right) - var(--icon-circle))',
    '--circle-clip-resting': 'inset(calc((100% - var(--icon-circle)) / 2) var(--icon-right) calc((100% - var(--icon-circle)) / 2) calc(100% - var(--icon-right) - var(--icon-circle)))',
    ...props.style,
  } as CSSProperties & Record<string, string | number>;

  const isFullWidth = className.includes('w-full');
  const widthClasses = isFullWidth ? 'w-full max-w-full' : 'w-fit min-w-fit max-w-full';

  const sharedClasses = `group relative inline-flex ${sizeConfig.height} ${widthClasses} cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[var(--btn-bg)] ${sizeConfig.padding} font-bold ${sizeConfig.fontSize} leading-none [text-rendering:geometricPrecision] shadow-md transition-all active:scale-[0.98] select-none ${
    usesUtilityBackground ? '' : 'bg-[var(--btn-bg)]'
  } text-[var(--btn-text)] ${variantDefaults.className} ${className.replace(/\b(w-fit|min-w-fit)\b/g, '')}`;

  const Icon = CustomIcon || ArrowRight;

  const innerContent = (
    <>
      <span className="relative z-[1] pb-px whitespace-nowrap truncate max-w-full">
        {displayText}
      </span>

      {/* Expanding Background Circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-[2] rounded-full bg-[var(--btn-fill-bg)] inset-[var(--circle-inset-y)_var(--icon-right)_var(--circle-inset-y)_var(--circle-inset-left)] transition-all duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:bg-[var(--btn-fill-bg-hover)] group-hover:inset-0 group-data-[pressed=true]:bg-[var(--btn-fill-bg-hover)] group-data-[pressed=true]:inset-0"
      />

      {/* Inverted Color Text revealed on hover */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-[2] flex items-center justify-center ${sizeConfig.padding} text-[var(--btn-fill-text)] [clip-path:var(--circle-clip-resting)] transition-all duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:text-[var(--btn-fill-text-hover)] group-hover:[clip-path:inset(0_0_0_0)] group-data-[pressed=true]:text-[var(--btn-fill-text-hover)] group-data-[pressed=true]:[clip-path:inset(0_0_0_0)]`}
      >
        <span className="relative z-[1] pb-px whitespace-nowrap truncate max-w-full">
          {displayText}
        </span>
      </div>

      {/* Arrow Badge Container */}
      <span
        className="pointer-events-none absolute right-[var(--icon-right)] top-1/2 z-[3] inline-flex h-[var(--icon-circle)] w-[var(--icon-circle)] shrink-0 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-[var(--btn-fill-bg)] text-[var(--btn-arrow)] transition-colors duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:bg-[var(--btn-fill-bg-hover)] group-hover:text-[var(--btn-arrow-hover)] group-data-[pressed=true]:bg-[var(--btn-fill-bg-hover)] group-data-[pressed=true]:text-[var(--btn-arrow-hover)] shadow-sm"
        aria-hidden="true"
      >
        <Icon
          className={`absolute left-1/2 top-1/2 ${sizeConfig.iconSize} translate-x-[-170%] -translate-y-1/2 origin-center scale-0 text-current transition-transform duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:scale-100 group-data-[pressed=true]:-translate-x-1/2 group-data-[pressed=true]:-translate-y-1/2 group-data-[pressed=true]:scale-100`}
          strokeWidth={2.5}
        />

        <Icon
          className={`absolute left-1/2 top-1/2 ${sizeConfig.iconSize} -translate-x-1/2 -translate-y-1/2 origin-center text-current transition-transform duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:translate-x-[70%] group-hover:-translate-y-1/2 group-hover:scale-0 group-data-[pressed=true]:translate-x-[70%] group-data-[pressed=true]:-translate-y-1/2 group-data-[pressed=true]:scale-0`}
          strokeWidth={2.5}
        />
      </span>
    </>
  );

  // If button type (e.g. submit/button) or explicitly requested as button
  if (asProp === 'button' || type || (!to && (!href || href === '#'))) {
    return (
      <button
        ref={ref as any}
        type={type || 'button'}
        disabled={disabled}
        {...(props as any)}
        onClick={handleClick as any}
        data-pressed={isPressed ? 'true' : 'false'}
        onPointerDown={handlePointerDown as any}
        onPointerUp={handlePointerUp as any}
        onPointerCancel={handlePointerCancel as any}
        className={sharedClasses}
        style={dynamicStyles}
      >
        {innerContent}
      </button>
    );
  }

  // If `to` is passed or internal route link, use React Router Link
  const targetDestination = to || href;
  const isInternalLink = targetDestination && !targetDestination.startsWith('http') && !targetDestination.startsWith('#');

  if (isInternalLink && targetDestination !== '#') {
    return (
      <Link
        ref={ref}
        to={targetDestination}
        {...(props as any)}
        onClick={handleClick as any}
        data-pressed={isPressed ? 'true' : 'false'}
        onPointerDown={handlePointerDown as any}
        onPointerUp={handlePointerUp as any}
        onPointerCancel={handlePointerCancel as any}
        className={sharedClasses}
        style={dynamicStyles}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <a
      ref={ref}
      href={href}
      {...props}
      onClick={handleClick}
      data-pressed={isPressed ? 'true' : 'false'}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      className={sharedClasses}
      style={dynamicStyles}
    >
      {innerContent}
    </a>
  );
});

ArrowFillButton.displayName = 'ArrowFillButton';

export default ArrowFillButton;
