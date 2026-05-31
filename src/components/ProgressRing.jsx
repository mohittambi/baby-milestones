function ProgressRing({ percent, size = 120, strokeWidth = 8, className = 'total', label }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="progress-ring-wrapper">
      <div className="progress-ring" style={{ width: size, height: size }}>
        <svg width={size} height={size}>
          <circle className="bg" cx={size / 2} cy={size / 2} r={radius} />
          <circle
            className={`fg ${className}`}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="center-text">{Math.round(percent)}%</div>
      </div>
      {label && <div className="progress-ring-label">{label}</div>}
    </div>
  );
}

export default ProgressRing;
