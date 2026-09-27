import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            color: "white",
            textAlign: "center",
            padding: "10vmin",
            fontFamily: "Outfit, sans-serif",
          }}
        >
          <h2>Something went wrong loading the simulation.</h2>
          <p>Try refreshing the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;