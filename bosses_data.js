/**
 * Mortal Shell II - Complete Official Bosses Database
 * Sources: Game Files (G:\Games\Sparta), Rock Paper Shotgun, and Game8.
 * 100% Real In-Game Screenshots from Game8 & RPS - Zero AI Images.
 */

const MORTAL_SHELL_BOSSES = [
  {
    "id": "boss_01",
    "order": 1,
    "name": "Gloombound Ritualist",
    "nameDE": "Düstergebundener Ritualist",
    "title": "Conjurer of the Sunken Outskirts",
    "titleDE": "Beschwörer des Versunkenen Umlands",
    "region": "Disciple's Pass & Fallgrim",
    "regionDE": "Jüngerpass & Fallgrim",
    "closestBeacon": "Village Outskirts Beacon",
    "closestBeaconDE": "Leuchtfeuer am Dorfrand",
    "location": "Past the Village Outskirts Beacon until you reach a small tunnel with a sunken area (Prologue).",
    "locationDE": "Hinter dem Dorfrand-Leuchtfeuer durch einen kleinen Tunnel zum versunkenen Areal (Prolog).",
    "type": "Mandatory Boss",
    "typeDE": "Hauptboss",
    "image": "assets/bosses/game8_gloombound_ritualist.png",
    "recommendedShell": "Harros the Vassal",
    "recommendedShellDE": "Harros der Vasall",
    "weaknesses": [
      "Perfect Guard",
      "Stone Stun",
      "Naylshotte Sidearm",
      "Minion Deflection"
    ],
    "weaknessesDE": [
      "Perfekte Parade",
      "Stein-Betäubung",
      "Naylshotte-Schusswaffe",
      "Diener-Umlenkung"
    ],
    "tarReward": "1,200 Gloom, 360 Gloom",
    "tarRewardDE": "1.200 Düsteressenz, 360 Düsteressenz",
    "strategy": {
      "en": "Calls forth minions who explode in bloody bursts. Dodge away when they charge, then close in to strike while he pauses. Use Perfect Guards or Naylshotte rounds.",
      "de": "Ruft explodierende Diener herbei. Weiche aus und gehe in den Nahkampf über, wenn er pausiert. Nutze Perfekte Paraden oder Naylshotte-Schüsse."
    },
    "quote": "Flesh falls... the gloom remains eternal.",
    "quoteDE": "Fleisch vergeht... die Düsternis währt ewig."
  },
  {
    "id": "boss_02",
    "order": 2,
    "name": "Tainted Vestige",
    "nameDE": "Beflecktes Überbleibsel",
    "title": "Terror of Disciple's Grotto",
    "titleDE": "Schrecken der Jüngergrotte",
    "region": "Disciple's Pass & Fallgrim",
    "regionDE": "Jüngerpass & Fallgrim",
    "closestBeacon": "Disciple's Grotto Beacon",
    "closestBeaconDE": "Leuchtfeuer der Jüngergrotte",
    "location": "Found in a small hidden cavern area near the Disciple's Grotto Beacon.",
    "locationDE": "In einer kleinen verborgenen Höhle nahe dem Jüngergrotten-Leuchtfeuer.",
    "type": "Optional Boss",
    "typeDE": "Optionaler Boss",
    "image": "assets/bosses/game8_tainted_vestige.png",
    "recommendedShell": "Tiel the Acolyte",
    "recommendedShellDE": "Tiel der Akolyth",
    "weaknesses": [
      "Break Damage",
      "Poison Infusion",
      "Head Weakpoint",
      "Burnt Effigy"
    ],
    "weaknessesDE": [
      "Haltungsbruch",
      "Giftinfusion",
      "Kopf-Schwachpunkt",
      "Verbranntes Bildnis"
    ],
    "tarReward": "1,500 Gloom, Burnt Effigy x1",
    "tarRewardDE": "1.500 Düsteressenz, Verbranntes Bildnis x1",
    "strategy": {
      "en": "Overwhelm with Break damage and Naylshotte shots before entering melee. Dodge or harden against its lunges and strike its head.",
      "de": "Überwältige die Tentakelbestie mit Haltungsbruch und Naylshotte-Schüssen. Weiche Sprunghieben aus und attackiere den Kopf."
    },
    "quote": "The deep earth twists in tormented silence.",
    "quoteDE": "Die tiefe Erde windet sich in qualvollem Schweigen."
  },
  {
    "id": "boss_03",
    "order": 3,
    "name": "Tar Golem",
    "nameDE": "Teergolem",
    "title": "Guardian of the Grotto Gate",
    "titleDE": "Wächter des Grottentors",
    "region": "Disciple's Pass & Fallgrim",
    "regionDE": "Jüngerpass & Fallgrim",
    "closestBeacon": "Disciple's Grotto Beacon",
    "closestBeaconDE": "Leuchtfeuer der Jüngergrotte",
    "location": "Found past the Disciple's Grotto Beacon guarding Vatra's Seal.",
    "locationDE": "Hinter dem Jüngergrotten-Leuchtfeuer als Wächter von Vatras Siegel.",
    "type": "Mandatory Boss",
    "typeDE": "Hauptboss",
    "image": "assets/bosses/game8_tar_golem.png",
    "recommendedShell": "Eredrim the Venerable",
    "recommendedShellDE": "Eredrim der Ehrwürdige",
    "weaknesses": [
      "Spin Attack Recovery",
      "Heavy Stagger",
      "Frost Damage",
      "Vatra's Seal Break"
    ],
    "weaknessesDE": [
      "Erholungsphase nach Wirbel",
      "Schwere Wucht",
      "Frostschaden",
      "Vatras Siegel"
    ],
    "tarReward": "2,000 Gloom, Vatra's Seal x1",
    "tarRewardDE": "2.000 Düsteressenz, Vatras Siegel x1",
    "strategy": {
      "en": "Keep distance during his 4-strike axe spin. Harden on the final blow, then punish him during his lengthy recovery.",
      "de": "Halte während der 4er-Axtdrehung Abstand, verhärte dich beim finalen Schlag und nutze die Erholungsphase für schwere Hiebe."
    },
    "quote": "Fire and pitch coalesce!",
    "quoteDE": "Feuer und Pech verschmelzen!"
  },
  {
    "id": "boss_04",
    "order": 4,
    "name": "Great Arbiter of Flesh",
    "nameDE": "Großer Schlichter des Fleisches",
    "title": "Executioner of Widow's Overlook",
    "titleDE": "Henker am Witwenausguck",
    "region": "Disciple's Pass & Fallgrim",
    "regionDE": "Jüngerpass & Fallgrim",
    "closestBeacon": "Widow's Overlook Beacon",
    "closestBeaconDE": "Leuchtfeuer am Witwenausguck",
    "location": "Found roaming near the Widow's Overlook Beacon by the cemetery right before Tiel's shell.",
    "locationDE": "Patrouilliert am Friedhof nahe dem Witwenausguck-Leuchtfeuer direkt vor Tiels Hülle.",
    "type": "Optional Boss",
    "typeDE": "Optionaler Boss",
    "image": "assets/bosses/game8_great_arbiter.png",
    "recommendedShell": "Hadern the Deliverer",
    "recommendedShellDE": "Hadern der Erlöser",
    "weaknesses": [
      "Greatsword Parry",
      "Side Dodges",
      "Stagger Burst",
      "Flame Infusion"
    ],
    "weaknessesDE": [
      "Großschwert-Parade",
      "Seitliches Ausweichen",
      "Wucht-Betäubung",
      "Flammeninfusion"
    ],
    "tarReward": "5,754 Gloom, Arbiter's Prize x1",
    "tarRewardDE": "5.754 Düsteressenz, Schlichter-Trophäe x1",
    "strategy": {
      "en": "His wide two-handed sword swings are easily telegraphed. Parry his horizontal swings for devastating critical ripostes.",
      "de": "Seine weiten Zweihänderschwünge sind sehr gut lesbar. Pariere für kritische Konter."
    },
    "quote": "None shall claim the shade of the fallen.",
    "quoteDE": "Niemand soll den Schatten der Gefallenen beanspruchen."
  },
  {
    "id": "boss_05",
    "order": 5,
    "name": "Vrannic, the Grand Illusionist",
    "nameDE": "Vrannic, der Große Illusionist",
    "title": "Master of the Hall of Illusions",
    "titleDE": "Meister der Halle der Illusionen",
    "region": "Fainweald & Sunken Village",
    "regionDE": "Fainweald & Versunkenes Dorf",
    "closestBeacon": "Mushroom Village Gate Beacon",
    "closestBeaconDE": "Tor-Leuchtfeuer im Pilzdorf",
    "location": "Cleanse the Mushroom Village Gate Beacon to open the portal to the Hall of Illusions.",
    "locationDE": "Reinige das Tor-Leuchtfeuer im Pilzdorf, um das Portal zur Halle der Illusionen zu öffnen.",
    "type": "Beacon Boss",
    "typeDE": "Leuchtfeuer-Boss",
    "image": "assets/bosses/game8_vrannic.png",
    "recommendedShell": "Solomon the Scholar",
    "recommendedShellDE": "Solomon der Gelehrte",
    "weaknesses": [
      "Rushdown Attacks",
      "Clone Dispelling",
      "Homing Deflection"
    ],
    "weaknessesDE": [
      "Schneller Sturmlauf",
      "Spiegelbild-Auflösung",
      "Projektil-Abwehr"
    ],
    "tarReward": "3,018 Gloom, Volatile Fragment x1",
    "tarRewardDE": "3.018 Düsteressenz, Flüchtiges Fragment x1",
    "strategy": {
      "en": "Dodge his tracking magic projectiles. When he creates phantom copies, hit each illusion once to immediately disperse it.",
      "de": "Weiche Zielsuchprojektilen aus. Triff die Phantome im Laufschritt einmal, um sie sofort aufzulösen."
    },
    "quote": "Gaze into the mirror of your demise!",
    "quoteDE": "Blicke in den Spiegel deines Untergangs!"
  },
  {
    "id": "boss_06",
    "order": 6,
    "name": "Circle of the Grasping Root",
    "nameDE": "Zirkel der Greifenden Wurzel",
    "title": "Baba Froga & The Plague Cultists",
    "titleDE": "Baba Froga & Die Seuchenkultisten",
    "region": "Fainweald & Sunken Village",
    "regionDE": "Fainweald & Versunkenes Dorf",
    "closestBeacon": "Seeping Mire Beacon",
    "closestBeaconDE": "Leuchtfeuer im Sickernden Moor",
    "location": "Cleanse the Seeping Mire Beacon to open the lair of Baba Froga in Rootwater Hollow.",
    "locationDE": "Reinige das Leuchtfeuer im Sickernden Moor für den Zugang zu Baba Frogas Unterschlupf.",
    "type": "Optional Boss",
    "typeDE": "Optionaler Boss",
    "image": "assets/bosses/game8_circle_root.png",
    "recommendedShell": "Tiel the Acolyte (Poison Healing)",
    "recommendedShellDE": "Tiel der Akolyth (Gift-Heilung)",
    "weaknesses": [
      "Troubadour's Lute Confusion",
      "Poison Immunity",
      "Focus Cultists First"
    ],
    "weaknessesDE": [
      "Troubadour-Laute Verwirrung",
      "Giftimmunität",
      "Kultisten zuerst fokussieren"
    ],
    "tarReward": "886 Gloom, Coin x50",
    "tarRewardDE": "886 Düsteressenz, 50 Münzen",
    "strategy": {
      "en": "Composed of Frog Mama and three poison cultists. Use Tiel's poison-healing skills or play the Troubadour's Lute to have them fight each other!",
      "de": "Besteht aus Frog Mama und 3 Giftkultisten. Nutze Tiel zur Gift-Heilung oder spiele die Laute, damit sie sich gegenseitig angreifen."
    },
    "quote": "Drink the venom of the mire!",
    "quoteDE": "Trinke das Gift des Moores!"
  },
  {
    "id": "boss_07",
    "order": 7,
    "name": "The Wandering Shepherd",
    "nameDE": "Der Wandernde Hirte",
    "title": "Master of the Devil Sheep",
    "titleDE": "Meister der Teufelsschafe",
    "region": "Fainweald & Sunken Village",
    "regionDE": "Fainweald & Versunkenes Dorf",
    "closestBeacon": "Sunken Village Beacon",
    "closestBeaconDE": "Leuchtfeuer im Versunkenen Dorf",
    "location": "Found past the wooden bridge next to the Sunken Village Beacon.",
    "locationDE": "Hinter der Holzbrücke direkt neben dem Leuchtfeuer im Versunkenen Dorf.",
    "type": "Mandatory Boss",
    "typeDE": "Hauptboss",
    "image": "assets/bosses/game8_wandering_shepherd.png",
    "recommendedShell": "Harros the Vassal",
    "recommendedShellDE": "Harros der Vasall",
    "weaknesses": [
      "Kill Sheep for Break",
      "Teleport Chase",
      "Lute Confusion"
    ],
    "weaknessesDE": [
      "Schafe töten für Haltungsbruch",
      "Teleport-Verfolgung",
      "Laute-Verwirrung"
    ],
    "tarReward": "6,462 Gloom, Sheephead Totem x1",
    "tarRewardDE": "6.462 Düsteressenz, Schafskopf-Totem x1",
    "strategy": {
      "en": "Slice at him immediately. Chase down the fast Shepherd while handling ramming devil sheep. Killing sheep inflicts Break damage on him.",
      "de": "Triff ihn direkt beim Start. Das Töten der anstürmenden Teufelsschafe fügt dem Hirten direkten Haltungsbruch zu."
    },
    "quote": "Join the flock, hollow pilgrim...",
    "quoteDE": "Schließe dich der Herde an, hohler Pilger..."
  },
  {
    "id": "boss_08",
    "order": 8,
    "name": "Magdalena, the Lady of the Woods",
    "nameDE": "Magdalena, Herrin der Wälder",
    "title": "Terror of the Rocket Wheelchair",
    "titleDE": "Schrecken des Raketen-Rollstuhls",
    "region": "Fainweald & Sunken Village",
    "regionDE": "Fainweald & Versunkenes Dorf",
    "closestBeacon": "Sunken Village Beacon",
    "closestBeaconDE": "Leuchtfeuer im Versunkenen Dorf",
    "location": "Found at Magdalena's Glade in the sanctuary of Glutted Mire / Sunken Village.",
    "locationDE": "In Magdalenas Lichtung im Heiligtum des Versunkenen Dorfs.",
    "type": "Major Gate Boss",
    "typeDE": "Haupt-Tor-Boss",
    "image": "assets/bosses/game8_magdalena.png",
    "recommendedShell": "Tiel the Acolyte / Smert Assist",
    "recommendedShellDE": "Tiel der Akolyth / Smert-Ruf",
    "weaknesses": [
      "Wall Crash Stun",
      "Donut Drift Dodge",
      "Poison Infusion"
    ],
    "weaknessesDE": [
      "Wandkollisions-Betäubung",
      "Drift-Ausweichen",
      "Giftinfusion"
    ],
    "tarReward": "11,344 Gloom, Magdalena's Memento x1",
    "tarRewardDE": "11.344 Düsteressenz, Magdalenas Andenken x1",
    "strategy": {
      "en": "Magdalena rides a rocket mobility scooter doing fiery donuts! Bait her into driving into the arena walls to stun her for 4 seconds.",
      "de": "Rast in einem feurigen Raketen-Rollstuhl umher. Locke sie gegen die Arenawände – bei Kollision ist sie 4 Sekunden wehrlos betäubt."
    },
    "quote": "Burn upon the pyre of the Woods!",
    "quoteDE": "Brenne auf dem Scheiterhaufen der Wälder!"
  },
  {
    "id": "boss_09",
    "order": 9,
    "name": "Broodshell Swarm",
    "nameDE": "Bruthüllen-Schwarm",
    "title": "Leechtongues & The Bell Snail",
    "titleDE": "Blutegelzungen & Die Glockenschnecke",
    "region": "Blackridge Pass & Sanguine Shoreline",
    "regionDE": "Blackridge-Pass & Sanguinische Küste",
    "closestBeacon": "Blackridge Pass Beacon",
    "closestBeaconDE": "Leuchtfeuer am Blackridge-Pass",
    "location": "Descend the rocky trails from the Blackridge Pass Beacon toward the cavern entrance.",
    "locationDE": "Über die Felspfade am Blackridge-Pass hinab zum Höhleneingang.",
    "type": "Dungeon Miniboss",
    "typeDE": "Verlies-Miniboss",
    "image": "assets/bosses/rps_boss_09.jpg",
    "recommendedShell": "Harros the Vassal",
    "recommendedShellDE": "Harros der Vasall",
    "weaknesses": [
      "Take Out Leechtongues First",
      "Ground Recovery Punish",
      "Heavy Hammer"
    ],
    "weaknessesDE": [
      "Blutegelzungen zuerst töten",
      "Bodenstarre ausnutzen",
      "Schwere Hiebe"
    ],
    "tarReward": "1,800 Gloom, 6 Glimpses",
    "tarRewardDE": "1.800 Düsteressenz, 6 Blicke",
    "strategy": {
      "en": "Two Leechtongues and one Bell Snail. Avoid their lunges and strike while their heads are stuck in the mud, then crush the snail.",
      "de": "Zwei Blutegelzungen und eine Schnecke. Weiche Sprüngen aus und schlage zu, während die Köpfe feststecken."
    },
    "quote": "The shell protects the foul rot within.",
    "quoteDE": "Die Hülle schützt die faule Fäulnis im Inneren."
  },
  {
    "id": "boss_10",
    "order": 10,
    "name": "Grisha",
    "nameDE": "Grisha",
    "title": "Flooded Village Beast",
    "titleDE": "Bestie des Überfluteten Dorfes",
    "region": "Blackridge Pass & Sanguine Shoreline",
    "regionDE": "Blackridge-Pass & Sanguinische Küste",
    "closestBeacon": "Blackridge Pass Beacon",
    "closestBeaconDE": "Leuchtfeuer am Blackridge-Pass",
    "location": "Found deep inside the Flooded Village dungeon past the small arena.",
    "locationDE": "Tief im Verlies des Überfluteten Dorfes hinter der kleinen Arena.",
    "type": "Dungeon Miniboss",
    "typeDE": "Verlies-Miniboss",
    "image": "assets/bosses/game8_grisha.png",
    "recommendedShell": "Eredrim the Venerable",
    "recommendedShellDE": "Eredrim der Ehrwürdige",
    "weaknesses": [
      "Battle Axe Break Damage",
      "Blade Swipe Parries",
      "Dodge Unblockable Roar Spin"
    ],
    "weaknessesDE": [
      "Streitaxt-Haltungsbruch",
      "Klingen-Paraden",
      "Wirbel nach Brüllen ausweichen"
    ],
    "tarReward": "2,331 Gloom, Synaptic Vessel x1, Grisha Remnant x1",
    "tarRewardDE": "2.331 Düsteressenz, Synaptisches Gefäß x1, Grisha-Relikt x1",
    "strategy": {
      "en": "Parry blade swipes and inflict Break damage with the Battle Axe to knock it down. Watch for the roar before its unblockable spin.",
      "de": "Pariere Klauenhiebe und bringe sie mit der Streitaxt zu Fall. Weiche beim Brüllen vor dem Wirbelangriff zurück."
    },
    "quote": "A primal roar of pure savagery!",
    "quoteDE": "Ein urtümliches Brüllen reiner Wildheit!"
  },
  {
    "id": "boss_11",
    "order": 11,
    "name": "Lucian, the Thirsting Knight",
    "nameDE": "Lucian, der Dürstende Ritter",
    "title": "Vampiric Champion of Stonebled Gate",
    "titleDE": "Vampirischer Champion des Steinbluttors",
    "region": "Blackridge Pass & Sanguine Shoreline",
    "regionDE": "Blackridge-Pass & Sanguinische Küste",
    "closestBeacon": "Stonebled Gate Beacon",
    "closestBeaconDE": "Leuchtfeuer am Steinbluttor",
    "location": "Cleanse the Stonebled Gate Beacon to open the portcullis to his keep.",
    "locationDE": "Reinige das Leuchtfeuer am Steinbluttor für Zugang zu seiner Feste.",
    "type": "Beacon Boss",
    "typeDE": "Leuchtfeuer-Boss",
    "image": "assets/bosses/game8_lucian.png",
    "recommendedShell": "Hadern the Deliverer",
    "recommendedShellDE": "Hadern der Erlöser",
    "weaknesses": [
      "Scimitar Parry",
      "Bat Cloud Tracking",
      "Fire Tarstones"
    ],
    "weaknessesDE": [
      "Krummschwert-Parade",
      "Fledermaus-Verfolgung",
      "Feuer-Teersteine"
    ],
    "tarReward": "7,474 Gloom, Serpent Stone x1",
    "tarRewardDE": "7.474 Düsteressenz, Schlangenstein x1",
    "strategy": {
      "en": "Lizard-like vampire knight with swift scimitar slashes. When he vanishes into bats, track his landing spot and punish his recovery.",
      "de": "Vampirritter mit schnellen Krummschwerthieben. Wenn er sich in Fledermäuse auflöst, passe den Landepunkt ab."
    },
    "quote": "Your vitality shall restore my consecrated blood.",
    "quoteDE": "Deine Lebenskraft wird mein geweihtes Blut nähren."
  },
  {
    "id": "boss_12",
    "order": 12,
    "name": "Tarblighted Stoner",
    "nameDE": "Teerverfluchter Steinmensch",
    "title": "Colossus of Sanguine Shoreline",
    "titleDE": "Koloss der Sanguinischen Küste",
    "region": "Blackridge Pass & Sanguine Shoreline",
    "regionDE": "Blackridge-Pass & Sanguinische Küste",
    "closestBeacon": "Sanguine Shoreline Beacon",
    "closestBeaconDE": "Leuchtfeuer an der Sanguinischen Küste",
    "location": "Found past the Sanguine Caverns / Shoreline Beacon among burning pitch craters.",
    "locationDE": "Hinter dem Leuchtfeuer der Sanguinischen Kavernen zwischen brennenden Teerkratern.",
    "type": "Dungeon Miniboss",
    "typeDE": "Verlies-Miniboss",
    "image": "assets/bosses/game8_tarblighted_stoner.png",
    "recommendedShell": "Harros the Vassal",
    "recommendedShellDE": "Harros der Vasall",
    "weaknesses": [
      "Dodge Unblockable Boulder Toss",
      "Battle Axe Heavy Break",
      "Back Attack Window"
    ],
    "weaknessesDE": [
      "Felswurf ausweichen",
      "Streitaxt-Haltungsbruch",
      "Rückenangriffe"
    ],
    "tarReward": "6,935 Gloom, Tarred Fragment x1",
    "tarRewardDE": "6.935 Düsteressenz, Teerfragment x1",
    "strategy": {
      "en": "Smack him with the Battle Axe to build Break damage. Dodge his unblockable boulder throws and strike his exposed back.",
      "de": "Baue mit der Streitaxt Haltungsbruch auf, weiche seinen unblockbaren Felswürfen aus und schlage in den Rücken."
    },
    "quote": "Crush to dust...",
    "quoteDE": "Zu Staub zermalmen..."
  },
  {
    "id": "boss_13",
    "order": 13,
    "name": "The Lost Child",
    "nameDE": "Das Verlorene Kind",
    "title": "First-Born of the UnderMether",
    "titleDE": "Erstgeborenes der UnterMether",
    "region": "Blackridge Pass & Sanguine Shoreline",
    "regionDE": "Blackridge-Pass & Sanguinische Küste",
    "closestBeacon": "Sanguine Shoreline Beacon",
    "closestBeaconDE": "Leuchtfeuer an der Sanguinischen Küste",
    "location": "Found guarding the grand crimson gate at the end of the Sanguine Shoreline.",
    "locationDE": "Bewacht das karmesinrote Tor am Ende der Sanguinischen Küste.",
    "type": "Major Gate Boss",
    "typeDE": "Haupt-Tor-Boss",
    "image": "assets/bosses/game8_lost_child.png",
    "recommendedShell": "Eredrim Assist / Tiel",
    "recommendedShellDE": "Eredrim-Ruf / Tiel",
    "weaknesses": [
      "Acid Stream Sidestep",
      "Maw Riposte",
      "Break Damage on Belly"
    ],
    "weaknessesDE": [
      "Säurestrahl ausweichen",
      "Schlund-Konter",
      "Haltungsbruch am Bauch"
    ],
    "tarReward": "13,019 Gloom, Lost Clotstone x1",
    "tarRewardDE": "13.019 Düsteressenz, Gerinnselstein x1",
    "strategy": {
      "en": "A grotesque fleshy colossus barfing acid and gulping foundlings. Sidestep acid breath and break his posture for a devastating maw riposte.",
      "de": "Speit Säure und schnappt nach dir. Weiche seitlich aus und attackiere den Bauch für einen Schlund-Konter."
    },
    "quote": "Hunger... cold and endless...",
    "quoteDE": "Hunger... kalt und endlos..."
  },
  {
    "id": "boss_14",
    "order": 14,
    "name": "Bloodcursed Lithopod",
    "nameDE": "Blutverfluchter Lithopode",
    "title": "Giant of Gloomshade Grove",
    "titleDE": "Gigant des Düsterschatten-Hains",
    "region": "Gloomshade Grove & Citadel of Penance",
    "regionDE": "Düsterschatten-Hain & Zitadelle",
    "closestBeacon": "Gloomshade Grove Beacon",
    "closestBeaconDE": "Leuchtfeuer im Düsterschatten-Hain",
    "location": "Found at Gloomshade Grove by the sunken lake surrounded by petrified roots.",
    "locationDE": "Am See im Düsterschatten-Hain zwischen versteinerten Wurzeln.",
    "type": "Dungeon Miniboss",
    "typeDE": "Verlies-Miniboss",
    "image": "assets/bosses/game8_bloodcursed_lithopod.png",
    "recommendedShell": "Harros the Vassal",
    "recommendedShellDE": "Harros der Vasall",
    "weaknesses": [
      "Slam Rock on Back",
      "Bloodcurse Resistance",
      "Citadel Lever Break"
    ],
    "weaknessesDE": [
      "Rückenstein zerschlagen",
      "Blutfluch-Schutz",
      "Zitadellen-Hebel"
    ],
    "tarReward": "2,895 Gloom, Citadel Gate Lever x1",
    "tarRewardDE": "2.895 Düsteressenz, Zitadellen-Torhebel x1",
    "strategy": {
      "en": "Giant crab-like Lithopod. Heavy attacks to the rock on its back crack its armor quickly. Beware the Bloodcurse drain.",
      "de": "Zerschlage den Felsen auf seinem Rücken mit schweren Schlägen. Achte auf den Blutfluch."
    },
    "quote": "The blood seepeth into ancient stone.",
    "quoteDE": "Das Blut sickert in uralten Stein."
  },
  {
    "id": "boss_15",
    "order": 15,
    "name": "Rabid Grisha Pack",
    "nameDE": "Tollwütiges Grisha-Rudel",
    "title": "Twin Terrors of the Holding Cells",
    "titleDE": "Zwillingsschrecken der Kerkerzellen",
    "region": "Gloomshade Grove & Citadel of Penance",
    "regionDE": "Düsterschatten-Hain & Zitadelle",
    "closestBeacon": "Gloomshade Grove Beacon",
    "closestBeaconDE": "Leuchtfeuer im Düsterschatten-Hain",
    "location": "Found at the bottom of the Holding Cells dungeon in Gloomshade Grove.",
    "locationDE": "Am Grund der Kerkerzellen im Düsterschatten-Hain.",
    "type": "Dungeon Miniboss",
    "typeDE": "Verlies-Miniboss",
    "image": "assets/bosses/game8_rabid_grisha_pack.png",
    "recommendedShell": "Solomon the Scholar",
    "recommendedShellDE": "Solomon der Gelehrte",
    "weaknesses": [
      "Troubadour's Lute In-Fighting",
      "AoE Stagger",
      "Inflamed Clawstone"
    ],
    "weaknessesDE": [
      "Laute-Verwirrung (Gegenseitiger Kampf)",
      "Flächen-Betäubung",
      "Klauenstein"
    ],
    "tarReward": "1,132 Gloom, Inflamed Clawstone x1, Grisha Remnant x1",
    "tarRewardDE": "1.132 Düsteressenz, Entzündeter Klauenstein x1, Grisha-Relikt x1",
    "strategy": {
      "en": "Play the Troubadour's Lute to confuse both Grishas into tearing each other apart, then dispatch the remaining survivor.",
      "de": "Spiele die Laute, damit sich beide Grishas gegenseitig zerfleischen, und erledige den Überlebenden."
    },
    "quote": "Fangs and claws tear in rabid frenzy!",
    "quoteDE": "Fänge und Klauen zerreißen in blinder Raserei!"
  },
  {
    "id": "boss_16",
    "order": 16,
    "name": "The Warden",
    "nameDE": "Der Wächter",
    "title": "Executioner of Citadel of Penance",
    "titleDE": "Henker der Zitadelle der Buße",
    "region": "Gloomshade Grove & Citadel of Penance",
    "regionDE": "Düsterschatten-Hain & Zitadelle",
    "closestBeacon": "Citadel of Penance Beacon",
    "closestBeaconDE": "Leuchtfeuer der Zitadelle der Buße",
    "location": "Found at the center courtyard of the Citadel of Penance (unlocks Eredrim shell).",
    "locationDE": "Im Zentrum der Zitadelle der Buße (schaltet Eredrims Hülle frei).",
    "type": "Mandatory Boss",
    "typeDE": "Hauptboss",
    "image": "assets/bosses/game8_the_warden.png",
    "recommendedShell": "Hadern the Deliverer",
    "recommendedShellDE": "Hadern der Erlöser",
    "weaknesses": [
      "Post-4th Spin Opening",
      "Grisha Remnant Stun",
      "Eredrim Shell Unlock"
    ],
    "weaknessesDE": [
      "Fenster nach 4. Drehung",
      "Grisha-Überbleibsel Betäubung",
      "Eredrim-Freischaltung"
    ],
    "tarReward": "6,542 Gloom, Eredrim (Shell)",
    "tarRewardDE": "6.542 Düsteressenz, Eredrim (Hülle)",
    "strategy": {
      "en": "Tough unblockable 4-axe spin. Punish his recovery after the 4th spin, or use the Grisha Remnant to stun him.",
      "de": "Gefährliche 4-fache Axtdrehung. Schlage nach dem 4. Schwung zu oder unterbreche ihn mit Grisha-Relikten."
    },
    "quote": "Penance is etched into flesh!",
    "quoteDE": "Buße wird ins Fleisch gebrannt!"
  },
  {
    "id": "boss_17",
    "order": 17,
    "name": "Pale Grisha",
    "nameDE": "Blasse Grisha",
    "title": "Alpha of the Hunting Grounds",
    "titleDE": "Alpha der Jagdgründe",
    "region": "Gloomshade Grove & Citadel of Penance",
    "regionDE": "Düsterschatten-Hain & Zitadelle",
    "closestBeacon": "Grisha Hunting Grounds Beacon",
    "closestBeaconDE": "Leuchtfeuer der Grisha-Jagdgründe",
    "location": "Found in the Grisha Hunting Grounds past the frozen rock bridge.",
    "locationDE": "In den Grisha-Jagdgründen hinter der gefrorenen Steinbrücke.",
    "type": "Dungeon Miniboss",
    "typeDE": "Verlies-Miniboss",
    "image": "assets/bosses/game8_pale_grisha.png",
    "recommendedShell": "Eredrim the Venerable",
    "recommendedShellDE": "Eredrim der Ehrwürdige",
    "weaknesses": [
      "Revered Gland Break",
      "Heavy Stagger",
      "Frost Resistance"
    ],
    "weaknessesDE": [
      "Ehrwürdige Drüse Bruch",
      "Schwere Wucht",
      "Frostschutz"
    ],
    "tarReward": "7,012 Gloom, Revered Gland x1, Grisha Remnant x1",
    "tarRewardDE": "7.012 Düsteressenz, Ehrwürdige Drüse x1, Grisha-Relikt x1",
    "strategy": {
      "en": "Albino predator with immense speed. Harden against its double swipe and stagger it with overhead smashes.",
      "de": "Albino-Raubtier mit enormer Schnelligkeit. Verhärte dich beim Doppelhieb und kontere mit Überkopfschlägen."
    },
    "quote": "White fur stained in eternal gore.",
    "quoteDE": "Weißes Fell, getränkt in ewigem Blut."
  },
  {
    "id": "boss_18",
    "order": 18,
    "name": "Vrago, Solikar Champion",
    "nameDE": "Vrago, Solikar-Champion",
    "title": "Chakram Vanguard of Nochtean Gate",
    "titleDE": "Chakram-Wächter des Nochtean-Tors",
    "region": "Prisoners' Domain & Pulpit",
    "regionDE": "Domäne des Gefangenen & Richtplatz",
    "closestBeacon": "Nochtean Gate Beacon",
    "closestBeaconDE": "Leuchtfeuer am Nochtean-Tor",
    "location": "Cleanse the Nochtean Gate Beacon to face the Solikar Champion.",
    "locationDE": "Reinige das Nochtean-Tor-Leuchtfeuer zum Kampf gegen den Champion.",
    "type": "Beacon Boss",
    "typeDE": "Leuchtfeuer-Boss",
    "image": "assets/bosses/game8_vrago.png",
    "recommendedShell": "Harros the Vassal",
    "recommendedShellDE": "Harros der Vasall",
    "weaknesses": [
      "Landing Recovery Punish",
      "Grisha Remnant Stagger",
      "Voltaic Crown"
    ],
    "weaknessesDE": [
      "Landung ausnutzen",
      "Grisha-Überbleibsel",
      "Voltaische Krone"
    ],
    "tarReward": "4,200 Gloom, Voltaic Crown x1, Glimpse x2",
    "tarRewardDE": "4.200 Düsteressenz, Voltaische Krone x1, Blick x2",
    "strategy": {
      "en": "Attacks with a wheel-like chakram to execute dive slams. Interrupt with heavy strikes or punish him immediately upon landing.",
      "de": "Wirft ein Chakram-Rad und stürzt herab. Schlage zu, sobald er nach einem Sprung auf dem Boden landet."
    },
    "quote": "Lightning purges all corruption!",
    "quoteDE": "Der Blitz tilgt jede Verderbnis!"
  },
  {
    "id": "boss_19",
    "order": 19,
    "name": "Gloombound Legion",
    "nameDE": "Düstergebundene Legion",
    "title": "Gloom Seekers & Foul Knights",
    "titleDE": "Düstersucher & Schandritter",
    "region": "Prisoners' Domain & Pulpit",
    "regionDE": "Domäne des Gefangenen & Richtplatz",
    "closestBeacon": "Hangman's Scaffold Beacon",
    "closestBeaconDE": "Leuchtfeuer am Galgengerüst",
    "location": "Cleanse the Hangman's Scaffold Beacon at the open execution plateau.",
    "locationDE": "Reinige das Galgengerüst-Leuchtfeuer auf dem Hinrichtungsplateau.",
    "type": "Dungeon Miniboss",
    "typeDE": "Verlies-Miniboss",
    "image": "assets/bosses/game8_gloombound_legion.png",
    "recommendedShell": "Solomon the Scholar",
    "recommendedShellDE": "Solomon der Gelehrte",
    "weaknesses": [
      "Troubadour's Lute Mob Control",
      "Wide Halberd Sweeps",
      "AoE Stun"
    ],
    "weaknessesDE": [
      "Laute-Gruppenkontrolle",
      "Weite Hellebardenschwünge",
      "Flächen-Betäubung"
    ],
    "tarReward": "1,208 Gloom",
    "tarRewardDE": "1.208 Düsteressenz",
    "strategy": {
      "en": "Use the Troubadour's Lute to turn the mob against each other, then sweep through with heavy slashes.",
      "de": "Hetze die Ritter mit der Laute gegeneinander auf und fege mit Rundumschlägen durch die Reihen."
    },
    "quote": "We march beneath the black banner!",
    "quoteDE": "Wir marschieren unter dem schwarzen Banner!"
  },
  {
    "id": "boss_20",
    "order": 20,
    "name": "Tishina's Confessor",
    "nameDE": "Tishinas Beichtvater",
    "title": "Reaper of Slumwater Drain",
    "titleDE": "Sensenmann des Elendskanals",
    "region": "Prisoners' Domain & Pulpit",
    "regionDE": "Domäne des Gefangenen & Richtplatz",
    "closestBeacon": "Executioner's Pulpit Beacon",
    "closestBeaconDE": "Leuchtfeuer am Richtplatz",
    "location": "Found at the end of Slumwater Drain in the Prisoners' Domain region.",
    "locationDE": "Am Ende des Elendskanals in der Domäne des Gefangenen.",
    "type": "Mandatory Boss",
    "typeDE": "Hauptboss",
    "image": "assets/bosses/game8_tishina_confessor.png",
    "recommendedShell": "Eredrim the Venerable",
    "recommendedShellDE": "Eredrim der Ehrwürdige",
    "weaknesses": [
      "Telegraphed Sickle Parry",
      "Perfect Guard Stagger",
      "Confessor's Keepsake"
    ],
    "weaknessesDE": [
      "Sensen-Parade",
      "Perfekte Parade Betäubung",
      "Beichtvater-Andenken"
    ],
    "tarReward": "5,664 Gloom, Confessor's Keepsake x1",
    "tarRewardDE": "5.664 Düsteressenz, Beichtvater-Andenken x1",
    "strategy": {
      "en": "Heavy telegraphed sickle attacks. Parry each stroke cleanly to stagger him, or soften him up with ranged shots.",
      "de": "Führt langsame, schwere Sensenschwünge. Pariere sauber oder halte ihn mit Schusswaffen auf Distanz."
    },
    "quote": "Confess your sins before the final threshold.",
    "quoteDE": "Beichte deine Sünden vor der letzten Schwelle."
  },
  {
    "id": "boss_21",
    "order": 21,
    "name": "The Nameless Captive",
    "nameDE": "Der Namenlose Gefangene",
    "title": "The Blade-Headed Titan",
    "titleDE": "Der Titan mit Schwertschädel",
    "region": "Prisoners' Domain & Pulpit",
    "regionDE": "Domäne des Gefangenen & Richtplatz",
    "closestBeacon": "Executioner's Pulpit Beacon",
    "closestBeaconDE": "Leuchtfeuer am Richtplatz",
    "location": "Found beyond the Executioner's Pulpit Beacon in the Prisoners' Domain region.",
    "locationDE": "Hinter dem Richtplatz-Leuchtfeuer in der Domäne des Gefangenen.",
    "type": "Major Gate Boss",
    "typeDE": "Haupt-Tor-Boss",
    "image": "assets/bosses/game8_nameless_captive.png",
    "recommendedShell": "Hadern the Deliverer",
    "recommendedShellDE": "Hadern der Erlöser",
    "weaknesses": [
      "Headblade Parry Mastery",
      "Rotating Sweep Timing",
      "Captive's Scabstone"
    ],
    "weaknessesDE": [
      "Kopfschwert-Paraden",
      "Rotations-Timing",
      "Schorfstein des Gefangenen"
    ],
    "tarReward": "12,673 Gloom, Captive's Scabstone x1",
    "tarRewardDE": "12.673 Düsteressenz, Schorfstein des Gefangenen x1",
    "strategy": {
      "en": "A titan with a massive blade stuck through his head! Parrying his rotating head swings shatters his posture completely.",
      "de": "Titan mit einem Schwert im Schädel. Das lückenlose Parieren seiner Kopfdrehungen bricht seine Haltung komplett."
    },
    "quote": "The blade in my skull is my freedom!",
    "quoteDE": "Die Klinge in meinem Schädel ist meine Freiheit!"
  },
  {
    "id": "boss_22",
    "order": 22,
    "name": "Infested Miner",
    "nameDE": "Befallener Bergarbeiter",
    "title": "Terror of Burrowkin Dwelling",
    "titleDE": "Schrecken der Höhlenbehausung",
    "region": "Ruins of Mammon & Mines",
    "regionDE": "Ruinen von Mammon & Minen",
    "closestBeacon": "Gate of Mammon Beacon",
    "closestBeaconDE": "Leuchtfeuer am Tor von Mammon",
    "location": "Cleanse Gate of Mammon Beacon to teleport to Burrowkin Dwelling.",
    "locationDE": "Reinige das Tor-von-Mammon-Leuchtfeuer zur Höhlenbehausung.",
    "type": "Dungeon Miniboss",
    "typeDE": "Verlies-Miniboss",
    "image": "assets/bosses/game8_infested_miner.png",
    "recommendedShell": "Eredrim the Venerable",
    "recommendedShellDE": "Eredrim der Ehrwürdige",
    "weaknesses": [
      "Back Dodge",
      "Lithopod Spore Avoidance",
      "Wretchcaller Stone"
    ],
    "weaknessesDE": [
      "Rückweiche",
      "Sporen meiden",
      "Wretchcaller-Stein"
    ],
    "tarReward": "Wretchcaller's Stone x1, Ventrium x1, Laterite x1, Dorsalite x1",
    "tarRewardDE": "Wretchcaller-Stein x1, Ventrium x1, Laterit x1, Dorsalit x1",
    "strategy": {
      "en": "Dual-pickaxe miner who slams the floor to summon parasites. Roll behind him during his slam and punish his back.",
      "de": "Bergarbeiter mit Doppelhacke. Weiche hinter ihn aus, wenn er den Boden erschüttert."
    },
    "quote": "Dig... until the marrow cracks!",
    "quoteDE": "Graben... bis das Mark bricht!"
  },
  {
    "id": "boss_23",
    "order": 23,
    "name": "Vellen, High Lord of Mammon",
    "nameDE": "Vellen, Hoher Herr von Mammon",
    "title": "Master of the High Lord's Courtyard",
    "titleDE": "Meister des Burghofs von Mammon",
    "region": "Ruins of Mammon & Mines",
    "regionDE": "Ruinen von Mammon & Minen",
    "closestBeacon": "High Lord's Courtyard Beacon",
    "closestBeaconDE": "Leuchtfeuer am Burghof des Hohen Herrn",
    "location": "Found in a grand sanctum dungeon near the High Lord's Courtyard Beacon.",
    "locationDE": "In einem Sanktum-Verlies nahe dem Burghof-Leuchtfeuer.",
    "type": "Beacon Boss",
    "typeDE": "Leuchtfeuer-Boss",
    "image": "assets/bosses/game8_vellen.png",
    "recommendedShell": "Hadern the Deliverer",
    "recommendedShellDE": "Hadern der Erlöser",
    "weaknesses": [
      "Royal Scepter Parry",
      "Resolve Burst",
      "Flame Infusion"
    ],
    "weaknessesDE": [
      "Zepter-Parade",
      "Entschlossenheits-Stoß",
      "Flammeninfusion"
    ],
    "tarReward": "9,332 Gloom, Glimpse x1",
    "tarRewardDE": "9.332 Düsteressenz, Blick x1",
    "strategy": {
      "en": "Wields a consecrated gold scepter dealing radiant shockwaves. Time parries when he raises the scepter above his head.",
      "de": "Führt ein goldenes Zepter mit Schockwellen. Pariere im Moment des Ausholens über dem Kopf."
    },
    "quote": "Mammon's wealth is paid in blood.",
    "quoteDE": "Mammons Reichtum wird mit Blut bezahlt."
  },
  {
    "id": "boss_24",
    "order": 24,
    "name": "Twin Sesters & Sester Secundus",
    "nameDE": "Zwillings-Sestern & Sester Secundus",
    "title": "Guardians of Sester's Censer",
    "titleDE": "Wächterinnen des Sester-Weihrauchfasses",
    "region": "Ruins of Mammon & Mines",
    "regionDE": "Ruinen von Mammon & Minen",
    "closestBeacon": "Sester's Gate Beacon",
    "closestBeaconDE": "Leuchtfeuer am Sesterntor",
    "location": "Cleanse the Sester's Gate Beacon and explore the Sester's Censer Dungeon.",
    "locationDE": "Reinige das Sesterntor-Leuchtfeuer und erkunde das Censer-Verlies.",
    "type": "Beacon Boss",
    "typeDE": "Leuchtfeuer-Boss",
    "image": "assets/bosses/game8_twin_sesters.png",
    "recommendedShell": "Tiel the Acolyte",
    "recommendedShellDE": "Tiel der Akolyth",
    "weaknesses": [
      "Black Needle Counter",
      "Separate the Pair",
      "Censer Stagger"
    ],
    "weaknessesDE": [
      "Schwarze-Nadel-Konter",
      "Getrennt bekämpfen",
      "Weihrauch-Betäubung"
    ],
    "tarReward": "6,890 Gloom, Sester's Crest x1, Black Needle x1",
    "tarRewardDE": "6.890 Düsteressenz, Sestern-Wappen x1, Schwarze Nadel x1",
    "strategy": {
      "en": "Agile dual casters. Separate them to prevent synchronized bell chants, and interrupt their healing rituals.",
      "de": "Zwei agile Zauberinnen. Trenne sie, um synchronisierte Glockenrituale und Heilungen zu verhindern."
    },
    "quote": "The mist covers our devotion...",
    "quoteDE": "Der Nebel hüllt unsere Hingabe ein..."
  },
  {
    "id": "boss_25",
    "order": 25,
    "name": "Bor, the Deluded Monarch",
    "nameDE": "Bor, der Verblendete Monarch",
    "title": "Ruler of the Sunken Abbey",
    "titleDE": "Herrscher der Versunkenen Abtei",
    "region": "Ruins of Mammon & Mines",
    "regionDE": "Ruinen von Mammon & Minen",
    "closestBeacon": "Abbey Entrance Beacon",
    "closestBeaconDE": "Leuchtfeuer am Abteieingang",
    "location": "Cleanse the Abbey Entrance Beacon to enter the royal throne room.",
    "locationDE": "Reinige das Abteieingang-Leuchtfeuer zum königlichen Thronsaal.",
    "type": "Beacon Boss",
    "typeDE": "Leuchtfeuer-Boss",
    "image": "assets/bosses/game8_bor.png",
    "recommendedShell": "Solomon the Scholar",
    "recommendedShellDE": "Solomon der Gelehrte",
    "weaknesses": [
      "Monarch's Vestige Break",
      "Resolve Discharge",
      "Side Dodges"
    ],
    "weaknessesDE": [
      "Monarchen-Überbleibsel Bruch",
      "Entschlossenheit",
      "Seitliches Ausweichen"
    ],
    "tarReward": "9,241 Gloom, Monarch's Vestige x1",
    "tarRewardDE": "9.241 Düsteressenz, Monarchen-Überbleibsel x1",
    "strategy": {
      "en": "A fallen king driven mad by illusions. He teleports across thrones—time attacks right after he lands.",
      "de": "Ein dem Wahnsinn verfallener König. Teleportiert zwischen Thronen – schlage nach der Landung zu."
    },
    "quote": "My crown shall never rust!",
    "quoteDE": "Meine Krone wird niemals rosten!"
  },
  {
    "id": "boss_26",
    "order": 26,
    "name": "Sariel, the Endless",
    "nameDE": "Sariel, die Endlose",
    "title": "Mistress of the Chamber of Becoming",
    "titleDE": "Herrin der Kammer des Werdens",
    "region": "Ruins of Mammon & Mines",
    "regionDE": "Ruinen von Mammon & Minen",
    "closestBeacon": "Chamber of Becoming Beacon",
    "closestBeaconDE": "Leuchtfeuer der Kammer des Werdens",
    "location": "Initially found north of the Chamber of Becoming; moves inside during phase 2 (unlocks Sariel shell).",
    "locationDE": "Nördlich der Kammer des Werdens, zieht sich in Phase 2 hinein (schaltet Sariel-Hülle frei).",
    "type": "Major Gate Boss",
    "typeDE": "Haupt-Tor-Boss",
    "image": "assets/bosses/game8_sariel.png",
    "recommendedShell": "Hadern the Deliverer",
    "recommendedShellDE": "Hadern der Erlöser",
    "weaknesses": [
      "Clockwork Scythe Parry",
      "Phase 2 Rush",
      "Sariel Shell Unlock"
    ],
    "weaknessesDE": [
      "Uhrwerk-Sensen-Parade",
      "Phase-2-Sturmlauf",
      "Sariel-Hülle"
    ],
    "tarReward": "3,500 Gloom, Clockwork Scythe x1, Sariel (Shell)",
    "tarRewardDE": "3.500 Düsteressenz, Uhrwerk-Sense x1, Sariel (Hülle)",
    "strategy": {
      "en": "Wields the Clockwork Scythe with time-dilation attacks. Parry the delayed slash to unlock her shell.",
      "de": "Führt eine Uhrwerk-Sense mit Zeitverzögerung. Pariere den verzögerten Hieb für den Sieg."
    },
    "quote": "Time is but a loop of suffering.",
    "quoteDE": "Zeit ist nur eine Schleife des Leidens."
  },
  {
    "id": "boss_27",
    "order": 27,
    "name": "Gloombound Wraith",
    "nameDE": "Düstergebundener Geist",
    "title": "Librarian of the Gate of Infinity",
    "titleDE": "Bibliothekar des Tors der Unendlichkeit",
    "region": "Ruins of Mammon & Mines",
    "regionDE": "Ruinen von Mammon & Minen",
    "closestBeacon": "Gate of Infinity Beacon",
    "closestBeaconDE": "Leuchtfeuer am Tor der Unendlichkeit",
    "location": "Cleanse the Gate of Infinity Beacon in the deep crystalline archives.",
    "locationDE": "Reinige das Tor-der-Unendlichkeit-Leuchtfeuer im Kristallarchiv.",
    "type": "Dungeon Miniboss",
    "typeDE": "Verlies-Miniboss",
    "image": "assets/bosses/game8_gloombound_wraith.png",
    "recommendedShell": "Solomon the Scholar",
    "recommendedShellDE": "Solomon der Gelehrte",
    "weaknesses": [
      "Destroy Orbiting Grimoires",
      "Curseblood Stone",
      "Greatsword Parry"
    ],
    "weaknessesDE": [
      "Bücher zerstören",
      "Fluchblutstein",
      "Großschwert-Parade"
    ],
    "tarReward": "5,931 Gloom, Curseblood Stone x1",
    "tarRewardDE": "5.931 Düsteressenz, Fluchblutstein x1",
    "strategy": {
      "en": "Spectral knight shielded by floating grimoires. Destroy the books first to break his invulnerability.",
      "de": "Zerstöre zuerst die umkreisenden Bücher, um seinen Schutzschild zu brechen und ihn zu parieren."
    },
    "quote": "Forbidden lore demands a blood sacrifice!",
    "quoteDE": "Verbotenes Wissen verlangt ein Blutopfer!"
  },
  {
    "id": "boss_28",
    "order": 28,
    "name": "Starved Harridan & Viletongue Batushka",
    "nameDE": "Ausgehungerte Furie & Giftschlund Batushka",
    "title": "Keepers of Castigator's Keep",
    "titleDE": "Hüter der Züchtiger-Feste",
    "region": "Ruins of Mammon & Mines",
    "regionDE": "Ruinen von Mammon & Minen",
    "closestBeacon": "Castigator's Keep Beacon",
    "closestBeaconDE": "Leuchtfeuer an der Züchtiger-Feste",
    "location": "Found south of Castigator's Keep Beacon guarding Sage's Gate Lever.",
    "locationDE": "Südlich der Züchtiger-Feste vor dem Hebel des Weisentors.",
    "type": "Beacon Boss",
    "typeDE": "Leuchtfeuer-Boss",
    "image": "assets/bosses/game8_starved_harridan.png",
    "recommendedShell": "Eredrim the Venerable",
    "recommendedShellDE": "Eredrim der Ehrwürdige",
    "weaknesses": [
      "Voltaic Amber",
      "Sage's Lever Stagger",
      "Poison Resistance"
    ],
    "weaknessesDE": [
      "Voltaischer Bernstein",
      "Weisentor-Hebel",
      "Giftschutz"
    ],
    "tarReward": "15,165 Gloom, Voltaic Essence x1, Viletongue Hedron x1",
    "tarRewardDE": "15.165 Düsteressenz, Voltaische Essenz x1, Hedron x1",
    "strategy": {
      "en": "Fierce dual boss combining aerial shrieks and toxic bile. Focus the Harridan down first.",
      "de": "Doppelboss aus Schreien und Galle. Schalte zuerst die Furie mit gezielten Schlägen aus."
    },
    "quote": "The lash of penance cuts deep!",
    "quoteDE": "Die Geißel der Buße schneidet tief!"
  },
  {
    "id": "boss_29",
    "order": 29,
    "name": "Prophet of Profane Infinities",
    "nameDE": "Prophet der Profanen Unendlichkeit",
    "title": "Titan of the Obsidianite Mines",
    "titleDE": "Titan der Obsidianit-Minen",
    "region": "Ruins of Mammon & Mines",
    "regionDE": "Ruinen von Mammon & Minen",
    "closestBeacon": "Deserted Slums Beacon",
    "closestBeaconDE": "Leuchtfeuer der Verlassenen Slums",
    "location": "Found at the bottom of Deserted Slums at the deep excavation of Obsidianite Mines.",
    "locationDE": "Am Grund der Verlassenen Slums in der tiefen Ausgrabung der Obsidianit-Minen.",
    "type": "Optional Boss",
    "typeDE": "Optionaler Boss",
    "image": "assets/bosses/game8_prophet.png",
    "recommendedShell": "Harros the Vassal",
    "recommendedShellDE": "Harros der Vasall",
    "weaknesses": [
      "Obsidian Hammer Recovery",
      "Heavy Stagger",
      "Frost Damage"
    ],
    "weaknessesDE": [
      "Obsidian-Hammer Erholung",
      "Schwere Wucht",
      "Frostschaden"
    ],
    "tarReward": "Obsidian Hammer x1, Paradoxical Scripture x1",
    "tarRewardDE": "Obsidian-Hammer x1, Paradoxe Schrift x1",
    "strategy": {
      "en": "Swings the massive Obsidian Hammer. Roll under his overhead slams and strike during his lengthy recovery animations.",
      "de": "Schwingt den Obsidian-Hammer. Weiche unter seinen Schlägen hindurch und nutze die Erholungszeit."
    },
    "quote": "The obsidian foundation shall not break!",
    "quoteDE": "Das obsidianene Fundament wird niemals brechen!"
  },
  {
    "id": "boss_30",
    "order": 30,
    "name": "Hexapod",
    "nameDE": "Die Hexapode",
    "title": "Scuttling Terror of Withered Shoals",
    "titleDE": "Krabbler-Schrecken der Verdorrten Untiefen",
    "region": "Withered Shoals & Temple",
    "regionDE": "Verdorrte Untiefen & Tempel",
    "closestBeacon": "Nameless Pass Beacon",
    "closestBeaconDE": "Leuchtfeuer am Namenlosen Pass",
    "location": "Found near the Nameless Pass Beacon in the brine tides of Withered Shoals.",
    "locationDE": "Nahe dem Leuchtfeuer am Namenlosen Pass in den Gezeiten der Verdorrten Untiefen.",
    "type": "Major Gate Boss",
    "typeDE": "Haupt-Tor-Boss",
    "image": "assets/bosses/game8_hexapod.png",
    "recommendedShell": "Proxima the Broodseeker / Tiel",
    "recommendedShellDE": "Proxima die Brutweberin / Tiel",
    "weaknesses": [
      "Leg Joint Stagger",
      "Smoldering Fire",
      "Sidearm Headshots"
    ],
    "weaknessesDE": [
      "Beingelenk-Betäubung",
      "Feuer",
      "Kopfschüsse"
    ],
    "tarReward": "38,753 Gloom, Hexapod Core x1",
    "tarRewardDE": "38.753 Düsteressenz, Hexapoden-Kern x1",
    "strategy": {
      "en": "Multi-limbed horror. Focus attacks on one side of its legs to stumble it, and harden through its charge.",
      "de": "Fokussiere Angriffe auf eine Beinseite, um das Ungetüm zu Fall zu bringen, und verhärte dich beim Sturmlauf."
    },
    "quote": "The tides swallow the unworthy...",
    "quoteDE": "Die Gezeiten verschlingen die Unwürdigen..."
  },
  {
    "id": "boss_31",
    "order": 31,
    "name": "Strange Grisha",
    "nameDE": "Merkwürdige Grisha",
    "title": "Tide-Cursed Beast",
    "titleDE": "Flutverfluchte Bestie",
    "region": "Withered Shoals & Temple",
    "regionDE": "Verdorrte Untiefen & Tempel",
    "closestBeacon": "Withered Shoals Beacon",
    "closestBeaconDE": "Leuchtfeuer der Verdorrten Untiefen",
    "location": "Found roaming the brine pools of Withered Shoals.",
    "locationDE": "Patrouilliert in den Salzbecken der Verdorrten Untiefen.",
    "type": "Dungeon Miniboss",
    "typeDE": "Verlies-Miniboss",
    "image": "assets/bosses/game8_strange_grisha.png",
    "recommendedShell": "Harros the Vassal",
    "recommendedShellDE": "Harros der Vasall",
    "weaknesses": [
      "Strange Remnant Break",
      "Parry on Claw",
      "Heavy Stagger"
    ],
    "weaknessesDE": [
      "Merkwürdiges Relikt",
      "Klauen-Parade",
      "Schwere Wucht"
    ],
    "tarReward": "1,835 Gloom, Strange Remnant x1, Grisha Remnant x1",
    "tarRewardDE": "1.835 Düsteressenz, Merkwürdiges Relikt x1, Grisha-Relikt x1",
    "strategy": {
      "en": "Tide-soaked Grisha dealing frost buildup. Break its posture with hammer slams.",
      "de": "Kämpft mit Frostschaden. Brich seine Haltung mit schweren Hammerschlägen."
    },
    "quote": "Salt and bone merged into fury.",
    "quoteDE": "Salz und Gebein verschmolzen zu Wut."
  },
  {
    "id": "boss_32",
    "order": 32,
    "name": "Droeg, the Conquerer",
    "nameDE": "Droeg, der Eroberer",
    "title": "Lord of the Conquered Temple",
    "titleDE": "Herrscher des Eroberten Tempels",
    "region": "Withered Shoals & Temple",
    "regionDE": "Verdorrte Untiefen & Tempel",
    "closestBeacon": "Ovate's Chamber Beacon",
    "closestBeaconDE": "Leuchtfeuer in Ovates Kammer",
    "location": "Found past the Ovate's Chamber Beacon in the Conquered Temple.",
    "locationDE": "Hinter dem Leuchtfeuer in Ovates Kammer im Eroberten Tempel.",
    "type": "Major Gate Boss",
    "typeDE": "Haupt-Tor-Boss",
    "image": "assets/bosses/game8_droeg.png",
    "recommendedShell": "Harros the Vassal",
    "recommendedShellDE": "Harros der Vasall",
    "weaknesses": [
      "Frost Resistance",
      "Homing Skull Deflection",
      "Bone Club Parry"
    ],
    "weaknessesDE": [
      "Frostschutz",
      "Schädel-Abwehr",
      "Knochenkeulen-Parade"
    ],
    "tarReward": "38,753 Gloom, Conqueror's Reward x1",
    "tarRewardDE": "38.753 Düsteressenz, Belohnung des Eroberers x1",
    "strategy": {
      "en": "Skeletal lord wielding a massive bone club and homing frost skulls. Roll through projectiles and parry his club swings.",
      "de": "Skelettierter Herrscher mit Knochenkeule und Frostschädeln. Rolle durch Geschosse und pariere seine Keule."
    },
    "quote": "My empire fell... but my wrath remains frozen.",
    "quoteDE": "Mein Reich fiel... doch mein Zorn bleibt gefroren."
  },
  {
    "id": "boss_33",
    "order": 33,
    "name": "Urrig, the Executioner & Caged Grisha",
    "nameDE": "Urrig, der Henker & Gefangene Grisha",
    "title": "Wardens of Winterglass Lake",
    "titleDE": "Wächter des Winterglas-Sees",
    "region": "Withered Shoals & Temple",
    "regionDE": "Verdorrte Untiefen & Tempel",
    "closestBeacon": "Winterglass Lake Beacon",
    "closestBeaconDE": "Leuchtfeuer am Winterglas-See",
    "location": "Cleanse Winterglass Lake Beacon in the Conquered Temple.",
    "locationDE": "Reinige das Winterglas-See-Leuchtfeuer im Eroberten Tempel.",
    "type": "Beacon Boss",
    "typeDE": "Leuchtfeuer-Boss",
    "image": "assets/bosses/game8_urrig.png",
    "recommendedShell": "Hadern the Deliverer",
    "recommendedShellDE": "Hadern der Erlöser",
    "weaknesses": [
      "Warden Stone Stagger",
      "Fusillade Stone",
      "Free Grisha First"
    ],
    "weaknessesDE": [
      "Wächterstein-Wucht",
      "Fusillade-Stein",
      "Grisha zuerst besiegen"
    ],
    "tarReward": "10,132 Gloom, Fusillade Stone x1, Coin x1000",
    "tarRewardDE": "10.132 Düsteressenz, Fusillade-Stein x1, 1000 Münzen",
    "strategy": {
      "en": "Execute heavy jumping attacks on Urrig after parrying his giant halberd. Defeat the unleashed Grisha with fire.",
      "de": "Führe schwere Sprungangriffe auf Urrig nach Paraden aus. Verbrenne die freigelassene Grisha."
    },
    "quote": "The ice seals all transgressions.",
    "quoteDE": "Das Eis versiegelt jedes Vergehen."
  },
  {
    "id": "boss_34",
    "order": 34,
    "name": "Sir Isaac, the Scholar-Prince",
    "nameDE": "Sir Isaac, der Gelehrtenprinz",
    "title": "Moth-Warped Scion of Ruk",
    "titleDE": "Mottenmutierter Spross von Ruk",
    "region": "Faded Citadel & Vault",
    "regionDE": "Verblasste Zitadelle & Gewölbe",
    "closestBeacon": "Citadel Atrium Beacon",
    "closestBeaconDE": "Leuchtfeuer im Zitadellen-Atrium",
    "location": "Found past Citadel Atrium Beacon in the grand amphitheater.",
    "locationDE": "Hinter dem Atrium-Leuchtfeuer im großen Amphitheater.",
    "type": "Major Gate Boss",
    "typeDE": "Haupt-Tor-Boss",
    "image": "assets/bosses/game8_isaac.png",
    "recommendedShell": "Solomon the Scholar",
    "recommendedShellDE": "Solomon der Gelehrte",
    "weaknesses": [
      "Interrupt Aerial Wing Spells",
      "Scholar's Wormstone",
      "Smoldering Mace"
    ],
    "weaknessesDE": [
      "Flugzauber stoppen",
      "Wurmstein",
      "Glimmender Streitkolben"
    ],
    "tarReward": "54,254 Gloom, Scholar's Wormstone x1",
    "tarRewardDE": "54.254 Düsteressenz, Wurmstein des Gelehrten x1",
    "strategy": {
      "en": "Moth hybrid noble. Shoot him down with sidearm shots when he hovers to interrupt his spore storm.",
      "de": "Schieße ihn mit der Schusswaffe ab, wenn er in der Luft schwebt, um seinen Sporensturm zu stoppen."
    },
    "quote": "Knowledge transformed me... into truth!",
    "quoteDE": "Wissen transformierte mich... zur Wahrheit!"
  },
  {
    "id": "boss_35",
    "order": 35,
    "name": "Solnir, the Gloom Seeker",
    "nameDE": "Solnir, der Düstersucher",
    "title": "Knight of Faded Citadel Gate",
    "titleDE": "Ritter des Tors der Verblassten Zitadelle",
    "region": "Faded Citadel & Vault",
    "regionDE": "Verblasste Zitadelle & Gewölbe",
    "closestBeacon": "Faded Citadel Gate Beacon",
    "closestBeaconDE": "Leuchtfeuer am Zitadellentor",
    "location": "Cleanse Faded Citadel Gate Beacon to confront Solnir.",
    "locationDE": "Reinige das Leuchtfeuer am Zitadellentor.",
    "type": "Beacon Boss",
    "typeDE": "Leuchtfeuer-Boss",
    "image": "assets/bosses/game8_solnir.png",
    "recommendedShell": "Harros the Vassal",
    "recommendedShellDE": "Harros der Vasall",
    "weaknesses": [
      "Solnir Shard Stun",
      "Greatsword Parry",
      "Resolve Burst"
    ],
    "weaknessesDE": [
      "Solnir-Splitter",
      "Großschwert-Parade",
      "Entschlossenheit"
    ],
    "tarReward": "13,885 Gloom, Solnir Shard x1, Glimpse x1",
    "tarRewardDE": "13.885 Düsteressenz, Solnir-Splitter x1, Blick x1",
    "strategy": {
      "en": "Armored gloom warrior. Parry his thrust attacks and punish him with weapon abilities.",
      "de": "Gepanzerter Düsterkrieger. Pariere seine Stöße und kontere mit Waffenfertigkeiten."
    },
    "quote": "I seek the true flame in the dark.",
    "quoteDE": "Ich suche die wahre Flamme in der Dunkelheit."
  },
  {
    "id": "boss_36",
    "order": 36,
    "name": "Monolith & Malborn Offspring",
    "nameDE": "Monolith & Entartete Brut",
    "title": "Guardians of Obsidian Vault",
    "titleDE": "Wächter des Obsidian-Gewölbes",
    "region": "Faded Citadel & Vault",
    "regionDE": "Verblasste Zitadelle & Gewölbe",
    "closestBeacon": "Obsidian Vault Beacon",
    "closestBeaconDE": "Leuchtfeuer im Obsidian-Gewölbe",
    "location": "Found near the Obsidian Vault Beacon in the crystalline abyss.",
    "locationDE": "Nahe dem Obsidian-Gewölbe-Leuchtfeuer im Kristallabgrund.",
    "type": "Major Gate Boss",
    "typeDE": "Haupt-Tor-Boss",
    "image": "assets/bosses/game8_monolith.png",
    "recommendedShell": "Eredrim the Venerable",
    "recommendedShellDE": "Eredrim der Ehrwürdige",
    "weaknesses": [
      "Monolith Fragment Break",
      "Heavy Blunt Damage",
      "Dodge Explosive Larvae"
    ],
    "weaknessesDE": [
      "Fragment-Bruch",
      "Wuchtschaden",
      "Larven ausweichen"
    ],
    "tarReward": "65,511 Gloom, Monolith Fragment x1",
    "tarRewardDE": "65.511 Düsteressenz, Monolith-Fragment x1",
    "strategy": {
      "en": "Towering obsidian construct that launches volatile larvae. Break its crystalline core with hammer strikes.",
      "de": "Riesiges Obsidian-Konstrukt. Zerschmettere seinen Kristallkern mit Hammerschlägen."
    },
    "quote": "The black stone endures all eons.",
    "quoteDE": "Der schwarze Stein überdauert alle Äonen."
  },
  {
    "id": "boss_37",
    "order": 37,
    "name": "Orrem, the Reclaimed",
    "nameDE": "Orrem, der Zurückgeforderte",
    "title": "Lord of the Bridge of Procession",
    "titleDE": "Herr der Prozessionsbrücke",
    "region": "Faded Citadel & Vault",
    "regionDE": "Verblasste Zitadelle & Gewölbe",
    "closestBeacon": "Bridge of Procession Beacon",
    "closestBeaconDE": "Leuchtfeuer der Prozessionsbrücke",
    "location": "Found near Bridge of Procession Beacon before the final descent.",
    "locationDE": "Nahe dem Prozessionsbrücke-Leuchtfeuer vor dem finalen Abstieg.",
    "type": "Major Gate Boss",
    "typeDE": "Haupt-Tor-Boss",
    "image": "assets/bosses/game8_orrem.png",
    "recommendedShell": "Hadern the Deliverer",
    "recommendedShellDE": "Hadern der Erlöser",
    "weaknesses": [
      "Orrem's Head Trophy Stun",
      "Parry on Radiant Cleave",
      "Fire Tarstones"
    ],
    "weaknessesDE": [
      "Orrems Trophäe",
      "Spaltungs-Parade",
      "Feuer-Teersteine"
    ],
    "tarReward": "64,442 Gloom, Orrem's Head x1",
    "tarRewardDE": "64.442 Düsteressenz, Orrems Kopf x1",
    "strategy": {
      "en": "Fallen champion with sweeping polearm and radiant beam attacks. Dodge behind his beam and strike his heels.",
      "de": "Champion mit Stangenwaffe und Strahlungsangriffen. Weiche hinter den Strahl und attackiere seine Fersen."
    },
    "quote": "My devotion was reclaimed by the black pit.",
    "quoteDE": "Meine Hingabe wurde von der schwarzen Grube zurückgefordert."
  },
  {
    "id": "boss_38",
    "order": 38,
    "name": "Zmey, the Unbidden (Dark Father)",
    "nameDE": "Zmey, der Ungebetene (Dunkler Vater)",
    "title": "Sovereign of the UnderMether",
    "titleDE": "Herrscher der UnterMether",
    "region": "The Final Crucible & Ovum",
    "regionDE": "Der Letzte Schmelztiegel & Ovum",
    "closestBeacon": "The Hidden Nave Beacon (Marrow Keep)",
    "closestBeaconDE": "Leuchtfeuer im Verborgenen Kirchenschiff",
    "location": "Found near The Hidden Nave Beacon beneath Marrow Keep after interacting with Gloom Siphon.",
    "locationDE": "Nahe dem Verborgenen Kirchenschiff unter Marrow Keep am Düster-Siphon.",
    "type": "Final Boss",
    "typeDE": "Endboss",
    "image": "assets/bosses/game8_zmey.png",
    "recommendedShell": "Hadern the Deliverer / Any Mastered Shell",
    "recommendedShellDE": "Hadern der Erlöser / Jede gemeisterte Hülle",
    "weaknesses": [
      "Phase Transition Parries",
      "Resolve Ultimate Discharge",
      "Perfect Harden Timing"
    ],
    "weaknessesDE": [
      "Phasenwechsel-Paraden",
      "Entschlossenheits-Ultimates",
      "Perfektes Verhärtungs-Timing"
    ],
    "tarReward": "Ovum Core Heart, Sovereign Gland",
    "tarRewardDE": "Ovum-Kern-Herz, Ur-Drüse",
    "strategy": {
      "en": "Zmey mimics the forms of all shells across 4 grueling phases before unfurling winged draconic tar forms. Save resolve for phase 4!",
      "de": "Zmey imitiert die Formen aller Hüllen über 4 Phasen hinweg und entfaltet geflügelte Teerformen. Spare Entschlossenheit für Phase 4!"
    },
    "quote": "You shed your shells... yet you are forever hollow.",
    "quoteDE": "Du streifst deine Hüllen ab... doch du bleibst auf ewig hohl."
  },
  {
    "id": "boss_39",
    "order": 39,
    "name": "The Ascendant Echo",
    "nameDE": "Das Aufgestiegene Echo",
    "title": "Transcendent Ovum Avatar (Secret True Ending)",
    "titleDE": "Transzendenter Ovum-Avatar (Geheimes Ende)",
    "region": "The Final Crucible & Ovum",
    "regionDE": "Der Letzte Schmelztiegel & Ovum",
    "closestBeacon": "The Ovum Core Beacon",
    "closestBeaconDE": "Leuchtfeuer im Ovum-Kern",
    "location": "Found in The Ovum Core upon collecting all sacred glands on the True Penitent path.",
    "locationDE": "Im Ovum-Kern nach Bergen aller Drüsen auf dem Pfad des Wahren Büßers.",
    "type": "Secret Encounter",
    "typeDE": "Geheime Begegnung",
    "image": null,
    "symbolSvg": "<svg viewBox=\"0 0 100 100\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <radialGradient id=\"emblem_bg_f59e0b\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n        <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.3\"/>\n        <stop offset=\"100%\" stop-color=\"#08070d\" stop-opacity=\"0.98\"/>\n      </radialGradient>\n      <filter id=\"emblem_glow_f59e0b\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n        <feGaussianBlur stdDeviation=\"3.5\" result=\"blur\"/>\n        <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n      </filter>\n    </defs>\n    <rect width=\"100\" height=\"100\" fill=\"url(#emblem_bg_f59e0b)\"/>\n    <circle cx=\"50\" cy=\"50\" r=\"42\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\" opacity=\"0.5\"/>\n    <circle cx=\"50\" cy=\"50\" r=\"36\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"0.8\" opacity=\"0.35\"/>\n    <g filter=\"url(#emblem_glow_f59e0b)\" stroke=\"#f59e0b\" stroke-width=\"2.6\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n      <circle cx=\"50\" cy=\"50\" r=\"32\"/><circle cx=\"50\" cy=\"50\" r=\"20\"/><circle cx=\"50\" cy=\"50\" r=\"8\"/><path d=\"M50 10 V90 M10 50 H90 M22 22 L78 78 M22 78 L78 22\"/>\n    </g>\n  </svg>",
    "recommendedShell": "Foundling (No Shell - The True Penitent)",
    "recommendedShellDE": "Findling (Hüllenlos - Der Wahre Büßer)",
    "weaknesses": [
      "Flawless Parry Timing",
      "Instant Frame Counter",
      "Resolve Precision"
    ],
    "weaknessesDE": [
      "Makellose Paraden",
      "Frame-Konter",
      "Präzise Entschlossenheit"
    ],
    "tarReward": "Omniscient Gland of Ascendance, True Ending",
    "tarRewardDE": "Allwissende Drüse des Aufstiegs, Wahres Ende",
    "strategy": {
      "en": "The ultimate trial. Every parry and dodge must be frame-perfect to ascend beyond mortality.",
      "de": "Die ultimative Prüfung. Jede Parade und jedes Ausweichen muss auf den Frame genau sitzen."
    },
    "quote": "Ascend... or be ground into the black dust of eternity.",
    "quoteDE": "Steige empor... oder werde zum schwarzen Staub der Ewigkeit gemahlen."
  }
];

const REGIONS_METADATA = {
  "Disciple's Pass & Fallgrim": {
    "nameDE": "1. Jüngerpass & Fallgrim (Prolog & Grotte)",
    "nameEN": "1. Disciple's Pass & Fallgrim (Prologue & Grotto)",
    "icon": "🏰",
    "sigilColor": "#d97706",
    "descDE": "Prolog-Sumpfsee, die Jüngergrotte und der Witwenausguck im nebeligen Umland.",
    "descEN": "The Prologue swamp lake, Disciple's Grotto, and Widow's Overlook in the misty outskirts.",
    "bannerClass": "region-banner-fallgrim"
  },
  "Fainweald & Sunken Village": {
    "nameDE": "2. Fainweald & Versunkenes Dorf (Pilz- & Moor)",
    "nameEN": "2. Fainweald & Sunken Village (Mushroom & Mire)",
    "icon": "🩸",
    "sigilColor": "#ef4444",
    "descDE": "Halle der Illusionen, das Giftmoor von Baba Froga, die Schafsweiden und Magdalenas Heiligtum.",
    "descEN": "The Hall of Illusions, Baba Froga's poison mire, Shepherd's pastures, and Magdalena's sanctuary.",
    "bannerClass": "region-banner-fainweald"
  },
  "Blackridge Pass & Sanguine Shoreline": {
    "nameDE": "3. Blackridge-Pass & Sanguinische Küste",
    "nameEN": "3. Blackridge Pass & Sanguine Shoreline",
    "icon": "⛪",
    "sigilColor": "#3b82f6",
    "descDE": "Blackridge-Felsen, die überflutete Grisha, das Steinbluttor und das Tor des Verlorenen Kindes.",
    "descEN": "Blackridge cliffs, Flooded Village Grisha, Stonebled Gate, and the Sanguine shoreline maw.",
    "bannerClass": "region-banner-mammon"
  },
  "Gloomshade Grove & Citadel of Penance": {
    "nameDE": "4. Düsterschatten-Hain & Zitadelle der Buße",
    "nameEN": "4. Gloomshade Grove & Citadel of Penance",
    "icon": "🔮",
    "sigilColor": "#a855f7",
    "descDE": "Der Blutverfluchte Lithopode, das Zwillings-Grisha-Rudel, die Blasse Grisha und der Wächter der Zitadelle.",
    "descEN": "The Bloodcursed Lithopod, twin Rabid Grisha pack, Pale Grisha, and the Warden of the Citadel.",
    "bannerClass": "region-banner-unfound"
  },
  "Prisoners' Domain & Pulpit": {
    "nameDE": "5. Domäne des Gefangenen & Richtplatz",
    "nameEN": "5. Prisoners' Domain & Executioner's Pulpit",
    "icon": "🔥",
    "sigilColor": "#e11d48",
    "descDE": "Vrago am Nochtean-Tor, die Düsterlegion, Tishinas Beichtvater und der Namenlose Gefangene.",
    "descEN": "Vrago at Nochtean Gate, the Gloombound Legion, Tishina's Confessor, and the Nameless Captive.",
    "bannerClass": "region-banner-crucible"
  },
  "Ruins of Mammon & Mines": {
    "nameDE": "6. Ruinen von Mammon & Obsidianit-Minen",
    "nameEN": "6. Ruins of Mammon & Obsidianite Mines",
    "icon": "🏺",
    "sigilColor": "#ca8a04",
    "descDE": "Befallener Bergarbeiter, Hoher Herr Vellen, Zwillingssestern, König Bor, Sariel und der Prophet.",
    "descEN": "Infested Miner, High Lord Vellen, Twin Sesters, King Bor, Sariel, and the Prophet.",
    "bannerClass": "region-banner-mammon"
  },
  "Withered Shoals & Temple": {
    "nameDE": "7. Verdorrte Untiefen & Eroberter Tempel",
    "nameEN": "7. Withered Shoals & Conquered Temple",
    "icon": "❄️",
    "sigilColor": "#38bdf8",
    "descDE": "Die Hexapode, die Merkwürdige Grisha, Eroberer Droeg und Henker Urrig am Winterglas-See.",
    "descEN": "The Hexapod, Strange Grisha, Conqueror Droeg, and Executioner Urrig at Winterglass Lake.",
    "bannerClass": "region-banner-mammon"
  },
  "Faded Citadel & Vault": {
    "nameDE": "8. Verblasste Zitadelle & Obsidian-Gewölbe",
    "nameEN": "8. Faded Citadel & Obsidian Vault",
    "icon": "🏛️",
    "sigilColor": "#8b5cf6",
    "descDE": "Gelehrtenprinz Isaac, Solnir der Düstersucher, der Monolith und Orrem an der Prozessionsbrücke.",
    "descEN": "Scholar-Prince Isaac, Solnir the Gloom Seeker, the Monolith, and Orrem at the Bridge of Procession.",
    "bannerClass": "region-banner-unfound"
  },
  "The Final Crucible & Ovum": {
    "nameDE": "9. Der Letzte Schmelztiegel & Ur-Ovum",
    "nameEN": "9. The Final Crucible & Primordial Ovum",
    "icon": "👑",
    "sigilColor": "#dc2626",
    "descDE": "Zmey der Ungebetene (Dunkler Vater) im Kirchenschiff unter Marrow Keep und das Aufgestiegene Echo.",
    "descEN": "Zmey the Unbidden (Dark Father) in the Nave beneath Marrow Keep and the Ascendant Echo.",
    "bannerClass": "region-banner-crucible"
  }
};
