import React from "react";
import { useUI } from "utils/hooks";
import cn from "classnames";
function ProdDetailTab() {
    const { setProdDescriptionTab, prodDescriptionTab } = useUI();
    const btnClass = "py-3 px-5 ";
    const handleClick = (tab: "description" | "reviews" | "returns") => {
        setProdDescriptionTab(tab);
    }

    return (
        <section>
            <div className="flex w-full justify-center">
                <button
                    onClick={() => handleClick("description")}
                    className={cn(btnClass, {
                        "border-b-2 border-black": prodDescriptionTab === "description",
                    })}
                >
                    Product description
                </button>
                <button onClick={() => handleClick("returns")} className={cn(btnClass, {
                    "border-b-2 border-black": prodDescriptionTab === "returns",
                })}>Shipping & Return</button>
                <button onClick={() => handleClick("reviews")} className={cn(btnClass, {
                    "border-b-2 border-black": prodDescriptionTab === "reviews",
                })}>Product reviews</button>
            </div>
        </section>
    );
}

export default ProdDetailTab;
