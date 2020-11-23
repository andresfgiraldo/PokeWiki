export interface Listado {
    count:    number;
    next:     string;
    previous: null;
    results:  Specs[];
}

export interface Pokemon {
    abilities:                Ability[];
    base_experience:          number;
    forms:                    Specs[];
    game_indices:             GameIndex[];
    height:                   number;
    held_items:               any[];
    id:                       number;
    is_default:               boolean;
    location_area_encounters: string;
    moves:                    Move[];
    name:                     string;
    order:                    number;
    species:                  Specs;
    sprites:                  Sprites;
    stats:                    Stat[];
    types:                    Type[];
    weight:                   number;
}

export interface Ability {
    ability:   Specs;
    is_hidden: boolean;
    slot:      number;
}

export interface Specs {
    name: string;
    url:  string;
}

export interface GameIndex {
    game_index: number;
    version:    Specs;
}

export interface Move {
    move:                  Specs;
    version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
    level_learned_at:  number;
    move_learn_method: Specs;
    version_group:     Specs;
}

export interface GenerationV {
    "black-white": Sprites;
}

export interface GenerationIv {
    "diamond-pearl":        Sprites;
    "heartgold-soulsilver": Sprites;
    platinum:               Sprites;
}

export interface Versions {
    "generation-i":    GenerationI;
    "generation-ii":   GenerationIi;
    "generation-iii":  GenerationIii;
    "generation-iv":   GenerationIv;
    "generation-v":    GenerationV;
    "generation-vi":   { [key: string]: GenerationVi };
    "generation-vii":  GenerationVii;
    "generation-viii": GenerationViii;
}

export interface Sprites {
    back_default:       string;
    back_female?:        string;
    back_shiny:         string;
    back_shiny_female?:  string;
    front_default:      string;
    front_female?:       string;
    front_shiny:        string;
    front_shiny_female?: string;
    other?:             Other;
    versions?:          Versions;
    animated?:          Sprites;
}

export interface GenerationI {
    "red-blue": RedBlue;
    yellow:     RedBlue;
}

export interface RedBlue {
    back_default:  string;
    back_gray:     string;
    front_default: string;
    front_gray:    string;
}

export interface GenerationIi {
    crystal: Crystal;
    gold:    Crystal;
    silver:  Crystal;
}

export interface Crystal {
    back_default:  string;
    back_shiny:    string;
    front_default: string;
    front_shiny:   string;
}

export interface GenerationIii {
    emerald:             Emerald;
    "firered-leafgreen": Crystal;
    "ruby-sapphire":     Crystal;
}

export interface Emerald {
    front_default: string;
    front_shiny:   string;
}

export interface GenerationVi {
    front_default:      string;
    front_female:       null;
    front_shiny:        string;
    front_shiny_female: null;
}

export interface GenerationVii {
    icons:                  DreamWorld;
    "ultra-sun-ultra-moon": GenerationVi;
}

export interface DreamWorld {
    front_default: string;
    front_female:  null;
}

export interface GenerationViii {
    icons: DreamWorld;
}

export interface Other {
    dream_world:        DreamWorld;
    "official-artwork": OfficialArtwork;
}

export interface OfficialArtwork {
    front_default: string;
}

export interface Stat {
    base_stat: number;
    effort:    number;
    stat:      Specs;
}

export interface Type {
    slot: number;
    type: Specs;
}


export interface Specie {
    base_happiness:         number;
    capture_rate:           number;
    color:                  Color;
    egg_groups:             Color[];
    evolution_chain:        EvolutionChain;
    evolves_from_species:   null;
    flavor_text_entries:    FlavorTextEntry[];
    form_descriptions:      any[];
    forms_switchable:       boolean;
    gender_rate:            number;
    genera:                 Genus[];
    generation:             Color;
    growth_rate:            Color;
    habitat:                Color;
    has_gender_differences: boolean;
    hatch_counter:          number;
    id:                     number;
    is_baby:                boolean;
    is_legendary:           boolean;
    is_mythical:            boolean;
    name:                   string;
    names:                  Name[];
    order:                  number;
    pal_park_encounters:    PalParkEncounter[];
    pokedex_numbers:        PokedexNumber[];
    shape:                  Color;
    varieties:              Variety[];
}

export interface Color {
    name: string;
    url:  string;
}

export interface EvolutionChain {
    url: string;
}

export interface FlavorTextEntry {
    flavor_text: string;
    language:    Color;
    version:     Color;
}

export interface Genus {
    genus:    string;
    language: Color;
}

export interface Name {
    language: Color;
    name:     string;
}

export interface PalParkEncounter {
    area:       Color;
    base_score: number;
    rate:       number;
}

export interface PokedexNumber {
    entry_number: number;
    pokedex:      Color;
}

export interface Variety {
    is_default: boolean;
    pokemon:    Color;
}
