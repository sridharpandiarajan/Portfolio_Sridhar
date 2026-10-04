type ArrowDirection = 'up-right' | 'down-right' | 'left' | 'up';

export default function ArrowIcon({ direction = 'up-right' }: { direction?: ArrowDirection }) {
  if (direction === 'left') {
    return <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M19 12H5m0 0 7-7m-7 7 7 7" /></svg>;
  }
  if (direction === 'up') {
    return <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M12 19V5m0 0-7 7m7-7 7 7" /></svg>;
  }
  return <svg className={`arrow-icon ${direction === 'down-right' ? 'arrow-icon-down' : ''}`} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M6 18 18 6M8 6h10v10" /></svg>;
}
