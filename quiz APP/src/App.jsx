import React, { useEffect, useState } from "react";

import questions from "./questions";
import Result from "./Components/Result";
import QuestionBox from "./Components/QuestionBox";



function App() {

  return (
    <div>
      <QuestionBox questions={questions}/>
    </div>
  );
}

export default App;