import { Children, useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // const step = 1;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const msgCount = messages[step - 1];

  const handlePre = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            <StepMess step={step}> {msgCount}</StepMess>
            {/* step{step}: */}
          </p>

          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePre}>
              <span>👈</span> Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
function StepMess({ step, children }) {
  return (
    <>
      <h3>step {step}</h3> <span>{children}</span>
      {/* <Button
        bgColor="#e7e7e7"
        textColor="#333"
        onClick={() => alert("Lern more about childern props")}
      >
        Lern How
      </Button> */}
    </>
  );
}

function Button({ bgColor, textColor, text, emoji, onClick, children }) {
  return (
    <>
      <button
        onClick={onClick}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {children}
      </button>
    </>
  );
}

// export default Button;
