import type { Route } from "../classes/Route";
import { allDK64CERoutes, allDK64Routes, allDKBCERoutes, allDKBRoutes, allYRRoutes } from "../lists";

export const getRouteByTitle = (routeSet: string, title: string) => {
  let routeGroup: Route[] = [];
  switch (routeSet) {
    case "dk64":
      routeGroup = allDK64Routes;
      break;
    case "dk64ce":
      routeGroup = allDK64CERoutes;
      break;
    case "dkb":
      routeGroup = allDKBRoutes;
      break;
    case "dkbce":
      routeGroup = allDKBCERoutes;
      break;
    case "yr":
      routeGroup = allYRRoutes;
      break;
    default:
      break;
  }

  return routeGroup.filter((route: Route) => {
    return route.title === title;
  })[0];
};
