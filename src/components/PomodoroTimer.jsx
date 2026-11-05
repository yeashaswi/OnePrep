import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, X, Timer, Bell, Coffee } from 'lucide-react';

export default function PomodoroTimer({ isOpen, onClose }) {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState('focus'); // 'focus' (25m) or 'break' (5m)
  const [sessionsCompleted, setSessionsCompleted] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (mode === 'focus') {
        setSessionsCompleted(c => c + 1);
        setMode('break');
        setTimeLeft(5 * 60);
      } else {
        setMode('focus');
        setTimeLeft(25 * 60);
      }
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, mode]);

  if (!isOpen) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const switchMode = (newMode) => {
    setMode(newMode);
    setIsRunning(false);
    setTimeLeft(newMode === 'focus' ? 25 * 60 : 5 * 60);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(mode === 'focus' ? 25 * 60 : 5 * 60);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 w-80 glass-panel rounded-2xl p-5 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 animate-in slide-in-from-bottom-5">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Timer className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            Deep Focus Timer
          </span>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-white">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="my-4 text-center">
        <div className="flex justify-center gap-2 mb-3">
          <button
            onClick={() => switchMode('focus')}
            className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all ${
              mode === 'focus' 
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            25m Focus
          </button>
          <button
            onClick={() => switchMode('break')}
            className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all ${
              mode === 'break' 
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            5m Short Break
          </button>
        </div>

        <div className="text-4xl font-black font-mono tracking-tight text-white py-2">
          {formattedTime}
        </div>

        <div className="text-[11px] text-slate-400 mt-1">
          {mode === 'focus' ? '🎯 Solve high-yield derivations without distractions' : '☕ Relax your eyes, hydrate!'}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 pt-2 border-t border-slate-800/80">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white shadow-lg transition-all ${
            isRunning 
              ? 'bg-amber-600 hover:bg-amber-500' 
              : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/20'
          }`}
        >
          {isRunning ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
          <span>{isRunning ? 'Pause' : 'Start Focus'}</span>
        </button>

        <button
          onClick={resetTimer}
          className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors"
          title="Reset timer"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-3 text-center text-[10px] text-slate-500 font-medium">
        Completed today: {sessionsCompleted} sessions
      </div>
    </div>
  );
}
