var char_roman_to_tai = [
	{ id: "bbho", value: "ᨻᩮ᩠ᨽᩣ" },
	{ id: "ccho", value: "ᨧᩮ᩠ᨨᩣ" },
	{ id: "ddho", value: "ᨴᩮ᩠ᨵᩣ" },
	{ id: "ḍḍho", value: "ᨯᩮ᩠ᨰᩣ" },
	{ id: "ggho", value: "ᨣᩮ᩠ᨿᩣ" },
	{ id: "jjho", value: "ᨩᩮ᩠ᨫᩣ" },
	{ id: "kkho", value: "ᨠᩮ᩠ᨡᩣ" },
	{ id: "mbho", value: "ᨾᩮ᩠ᨽᩣ" },
	{ id: "mpho", value: "ᨾᩮ᩠ᨹᩣ" },
	{ id: "ndho", value: "ᨶᩮᩣ᩠ᨵ" },
	{ id: "ntho", value: "ᨶᩮᩣ᩠ᨳ" },
	{ id: "ndhā", value: "ᨶᩣ᩠ᨵ" },
	{ id: "nthā", value: "ᨶᩣ᩠ᨳ" },
	{ id: "ṅgho", value: "ᩘᩮ᩠ᨿᩣ" },
	{ id: "ṅkho", value: "ᩘᩮ᩠ᨡᩣ" },
	{ id: "ñcho", value: "ᨬᩮ᩠ᨨᩣ" },
	{ id: "ñjho", value: "ᨬᩮ᩠ᨫᩣ" },
	{ id: "ṇḍho", value: "ᨱᩮ᩠ᨰᩣ" },
	{ id: "ṇṭho", value: "ᨱᩮ᩠ᨮᩣ" },
	{ id: "ppho", value: "ᨷᩮ᩠ᨹᩣ" },
	{ id: "ttho", value: "ᨲᩮ᩠ᨳᩣ" },
	{ id: "ṭṭho", value: "ᨭᩮ᩠ᨮᩣ" },
	{ id: "bbhe", value: "ᨻᩮ᩠ᨽ" },
	{ id: "mbhe", value: "ᨾᩮ᩠ᨽ" },
	{ id: "cche", value: "ᨧᩮ᩠ᨨ" },
	{ id: "ñche", value: "ᨬᩮ᩠ᨨ" },
	{ id: "ddhe", value: "ᨴᩮ᩠ᨵ" },
	{ id: "ndhe", value: "ᨶᩮ᩠ᨵ" },
	{ id: "ḍḍhe", value: "ᨯᩮ᩠ᨰ" },
	{ id: "ṇḍhe", value: "ᨱᩮ᩠ᨰ" },
	{ id: "gghe", value: "ᨣᩮ᩠ᨿ" },
	{ id: "ṅghe", value: "ᩘᩮ᩠ᨿ" },
	{ id: "jjhe", value: "ᨩᩮ᩠ᨫ" },
	{ id: "ñjhe", value: "ᨬᩮ᩠ᨫ" },
	{ id: "kkhe", value: "ᨠᩮ᩠ᨡ" },
	{ id: "ṅkhe", value: "ᩘᩮ᩠ᨡ" },
	{ id: "mphe", value: "ᨾᩮ᩠ᨹ" },
	{ id: "pphe", value: "ᨷᩮ᩠ᨹ" },
	{ id: "nthe", value: "ᨶᩮ᩠ᨳ" },
	{ id: "tthe", value: "ᨲᩮ᩠ᨳ" },
	{ id: "ṇṭhe", value: "ᨱᩮ᩠ᨮ" },
	{ id: "ṭṭhe", value: "ᨭᩮ᩠ᨮ" },
	{ id: "bbo", value: "ᨻᩮ᩠ᨻᩣ" },
	{ id: "cco", value: "ᨧᩮ᩠ᨧᩣ" },
	{ id: "ddo", value: "ᨴᩮ᩠ᨴᩣ" },
	{ id: "dvo", value: "ᨴᩮ᩠ᩅᩣ" },
	{ id: "ḍḍo", value: "ᨯᩮ᩠ᨯᩣ" },
	{ id: "ggo", value: "ᨣᩮ᩠ᨣᩣ" },
	{ id: "hro", value: "ᩉᩮ᩠ᩕᩣ" },
	{ id: "hvo", value: "ᩉᩮ᩠ᩅᩣ" },
	{ id: "hyo", value: "ᩉᩮ᩠ᨿᩣ" },
	{ id: "jjo", value: "ᨩᩮ᩠ᨩᩣ" },
	{ id: "kko", value: "ᨠᩮ᩠ᨠᩣ" },
	{ id: "kro", value: "ᨠᩮ᩠ᩕᩣ" },
	{ id: "mbo", value: "ᨾᩮ᩠ᨻᩣ" },
	{ id: "mmo", value: "ᨾᩮ᩠ᨾᩣ" },
	{ id: "mpo", value: "ᨾᩮ᩠ᨷᩣ" },
	{ id: "ndo", value: "ᨶᩮᩣ᩠ᨴ" },
	{ id: "nno", value: "ᨶᩮᩣ᩠ᨶ" },
	{ id: "nto", value: "ᨶᩮᩣ᩠ᨲ" },
	{ id: "ndā", value: "ᨶᩣ᩠ᨴ" },
	{ id: "nnā", value: "ᨶᩣ᩠ᨶ" },
	{ id: "ntā", value: "ᨶᩣ᩠ᨲ" },
	{ id: "ṅgo", value: "ᩘᩮ᩠ᨣᩣ" },
	{ id: "ṅko", value: "ᩘᩮ᩠ᨠᩣ" },
	{ id: "ñco", value: "ᨬᩮ᩠ᨧᩣ" },
	{ id: "ñjo", value: "ᨬᩮ᩠ᨩᩣ" },
	{ id: "ñño", value: "ᨬᩮ᩠ᨬᩣ" },
	{ id: "ṇḍo", value: "ᨱᩮ᩠ᨯᩣ" },
	{ id: "ṇṇo", value: "ᨱᩮ᩠ᨱᩣ" },
	{ id: "ṇṭo", value: "ᨱᩮ᩠ᨭᩣ" },
	{ id: "ppo", value: "ᨷᩮ᩠ᨷᩣ" },
	{ id: "rho", value: "ᩁᩮ᩠ᩉᩣ" },
	{ id: "rvo", value: "ᩁᩮ᩠ᩅᩣ" },
	{ id: "ryo", value: "ᩁᩮ᩠ᨿᩣ" },
	{ id: "tto", value: "ᨲᩮ᩠ᨲᩣ" },
	{ id: "tvo", value: "ᨲᩮ᩠ᩅᩣ" },
	{ id: "ṭṭo", value: "ᨭᩮ᩠ᨭᩣ" },
	{ id: "vho", value: "ᩅᩮ᩠ᩉᩣ" },
	{ id: "vro", value: "ᩅᩮ᩠ᩕᩣ" },
	{ id: "vyo", value: "ᩅᩮ᩠ᨿᩣ" },
	{ id: "yho", value: "ᨿᩮ᩠ᩉᩣ" },
	{ id: "yro", value: "ᨿᩮ᩠ᩕᩣ" },
	{ id: "yvo", value: "ᨿᩮ᩠ᩅᩣ" },
	{ id: "yyo", value: "ᨿᩮ᩠ᨿᩣ" },
	{ id: "bbe", value: "ᨻᩮ᩠ᨻ" },
	{ id: "mbe", value: "ᨾᩮ᩠ᨻ" },
	{ id: "cce", value: "ᨧᩮ᩠ᨧ" },
	{ id: "ñce", value: "ᨬᩮ᩠ᨧ" },
	{ id: "dde", value: "ᨴᩮ᩠ᨴ" },
	{ id: "nde", value: "ᨶᩮ᩠ᨴ" },
	{ id: "ḍḍe", value: "ᨯᩮ᩠ᨯ" },
	{ id: "ṇḍe", value: "ᨱᩮ᩠ᨯ" },
	{ id: "gge", value: "ᨣᩮ᩠ᨣ" },
	{ id: "ṅge", value: "ᩘᩮ᩠ᨣ" },
	{ id: "rhe", value: "ᩁᩮ᩠ᩉ" },
	{ id: "vhe", value: "ᩅᩮ᩠ᩉ" },
	{ id: "yhe", value: "ᨿᩮ᩠ᩉ" },
	{ id: "jje", value: "ᨩᩮ᩠ᨩ" },
	{ id: "ñje", value: "ᨬᩮ᩠ᨩ" },
	{ id: "kke", value: "ᨠᩮ᩠ᨠ" },
	{ id: "ṅke", value: "ᩘᩮ᩠ᨠ" },
	{ id: "mme", value: "ᨾᩮ᩠ᨾ" },
	{ id: "nne", value: "ᨶᩮ᩠ᨶ" },
	{ id: "ññe", value: "ᨬᩮ᩠ᨬ" },
	{ id: "ṇṇe", value: "ᨱᩮ᩠ᨱ" },
	{ id: "mpe", value: "ᨾᩮ᩠ᨷ" },
	{ id: "ppe", value: "ᨷᩮ᩠ᨷ" },
	{ id: "hre", value: "ᩉᩮ᩠ᩕ" },
	{ id: "kre", value: "ᨠᩮ᩠ᩕ" },
	{ id: "vre", value: "ᩅᩮ᩠ᩕ" },
	{ id: "yre", value: "ᨿᩮ᩠ᩕ" },
	{ id: "nte", value: "ᨶᩮ᩠ᨲ" },
	{ id: "tte", value: "ᨲᩮ᩠ᨲ" },
	{ id: "ṇṭe", value: "ᨱᩮ᩠ᨭ" },
	{ id: "ṭṭe", value: "ᨭᩮ᩠ᨭ" },
	{ id: "dve", value: "ᨴᩮ᩠ᩅ" },
	{ id: "hve", value: "ᩉᩮ᩠ᩅ" },
	{ id: "rve", value: "ᩁᩮ᩠ᩅ" },
	{ id: "tve", value: "ᨲᩮ᩠ᩅ" },
	{ id: "yve", value: "ᨿᩮ᩠ᩅ" },
	{ id: "hye", value: "ᩉᩮ᩠ᨿ" },
	{ id: "rye", value: "ᩁᩮ᩠ᨿ" },
	{ id: "vye", value: "ᩅᩮ᩠ᨿ" },
	{ id: "yye", value: "ᨿᩮ᩠ᨿ" },
		
{ id: "ss", value: "ᩔ᩠" },
{ id: "vh", value: "ᩅ᩠ᩉ᩠" },
{ id: "vy", value: "ᩅ᩠ᨿ᩠" },
{ id: "vr", value: "ᩅᩕ᩠" },
{ id: "yh", value: "ᨿ᩠ᩉ᩠" },
{ id: "yy", value: "ᨿ᩠ᨿ᩠" },
{ id: "yr", value: "ᨿᩕ᩠" },
{ id: "yv", value: "ᨿ᩠ᩅ᩠" },
{ id: "hy", value: "ᩉ᩠ᨿ᩠" },
{ id: "hr", value: "ᩉᩕ᩠" },
{ id: "hv", value: "ᩉ᩠ᩅ᩠" },
{ id: "rv", value: "ᩁ᩠ᩅ᩠" },
{ id: "rh", value: "ᩁ᩠ᩉ᩠" },
{ id: "ry", value: "ᩁ᩠ᨿ᩠" },
{ id: "kh", value: "ᨡ᩠" },
{ id: "gh", value: "ᨿ᩠" },
{ id: "ch", value: "ᨨ᩠" },
{ id: "jh", value: "ᨫ᩠" },
{ id: "ññ", value: "ᨬ᩠ᨬ᩠" },
{ id: "ṭh", value: "ᨮ᩠" },
{ id: "ḍh", value: "ᨰ᩠" },
{ id: "th", value: "ᨳ᩠" },
{ id: "dh", value: "ᨵ᩠" },
{ id: "ph", value: "ᨹ᩠" },
{ id: "bh", value: "ᨽ᩠" },
{ id: "k", value: "ᨠ᩠" },
{ id: "g", value: "ᨣ᩠" },
{ id: "c", value: "ᨧ᩠" },
{ id: "j", value: "ᨩ᩠" },
{ id: "ñ", value: "ᨬ᩠" },
{ id: "ḷ", value: "ᩊ᩠" },
{ id: "ṭ", value: "ᨭ᩠" },
{ id: "ḍ", value: "ᨯ᩠" },
{ id: "ṇ", value: "ᨱ᩠" },
{ id: "t", value: "ᨲ᩠" },
{ id: "d", value: "ᨴ᩠" },
{ id: "n", value: "ᨶ᩠" },
{ id: "p", value: "ᨷ᩠" },
{ id: "b", value: "ᨻ᩠" },
{ id: "m", value: "ᨾ᩠" },
{ id: "l", value: "ᩃ᩠" },
{ id: "s", value: "ᩈ᩠" },
{ id: "ṅ", value: "ᩘ" },
{ id: "᩠h", value: "᩠ᩉ" },
{ id: "h", value: "ᩉ᩠" },
{ id: "᩠y", value: "᩠ᨿ" },
{ id: "y", value: "ᨿ᩠" },
{ id: "᩠r", value: "ᩕ᩠" },
{ id: "r", value: "ᩁ᩠" },
{ id: "᩠v", value: "᩠ᩅ᩠" },
{ id: "v", value: "ᩅ᩠" },
{ id: "᩠aṃ", value: "ᩴ" },
{ id: "᩠iṃ", value: "ᩥᩴ" },
{ id: "᩠uṃ", value: "ᩩᩴ" },
{ id: "᩠ā", value: "ᩣ" },
{ id: "᩠i", value: "ᩥ" },
{ id: "᩠ī", value: "ᩦ" },
{ id: "᩠u", value: "ᩩ" },
{ id: "᩠ū", value: "ᩪ" },
{ id: "᩠e", value: "ᩮ" },
{ id: "᩠o", value: "ᩮᩣ" },
{ id: "aṃ", value: "ᩋᩴ" },
{ id: "iṃ", value: "ᨠ᩠ᨠᩴ" },
{ id: "uṃ", value: "ᩏᩴ" },
{ id: "a", value: "ᩋ" },
{ id: "ā", value: "ᩋᩣ" },
{ id: "i", value: "ᩍ" },
{ id: "ī", value: "ᩎ" },
{ id: "u", value: "ᩏ" },
{ id: "ū", value: "ᩐ" },
{ id: "e", value: "ᩑ" },
{ id: "o", value: "ᩒ" },
{ id: "᩠᩼ᩋ", value: "" },
{ id: "᩠ᩋ", value: "" },
{ id: "ᨡᩮᩣ", value: "ᨡᩮᩤ" },
{ id: "ᨡᩣ", value: "ᨡᩤ" },
{ id: "ᨠ᩠ᨡᩮᩤ", value: "ᨠ᩠ᨡᩮᩤ" },
{ id: "က᩠ခါ", value: "ᨠ᩠ᨡᩤ" },
{ id: "ဂော", value: "ᨣᩮᩤ" },
{ id: "ᨦᩮᩣ", value: "ᨦᩮᩤ" },
{ id: "ᨴᩮᩣ", value: "ᨴᩮᩤ" },
{ id: "ᨷᩮᩣ", value: "ᨷᩮᩤ" },
{ id: "ᩅᩮᩣ", value: "ᩅᩮᩤ" },
{ id: "ᨣᩣ", value: "ᨣᩤ" },
{ id: "ᨦᩣ", value: "ᨦᩤ" },
{ id: "ᨴᩣ", value: "ᨴᩤ" },
{ id: "ᨵᩣ", value: "ᨵᩤ" },
{ id: "ᨷᩣ", value: "ᨷᩤ" },
{ id: "ᩅᩣ", value: "ᩅᩤ" },
{ id: "ᨴ᩠ᩅᩣ", value: "ᨴ᩠ᩅᩤ" },




];

var char_tai_to_roman_1 = [
{ id: "ႁႏၵ", value: "ndra" }, //後加

{ id: "ခ᩠", value: "kh" },
{ id: "ဃ᩠", value: "gh" },
{ id: "ဆ᩠", value: "ch" },
{ id: "ဈ᩠", value: "jh" },
{ id: "ည᩠", value: "ññ" },
{ id: "ဌ᩠", value: "ṭh" },
{ id: "ဎ᩠", value: "ḍh" },
{ id: "ထ᩠", value: "th" },
{ id: "ဓ᩠", value: "dh" },
{ id: "ဖ᩠", value: "ph" },
{ id: "ဘ᩠", value: "bh" },
{ id: "က᩠", value: "k" },
{ id: "ဂ᩠", value: "g" },
{ id: "စ᩠", value: "c" },
{ id: "ဇ᩠", value: "j" },
{ id: "ဉ᩠", value: "ñ" },
{ id: "ဠ᩠", value: "ḷ" },
{ id: "ဋ᩠", value: "ṭ" },
{ id: "ဍ᩠", value: "ḍ" },
{ id: "ဏ᩠", value: "ṇ" },
{ id: "တ᩠", value: "t" },
{ id: "ဒ᩠", value: "d" },
{ id: "န᩠", value: "n" },
{ id: "ဟ᩠", value: "h" },
{ id: "ပ᩠", value: "p" },
{ id: "ဗ᩠", value: "b" },
{ id: "မ᩠", value: "m" },
{ id: "ယ᩠", value: "y" },
{ id: "ရ᩠", value: "r" },
{ id: "လ᩠", value: "l" },
{ id: "ဝ᩠", value: "v" },
{ id: "သ᩠", value: "s" },
{ id: "င᩠", value: "ṅ" },
{ id: "င်᩠", value: "ṅ" },
{ id: "ဿ", value: "ssa" },
{ id: "ခ", value: "kha" },
{ id: "ဃ", value: "gha" },
{ id: "ဆ", value: "cha" },
{ id: "ဈ", value: "jha" },
{ id: "ည", value: "ñña" },
{ id: "ဌ", value: "ṭha" },
{ id: "ဎ", value: "ḍha" },
{ id: "ထ", value: "tha" },
{ id: "ဓ", value: "dha" },
{ id: "ဖ", value: "pha" },
{ id: "ဘ", value: "bha" },
{ id: "က", value: "ka" },
{ id: "ဂ", value: "ga" },
{ id: "စ", value: "ca" },
{ id: "ဇ", value: "ja" },
{ id: "ဉ", value: "ña" },
{ id: "ဠ", value: "ḷa" },
{ id: "ဋ", value: "ṭa" },
{ id: "ဍ", value: "ḍa" },
{ id: "ဏ", value: "ṇa" },
{ id: "တ", value: "ta" },
{ id: "ဒ", value: "da" },
{ id: "န", value: "na" },
{ id: "ဟ", value: "ha" },
{ id: "ပ", value: "pa" },
{ id: "ဗ", value: "ba" },
{ id: "မ", value: "ma" },
{ id: "ယ", value: "ya" },
{ id: "ရ", value: "ra" },
{ id: "႐", value: "ra" }, //后加
{ id: "လ", value: "la" },
{ id: "ဝ", value: "va" },
{ id: "သ", value: "sa" },
{ id: "aျ᩠", value: "ya" },
{ id: "aွ᩠", value: "va" },
{ id: "aြ᩠", value: "ra" },

{ id: "ၱ", value: "᩠ta" }, //后加
{ id: "ၳ", value: "᩠tha" }, //后加
{ id: "ၵ", value: "᩠da" }, //后加
{ id: "ၶ", value: "᩠dha" }, //后加

{ id: "ၬ", value: "᩠ṭa" }, //后加
{ id: "ၭ", value: "᩠ṭha" }, //后加

{ id: "ၠ", value: "᩠ka" }, //后加
{ id: "ၡ", value: "᩠kha" }, //后加
{ id: "ၢ", value: "᩠ga" }, //后加
{ id: "ၣ", value: "᩠gha" }, //后加

{ id: "ၸ", value: "᩠pa" }, //后加
{ id: "ၹ", value: "᩠pha" }, //后加
{ id: "ၺ", value: "᩠ba" }, //后加
{ id: "႓", value: "᩠bha" }, //后加

{ id: "ၥ", value: "᩠ca" }, //后加
{ id: "ၧ", value: "᩠cha" }, //后加
{ id: "ၨ", value: "᩠ja" }, //后加
{ id: "ၩ", value: "᩠jha" }, //后加

{ id: "်", value: "᩠ya" }, //后加
{ id: "ႅ", value: "᩠la" }, //后加
{ id: "ၼ", value: "᩠ma" }, //后加
{ id: "ွ", value: "᩠ha" }, //后加
{ id: "ႆ", value: "ssa" }, //后加
{ id: "ၷ", value: "na" }, //后加
{ id: "ၲ", value: "ta" }, //后加

{ id: "႒", value: "ṭṭha" }, //后加
{ id: "႗", value: "ṭṭa" }, //后加
{ id: "ၯ", value: "ḍḍha" }, //后加
{ id: "ၮ", value: "ḍḍa" }, //后加
{ id: "႑", value: "ṇḍa" }, //后加

{ id: "kaၤ", value: "ṅka" }, //后加
{ id: "gaၤ", value: "ṅga" }, //后加
{ id: "khaၤ", value: "ṅkha" }, //后加
{ id: "ghaၤ", value: "ṅgha" }, //后加

{ id: "aှ᩠", value: "ha" },
{ id: "aိံ", value: "iṃ" },
{ id: "aုံ", value: "uṃ" },
{ id: "aော", value: "o" },
{ id: "aေါ", value: "o" },
{ id: "aအံ", value: "aṃ" },
{ id: "aဣံ", value: "iṃ" },
{ id: "aဥံ", value: "uṃ" },
{ id: "aံ", value: "aṃ" },
{ id: "aာ", value: "ā" },
{ id: "aါ", value: "ā" },
{ id: "aိ", value: "i" },
{ id: "aီ", value: "ī" },
{ id: "aု", value: "u" },
{ id: "aဳ", value: "u" }, //後加
{ id: "aူ", value: "ū" },
{ id: "aေ", value: "e" },
{ id: "အါ", value: "ā" },
{ id: "အာ", value: "ā" },
{ id: "အ", value: "a" },
{ id: "ဣ", value: "i" },
{ id: "ဤ", value: "ī" },
{ id: "ဥ", value: "u" },
{ id: "ဦ", value: "ū" },
{ id: "ဧ", value: "e" },
{ id: "ဩ", value: "o" },
{ id: "ႏ", value: "n" }, //後加
{ id: "ၪ", value: "ñ" }, //後加
{ id: "a᩠", value: "" }, //後加
{ id: "᩠", value: "" }, //後加

{ id: "ေss", value: "sse" }, //后加
{ id: "ေkh", value: "khe" }, //后加
{ id: "ေgh", value: "ghe" }, //后加
{ id: "ေch", value: "che" }, //后加
{ id: "ေjh", value: "jhe" }, //后加
{ id: "ေññ", value: "ññe" }, //后加
{ id: "ေṭh", value: "ṭhe" }, //后加
{ id: "ေḍh", value: "ḍhe" }, //后加
{ id: "ေth", value: "the" }, //后加
{ id: "ေdh", value: "dhe" }, //后加
{ id: "ေph", value: "phe" }, //后加
{ id: "ေbh", value: "bhe" }, //后加
{ id: "ေk", value: "ke" }, //后加
{ id: "ေg", value: "ge" }, //后加
{ id: "ေc", value: "ce" }, //后加
{ id: "ေj", value: "je" }, //后加
{ id: "ေñ", value: "ñe" }, //后加
{ id: "ေḷ", value: "ḷe" }, //后加
{ id: "ေṭ", value: "ṭe" }, //后加
{ id: "ေḍ", value: "ḍe" }, //后加
{ id: "ေṇ", value: "ṇe" }, //后加
{ id: "ေt", value: "te" }, //后加
{ id: "ေd", value: "de" }, //后加
{ id: "ေn", value: "ne" }, //后加
{ id: "ေh", value: "he" }, //后加
{ id: "ေp", value: "pe" }, //后加
{ id: "ေb", value: "be" }, //后加
{ id: "ေm", value: "me" }, //后加
{ id: "ေy", value: "ye" }, //后加
{ id: "ေr", value: "re" }, //后加
{ id: "ေl", value: "le" }, //后加
{ id: "ေv", value: "ve" }, //后加
{ id: "ေs", value: "se" }, //后加
{ id: "ေy", value: "ye" }, //后加
{ id: "ေv", value: "ve" }, //后加
{ id: "ေr", value: "re" }, //后加

{ id: "ea", value: "e" }, //后加
{ id: "eā", value: "o" }, //后加

{ id: "၁", value: "1" },
{ id: "၂", value: "2" },
{ id: "၃", value: "3" },
{ id: "၄", value: "4" },
{ id: "၅", value: "5" },
{ id: "၆", value: "6" },
{ id: "၇", value: "7" },
{ id: "၈", value: "8" },
{ id: "၉", value: "9" },
{ id: "၀", value: "0" },
{ id: "း", value: "”" },
{ id: "့", value: "’" },
{ id: "။", value: "．" },
{ id: "၊", value: "，" },
];

var char_tai_to_roman_2 = [
{ id: "ိၭ", value: "ၭိ" }, //後加
{ id: "ီၭ", value: "ၭီ" }, //後加
{ id: "ိၼ", value: "ၼိ" }, //後加
{ id: "ုၤ", value: "ၤု" }, //後加
{ id: "ၤ်", value: "်ၤ" }, //後加
{ id: "ိ်", value: "်ိ" }, //後加
{ id: "ိၬ", value: "ၬိ" }, //後加
{ id: "ိၧ", value: "ၧိ" }, //後加
{ id: "ိၰ", value: "ၰိ" }, //後加
{ id: "ိၱ", value: "ၱိ" }, //後加
{ id: "ိြ", value: "ြိ" }, //後加
{ id: "ိႇ", value: "ႇိ" }, //後加

{ id: "ာာ", value: "ာ" }, //後加
{ id: "ဳဳ", value: "ဳ" }, //後加
{ id: "ဳဴ", value: "ဳ" }, //後加
{ id: "ဴူ", value: "ူ" }, //後加
{ id: "ိီ", value: "ိ" }, //後加
{ id: "ူု", value: "ူ" }, //後加
{ id: "ုဳ", value: "ု" }, //後加
{ id: "ုု", value: "ု" }, //後加
{ id: "႓႓", value: "႓" }, //後加
{ id: "ီီ", value: "ီ" }, //後加
{ id: "ၡၡ", value: "ၡ" }, //後加
{ id: "ွွ", value: "ွ" }, //後加

{ id: "ႁႏၵ", value: "ndra" }, //後加
{ id: "ၿႏၵ", value: "ndra" }, //後加

{ id: "ၾတ", value: "tra" }, //後加
{ id: "ၾဒ", value: "dra" }, //後加
{ id: "ၾက", value: "kra" }, //後加
{ id: "ၾဂ", value: "gra" }, //後加
{ id: "ၾပ", value: "pra" }, //後加
{ id: "ၾဗ", value: "bra" }, //後加

{ id: "ႀတ", value: "tra" }, //後加
{ id: "ႀက", value: "kra" }, //後加
{ id: "ႀပ", value: "pra" }, //後加
{ id: "ႀဗ", value: "bra" }, //後加
{ id: "ႀဒ", value: "dra" }, //後加
{ id: "ႀဂ", value: "gra" }, //後加

{ id: "ျတ", value: "tra" }, //後加
{ id: "ျက", value: "kra" }, //後加
{ id: "ျပ", value: "pra" }, //後加
{ id: "ျဗ", value: "bra" }, //後加
{ id: "ျဒ", value: "dra" }, //後加
{ id: "ျဂ", value: "gra" }, //後加

{ id: "ၿတ", value: "tra" }, //後加
{ id: "ၿက", value: "kra" }, //後加
{ id: "ၿပ", value: "pra" }, //後加
{ id: "ၿဗ", value: "bra" }, //後加
{ id: "ၿဒ", value: "dra" }, //後加
{ id: "ၿဂ", value: "gra" }, //後加

{ id: "႖", value: "tva" }, //後加
{ id: "ဗ်", value: "bya" }, //後加
{ id: "ဝ်", value: "vya" }, //後加

{ id: "ဥႇ", value: "ñha" }, //後加
{ id: "သၷ", value: "sna" }, //後加
{ id: "ၥ်", value: "jha" }, //後加

{ id: "ဒြ", value: "dva" }, //後加

{ id: "ခ᩠", value: "kh" },
{ id: "ဃ᩠", value: "gh" },
{ id: "ဆ᩠", value: "ch" },
{ id: "ဈ᩠", value: "jh" },
{ id: "ည᩠", value: "ññ" },
{ id: "ဌ᩠", value: "ṭh" },
{ id: "ဎ᩠", value: "ḍh" },
{ id: "ထ᩠", value: "th" },
{ id: "ဓ᩠", value: "dh" },
{ id: "ဖ᩠", value: "ph" },
{ id: "ဘ᩠", value: "bh" },
{ id: "က᩠", value: "k" },
{ id: "ဂ᩠", value: "g" },
{ id: "စ᩠", value: "c" },
{ id: "ဇ᩠", value: "j" },
{ id: "ဉ᩠", value: "ñ" },
{ id: "ဠ᩠", value: "ḷ" },
{ id: "ဋ᩠", value: "ṭ" },
{ id: "ဍ᩠", value: "ḍ" },
{ id: "ဏ᩠", value: "ṇ" },
{ id: "တ᩠", value: "t" },
{ id: "ဒ᩠", value: "d" },
{ id: "န᩠", value: "n" },
{ id: "ဟ᩠", value: "h" },
{ id: "ပ᩠", value: "p" },
{ id: "ဗ᩠", value: "b" },
{ id: "မ᩠", value: "m" },
{ id: "ယ᩠", value: "y" },
{ id: "ရ᩠", value: "r" },
{ id: "လ᩠", value: "l" },
{ id: "ဝ᩠", value: "v" },
{ id: "သ᩠", value: "s" },
{ id: "င᩠", value: "ṅ" },
{ id: "ခ", value: "kha" },
{ id: "ဃ", value: "gha" },
{ id: "ဆ", value: "cha" },
{ id: "ဈ", value: "jha" },
{ id: "ည", value: "ñña" },
{ id: "ဌ", value: "ṭha" },
{ id: "ဎ", value: "ḍha" },
{ id: "ထ", value: "tha" },
{ id: "ဓ", value: "dha" },
{ id: "ဖ", value: "pha" },
{ id: "ဘ", value: "bha" },
{ id: "က", value: "ka" },
{ id: "ဂ", value: "ga" },
{ id: "စ", value: "ca" },
{ id: "ဇ", value: "ja" },
{ id: "ဉ", value: "ña" },
{ id: "ဠ", value: "ḷa" },
{ id: "ဋ", value: "ṭa" },
{ id: "ဍ", value: "ḍa" },
{ id: "ဏ", value: "ṇa" },
{ id: "တ", value: "ta" },
{ id: "ဒ", value: "da" },
{ id: "န", value: "na" },
{ id: "ဟ", value: "ha" },
{ id: "ပ", value: "pa" },
{ id: "ဗ", value: "ba" },
{ id: "မ", value: "ma" },
{ id: "ယ", value: "ya" },
{ id: "ရ", value: "ra" },
{ id: "႐", value: "ra" }, //后加
{ id: "လ", value: "la" },
{ id: "ဝ", value: "va" },
{ id: "သ", value: "sa" },

{ id: "ီႇ", value: "ႇီ" }, //后加
{ id: "ိႇ", value: "ႇိ" }, //后加

{ id: "ျ", value: "᩠ra" }, //后加
{ id: "ွ", value: "᩠ha" }, //后加
{ id: "ှ", value: "᩠ha" }, //后加
{ id: "ႇ", value: "᩠ha" }, //后加
{ id: "ြ", value: "᩠va" }, //后加

{ id: "ၱ", value: "᩠ta" }, //后加
{ id: "ၳ", value: "᩠tha" }, //后加
{ id: "ၵ", value: "᩠da" }, //后加
{ id: "ၶ", value: "᩠dha" }, //后加

{ id: "ၬ", value: "᩠ṭa" }, //后加
{ id: "ၭ", value: "᩠ṭha" }, //后加

{ id: "ၠ", value: "᩠ka" }, //后加
{ id: "ၡ", value: "᩠kha" }, //后加
{ id: "ၢ", value: "᩠ga" }, //后加
{ id: "ၣ", value: "᩠gha" }, //后加

{ id: "ၸ", value: "᩠pa" }, //后加
{ id: "ၹ", value: "᩠pha" }, //后加
{ id: "ၺ", value: "᩠ba" }, //后加
{ id: "႓", value: "᩠bha" }, //后加

{ id: "ၥ", value: "᩠ca" }, //后加
{ id: "ၧ", value: "᩠cha" }, //后加
{ id: "ၨ", value: "᩠ja" }, //后加
{ id: "ၩ", value: "᩠jha" }, //后加

{ id: "်", value: "᩠ya" }, //后加
{ id: "ႅ", value: "᩠la" }, //后加
{ id: "ၼ", value: "᩠ma" }, //后加
{ id: "ွ", value: "᩠ha" }, //后加
{ id: "ၲ", value: "ta" }, //后加

{ id: "ႆ", value: "ssa" }, //后加
{ id: "ၫ", value: "ñña" }, //后加
{ id: "ၷ", value: "na" }, //后加

{ id: "႒", value: "ṭṭha" }, //后加
{ id: "႗", value: "ṭṭa" }, //后加
{ id: "ၯ", value: "ḍḍha" }, //后加
{ id: "ၮ", value: "ḍḍa" }, //后加
{ id: "႑", value: "ṇḍa" }, //后加
{ id: "ၴ", value: "tha" }, //后加

{ id: "ႍ", value: "ၤṃ" }, //後加

{ id: "kaၤ", value: "ṅka" }, //后加
{ id: "gaၤ", value: "ṅga" }, //后加
{ id: "khaၤ", value: "ṅkha" }, //后加
{ id: "ghaၤ", value: "ṅgha" }, //后加

{ id: "ိံ", value: "᩠iṃ" },
{ id: "ုံ", value: "᩠uṃ" },
{ id: "ံု", value: "᩠uṃ" }, //後加
{ id: "ံဳ", value: "᩠uṃ" }, //後加
{ id: "ော", value: "᩠o" },
{ id: "ေါ", value: "᩠o" },
{ id: "aအံ", value: "aṃ" },
{ id: "aဣံ", value: "iṃ" },
{ id: "ႎ", value: "᩠iṃ" }, //後加
{ id: "aဥံ", value: "uṃ" },
{ id: "ံ", value: "ṃ" },
{ id: "ိ", value: "᩠i" },
{ id: "ီ", value: "᩠ī" },
{ id: "ု", value: "᩠u" },
{ id: "ဳ", value: "᩠u" }, //後加
{ id: "ူ", value: "᩠ū" },
{ id: "ဴ", value: "᩠ū" },
//{ "id":"aေ" , "value":"E" },
{ id: "အါ", value: "ā" },
{ id: "အာ", value: "ā" },
{ id: "အ", value: "a" },
{ id: "ဣ", value: "i" },
{ id: "ဤ", value: "ī" },
{ id: "ဧ", value: "E" },
{ id: "ဥ", value: "u" },
{ id: "ဦ", value: "ū" },
{ id: "ဩ", value: "o" },
{ id: "ႏ", value: "n" }, //後加
{ id: "ၪ", value: "ñ" }, //後加
{ id: "ၰ", value: "᩠ṇa" }, //後加
{ id: "a᩠", value: "" }, //後加
{ id: "᩠", value: "" }, //後加

{ id: "kuၤ", value: "ṅku" }, //后加
{ id: "guၤ", value: "ṅgu" }, //后加
{ id: "khuၤ", value: "ṅkhu" }, //后加
{ id: "ghuၤ", value: "ṅghu" }, //后加

{ id: "kyaၤ", value: "ṅkya" }, //后加
{ id: "gyaၤ", value: "ṅgya" }, //后加
{ id: "khyaၤ", value: "ṅkhya" }, //后加
{ id: "ghyaၤ", value: "ṅghya" }, //后加

{ id: "kaႌ", value: "ṅkī" }, //后加
{ id: "gaႌ", value: "ṅgī" }, //后加
{ id: "khaႌ", value: "ṅkhī" }, //后加
{ id: "ghaႌ", value: "ṅghī" }, //后加

{ id: "kaႋ", value: "ṅki" }, //后加
{ id: "gaႋ", value: "ṅgi" }, //后加
{ id: "khaႋ", value: "ṅkhi" }, //后加
{ id: "ghaႋ", value: "ṅghi" }, //后加

{ id: "ာ", value: "᩠ā" },
{ id: "ါ", value: "᩠ā" },
{ id: "a᩠", value: "" }, //後加

{ id: "ေṅkhy", value: "ṅkhyE" }, //后加
{ id: "ေṅghy", value: "ṅghyE" }, //后加
{ id: "ေṅky", value: "ṅkyE" }, //后加
{ id: "ေṅgy", value: "ṅgyE" }, //后加

{ id: "ေndr", value: "ndrE" }, //後加
{ id: "ေntr", value: "ntrE" }, //後加
{ id: "ေdr", value: "drE" }, //後加
{ id: "ေtr", value: "trE" }, //後加
{ id: "ေkr", value: "krE" }, //後加
{ id: "ေgr", value: "grE" }, //後加
{ id: "ေbr", value: "brE" }, //後加

{ id: "ေky", value: "kyE" }, //後加
{ id: "ေby", value: "byE" }, //後加
{ id: "ေṇy", value: "ṇyE" }, //後加
{ id: "ေby", value: "byE" }, //後加

{ id: "ေtv", value: "tvE" }, //後加
{ id: "ေdv", value: "dvE" }, //後加
{ id: "ေsv", value: "svE" }, //後加
{ id: "ေnv", value: "nvE" }, //後加

{ id: "ေḷh", value: "ḷhE" }, //後加
{ id: "ေlh", value: "lhE" }, //後加
{ id: "ေṇh", value: "ṇhE" }, //後加
{ id: "ေñh", value: "ñhE" }, //後加
{ id: "ေmh", value: "mhE" }, //後加

{ id: "ေsn", value: "snE" }, //後加
{ id: "ေvh", value: "vhE" }, //後加
{ id: "ေpl", value: "plE" }, //後加
{ id: "ေkl", value: "klE" }, //後加

{ id: "ေṅkh", value: "ṅkhE" }, //后加
{ id: "ေṅgh", value: "ṅghE" }, //后加
{ id: "ေṅk", value: "ṅkE" }, //后加
{ id: "ေṅg", value: "ṅgE" }, //后加

{ id: "ေmph", value: "mphE" }, //后加
{ id: "ေmbh", value: "mbhE" }, //后加
{ id: "ေmp", value: "mpE" }, //后加
{ id: "ေmb", value: "mbE" }, //后加

{ id: "ေnth", value: "nthE" }, //后加
{ id: "ေndh", value: "ndhE" }, //后加
{ id: "ေnt", value: "ntE" }, //后加
{ id: "ေnd", value: "ndE" }, //后加

{ id: "ေṇṭh", value: "ṇṭhE" }, //后加
{ id: "ေṇḍh", value: "ṇḍhE" }, //后加
{ id: "ေṇṭ", value: "ṇṭE" }, //后加
{ id: "ေṇḍ", value: "ṇḍE" }, //后加

{ id: "ေñch", value: "ñchE" }, //后加
{ id: "ေñjh", value: "ñjhE" }, //后加
{ id: "ေñc", value: "ñcE" }, //后加
{ id: "ေñj", value: "ñjE" }, //后加

{ id: "ေss", value: "ssE" }, //后加
{ id: "ေkkh", value: "kkhE" }, //后加
{ id: "ေggh", value: "gghE" }, //后加
{ id: "ေcch", value: "cchE" }, //后加
{ id: "ေjjh", value: "jjhE" }, //后加
{ id: "ေññ", value: "ññE" }, //后加
{ id: "ေṭṭh", value: "ṭṭhE" }, //后加
{ id: "ေḍḍh", value: "ḍḍhE" }, //后加
{ id: "ေtth", value: "tthE" }, //后加
{ id: "ေddh", value: "ddhE" }, //后加
{ id: "ေpph", value: "pphE" }, //后加
{ id: "ေbbh", value: "bbhE" }, //后加
{ id: "ေkk", value: "kkE" }, //后加
{ id: "ေgg", value: "ggE" }, //后加
{ id: "ေcc", value: "ccE" }, //后加
{ id: "ေjj", value: "jjE" }, //后加
{ id: "ေḷḷ", value: "ḷḷE" }, //后加
{ id: "ေṭṭ", value: "ṭṭE" }, //后加
{ id: "ေḍḍ", value: "ḍḍE" }, //后加
{ id: "ေṇṇ", value: "ṇṇE" }, //后加
{ id: "ေtt", value: "ttE" }, //后加
{ id: "ေdd", value: "ddE" }, //后加
{ id: "ေnn", value: "nnE" }, //后加
{ id: "ေpp", value: "ppE" }, //后加
{ id: "ေbb", value: "bbE" }, //后加
{ id: "ေmm", value: "mmE" }, //后加
{ id: "ေyy", value: "yyE" }, //后加
{ id: "ေll", value: "llE" }, //后加

{ id: "ေkh", value: "khE" }, //后加
{ id: "ေgh", value: "ghE" }, //后加
{ id: "ေch", value: "chE" }, //后加
{ id: "ေjh", value: "jhE" }, //后加
{ id: "ေṭh", value: "ṭhE" }, //后加
{ id: "ေḍh", value: "ḍhE" }, //后加
{ id: "ေth", value: "thE" }, //后加
{ id: "ေdh", value: "dhE" }, //后加
{ id: "ေph", value: "phE" }, //后加
{ id: "ေbh", value: "bhE" }, //后加
{ id: "ေk", value: "kE" }, //后加
{ id: "ေg", value: "gE" }, //后加
{ id: "ေc", value: "cE" }, //后加
{ id: "ေj", value: "jE" }, //后加
{ id: "ေñ", value: "ñE" }, //后加
{ id: "ေḷ", value: "ḷE" }, //后加
{ id: "ေṭ", value: "ṭE" }, //后加
{ id: "ေḍ", value: "ḍE" }, //后加
{ id: "ေṇ", value: "ṇE" }, //后加
{ id: "ေt", value: "tE" }, //后加
{ id: "ေd", value: "dE" }, //后加
{ id: "ေn", value: "nE" }, //后加
{ id: "ေh", value: "hE" }, //后加
{ id: "ေp", value: "pE" }, //后加
{ id: "ေb", value: "bE" }, //后加
{ id: "ေm", value: "mE" }, //后加
{ id: "ေy", value: "yE" }, //后加
{ id: "ေr", value: "rE" }, //后加
{ id: "ေl", value: "lE" }, //后加
{ id: "ေv", value: "vE" }, //后加
{ id: "ေs", value: "sE" }, //后加
{ id: "ေy", value: "yE" }, //后加
{ id: "ေv", value: "vE" }, //后加
{ id: "ေr", value: "rE" }, //后加

{ id: "Ea", value: "e" }, //后加
{ id: "Eā", value: "o" }, //后加
{ id: "E", value: "e" }, //后加
//{ "id":"ūu" , "value":"ū" },//后加
//{ "id":"uū" , "value":"ū" },//后加

{ id: "၁", value: "1" },
{ id: "၂", value: "2" },
{ id: "၃", value: "3" },
{ id: "၄", value: "4" },
{ id: "၅", value: "5" },
{ id: "၆", value: "6" },
{ id: "၇", value: "7" },
{ id: "၈", value: "8" },
{ id: "၉", value: "9" },
{ id: "၀", value: "0" },
{ id: "း", value: "”" },
{ id: "့", value: "’" },
{ id: "။", value: "．" },
{ id: "၊", value: "，" },
];

function roman_to_tai(input) {
let txt = input;

try {
for (r_to_t_i in char_roman_to_tai) {
eval("txt=txt.replace(/" + char_roman_to_tai[r_to_t_i].id + "/g,char_roman_to_tai[r_to_t_i].value);");
}
} catch (err) {
//error
alert(err.message);
}
return txt;
}