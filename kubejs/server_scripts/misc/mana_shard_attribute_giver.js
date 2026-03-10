const ATTRS = {
  IRON: 'irons_spellbooks:spell_power',
  ARS:  'ars_nouveau:ars_nouveau.perk.spell_damage' 
};
const MOD_ID = 'kubejs:mana_tier_bonus'; 

function applyManaBuffs(player, tier) {

  player.removeAttribute(ATTRS.IRON, MOD_ID);
  player.removeAttribute(ATTRS.ARS, MOD_ID);

  let ironBonus = 0;
  let arsBonus = 0;

  if (tier == 1) { ironBonus = 3.0; arsBonus = 15.0; }
  if (tier == 2) { ironBonus = 5.0; arsBonus = 30.0; }
  if (tier == 3) { ironBonus = 8.0; arsBonus = 60.0; }

  if (tier > 0) {
    player.modifyAttribute(ATTRS.IRON, MOD_ID, ironBonus, 'addition');
    player.modifyAttribute(ATTRS.ARS,  MOD_ID, arsBonus,  'addition');
  }
}

ItemEvents.foodEaten(e => {
  let { player, server, item } = e;
  let serverData = server.persistentData;
  if (!serverData.manaTiers) serverData.manaTiers = {};

  let uuid = player.uuid.toString();
  let currentTier = serverData.manaTiers[uuid] || 0;

  if (item.id === "kubejs:fading_shard_of_compressed_mana") {
    if (currentTier >= 1) {
      player.tell("§cYou are already too powerful for this weak shard.");
      return;
    }
    serverData.manaTiers[uuid] = 1;
    applyManaBuffs(player, 1);
    player.tell("§4§lYour blood boils with raw mana..");
  }

  if (item.id === "kubejs:shard_of_compressed_mana") {
    if (currentTier >= 2) {
      player.tell("§cYou have already absorbed this level of power.");
      return;
    }
    serverData.manaTiers[uuid] = 2;
    applyManaBuffs(player, 2);
    player.tell("§c§lYour blood adapts, unifies with mana");
  }

  if (item.id === "kubejs:purified_shard_of_compressed_mana") {
    if (currentTier >= 3) {
      player.tell("§dYou have already reached the pinnacle of mana.");
      return;
    }
    serverData.manaTiers[uuid] = 3;
    applyManaBuffs(player, 3);
    player.tell("§c§lYou fully unlock your potential with magic.");
  }
});

const restoreStats = (e) => {
  let serverData = e.server.persistentData;
  if (!serverData?.manaTiers) return;

  let tier = serverData.manaTiers[e.player.uuid.toString()] || 0;
  if (tier > 0) {
    applyManaBuffs(e.player, tier);
  }
};

PlayerEvents.respawned(e => restoreStats(e));
PlayerEvents.loggedIn(e => restoreStats(e));