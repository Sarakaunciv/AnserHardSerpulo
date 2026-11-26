
const unitTier2E = 25;
const unitTier3E = 50;
const unitTier4E = 75;
const unitTier5E = 100;

const unitTier2U = 3;
const unitTier3U = 9;
const unitTier4U = 27;
const unitTier5U = 81;

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

function tinyUnitHitbox()
{
	UnitTypes.dagger.hitSize = 1;
	UnitTypes.mace.hitSize = 1;
	UnitTypes.fortress.hitSize = 1;
	UnitTypes.scepter.hitSize = 1;
	UnitTypes.reign.hitSize = 1;
	
	UnitTypes.crawler.hitSize = 1;
	UnitTypes.atrax.hitSize = 1;
	UnitTypes.spiroct.hitSize = 1;
	UnitTypes.arkyid.hitSize = 1;
	UnitTypes.toxopid.hitSize = 1;
	
	UnitTypes.nova.hitSize = 1;
	UnitTypes.pulsar.hitSize = 1;
	UnitTypes.quasar.hitSize = 1;
	UnitTypes.vela.hitSize = 1;
	UnitTypes.corvus.hitSize = 1;
	
	UnitTypes.flare.hitSize = 1;
	UnitTypes.horizon.hitSize = 1;
	UnitTypes.zenith.hitSize = 1;
	UnitTypes.antumbra.hitSize = 1;
	UnitTypes.eclipse.hitSize = 1;
	
	UnitTypes.risso.hitSize = 1;
	UnitTypes.minke.hitSize = 1;
	UnitTypes.bryde.hitSize = 1;
	UnitTypes.sei.hitSize = 1;
	UnitTypes.omura.hitSize = 1;
	
	UnitTypes.retusa.hitSize = 1;
	UnitTypes.oxynoe.hitSize = 1;
	UnitTypes.cyerce.hitSize = 1;
	UnitTypes.aegires.hitSize = 1;
	UnitTypes.navanax.hitSize = 1;
	
	UnitTypes.stell.hitSize = 1;
	UnitTypes.locus.hitSize = 1;
	UnitTypes.precept.hitSize = 1;
	UnitTypes.vanquish.hitSize = 1;
	UnitTypes.conquer.hitSize = 1;
	
	UnitTypes.elude.hitSize = 1;
	UnitTypes.avert.hitSize = 1;
	UnitTypes.obviate.hitSize = 1;
	UnitTypes.quell.hitSize = 1;
	UnitTypes.disrupt.hitSize = 1;
	
	UnitTypes.merui.hitSize = 1;
	UnitTypes.cleroi.hitSize = 1;
	UnitTypes.anthicus.hitSize = 1;
	UnitTypes.tecta.hitSize = 1;
	UnitTypes.collaris.hitSize = 1;
	
	UnitTypes.mono.hitSize = 1;
	UnitTypes.poly.hitSize = 1;
	UnitTypes.mega.hitSize = 1;
	UnitTypes.quad.hitSize = 1;
	UnitTypes.oct.hitSize = 1;
}

Events.on(ClientLoadEvent, () => {
	const UISetGame = Vars.ui.settings.game;
	
	UISetGame.checkPref("mergeEnemy", true, (value) => {});
	
	UISetGame.checkPref("tinyUnitHitbox", false, (value) => {});
	
	if (Core.settings.getBool("tinyUnitHitbox", false))
	{
		tinyUnitHitbox();
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
