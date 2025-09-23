
import React, { useEffect, useState } from "react";
import axios from "axios";

const cardData = [
  { title: "Show Students", color: "#1abc9c", icon: "👨‍🎓", description: "View and manage student profiles." },
  { title: "Add Marks Scheme", color: "#3498db", icon: "📝", description: "Create or update evaluation schemes." },
  { title: "Add Evaluation", color: "#e74c3c", icon: "📊", description: "Record and analyze student performance." },
  { title: "Assigned Task", color: "#f1c40f", icon: "📌", description: "Assign tasks to staff and track progress." },
  { title: "Show Completed Task", color: "#9b59b6", icon: "✅", description: "Review completed assignments and evaluations." },
];

const CoordinatorDashboard = () => {
  const [coordinatorName, setCoordinatorName] = useState("");

  return (
    <section className="coordinator-dashboard">
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }

        .welcome {
          padding: 2rem;
          text-align: center;
          background-color: #ecf0f1;
          margin-bottom: 2rem;
          border-radius: 12px;
        }

        .welcome h2 { font-size: 2.2rem; color: #2c3e50; margin-bottom: 0.5rem; }
        .welcome p { font-size: 1.1rem; color: #7f8c8d; line-height: 1.6; }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1.8rem;
          padding: 0 2rem;
          margin-bottom: 2rem;
        }

        .card {
          width: 180px;
          height: 180px;
          border-radius: 15px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          font-size: 1.1rem;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          text-align: center;
          padding: 1rem;
        }

        .card:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        .card .icon { font-size: 2.5rem; margin-bottom: 10px; }

        .card .description {
          font-size: 0.9rem;
          margin-top: 8px;
          color: #f0f0f0;
        }

        .bottom-text {
          text-align: center;
          padding: 2rem;
          font-size: 1rem;
          color: #2c3e50;
        }

        .bottom-text h2 { font-size: 1.8rem; margin-bottom: 0.5rem; }
        .bottom-text p { font-size: 1.1rem; line-height: 1.6; }
      `}</style>

      {/* Welcome Section */}
      <div className="welcome">
        <h2>Welcome, {coordinatorName || "Coordinator"}!</h2>
        <p>
          Your leadership shapes the future of students. Here you can manage tasks, monitor evaluations, and support both teachers and learners with ease.
          Every action you take empowers academic excellence and inspires young minds.
        </p>
      </div>

      {/* Quick Action Cards */}
      <div className="cards">
        {cardData.map((card, idx) => (
          <div key={idx} className="card" style={{ backgroundColor: card.color }}>
            <div className="icon">{card.icon}</div>
            {card.title}
            <div className="description">{card.description}</div>
          </div>
        ))}
      </div>

      {/* Bottom Inspiring Text */}
      <div className="bottom-text">
        <h2>This is your Coordinator Page!</h2>
        <p>
          “Education is the most powerful weapon which you can use to change the world.” – Nelson Mandela. 
          Lead with vision, inspire with action, and make every day an opportunity for learning and growth.
        </p>
      </div>
    </section>
  );
};

export default CoordinatorDashboard;
