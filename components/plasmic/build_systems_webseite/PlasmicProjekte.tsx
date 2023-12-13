// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: edADxkrxNS9ND5YewKEz7S
// Component: jJZ6fWtbjLvG

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
import Menu from "../../Menu"; // plasmic-import: xUREutlbHqMT/component
import BuildSystemsHeadline from "../../BuildSystemsHeadline"; // plasmic-import: TEwsiin-YT5U/component
import ProjektBox from "../../ProjektBox"; // plasmic-import: BJdMv6oPv5t5/component
import ImageFooter from "../../ImageFooter"; // plasmic-import: JmuJs7xkzhfG/component
import HiderHeadlines from "../../HiderHeadlines"; // plasmic-import: OSRnRwmW0wOT/component

import { useScreenVariants as useScreenVariants_5XwAguWqqS0 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 5XW-aguWqqS0/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_build_systems_webseite.module.css"; // plasmic-import: edADxkrxNS9ND5YewKEz7S/projectcss
import sty from "./PlasmicProjekte.module.css"; // plasmic-import: jJZ6fWtbjLvG/css

createPlasmicElementProxy;

export type PlasmicProjekte__VariantMembers = {};
export type PlasmicProjekte__VariantsArgs = {};
type VariantPropType = keyof PlasmicProjekte__VariantsArgs;
export const PlasmicProjekte__VariantProps = new Array<VariantPropType>();

export type PlasmicProjekte__ArgsType = {};
type ArgPropType = keyof PlasmicProjekte__ArgsType;
export const PlasmicProjekte__ArgProps = new Array<ArgPropType>();

export type PlasmicProjekte__OverridesType = {
  root?: p.Flex<"div">;
  menuStack?: p.Flex<"div">;
  menu?: p.Flex<typeof Menu>;
  buildSystemsHeadline?: p.Flex<typeof BuildSystemsHeadline>;
  projectColumns1?: p.Flex<"div">;
  c1?: p.Flex<"div">;
  c2?: p.Flex<"div">;
  column?: p.Flex<"div">;
  projectColumns2?: p.Flex<"div">;
  c3?: p.Flex<"div">;
  c4?: p.Flex<"div">;
  imageFooter?: p.Flex<typeof ImageFooter>;
  hiderHeadlines?: p.Flex<typeof HiderHeadlines>;
};

export interface DefaultProjekteProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProjekte__RenderFunc(props: {
  variants: PlasmicProjekte__VariantsArgs;
  args: PlasmicProjekte__ArgsType;
  overrides: PlasmicProjekte__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_5XwAguWqqS0()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicProjekte.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicProjekte.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicProjekte.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicProjekte.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicProjekte.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicProjekte.pageMetadata.description}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
            sty.root
          )}
        >
          <div
            data-plasmic-name={"menuStack"}
            data-plasmic-override={overrides.menuStack}
            className={classNames(projectcss.all, sty.menuStack)}
          >
            <Menu
              data-plasmic-name={"menu"}
              data-plasmic-override={overrides.menu}
              className={classNames("__wab_instance", sty.menu)}
              expand={
                hasVariant(globalVariants, "screen", "iPhone")
                  ? undefined
                  : hasVariant(globalVariants, "screen", "iPad")
                  ? undefined
                  : undefined
              }
              onSubSite={
                hasVariant(globalVariants, "screen", "iPhone")
                  ? []
                  : hasVariant(globalVariants, "screen", "iPad")
                  ? []
                  : ["projekte"]
              }
            />
          </div>
          <BuildSystemsHeadline
            data-plasmic-name={"buildSystemsHeadline"}
            data-plasmic-override={overrides.buildSystemsHeadline}
            className={classNames("__wab_instance", sty.buildSystemsHeadline)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__cmRrw)} />

          <div className={classNames(projectcss.all, sty.freeBox__hhAt9)}>
            <div className={classNames(projectcss.all, sty.freeBox__kg3Mj)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0SgXy,
                  hasVariant(globalVariants, "screen", "iPad")
                    ? "breakword"
                    : undefined
                )}
              >
                {
                  "Wir sind \u00fcberzeugt: Wenn die Immobilienentwicklung den Zusammenhang von Nachhaltigkeit, Wertbest\u00e4ndigkeit und Zukunftsf\u00e4higkeit nachvollziehen und ebenso darlegen kann, werden Klimaschutzma\u00dfnahmen zum Selbstzweck. So entsteht neben Reporting-Zw\u00e4ngen und regulatorisch vorgeschriebenen Benchmarks ein stetiger Wandel zu einer nachhaltigen Baut\u00e4tigkeit."
                }
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__soFxb)} />

          <div className={classNames(projectcss.all, sty.freeBox__wIcwW)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nWylz,
                hasVariant(globalVariants, "screen", "iPad")
                  ? "breakword"
                  : undefined
              )}
            >
              {hasVariant(globalVariants, "screen", "iPhone")
                ? "                               setzt Projekte von Anfang an integral, systemisch, transparent und digital auf."
                : "setzt Projekte von Anfang an integral, systemisch, transparent und digital auf."}
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__tiP9T)}>
            <div className={classNames(projectcss.all, sty.freeBox__jb9QZ)}>
              <p.Stack
                as={"div"}
                data-plasmic-name={"projectColumns1"}
                data-plasmic-override={overrides.projectColumns1}
                hasGap={true}
                className={classNames(projectcss.all, sty.projectColumns1)}
              >
                <div
                  data-plasmic-name={"c1"}
                  data-plasmic-override={overrides.c1}
                  className={classNames(projectcss.all, sty.c1)}
                >
                  <ProjektBox
                    className={classNames(
                      "__wab_instance",
                      sty.projektBox___0W3
                    )}
                    projekte={"urbanScaleTimberNew"}
                    shrinked={true}
                  />
                </div>
                <div
                  data-plasmic-name={"c2"}
                  data-plasmic-override={overrides.c2}
                  className={classNames(projectcss.all, sty.c2)}
                >
                  <ProjektBox
                    className={classNames(
                      "__wab_instance",
                      sty.projektBox__fdOpm
                    )}
                    projekte={"schumacherQuartierNew"}
                    shrinked={true}
                  />
                </div>
                <div
                  data-plasmic-name={"column"}
                  data-plasmic-override={overrides.column}
                  className={classNames(projectcss.all, sty.column)}
                >
                  <ProjektBox
                    className={classNames(
                      "__wab_instance",
                      sty.projektBox__b6Y5
                    )}
                    projekte={"punkthaus"}
                  />
                </div>
              </p.Stack>
              <div
                data-plasmic-name={"projectColumns2"}
                data-plasmic-override={overrides.projectColumns2}
                className={classNames(projectcss.all, sty.projectColumns2)}
              >
                <div
                  data-plasmic-name={"c3"}
                  data-plasmic-override={overrides.c3}
                  className={classNames(projectcss.all, sty.c3)}
                >
                  <ProjektBox
                    className={classNames(
                      "__wab_instance",
                      sty.projektBox__p0NqN
                    )}
                    projekte={"punkthaus"}
                    shrinked={true}
                  />
                </div>
                <div
                  data-plasmic-name={"c4"}
                  data-plasmic-override={overrides.c4}
                  className={classNames(projectcss.all, sty.c4)}
                >
                  <ProjektBox
                    className={classNames(
                      "__wab_instance",
                      sty.projektBox__gMk9W
                    )}
                    projekte={"aschheim"}
                    shrinked={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__wrag7)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__wpcwt
              )}
            >
              {hasVariant(globalVariants, "screen", "iPhone")
                ? "                              setzt Projekte von Anfang an #integral / #systemisch / #transparent / #digital auf. "
                : "stellt der Projektentwicklung mehr fortschrittliche Modellierung und Early Insights zur Verf\u00fcgung."}
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__pQsoq)} />

          <ImageFooter
            data-plasmic-name={"imageFooter"}
            data-plasmic-override={overrides.imageFooter}
            className={classNames("__wab_instance", sty.imageFooter)}
          />

          <HiderHeadlines
            data-plasmic-name={"hiderHeadlines"}
            data-plasmic-override={overrides.hiderHeadlines}
            className={classNames("__wab_instance", sty.hiderHeadlines)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "menuStack",
    "menu",
    "buildSystemsHeadline",
    "projectColumns1",
    "c1",
    "c2",
    "column",
    "projectColumns2",
    "c3",
    "c4",
    "imageFooter",
    "hiderHeadlines"
  ],
  menuStack: ["menuStack", "menu"],
  menu: ["menu"],
  buildSystemsHeadline: ["buildSystemsHeadline"],
  projectColumns1: ["projectColumns1", "c1", "c2", "column"],
  c1: ["c1"],
  c2: ["c2"],
  column: ["column"],
  projectColumns2: ["projectColumns2", "c3", "c4"],
  c3: ["c3"],
  c4: ["c4"],
  imageFooter: ["imageFooter"],
  hiderHeadlines: ["hiderHeadlines"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  menuStack: "div";
  menu: typeof Menu;
  buildSystemsHeadline: typeof BuildSystemsHeadline;
  projectColumns1: "div";
  c1: "div";
  c2: "div";
  column: "div";
  projectColumns2: "div";
  c3: "div";
  c4: "div";
  imageFooter: typeof ImageFooter;
  hiderHeadlines: typeof HiderHeadlines;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProjekte__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProjekte__VariantsArgs;
    args?: PlasmicProjekte__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProjekte__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProjekte__ArgsType,
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
          internalArgPropNames: PlasmicProjekte__ArgProps,
          internalVariantPropNames: PlasmicProjekte__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProjekte__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProjekte";
  } else {
    func.displayName = `PlasmicProjekte.${nodeName}`;
  }
  return func;
}

export const PlasmicProjekte = Object.assign(
  // Top-level PlasmicProjekte renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuStack: makeNodeComponent("menuStack"),
    menu: makeNodeComponent("menu"),
    buildSystemsHeadline: makeNodeComponent("buildSystemsHeadline"),
    projectColumns1: makeNodeComponent("projectColumns1"),
    c1: makeNodeComponent("c1"),
    c2: makeNodeComponent("c2"),
    column: makeNodeComponent("column"),
    projectColumns2: makeNodeComponent("projectColumns2"),
    c3: makeNodeComponent("c3"),
    c4: makeNodeComponent("c4"),
    imageFooter: makeNodeComponent("imageFooter"),
    hiderHeadlines: makeNodeComponent("hiderHeadlines"),

    // Metadata about props expected for PlasmicProjekte
    internalVariantProps: PlasmicProjekte__VariantProps,
    internalArgProps: PlasmicProjekte__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "BuildSystems",
      description:
        "BuildSystems entwickelt individuelle Smart Sustainability Roadmaps (Nachhaltigkeitsfahrpläne).  Wir unterstützen Immobilienentwickler:innen in einer frühen Phase der Planung.",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicProjekte;
/* prettier-ignore-end */
