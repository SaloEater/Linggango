ServerEvents.recipes(e => {
  e.remove({ id: "l2complements:craft/sculkium_ingot" });
  e.remove({ id: "l2complements:generated_tools/sculkium/craft/sculkium_helmet" });
  e.remove({ id: "l2complements:generated_tools/sculkium/craft/sculkium_chestplate" });
  e.remove({ id: "l2complements:generated_tools/sculkium/craft/sculkium_leggings" });
  e.remove({ id: "l2complements:generated_tools/sculkium/craft/sculkium_boots" });
  e.remove({ id: "toomanyrecipeviewers:/ars_nouveau/hardened_1"});
  e.remove({ id: "l2hostility:charm_of_looting_1"});
  e.remove({ id: "l2hostility:charm_of_looting_2"});
  e.remove({ id: "l2hostility:charm_of_looting_3"});
  e.remove({ id: "l2hostility:charm_of_looting_4"});
  e.remove({ id: "l2hostility:chaos_ingot"});
    e.remove({ id: "l2hostility:curse_of_sloth"});
    e.remove({ id: "l2hostility:curse_of_envy"});
    e.remove({ id: "l2hostility:ring_of_life"})
    e.remove({ id: "l2hostility:infinity_glove"})

  e.shaped("2x l2complements:sculkium_ingot", ["CBB", "ABB", "C  "], {
    A: "minecraft:netherite_ingot",
    B: "l2complements:warden_bone_shard",
    C: "deeperdarker:reinforced_echo_shard",
  });

  e.shaped("l2complements:sculkium_helmet", ["AAA", "ABA", "   "], {
    A: "l2complements:sculkium_ingot",
    B: "deeperdarker:warden_helmet",
  });

  e.shaped("l2complements:sculkium_chestplate", ["A A", "ABA", "AAA"], {
    A: "l2complements:sculkium_ingot",
    B: "deeperdarker:warden_chestplate",
  });

  e.shaped("l2complements:sculkium_leggings", ["AAA", "ABA", "A A"], {
    A: "l2complements:sculkium_ingot",
    B: "deeperdarker:warden_leggings",
  });

  e.shaped("l2complements:sculkium_boots", ["   ", "ABA", "A A"], {
    A: "l2complements:sculkium_ingot",
    B: "deeperdarker:warden_boots",
});

  e.shaped("l2hostility:charm_of_looting_1", [" A ", "ABA", " A "], {
    A: "armageddon_mod:gilded_plate",
    B: "armageddon_mod:emerald_totem",
});

e.shaped("l2hostility:charm_of_looting_2", ["BAB", "ACA", "BAB"], {
    A: "armageddon_mod:gilded_plate",
    B: "celestisynth:celestial_netherite_ingot",
    C: "minecraft:amethyst_block",
});

e.shaped("l2hostility:charm_of_looting_3", ["ACA", "BEB", "DDD"], {
    A: "l2complements:life_essence",
    B: "l2hostility:witch_droplet",
    C: "armageddon_mod:wanderers_fallen_shard",
    D: "composite_material:obsidian_steel_ingot",
    E: "l2hostility:chaos_ingot",
});

e.shaped("l2hostility:charm_of_looting_4", ["ABA", "CDC", "ABA"], {
    A: "l2complements:heirophant_green",
    B: "l2complements:blackstone_core",
    C: "l2hostility:miracle_block",
    D: "armageddon_mod:sigil_of_calamity",
});

e.shaped("l2hostility:chaos_ingot", ["ABG", "CDE", "IFH"], {
    A: "l2hostility:bottle_of_curse",
    B: "l2complements:captured_wind",
    C: "l2complements:soul_flame",
    D: "l2hostility:hostility_orb",
    E: "l2complements:hard_ice",
    F: "l2complements:explosion_shard",
    G: "l2complements:shulkerate_ingot",
    H: "l2hostility:witch_droplet",
    I: "l2complements:life_essence"
});

e.shaped("l2hostility:curse_of_sloth", ["FBF", "CDC", "GEG"], {
    B: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:vanishing_curse",lvl:1s}]}').weakNBT(),
    C: "l2hostility:bottle_of_sanity",
    D: "l2hostility:chaos_ingot",
    E: "l2complements:explosion_shard",
    F: "l2hostility:witch_droplet",
    G: "l2complements:life_essence"
});

e.shaped("l2hostility:curse_of_sloth", ["ABD", "EFE", "GCH"], {
    A: "minecraft:nether_star",
    B: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:looting",lvl:1s}]}').weakNBT(),
    C: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:silk_touch",lvl:1s}]}').weakNBT(),
    D: "armageddon_mod:wither_spine",
    E: "minecraft:ender_eye",
    F: "l2hostility:chaos_ingot",
    G: "brutality:greed",
    H: "brutality:envy",
});

e.shaped("l2hostility:infinity_glove", ["ABC", "DEF", "GHI"], {
    A: "terramity:nyxium_block",
    B: "kubejs:apocalyptium_block",
    C: "terramity:exodium_block",
    D: "terramity:reverium_block",
    E: "l2complements:eternium_block",
    F: "l2hostility:miracle_block",
    G: "l2hostility:killer_aura",
    H: "l2hostility:ragnarok",
    I: "l2hostility:dementor"
});


});
