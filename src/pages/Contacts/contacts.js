import React from "react";
import { ContactCards } from "../../components/contactCards/contactCards";


export const Contacts = () =>{
    return(
        <div className="font-rubik">
            <div className="w-full my-24 text-center py-10 flex flex-col justify-center gap-4 items-center pb-32 md:pb-0">
                <h1 className=" text-3xl font-semibold">Contact Me !</h1>
                <p className=" text-xl opacity-50">Have Any Questions ? I'd love to hear from you</p>

                <ContactCards
                hexcolor="#8be9fd"  // Assuming f2504b is a hexadecimal color code
                social={"Contact Me Through LinkedIn"}
                socialDescription={"I'm always open to connecting with fellow professionals, sharing insights, and exploring potential collaborations."}
                socialLink={"https://www.linkedin.com/in/evaldas-paulauskas-291b86291/"}
                buttonDescription={"Find My LinkedIn Here!"}
                />
            </div>
        </div>
    );
};