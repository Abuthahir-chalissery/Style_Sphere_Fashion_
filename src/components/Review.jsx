export default function Rating({ rating }) {

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
    const starPath = "M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z";
  
    return (
      <div className="flex items-center">
  
        {/* FULL STARS */}
        {[...Array(fullStars)].map((_, i) => (
          <svg
            key={i}
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="orange"
            stroke="orange"
            strokeWidth="2"
          >
            <path d={starPath} />
          </svg>
        ))}
  
        {/* HALF STAR */}
        {hasHalfStar && (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            stroke="orange"
            strokeWidth="2"
          >
            <defs>
              <linearGradient id="halfStar">
                <stop offset="50%" stopColor="orange" />
                <stop offset="50%" stopColor="white" />
              </linearGradient>
            </defs>
            <path fill="url(#halfStar)" d={starPath} />
          </svg>
        )}
  
        {/* EMPTY STARS */}
        {[...Array(emptyStars)].map((_, i) => (
          <svg
            key={"empty" + i}
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="white"
            stroke="orange"
            strokeWidth="2"
          >
            <path d={starPath} />
          </svg>
        ))}
  
        <p className="ms-2 text-sm font-medium text-body text-gray-600">
          ({rating}) Customer reviews
        </p>
  
      </div>
    );
  }
  