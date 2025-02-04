import { useRef } from "react";

function FiveDay() {
  const dummyHourlyData = [
    {
      time: "Now",
      icon: "🌤️",
      temperature: "22",
    },
    {
      time: "13:00",
      icon: "🌤️",
      temperature: "22",
    },
    {
      time: "14:00",
      icon: "🌤️",
      temperature: "22",
    },
    {
      time: "15:00",
      icon: "🌤️",
      temperature: "22",
    },
    {
      time: "16:00",
      icon: "🌤️",
      temperature: "22",
    },
    {
      time: "17:00",
      icon: "🌤️",
      temperature: "22",
    },
    {
      time: "18:00",
      icon: "🌤️",
      temperature: "22",
    },
    {
      time: "19:00",
      icon: "🌤️",
      temperature: "22",
    },
    {
      time: "20:00",
      icon: "🌤️",
      temperature: "22",
    },
  ];

  const scrollRef = useRef(null);

  function scrollLeft() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  }

  function scrollRight() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  }

  return (
    <div className="row p-4 g-0 text-white border border-primary-subtle rounded weather-card">
        <h2 className="mb-4 ms-4">5-Day Forecast</h2>
        <button
          className="btn col-1 p-0 my-auto"
          onClick={scrollLeft}
        >
          <i className="bi bi-chevron-compact-left display-4 text-white"></i>
        </button>
        <div className="col-10 px-0">
          <div
            ref={scrollRef}
            className="d-flex gap-3 overflow-hidden"
            style={{
              scrollBehavior: "smooth",
              whiteSpace: "nowrap",
              width: "100%",
            }}
          >
            {dummyHourlyData.map((data, index) => (
              <div
                key={index}
                className="d-flex flex-column gap-1 align-items-center"
              >
                <p className="m-0 fw-bold">{data.time}</p>
                <p className="m-0 fs-1">{data.icon}</p>
                <p className="m-0">{data.temperature}℃</p>
              </div>
            ))}
          </div>
        </div>
        <button
          className="col-1 btn p-0 my-auto"
          onClick={scrollRight}
        >
          <i className="bi bi-chevron-compact-right display-4 text-white my-auto"></i>
        </button>
    </div>
  );
}

export default FiveDay;
