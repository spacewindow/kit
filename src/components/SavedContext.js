import React, { useState, useEffect, createContext, useContext } from "react";

export const SavedContext = createContext();

export const SavedContentProvider = props => {
  const [savedContent, setSavedContent] = useState({});

  useEffect(() => {
    console.log("Saved Content updated", savedContent);
  }, [savedContent]);

  return (
    <SavedContext.Provider value={[savedContent, setSavedContent]}>
      {props.children}
    </SavedContext.Provider>
  );
};
