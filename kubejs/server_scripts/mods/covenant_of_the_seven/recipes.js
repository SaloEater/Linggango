ServerEvents.recipes(e => {

  e.remove({ id: "covenant_of_the_seven:false_salvation" });
  
  e.shaped("covenant_of_the_seven:virtue_ring", [" A ", "ABA", " C "], {
    A: "create:brass_ingot",
    B: "forbidden_arcanus:divine_pact",
    C: "goety:soul_emerald",
  });
 
});
