
const unitTier2E = 15;
const unitTier3E = 40;
const unitTier4E = 80;
const unitTier5E = 120;

const unitTier2U = 3;
const unitTier3U = 10;
const unitTier4U = 35;
const unitTier5U = 150;

var daggerU = 0;
function Fdagger(unit, U, enemy)
{
	daggerU += U;
	if (enemy < unitTier3E && daggerU >= unitTier2U)
	{
		const gameStateRules = Vars.state.rules;
		daggerU -= unitTier2U;
		UnitTypes.mace.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (enemy < unitTier4E && daggerU >= unitTier3U)
	{
		const gameStateRules = Vars.state.rules;
		daggerU -= unitTier3U;
		UnitTypes.fortress.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (enemy < unitTier5E && daggerU >= unitTier4U)
	{
		const gameStateRules = Vars.state.rules;
		daggerU -= unitTier4U;
		UnitTypes.scepter.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (daggerU >= unitTier5U)
	{
		const gameStateRules = Vars.state.rules;
		daggerU -= unitTier5U;
		UnitTypes.reign.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
}

var crawlerU = 0;
function Fcrawler(unit, U, enemy)
{
	crawlerU += U;
	if (enemy < unitTier3E && crawlerU >= unitTier2U)
	{
		const gameStateRules = Vars.state.rules;
		crawlerU -= unitTier2U;
		UnitTypes.atrax.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (enemy < unitTier4E && crawlerU >= unitTier3U)
	{
		const gameStateRules = Vars.state.rules;
		crawlerU -= unitTier3U;
		UnitTypes.spiroct.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (enemy < unitTier5E && crawlerU >= unitTier4U)
	{
		const gameStateRules = Vars.state.rules;
		crawlerU -= unitTier4U;
		UnitTypes.arkyid.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (crawlerU >= unitTier5U)
	{
		const gameStateRules = Vars.state.rules;
		crawlerU -= unitTier5U;
		UnitTypes.toxopid.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
}

var novaU = 0;
function Fnova(unit, U, enemy)
{
	novaU += U;
	if (enemy < unitTier3E && novaU >= unitTier2U)
	{
		const gameStateRules = Vars.state.rules;
		novaU -= unitTier2U;
		UnitTypes.pulsar.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (enemy < unitTier4E && novaU >= unitTier3U)
	{
		const gameStateRules = Vars.state.rules;
		novaU -= unitTier3U;
		UnitTypes.quasar.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (enemy < unitTier5E && novaU >= unitTier4U)
	{
		const gameStateRules = Vars.state.rules;
		novaU -= unitTier4U;
		UnitTypes.vela.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (novaU >= unitTier5U)
	{
		const gameStateRules = Vars.state.rules;
		novaU -= unitTier5U;
		UnitTypes.corvus.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
}

var flareU = 0;
function Fflare(unit, U, enemy)
{
	flareU += U;
	if (enemy < unitTier3E && flareU >= unitTier2U)
	{
		const gameStateRules = Vars.state.rules;
		flareU -= unitTier2U;
		UnitTypes.horizon.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (enemy < unitTier4E && flareU >= unitTier3U)
	{
		const gameStateRules = Vars.state.rules;
		flareU -= unitTier3U;
		UnitTypes.zenith.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (enemy < unitTier5E && flareU >= unitTier4U)
	{
		const gameStateRules = Vars.state.rules;
		flareU -= unitTier4U;
		UnitTypes.antumbra.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (flareU >= unitTier5U)
	{
		const gameStateRules = Vars.state.rules;
		flareU -= unitTier5U;
		UnitTypes.eclipse.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
}

var rissoU = 0;
function Frisso(unit, U, enemy)
{
	rissoU += U;
	if (enemy < unitTier3E && rissoU >= unitTier2U)
	{
		const gameStateRules = Vars.state.rules;
		rissoU -= unitTier2U;
		UnitTypes.minke.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (enemy < unitTier4E && rissoU >= unitTier3U)
	{
		const gameStateRules = Vars.state.rules;
		rissoU -= unitTier3U;
		UnitTypes.bryde.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (enemy < unitTier5E && rissoU >= unitTier4U)
	{
		const gameStateRules = Vars.state.rules;
		rissoU -= unitTier4U;
		UnitTypes.sei.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (rissoU >= unitTier5U)
	{
		const gameStateRules = Vars.state.rules;
		rissoU -= unitTier5U;
		UnitTypes.omura.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
}

var retusaU = 0;
function Fretusa(unit, U, enemy)
{
	retusaU += U;
	if (enemy < unitTier3E && retusaU >= unitTier2U)
	{
		const gameStateRules = Vars.state.rules;
		retusaU -= unitTier2U;
		UnitTypes.oxynoe.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (enemy < unitTier4E && retusaU >= unitTier3U)
	{
		const gameStateRules = Vars.state.rules;
		retusaU -= unitTier3U;
		UnitTypes.cyerce.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (enemy < unitTier5E && retusaU >= unitTier4U)
	{
		const gameStateRules = Vars.state.rules;
		retusaU -= unitTier4U;
		UnitTypes.aegires.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (retusaU >= unitTier5U)
	{
		const gameStateRules = Vars.state.rules;
		retusaU -= unitTier5U;
		UnitTypes.navanax.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
}

var stellU = 0;
function Fstell(unit, U, enemy)
{
	stellU += U;
	if (enemy < unitTier3E && stellU >= unitTier2U)
	{
		const gameStateRules = Vars.state.rules;
		stellU -= unitTier2U;
		UnitTypes.locus.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (enemy < unitTier4E && stellU >= unitTier3U)
	{
		const gameStateRules = Vars.state.rules;
		stellU -= unitTier3U;
		UnitTypes.precept.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (enemy < unitTier5E && stellU >= unitTier4U)
	{
		const gameStateRules = Vars.state.rules;
		stellU -= unitTier4U;
		UnitTypes.vanquish.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (stellU >= unitTier5U)
	{
		const gameStateRules = Vars.state.rules;
		stellU -= unitTier5U;
		UnitTypes.conquer.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
}

var eludeU = 0;
function Felude(unit, U, enemy)
{
	eludeU += U;
	if (enemy < unitTier3E && eludeU >= unitTier2U)
	{
		const gameStateRules = Vars.state.rules;
		eludeU -= unitTier2U;
		UnitTypes.avert.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (enemy < unitTier4E && eludeU >= unitTier3U)
	{
		const gameStateRules = Vars.state.rules;
		eludeU -= unitTier3U;
		UnitTypes.obviate.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (enemy < unitTier5E && eludeU >= unitTier4U)
	{
		const gameStateRules = Vars.state.rules;
		eludeU -= unitTier4U;
		UnitTypes.quell.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (eludeU >= unitTier5U)
	{
		const gameStateRules = Vars.state.rules;
		eludeU -= unitTier5U;
		UnitTypes.disrupt.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
}

var meruiU = 0;
function Fmerui(unit, U, enemy)
{
	meruiU += U;
	if (enemy < unitTier3E && meruiU >= unitTier2U)
	{
		const gameStateRules = Vars.state.rules;
		meruiU -= unitTier2U;
		UnitTypes.cleroi.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (enemy < unitTier4E && meruiU >= unitTier3U)
	{
		const gameStateRules = Vars.state.rules;
		meruiU -= unitTier3U;
		UnitTypes.anthicus.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (enemy < unitTier5E && meruiU >= unitTier4U)
	{
		const gameStateRules = Vars.state.rules;
		meruiU -= unitTier4U;
		UnitTypes.tecta.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
	else if (meruiU >= unitTier5U)
	{
		const gameStateRules = Vars.state.rules;
		meruiU -= unitTier5U;
		UnitTypes.collaris.spawn(gameStateRules.waveTeam, unit.x, unit.y);
	}
}

function resetCount()
{
	daggerU = 0;
	crawlerU = 0;
	novaU = 0;
	flareU = 0;
	rissoU = 0;
	retusaU = 0;
	stellU = 0;
	eludeU = 0;
	meruiU = 0;
}

function countUnit(unit, enemy)
{
	if (enemy < unitTier2E) return;
	if (unit.type.name == "dagger")
	{
		Fdagger(unit, 1, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "crawler")
	{
		Fcrawler(unit, 1, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "nova")
	{
		Fnova(unit, 1, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "flare")
	{
		Fflare(unit, 1, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "risso")
	{
		Frisso(unit, 1, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "retusa")
	{
		Fretusa(unit, 1, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "stell")
	{
		Fstell(unit, 1, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "elude")
	{
		Felude(unit, 1, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "merui")
	{
		Fmerui(unit, 1, enemy);
		unit.kill();
		return;
	}
	
	if (enemy < unitTier3E) return;
	if (unit.type.name == "mace")
	{
		Fdagger(unit, unitTier2U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "atrax")
	{
		Fcrawler(unit, unitTier2U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "pulsar")
	{
		Fnova(unit, unitTier2U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "horizon")
	{
		Fflare(unit, unitTier2U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "minke")
	{
		Frisso(unit, unitTier2U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "oxynoe")
	{
		Fretusa(unit, unitTier2U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "locus")
	{
		Fstell(unit, unitTier2U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "avert")
	{
		Felude(unit, unitTier2U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "cleroi")
	{
		Fmerui(unit, unitTier2U, enemy);
		unit.kill();
		return;
	}
	
	if (enemy < unitTier4E) return;
	if (unit.type.name == "fortress")
	{
		Fdagger(unit, unitTier3U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "spiroct")
	{
		Fcrawler(unit, unitTier3U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "quasar")
	{
		Fnova(unit, unitTier3U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "zenith")
	{
		Fflare(unit, unitTier3U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "bryde")
	{
		Frisso(unit, unitTier3U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "cyerce")
	{
		Fretusa(unit, unitTier3U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "precept")
	{
		Fstell(unit, unitTier3U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "obviate")
	{
		Felude(unit, unitTier3U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "anthicus")
	{
		Fmerui(unit, unitTier3U, enemy);
		unit.kill();
		return;
	}
	
	if (enemy < unitTier5E) return;
	if (unit.type.name == "scepter")
	{
		Fdagger(unit, unitTier4U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "arkyid")
	{
		Fcrawler(unit, unitTier4U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "vela")
	{
		Fnova(unit, unitTier4U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "antumbra")
	{
		Fflare(unit, unitTier4U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "sei")
	{
		Frisso(unit, unitTier4U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "aegires")
	{
		Fretusa(unit, unitTier4U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "vanquish")
	{
		Fstell(unit, unitTier4U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "quell")
	{
		Felude(unit, unitTier4U, enemy);
		unit.kill();
		return;
	}
	else if (unit.type.name == "tecta")
	{
		Fmerui(unit, unitTier4U, enemy);
		unit.kill();
		return;
	}
}

function noUnitCollision()
{
	UnitTypes.dagger.physics = false;
	UnitTypes.mace.physics = false;
	UnitTypes.fortress.physics = false;
	UnitTypes.scepter.physics = false;
	UnitTypes.reign.physics = false;
	
	UnitTypes.crawler.physics = false;
	UnitTypes.atrax.physics = false;
	UnitTypes.spiroct.physics = false;
	UnitTypes.arkyid.physics = false;
	UnitTypes.toxopid.physics = false;
	
	UnitTypes.nova.physics = false;
	UnitTypes.pulsar.physics = false;
	UnitTypes.quasar.physics = false;
	UnitTypes.vela.physics = false;
	UnitTypes.corvus.physics = false;
	
	UnitTypes.flare.physics = false;
	UnitTypes.horizon.physics = false;
	UnitTypes.zenith.physics = false;
	UnitTypes.antumbra.physics = false;
	UnitTypes.eclipse.physics = false;
	
	UnitTypes.risso.physics = false;
	UnitTypes.minke.physics = false;
	UnitTypes.bryde.physics = false;
	UnitTypes.sei.physics = false;
	UnitTypes.omura.physics = false;
	
	UnitTypes.retusa.physics = false;
	UnitTypes.oxynoe.physics = false;
	UnitTypes.cyerce.physics = false;
	UnitTypes.aegires.physics = false;
	UnitTypes.navanax.physics = false;
	
	UnitTypes.stell.physics = false;
	UnitTypes.locus.physics = false;
	UnitTypes.precept.physics = false;
	UnitTypes.vanquish.physics = false;
	UnitTypes.conquer.physics = false;
	
	UnitTypes.elude.physics = false;
	UnitTypes.avert.physics = false;
	UnitTypes.obviate.physics = false;
	UnitTypes.quell.physics = false;
	UnitTypes.disrupt.physics = false;
	
	UnitTypes.merui.physics = false;
	UnitTypes.cleroi.physics = false;
	UnitTypes.anthicus.physics = false;
	UnitTypes.tecta.physics = false;
	UnitTypes.collaris.physics = false;
	
	UnitTypes.mono.physics = false;
	UnitTypes.poly.physics = false;
	UnitTypes.mega.physics = false;
	UnitTypes.quad.physics = false;
	UnitTypes.oct.physics = false;
}

Events.on(ClientLoadEvent, () => {
	const UISetGame = Vars.ui.settings.game;
	
	UISetGame.checkPref("mergeEnemy", true, (value) => {});
	
	UISetGame.checkPref("noUnitCollision", true, (value) => {});
	
	if (Core.settings.getBool("noUnitCollision", true))
	{
		noUnitCollision();
	}
});

Events.on(UnitUnloadEvent, event => {
	if (Core.settings.getBool("mergeEnemy", true))
	{
		const gameStateRules = Vars.state.rules;
		if (event.unit.team == gameStateRules.waveTeam)
		{
			countUnit(event.unit, Vars.state.enemies);
		}
	}
});

Events.on(UnitSpawnEvent, event => {
	if (Core.settings.getBool("mergeEnemy", true))
	{
		const gameStateRules = Vars.state.rules;
		if (event.unit.team == gameStateRules.waveTeam)
		{
			countUnit(event.unit, Vars.state.enemies);
		}
	}
});

Events.on(SectorCaptureEvent, () => {
	resetCount();
});

Events.on(RulesLoadEvent, () => {
	resetCount();
});
