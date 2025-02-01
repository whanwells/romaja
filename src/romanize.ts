// consonants
const GIYEOK = 12593;
const SSANG_GIYEOK = 12594;
const GIYEOK_SIOT = 12595;
const NIEUN = 12596;
const NIEUN_JIEUT = 12597;
const NIEUN_HIEUT = 12598;
const DIGEUT = 12599;
const SSANG_DIGEUT = 12600;
const RIEUL = 12601;
const MIEUM = 12609;
const BIEUP = 12610;
const SSANG_BIEUP = 12611;
const SIOT = 12613;
const SSANG_SIOT = 12614;
const IEUNG = 12615;
const JIEUT = 12616;
const SSANG_JIEUT = 12617;
const CHIEUT = 12618;
const KIEUK = 12619;
const TIEUT = 12620;
const PIEUP = 12621;
const HIEUT = 12622;

// vowels
const A = 12623;
const AE = 12624;
const YA = 12625;
const YAE = 12626;
const EO = 12627;
const E = 12628;
const YEO = 12629;
const YE = 12630;
const O = 12631;
const WA = 12632;
const WAE = 12633;
const OE = 12634;
const YO = 12635;
const U = 12636;
const WO = 12637;
const WE = 12638;
const WI = 12639;
const YU = 12640;
const EU = 12641;
const UI = 12642;
const I = 12643;

// syllable code ranges by consonant
const GIYEOK_BEGIN = 44032;
const GIYEOK_END = 44619;
const SSANG_GIYEOK_BEGIN = 44620;
const SSANG_GIYEOK_END = 45207;
const NIEUN_BEGIN = 45208;
const NIEUN_END = 45795;
const DIGEUT_BEGIN = 45796;
const DIGEUT_END = 46383;
const SSANG_DIGEUT_BEGIN = 46384;
const SSANG_DIGEUT_END = 46971;
const RIEUL_BEGIN = 46972;
const RIEUL_END = 47559;
const MIEUM_BEGIN = 47560;
const MIEUM_END = 48147;
const BIEUP_BEGIN = 48148;
const BIEUP_END = 48735;
const SSANG_BIEUP_BEGIN = 48736;
const SSANG_BIEUP_END = 49323;
const SIOT_BEGIN = 49324;
const SIOT_END = 49911;
const SSANG_SIOT_BEGIN = 49912;
const SSANG_SIOT_END = 50499;
const IEUNG_BEGIN = 50500;
const IEUNG_END = 51087;
const JIEUT_BEGIN = 51088;
const JIEUT_END = 51675;
const SSANG_JIEUT_BEGIN = 51676;
const SSANG_JIEUT_END = 52263;
const CHIEUT_BEGIN = 52264;
const CHIEUT_END = 52851;
const KIEUK_BEGIN = 52852;
const KIEUK_END = 53439;
const TIEUT_BEGIN = 53440;
const TIEUT_END = 54027;
const PIEUP_BEGIN = 54028;
const PIEUP_END = 54615;
const HIEUT_BEGIN = 54616;
const HIEUT_END = 55205;

// syllable vowel + batchim index ranges
const A_BEGIN = 0;
const A_END = 27;
const AE_BEGIN = 28;
const AE_END = 55;
const YA_BEGIN = 56;
const YA_END = 83;
const YAE_BEGIN = 84;
const YAE_END = 111;
const EO_BEGIN = 112;
const EO_END = 139;
const E_BEGIN = 140;
const E_END = 167;
const YEO_BEGIN = 168;
const YEO_END = 195;
const YE_BEGIN = 196;
const YE_END = 223;
const O_BEGIN = 224;
const O_END = 251;
const WA_BEGIN = 252;
const WA_END = 279;
const WAE_BEGIN = 280;
const WAE_END = 307;
const OE_BEGIN = 308;
const OE_END = 335;
const YO_BEGIN = 336;
const YO_END = 363;
const U_BEGIN = 364;
const U_END = 391;
const WO_BEGIN = 392;
const WO_END = 419;
const WE_BEGIN = 420;
const WE_END = 447;
const WI_BEGIN = 448;
const WI_END = 475;
const YU_BEGIN = 476;
const YU_END = 503;
const EU_BEGIN = 504;
const EU_END = 531;
const UI_BEGIN = 532;
const UI_END = 559;
const I_BEGIN = 560;

// batchim indices
const BATCHIM_GIYEOK = 1;
const BATCHIM_SSANG_GIYEOK = 2;
const BATCHIM_GIYEOK_SIOT = 3;
const BATCHIM_NIEUN = 4;
const BATCHIM_NIEUN_JIEUT = 5;
const BATCHIM_NIEUN_HIEUT = 6;
const BATCHIM_DIGEUT = 7;
const BATCHIM_RIEUL = 8;
const BATCHIM_RIEUL_GIYEOK = 9;
const BATCHIM_RIEUL_MIEUM = 10;
const BATCHIM_RIEUL_BIEUP = 11;
const BATCHIM_RIEUL_SIOT = 12;
const BATCHIM_RIEUL_TIEUT = 13;
const BATCHIM_RIEUL_PIEUP = 14;
const BATCHIM_RIEUL_HIEUT = 15;
const BATCHIM_MIEUM = 16;
const BATCHIM_BIEUP = 17;
const BATCHIM_BIEUP_SIOT = 18;
const BATCHIM_SIOT = 19;
const BATCHIM_SSANG_SIOT = 20;
const BATCHIM_IEUNG = 21;
const BATCHIM_JIEUT = 22;
const BATCHIM_CHIEUT = 23;
const BATCHIM_KIEUK = 24;
const BATCHIM_TIEUT = 25;
const BATCHIM_PIEUP = 26;
const BATCHIM_HIEUT = 27;

export function romanize(source: string): string {
  const results = [];
  let previousBatchim = 0;

  for (let i = 0; i < source.length; i++) {
    const code = source.charCodeAt(i);
    const next = source.charCodeAt(i + 1);

    if (code >= GIYEOK && code <= I) {
      // is the character a Hangul character?
      switch (code) {
        case GIYEOK:
          results.push("g");
          break;
        case SSANG_GIYEOK:
          results.push("kk");
          break;
        case GIYEOK_SIOT:
          results.push("gs");
          break;
        case NIEUN:
          results.push("n");
          break;
        case NIEUN_JIEUT:
          results.push("nt");
          break;
        case NIEUN_HIEUT:
          results.push("nh");
          break;
        case DIGEUT:
          results.push("d");
          break;
        case SSANG_DIGEUT:
          results.push("tt");
          break;
        case RIEUL:
          results.push("r");
          break;
        case MIEUM:
          results.push("m");
          break;
        case BIEUP:
          results.push("b");
          break;
        case SSANG_BIEUP:
          results.push("pp");
          break;
        case SIOT:
          results.push("s");
          break;
        case SSANG_SIOT:
          results.push("ss");
          break;
        case IEUNG:
          results.push("-");
          break;
        case JIEUT:
          results.push("j");
          break;
        case SSANG_JIEUT:
          results.push("jj");
          break;
        case CHIEUT:
          results.push("ch");
          break;
        case KIEUK:
          results.push("k");
          break;
        case TIEUT:
          results.push("t");
          break;
        case PIEUP:
          results.push("p");
          break;
        case HIEUT:
          results.push("h");
          break;
        case A:
          results.push("a");
          break;
        case AE:
          results.push("ae");
          break;
        case YA:
          results.push("ya");
          break;
        case YAE:
          results.push("yae");
          break;
        case EO:
          results.push("eo");
          break;
        case E:
          results.push("e");
          break;
        case YEO:
          results.push("yeo");
          break;
        case YE:
          results.push("ye");
          break;
        case O:
          results.push("o");
          break;
        case WA:
          results.push("wa");
          break;
        case WAE:
          results.push("wae");
          break;
        case OE:
          results.push("oe");
          break;
        case YO:
          results.push("yo");
          break;
        case U:
          results.push("u");
          break;
        case WO:
          results.push("wo");
          break;
        case WE:
          results.push("we");
          break;
        case WI:
          results.push("wi");
          break;
        case YU:
          results.push("yu");
          break;
        case EU:
          results.push("eu");
          break;
        case UI:
          results.push("ui");
          break;
        case I:
          results.push("i");
          break;
      }
    } else if (code >= GIYEOK_BEGIN && code <= HIEUT_END) {
      // is character a Hangul syllable?
      let vowel: number;
      let batchim: number;

      // add consonant
      if (code <= GIYEOK_END) {
        // ㄱ
        results.push("g");
        vowel = code - GIYEOK_BEGIN;
      } else if (code <= SSANG_GIYEOK_END) {
        // ㄲ
        results.push("kk");
        vowel = code - SSANG_GIYEOK_BEGIN;
      } else if (code <= NIEUN_END) {
        // ㄴ
        if (
          previousBatchim === BATCHIM_DIGEUT ||
          previousBatchim === BATCHIM_SIOT ||
          previousBatchim === BATCHIM_JIEUT ||
          previousBatchim === BATCHIM_CHIEUT ||
          previousBatchim === BATCHIM_TIEUT ||
          previousBatchim === BATCHIM_HIEUT
        ) {
          results.pop();
          results.push("nn");
        } else if (previousBatchim === BATCHIM_RIEUL) {
          results.push("l");
        } else if (previousBatchim === BATCHIM_RIEUL_BIEUP) {
          results.pop();
          results.push("lmn");
        } else if (previousBatchim === BATCHIM_BIEUP) {
          results.pop();
          results.push("mn");
        } else {
          results.push("n");
        }
        vowel = code - NIEUN_BEGIN;
      } else if (code <= DIGEUT_END) {
        // ㄷ
        results.push("d");
        vowel = code - DIGEUT_BEGIN;
      } else if (code <= SSANG_DIGEUT_END) {
        // ㄸ
        results.push("tt");
        vowel = code - SSANG_DIGEUT_BEGIN;
      } else if (code <= RIEUL_END) {
        // ㄹ
        if (
          previousBatchim === BATCHIM_GIYEOK ||
          previousBatchim === BATCHIM_MIEUM ||
          previousBatchim === BATCHIM_RIEUL_MIEUM ||
          previousBatchim === BATCHIM_RIEUL_BIEUP ||
          previousBatchim === BATCHIM_IEUNG
        ) {
          results.push("n");
        } else if (
          previousBatchim === BATCHIM_NIEUN ||
          previousBatchim === BATCHIM_RIEUL
        ) {
          results.push("l");
        } else if (
          previousBatchim === BATCHIM_DIGEUT ||
          previousBatchim === BATCHIM_JIEUT ||
          previousBatchim === BATCHIM_CHIEUT ||
          previousBatchim === BATCHIM_TIEUT ||
          previousBatchim === BATCHIM_HIEUT
        ) {
          results.pop();
          results.push("nn");
        } else if (previousBatchim === BATCHIM_BIEUP) {
          results.pop();
          results.push("mn");
        } else {
          results.push("r");
        }
        vowel = code - RIEUL_BEGIN;
      } else if (code <= MIEUM_END) {
        // ㅁ
        if (
          previousBatchim === BATCHIM_DIGEUT ||
          previousBatchim === BATCHIM_SIOT ||
          previousBatchim === BATCHIM_JIEUT ||
          previousBatchim === BATCHIM_CHIEUT ||
          previousBatchim === BATCHIM_TIEUT ||
          previousBatchim === BATCHIM_HIEUT
        ) {
          results.pop();
          results.push("nm");
        } else if (previousBatchim === BATCHIM_BIEUP) {
          results.pop();
          results.push("mm");
        } else {
          results.push("m");
        }
        vowel = code - MIEUM_BEGIN;
      } else if (code <= BIEUP_END) {
        // ㅂ
        results.push("b");
        vowel = code - BIEUP_BEGIN;
      } else if (code <= SSANG_BIEUP_END) {
        // ㅃ
        results.push("pp");
        vowel = code - SSANG_BIEUP_BEGIN;
      } else if (code <= SIOT_END) {
        // ㅅ
        results.push("s");
        vowel = code - SIOT_BEGIN;
      } else if (code <= SSANG_SIOT_END) {
        // ㅆ
        results.push("ss");
        vowel = code - SSANG_SIOT_BEGIN;
      } else if (code <= IEUNG_END) {
        // ㅇ
        if (previousBatchim === BATCHIM_IEUNG) {
          results.push("-");
        }
        vowel = code - IEUNG_BEGIN;
      } else if (code <= JIEUT_END) {
        // ㅈ
        results.push("j");
        vowel = code - JIEUT_BEGIN;
      } else if (code <= SSANG_JIEUT_END) {
        results.push("jj");
        vowel = code - SSANG_JIEUT_BEGIN;
      } else if (code <= CHIEUT_END) {
        // ㅊ
        results.push("ch");
        vowel = code - CHIEUT_BEGIN;
      } else if (code <= KIEUK_END) {
        // ㅋ
        results.push("k");
        vowel = code - KIEUK_BEGIN;
      } else if (code <= TIEUT_END) {
        // ㅌ
        if (
          previousBatchim === BATCHIM_DIGEUT ||
          previousBatchim === BATCHIM_SIOT ||
          previousBatchim === BATCHIM_SSANG_SIOT ||
          previousBatchim === BATCHIM_JIEUT ||
          previousBatchim === BATCHIM_CHIEUT ||
          previousBatchim === BATCHIM_TIEUT
        ) {
          results.push("-t");
        } else if (previousBatchim !== BATCHIM_HIEUT) {
          results.push("t");
        }
        vowel = code - TIEUT_BEGIN;
      } else if (code <= PIEUP_END) {
        // ㅍ
        results.push("p");
        vowel = code - PIEUP_BEGIN;
      } else {
        // ㅎ
        results.push("h");
        vowel = code - HIEUT_BEGIN;
      }

      // add vowel
      if (vowel <= A_END) {
        results.push("a");
        batchim = vowel - A_BEGIN;
      } else if (vowel <= AE_END) {
        results.push("ae");
        batchim = vowel - AE_BEGIN;
      } else if (vowel <= YA_END) {
        if (previousBatchim === BATCHIM_DIGEUT) {
          results.pop();
          results.push("ja");
        } else if (previousBatchim === BATCHIM_TIEUT) {
          results.pop();
          results.push("cha");
        } else {
          results.push("ya");
        }
        batchim = vowel - YA_BEGIN;
      } else if (vowel <= YAE_END) {
        if (previousBatchim === BATCHIM_DIGEUT) {
          results.pop();
          results.push("jae");
        } else if (previousBatchim === BATCHIM_TIEUT) {
          results.pop();
          results.push("chae");
        } else {
          results.push("yae");
        }
        batchim = vowel - YAE_BEGIN;
      } else if (vowel <= EO_END) {
        results.push("eo");
        batchim = vowel - EO_BEGIN;
      } else if (vowel <= E_END) {
        results.push("e");
        batchim = vowel - E_BEGIN;
      } else if (vowel <= YEO_END) {
        if (previousBatchim === BATCHIM_DIGEUT) {
          results.pop();
          results.push("jeo");
        } else if (previousBatchim === BATCHIM_TIEUT) {
          results.pop();
          results.push("cheo");
        } else {
          results.push("yeo");
        }
        batchim = vowel - YEO_BEGIN;
      } else if (vowel <= YE_END) {
        if (previousBatchim === BATCHIM_DIGEUT) {
          results.pop();
          results.push("je");
        } else if (previousBatchim === BATCHIM_TIEUT) {
          results.pop();
          results.push("che");
        } else {
          results.push("ye");
        }
        batchim = vowel - YE_BEGIN;
      } else if (vowel <= O_END) {
        results.push("o");
        batchim = vowel - O_BEGIN;
      } else if (vowel <= WA_END) {
        results.push("wa");
        batchim = vowel - WA_BEGIN;
      } else if (vowel <= WAE_END) {
        results.push("wae");
        batchim = vowel - WAE_BEGIN;
      } else if (vowel <= OE_END) {
        results.push("oe");
        batchim = vowel - OE_BEGIN;
      } else if (vowel <= YO_END) {
        if (previousBatchim === BATCHIM_DIGEUT) {
          results.pop();
          results.push("jo");
        } else if (previousBatchim === BATCHIM_TIEUT) {
          results.pop();
          results.push("cho");
        } else {
          results.push("yo");
        }
        batchim = vowel - YO_BEGIN;
      } else if (vowel <= U_END) {
        results.push("u");
        batchim = vowel - U_BEGIN;
      } else if (vowel <= WO_END) {
        results.push("wo");
        batchim = vowel - WO_BEGIN;
      } else if (vowel <= WE_END) {
        results.push("we");
        batchim = vowel - WE_BEGIN;
      } else if (vowel <= WI_END) {
        results.push("wi");
        batchim = vowel - WI_BEGIN;
      } else if (vowel <= YU_END) {
        if (previousBatchim === BATCHIM_DIGEUT) {
          results.pop();
          results.push("ju");
        } else if (previousBatchim === BATCHIM_TIEUT) {
          results.pop();
          results.push("chu");
        } else {
          results.push("yu");
        }
        batchim = vowel - YU_BEGIN;
      } else if (vowel <= EU_END) {
        results.push("eu");
        batchim = vowel - EU_BEGIN;
      } else if (vowel <= UI_END) {
        results.push("ui");
        batchim = vowel - UI_BEGIN;
      } else {
        if (previousBatchim === BATCHIM_DIGEUT) {
          results.pop();
          results.push("ji");
        } else if (previousBatchim === BATCHIM_TIEUT) {
          results.pop();
          results.push("chi");
        } else {
          results.push("i");
        }
        batchim = vowel - I_BEGIN;
      }

      // add batchim
      switch (batchim) {
        case BATCHIM_GIYEOK:
          if (
            (next >= NIEUN_BEGIN && next <= NIEUN_END) ||
            (next >= RIEUL_BEGIN && next <= MIEUM_END)
          ) {
            results.push("ng");
          } else if (next >= IEUNG_BEGIN && next <= IEUNG_END) {
            results.push("g");
          } else if (next >= KIEUK_BEGIN && next <= KIEUK_END) {
            results.push("k-");
          } else {
            results.push("k");
          }
          break;
        case BATCHIM_SSANG_GIYEOK:
          results.push("k");
          break;
        case BATCHIM_GIYEOK_SIOT:
          if (next >= IEUNG_BEGIN && next <= IEUNG_END) {
            results.push("ks");
          } else {
            results.push("kt");
          }
          break;
        case BATCHIM_NIEUN:
          if (next >= GIYEOK_BEGIN && next <= GIYEOK_END) {
            results.push("n-");
          } else if (next >= RIEUL_BEGIN && next <= RIEUL_END) {
            results.push("l");
          } else {
            results.push("n");
          }
          break;
        case BATCHIM_NIEUN_JIEUT:
          if (next >= IEUNG_BEGIN && next <= IEUNG_END) {
            results.push("nj");
          } else {
            results.push("nt");
          }
          break;
        case BATCHIM_NIEUN_HIEUT:
          if (next >= IEUNG_BEGIN && next <= IEUNG_END) {
            results.push("nh");
          } else {
            results.push("nt");
          }
          break;
        case BATCHIM_DIGEUT:
          if (next >= IEUNG_BEGIN && next <= IEUNG_END) {
            results.push("d");
          } else {
            results.push("t");
          }
          break;
        case BATCHIM_RIEUL:
          if (next >= IEUNG_BEGIN && next <= IEUNG_END) {
            results.push("r");
          } else {
            results.push("l");
          }
          break;
        case BATCHIM_RIEUL_GIYEOK:
          if (next >= IEUNG_BEGIN && next <= IEUNG_END) {
            results.push("lg");
          } else {
            results.push("lk");
          }
          break;
        case BATCHIM_RIEUL_MIEUM:
          results.push("lm");
          break;
        case BATCHIM_RIEUL_BIEUP:
          if (next >= IEUNG_BEGIN && next <= IEUNG_END) {
            results.push("lb");
          } else {
            results.push("lp");
          }
          break;
        case BATCHIM_RIEUL_SIOT:
          if (next >= IEUNG_BEGIN && next <= IEUNG_END) {
            results.push("ls");
          } else {
            results.push("lt");
          }
          break;
        case BATCHIM_RIEUL_TIEUT:
          results.push("lt");
          break;
        case BATCHIM_RIEUL_PIEUP:
          results.push("lp");
          break;
        case BATCHIM_RIEUL_HIEUT:
          if (next >= IEUNG_BEGIN && next <= IEUNG_END) {
            results.push("lh");
          } else {
            results.push("lt");
          }
          break;
        case BATCHIM_MIEUM:
          results.push("m");
          break;
        case BATCHIM_BIEUP:
          if (next >= IEUNG_BEGIN && next <= IEUNG_END) {
            results.push("b");
          } else {
            results.push("p");
          }
          break;
        case BATCHIM_BIEUP_SIOT:
          if (next >= IEUNG_BEGIN && next <= IEUNG_END) {
            results.push("ps");
          } else {
            results.push("pt");
          }
          break;
        case BATCHIM_SIOT:
          if (next >= IEUNG_BEGIN && next <= IEUNG_END) {
            results.push("s");
          } else {
            results.push("t");
          }
          break;
        case BATCHIM_SSANG_SIOT:
          if (next >= IEUNG_BEGIN && next <= IEUNG_END) {
            results.push("ss");
          } else {
            results.push("t");
          }
          break;
        case BATCHIM_IEUNG:
          results.push("ng");
          break;
        case BATCHIM_JIEUT:
          if (next >= IEUNG_BEGIN && next <= IEUNG_END) {
            results.push("j");
          } else {
            results.push("t");
          }
          break;
        case BATCHIM_CHIEUT:
          if (next >= IEUNG_BEGIN && next <= IEUNG_END) {
            results.push("ch");
          } else {
            results.push("t");
          }
          break;
        case BATCHIM_KIEUK:
          results.push("k");
          break;
        case BATCHIM_TIEUT:
          results.push("t");
          break;
        case BATCHIM_PIEUP:
          results.push("p");
          break;
        case BATCHIM_HIEUT:
          if (next >= IEUNG_BEGIN && next <= IEUNG_END) {
            results.push("h");
          } else {
            results.push("t");
          }
          break;
      }
      previousBatchim = batchim;
    } else {
      // copy the character as-is
      results.push(source[i]);
      previousBatchim = 0;
    }
  }

  return results.join("");
}
