import { useEffect, useState } from 'react';

export function VisitCounter() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    // Get current visit count
    const currentVisits = parseInt(localStorage.getItem('visitCount') || '0');
    
    // Increment visit count
    const newVisits = currentVisits + 1;
    localStorage.setItem('visitCount', newVisits.toString());
    
    setVisits(newVisits);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-2 text-sm text-white/80">
      <span className="font-medium">Visitas:</span>
      <span className="bg-white/10 px-3 py-1 rounded-full font-mono">{visits.toLocaleString()}</span>
    </div>
  );
}