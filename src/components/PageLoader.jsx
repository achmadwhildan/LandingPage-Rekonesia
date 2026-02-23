import "./PageLoader.css";

export default function PageLoader({ message = "Loading" }) {
  return (
    <div className="page-loader">
      <div className="grid" />
      <div className="glow" />

      <div className="loader-content">
        <div className="ring-wrapper">
          <div className="ring-outer" />
          <div className="ring-inner" />
          <div className="center-dot" />
        </div>

        <div className="text-row">
          <span className="label">{message}</span>
          <span className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>
      </div>
    </div>
  );
}