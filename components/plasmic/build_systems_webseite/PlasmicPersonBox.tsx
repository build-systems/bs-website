// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: edADxkrxNS9ND5YewKEz7S
// Component: YHnRC0fMAeno

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import SmallButton from "../../SmallButton"; // plasmic-import: t-O0e7eN3aHH/component

import { useScreenVariants as useScreenVariants_5XwAguWqqS0 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 5XW-aguWqqS0/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_build_systems_webseite.module.css"; // plasmic-import: edADxkrxNS9ND5YewKEz7S/projectcss
import sty from "./PlasmicPersonBox.module.css"; // plasmic-import: YHnRC0fMAeno/css

createPlasmicElementProxy;

export type PlasmicPersonBox__VariantMembers = {
  personen:
    | "martinBittmann"
    | "danielDieren"
    | "danielLocatelli"
    | "juliaDorn"
    | "vinzenzTrimborn"
    | "andreasThoma";
  shrinked: "shrinked";
};
export type PlasmicPersonBox__VariantsArgs = {
  personen?: SingleChoiceArg<
    | "martinBittmann"
    | "danielDieren"
    | "danielLocatelli"
    | "juliaDorn"
    | "vinzenzTrimborn"
    | "andreasThoma"
  >;
  shrinked?: SingleBooleanChoiceArg<"shrinked">;
};
type VariantPropType = keyof PlasmicPersonBox__VariantsArgs;
export const PlasmicPersonBox__VariantProps = new Array<VariantPropType>(
  "personen",
  "shrinked"
);

export type PlasmicPersonBox__ArgsType = {};
type ArgPropType = keyof PlasmicPersonBox__ArgsType;
export const PlasmicPersonBox__ArgProps = new Array<ArgPropType>();

export type PlasmicPersonBox__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  smallButton?: p.Flex<typeof SmallButton>;
};

export interface DefaultPersonBoxProps {
  personen?: SingleChoiceArg<
    | "martinBittmann"
    | "danielDieren"
    | "danielLocatelli"
    | "juliaDorn"
    | "vinzenzTrimborn"
    | "andreasThoma"
  >;
  shrinked?: SingleBooleanChoiceArg<"shrinked">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPersonBox__RenderFunc(props: {
  variants: PlasmicPersonBox__VariantsArgs;
  args: PlasmicPersonBox__ArgsType;
  overrides: PlasmicPersonBox__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "shrinked",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.shrinked
      },
      {
        path: "personen",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.personen
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_5XwAguWqqS0()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootpersonen_danielDieren]: hasVariant(
            $state,
            "personen",
            "danielDieren"
          ),
          [sty.rootpersonen_danielLocatelli]: hasVariant(
            $state,
            "personen",
            "danielLocatelli"
          ),
          [sty.rootpersonen_martinBittmann]: hasVariant(
            $state,
            "personen",
            "martinBittmann"
          ),
          [sty.rootshrinked]: hasVariant($state, "shrinked", "shrinked")
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__mNiQ, {
          [sty.freeBoxpersonen_danielDieren__mNiQ1VwGv]: hasVariant(
            $state,
            "personen",
            "danielDieren"
          ),
          [sty.freeBoxpersonen_danielLocatelli__mNiQohgfH]: hasVariant(
            $state,
            "personen",
            "danielLocatelli"
          ),
          [sty.freeBoxpersonen_martinBittmann__mNiQo1Atu]: hasVariant(
            $state,
            "personen",
            "martinBittmann"
          ),
          [sty.freeBoxpersonen_vinzenzTrimborn__mNiQCuOz5]: hasVariant(
            $state,
            "personen",
            "vinzenzTrimborn"
          ),
          [sty.freeBoxshrinked__mNiQyvp1T]: hasVariant(
            $state,
            "shrinked",
            "shrinked"
          )
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox___8MU2P, {
            [sty.freeBoxpersonen_andreasThoma___8MU2PynRd]: hasVariant(
              $state,
              "personen",
              "andreasThoma"
            ),
            [sty.freeBoxpersonen_danielDieren___8MU2P1VwGv]: hasVariant(
              $state,
              "personen",
              "danielDieren"
            ),
            [sty.freeBoxpersonen_danielLocatelli___8MU2PohgfH]: hasVariant(
              $state,
              "personen",
              "danielLocatelli"
            ),
            [sty.freeBoxpersonen_juliaDorn___8MU2PDiVf4]: hasVariant(
              $state,
              "personen",
              "juliaDorn"
            ),
            [sty.freeBoxpersonen_martinBittmann___8MU2Po1Atu]: hasVariant(
              $state,
              "personen",
              "martinBittmann"
            ),
            [sty.freeBoxshrinked___8MU2PYvp1T]: hasVariant(
              $state,
              "shrinked",
              "shrinked"
            )
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__stN0I, {
              [sty.freeBoxpersonen_danielDieren__stN0I1VwGv]: hasVariant(
                $state,
                "personen",
                "danielDieren"
              ),
              [sty.freeBoxpersonen_danielLocatelli__stN0IohgfH]: hasVariant(
                $state,
                "personen",
                "danielLocatelli"
              ),
              [sty.freeBoxpersonen_juliaDorn__stN0IDiVf4]: hasVariant(
                $state,
                "personen",
                "juliaDorn"
              ),
              [sty.freeBoxpersonen_vinzenzTrimborn__stN0ICuOz5]: hasVariant(
                $state,
                "personen",
                "vinzenzTrimborn"
              ),
              [sty.freeBoxshrinked__stN0IYvp1T]: hasVariant(
                $state,
                "shrinked",
                "shrinked"
              )
            })}
          >
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img, {
                [sty.imgpersonen_andreasThoma]: hasVariant(
                  $state,
                  "personen",
                  "andreasThoma"
                ),
                [sty.imgpersonen_danielDieren]: hasVariant(
                  $state,
                  "personen",
                  "danielDieren"
                ),
                [sty.imgpersonen_danielLocatelli]: hasVariant(
                  $state,
                  "personen",
                  "danielLocatelli"
                ),
                [sty.imgpersonen_juliaDorn]: hasVariant(
                  $state,
                  "personen",
                  "juliaDorn"
                ),
                [sty.imgpersonen_martinBittmann]: hasVariant(
                  $state,
                  "personen",
                  "martinBittmann"
                ),
                [sty.imgpersonen_vinzenzTrimborn]: hasVariant(
                  $state,
                  "personen",
                  "vinzenzTrimborn"
                ),
                [sty.imgshrinked]: hasVariant($state, "shrinked", "shrinked")
              })}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={
                hasVariant(globalVariants, "screen", "iPhone")
                  ? "93px"
                  : hasVariant(globalVariants, "screen", "iPad")
                  ? "93px"
                  : "135px"
              }
              loading={"lazy"}
              src={
                hasVariant($state, "personen", "andreasThoma")
                  ? {
                      src: "/plasmic/build_systems_webseite/images/andreaspng.png",
                      fullWidth: 450,
                      fullHeight: 450,
                      aspectRatio: undefined
                    }
                  : hasVariant($state, "personen", "vinzenzTrimborn")
                  ? {
                      src: "/plasmic/build_systems_webseite/images/vinzenzpng.png",
                      fullWidth: 3098,
                      fullHeight: 3098,
                      aspectRatio: undefined
                    }
                  : hasVariant($state, "personen", "juliaDorn")
                  ? {
                      src: "/plasmic/build_systems_webseite/images/juliapng.png",
                      fullWidth: 1527,
                      fullHeight: 1527,
                      aspectRatio: undefined
                    }
                  : hasVariant($state, "personen", "danielLocatelli")
                  ? {
                      src: "/plasmic/build_systems_webseite/images/instaBilderpng2.png",
                      fullWidth: 6000,
                      fullHeight: 6001,
                      aspectRatio: undefined
                    }
                  : hasVariant($state, "personen", "danielDieren")
                  ? {
                      src: "/plasmic/build_systems_webseite/images/danielpng.png",
                      fullWidth: 550,
                      fullHeight: 550,
                      aspectRatio: undefined
                    }
                  : hasVariant($state, "personen", "martinBittmann")
                  ? {
                      src: "/plasmic/build_systems_webseite/images/martinpng.png",
                      fullWidth: 1167,
                      fullHeight: 1167,
                      aspectRatio: undefined
                    }
                  : {
                      src: "/plasmic/build_systems_webseite/images/image2.png",
                      fullWidth: 135,
                      fullHeight: 135,
                      aspectRatio: undefined
                    }
              }
            />
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__ruggD, {
              [sty.freeBoxpersonen_andreasThoma__ruggDynRd]: hasVariant(
                $state,
                "personen",
                "andreasThoma"
              ),
              [sty.freeBoxpersonen_danielLocatelli__ruggDohgfH]: hasVariant(
                $state,
                "personen",
                "danielLocatelli"
              ),
              [sty.freeBoxpersonen_juliaDorn__ruggDDiVf4]: hasVariant(
                $state,
                "personen",
                "juliaDorn"
              ),
              [sty.freeBoxpersonen_vinzenzTrimborn__ruggDCuOz5]: hasVariant(
                $state,
                "personen",
                "vinzenzTrimborn"
              ),
              [sty.freeBoxshrinked__ruggDyvp1T]: hasVariant(
                $state,
                "shrinked",
                "shrinked"
              )
            })}
          >
            <div
              className={classNames(projectcss.all, sty.freeBox__vgFKz, {
                [sty.freeBoxshrinked__vgFKzYvp1T]: hasVariant(
                  $state,
                  "shrinked",
                  "shrinked"
                )
              })}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zFh9K,
                  {
                    [sty.textpersonen_andreasThoma__zFh9KynRd]: hasVariant(
                      $state,
                      "personen",
                      "andreasThoma"
                    ),
                    [sty.textpersonen_danielDieren__zFh9K1VwGv]: hasVariant(
                      $state,
                      "personen",
                      "danielDieren"
                    ),
                    [sty.textpersonen_danielLocatelli__zFh9KohgfH]: hasVariant(
                      $state,
                      "personen",
                      "danielLocatelli"
                    ),
                    [sty.textpersonen_juliaDorn__zFh9KDiVf4]: hasVariant(
                      $state,
                      "personen",
                      "juliaDorn"
                    ),
                    [sty.textpersonen_vinzenzTrimborn__zFh9KCuOz5]: hasVariant(
                      $state,
                      "personen",
                      "vinzenzTrimborn"
                    )
                  }
                )}
              >
                {hasVariant($state, "personen", "andreasThoma")
                  ? "Andreas Thoma"
                  : hasVariant($state, "personen", "vinzenzTrimborn")
                  ? "Vinzenz Trimborn"
                  : hasVariant($state, "personen", "juliaDorn")
                  ? "Julia Dorn"
                  : hasVariant($state, "personen", "danielLocatelli")
                  ? "Daniel Locatelli"
                  : hasVariant($state, "personen", "danielDieren")
                  ? "Daniel Dieren "
                  : "Martin Bittmann"}
              </div>
            </div>
            <div
              className={classNames(projectcss.all, sty.freeBox___5CBnQ, {
                [sty.freeBoxpersonen_vinzenzTrimborn___5CBnQCuOz5]: hasVariant(
                  $state,
                  "personen",
                  "vinzenzTrimborn"
                )
              })}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__j7FhG,
                  {
                    [sty.textpersonen_andreasThoma__j7FhGynRd]: hasVariant(
                      $state,
                      "personen",
                      "andreasThoma"
                    ),
                    [sty.textpersonen_danielDieren__j7FhG1VwGv]: hasVariant(
                      $state,
                      "personen",
                      "danielDieren"
                    ),
                    [sty.textpersonen_danielLocatelli__j7FhGohgfH]: hasVariant(
                      $state,
                      "personen",
                      "danielLocatelli"
                    ),
                    [sty.textpersonen_juliaDorn__j7FhGDiVf4]: hasVariant(
                      $state,
                      "personen",
                      "juliaDorn"
                    ),
                    [sty.textpersonen_martinBittmann__j7FhGo1Atu]: hasVariant(
                      $state,
                      "personen",
                      "martinBittmann"
                    ),
                    [sty.textpersonen_vinzenzTrimborn__j7FhGCuOz5]: hasVariant(
                      $state,
                      "personen",
                      "vinzenzTrimborn"
                    ),
                    [sty.textshrinked__j7FhGyvp1T]: hasVariant(
                      $state,
                      "shrinked",
                      "shrinked"
                    )
                  }
                )}
              >
                {hasVariant($state, "personen", "andreasThoma")
                  ? "M.Sc. Architektur\n\nAdvisor: Computational Design, Digitale Fabrikation, Parametrische Systeme"
                  : hasVariant($state, "personen", "vinzenzTrimborn")
                  ? "B.Sc. Wirtschaftsinformatik\n\nSoftwareentwicklung, Digitale Planung, Implementierung digitale Workflows"
                  : hasVariant($state, "personen", "juliaDorn")
                  ? "M.Sc. Urban Design, B.Sc. Architektur\n\nUrbane Transformation, Anforderungen EU Taxonomie und Nachhaltigkeitsreporting, Kommunikation, Akteursmanagement & Moderation "
                  : hasVariant($state, "personen", "danielLocatelli")
                  ? "M.Sc. ITECH, Dipl. Architektur\n\nComputational Design, Parametrische Systeme, Entwicklung digitaler Tools und Workflows, Digitale Fabrikation"
                  : hasVariant($state, "personen", "danielDieren")
                  ? "M.Sc. Bauingenieur, M.Sc. Architektur\n\nNachhaltiges Konstruieren, Ingenieurholzbau, Integrale Planung, Lebenszyklusbetrachtung"
                  : "Dipl.-Ing. Architektur\n\nArchitekt Bay. Architektenkammer, Energieeffizienz-Experte, Nachhaltiges Bauen in Holz, Energetische Betrachtungen, Projektmanagement & -entwicklung"}
              </div>
            </div>
            <div
              className={classNames(projectcss.all, sty.freeBox__csyBd, {
                [sty.freeBoxpersonen_danielDieren__csyBd1VwGv]: hasVariant(
                  $state,
                  "personen",
                  "danielDieren"
                ),
                [sty.freeBoxpersonen_danielLocatelli__csyBdohgfH]: hasVariant(
                  $state,
                  "personen",
                  "danielLocatelli"
                ),
                [sty.freeBoxpersonen_juliaDorn__csyBdDiVf4]: hasVariant(
                  $state,
                  "personen",
                  "juliaDorn"
                ),
                [sty.freeBoxpersonen_martinBittmann__csyBdo1Atu]: hasVariant(
                  $state,
                  "personen",
                  "martinBittmann"
                ),
                [sty.freeBoxpersonen_vinzenzTrimborn__csyBdCuOz5]: hasVariant(
                  $state,
                  "personen",
                  "vinzenzTrimborn"
                ),
                [sty.freeBoxshrinked__csyBdYvp1T]: hasVariant(
                  $state,
                  "shrinked",
                  "shrinked"
                )
              })}
            >
              <div
                className={classNames(projectcss.all, sty.freeBox__cs0T5, {
                  [sty.freeBoxpersonen_juliaDorn__cs0T5DiVf4]: hasVariant(
                    $state,
                    "personen",
                    "juliaDorn"
                  )
                })}
                onClick={async event => {
                  const $steps = {};

                  $steps["updateExpanded"] = true
                    ? (() => {
                        const actionArgs = {
                          vgroup: "shrinked",
                          operation: 2,
                          value: "shrinked"
                        };
                        return (({ vgroup, value }) => {
                          if (typeof value === "string") {
                            value = [value];
                          }

                          const oldValue = p.get($state, vgroup);
                          p.set($state, vgroup, !oldValue);
                          return !oldValue;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["updateExpanded"] != null &&
                    typeof $steps["updateExpanded"] === "object" &&
                    typeof $steps["updateExpanded"].then === "function"
                  ) {
                    $steps["updateExpanded"] = await $steps["updateExpanded"];
                  }
                }}
              >
                <SmallButton
                  data-plasmic-name={"smallButton"}
                  data-plasmic-override={overrides.smallButton}
                  className={classNames("__wab_instance", sty.smallButton, {
                    [sty.smallButtonpersonen_martinBittmann]: hasVariant(
                      $state,
                      "personen",
                      "martinBittmann"
                    ),
                    [sty.smallButtonshrinked]: hasVariant(
                      $state,
                      "shrinked",
                      "shrinked"
                    )
                  })}
                  noLeftSiteShift={
                    hasVariant($state, "personen", "martinBittmann")
                      ? true
                      : true
                  }
                  plus={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__k4O2E,
                      {
                        [sty.textpersonen_juliaDorn__k4O2EDiVf4]: hasVariant(
                          $state,
                          "personen",
                          "juliaDorn"
                        ),
                        [sty.textpersonen_vinzenzTrimborn__k4O2ECuOz5]:
                          hasVariant($state, "personen", "vinzenzTrimborn"),
                        [sty.textshrinked__k4O2EYvp1T]: hasVariant(
                          $state,
                          "shrinked",
                          "shrinked"
                        )
                      }
                    )}
                  >
                    {hasVariant($state, "shrinked", "shrinked")
                      ? "+ mehr"
                      : "-   weniger "}
                  </div>
                </SmallButton>
              </div>
            </div>
            <div
              className={classNames(projectcss.all, sty.freeBox__cjsIk, {
                [sty.freeBoxpersonen_andreasThoma__cjsIKynRd]: hasVariant(
                  $state,
                  "personen",
                  "andreasThoma"
                ),
                [sty.freeBoxpersonen_danielDieren__cjsIk1VwGv]: hasVariant(
                  $state,
                  "personen",
                  "danielDieren"
                ),
                [sty.freeBoxpersonen_danielLocatelli__cjsIKohgfH]: hasVariant(
                  $state,
                  "personen",
                  "danielLocatelli"
                ),
                [sty.freeBoxpersonen_juliaDorn__cjsIkDiVf4]: hasVariant(
                  $state,
                  "personen",
                  "juliaDorn"
                ),
                [sty.freeBoxpersonen_martinBittmann__cjsIKo1Atu]: hasVariant(
                  $state,
                  "personen",
                  "martinBittmann"
                ),
                [sty.freeBoxpersonen_vinzenzTrimborn__cjsIkCuOz5]: hasVariant(
                  $state,
                  "personen",
                  "vinzenzTrimborn"
                ),
                [sty.freeBoxshrinked__cjsIkyvp1T]: hasVariant(
                  $state,
                  "shrinked",
                  "shrinked"
                )
              })}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dAd6Q,
                  {
                    [sty.textpersonen_andreasThoma__dAd6QynRd]: hasVariant(
                      $state,
                      "personen",
                      "andreasThoma"
                    ),
                    [sty.textpersonen_danielDieren__dAd6Q1VwGv]: hasVariant(
                      $state,
                      "personen",
                      "danielDieren"
                    ),
                    [sty.textpersonen_danielLocatelli__dAd6QohgfH]: hasVariant(
                      $state,
                      "personen",
                      "danielLocatelli"
                    ),
                    [sty.textpersonen_juliaDorn__dAd6QDiVf4]: hasVariant(
                      $state,
                      "personen",
                      "juliaDorn"
                    ),
                    [sty.textpersonen_martinBittmann__dAd6Qo1Atu]: hasVariant(
                      $state,
                      "personen",
                      "martinBittmann"
                    ),
                    [sty.textpersonen_vinzenzTrimborn__dAd6QCuOz5]: hasVariant(
                      $state,
                      "personen",
                      "vinzenzTrimborn"
                    ),
                    [sty.textshrinked__dAd6Qyvp1T]: hasVariant(
                      $state,
                      "shrinked",
                      "shrinked"
                    )
                  }
                )}
              >
                {hasVariant($state, "personen", "andreasThoma")
                  ? "Andreas Thoma studierte Architektur an der Bauhaus-Universit\u00e4t Weimar (B.Sc.) und der ETH Z\u00fcrich (M.Sc.) mit einem Fokus auf digitale Fabrikation und Computational Design & Development. Er war er f\u00fcr den Lehrstuhl Gramazio Kohler Research an der ETH Z\u00fcrich und bei Herzog & De Meuron (Basel) t\u00e4tig und arbeitete mehrere Jahre freiberuflich u.a. f\u00fcr ERNE Holzbau (Stein, CH) und Toggle (USA, Robotik). Heute verantwortet Andreas als Head of Digital Fabrication bei Toggle die Entwicklung von robotergest\u00fctzten Fertigungssystemen und entsprechenden Datenmodellen f\u00fcr die Produktion ma\u00dfgeschneiderter Bauelemente. Nachdem Andreas aktiv beim Exist-gef\u00f6rderten Forschungstransfer Urban Scale Timber mitgewirkt hat, ist er heute wichtiger Advisor f\u00fcr Build Systems. Dabei bringt er sein Wissen in den Bereichen digitale Fabrikation und bei der Erstellung parametrischer Workflows ein.  "
                  : hasVariant($state, "personen", "vinzenzTrimborn")
                  ? "Vinzenz Trimborn studierte Wirtschaftsinformatik an der TU M\u00fcnchen und war w\u00e4hrend seines Studiums als Web-Entwickler bei KINEXON in der Entwicklung von IoT L\u00f6sungen f\u00fcr die Logistikbranche t\u00e4tig. Nach seinem Bachelor Studium arbeitete er f\u00fcr das Robotik-spinn-off RobCo der TU M\u00fcnchen. Als einer der ersten Mitarbeitenden des heutigen Start Ups war er ma\u00dfgeblich an der Entwicklung des modularen Roboter-Kits beteiligt, das eine software-gest\u00fctzte Automatisierungsl\u00f6sung f\u00fcr die industrielle Fertigung bietet. Seit 2022 wandte Vinzenz sich der Architektur- und Bauindustrie zu. Im Architekturstudio German Haimerl Architekten \u00fcbernahm er die Verantwortlichkeit f\u00fcr Digitalisierung und die Erarbeitung innovativer BIM-Prozesse. Aktuell studiert er im neuen Studiengang IT for the Built Environment an der TU M\u00fcnchen."
                  : hasVariant($state, "personen", "juliaDorn")
                  ? "Julia Dorn studierte Architektur an der TU Wien und Urban Design an der TU Berlin. Dort arbeitete sie an verschiedenen Forschungsprojekten des Sonderforschungsbereichs 1265 Refiguration von R\u00e4umen sowie am Chair for Urban Design and Urbanization von Prof. Stollmann. Sie f\u00fchrte au\u00dferuniversit\u00e4ren Wissenstransferprojekte durch, die durch das BMWK und das BMI gef\u00f6rdert wurden. 2018 war sie Teil der Kuratierung und Kommunikation des deutschen Pavillons der Architekturbiennale in Venedig. Zudem entwickelte sie in der Smart City Abteilung der deutschen Bahn Standortstrategien f\u00fcr den Gesch\u00e4ftszweig Coworking. Der Fokus ihrer Arbeit liegt auf der Abbildung und Quantifizierung komplexer urbaner Systeme, r\u00e4umlicher Zusammenh\u00e4nge und Nachhaltigkeitsindikatoren. Im Austausch mit unseren Kunden definiert Julia den Bedarf der Entwicklung, entsprechende Nachhaltigkeitsziele und legt Umsetzungsstrategien fest."
                  : hasVariant($state, "personen", "danielLocatelli")
                  ? "Daniel Locatelli absolvierte das Diplomstudium Architektur an der Universidade de S\u00e3o Paulo und sp\u00e4ter den M.Sc. ITECH an der Universit\u00e4t Stuttgart unter der Leitung von Prof. Achim Menges und Prof. Jan Knippers. Bereits w\u00e4hrend seiner Diplomarbeit und seiner Arbeit als Computational Designer bei Atelier Marko Brajovic lag sein Schwerpunkt auf integrierter Technologie, Algorithmen und Architektur. Als wissenschaftlicher Mitarbeiter in Stuttgart sammelte Daniel Erfahrungen in digitaler Fabrikation und untersuchte robotergest\u00fctzte Holzverarbeitungssysteme f\u00fcr die In-Situ-Pressverleimung. Bei ArtEngineering und Alfred Rein Ingenieure setzte er erfolgreich Software und Low-Code Anwendungen wie Kangaroo 3D, Twinmotion, Grasshopper, Rhino 3D, SOFiSTiK und Grasshopper ein. Daniel konzentriert sich auf die Technologisierung im Holzbau und deren Anwendung in der Praxis."
                  : hasVariant($state, "personen", "danielDieren")
                  ? "Nach seiner ersten Berufst\u00e4tigkeit als Bauingenieur (RWTH Aachen) schloss Daniel Dieren das Architekturstudium an der TU Berlin (B.Sc. und M.Sc.) an. Er arbeitete seit 2014 f\u00fcr das Ingenieurb\u00fcro Bollinger+Grohmann in Berlin, wo er zahlreiche Projekte mit Spezialisierung auf Ingenieurholzbau und Life-Cycle-Assessment leitete und die Sustainability Group initiierte. In Kollaboration mit der DGNB entwickelte er einen Leitfaden zur Implementierung von Nachhaltigkeitsfaktoren in der Tragwerksplanung. Im Austausch mit der TU Berlin und dem Fraunhofer Institut erarbeitete Daniel zusammen mit Martin Bittmann eine Holzbau-Matrix, die nun als Bewertungsgrundlage holzbau-relevanter Kriterien f\u00fcr das Schumacher Quartier in Berlin angewendet wird. Sein Fokus liegt auf der Optimierung von geb\u00e4udespezifischen Emissionen und baulicher Ausf\u00fchrung."
                  : hasVariant($state, "personen", "martinBittmann")
                  ? "Martin Bittmann studierte Architektur an der TU M\u00fcnchen und der TU Istanbul und ist eingetragener Architekt in der Bayerischen Architektenkammer und Energieberater. Er war als selbst\u00e4ndiger Architekt t\u00e4tig und arbeitete parallel am Institut f\u00fcr Nachhaltigkeit, Baukonstruktion und Entwerfen von Prof. Ludloff an der Universit\u00e4t Stuttgart und unterrichtete vier Jahre am Lehrstuhl f\u00fcr Entwerfen und Holzbau von Prof. Kaufmann an der TU M\u00fcnchen. Zuvor arbeitete er als Projekt- und Wettbewerbsleiter bei Raumstation Architekten, betreute unterschiedliche Holzbauprojekten und arbeitete eng mit Investoren und Projektentwicklern zusammen. Dar\u00fcber hinaus arbeitete er bei Herzog & De Meuron (Basel) sowie im Bereich Immobilienentwicklung und -investment bei Euroboden (M\u00fcnchen). Bei Build Systems liegt Martins Fokus auf der Prozessinnovation in der nachhaltigen und resilienten Projektentwicklung."
                  : hasVariant(globalVariants, "screen", "iPhone")
                  ? "Martin Bittmann studierte Architektur an der TU M\u00fcnchen und der TU Istanbul und ist eingetragener Architekt in der Bayerischen Architektenkammer. Bis Ende 2021 war er als selbst\u00e4ndiger Architekt t\u00e4tig und arbeitete parallel am Institut f\u00fcr Nachhaltigkeit, Baukonstruktion und Entwerfen von Prof. Ludloff an der Universit\u00e4t Stuttgart, wo er den Lehr-und Forschungsbereich Bauklasse Holz aufbaute. Zuvor arbeitete er als Projekt- und Wettbewerbsleiter bei Raumstation Architekten und unterrichtete vier Jahre am Lehrstuhl f\u00fcr Entwerfen und Holzbau von Prof. Kaufmann an der TU M\u00fcnchen. Bei Raumstation Architekten war er an der Konzeptionierung und Ausf\u00fchrung von unterschiedlichen Holzbauprojekten beteiligt und arbeitete eng mit Investoren und Projektentwicklern zusammen. Dar\u00fcber hinaus arbeitete er bei Herzog & De Meuron (Basel) sowie im Bereich Immobilienentwicklung und -investment bei Euroboden (M\u00fcnchen). Seit der Initiierung von Urban Scale Timber konzentrierte Martin seinen Fokus auf die notwendige Prozessinnovation in der Planung und Umsetzung von nachhaltiger und resilienter Projektentwicklung."
                  : "Martin Bittmann studierte Architektur an der TU M\u00fcnchen und der TU Istanbul und ist eingetragener Architekt in der Bayerischen Architektenkammer und Energieberater. Er war als selbst\u00e4ndiger Architekt t\u00e4tig und arbeitete parallel am Institut f\u00fcr Nachhaltigkeit, Baukonstruktion und Entwerfen von Prof. Ludloff an der Universit\u00e4t Stuttgart und unterrichtete vier Jahre am Lehrstuhl f\u00fcr Entwerfen und Holzbau von Prof. Kaufmann an der TU M\u00fcnchen. Zuvor arbeitete er als Projekt- und Wettbewerbsleiter bei Raumstation Architekten, betreute unterschiedliche Holzbauprojekten und arbeitete eng mit Investoren und Projektentwicklern zusammen. Dar\u00fcber hinaus arbeitete er bei Herzog & De Meuron (Basel) sowie im Bereich Immobilienentwicklung und -investment bei Euroboden (M\u00fcnchen). Bei Build Systems liegt Martins Fokus auf der Prozessinnovation in der nachhaltigen und resilienten Projektentwicklung."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "smallButton"],
  img: ["img"],
  smallButton: ["smallButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  smallButton: typeof SmallButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPersonBox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPersonBox__VariantsArgs;
    args?: PlasmicPersonBox__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPersonBox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPersonBox__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPersonBox__ArgProps,
          internalVariantPropNames: PlasmicPersonBox__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPersonBox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPersonBox";
  } else {
    func.displayName = `PlasmicPersonBox.${nodeName}`;
  }
  return func;
}

export const PlasmicPersonBox = Object.assign(
  // Top-level PlasmicPersonBox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    smallButton: makeNodeComponent("smallButton"),

    // Metadata about props expected for PlasmicPersonBox
    internalVariantProps: PlasmicPersonBox__VariantProps,
    internalArgProps: PlasmicPersonBox__ArgProps
  }
);

export default PlasmicPersonBox;
/* prettier-ignore-end */
