import React, { createContext, useContext, useState } from 'react';

const TimelineContext = createContext(null);

const STORAGE_KEY = 'kinkeeper-timeline';

function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) {
      return [];
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return [];
  } catch {
    return [];
  }
}

function saveToLocalStorage(entries) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    return;
  }
}

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState(function () {
    return loadFromLocalStorage();
  });

  function addEntry(friendId, friendName, interactionType) {
    let actionLabel = 'Call';
    if (interactionType === 'text') {
      actionLabel = 'Text';
    }
    if (interactionType === 'video') {
      actionLabel = 'Video';
    }

    const id = String(Date.now()) + '-' + Math.random().toString(36).slice(2, 9);
    const date = new Date().toISOString();
    const title = actionLabel + ' with ' + friendName;

    const newEntry = {
      id,
      friendId,
      friendName,
      type: interactionType,
      date,
      title,
    };

    setEntries(function (prevList) {
      const newList = [newEntry].concat(prevList);
      saveToLocalStorage(newList);
      return newList;
    });

    return newEntry;
  }

  const value = { entries, addEntry };

  return <TimelineContext.Provider value={value}>{children}</TimelineContext.Provider>;
}

export function useTimeline() {
  return useContext(TimelineContext);
}
