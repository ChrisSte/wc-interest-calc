/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WcInterestCalc {
        "checked": string;
        "duration": number;
        "finalAmount": number;
        "interest": number;
        "principal": number;
        "symbol": string;
    }
}
declare global {
    interface HTMLWcInterestCalcElement extends Components.WcInterestCalc, HTMLStencilElement {
    }
    var HTMLWcInterestCalcElement: {
        prototype: HTMLWcInterestCalcElement;
        new (): HTMLWcInterestCalcElement;
    };
    interface HTMLElementTagNameMap {
        "wc-interest-calc": HTMLWcInterestCalcElement;
    }
}
declare namespace LocalJSX {
    interface WcInterestCalc {
        "checked"?: string;
        "duration"?: number;
        "finalAmount"?: number;
        "interest"?: number;
        "principal"?: number;
        "symbol"?: string;
    }
    interface IntrinsicElements {
        "wc-interest-calc": WcInterestCalc;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wc-interest-calc": LocalJSX.WcInterestCalc & JSXBase.HTMLAttributes<HTMLWcInterestCalcElement>;
        }
    }
}
