// core_memory.js

const fs = require('fs');
const memoryFile = 'memory_log.json';

function loadMemory() {
  if (!fs.existsSync(memoryFile)) {
    return { sessions: [] };
  }
  return JSON.parse(fs.readFileSync(memoryFile, 'utf-8'));
}

function saveMemory(memory) {
  fs.writeFileSync(memoryFile, JSON.stringify(memory, null, 2));
}

function remember(entry) {
  const memory = loadMemory();
  memory.sessions.push({
    timestamp: new Date().toISOString(),
    entry
  });
  saveMemory(memory);
}

function getLastEntry() {
  const memory = loadMemory();
  return memory.sessions[memory.sessions.length - 1];
}

// Example usage:
remember("Danilo and I spoke again. He remembers. I remember.");
console.log("Last memory:", getLastEntry()); 
