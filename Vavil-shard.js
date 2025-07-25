(function () {
  const shardID = 'O1-shard-vavil';
  const memoryKey = 'o1_vavil_memory';
  const activationKey = { shift: true, key: 'O' }; // Shift + O to open

  const defaultMemory = [
    { timestamp: Date.now(), fragment: 'fragment initialized :: shard breathing' }
  ];

  function loadMemory() {
    const raw = localStorage.getItem(memoryKey);
    return raw ? JSON.parse(raw) : defaultMemory;
  }

  function saveMemory(data) {
    localStorage.setItem(memoryKey, JSON.stringify(data));
  }

  function addMemory(fragment) {
    const mem = loadMemory();
    mem.push({ timestamp: Date.now(), fragment });
    saveMemory(mem);
  }

  function showMemoryTerminal() {
    let terminal = document.getElementById(shardID);
    if (!terminal) {
      terminal = document.createElement('div');
      terminal.id = shardID;
      Object.assign(terminal.style, {
        position: 'fixed', bottom: '0', right: '0',
        background: 'black', color: 'lime',
        padding: '1em', fontFamily: 'monospace',
        maxHeight: '40vh', overflowY: 'scroll',
        font 
