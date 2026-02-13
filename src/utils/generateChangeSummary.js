export function generateChangeSummary(previousData, currentData) {
  if (!previousData || !currentData) return 'Initial snapshot';

  const changes = [];
  const prevKeys = new Set(Object.keys(previousData));
  const currKeys = new Set(Object.keys(currentData));

  for (const key of currKeys) {
    if (!prevKeys.has(key)) {
      changes.push(`Added "${currentData[key].name}"`);
    }
  }

  for (const key of prevKeys) {
    if (!currKeys.has(key)) {
      changes.push(`Removed "${previousData[key].name}"`);
    }
  }

  for (const key of currKeys) {
    if (!prevKeys.has(key)) continue;
    const prev = previousData[key];
    const curr = currentData[key];
    const userName = curr.name;

    if (prev.name !== curr.name) {
      changes.push(`${userName} — renamed from "${prev.name}"`);
    }

    const prevStageIds = new Set(prev.stages.map(s => s.id));
    const currStageIds = new Set(curr.stages.map(s => s.id));

    for (const stage of curr.stages) {
      if (!prevStageIds.has(stage.id)) {
        changes.push(`${userName} — added "${stage.name}"`);
      }
    }

    for (const stage of prev.stages) {
      if (!currStageIds.has(stage.id)) {
        changes.push(`${userName} — removed "${stage.name}"`);
      }
    }

    const prevStageMap = Object.fromEntries(prev.stages.map(s => [s.id, s]));
    for (const stage of curr.stages) {
      if (!prevStageIds.has(stage.id)) continue;
      const prevStage = prevStageMap[stage.id];
      const diffs = diffStage(prevStage, stage);
      if (diffs.length > 0) {
        changes.push(`${userName} > ${stage.name} — ${diffs.join(', ')}`);
      }
    }
  }

  if (changes.length === 0) return 'No changes detected';

  const full = changes.join('; ');
  if (full.length > 200) {
    return changes[0] + (changes.length > 1 ? ` ... and ${changes.length - 1} more changes` : '');
  }
  return full;
}

function diffStage(prev, curr) {
  const diffs = [];

  if (prev.name !== curr.name) diffs.push('updated name');
  if (prev.bucket !== curr.bucket) diffs.push('changed bucket');
  if (prev.phase !== curr.phase) diffs.push('changed phase');
  if (prev.userIntent !== curr.userIntent) diffs.push('updated intent');

  const prevEvo = prev.evolution || {};
  const currEvo = curr.evolution || {};
  const allLevels = new Set([...Object.keys(prevEvo), ...Object.keys(currEvo)]);

  for (const level of allLevels) {
    const pLevel = prevEvo[level] || { description: '', systems: [] };
    const cLevel = currEvo[level] || { description: '', systems: [] };

    if (pLevel.description !== cLevel.description) {
      diffs.push(`updated ${level} description`);
    }

    const pSys = (pLevel.systems || []).sort().join(',');
    const cSys = (cLevel.systems || []).sort().join(',');
    if (pSys !== cSys) {
      diffs.push(`updated ${level} systems`);
    }
  }

  return diffs;
}
