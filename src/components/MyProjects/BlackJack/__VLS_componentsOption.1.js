/* __placeholder__ */
export default (await import('vue')).defineComponent({
components: {
CardLayout
},
data() {
return {
isGameStarted: false,
playerCards: [],
caseCards: [],
playerValue: 0,
caseValue: 0,
gameOver: 0,
};
},
methods: {
getCard() {
const randomCard = this.$store.getters.getRandomCard;
if (typeof randomCard.realValue === 'number') {
randomCard.realValue = randomCard.value.toString();
}
this.$store.commit('removeCard', randomCard);
return randomCard;
},
start() {
this.clear();
for (let index = 0; index <= 1; index++) {
this.playerCards.push(this.getCard());
}
this.caseCards.push(this.getCard());
this.computePlayerValue();
this.computeCaseValue();
this.isGameStarted = true;
if (this.playerValue === 21) {
this.stand();
}
},
hit() {
this.playerCards.push(this.getCard());
this.computePlayerValue();
if (this.playerValue > 21) {
this.gameOver = 2;
} else if (this.playerValue === 21) {
this.stand();
} else if (this.playerCards.length === 5) {
this.gameOver = 1;
}
},
stand() {
while (this.caseValue < 17) {
this.caseCards.push(this.getCard());
this.computeCaseValue();
}
if (this.caseValue > 21) {
this.gameOver = 1;
} else {
if (this.caseValue > this.playerValue) {
this.gameOver = 2;
} else if (this.caseValue === this.playerValue) {
this.gameOver = 3;
} else {
this.gameOver = 1;
}
}
},
clear() {
this.playerCards = [];
this.caseCards = [];
this.playerValue = 0;
this.caseValue = 0;
this.gameOver = 0;
this.isGameStarted = false;
this.$store.commit('resetDeck');
},
computePlayerValue() {
this.playerValue = 0;
for (let index = 0; index < this.playerCards.length; index++) {
this.playerCards.map(card => {
if (card.realValue === "A" && this.playerValue === 10) {
card.value = 11;
}
});
this.playerValue += this.playerCards[index].value;
}
},
computeCaseValue() {
this.caseValue = 0;
for (let index = 0; index < this.caseCards.length; index++) {
this.caseCards.map(card => {
if (card.realValue === "A" && this.caseValue === 10) {
card.value = 11;
}
});
this.caseValue += this.caseCards[index].value;
}
},
},
});
const __VLS_componentsOption = {
CardLayout
};
const __VLS_name = undefined;
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'table'?: boolean; } &
{ 'openCards'?: boolean; } &
{ 'card'?: boolean; } &
{ 'caseValue'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'CardLayout', typeof __VLS_localComponents, "CardLayout", "CardLayout", "CardLayout">;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3;
__VLS_components.CardLayout; __VLS_components.CardLayout; __VLS_components.CardLayout; __VLS_components.CardLayout; __VLS_components.CardLayout; __VLS_components.CardLayout; __VLS_components.CardLayout; __VLS_components.CardLayout; __VLS_components.CardLayout; __VLS_components.CardLayout;
// @ts-ignore
[CardLayout, CardLayout, CardLayout, CardLayout, CardLayout, CardLayout, CardLayout, CardLayout, CardLayout, CardLayout,];
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("table"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("table"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["h3"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
(__VLS_8.slots!).default;
}
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, class: ("openCards"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("openCards"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
let __VLS_15!: 'CardLayout' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.CardLayout : (typeof __VLS_resolvedLocalAndGlobalComponents)['CardLayout'];
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), }));
({} as { CardLayout: typeof __VLS_15; }).CardLayout;
const __VLS_17 = __VLS_16({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
}
{
let __VLS_20!: 'CardLayout' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.CardLayout : (typeof __VLS_resolvedLocalAndGlobalComponents)['CardLayout'];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), }));
({} as { CardLayout: typeof __VLS_20; }).CardLayout;
const __VLS_22 = __VLS_21({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
{
let __VLS_25!: 'CardLayout' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.CardLayout : (typeof __VLS_resolvedLocalAndGlobalComponents)['CardLayout'];
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), }));
({} as { CardLayout: typeof __VLS_25; }).CardLayout;
const __VLS_27 = __VLS_26({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
}
{
let __VLS_30!: 'CardLayout' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.CardLayout : (typeof __VLS_resolvedLocalAndGlobalComponents)['CardLayout'];
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), }));
({} as { CardLayout: typeof __VLS_30; }).CardLayout;
const __VLS_32 = __VLS_31({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
}
{
let __VLS_35!: 'CardLayout' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.CardLayout : (typeof __VLS_resolvedLocalAndGlobalComponents)['CardLayout'];
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), }));
({} as { CardLayout: typeof __VLS_35; }).CardLayout;
const __VLS_37 = __VLS_36({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
}
{
const __VLS_40 = __VLS_intrinsicElements["div"];
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
const __VLS_42 = __VLS_41({ ...{}, class: ("caseValue"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, class: ("caseValue"), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
(__VLS_43.slots!).default;
}
(__VLS_13.slots!).default;
}
{
const __VLS_45 = __VLS_intrinsicElements["div"];
const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
const __VLS_47 = __VLS_46({ ...{}, class: ("openCards"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, class: ("openCards"), });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
{
let __VLS_50!: 'CardLayout' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.CardLayout : (typeof __VLS_resolvedLocalAndGlobalComponents)['CardLayout'];
const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), }));
({} as { CardLayout: typeof __VLS_50; }).CardLayout;
const __VLS_52 = __VLS_51({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
}
{
let __VLS_55!: 'CardLayout' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.CardLayout : (typeof __VLS_resolvedLocalAndGlobalComponents)['CardLayout'];
const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), }));
({} as { CardLayout: typeof __VLS_55; }).CardLayout;
const __VLS_57 = __VLS_56({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
}
{
let __VLS_60!: 'CardLayout' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.CardLayout : (typeof __VLS_resolvedLocalAndGlobalComponents)['CardLayout'];
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), }));
({} as { CardLayout: typeof __VLS_60; }).CardLayout;
const __VLS_62 = __VLS_61({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
}
{
let __VLS_65!: 'CardLayout' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.CardLayout : (typeof __VLS_resolvedLocalAndGlobalComponents)['CardLayout'];
const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), }));
({} as { CardLayout: typeof __VLS_65; }).CardLayout;
const __VLS_67 = __VLS_66({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), });
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
}
{
let __VLS_70!: 'CardLayout' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.CardLayout : (typeof __VLS_resolvedLocalAndGlobalComponents)['CardLayout'];
const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), }));
({} as { CardLayout: typeof __VLS_70; }).CardLayout;
const __VLS_72 = __VLS_71({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{}, class: ("card"), value: ("10"), suit: ("diamonds"), });
const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
}
(__VLS_48.slots!).default;
}
{
const __VLS_75 = __VLS_intrinsicElements["h3"];
const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
const __VLS_77 = __VLS_76({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_75, typeof __VLS_77> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77)!;
let __VLS_79!: __VLS_NormalizeEmits<typeof __VLS_78.emit>;
(__VLS_78.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["table"];
__VLS_styleScopedClasses["openCards"];
__VLS_styleScopedClasses["card"];
__VLS_styleScopedClasses["card"];
__VLS_styleScopedClasses["card"];
__VLS_styleScopedClasses["card"];
__VLS_styleScopedClasses["card"];
__VLS_styleScopedClasses["caseValue"];
__VLS_styleScopedClasses["openCards"];
__VLS_styleScopedClasses["card"];
__VLS_styleScopedClasses["card"];
__VLS_styleScopedClasses["card"];
__VLS_styleScopedClasses["card"];
__VLS_styleScopedClasses["card"];
}
var __VLS_slots!: {};
return __VLS_slots;
}
let __VLS_internalComponent!: typeof import('./BlackJack.vue')['default'];
