import{jsx as e,jsxs as y,Fragment as A}from"@dropins/tools/preact-jsx-runtime.js";import{useState as E,useEffect as I,useCallback as F}from"@dropins/tools/preact-compat.js";import{classes as b,VComponent as g,Slot as Q}from"@dropins/tools/lib.js";import{g as O}from"./persisted-data.js";import{events as R}from"@dropins/tools/event-bus.js";/* empty css             */import{Price as T,Button as w}from"@dropins/tools/components.js";import{useText as G}from"@dropins/tools/i18n.js";import{s as h}from"./resetCart.js";import{a as H,b as V}from"./acdl.js";import{u as X}from"./updateProductsFromCart.js";import"./CartSummaryGrid.js";import{C as j}from"./CartSummaryList.js";import"./OrderSummary.js";const $=({className:_,products:n,orderSummary:i,empty:r,...o})=>e("div",{...o,className:b(["cart-cart",_]),children:y("div",{className:b(["cart-cart__wrapper"]),children:[e("div",{"data-testid":"cart-content",className:b(["cart-cart__content",["cart-cart__content--empty",r||i==null],["cart-cart__content--full-width",r||i==null]]),children:n&&e(g,{node:n})}),n&&i&&e(g,{node:i,className:b(["cart-cart__order-summary"])})]})}),z=({className:_,products:n,subtotal:i,subtotalExcludingTaxes:r,ctas:o,...p})=>{const s=G({subtotal:"Cart.MiniCart.subtotal",subtotalExcludingTaxes:"Cart.MiniCart.subtotalExcludingTaxes"});return e("div",{...p,className:b(["cart-mini-cart",_]),children:n&&y(A,{children:[e("div",{className:"cart-mini-cart__products","data-testid":"mini-cart-products-wrapper",children:n}),y("div",{className:"cart-mini-cart__footer","data-testid":"mini-cart-subtotals",children:[i&&y("div",{className:"cart-mini-cart__footer__estimated-total","data-testid":"mini-cart-subtotal",children:[s.subtotal,e(g,{node:i})]}),r&&y("div",{className:"cart-mini-cart__footer__estimated-total-excluding-taxes","data-testid":"mini-cart-subtotal-excluding-taxes",children:[s.subtotalExcludingTaxes,e(g,{node:r,className:b(["dropin-price-summary__price","dropin-price-summary__price--muted"])})]}),o&&e(g,{node:o,className:"cart-mini-cart__footer__ctas"})]})]})})},B=({children:_,routeProduct:n,routeEmptyCartCTA:i,slots:r,showDiscount:o,showSavings:p,quantityType:s,dropdownOptions:C,initialData:u=null,...L})=>{const[l,t]=E(u),[N,a]=E(new Map),v={hasErrors:N.size>0},f=(c,x)=>X([{uid:c,quantity:x}]);I(()=>{const c=R.on("cart/data",x=>{t(x)},{eager:!0});return()=>{c==null||c.off()}},[]),I(()=>{u&&Object.keys(u).length>0&&H(u,h.locale??"en-US")},[u]);const k=r!=null&&r.OrderSummary?e(Q,{name:"OrderSummary",slot:r.OrderSummary,context:{...v}}):void 0,m=c=>f(c,0),M=e(Q,{name:"ProductList",slot:r==null?void 0:r.ProductList,context:{itemQuantityUpdateHandler:f,itemRemoveHandler:m},children:e(j,{"data-testid":"default-cart-summary-list",routeProduct:n,routeEmptyCartCTA:i,initialData:l,enableRemoveItem:!0,enableUpdateItemQuantity:!0,onItemsErrorsChange:a,showMaxItems:!0,showDiscount:o,showSavings:p,quantityType:s,dropdownOptions:C})});return e($,{...L,empty:((l==null?void 0:l.items)&&l.items.length===0)??!0,orderSummary:k,products:M})};B.getInitialData=async function(){return O()};const q=({children:_,initialData:n=null,hideFooter:i=!0,slots:r,routeProduct:o,routeCart:p,routeCheckout:s,routeEmptyCartCTA:C,showDiscount:u,showSavings:L,...l})=>{var S,P,D;const[t,N]=E(n),a=(S=h.config)==null?void 0:S.shoppingCartDisplaySetting;I(()=>{const d=R.on("cart/data",U=>{N(U)},{eager:!0});return()=>{d==null||d.off()}},[]);const v=G({cartLink:"Cart.MiniCart.cartLink",checkoutLink:"Cart.MiniCart.checkoutLink"}),f=(d,U)=>X([{uid:d,quantity:U}]),k=d=>f(d,0),m=t==null?void 0:t.hasOutOfStockItems,M=F(()=>{t&&!m&&V(t,h.locale)},[t,m]);I(()=>{n&&Object.keys(n).length>0&&H(n,h.locale||"en-US")},[n]);const c=e(Q,{name:"ProductList",slot:r==null?void 0:r.ProductList,context:{itemQuantityUpdateHandler:f,itemRemoveHandler:k,totalQuantity:t==null?void 0:t.totalQuantity},children:e(j,{"data-testid":"default-cart-summary-list",routeProduct:o,routeEmptyCartCTA:C,initialData:t,maxItems:(P=h.config)==null?void 0:P.miniCartMaxItemsDisplay,showMaxItems:!!((D=h.config)!=null&&D.miniCartMaxItemsDisplay),hideHeading:!(t!=null&&t.totalQuantity),hideFooter:i,enableRemoveItem:!0,showDiscount:u,showSavings:L})}),x=()=>(a==null?void 0:a.subtotal)==="INCLUDING_TAX"||(a==null?void 0:a.subtotal)==="INCLUDING_EXCLUDING_TAX"?{amount:t==null?void 0:t.subtotal.includingTax.value,currency:t==null?void 0:t.subtotal.includingTax.currency,"data-testid":"subtotal-including-tax",style:{font:"inherit"}}:{amount:t==null?void 0:t.subtotal.excludingTax.value,currency:t==null?void 0:t.subtotal.excludingTax.currency,"data-testid":"subtotal-excluding-tax",style:{font:"inherit"}};return e(z,{...l,subtotal:t!=null&&t.totalQuantity?(t==null?void 0:t.subtotal)&&e(T,{...x()}):void 0,subtotalExcludingTaxes:t!=null&&t.totalQuantity?(t==null?void 0:t.subtotal)&&((a==null?void 0:a.subtotal)==="INCLUDING_EXCLUDING_TAX"?e(T,{amount:t==null?void 0:t.subtotal.excludingTax.value,currency:t==null?void 0:t.subtotal.excludingTax.currency,"data-testid":"subtotal-including-excluding-tax",style:{font:"inherit"}}):void 0):void 0,ctas:t!=null&&t.totalQuantity?y("div",{children:[s&&e(w,{"data-testid":"route-checkout-button",variant:"primary",href:m?void 0:s(),disabled:m,"aria-disabled":m,onClick:M,children:v.checkoutLink}),p&&e(w,{"data-testid":"route-cart-button",variant:"tertiary",href:p(),children:v.cartLink})]}):void 0,products:c})};q.getInitialData=async function(){return O()};export{B as C,q as M};
