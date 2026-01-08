import { useState, useEffect } from "react";
import { Volume2, Wind, Music, Cloud, Waves, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * ZenSpace: Interactive Focus and Ambiance Designer
 * Design Philosophy: Modern Minimalist Serenity
 * - Japandi aesthetic with glassmorphism
 * - Calm, focus-enhancing interface
 * - Fluid transitions and negative space
 */

interface SoundTrack {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  volume: number;
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [soundTracks, setSoundTracks] = useState<SoundTrack[]>([
    { id: "rain", name: "Rain", icon: <Cloud className="w-5 h-5" />, color: "from-blue-400 to-blue-600", volume: 0.3 },
    { id: "forest", name: "Forest", icon: <Wind className="w-5 h-5" />, color: "from-green-400 to-green-600", volume: 0 },
    { id: "cafe", name: "Cafe", icon: <Coffee className="w-5 h-5" />, color: "from-orange-400 to-orange-600", volume: 0 },
    { id: "waves", name: "Waves", icon: <Waves className="w-5 h-5" />, color: "from-cyan-400 to-cyan-600", volume: 0 },
    { id: "white", name: "White Noise", icon: <Music className="w-5 h-5" />, color: "from-gray-400 to-gray-600", volume: 0 },
  ]);
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathingScale, setBreathingScale] = useState(1);
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");
  const [bgColor, setBgColor] = useState("from-blue-50 to-orange-50");

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  // Breathing animation
  useEffect(() => {
    if (!breathingActive) return;
    let scale = 1;
    let growing = true;
    const interval = setInterval(() => {
      if (growing) {
        scale += 0.05;
        if (scale >= 1.5) growing = false;
      } else {
        scale -= 0.05;
        if (scale <= 1) growing = true;
      }
      setBreathingScale(scale);
    }, 50);
    return () => clearInterval(interval);
  }, [breathingActive]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const updateVolume = (id: string, volume: number) => {
    setSoundTracks((prev) =>
      prev.map((track) => (track.id === id ? { ...track, volume } : track))
    );
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const totalVolume = soundTracks.reduce((sum, track) => sum + track.volume, 0);
  const avgVolume = totalVolume / soundTracks.length;
  const hue = Math.floor(avgVolume * 360);
  const newBg = `hsl(${hue}, 70%, 95%) to hsl(${(hue + 60) % 360}, 70%, 95%)`;

  return (
    <div
      className={`min-h-screen transition-all duration-1000 ease-out bg-gradient-to-br ${bgColor} flex flex-col items-center justify-center p-4`}
    >
      {/* Main Content */}
      <div className="w-full max-w-2xl space-y-8">
        {/* Pomodoro Timer */}
        <div className="flex flex-col items-center space-y-6">
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* Breathing Circle */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-20 blur-xl transition-transform duration-100"
              style={{ transform: `scale(${breathingScale})` }}
            />
            {/* Timer Circle */}
            <div className="relative w-40 h-40 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white/40 backdrop-blur-md shadow-lg">
              <div className="text-center">
                <div className="text-5xl font-light text-gray-800 font-serif">
                  {formatTime(timeLeft)}
                </div>
              </div>
            </div>
          </div>

          {/* Timer Controls */}
          <div className="flex gap-3">
            <Button
              onClick={() => setIsRunning(!isRunning)}
              className="px-8 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300"
            >
              {isRunning ? "Pause" : "Start"}
            </Button>
            <Button
              onClick={() => setTimeLeft(25 * 60)}
              variant="outline"
              className="px-8 py-2 rounded-full border-gray-300 text-gray-700 hover:bg-white/50 transition-all duration-300"
            >
              Reset
            </Button>
          </div>

          {/* Breathing Exercise */}
          <Button
            onClick={() => setBreathingActive(!breathingActive)}
            variant="outline"
            className="px-6 py-2 rounded-full border-gray-300 text-gray-700 hover:bg-white/50 transition-all duration-300 text-sm"
          >
            {breathingActive ? "Stop Breathing" : "Breathe"}
          </Button>
        </div>

        {/* Sound Mixer */}
        <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/60 space-y-6">
          <div className="flex items-center gap-2 text-gray-700">
            <Volume2 className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Ambiance Mixer</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {soundTracks.map((track) => (
              <div
                key={track.id}
                className="bg-gradient-to-br from-white/60 to-white/40 rounded-2xl p-4 hover:scale-105 transition-transform duration-300 border border-white/80"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-gray-700">{track.icon}</div>
                  <span className="text-sm font-medium text-gray-700">{track.name}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={track.volume}
                  onChange={(e) => updateVolume(track.id, parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-blue-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Task List */}
        <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/60 space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">Focus Tasks</h2>
          <div className="flex gap-2">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTask()}
              placeholder="Add a task..."
              className="flex-1 px-4 py-2 rounded-full bg-white/60 border border-white/80 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Button
              onClick={addTask}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300"
            >
              Add
            </Button>
          </div>
          <div className="space-y-2">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white/60 rounded-full px-4 py-2 text-gray-700 hover:bg-white/80 transition-all duration-300"
              >
                <span className="text-sm">{task}</span>
                <button
                  onClick={() => removeTask(index)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
