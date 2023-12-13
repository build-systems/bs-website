// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: edADxkrxNS9ND5YewKEz7S
// Component: QLSpg7cOnQQZ

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
import OldButtonExternalLink from "../../OldButtonExternalLink"; // plasmic-import: EF175LjqiU3X/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_build_systems_webseite.module.css"; // plasmic-import: edADxkrxNS9ND5YewKEz7S/projectcss
import sty from "./PlasmicOldHomepage.module.css"; // plasmic-import: QLSpg7cOnQQZ/css

import Linie65Icon from "./icons/PlasmicIcon__Linie65"; // plasmic-import: _t54iuQeaV2J/icon

createPlasmicElementProxy;

export type PlasmicOldHomepage__VariantMembers = {};
export type PlasmicOldHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicOldHomepage__VariantsArgs;
export const PlasmicOldHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicOldHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicOldHomepage__ArgsType;
export const PlasmicOldHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicOldHomepage__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  svg?: p.Flex<"svg">;
};

export interface DefaultOldHomepageProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicOldHomepage__RenderFunc(props: {
  variants: PlasmicOldHomepage__VariantsArgs;
  args: PlasmicOldHomepage__ArgsType;
  overrides: PlasmicOldHomepage__OverridesType;
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
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__eJCgm, ``)}>
        <div
          className={classNames(projectcss.all, sty.freeBox__nJuxX, "blend")}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__rKWp5,
              "blend"
            )}
          >
            {"Build"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__r8IO,
              ``
            )}
          >
            {"Systems"}
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__l82Y8)}>
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            src={{
              src: "/plasmic/build_systems_webseite/images/desktopRenderingjpg.jpg",
              fullWidth: 3146,
              fullHeight: 2000,
              aspectRatio: undefined
            }}
          />

          <div className={classNames(projectcss.all, sty.freeBox__wsl7S)} />
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__dKglZ)}>
        <Linie65Icon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__qFRkc
          )}
        >
          {
            "Build Systems entwickelt individuelle Smart Sustainability Roadmaps (Nachhaltigkeitsfahrpl\u00e4ne). Hierf\u00fcr stellen wir Nachhaltigkeitsanforderungen der individuellen Projektentwicklung \u00f6konomischen Indikatoren gegen\u00fcber. Wir unterst\u00fctzen private und \u00f6ffentliche Immobilienentwickler:innen in einer fr\u00fchen Phase der Planung Investitionsentscheidungen zu treffen."
          }
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__fWXtU)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ixn1N)}
          >
            <OldButtonExternalLink
              className={classNames(
                "__wab_instance",
                sty.oldButtonExternalLink___9IWdk
              )}
              destinationLink={
                "https://drive.google.com/file/d/1X6XCNF57644OC2sUVvwzV2s-3dAliHi0/view?usp=sharing"
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yBwxr
                )}
              >
                {"Download Leistungspaket"}
              </div>
            </OldButtonExternalLink>
            <OldButtonExternalLink
              className={classNames(
                "__wab_instance",
                sty.oldButtonExternalLink__b1Bm9
              )}
              destinationLink={"mailto:mail@buildsystems.de"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fkeeR
                )}
              >
                {"Schreiben Sie uns eine E-mail"}
              </div>
            </OldButtonExternalLink>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rdyNr
              )}
              onClick={async event => {
                const $steps = {};

                $steps["goToImpressum"] = true
                  ? (() => {
                      const actionArgs = { destination: `/impressum` };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToImpressum"] != null &&
                  typeof $steps["goToImpressum"] === "object" &&
                  typeof $steps["goToImpressum"].then === "function"
                ) {
                  $steps["goToImpressum"] = await $steps["goToImpressum"];
                }
              }}
            >
              {"Imprint, Privacy"}
            </div>
          </p.Stack>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "svg"],
  img: ["img"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOldHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOldHomepage__VariantsArgs;
    args?: PlasmicOldHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOldHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicOldHomepage__ArgsType,
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
          internalArgPropNames: PlasmicOldHomepage__ArgProps,
          internalVariantPropNames: PlasmicOldHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicOldHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOldHomepage";
  } else {
    func.displayName = `PlasmicOldHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicOldHomepage = Object.assign(
  // Top-level PlasmicOldHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicOldHomepage
    internalVariantProps: PlasmicOldHomepage__VariantProps,
    internalArgProps: PlasmicOldHomepage__ArgProps
  }
);

export default PlasmicOldHomepage;
/* prettier-ignore-end */
