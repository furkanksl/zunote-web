import React from "react";
import PremiumPlanSvgComponent from "../../../../components/Svg/PremiumPlanSvg";
import StandartPlanSvgComponent from "../../../../components/Svg/StandartPlanSvg";

export const subscriptionPlans: any = [
    {
        name: "Standart",
        price: 19,
        annual: true,
        items: ["10 mins single recording time", "100 voice notes"],
        planPrice: Number(process.env.NEXT_PUBLIC_STANDART_PLAN_PRICE),
        planId: Number(process.env.NEXT_PUBLIC_STANDART_PLAN_ID),
        icon: <StandartPlanSvgComponent />,
    },
    {
        name: "Premium",
        price: 39,
        annual: true,
        items: ["30 mins single recording time", "Unlimited voice note"],
        planPrice: Number(process.env.NEXT_PUBLIC_PREMIUM_PLAN_PRICE),
        planId: Number(process.env.NEXT_PUBLIC_PREMIUM_PLAN_ID),
        icon: <PremiumPlanSvgComponent />,
    },
];
