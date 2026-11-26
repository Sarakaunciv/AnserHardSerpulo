
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
	UnitTypes.dagger.hitSize = 8;
	UnitTypes.mace.hitSize = 8;
	UnitTypes.fortress.hitSize = 8;
	UnitTypes.scepter.hitSize = 8;
	UnitTypes.reign.hitSize = 8;
	
	UnitTypes.crawler.hitSize = 8;
	UnitTypes.atrax.hitSize = 8;
	UnitTypes.spiroct.hitSize = 8;
	UnitTypes.arkyid.hitSize = 8;
	UnitTypes.toxopid.hitSize = 8;
	
	UnitTypes.nova.hitSize = 8;
	UnitTypes.pulsar.hitSize = 8;
	UnitTypes.quasar.hitSize = 8;
	UnitTypes.vela.hitSize = 8;
	UnitTypes.corvus.hitSize = 8;
	
	UnitTypes.flare.hitSize = 8;
	UnitTypes.horizon.hitSize = 8;
	UnitTypes.zenith.hitSize = 8;
	UnitTypes.antumbra.hitSize = 8;
	UnitTypes.eclipse.hitSize = 8;
	
	UnitTypes.risso.hitSize = 8;
	UnitTypes.minke.hitSize = 8;
	UnitTypes.bryde.hitSize = 8;
	UnitTypes.sei.hitSize = 8;
	UnitTypes.omura.hitSize = 8;
	
	UnitTypes.retusa.hitSize = 8;
	UnitTypes.oxynoe.hitSize = 8;
	UnitTypes.cyerce.hitSize = 8;
	UnitTypes.aegires.hitSize = 8;
	UnitTypes.navanax.hitSize = 8;
	
	UnitTypes.stell.hitSize = 8;
	UnitTypes.locus.hitSize = 8;
	UnitTypes.precept.hitSize = 8;
	UnitTypes.vanquish.hitSize = 8;
	UnitTypes.conquer.hitSize = 8;
	
	UnitTypes.elude.hitSize = 8;
	UnitTypes.avert.hitSize = 8;
	UnitTypes.obviate.hitSize = 8;
	UnitTypes.quell.hitSize = 8;
	UnitTypes.disrupt.hitSize = 8;
	
	UnitTypes.merui.hitSize = 8;
	UnitTypes.cleroi.hitSize = 8;
	UnitTypes.anthicus.hitSize = 8;
	UnitTypes.tecta.hitSize = 8;
	UnitTypes.collaris.hitSize = 8;
	
	UnitTypes.mono.hitSize = 8;
	UnitTypes.poly.hitSize = 8;
	UnitTypes.mega.hitSize = 8;
	UnitTypes.quad.hitSize = 8;
	UnitTypes.oct.hitSize = 8;
	
	UnitTypes.dagger.knockbackMultiplier = 1;
	UnitTypes.mace.knockbackMultiplier = 0.5;
	UnitTypes.fortress.knockbackMultiplier = 0.2;
	UnitTypes.scepter.knockbackMultiplier = 0.08;
	UnitTypes.reign.knockbackMultiplier = 0.02;
	
	UnitTypes.crawler.knockbackMultiplier = 1;
	UnitTypes.atrax.knockbackMultiplier = 0.5;
	UnitTypes.spiroct.knockbackMultiplier = 0.2;
	UnitTypes.arkyid.knockbackMultiplier = 0.08;
	UnitTypes.toxopid.knockbackMultiplier = 0.02;
	
	UnitTypes.nova.knockbackMultiplier = 1;
	UnitTypes.pulsar.knockbackMultiplier = 0.5;
	UnitTypes.quasar.knockbackMultiplier = 0.2;
	UnitTypes.vela.knockbackMultiplier = 0.08;
	UnitTypes.corvus.knockbackMultiplier = 0.02;
	
	UnitTypes.flare.knockbackMultiplier = 1;
	UnitTypes.horizon.knockbackMultiplier = 0.5;
	UnitTypes.zenith.knockbackMultiplier = 0.2;
	UnitTypes.antumbra.knockbackMultiplier = 0.08;
	UnitTypes.eclipse.knockbackMultiplier = 0.02;
	
	UnitTypes.risso.knockbackMultiplier = 1;
	UnitTypes.minke.knockbackMultiplier = 0.5;
	UnitTypes.bryde.knockbackMultiplier = 0.2;
	UnitTypes.sei.knockbackMultiplier = 0.08;
	UnitTypes.omura.knockbackMultiplier = 0.02;
	
	UnitTypes.retusa.knockbackMultiplier = 1;
	UnitTypes.oxynoe.knockbackMultiplier = 0.5;
	UnitTypes.cyerce.knockbackMultiplier = 0.2;
	UnitTypes.aegires.knockbackMultiplier = 0.08;
	UnitTypes.navanax.knockbackMultiplier = 0.02;
	
	UnitTypes.stell.knockbackMultiplier = 1;
	UnitTypes.locus.knockbackMultiplier = 0.5;
	UnitTypes.precept.knockbackMultiplier = 0.2;
	UnitTypes.vanquish.knockbackMultiplier = 0.08;
	UnitTypes.conquer.knockbackMultiplier = 0.02;
	
	UnitTypes.elude.knockbackMultiplier = 1;
	UnitTypes.avert.knockbackMultiplier = 0.5;
	UnitTypes.obviate.knockbackMultiplier = 0.2;
	UnitTypes.quell.knockbackMultiplier = 0.08;
	UnitTypes.disrupt.knockbackMultiplier = 0.02;
	
	UnitTypes.merui.knockbackMultiplier = 1;
	UnitTypes.cleroi.knockbackMultiplier = 0.5;
	UnitTypes.anthicus.knockbackMultiplier = 0.2;
	UnitTypes.tecta.knockbackMultiplier = 0.08;
	UnitTypes.collaris.knockbackMultiplier = 0.02;
	
	UnitTypes.mono.knockbackMultiplier = 1;
	UnitTypes.poly.knockbackMultiplier = 0.5;
	UnitTypes.mega.knockbackMultiplier = 0.2;
	UnitTypes.quad.knockbackMultiplier = 0.08;
	UnitTypes.oct.knockbackMultiplier = 0.02;
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
