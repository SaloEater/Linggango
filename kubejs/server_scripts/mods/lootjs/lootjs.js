LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:ender_dragon")
        .addLoot("minecraft:dragon_egg")

    event.addEntityLootModifier("minecraft:enderman")
        .randomChance(0.01)
        .addLoot("endrem:corrupted_eye");
    event.addEntityLootModifier("minecraft:enderman")
        .randomChance(0.01)
        .addLoot("endrem:black_eye");
    event.addEntityLootModifier("minecraft:enderman")
        .randomChance(0.01)
        .addLoot("endrem:lost_eye");
    event.addEntityLootModifier("minecraft:enderman")
        .randomChance(0.01)
        .addLoot("endrem:cold_eye");
    event.addEntityLootModifier("minecraft:enderman")
        .randomChance(0.01)
        .addLoot("endrem:cold_eye");
    event.addEntityLootModifier("minecraft:enderman")
        .randomChance(0.01)
        .addLoot("endrem:old_eye");
    event.addEntityLootModifier("minecraft:enderman")
        .randomChance(0.01)
        .addLoot("endrem:rogue_eye");
    event.addEntityLootModifier("minecraft:enderman")
        .randomChance(0.01)
        .addLoot("endrem:magical_eye");
    
    event.addEntityLootModifier("armageddon_mod:the_iron_colossus")
        .randomChance(0.15)
        .addLoot("meetyourfight:fossil_bait");

    event.addEntityLootModifier("armageddon_mod:the_iron_colossus")
        .randomChance(0.15)
        .addLoot("mowzies_cataclysm:wrought_eye");
    
    event.addEntityLootModifier("armageddon_mod:the_gobelin_lord")
        .randomChance(0.05)
        .addLoot("artifacts:golden_hook");
    
    event.addEntityLootModifier("armageddon_mod:the_gobelin_lord")
        .randomChance(0.15)
        .addLoot("mynethersdelight:golden_egg");

    event.addEntityLootModifier("armageddon_mod:arion_tyrant_of_the_emerald_wrath_soldat")   
        .randomChance(0.10)
        .addLoot("artifacts:lucky_scarf");

    event.addEntityLootModifier("armageddon_mod:arion_tyrant_of_the_emerald_wrath_soldat")
        .randomChance(0.10)
        .addLoot("undergarden:catalyst");

    event.addEntityLootModifier("terramity:gatmancer")
        .randomChance(0.005)
        .addLoot("terramity:requiem");

    event.addEntityLootModifier("terramity:conjurling")
        .randomChance(0.01)
        .addLoot("terramity:ruby");

    event.addEntityLootModifier("cataclysm:maledictus")
        .randomChance(0.5)
        .addLoot("brutality:frostmourne");

    event.addEntityLootModifier("cataclysm:ignis")
        .randomChance(0.9)
        .addLoot("lethality:blighted_cleaver");

    event.addEntityLootModifier("block_factorys_bosses:underworld_knight")
        .addLoot("goety_revelation:quietus_star");

    event.addEntityLootModifier("block_factorys_bosses:underworld_knight")
        .addLoot("kubejs:fartinium_ingot");

    event.addBlockLootModifier("minecraft:dirt") 
        .randomChance(0.00000000000000001)
        .addLoot("kubejs:linggangoonium_ingot");

    event.addBlockLootModifier("minecraft:wither")
        .randomChance(0.5)
        .addLoot("minecraft:nether_star");

});