
var Diff0 = Packages.mindustry.game.Difficulty;

var cas = Diff0.valueOf("casual");
cas.enemyHealthMultiplier = 0.20;
cas.enemySpawnMultiplier = 1;
cas.waveTimeMultiplier = 0.1;

var eas = Diff0.valueOf("easy");
eas.enemyHealthMultiplier = 1;
eas.enemySpawnMultiplier = 1;
eas.waveTimeMultiplier = 0.2;

var norm = Diff0.valueOf("normal");
norm.enemyHealthMultiplier = 2;
norm.enemySpawnMultiplier = 2;
norm.waveTimeMultiplier = 0.4;

var har = Diff0.valueOf("hard");
har.enemyHealthMultiplier = 2;
har.enemySpawnMultiplier = 4;
har.waveTimeMultiplier = 0.2;

var erad = Diff0.valueOf("eradication");
erad.enemyHealthMultiplier = 16;
erad.enemySpawnMultiplier = 1;
erad.waveTimeMultiplier = 0.04;

Events.on(ClientLoadEvent, () => {
	// All campain sector
	const campaignSectors = [170, 64, 219, 221, 23, 41, 223, 214, 65, 97, 86, 85, 98, 145, 213, 164, 142, 99, 169, 75, 266, 228, 165, 143, 271, 217];
	
	for (let i = 0; i < Planets.serpulo.sectors.size; i++)
	{
		let sector = Planets.serpulo.sectors.get(i);
		if (sector != null)
		{
			if (!campaignSectors.includes(i))
			{
				if (sector.threat >= 1)
				{
					sector.threat = 1.5;
				}
				if (sector.generateEnemyBase == false)
				{
					sector.generateEnemyBase = true;
				}
			}
		}
	}
});
