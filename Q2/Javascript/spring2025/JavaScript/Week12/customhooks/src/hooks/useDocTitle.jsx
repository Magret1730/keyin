// A hook that will take one parameter and setup that text as the title of the document.

import { useState, useEffect } from "react";

const useDocTitle = ({ title }) => {
  const [docTitle, setDocTitle] = useState(title);

  useEffect(() => {
    document.title = docTitle;
  }, [docTitle]);

  return [docTitle, setDocTitle];
};
export default useDocTitle;
