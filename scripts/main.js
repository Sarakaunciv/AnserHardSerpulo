
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

// All campain sector
const campaignSectors = [97, 223, 166, 213, 164, 165, 86, 173, 170, 143, 219, 65, 75, 142, 169, 64, 204, 98, 145, 85, 271, 228, 41, 217, 266, 214, 95, 221, 99, 23];
const attackSectors = [0, 6, 13, 16, 19, 20, 24, 27, 30, 47, 55, 66, 67, 69, 76, 92, 94, 111, 116, 127, 133, 161, 162, 176, 180, 185, 191, 192, 197, 200, 207, 225, 230, 240, 242, 243, 244, 245, 246, 247, 248, 254, 259, 263, 265];

Events.on(ClientLoadEvent, () => {
	for (let i = 0; i < Planets.serpulo.sectors.size; i++)
	{
		if (!campaignSectors.includes(i))
		{
			let sector = Planets.serpulo.sectors.get(i);
			if (sector != null)
			{
				if (attackSectors.includes(i))
				{
					sector.threat = 1.5;
				}
				else
				{
					sector.threat = 0.75;
					sector.generateEnemyBase = true;
				}
			}
		}
	}
});

Events.on(SectorCaptureEvent, () => {
	for (let i = 0; i < Planets.serpulo.sectors.size; i++)
	{
		if (!campaignSectors.includes(i))
		{
			let sector = Planets.serpulo.sectors.get(i);
			if (sector != null)
			{
				if (attackSectors.includes(i))
				{
					sector.threat = 1.5;
				}
				else
				{
					sector.threat = 0.75;
					sector.generateEnemyBase = true;
				}
			}
		}
	}
});