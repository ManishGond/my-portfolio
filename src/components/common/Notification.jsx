import { useState, useEffect } from "react";
import { notifications } from "../../constants/notifications";

const Notification = ({ className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [direction, setDirection] = useState("up"); // Add slide direction

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setDirection(Math.random() > 0.5 ? "up" : "down");

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const notification = notifications[currentIndex];

  return (
    <div className={`${className} flex gap-5`}>
      <div
        className={`flex items-center transition-all duration-500 
          ${isVisible ? "opacity-100 transform-none" : "opacity-0 transform"}
          ${direction === "up" ? "-translate-y-4" : "translate-y-4"}
        `}
      >
        <div className="p-4 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl hover:bg-n-8/40 transition-colors group">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={notification.getAvatar()}
                alt="avatar"
                className="w-12 h-12 rounded-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-n-8" />
            </div>
            <div>
              <h6 className="font-semibold text-base mb-1 text-n-1 group-hover:text-color-1 transition-colors">
                {notification.title}
              </h6>
              <p className="text-sm text-n-3 group-hover:text-n-1 transition-colors">
                {notification.message}
              </p>
              <span className="text-xs text-n-3 mt-1 inline-block">
                {notification.time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
