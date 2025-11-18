import type { Route } from "../classes/Route";
import * as dk64 from "./dk64";
import * as dk64ce from "./dk64ce";
import * as dkb from "./dkb";
import * as dkbce from "./dkbce";
import * as yr from "./yr";

export const allDK64Routes: Route[] = [
  dk64.dk64Any5Kong,
  dk64.dk64Any1Kong2014,
  dk64.dk64Any1Kong2015,
  dk64.dk64NLEIntermediate,
  dk64.dk64NLEAdvanced40BP,
  dk64.dk64NLEHelmEscape,
  dk64.dk64NLEHelmEscapeAdvanced,
  dk64.dk64NLE801IQ,
  dk64.dk64101Intermediate,
  dk64.dk64101Advanced,
  dk64.dk64101Expert,
  dk64.dk64101CastleKongs
];

export const allDK64CERoutes: Route[] = [
  dk64ce.dk64AnyNoISG,
  dk64ce.dk64AnyAllKeys,
  dk64ce.dk64100GBMoveless,
  dk64ce.dk64TANLE,
  dk64ce.dk64TA101,
  dk64ce.dk64GlitchlessAny,
  dk64ce.dk64Glitchless101,
  dk64ce.dk64GlitchlessAllCollectables
];

export const allDKBRoutes: Route[] = [
  dkb.dkbAny,
  dkb.dkbABAB,
  dkb.dkbTrueEnding,
  dkb.dkb100
];

export const allDKBCERoutes: Route[] = [dkbce.dkbceTrans];

export const allYRRoutes: Route[] = [yr.yrNED, yr.yr100];
