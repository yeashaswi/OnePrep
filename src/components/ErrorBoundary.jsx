import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught error:", error, errorInfo);
  }

  handleReload = () => {
    try {
      localStorage.removeItem('fatkilla_courses_v4');
      localStorage.removeItem('fatkilla_statuses_v4');
    } catch (e) {}
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#18181A] text-[#BFBFC5] flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-[#232326] border border-[#36363B] rounded-xl p-6 text-center space-y-4 shadow-xl">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#E05656]/20 text-[#E05656] flex items-center justify-center font-bold text-xl">
              !
            </div>
            <h2 className="text-lg font-bold text-[#F4F4F6]">OnePrep Needs a Quick Refresh</h2>
            <p className="text-sm text-[#85858D] leading-relaxed">
              We encountered a minor display state mismatch. Click below to refresh your study session with clean defaults.
            </p>
            <button
              onClick={this.handleReload}
              className="w-full py-2.5 px-4 bg-[#E05656] hover:bg-[#C94545] text-[#F4F4F6] font-semibold text-sm rounded-lg transition-colors shadow-sm"
            >
              Refresh Platform
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
