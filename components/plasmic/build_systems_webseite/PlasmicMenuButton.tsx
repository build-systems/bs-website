// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: edADxkrxNS9ND5YewKEz7S
// Component: 3nc_n6J0cWvn

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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_build_systems_webseite.module.css"; // plasmic-import: edADxkrxNS9ND5YewKEz7S/projectcss
import sty from "./PlasmicMenuButton.module.css"; // plasmic-import: 3nc_n6J0cWvn/css

createPlasmicElementProxy;

export type PlasmicMenuButton__VariantMembers = {};
export type PlasmicMenuButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicMenuButton__VariantsArgs;
export const PlasmicMenuButton__VariantProps = new Array<VariantPropType>();

export type PlasmicMenuButton__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicMenuButton__ArgsType;
export const PlasmicMenuButton__ArgProps = new Array<ArgPropType>("children");

export type PlasmicMenuButton__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultMenuButtonProps {
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMenuButton__RenderFunc(props: {
  variants: PlasmicMenuButton__VariantsArgs;
  args: PlasmicMenuButton__ArgsType;
  overrides: PlasmicMenuButton__OverridesType;
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
      onClick={async event => {
        const $steps = {};

        $steps["goToPage"] = true
          ? (() => {
              const actionArgs = {};
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
          $steps["goToPage"] != null &&
          typeof $steps["goToPage"] === "object" &&
          typeof $steps["goToPage"].then === "function"
        ) {
          $steps["goToPage"] = await $steps["goToPage"];
        }
      }}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Long Action",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenuButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenuButton__VariantsArgs;
    args?: PlasmicMenuButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenuButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMenuButton__ArgsType,
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
          internalArgPropNames: PlasmicMenuButton__ArgProps,
          internalVariantPropNames: PlasmicMenuButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMenuButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenuButton";
  } else {
    func.displayName = `PlasmicMenuButton.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuButton = Object.assign(
  // Top-level PlasmicMenuButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicMenuButton
    internalVariantProps: PlasmicMenuButton__VariantProps,
    internalArgProps: PlasmicMenuButton__ArgProps
  }
);

export default PlasmicMenuButton;
/* prettier-ignore-end */
