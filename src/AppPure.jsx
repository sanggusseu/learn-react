import './App.css';
import PullUpPure from './components/PullUpPure';

export default function AppPure() {
  return (
    <div>
      <PullUpPure counter={11} />
      <PullUpPure counter={11} />
      <PullUpPure counter={11} />
    </div>
  );
}
