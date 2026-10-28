const FirstDivider = () => {
  return (
    <div className="first-divider">
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated ice cream scoops floating across */}
        <div
          className="floating-melt"
          style={{ top: "20%", left: "15%", animationDelay: "0s" }}
        ></div>
        <div
          className="floating-melt"
          style={{ top: "40%", left: "35%", animationDelay: "1s" }}
        ></div>
        <div
          className="floating-melt"
          style={{ top: "60%", left: "55%", animationDelay: "2s" }}
        ></div>
        <div
          className="floating-melt"
          style={{ top: "30%", left: "75%", animationDelay: "3s" }}
        ></div>
      </div>
    </div>
  );
};

export default FirstDivider;
