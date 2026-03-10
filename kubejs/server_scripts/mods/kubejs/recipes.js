ServerEvents.recipes(e => {
  e.shapeless("kubejs:blazerod_block", "9x minecraft:blaze_rod");

  e.shaped("kubejs:broken_cube_piece_1", ["ABC", "DEF", "GBH"], {
    A: "bloodmagic:basemonstersoul_steadfast",
    B: "goety:dark_ingot",
    C: "enigmaticlegacy:angel_blessing",
    D: "armageddon_mod:shadowed_ingot",
    E: "enigmaticaddons:etherium_core",
    F: "enigmaticlegacy:eye_of_nebula",
    G: "bloodmagic:basemonstersoul_destructive",
    H: "enigmaticlegacy:void_pearl",
  });

  e.shaped("kubejs:broken_cube_piece_2", ["ABC", "DEF", "GBH"], {
    A: "enigmaticlegacy:golem_heart",
    B: "goety:dark_ingot",
    C: "bloodmagic:basemonstersoul_corrosive",
    D: "enigmaticlegacy:ocean_stone",
    E: "enigmaticaddons:etherium_core",
    F: "armageddon_mod:shadowed_ingot",
    G: "enigmaticlegacy:blazing_core",
    H: "bloodmagic:basemonstersoul",
  });
});
