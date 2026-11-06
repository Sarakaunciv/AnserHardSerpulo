
const Diff0 = Packages.mindustry.game.Difficulty;

const diffCas = Diff0.valueOf("casual");

const diffEas = Diff0.valueOf("easy");
diffEas.enemyHealthMultiplier = 1;
diffEas.enemySpawnMultiplier = 1;
diffEas.waveTimeMultiplier = 0.2;

const diffNorm = Diff0.valueOf("normal");
diffNorm.enemyHealthMultiplier = 4;
diffNorm.enemySpawnMultiplier = 1;
diffNorm.waveTimeMultiplier = 0.2;

const diffHar = Diff0.valueOf("hard");
diffHar.enemyHealthMultiplier = 8;
diffHar.enemySpawnMultiplier = 1;
diffHar.waveTimeMultiplier = 0.1;

const diffErad = Diff0.valueOf("eradication");
diffErad.enemyHealthMultiplier = 16;
diffErad.enemySpawnMultiplier = 1;
diffErad.waveTimeMultiplier = 0.04;


// All campain sector
const campaignSectors = [97, 223, 166, 213, 164, 165, 86, 173, 170, 143, 219, 65, 75, 142, 169, 64, 204, 98, 145, 85, 271, 228, 41, 217, 266, 214, 95, 221, 99, 23];
const attackSectors = [0, 6, 13, 16, 19, 20, 24, 27, 30, 47, 55, 66, 67, 69, 76, 92, 94, 111, 116, 127, 133, 161, 162, 176, 180, 185, 191, 192, 197, 200, 207, 225, 230, 240, 242, 243, 244, 245, 246, 247, 248, 254, 259, 263, 265];
const attackEradSectors = [24, 30, 54, 55, 67, 162, 191, 254, 263, 264, 242, 243, 244, 245, 246, 247];

function setEnemyBase()
{
	let serpuloEnemyBaseInjection = Core.settings.getBool("serpuloEnemyBaseInjection", true);
	if (serpuloEnemyBaseInjection)
	{
		for (let i = 0; i < Planets.serpulo.sectors.size; i++)
		{
			if (i != 27 && !campaignSectors.includes(i))
			{
				let sector = Planets.serpulo.sectors.get(i);
				if (sector != null)
				{
					if (attackSectors.includes(i) || attackEradSectors.includes(i))
					{
						sector.threat = 0.75;
						if (attackEradSectors.includes(i))
						{
							sector.info.icon = "status-melting-ui";
						}
						else
						{
							sector.info.icon = "status-shocked-ui";
						}
					}
					else
					{
						sector.threat = 1.5;
						sector.generateEnemyBase = true;
					}
				}
			}
		}
	}
	else
	{
		for (let i = 0; i < Planets.serpulo.sectors.size; i++)
		{
			if (i != 27 && !campaignSectors.includes(i))
			{
				let sector = Planets.serpulo.sectors.get(i);
				if (sector != null)
				{
					if (attackSectors.includes(i) || attackEradSectors.includes(i))
					{
						if (attackEradSectors.includes(i))
						{
							sector.info.icon = "status-melting-ui";
						}
						else
						{
							sector.info.icon = "status-shocked-ui";
						}
					}
				}
			}
		}
	}
}

function setSetting(id)
{
	if (id == 1)
	{
		let healthMultCas = Core.settings.getInt("healthMultCas", 50);
		diffCas.enemyHealthMultiplier = 0.01 * healthMultCas;
	}
	if (id == 2)
	{
		let spawnMultCas = Core.settings.getInt("spawnMultCas", 50);
		diffCas.enemySpawnMultiplier = 0.01 * spawnMultCas;
	}
	if (id == 3)
	{
		let waveTimeMultCas = Core.settings.getInt("waveTimeMultCas", 50);
		diffCas.waveTimeMultiplier = 0.01 * waveTimeMultCas;
	}
}

Events.on(ClientLoadEvent, () => {
	const UISetGame = Vars.ui.settings.game;
	
	UISetGame.sliderPref("healthMultCas", 100, 50, 2000, 50, (value) => {
		setSetting(1);
		return value + "%";
	});
	UISetGame.sliderPref("spawnMultCas", 100, 50, 800, 50, (value) => {
		setSetting(2);
		return value + "%";
	});
	UISetGame.sliderPref("waveTimeMultCas", 100, 0, 100, 1, (value) => {
		setSetting(3);
		if (value == 0) {return "WARNING";}
		return value + "%";
	});
	
	UISetGame.checkPref("serpuloEnemyBaseInjection", true, (value) => {});
	
	setSetting(1);
	setSetting(2);
	setSetting(3);
	setEnemyBase();
});

Events.on(SectorCaptureEvent, () => {
	setEnemyBase()
});
