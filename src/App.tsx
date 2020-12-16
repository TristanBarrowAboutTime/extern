import TaskDrilldown from './tasks/TaskDrilldown';
import React, { useState } from 'react';
import LoadableContent from './tasks/LoadableContent';

function App() {
  const [isLoaded, setIsLoadedTo] = useState(false);
  return (
    // <div style={{height: '100vh', width: '100vw'}}>
    //   <LoadableContent isLoaded={isLoaded}>
    //     <div></div>
    //   </LoadableContent>
    //   <button onClick={() => setIsLoadedTo(!isLoaded)}>change state</button>
    // </div>
    <TaskDrilldown    
      hoursBudget={100}
      unitsBudget={300}
      paceNeeded={100}
      currentPace={101}
      paceHoursLeft={4}
      hoursCompleted={5.3}
      totalHoursToComplete={10}
      unitsCompleted={32}
      totalUnitsToComplete={43}
      trending={4}
      hoursRemaining={10}
      totalHoursRemaining={30}
      unitsRemaining={10}
      totalUnitsRemaining={70} 

    />
  );
}

export default App;
