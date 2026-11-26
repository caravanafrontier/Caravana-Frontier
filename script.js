var jugadores = [
   { nombre: "Mark Evans", equipo: "Raimon", posicion: "Portero", elemento: "Tierra", foto: "mark.webp", logoEquipo: "logo_raimon.webp", logoPosicion: "PR.webp", logoElemento: "Tierra.webp" },
    { nombre: "Axel Blaze", equipo: "Raimon", posicion: "Delantero", elemento: "Fuego", foto: "axel.webp", logoEquipo: "logo_raimon.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp" },
    { nombre: "Jude Sharp", equipo: "Royal Academy", posicion: "Centrocampista", elemento: "Viento", foto: "jude.webp", logoEquipo: "logo_royal.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Nathan Swift", equipo: "Raimon", posicion: "Defensa", elemento: "Viento", foto: "nathan.webp", logoEquipo: "logo_raimon.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp" },
    { nombre: "Jack Wallside", equipo: "Raimon", posicion: "Defensa", elemento: "Tierra", foto: "jack.webp", logoEquipo: "logo_raimon.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Shawn Froste", equipo: "Alpino", posicion: "Delantero", elemento: "Viento", foto: "shawn.webp", logoEquipo: "logo_alpino.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp" },
    { nombre: "Byron Love", equipo: "Zeus", posicion: "Delantero", elemento: "Bosque", foto: "byron.webp", logoEquipo: "logo_zeus.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp" },
     { nombre: "Xene", equipo: "Génesis", posicion: "Delantero", elemento: "Fuego", foto: "xene.webp", logoEquipo: "logo_genesis.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "David Samford", equipo: "Royal Academy", posicion: "Delantero", elemento: "Bosque", foto: "david.webp", logoEquipo: "logo_royal.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp" },
    { nombre: "Joseph King", equipo: "Royal Academy", posicion: "Portero", elemento: "Fuego", foto: "joseph.webp", logoEquipo: "logo_royal.webp", logoPosicion: "PR.webp", logoElemento: "Fuego.webp" },
    { nombre: "Darren LaChance", equipo: "Fauxshore", posicion: "Portero", elemento: "Bosque", foto: "darren.webp", logoEquipo: "logo_fauxshore.webp", logoPosicion: "PR.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Hurley Kane", equipo: "Mary Times", posicion: "Defensa", elemento: "Viento", foto: "hurley.webp", logoEquipo: "logo_marytimes.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Xavier Foster", equipo: "Inazuma Japón", posicion: "Delantero", elemento: "Fuego", foto: "xavier.webp", logoEquipo: "logo_inazumajapon.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp", saga: "IE3", logoSaga: "saga_ie3.webp" },
    { nombre: "Jordan Greenway", equipo: "Inazuma Japón", posicion: "Centrocampista", elemento: "Bosque", foto: "jordan.webp", logoEquipo: "logo_inazumajapon.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE3", logoSaga: "saga_ie3.webp" },
    { nombre: "Kevin Dragonfly", equipo: "Raimon", posicion: "Delantero", elemento: "Bosque", foto: "kevin.webp", logoEquipo: "logo_raimon.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp" },
    { nombre: "Tod Ironside", equipo: "Raimon", posicion: "Defensa", elemento: "Fuego", foto: "tod.webp", logoEquipo: "logo_raimon.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp" },
    { nombre: "Timmy Saunders", equipo: "Raimon", posicion: "Centrocampista", elemento: "Bosque", foto: "timmy.webp", logoEquipo: "logo_raimon.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp" },
    { nombre: "Sam Kincaid", equipo: "Raimon", posicion: "Centrocampista", elemento: "Fuego", foto: "sam.webp", logoEquipo: "logo_raimon.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp" },
    { nombre: "Maxwell Carson", equipo: "Raimon", posicion: "Centrocampista", elemento: "Viento", foto: "max.webp", logoEquipo: "logo_raimon.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Steve Grim", equipo: "Raimon", posicion: "Centrocampista", elemento: "Viento", foto: "steve.webp", logoEquipo: "logo_raimon.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Jim Wraith", equipo: "Raimon", posicion: "Defensa", elemento: "Bosque", foto: "jim.webp", logoEquipo: "logo_raimon.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Bobby Shearer", equipo: "Raimon", posicion: "Defensa", elemento: "Bosque", foto: "bobby.webp", logoEquipo: "logo_raimon.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Erik Eagle", equipo: "Raimon", posicion: "Centrocampista", elemento: "Bosque", foto: "erik.webp", logoEquipo: "logo_raimon.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp" },
     { nombre: "Janus", equipo: "Tormenta de Géminis", posicion: "Centrocampista", elemento: "Bosque", foto: "janus.webp", logoEquipo: "logo_geminis.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Dvalin", equipo: "Épsilon", posicion: "Portero", elemento: "Fuego", foto: "dvalin.webp", logoEquipo: "logo_epsilon.webp", logoPosicion: "PR.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Bellatrix", equipo: "Génesis", posicion: "Centrocampista", elemento: "Viento", foto: "bellatrix.webp", logoEquipo: "logo_genesis.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Torch", equipo: "Prominence", posicion: "Delantero", elemento: "Fuego", foto: "torch.webp", logoEquipo: "logo_prominence.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Gazelle", equipo: "Polvo de Diamantes", posicion: "Delantero", elemento: "Viento", foto: "gazelle.webp", logoEquipo: "logo_diamantes.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Paolo Bianchi", equipo: "Orfeo", posicion: "Delantero", elemento: "Bosque", foto: "paolo.webp", logoEquipo: "logo_orfeo.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp", saga: "IE3", logoSaga: "saga_ie3.webp" },
    { nombre: "Hector Helio", equipo: "The Little Giants", posicion: "Portero", elemento: "Tierra", foto: "hector.webp", logoEquipo: "logo_giants.webp", logoPosicion: "PR.webp", logoElemento: "Tierra.webp", saga: "IE3", logoSaga: "saga_ie3.webp" },
    { nombre: "Edgar Partinus", equipo: "Los Emperadores", posicion: "Delantero", elemento: "Bosque", foto: "edgar.webp", logoEquipo: "logo_emperadores.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp", saga: "IE3", logoSaga: "saga_ie3.webp" },
    { nombre: "Lars Luceafăr", equipo: "El Ogro", posicion: "Portero", elemento: "Tierra", foto: "luceafar.webp", logoEquipo: "logo_ogro.webp", logoPosicion: "PR.webp", logoElemento: "Tierra.webp" },
    { nombre: "Bump Trungus", equipo: "El Ogro", posicion: "Defensa", elemento: "Tierra", foto: "trungus_b.webp", logoEquipo: "logo_ogro.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Lump Trungus", equipo: "El Ogro", posicion: "Defensa", elemento: "Tierra", foto: "trungus_l.webp", logoEquipo: "logo_ogro.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Radd Ischer", equipo: "El Ogro", posicion: "Defensa", elemento: "Tierra", foto: "ischer.webp", logoEquipo: "logo_ogro.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Jynx Jenkins", equipo: "El Ogro", posicion: "Defensa", elemento: "Bosque", foto: "jenkins.webp", logoEquipo: "logo_ogro.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Oni Triumvir", equipo: "El Ogro", posicion: "Centrocampista", elemento: "Tierra", foto: "triumvir.webp", logoEquipo: "logo_ogro.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp" },
    { nombre: "Drachen Gunther", equipo: "El Ogro", posicion: "Centrocampista", elemento: "Bosque", foto: "gunther.webp", logoEquipo: "logo_ogro.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp" },
    { nombre: "Ichabod Stark", equipo: "El Ogro", posicion: "Centrocampista", elemento: "Viento", foto: "stark.webp", logoEquipo: "logo_ogro.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Escavan Malice", equipo: "El Ogro", posicion: "Delantero", elemento: "Viento", foto: "malice.webp", logoEquipo: "logo_ogro.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp" },
    { nombre: "Bash Lancer", equipo: "El Ogro", posicion: "Delantero", elemento: "Bosque", foto: "lancer.webp", logoEquipo: "logo_ogro.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp" },
    { nombre: "Mystral Callous", equipo: "El Ogro", posicion: "Delantero", elemento: "Bosque", foto: "callous.webp", logoEquipo: "logo_ogro.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp" },
    { nombre: "Seymour Hillman", equipo: "Inazuma Eleven (Veteranos)", posicion: "Portero", elemento: "Tierra", foto: "hillman_j.webp", logoEquipo: "logo_inazuma_original.webp", logoPosicion: "PR.webp", logoElemento: "Tierra.webp" },
    { nombre: "Charles Island", equipo: "Inazuma Eleven (Veteranos)", posicion: "Defensa", elemento: "Bosque", foto: "island.webp", logoEquipo: "logo_inazuma_original.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Garret Hairtown", equipo: "Inazuma Eleven (Veteranos)", posicion: "Defensa", elemento: "Viento", foto: "hairtown.webp", logoEquipo: "logo_inazuma_original.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp" },
    { nombre: "Arthur Sweet", equipo: "Inazuma Eleven (Veteranos)", posicion: "Defensa", elemento: "Fuego", foto: "sweet.webp", logoEquipo: "logo_inazuma_original.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp" },
    { nombre: "Peter Mildred", equipo: "Inazuma Eleven (Veteranos)", posicion: "Centrocampista", elemento: "Bosque", foto: "mildred.webp", logoEquipo: "logo_inazuma_original.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp" },
    { nombre: "Josh Nathaniel", equipo: "Inazuma Eleven (Veteranos)", posicion: "Centrocampista", elemento: "Bosque", foto: "nathaniel.webp", logoEquipo: "logo_inazuma_original.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp" },
    { nombre: "Edward Gladstone", equipo: "Inazuma Eleven (Veteranos)", posicion: "Centrocampista", elemento: "Fuego", foto: "gladstone.webp", logoEquipo: "logo_inazuma_original.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp" },
    { nombre: "Tyler Thomas", equipo: "Inazuma Eleven (Veteranos)", posicion: "Centrocampista", elemento: "Viento", foto: "thomas_t.webp", logoEquipo: "logo_inazuma_original.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Joseph Yosemite", equipo: "Inazuma Eleven (Veteranos)", posicion: "Delantero", elemento: "Tierra", foto: "yosemite.webp", logoEquipo: "logo_inazuma_original.webp", logoPosicion: "DL.webp", logoElemento: "Tierra.webp" },
    { nombre: "Ian Suffolk", equipo: "Inazuma Eleven (Veteranos)", posicion: "Centrocampista", elemento: "Tierra", foto: "suffolk.webp", logoEquipo: "logo_inazuma_original.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp" },
    { nombre: "Constant Builder", equipo: "Inazuma Eleven (Veteranos)", posicion: "Delantero", elemento: "Fuego", foto: "builder.webp", logoEquipo: "logo_inazuma_original.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp" },
    { nombre: "Ted Poe", equipo: "Inazuma Eleven (Veteranos)", posicion: "Delantero", elemento: "Viento", foto: "poe.webp", logoEquipo: "logo_inazuma_original.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp" },
    { nombre: "Marshall Heart", equipo: "Inazuma Eleven (Veteranos)", posicion: "Delantero", elemento: "Viento", foto: "heart.webp", logoEquipo: "logo_inazuma_original.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp" },
    { nombre: "Dom Foreman", equipo: "Inazuma Eleven (Veteranos)", posicion: "Centrocampista", elemento: "Fuego", foto: "foreman.webp", logoEquipo: "logo_inazuma_original.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp" },
    { nombre: "Slot MacHines", equipo: "Inazuma Eleven (Veteranos)", posicion: "Defensa", elemento: "Bosque", foto: "machines.webp", logoEquipo: "logo_inazuma_original.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Bill Steakspear", equipo: "Inazuma Eleven (Veteranos)", posicion: "Defensa", elemento: "Tierra", foto: "steakspear.webp", logoEquipo: "logo_inazuma_original.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Herman Muller", equipo: "Kids FC", posicion: "Portero", elemento: "Viento", foto: "muller.webp", logoEquipo: "logo_kids_fc.webp", logoPosicion: "PR.webp", logoElemento: "Aire.webp" },
    { nombre: "Keth Claus", equipo: "Kids FC", posicion: "Defensa", elemento: "Tierra", foto: "claus.webp", logoEquipo: "logo_kids_fc.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Robert Silver", equipo: "Kids FC", posicion: "Defensa", elemento: "Viento", foto: "silver.webp", logoEquipo: "logo_kids_fc.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp" },
    { nombre: "Izzy Island", equipo: "Kids FC", posicion: "Defensa", elemento: "Tierra", foto: "izzy.webp", logoEquipo: "logo_kids_fc.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Sothern Newman", equipo: "Kids FC", posicion: "Defensa", elemento: "Fuego", foto: "newman.webp", logoEquipo: "logo_kids_fc.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp" },
    { nombre: "Irwin Hall", equipo: "Kids FC", posicion: "Centrocampista", elemento: "Bosque", foto: "hall.webp", logoEquipo: "logo_kids_fc.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp" },
    { nombre: "Taylor Higgins", equipo: "Kids FC", posicion: "Centrocampista", elemento: "Bosque", foto: "higgins.webp", logoEquipo: "logo_kids_fc.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp" },
    { nombre: "Jamie Cool", equipo: "Kids FC", posicion: "Centrocampista", elemento: "Viento", foto: "cool.webp", logoEquipo: "logo_kids_fc.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Hans Randall", equipo: "Kids FC", posicion: "Delantero", elemento: "Tierra", foto: "randall.webp", logoEquipo: "logo_kids_fc.webp", logoPosicion: "DL.webp", logoElemento: "Tierra.webp" },
    { nombre: "Michael Riverside", equipo: "Kids FC", posicion: "Centrocampista", elemento: "Bosque", foto: "riverside.webp", logoEquipo: "logo_kids_fc.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp" },
    { nombre: "Maddie Moonlight", equipo: "Kids FC", posicion: "Delantero", elemento: "Fuego", foto: "maddie.webp", logoEquipo: "logo_kids_fc.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp" },
    { nombre: "Bart Grantham", equipo: "Kids FC", posicion: "Defensa", elemento: "Tierra", foto: "grantham.webp", logoEquipo: "logo_kids_fc.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Karl Blue", equipo: "Kids FC", posicion: "Centrocampista", elemento: "Viento", foto: "karl.webp", logoEquipo: "logo_kids_fc.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Theakston Plank", equipo: "Kids FC", posicion: "Delantero", elemento: "Viento", foto: "plank.webp", logoEquipo: "logo_kids_fc.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp" },
    { nombre: "Ken Cake", equipo: "Kids FC", posicion: "Delantero", elemento: "Bosque", foto: "cake.webp", logoEquipo: "logo_kids_fc.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp" },
    { nombre: "Mitch Grumble", equipo: "Kids FC", posicion: "Centrocampista", elemento: "Fuego", foto: "grumble.webp", logoEquipo: "logo_kids_fc.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp" },    
    { nombre: "Thomas Feldt", equipo: "Instituto Brain", posicion: "Portero", elemento: "Bosque", foto: "feldt.webp", logoEquipo: "logo_brain.webp", logoPosicion: "PR.webp", logoElemento: "Bosque.webp" },
    { nombre: "Harry Leading", equipo: "Instituto Brain", posicion: "Defensa", elemento: "Bosque", foto: "leading.webp", logoEquipo: "logo_brain.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Terry Stronger", equipo: "Instituto Brain", posicion: "Defensa", elemento: "Tierra", foto: "stronger.webp", logoEquipo: "logo_brain.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Philip Marvel", equipo: "Instituto Brain", posicion: "Defensa", elemento: "Viento", foto: "marvel.webp", logoEquipo: "logo_brain.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp" },
    { nombre: "Noel Good", equipo: "Instituto Brain", posicion: "Defensa", elemento: "Bosque", foto: "good.webp", logoEquipo: "logo_brain.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Tyron Rock", equipo: "Instituto Brain", posicion: "Centrocampista", elemento: "Tierra", foto: "rock.webp", logoEquipo: "logo_brain.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp" },
    { nombre: "Francis Tell", equipo: "Instituto Brain", posicion: "Centrocampista", elemento: "Viento", foto: "tell.webp", logoEquipo: "logo_brain.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Samuel Buster", equipo: "Instituto Brain", posicion: "Centrocampista", elemento: "Fuego", foto: "buster.webp", logoEquipo: "logo_brain.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp" },
    { nombre: "Jonathan Seller", equipo: "Instituto Brain", posicion: "Delantero", elemento: "Viento", foto: "seller.webp", logoEquipo: "logo_brain.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp" },
    { nombre: "Victor Kind", equipo: "Instituto Brain", posicion: "Delantero", elemento: "Fuego", foto: "kind.webp", logoEquipo: "logo_brain.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp" },
    { nombre: "Neil Turner", equipo: "Instituto Brain", posicion: "Delantero", elemento: "Fuego", foto: "turner.webp", logoEquipo: "logo_brain.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp" },
    { nombre: "Reg Underwood", equipo: "Instituto Brain", posicion: "Portero", elemento: "Fuego", foto: "underwood.webp", logoEquipo: "logo_brain.webp", logoPosicion: "PR.webp", logoElemento: "Fuego.webp" },
    { nombre: "Patrick Stiller", equipo: "Instituto Brain", posicion: "Defensa", elemento: "Tierra", foto: "stiller.webp", logoEquipo: "logo_brain.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Charles Oughtry", equipo: "Instituto Brain", posicion: "Centrocampista", elemento: "Viento", foto: "oughtry.webp", logoEquipo: "logo_brain.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Clive Mooney", equipo: "Instituto Brain", posicion: "Delantero", elemento: "Bosque", foto: "mooney.webp", logoEquipo: "logo_brain.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp" },
    { nombre: "Neil Waters", equipo: "Instituto Brain", posicion: "Delantero", elemento: "Viento", foto: "waters.webp", logoEquipo: "logo_brain.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp" },
    { nombre: "Albert Green", equipo: "Instituto Farm", posicion: "Portero", elemento: "Tierra", foto: "green.webp", logoEquipo: "logo_farm.webp", logoPosicion: "PR.webp", logoElemento: "Tierra.webp" },
    { nombre: "Seward Hayseed", equipo: "Instituto Farm", posicion: "Defensa", elemento: "Tierra", foto: "hayseed.webp", logoEquipo: "logo_farm.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Kent Work", equipo: "Instituto Farm", posicion: "Defensa", elemento: "Bosque", foto: "work.webp", logoEquipo: "logo_farm.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Mark Hillvalley", equipo: "Instituto Farm", posicion: "Defensa", elemento: "Tierra", foto: "hillvalley.webp", logoEquipo: "logo_farm.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Herb Sherman", equipo: "Instituto Farm", posicion: "Defensa", elemento: "Bosque", foto: "sherman.webp", logoEquipo: "logo_farm.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Joe Small", equipo: "Instituto Farm", posicion: "Centrocampista", elemento: "Viento", foto: "small.webp", logoEquipo: "logo_farm.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Ike Steiner", equipo: "Instituto Farm", posicion: "Centrocampista", elemento: "Tierra", foto: "steiner.webp", logoEquipo: "logo_farm.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp" },
    { nombre: "Orville Newman", equipo: "Instituto Farm", posicion: "Centrocampista", elemento: "Fuego", foto: "newman_o.webp", logoEquipo: "logo_farm.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp" },
    { nombre: "Tom Walters", equipo: "Instituto Farm", posicion: "Delantero", elemento: "Tierra", foto: "walters.webp", logoEquipo: "logo_farm.webp", logoPosicion: "DL.webp", logoElemento: "Tierra.webp" },
    { nombre: "Daniel Dawson", equipo: "Instituto Farm", posicion: "Delantero", elemento: "Bosque", foto: "dawson.webp", logoEquipo: "logo_farm.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp" },
    { nombre: "Stuart Racoonfur", equipo: "Instituto Farm", posicion: "Delantero", elemento: "Fuego", foto: "racoonfur.webp", logoEquipo: "logo_farm.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp" },
    { nombre: "Lorne Mower", equipo: "Instituto Farm", posicion: "Portero", elemento: "Bosque", foto: "mower.webp", logoEquipo: "logo_farm.webp", logoPosicion: "PR.webp", logoElemento: "Bosque.webp" },
    { nombre: "Homer Grower", equipo: "Instituto Farm", posicion: "Defensa", elemento: "Viento", foto: "grower.webp", logoEquipo: "logo_farm.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp" },
    { nombre: "Rolf Howells", equipo: "Instituto Farm", posicion: "Centrocampista", elemento: "Bosque", foto: "howells.webp", logoEquipo: "logo_farm.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp" },
    { nombre: "Luke Lively", equipo: "Instituto Farm", posicion: "Delantero", elemento: "Viento", foto: "lively.webp", logoEquipo: "logo_farm.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp" },
    { nombre: "Ben Nevis", equipo: "Instituto Farm", posicion: "Delantero", elemento: "Tierra", foto: "nevis.webp", logoEquipo: "logo_farm.webp", logoPosicion: "DL.webp", logoElemento: "Tierra.webp" },
    { nombre: "John Neville", equipo: "Instituto Kirkwood", posicion: "Portero", elemento: "Bosque", foto: "neville.webp", logoEquipo: "logo_kirkwood.webp", logoPosicion: "PR.webp", logoElemento: "Bosque.webp" },
    { nombre: "Malcolm Night", equipo: "Instituto Kirkwood", posicion: "Defensa", elemento: "Fuego", foto: "malcolm.webp", logoEquipo: "logo_kirkwood.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp" },
    { nombre: "Alfred Meenan", equipo: "Instituto Kirkwood", posicion: "Defensa", elemento: "Tierra", foto: "meenan.webp", logoEquipo: "logo_kirkwood.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Dan Mirthful", equipo: "Instituto Kirkwood", posicion: "Defensa", elemento: "Viento", foto: "mirthful.webp", logoEquipo: "logo_kirkwood.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp" },
    { nombre: "Ricky Clover", equipo: "Instituto Kirkwood", posicion: "Defensa", elemento: "Bosque", foto: "clover.webp", logoEquipo: "logo_kirkwood.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Toby Damian", equipo: "Instituto Kirkwood", posicion: "Centrocampista", elemento: "Tierra", foto: "damian.webp", logoEquipo: "logo_kirkwood.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp" },
    { nombre: "York Nashmith", equipo: "Instituto Kirkwood", posicion: "Centrocampista", elemento: "Bosque", foto: "nashmith.webp", logoEquipo: "logo_kirkwood.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp" },
    { nombre: "Zachary Moore", equipo: "Instituto Kirkwood", posicion: "Centrocampista", elemento: "Viento", foto: "moore.webp", logoEquipo: "logo_kirkwood.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Marvin Murdock", equipo: "Instituto Kirkwood", posicion: "Delantero", elemento: "Fuego", foto: "marvin.webp", logoEquipo: "logo_kirkwood.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp" },
    { nombre: "Thomas Murdock", equipo: "Instituto Kirkwood", posicion: "Delantero", elemento: "Fuego", foto: "thomas_m.webp", logoEquipo: "logo_kirkwood.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp" },
    { nombre: "Tyler Murdock", equipo: "Instituto Kirkwood", posicion: "Delantero", elemento: "Fuego", foto: "tyler.webp", logoEquipo: "logo_kirkwood.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp" },
    { nombre: "Simon Calier", equipo: "Instituto Kirkwood", posicion: "Portero", elemento: "Fuego", foto: "calier.webp", logoEquipo: "logo_kirkwood.webp", logoPosicion: "PR.webp", logoElemento: "Fuego.webp" },
    { nombre: "Brody Gloom", equipo: "Instituto Kirkwood", posicion: "Defensa", elemento: "Bosque", foto: "gloom.webp", logoEquipo: "logo_kirkwood.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Victor Talis", equipo: "Instituto Kirkwood", posicion: "Centrocampista", elemento: "Tierra", foto: "talis.webp", logoEquipo: "logo_kirkwood.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp" },
    { nombre: "Eren Middleton", equipo: "Instituto Kirkwood", posicion: "Centrocampista", elemento: "Viento", foto: "middleton.webp", logoEquipo: "logo_kirkwood.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Peter Wells", equipo: "Instituto Kirkwood", posicion: "Delantero", elemento: "Tierra", foto: "wells.webp", logoEquipo: "logo_kirkwood.webp", logoPosicion: "DL.webp", logoElemento: "Tierra.webp" },
    { nombre: "Nathan Jones", equipo: "Instituto Occult", posicion: "Portero", elemento: "Bosque", foto: "jones_n.webp", logoEquipo: "logo_occult.webp", logoPosicion: "PR.webp", logoElemento: "Bosque.webp" },
    { nombre: "Russell Walk", equipo: "Instituto Occult", posicion: "Defensa", elemento: "Tierra", foto: "walk.webp", logoEquipo: "logo_occult.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Jason Jones", equipo: "Instituto Occult", posicion: "Defensa", elemento: "Bosque", foto: "jones_j.webp", logoEquipo: "logo_occult.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Ken Furan", equipo: "Instituto Occult", posicion: "Defensa", elemento: "Fuego", foto: "furan.webp", logoEquipo: "logo_occult.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp" },
    { nombre: "Jerry Fulton", equipo: "Instituto Occult", posicion: "Defensa", elemento: "Viento", foto: "fulton.webp", logoEquipo: "logo_occult.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp" },
    { nombre: "Ray Mannings", equipo: "Instituto Occult", posicion: "Centrocampista", elemento: "Bosque", foto: "mannings.webp", logoEquipo: "logo_occult.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp" },
    { nombre: "Robert Mayer", equipo: "Instituto Occult", posicion: "Centrocampista", elemento: "Tierra", foto: "mayer.webp", logoEquipo: "logo_occult.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp" },
    { nombre: "Alexander Brave", equipo: "Instituto Occult", posicion: "Centrocampista", elemento: "Viento", foto: "brave.webp", logoEquipo: "logo_occult.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Johan Tassman", equipo: "Instituto Occult", posicion: "Delantero", elemento: "Bosque", foto: "tassman.webp", logoEquipo: "logo_occult.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp" },
    { nombre: "Troy Moon", equipo: "Instituto Occult", posicion: "Delantero", elemento: "Fuego", foto: "moon.webp", logoEquipo: "logo_occult.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp" },
    { nombre: "Burt Wolf", equipo: "Instituto Occult", posicion: "Delantero", elemento: "Fuego", foto: "wolf.webp", logoEquipo: "logo_occult.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp" },
    { nombre: "Rob Crombie", equipo: "Instituto Occult", posicion: "Portero", elemento: "Viento", foto: "crombie.webp", logoEquipo: "logo_occult.webp", logoPosicion: "PR.webp", logoElemento: "Aire.webp" },
    { nombre: "Chuck Dollman", equipo: "Instituto Occult", posicion: "Defensa", elemento: "Bosque", foto: "dollman.webp", logoEquipo: "logo_occult.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Uxley Allen", equipo: "Instituto Occult", posicion: "Centrocampista", elemento: "Fuego", foto: "allen.webp", logoEquipo: "logo_occult.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp" },
    { nombre: "Phil Noir", equipo: "Instituto Occult", posicion: "Centrocampista", elemento: "Tierra", foto: "noir.webp", logoEquipo: "logo_occult.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp" },
    { nombre: "Mick Askley", equipo: "Instituto Occult", posicion: "Delantero", elemento: "Viento", foto: "askley.webp", logoEquipo: "logo_occult.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp" },
    { nombre: "Sam Idol", equipo: "Instituto Otaku", posicion: "Portero", elemento: "Viento", foto: "idol.webp", logoEquipo: "logo_otaku.webp", logoPosicion: "PR.webp", logoElemento: "Aire.webp" },
    { nombre: "Marcus Train", equipo: "Instituto Otaku", posicion: "Defensa", elemento: "Tierra", foto: "train.webp", logoEquipo: "logo_otaku.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Light Nobel", equipo: "Instituto Otaku", posicion: "Defensa", elemento: "Bosque", foto: "nobel.webp", logoEquipo: "logo_otaku.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Walter Valiant", equipo: "Instituto Otaku", posicion: "Defensa", elemento: "Tierra", foto: "valiant.webp", logoEquipo: "logo_otaku.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Spencer Gates", equipo: "Instituto Otaku", posicion: "Defensa", elemento: "Viento", foto: "gates.webp", logoEquipo: "logo_otaku.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp" },
    { nombre: "Josh Spear", equipo: "Instituto Otaku", posicion: "Centrocampista", elemento: "Fuego", foto: "spear.webp", logoEquipo: "logo_otaku.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp" },
    { nombre: "Gaby Farmer", equipo: "Instituto Otaku", posicion: "Centrocampista", elemento: "Bosque", foto: "farmer.webp", logoEquipo: "logo_otaku.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp" },
    { nombre: "Anthony Woodbridge", equipo: "Instituto Otaku", posicion: "Centrocampista", elemento: "Viento", foto: "woodbridge.webp", logoEquipo: "logo_otaku.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Gus Gamer", equipo: "Instituto Otaku", posicion: "Delantero", elemento: "Fuego", foto: "gamer.webp", logoEquipo: "logo_otaku.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp" },
    { nombre: "Mark Gambling", equipo: "Instituto Otaku", posicion: "Delantero", elemento: "Viento", foto: "gambling.webp", logoEquipo: "logo_otaku.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp" },
    { nombre: "Theodore Master", equipo: "Instituto Otaku", posicion: "Delantero", elemento: "Bosque", foto: "master_t.webp", logoEquipo: "logo_otaku.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp" },
    { nombre: "Grant Eldorado", equipo: "Instituto Otaku", posicion: "Portero", elemento: "Tierra", foto: "eldorado.webp", logoEquipo: "logo_otaku.webp", logoPosicion: "PR.webp", logoElemento: "Tierra.webp" },
    { nombre: "Ham Signalman", equipo: "Instituto Otaku", posicion: "Defensa", elemento: "Fuego", foto: "signalman.webp", logoEquipo: "logo_otaku.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp" },
    { nombre: "Bill Formby", equipo: "Instituto Otaku", posicion: "Centrocampista", elemento: "Bosque", foto: "formby.webp", logoEquipo: "logo_otaku.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp" },
    { nombre: "Mike Vox", equipo: "Instituto Otaku", posicion: "Centrocampista", elemento: "Viento", foto: "vox.webp", logoEquipo: "logo_otaku.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Ollie Webb", equipo: "Instituto Otaku", posicion: "Delantero", elemento: "Tierra", foto: "webb.webp", logoEquipo: "logo_otaku.webp", logoPosicion: "DL.webp", logoElemento: "Tierra.webp" },
    { nombre: "Paul Peabody", equipo: "Raimon", posicion: "Portero", elemento: "Tierra", foto: "peabody.webp", logoEquipo: "logo_raimon.webp", logoPosicion: "PR.webp", logoElemento: "Tierra.webp" },
    { nombre: "William Glass", equipo: "Raimon", posicion: "Delantero", elemento: "Bosque", foto: "willy.webp", logoEquipo: "logo_raimon.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp" },
    { nombre: "Shadow Cimmerian", equipo: "Raimon", posicion: "Delantero", elemento: "Bosque", foto: "shadow.webp", logoEquipo: "logo_raimon.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp" },
    { nombre: "Morgan Sanders", equipo: "Instituto Shuriken", posicion: "Portero", elemento: "Viento", foto: "sanders.webp", logoEquipo: "logo_shuriken.webp", logoPosicion: "PR.webp", logoElemento: "Aire.webp" },
    { nombre: "Newton Flust", equipo: "Instituto Shuriken", posicion: "Defensa", elemento: "Bosque", foto: "flust.webp", logoEquipo: "logo_shuriken.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Jim Hillfort", equipo: "Instituto Shuriken", posicion: "Defensa", elemento: "Tierra", foto: "hillfort.webp", logoEquipo: "logo_shuriken.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Galen Thunderbird", equipo: "Instituto Shuriken", posicion: "Defensa", elemento: "Fuego", foto: "thunderbird.webp", logoEquipo: "logo_shuriken.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp" },
    { nombre: "Finn Stoned", equipo: "Instituto Shuriken", posicion: "Defensa", elemento: "Tierra", foto: "stoned.webp", logoEquipo: "logo_shuriken.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Phil Wingate", equipo: "Instituto Shuriken", posicion: "Centrocampista", elemento: "Viento", foto: "wingate.webp", logoEquipo: "logo_shuriken.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Jez Shell", equipo: "Instituto Shuriken", posicion: "Centrocampista", elemento: "Viento", foto: "shell.webp", logoEquipo: "logo_shuriken.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Jupiter Jumper", equipo: "Instituto Shuriken", posicion: "Centrocampista", elemento: "Bosque", foto: "jumper.webp", logoEquipo: "logo_shuriken.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp" },
    { nombre: "Sam Samurai", equipo: "Instituto Shuriken", posicion: "Delantero", elemento: "Fuego", foto: "samurai.webp", logoEquipo: "logo_shuriken.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp" },
    { nombre: "Hank Sullivan", equipo: "Instituto Shuriken", posicion: "Delantero", elemento: "Tierra", foto: "sullivan.webp", logoEquipo: "logo_shuriken.webp", logoPosicion: "DL.webp", logoElemento: "Tierra.webp" },
    { nombre: "Sail Bluesea", equipo: "Instituto Shuriken", posicion: "Delantero", elemento: "Viento", foto: "bluesea.webp", logoEquipo: "logo_shuriken.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp" },
    { nombre: "Kevin Castle", equipo: "Instituto Shuriken", posicion: "Portero", elemento: "Tierra", foto: "castle.webp", logoEquipo: "logo_shuriken.webp", logoPosicion: "PR.webp", logoElemento: "Tierra.webp" },
    { nombre: "John Reynolds", equipo: "Instituto Shuriken", posicion: "Defensa", elemento: "Bosque", foto: "reynolds.webp", logoEquipo: "logo_shuriken.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Dan Hopper", equipo: "Instituto Shuriken", posicion: "Centrocampista", elemento: "Viento", foto: "hopper.webp", logoEquipo: "logo_shuriken.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Cal Trops", equipo: "Instituto Shuriken", posicion: "Centrocampista", elemento: "Fuego", foto: "trops.webp", logoEquipo: "logo_shuriken.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp" },
    { nombre: "Winston Falls", equipo: "Instituto Shuriken", posicion: "Delantero", elemento: "Bosque", foto: "falls.webp", logoEquipo: "logo_shuriken.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp" },
   { nombre: "Joe Ingram", equipo: "Instituto Umbrella", posicion: "Portero", elemento: "Bosque", foto: "ingram.webp", logoEquipo: "logo_umbrella.webp", logoPosicion: "PR.webp", logoElemento: "Bosque.webp" },
    { nombre: "Kendall Sefton", equipo: "Instituto Umbrella", posicion: "Defensa", elemento: "Tierra", foto: "sefton.webp", logoEquipo: "logo_umbrella.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Jason Strike", equipo: "Instituto Umbrella", posicion: "Defensa", elemento: "Fuego", foto: "strike.webp", logoEquipo: "logo_umbrella.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp" },
    { nombre: "Norman Porter", equipo: "Instituto Umbrella", posicion: "Defensa", elemento: "Viento", foto: "porter.webp", logoEquipo: "logo_umbrella.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp" },
    { nombre: "Maxwell Claus", equipo: "Instituto Umbrella", posicion: "Defensa", elemento: "Bosque", foto: "claus_m.webp", logoEquipo: "logo_umbrella.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Bruce Chaney", equipo: "Instituto Umbrella", posicion: "Centrocampista", elemento: "Fuego", foto: "chaney.webp", logoEquipo: "logo_umbrella.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp" },
    { nombre: "Leroy Rhymes", equipo: "Instituto Umbrella", posicion: "Centrocampista", elemento: "Viento", foto: "rhymes.webp", logoEquipo: "logo_umbrella.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Mildford Scott", equipo: "Instituto Umbrella", posicion: "Centrocampista", elemento: "Tierra", foto: "scott.webp", logoEquipo: "logo_umbrella.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp" },
    { nombre: "Julio Edmonds", equipo: "Instituto Umbrella", posicion: "Centrocampista", elemento: "Bosque", foto: "edmonds.webp", logoEquipo: "logo_umbrella.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp" },
    { nombre: "Cameron Morefield", equipo: "Instituto Umbrella", posicion: "Delantero", elemento: "Viento", foto: "morefield.webp", logoEquipo: "logo_umbrella.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp" },
    { nombre: "Greg Bernard", equipo: "Instituto Umbrella", posicion: "Delantero", elemento: "Fuego", foto: "bernard.webp", logoEquipo: "logo_umbrella.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp" },
    { nombre: "Peter Banker", equipo: "Instituto Umbrella", posicion: "Portero", elemento: "Tierra", foto: "banker.webp", logoEquipo: "logo_umbrella.webp", logoPosicion: "PR.webp", logoElemento: "Tierra.webp" },
    { nombre: "Saul Tunk", equipo: "Instituto Umbrella", posicion: "Defensa", elemento: "Bosque", foto: "tunk.webp", logoEquipo: "logo_umbrella.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Alan Most", equipo: "Instituto Umbrella", posicion: "Centrocampista", elemento: "Viento", foto: "most.webp", logoEquipo: "logo_umbrella.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Paul Caperock", equipo: "Instituto Umbrella", posicion: "Delantero", elemento: "Tierra", foto: "caperock.webp", logoEquipo: "logo_umbrella.webp", logoPosicion: "DL.webp", logoElemento: "Tierra.webp" },
    { nombre: "Julius Molehill", equipo: "Instituto Umbrella", posicion: "Delantero", elemento: "Fuego", foto: "molehill.webp", logoEquipo: "logo_umbrella.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp" },    // Instituto Wild
    { nombre: "Charlie Boardfield", equipo: "Instituto Wild", posicion: "Portero", elemento: "Tierra", foto: "boardfield.webp", logoEquipo: "logo_wild.webp", logoPosicion: "PR.webp", logoElemento: "Tierra.webp" },
    { nombre: "Hugo Talgeese", equipo: "Instituto Wild", posicion: "Defensa", elemento: "Viento", foto: "talgeese.webp", logoEquipo: "logo_wild.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp" },
    { nombre: "Wilson Fishman", equipo: "Instituto Wild", posicion: "Defensa", elemento: "Viento", foto: "fishman.webp", logoEquipo: "logo_wild.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp" },
    { nombre: "Peter Johnson", equipo: "Instituto Wild", posicion: "Defensa", elemento: "Tierra", foto: "johnson.webp", logoEquipo: "logo_wild.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Leonard O'Shea", equipo: "Instituto Wild", posicion: "Defensa", elemento: "Bosque", foto: "oshea.webp", logoEquipo: "logo_wild.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Cham Lion", equipo: "Instituto Wild", posicion: "Centrocampista", elemento: "Fuego", foto: "lion.webp", logoEquipo: "logo_wild.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp" },
    { nombre: "Steve Eagle", equipo: "Instituto Wild", posicion: "Centrocampista", elemento: "Viento", foto: "eagle.webp", logoEquipo: "logo_wild.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Bruce Monkey", equipo: "Instituto Wild", posicion: "Centrocampista", elemento: "Bosque", foto: "monkey.webp", logoEquipo: "logo_wild.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp" },
    { nombre: "Gary Lancaster", equipo: "Instituto Wild", posicion: "Delantero", elemento: "Tierra", foto: "lancaster.webp", logoEquipo: "logo_wild.webp", logoPosicion: "DL.webp", logoElemento: "Tierra.webp" },
    { nombre: "Harry Snake", equipo: "Instituto Wild", posicion: "Delantero", elemento: "Bosque", foto: "snake.webp", logoEquipo: "logo_wild.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp" },
    { nombre: "Adrian Speed", equipo: "Instituto Wild", posicion: "Delantero", elemento: "Viento", foto: "speed.webp", logoEquipo: "logo_wild.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp" },
    { nombre: "Chad Bullford", equipo: "Instituto Wild", posicion: "Portero", elemento: "Fuego", foto: "bullford.webp", logoEquipo: "logo_wild.webp", logoPosicion: "PR.webp", logoElemento: "Fuego.webp" },
    { nombre: "Alan Coe", equipo: "Instituto Wild", posicion: "Defensa", elemento: "Tierra", foto: "coe.webp", logoEquipo: "logo_wild.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Philip Anders", equipo: "Instituto Wild", posicion: "Centrocampista", elemento: "Fuego", foto: "anders.webp", logoEquipo: "logo_wild.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp" },
    { nombre: "Rocky Rackham", equipo: "Instituto Wild", posicion: "Centrocampista", elemento: "Tierra", foto: "rackham.webp", logoEquipo: "logo_wild.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp" },
    { nombre: "Matt Mouseman", equipo: "Instituto Wild", posicion: "Delantero", elemento: "Bosque", foto: "mouseman.webp", logoEquipo: "logo_wild.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp" },
   { nombre: "Paul Siddon", equipo: "Instituto Zeus", posicion: "Portero", elemento: "Bosque", foto: "siddon.webp", logoEquipo: "logo_zeus.webp", logoPosicion: "PR.webp", logoElemento: "Bosque.webp" },
    { nombre: "Apollo Light", equipo: "Instituto Zeus", posicion: "Defensa", elemento: "Bosque", foto: "light_a.webp", logoEquipo: "logo_zeus.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Jeff Iron", equipo: "Instituto Zeus", posicion: "Defensa", elemento: "Tierra", foto: "iron.webp", logoEquipo: "logo_zeus.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Lane War", equipo: "Instituto Zeus", posicion: "Defensa", elemento: "Fuego", foto: "war.webp", logoEquipo: "logo_zeus.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp" },
    { nombre: "Danny Wood", equipo: "Instituto Zeus", posicion: "Defensa", elemento: "Bosque", foto: "wood_d.webp", logoEquipo: "logo_zeus.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Artie Mishman", equipo: "Instituto Zeus", posicion: "Centrocampista", elemento: "Viento", foto: "mishman.webp", logoEquipo: "logo_zeus.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Arion Matlock", equipo: "Instituto Zeus", posicion: "Centrocampista", elemento: "Viento", foto: "matlock.webp", logoEquipo: "logo_zeus.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Wesley Knox", equipo: "Instituto Zeus", posicion: "Centrocampista", elemento: "Tierra", foto: "knox.webp", logoEquipo: "logo_zeus.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp" },
    { nombre: "Jonas Demetrius", equipo: "Instituto Zeus", posicion: "Delantero", elemento: "Fuego", foto: "demetrius.webp", logoEquipo: "logo_zeus.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp" },
    { nombre: "Henry House", equipo: "Instituto Zeus", posicion: "Delantero", elemento: "Tierra", foto: "house.webp", logoEquipo: "logo_zeus.webp", logoPosicion: "DL.webp", logoElemento: "Tierra.webp" },
    { nombre: "Iggy Russ", equipo: "Instituto Zeus", posicion: "Portero", elemento: "Fuego", foto: "russ.webp", logoEquipo: "logo_zeus.webp", logoPosicion: "PR.webp", logoElemento: "Fuego.webp" },
    { nombre: "Gus Heeley", equipo: "Instituto Zeus", posicion: "Defensa", elemento: "Viento", foto: "heeley.webp", logoEquipo: "logo_zeus.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp" },
    { nombre: "Harry Closs", equipo: "Instituto Zeus", posicion: "Centrocampista", elemento: "Bosque", foto: "closs.webp", logoEquipo: "logo_zeus.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp" },
    { nombre: "Andy Chronic", equipo: "Instituto Zeus", posicion: "Delantero", elemento: "Viento", foto: "chronic.webp", logoEquipo: "logo_zeus.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp" },
    { nombre: "Ned Yousef", equipo: "Instituto Zeus", posicion: "Delantero", elemento: "Bosque", foto: "yousef.webp", logoEquipo: "logo_zeus.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp" },
    { nombre: "Peter Drent", equipo: "Royal Academy", posicion: "Defensa", elemento: "Tierra", foto: "drent.webp", logoEquipo: "logo_royal.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Ben Simmons", equipo: "Royal Academy", posicion: "Defensa", elemento: "Bosque", foto: "simmons.webp", logoEquipo: "logo_royal.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Alan Master", equipo: "Royal Academy", posicion: "Defensa", elemento: "Viento", foto: "master.webp", logoEquipo: "logo_royal.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp" },
    { nombre: "Gus Martin", equipo: "Royal Academy", posicion: "Defensa", elemento: "Bosque", foto: "martin.webp", logoEquipo: "logo_royal.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Herman Waldon", equipo: "Royal Academy", posicion: "Centrocampista", elemento: "Viento", foto: "waldon.webp", logoEquipo: "logo_royal.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "John Bloom", equipo: "Royal Academy", posicion: "Centrocampista", elemento: "Fuego", foto: "bloom.webp", logoEquipo: "logo_royal.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp" },
    { nombre: "Derek Swing", equipo: "Royal Academy", posicion: "Centrocampista", elemento: "Viento", foto: "swing.webp", logoEquipo: "logo_royal.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Daniel Hatch", equipo: "Royal Academy", posicion: "Delantero", elemento: "Bosque", foto: "hatch.webp", logoEquipo: "logo_royal.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp" },
    { nombre: "Bob Carlton", equipo: "Royal Academy", posicion: "Portero", elemento: "Tierra", foto: "carlton.webp", logoEquipo: "logo_royal.webp", logoPosicion: "PR.webp", logoElemento: "Tierra.webp" },
    { nombre: "Cliff Tomlinson", equipo: "Royal Academy", posicion: "Defensa", elemento: "Fuego", foto: "tomlinson.webp", logoEquipo: "logo_royal.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp" },
    { nombre: "Jim Lawrenson", equipo: "Royal Academy", posicion: "Centrocampista", elemento: "Tierra", foto: "lawrenson.webp", logoEquipo: "logo_royal.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp" },
    { nombre: "Barry Potts", equipo: "Royal Academy", posicion: "Delantero", elemento: "Fuego", foto: "potts.webp", logoEquipo: "logo_royal.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp" },
    { nombre: "Steve Ingham", equipo: "Royal Academy", posicion: "Delantero", elemento: "Viento", foto: "ingham.webp", logoEquipo: "logo_royal.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp" },
    { nombre: "Suzanne Yuma", equipo: "Sally's", posicion: "Portero", elemento: "Tierra", foto: "yuma.webp", logoEquipo: "logo_sallys.webp", logoPosicion: "PR.webp", logoElemento: "Tierra.webp" },
    { nombre: "Tammy Fielding", equipo: "Sally's", posicion: "Defensa", elemento: "Bosque", foto: "fielding.webp", logoEquipo: "logo_sallys.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Alex Lovely", equipo: "Sally's", posicion: "Defensa", elemento: "Viento", foto: "lovely.webp", logoEquipo: "logo_sallys.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp" },
    { nombre: "Louis Hillside", equipo: "Sally's", posicion: "Defensa", elemento: "Tierra", foto: "hillside.webp", logoEquipo: "logo_sallys.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp" },
    { nombre: "Ness Sheldon", equipo: "Sally's", posicion: "Defensa", elemento: "Fuego", foto: "sheldon.webp", logoEquipo: "logo_sallys.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp" },
    { nombre: "Lizzy Squirrel", equipo: "Sally's", posicion: "Centrocampista", elemento: "Bosque", foto: "squirrel.webp", logoEquipo: "logo_sallys.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp" },
    { nombre: "Kippy Jones", equipo: "Sally's", posicion: "Centrocampista", elemento: "Viento", foto: "jones_k.webp", logoEquipo: "logo_sallys.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp" },
    { nombre: "Fayette Riversong", equipo: "Sally's", posicion: "Centrocampista", elemento: "Tierra", foto: "riversong.webp", logoEquipo: "logo_sallys.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp" },
    { nombre: "Samantha Moonlight", equipo: "Sally's", posicion: "Delantero", elemento: "Fuego", foto: "moonlight.webp", logoEquipo: "logo_sallys.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp" },
    { nombre: "Mitch Sandstone", equipo: "Sally's", posicion: "Delantero", elemento: "Tierra", foto: "sandstone.webp", logoEquipo: "logo_sallys.webp", logoPosicion: "DL.webp", logoElemento: "Tierra.webp" },
    { nombre: "Eddie Prentice", equipo: "Sally's", posicion: "Delantero", elemento: "Bosque", foto: "prentice.webp", logoEquipo: "logo_sallys.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp" },
    { nombre: "Alf Holmes", equipo: "Sally's", posicion: "Portero", elemento: "Viento", foto: "holmes.webp", logoEquipo: "logo_sallys.webp", logoPosicion: "PR.webp", logoElemento: "Aire.webp" },
    { nombre: "Ian Stager", equipo: "Sally's", posicion: "Defensa", elemento: "Bosque", foto: "stager.webp", logoEquipo: "logo_sallys.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp" },
    { nombre: "Fred Crumb", equipo: "Sally's", posicion: "Centrocampista", elemento: "Fuego", foto: "crumb.webp", logoEquipo: "logo_sallys.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp" },
    { nombre: "Dough Baughan", equipo: "Sally's", posicion: "Delantero", elemento: "Viento", foto: "baughan.webp", logoEquipo: "logo_sallys.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp" },
    { nombre: "Pip Daltry", equipo: "Sally's", posicion: "Delantero", elemento: "Tierra", foto: "daltry.webp", logoEquipo: "logo_sallys.webp", logoPosicion: "DL.webp", logoElemento: "Tierra.webp" },
       { nombre: "Ben North", equipo: "Polvo de Diamantes", posicion: "Portero", elemento: "Montaña", foto: "beluga.webp", logoEquipo: "logo_polvo_diamantes.webp", logoPosicion: "PR.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Alan Downhill", equipo: "Polvo de Diamantes", posicion: "Defensa", elemento: "Aire", foto: "arkew.webp", logoEquipo: "logo_polvo_diamantes.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Claire Lesnow", equipo: "Polvo de Diamantes", posicion: "Defensa", elemento: "Aire", foto: "clear.webp", logoEquipo: "logo_polvo_diamantes.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Albert Denver", equipo: "Polvo de Diamantes", posicion: "Defensa", elemento: "Montaña", foto: "gocker.webp", logoEquipo: "logo_polvo_diamantes.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Lucy Hailstone", equipo: "Polvo de Diamantes", posicion: "Centrocampista", elemento: "Fuego", foto: "icer.webp", logoEquipo: "logo_polvo_diamantes.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Brad Coldwater", equipo: "Polvo de Diamantes", posicion: "Centrocampista", elemento: "Montaña", foto: "balen.webp", logoEquipo: "logo_polvo_diamantes.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Dawson Foxx", equipo: "Polvo de Diamantes", posicion: "Centrocampista", elemento: "Aire", foto: "droll.webp", logoEquipo: "logo_polvo_diamantes.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Ving Rice", equipo: "Polvo de Diamantes", posicion: "Centrocampista", elemento: "Aire", foto: "rhine.webp", logoEquipo: "logo_polvo_diamantes.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Bernie White", equipo: "Polvo de Diamantes", posicion: "Delantero", elemento: "Aire", foto: "blown.webp", logoEquipo: "logo_polvo_diamantes.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Bryce Whitingale", equipo: "Polvo de Diamantes", posicion: "Delantero", elemento: "Aire", foto: "gazelle.webp", logoEquipo: "logo_polvo_diamantes.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Denzel Freezer", equipo: "Polvo de Diamantes", posicion: "Delantero", elemento: "Montaña", foto: "frost.webp", logoEquipo: "logo_polvo_diamantes.webp", logoPosicion: "DL.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Nelson Rockwell", equipo: "Génesis", posicion: "Portero", elemento: "Aire", foto: "nero.webp", logoEquipo: "logo_genesis.webp", logoPosicion: "PR.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Gail Baker", equipo: "Génesis", posicion: "Defensa", elemento: "Aire", foto: "gele.webp", logoEquipo: "logo_genesis.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Kim Powell", equipo: "Génesis", posicion: "Defensa", elemento: "Fuego", foto: "kiburn.webp", logoEquipo: "logo_genesis.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Zack Cummings", equipo: "Génesis", posicion: "Defensa", elemento: "Montaña", foto: "zohen.webp", logoEquipo: "logo_genesis.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Hunt Mercer", equipo: "Génesis", posicion: "Defensa", elemento: "Montaña", foto: "hauser.webp", logoEquipo: "logo_genesis.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Connor Murray", equipo: "Génesis", posicion: "Centrocampista", elemento: "Fuego", foto: "kormer.webp", logoEquipo: "logo_genesis.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Katie Brown", equipo: "Génesis", posicion: "Centrocampista", elemento: "Bosque", foto: "kiwill.webp", logoEquipo: "logo_genesis.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Ashton Malone", equipo: "Génesis", posicion: "Centrocampista", elemento: "Bosque", foto: "ark.webp", logoEquipo: "logo_genesis.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Wilbur Watkins", equipo: "Génesis", posicion: "Delantero", elemento: "Bosque", foto: "wittz.webp", logoEquipo: "logo_genesis.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Isabelle Trick", equipo: "Génesis", posicion: "Centrocampista", elemento: "Aire", foto: "bellatrix.webp", logoEquipo: "logo_genesis.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Xavier Foster", equipo: "Génesis", posicion: "Delantero", elemento: "Fuego", foto: "xene.webp", logoEquipo: "logo_genesis.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Adam Ropes", equipo: "Alpino", posicion: "Portero", elemento: "Aire", foto: "ropes.webp", logoEquipo: "logo_alpino.webp", logoPosicion: "PR.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Joaquine Downtown", equipo: "Alpino", posicion: "Defensa", elemento: "Fuego", foto: "downtown.webp", logoEquipo: "logo_alpino.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Milton Bindings", equipo: "Alpino", posicion: "Defensa", elemento: "Aire", foto: "bindings.webp", logoEquipo: "logo_alpino.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Spike Gleeson", equipo: "Alpino", posicion: "Defensa", elemento: "Bosque", foto: "gleeson.webp", logoEquipo: "logo_alpino.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Sean Snowfield", equipo: "Alpino", posicion: "Centrocampista", elemento: "Montaña", foto: "snowfield.webp", logoEquipo: "logo_alpino.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Kerry Bootgaiter", equipo: "Alpino", posicion: "Centrocampista", elemento: "Aire", foto: "bootgaiter.webp", logoEquipo: "logo_alpino.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Maddox Rock", equipo: "Alpino", posicion: "Centrocampista", elemento: "Bosque", foto: "maddox.webp", logoEquipo: "logo_alpino.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Robert Skipolson", equipo: "Alpino", posicion: "Centrocampista", elemento: "Bosque", foto: "skipolson.webp", logoEquipo: "logo_alpino.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Shawn Froste", equipo: "Alpino", posicion: "Delantero", elemento: "Aire", foto: "shawn.webp", logoEquipo: "logo_alpino.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Roland Climbstein", equipo: "Alpino", posicion: "Delantero", elemento: "Aire", foto: "climbstein.webp", logoEquipo: "logo_alpino.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Quentin Rackner", equipo: "Alpino", posicion: "Delantero", elemento: "Bosque", foto: "rackner.webp", logoEquipo: "logo_alpino.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Trent Peggs", equipo: "Alpino", posicion: "Portero", elemento: "Montaña", foto: "peggs.webp", logoEquipo: "logo_alpino.webp", logoPosicion: "PR.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Martin Ursus", equipo: "Alpino", posicion: "Defensa", elemento: "Bosque", foto: "ursus.webp", logoEquipo: "logo_alpino.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Pete Bogg", equipo: "Alpino", posicion: "Centrocampista", elemento: "Fuego", foto: "bogg.webp", logoEquipo: "logo_alpino.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Gem Strata", equipo: "Alpino", posicion: "Defensa", elemento: "Fuego", foto: "strata.webp", logoEquipo: "logo_alpino.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Horace Onlign", equipo: "Alpino", posicion: "Delantero", elemento: "Bosque", foto: "onlign.webp", logoEquipo: "logo_alpino.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Crane Kik", equipo: "Claustro Sagrado", posicion: "Portero", elemento: "Bosque", foto: "kik.webp", logoEquipo: "logo_claustro_sagrado.webp", logoPosicion: "PR.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Parry Waxon", equipo: "Claustro Sagrado", posicion: "Defensa", elemento: "Aire", foto: "waxon.webp", logoEquipo: "logo_claustro_sagrado.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Bri Spark", equipo: "Claustro Sagrado", posicion: "Defensa", elemento: "Montaña", foto: "sparky.webp", logoEquipo: "logo_claustro_sagrado.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Max Fortune", equipo: "Claustro Sagrado", posicion: "Defensa", elemento: "Bosque", foto: "maxi.webp", logoEquipo: "logo_claustro_sagrado.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Brendan Water", equipo: "Claustro Sagrado", posicion: "Defensa", elemento: "Fuego", foto: "water.webp", logoEquipo: "logo_claustro_sagrado.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Junior Fardream", equipo: "Claustro Sagrado", posicion: "Centrocampista", elemento: "Bosque", foto: "fardream.webp", logoEquipo: "logo_claustro_sagrado.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Ian Telektual", equipo: "Claustro Sagrado", posicion: "Centrocampista", elemento: "Aire", foto: "telektual.webp", logoEquipo: "logo_claustro_sagrado.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Lee Dinglite", equipo: "Claustro Sagrado", posicion: "Centrocampista", elemento: "Bosque", foto: "dinglite.webp", logoEquipo: "logo_claustro_sagrado.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Marshall Artz", equipo: "Claustro Sagrado", posicion: "Delantero", elemento: "Fuego", foto: "marshall.webp", logoEquipo: "logo_claustro_sagrado.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Tyke Wando", equipo: "Claustro Sagrado", posicion: "Delantero", elemento: "Bosque", foto: "wando.webp", logoEquipo: "logo_claustro_sagrado.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Dirk Artz", equipo: "Claustro Sagrado", posicion: "Delantero", elemento: "Aire", foto: "dirk.webp", logoEquipo: "logo_claustro_sagrado.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Scott Banyan", equipo: "Claustro Sagrado", posicion: "Defensa", elemento: "Bosque", foto: "scotty.webp", logoEquipo: "logo_claustro_sagrado.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Earnest Bookworm", equipo: "Claustro Sagrado", posicion: "Portero", elemento: "Aire", foto: "bookworm.webp", logoEquipo: "logo_claustro_sagrado.webp", logoPosicion: "PR.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Ollie Gami", equipo: "Claustro Sagrado", posicion: "Defensa", elemento: "Bosque", foto: "gami.webp", logoEquipo: "logo_claustro_sagrado.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Roman Kandel", equipo: "Claustro Sagrado", posicion: "Centrocampista", elemento: "Fuego", foto: "kandel.webp", logoEquipo: "logo_claustro_sagrado.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Don Ation", equipo: "Claustro Sagrado", posicion: "Delantero", elemento: "Aire", foto: "ation.webp", logoEquipo: "logo_claustro_sagrado.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Darren LaChance", equipo: "Instituto Fauxshore", posicion: "Portero", elemento: "Bosque", foto: "darren.webp", logoEquipo: "logo_fauxshore.webp", logoPosicion: "PR.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Drancis Fake", equipo: "Instituto Fauxshore", posicion: "Defensa", elemento: "Aire", foto: "fake.webp", logoEquipo: "logo_fauxshore.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Mick Mishap", equipo: "Instituto Fauxshore", posicion: "Defensa", elemento: "Bosque", foto: "mishap.webp", logoEquipo: "logo_fauxshore.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Louis Leave", equipo: "Instituto Fauxshore", posicion: "Defensa", elemento: "Fuego", foto: "leave.webp", logoEquipo: "logo_fauxshore.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Maurice Badgame", equipo: "Instituto Fauxshore", posicion: "Defensa", elemento: "Montaña", foto: "badgame.webp", logoEquipo: "logo_fauxshore.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Cannon Random", equipo: "Instituto Fauxshore", posicion: "Centrocampista", elemento: "Fuego", foto: "random.webp", logoEquipo: "logo_fauxshore.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Ulric Richmen", equipo: "Instituto Fauxshore", posicion: "Centrocampista", elemento: "Bosque", foto: "richmen.webp", logoEquipo: "logo_fauxshore.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Dave Fate", equipo: "Instituto Fauxshore", posicion: "Delantero", elemento: "Fuego", foto: "fate.webp", logoEquipo: "logo_fauxshore.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Dany Destiny", equipo: "Instituto Fauxshore", posicion: "Defensa", elemento: "Fuego", foto: "destiny.webp", logoEquipo: "logo_fauxshore.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Spencer Duskplay", equipo: "Instituto Fauxshore", posicion: "Centrocampista", elemento: "Aire", foto: "duskplay.webp", logoEquipo: "logo_fauxshore.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Jonathan Luckyman", equipo: "Instituto Fauxshore", posicion: "Delantero", elemento: "Bosque", foto: "luckyman.webp", logoEquipo: "logo_fauxshore.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Joe Poker", equipo: "Instituto Fauxshore", posicion: "Delantero", elemento: "Fuego", foto: "poker.webp", logoEquipo: "logo_fauxshore.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Wiley Cracker", equipo: "Instituto Fauxshore", posicion: "Portero", elemento: "Fuego", foto: "cracker.webp", logoEquipo: "logo_fauxshore.webp", logoPosicion: "PR.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Mark Failing", equipo: "Instituto Fauxshore", posicion: "Delantero", elemento: "Bosque", foto: "failing.webp", logoEquipo: "logo_fauxshore.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Alton Cotts", equipo: "Instituto Fauxshore", posicion: "Centrocampista", elemento: "Montaña", foto: "cotts.webp", logoEquipo: "logo_fauxshore.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Mike Passing", equipo: "Instituto Fauxshore", posicion: "Delantero", elemento: "Aire", foto: "passing.webp", logoEquipo: "logo_fauxshore.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Knowle Bathers", equipo: "Instituto Fauxshore", posicion: "Portero", elemento: "Aire", foto: "bathers.webp", logoEquipo: "logo_fauxshore.webp", logoPosicion: "PR.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Rocky Black", equipo: "Instituto Mary Times", posicion: "Portero", elemento: "Fuego", foto: "rocky.webp", logoEquipo: "logo_mary_times.webp", logoPosicion: "PR.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Chad Taylor", equipo: "Instituto Mary Times", posicion: "Defensa", elemento: "Aire", foto: "diver.webp", logoEquipo: "logo_mary_times.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Victor Hills", equipo: "Instituto Mary Times", posicion: "Defensa", elemento: "Montaña", foto: "hills.webp", logoEquipo: "logo_mary_times.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Hurley Kane", equipo: "Instituto Mary Times", posicion: "Defensa", elemento: "Aire", foto: "hurley.webp", logoEquipo: "logo_mary_times.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Hector Redding", equipo: "Instituto Mary Times", posicion: "Defensa", elemento: "Fuego", foto: "redding.webp", logoEquipo: "logo_mary_times.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Mackenzie Fordline", equipo: "Instituto Mary Times", posicion: "Centrocampista", elemento: "Aire", foto: "fordline.webp", logoEquipo: "logo_mary_times.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Cadence Soundtown", equipo: "Instituto Mary Times", posicion: "Centrocampista", elemento: "Bosque", foto: "soundtown.webp", logoEquipo: "logo_mary_times.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Dora Delight", equipo: "Instituto Mary Times", posicion: "Centrocampista", elemento: "Fuego", foto: "delight.webp", logoEquipo: "logo_mary_times.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Tom Contented", equipo: "Instituto Mary Times", posicion: "Centrocampista", elemento: "Montaña", foto: "contented.webp", logoEquipo: "logo_mary_times.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Joston Easton", equipo: "Instituto Mary Times", posicion: "Delantero", elemento: "Aire", foto: "easton.webp", logoEquipo: "logo_mary_times.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Spring Millpond", equipo: "Instituto Mary Times", posicion: "Delantero", elemento: "Aire", foto: "shark.webp", logoEquipo: "logo_mary_times.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Gaston Cooley", equipo: "Instituto Mary Times", posicion: "Portero", elemento: "Aire", foto: "cooley.webp", logoEquipo: "logo_mary_times.webp", logoPosicion: "PR.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Bevan Breakfast", equipo: "Instituto Mary Times", posicion: "Defensa", elemento: "Bosque", foto: "breakfast.webp", logoEquipo: "logo_mary_times.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Jack Griddle", equipo: "Instituto Mary Times", posicion: "Centrocampista", elemento: "Fuego", foto: "griddle.webp", logoEquipo: "logo_mary_times.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Stan Andagi", equipo: "Instituto Mary Times", posicion: "Centrocampista", elemento: "Montaña", foto: "andagi.webp", logoEquipo: "logo_mary_times.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Coral Talent", equipo: "Instituto Mary Times", posicion: "Delantero", elemento: "Aire", foto: "talent.webp", logoEquipo: "logo_mary_times.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Cam Mando", equipo: "Equipo de los Bosques", posicion: "Portero", elemento: "Montaña", foto: "mando.webp", logoEquipo: "logo_equipo_bosques.webp", logoPosicion: "PR.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Harry Boufante", equipo: "Equipo de los Bosques", posicion: "Defensa", elemento: "Aire", foto: "boufante.webp", logoEquipo: "logo_equipo_bosques.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Todd Stuhl", equipo: "Equipo de los Bosques", posicion: "Defensa", elemento: "Aire", foto: "stuhl.webp", logoEquipo: "logo_equipo_bosques.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Aspen Blewit", equipo: "Equipo de los Bosques", posicion: "Defensa", elemento: "Bosque", foto: "blewit.webp", logoEquipo: "logo_equipo_bosques.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Marismus Oregon", equipo: "Equipo de los Bosques", posicion: "Defensa", elemento: "Fuego", foto: "oregon.webp", logoEquipo: "logo_equipo_bosques.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Garjan Cypress", equipo: "Equipo de los Bosques", posicion: "Centrocampista", elemento: "Fuego", foto: "cypress.webp", logoEquipo: "logo_equipo_bosques.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Judas Deathcap", equipo: "Equipo de los Bosques", posicion: "Centrocampista", elemento: "Bosque", foto: "deathcap.webp", logoEquipo: "logo_equipo_bosques.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Chase Faithfull", equipo: "Equipo de los Bosques", posicion: "Centrocampista", elemento: "Montaña", foto: "faithfull.webp", logoEquipo: "logo_equipo_bosques.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Chris Ticker", equipo: "Equipo de los Bosques", posicion: "Delantero", elemento: "Aire", foto: "ticker.webp", logoEquipo: "logo_equipo_bosques.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Roy Daring", equipo: "Equipo de los Bosques", posicion: "Delantero", elemento: "Bosque", foto: "daring.webp", logoEquipo: "logo_equipo_bosques.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Scaber Enoki", equipo: "Equipo de los Bosques", posicion: "Delantero", elemento: "Fuego", foto: "enoki.webp", logoEquipo: "logo_equipo_bosques.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Grant Cook", equipo: "Prominence", posicion: "Portero", elemento: "Fuego", foto: "grent.webp", logoEquipo: "logo_prominence.webp", logoPosicion: "PR.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Bonnie Sparks", equipo: "Prominence", posicion: "Defensa", elemento: "Bosque", foto: "baller.webp", logoEquipo: "logo_prominence.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Val Flamewood", equipo: "Prominence", posicion: "Defensa", elemento: "Fuego", foto: "balcke.webp", logoEquipo: "logo_prominence.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Sean Ashford", equipo: "Prominence", posicion: "Defensa", elemento: "Bosque", foto: "seats.webp", logoEquipo: "logo_prominence.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Ben Blowton", equipo: "Prominence", posicion: "Centrocampista", elemento: "Fuego", foto: "bomber.webp", logoEquipo: "logo_prominence.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Ethan Whitering", equipo: "Prominence", posicion: "Centrocampista", elemento: "Bosque", foto: "heat.webp", logoEquipo: "logo_prominence.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Brenda Firequest", equipo: "Prominence", posicion: "Centrocampista", elemento: "Fuego", foto: "lean.webp", logoEquipo: "logo_prominence.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Sam Bournes", equipo: "Prominence", posicion: "Centrocampista", elemento: "Bosque", foto: "bountine.webp", logoEquipo: "logo_prominence.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Jim Flareson", equipo: "Prominence", posicion: "Delantero", elemento: "Fuego", foto: "sidern.webp", logoEquipo: "logo_prominence.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Claude Beacons", equipo: "Prominence", posicion: "Delantero", elemento: "Fuego", foto: "torch.webp", logoEquipo: "logo_prominence.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Nigel August", equipo: "Prominence", posicion: "Delantero", elemento: "Bosque", foto: "neppten.webp", logoEquipo: "logo_prominence.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Rowan Beltzer", equipo: "Royal Academy Redux", posicion: "Defensa", elemento: "Aire", foto: "beltzer.webp", logoEquipo: "logo_royal_redux.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Blade Healen", equipo: "Royal Academy Redux", posicion: "Defensa", elemento: "Montaña", foto: "healen.webp", logoEquipo: "logo_royal_redux.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Argie Bargie", equipo: "Royal Academy Redux", posicion: "Defensa", elemento: "Bosque", foto: "bargie.webp", logoEquipo: "logo_royal_redux.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Lee Bamboo", equipo: "Royal Academy Redux", posicion: "Defensa", elemento: "Fuego", foto: "bamboo.webp", logoEquipo: "logo_royal_redux.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Eton Messer", equipo: "Royal Academy Redux", posicion: "Centrocampista", elemento: "Bosque", foto: "messer.webp", logoEquipo: "logo_royal_redux.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Jonah Spark", equipo: "Royal Academy Redux", posicion: "Centrocampista", elemento: "Montaña", foto: "spark.webp", logoEquipo: "logo_royal_redux.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Sue Sparrow", equipo: "Royal Academy Redux", posicion: "Centrocampista", elemento: "Aire", foto: "sparrow.webp", logoEquipo: "logo_royal_redux.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Riley Jamm", equipo: "Royal Academy Redux", posicion: "Delantero", elemento: "Bosque", foto: "jamm.webp", logoEquipo: "logo_royal_redux.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Caleb Stonewall", equipo: "Royal Academy Redux", posicion: "Centrocampista", elemento: "Fuego", foto: "caleb.webp", logoEquipo: "logo_royal_redux.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Jimbo Cellar", equipo: "Royal Academy Redux", posicion: "Portero", elemento: "Bosque", foto: "cellar.webp", logoEquipo: "logo_royal_redux.webp", logoPosicion: "PR.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Zenn Wildhorse", equipo: "Royal Academy Redux", posicion: "Delantero", elemento: "Aire", foto: "wildhorse.webp", logoEquipo: "logo_royal_redux.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Dawson Little", equipo: "Royal Academy Redux", posicion: "Defensa", elemento: "Aire", foto: "little.webp", logoEquipo: "logo_royal_redux.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Cosimo Beck", equipo: "Royal Academy Redux", posicion: "Centrocampista", elemento: "Bosque", foto: "beck.webp", logoEquipo: "logo_royal_redux.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Maston Color", equipo: "Royal Academy Redux", posicion: "Centrocampista", elemento: "Montaña", foto: "color.webp", logoEquipo: "logo_royal_redux.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Ken Ironwall", equipo: "Servicio Secreto", posicion: "Portero", elemento: "Montaña", foto: "ironwall.webp", logoEquipo: "logo_servicio_secreto.webp", logoPosicion: "PR.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Timothy Western", equipo: "Servicio Secreto", posicion: "Defensa", elemento: "Aire", foto: "western.webp", logoEquipo: "logo_servicio_secreto.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Wallace Hammond", equipo: "Servicio Secreto", posicion: "Defensa", elemento: "Aire", foto: "hammond.webp", logoEquipo: "logo_servicio_secreto.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Shirley Stevens", equipo: "Servicio Secreto", posicion: "Defensa", elemento: "Bosque", foto: "stevens.webp", logoEquipo: "logo_servicio_secreto.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Ian Smith", equipo: "Servicio Secreto", posicion: "Defensa", elemento: "Bosque", foto: "smith.webp", logoEquipo: "logo_servicio_secreto.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Taylor Firepool", equipo: "Servicio Secreto", posicion: "Centrocampista", elemento: "Aire", foto: "firepool.webp", logoEquipo: "logo_servicio_secreto.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Marge Fielding", equipo: "Servicio Secreto", posicion: "Centrocampista", elemento: "Aire", foto: "agente_m.webp", logoEquipo: "logo_servicio_secreto.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Marshall Firsthand", equipo: "Servicio Secreto", posicion: "Centrocampista", elemento: "Bosque", foto: "firsthand.webp", logoEquipo: "logo_servicio_secreto.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Holly Mirror", equipo: "Servicio Secreto", posicion: "Delantero", elemento: "Fuego", foto: "mirror.webp", logoEquipo: "logo_servicio_secreto.webp", logoPosicion: "DL.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Victoria Vanguard", equipo: "Servicio Secreto", posicion: "Centrocampista", elemento: "Aire", foto: "tori.webp", logoEquipo: "logo_servicio_secreto.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Joe Kenneddy", equipo: "Servicio Secreto", posicion: "Delantero", elemento: "Montaña", foto: "kenneddy.webp", logoEquipo: "logo_servicio_secreto.webp", logoPosicion: "DL.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Ian Sights", equipo: "Servicio Secreto", posicion: "Portero", elemento: "Montaña", foto: "sights.webp", logoEquipo: "logo_servicio_secreto.webp", logoPosicion: "PR.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Greene Beray", equipo: "Servicio Secreto", posicion: "Defensa", elemento: "Aire", foto: "beray.webp", logoEquipo: "logo_servicio_secreto.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Ryan Tappin", equipo: "Servicio Secreto", posicion: "Centrocampista", elemento: "Bosque", foto: "tappin.webp", logoEquipo: "logo_servicio_secreto.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Linda Shadey", equipo: "Servicio Secreto", posicion: "Delantero", elemento: "Aire", foto: "shadey.webp", logoEquipo: "logo_servicio_secreto.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Sid Safehouse", equipo: "Servicio Secreto", posicion: "Defensa", elemento: "Fuego", foto: "safehouse.webp", logoEquipo: "logo_servicio_secreto.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Gordon Star", equipo: "Tormenta de Géminis", posicion: "Portero", elemento: "Bosque", foto: "galileo.webp", logoEquipo: "logo_tormenta_geminis.webp", logoPosicion: "PR.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Connor Shuttle", equipo: "Tormenta de Géminis", posicion: "Defensa", elemento: "Aire", foto: "coral.webp", logoEquipo: "logo_tormenta_geminis.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Jim Landing", equipo: "Tormenta de Géminis", posicion: "Defensa", elemento: "Fuego", foto: "gigs.webp", logoEquipo: "logo_tormenta_geminis.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Grant Icewater", equipo: "Tormenta de Géminis", posicion: "Defensa", elemento: "Montaña", foto: "ganymede.webp", logoEquipo: "logo_tormenta_geminis.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Charles Riverboat", equipo: "Tormenta de Géminis", posicion: "Defensa", elemento: "Fuego", foto: "charon.webp", logoEquipo: "logo_tormenta_geminis.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Pat Box", equipo: "Tormenta de Géminis", posicion: "Centrocampista", elemento: "Aire", foto: "pandora.webp", logoEquipo: "logo_tormenta_geminis.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Gregory Saturn", equipo: "Tormenta de Géminis", posicion: "Centrocampista", elemento: "Montaña", foto: "grengo.webp", logoEquipo: "logo_tormenta_geminis.webp", logoPosicion: "MD.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Izzy Jupiter", equipo: "Tormenta de Géminis", posicion: "Centrocampista", elemento: "Fuego", foto: "io.webp", logoEquipo: "logo_tormenta_geminis.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Rhona Countdown", equipo: "Tormenta de Géminis", posicion: "Delantero", elemento: "Bosque", foto: "rihm.webp", logoEquipo: "logo_tormenta_geminis.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Jordan Greenway", equipo: "Tormenta de Géminis", posicion: "Centrocampista", elemento: "Bosque", foto: "janus.webp", logoEquipo: "logo_tormenta_geminis.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Dylan Bluemoon", equipo: "Tormenta de Géminis", posicion: "Delantero", elemento: "Bosque", foto: "diam.webp", logoEquipo: "logo_tormenta_geminis.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Daisy Fields", equipo: "Triple C", posicion: "Portero", elemento: "Fuego", foto: "daisy.webp", logoEquipo: "logo_triple_c.webp", logoPosicion: "PR.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Alexia Sand", equipo: "Triple C", posicion: "Defensa", elemento: "Bosque", foto: "sand.webp", logoEquipo: "logo_triple_c.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Hellen Hearth", equipo: "Triple C", posicion: "Defensa", elemento: "Bosque", foto: "earth.webp", logoEquipo: "logo_triple_c.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Rose Pinkpetal", equipo: "Triple C", posicion: "Defensa", elemento: "Bosque", foto: "pinkpetal.webp", logoEquipo: "logo_triple_c.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Esther Greenland", equipo: "Triple C", posicion: "Defensa", elemento: "Fuego", foto: "greenland.webp", logoEquipo: "logo_triple_c.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Bela Bluebells", equipo: "Triple C", posicion: "Centrocampista", elemento: "Aire", foto: "bluebells.webp", logoEquipo: "logo_triple_c.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Natalie Sunrise", equipo: "Triple C", posicion: "Centrocampista", elemento: "Bosque", foto: "sunrise.webp", logoEquipo: "logo_triple_c.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Hillary Bush", equipo: "Triple C", posicion: "Centrocampista", elemento: "Bosque", foto: "bush.webp", logoEquipo: "logo_triple_c.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Mary Moor", equipo: "Triple C", posicion: "Delantero", elemento: "Montaña", foto: "moor.webp", logoEquipo: "logo_triple_c.webp", logoPosicion: "DL.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Suzette Hartland", equipo: "Triple C", posicion: "Delantero", elemento: "Bosque", foto: "sue.webp", logoEquipo: "logo_triple_c.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Lily Willow", equipo: "Triple C", posicion: "Delantero", elemento: "Bosque", foto: "willow.webp", logoEquipo: "logo_triple_c.webp", logoPosicion: "DL.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Dell Closeout", equipo: "Triple C", posicion: "Portero", elemento: "Aire", foto: "closeout.webp", logoEquipo: "logo_triple_c.webp", logoPosicion: "PR.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Amy Spires", equipo: "Triple C", posicion: "Defensa", elemento: "Bosque", foto: "spires.webp", logoEquipo: "logo_triple_c.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Peony Cash", equipo: "Triple C", posicion: "Centrocampista", elemento: "Fuego", foto: "cash.webp", logoEquipo: "logo_triple_c.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Gayle Revel", equipo: "Triple C", posicion: "Centrocampista", elemento: "Bosque", foto: "revel.webp", logoEquipo: "logo_triple_c.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Janine Brook", equipo: "Triple C", posicion: "Portero", elemento: "Fuego", foto: "brook.webp", logoEquipo: "logo_triple_c.webp", logoPosicion: "PR.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Dave Quagmire", equipo: "Épsilon", posicion: "Portero", elemento: "Fuego", foto: "dvalin.webp", logoEquipo: "logo_epsilon.webp", logoPosicion: "PR.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Craven Kenville", equipo: "Épsilon", posicion: "Defensa", elemento: "Fuego", foto: "kenville.webp", logoEquipo: "logo_epsilon.webp", logoPosicion: "DF.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Anna Mole", equipo: "Épsilon", posicion: "Defensa", elemento: "Bosque", foto: "mole.webp", logoEquipo: "logo_epsilon.webp", logoPosicion: "DF.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Kayson Wattever", equipo: "Épsilon", posicion: "Defensa", elemento: "Aire", foto: "kayson.webp", logoEquipo: "logo_epsilon.webp", logoPosicion: "DF.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Chris Tytan", equipo: "Épsilon", posicion: "Defensa", elemento: "Montaña", foto: "tytan.webp", logoEquipo: "logo_epsilon.webp", logoPosicion: "DF.webp", logoElemento: "Tierra.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Mads Hatter", equipo: "Épsilon", posicion: "Centrocampista", elemento: "Fuego", foto: "fedora.webp", logoEquipo: "logo_epsilon.webp", logoPosicion: "MD.webp", logoElemento: "Fuego.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Karen Ripton", equipo: "Épsilon", posicion: "Centrocampista", elemento: "Aire", foto: "krypto.webp", logoEquipo: "logo_epsilon.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Yakker Plantsworm", equipo: "Épsilon", posicion: "Centrocampista", elemento: "Bosque", foto: "sworm.webp", logoEquipo: "logo_epsilon.webp", logoPosicion: "MD.webp", logoElemento: "Bosque.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Carrie McCuring", equipo: "Épsilon", posicion: "Delantero", elemento: "Aire", foto: "mercury.webp", logoEquipo: "logo_epsilon.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Ronny Metcalf", equipo: "Épsilon", posicion: "Centrocampista", elemento: "Aire", foto: "metron.webp", logoEquipo: "logo_epsilon.webp", logoPosicion: "MD.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" },
    { nombre: "Zeke Valanche", equipo: "Épsilon", posicion: "Delantero", elemento: "Aire", foto: "zell.webp", logoEquipo: "logo_epsilon.webp", logoPosicion: "DL.webp", logoElemento: "Aire.webp", saga: "IE2", logoSaga: "saga_ie2.webp" }
  ];
jugadores.forEach(j => {
    if (j.logoEquipo === "logo_polvo_diamantes.webp") j.logoEquipo = "logo_diamantes.webp";
    if (j.logoEquipo === "logo_tormenta_geminis.webp") j.logoEquipo = "logo_geminis.webp";
    if (j.logoEquipo === "logo_mary_times.webp") j.logoEquipo = "logo_marytimes.webp";
    
    if (j.equipo === "Mary Times") j.equipo = "Instituto Mary Times";
    if (j.equipo === "Fauxshore") j.equipo = "Instituto Fauxshore";
});


let jugadoresIntentados = [];
let listaDesordenadaPorDia = [];
let jugadorSecreto = null;
let diaSeleccionado = null;
let diasCompletados = JSON.parse(localStorage.getItem("caravanaDiasCompletados")) || [];
let historialPorDia = JSON.parse(localStorage.getItem("caravanaHistorialDias")) || {};
function generarRetosAleatorios() {
    let copiaJugadores = [...jugadores];
    listaDesordenadaPorDia = [];
    let semilla = 12345; 
    
    for (let i = 0; i < jugadores.length; i++) {
        semilla = (semilla * 9301 + 49297) % 233280;
        let porcentaje = semilla / 233280;
        let indiceAleatorio = Math.floor(porcentaje * copiaJugadores.length);
        listaDesordenadaPorDia.push(copiaJugadores[indiceAleatorio]);
        copiaJugadores.splice(indiceAleatorio, 1);
    }
}
function inicializarCalendarioDias() {
    const grid = document.getElementById("grid-dias-calendario");
    if (!grid) return;
    grid.innerHTML = "";


    for (let i = 1; i <= 30; i++) {
        const btn = document.createElement("button");
        btn.className = "btn-dia";
        btn.innerText = `Día ${i}`;
               if (diasCompletados.includes(i)) btn.classList.add("completado");
        btn.id = `btn-dia-${i}`;
        btn.addEventListener("click", () => {
            seleccionarDiaJuego(i);
        });
        grid.appendChild(btn);
    }
}

function seleccionarDiaJuego(dia) {
    diaSeleccionado = dia;
    jugadorSecreto = listaDesordenadaPorDia[dia - 1];
    jugadoresIntentados = [];
    document.getElementById("lista-intentos").innerHTML = "";

    document.querySelectorAll(".btn-dia").forEach(b => b.classList.remove("activo"));
    const btnActivo = document.getElementById(`btn-dia-${dia}`);
    if (btnActivo) btnActivo.classList.add("activo");

    if (diasCompletados.includes(dia)) {
        document.getElementById("alerta-victoria").style.display = "block";
        document.getElementById("contenedor-buscador-juego").style.display = "none";
        document.getElementById("instrucciones-juego").innerText = `✅ Día ${dia} completado. El jugador era ${jugadorSecreto.nombre}.`;

        const nombresGuardados = historialPorDia[dia] || [];
        nombresGuardados.forEach(nombre => {
            const jEncontrado = jugadores.find(j => j.nombre === nombre);
            if (jEncontrado) dibujarFilaIntento(jEncontrado);
        });
        return;
    }

    if (document.getElementById("buscador")) document.getElementById("buscador").disabled = false;
    document.getElementById("alerta-victoria").style.display = "none";
    document.getElementById("contenedor-buscador-juego").style.display = "block";
    document.getElementById("instrucciones-juego").innerText = `⚽ Reto del Día ${dia} activado. ¡Intenta adivinarlo!`;
}


window.onload = function() {
       generarRetosAleatorios();
    inicializarCalendarioDias();
};

const buscador = document.getElementById("buscador");
const sugerenciasDiv = document.getElementById("sugerencias");
const listaIntentos = document.getElementById("lista-intentos");

if (buscador) {
    buscador.addEventListener("input", () => {
        const texto = buscador.value.toLowerCase();
        sugerenciasDiv.innerHTML = "";
        if (!texto) return;

          const filtrados = jugadores.filter(j => j.nombre.toLowerCase().includes(texto) && !jugadoresIntentados.includes(j.nombre));
        
        filtrados.forEach(j => {
            const div = document.createElement("div");
            div.className = "sugerencia-item";
            const imgHtml = j.foto ? `<div style="width:25px; height:25px; border-radius:4px; overflow:hidden; display:inline-block; vertical-align:middle; margin-right:8px;"><img src="${j.foto}" style="width:100%; height:100%; object-fit:cover; object-position:center;"></div>` : '';
            div.innerHTML = `${imgHtml}${j.nombre}`;
            div.addEventListener("click", () => {
                comprobarJugador(j);
                buscador.value = "";
                sugerenciasDiv.innerHTML = "";
            });
            sugerenciasDiv.appendChild(div);
        });
    });
}

function comprobarJugador(jugador) {
    dibujarFilaIntento(jugador);

    if (!jugadoresIntentados.includes(jugador.nombre)) {
        jugadoresIntentados.push(jugador.nombre);
    }

    if (jugador.nombre === jugadorSecreto.nombre) {
        document.getElementById("alerta-victoria").style.display = "block";
        const btnGanado = document.getElementById(`btn-dia-${diaSeleccionado}`);
        if (btnGanado) btnGanado.classList.add("completado");
        const cajaInput = document.getElementById("buscador");
        if (cajaInput) cajaInput.disabled = true;

        if (!diasCompletados.includes(diaSeleccionado)) {
            diasCompletados.push(diaSeleccionado);
            localStorage.setItem("caravanaDiasCompletados", JSON.stringify(diasCompletados));
        }
        historialPorDia[diaSeleccionado] = [...jugadoresIntentados];
        localStorage.setItem("caravanaHistorialDias", JSON.stringify(historialPorDia));
    }
}

function dibujarFilaIntento(jugador) {


    const fila = document.createElement("tr");
    
    // Celda de Jugador
    const tdJugador = document.createElement("td");
     const imgHtml = jugador.foto ? '<div style="width:105px; height:105px; border-radius:10px; overflow:hidden; margin:0 auto;"><img src="' + jugador.foto + '" style="width:100%; height:100%; object-fit:cover; object-position:top;"></div>' : '';
    tdJugador.innerHTML = imgHtml;
    tdJugador.title = jugador.nombre;
    tdJugador.className = (jugador.nombre === jugadorSecreto.nombre) ? "verde" : "rojo";
    fila.appendChild(tdJugador);

    // Función para celdas normales
    function crearCelda(valorIntento, valorSecreto, innerContent) {
      const td = document.createElement("td");
      td.innerHTML = innerContent || valorIntento;
      td.className = (valorIntento === valorSecreto) ? "verde" : "rojo";
      return td;
    }

    // Celda Equipo con Logo Dinámico
    const logoHtml = jugador.logoEquipo ? '<div style="width:72px; height:72px; margin:0 auto 4px auto; display:flex; align-items:center; justify-content:center;"><img src="' + jugador.logoEquipo + '" style="width:100%; height:100%; object-fit:contain;"></div>' : '';
    const contenidoEquipo = logoHtml + '<div>' + jugador.equipo + '</div>';

    fila.appendChild(crearCelda(jugador.equipo, jugadorSecreto.equipo, contenidoEquipo));

    // Celda Posicion con Logo Dinamico
    const logoPosHtml = jugador.logoPosicion ? '<div style="width:75px; height:75px; margin:0 auto; display:flex; align-items:center; justify-content:center;"><img src="' + jugador.logoPosicion + '" style="width:100%; height:100%; object-fit:contain;"></div>' : jugador.posicion;
    fila.appendChild(crearCelda(jugador.posicion, jugadorSecreto.posicion, logoPosHtml));

    // Celda Elemento con Logo Dinamico
    const logoElemHtml = jugador.logoElemento ? '<div style="width:75px; height:75px; margin:0 auto; display:flex; align-items:center; justify-content:center;"><img src="' + jugador.logoElemento + '" style="width:100%; height:100%; object-fit:contain;"></div>' : jugador.elemento;
    fila.appendChild(crearCelda(jugador.elemento, jugadorSecreto.elemento, logoElemHtml));

    // Celda Saga / Temporada (Por defecto Inazuma Eleven 1)
    const sagaJugador = jugador.saga || "IE1";
    const sagaSecreta = jugadorSecreto.saga || "IE1";
    const logoSagaArchivo = jugador.logoSaga || "aaaa.webp";
    const logoSagaHtml = '<div style="width:155px; height:78px; margin:0 auto; display:flex; align-items:center; justify-content:center;"><img src="' + logoSagaArchivo + '" style="width:100%; height:100%; object-fit:contain;"></div>';
   fila.appendChild(crearCelda(sagaJugador, sagaSecreta, logoSagaHtml));


    listaIntentos.insertBefore(fila, listaIntentos.firstChild);

      
       
}

function cambiarDificultad(nivel) {
    document.getElementById("btn-facil").classList.remove("activo");
    document.getElementById("btn-medio").classList.remove("activo");
    document.getElementById("btn-imposible").classList.remove("activo");
    document.getElementById("aviso-modo-bloqueado").style.display = "none";

    if (nivel === 'facil') {
        document.getElementById("btn-facil").classList.add("activo");
        document.getElementById("panel-secciones-dias").style.display = "block";
        document.getElementById("instrucciones-juego").innerText = "Selecciona un día del panel superior para empezar a jugar.";
        inicializarCalendarioDias();
    } else {
        document.getElementById(`btn-${nivel}`).classList.add("activo");
        document.getElementById("panel-secciones-dias").style.display = "none";
        document.getElementById("contenedor-buscador-juego").style.display = "none";
        document.getElementById("aviso-modo-bloqueado").style.display = "block";
        document.getElementById("instrucciones-juego").innerText = "Modo seleccionado.";
    }
}


// Enlace para activar la barra de búsqueda de jugadores
document.addEventListener("DOMContentLoaded", () => {
    const inputBuscador = document.getElementById("buscador");
    const cajaSugerencias = document.getElementById("sugerencias");
    const inputEquipo = document.getElementById("buscador-equipo");
    const cajaEquipo = document.getElementById("sugerencias-equipo");

    if (inputBuscador && cajaSugerencias) {
        inputBuscador.addEventListener("input", () => {
            if (typeof jugadores === 'undefined') return;
            const txt = inputBuscador.value.toLowerCase();
            cajaSugerencias.innerHTML = "";
            if (!txt) return;
        const encontrados = jugadores.filter(j => j.nombre.toLowerCase().includes(txt) && (typeof jugadoresIntentados !== 'undefined' ? !jugadoresIntentados.includes(j.nombre) : true));

            
            encontrados.forEach(j => {
                const item = document.createElement("div");
                item.className = "sugerencia-item";
                                        const img = j.foto ? `<img src="${j.foto}" class="sugerencia-img" style="width:35px; height:35px; object-fit:cover; border-radius:4px; margin-right:10px; vertical-align:middle;">` : '';


                            item.innerHTML = `${img}<span>${j.nombre}</span>`;
            item.addEventListener("click", () => {

                    comprobarJugador(j);
                    inputBuscador.value = "";
                    cajaSugerencias.innerHTML = "";
                });
                cajaSugerencias.appendChild(item);
                      });
        });
           // Seleccionar el primer jugador automáticamente al pulsar Enter
    inputBuscador.addEventListener("keydown", function(e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const primeraSugerencia = cajaSugerencias.querySelector("div");
               if (primeraSugerencia) {
          primeraSugerencia.click();
        }
      }
    });
  }
});
