'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

interface AccountDetailsProps {
    account_name: string,
}

const AccountDetails:React.FC<AccountDetailsProps> = (
    account_name,
) => {
    const [ apidata, setapiData ] = useState({});
    const [ loading, setloading ] = useState(false);

    useEffect(() => {
        setloading(true);
        fetch(`/api/onboard/${account_name.account_name}`)
        .then((res) => res.json())
        .then((apidata) => {
            setapiData(apidata)
        })
        setloading(false);
    },[])

    return (
        <div className="
            box-border
            border-1
            h-96
            w-96
            justify-center
            items-center 
            cursor-pointer 
            group 
            bg-transparent 
            perspective
            rounded-3xl
            "
        >
            <div className="relative 
                preserve-3d 
                group-hover:my-rotate-y-180 
                duration-700
                h-96
                w-96
                "
            >
                <div className="absolute 
                    backface-hidden 
                    h-96
                    w-96
                "
                >
                    <div className="
                        w-96 
                        h-96 
                        rounded-3xl 
                        bg-slate-200 
                        flex 
                        flex-col 
                        justify-center 
                        items-center
                        text-center 
                        px-2
                        "
                    >
                        <Image className="rounded-xl"
                            src="/aws.png"
                            width={125}
                            height={125}
                            alt="AWS Logo"
                            priority={false}
                        /> 
                        <h1 className="py-12 text-3xl font-semibold">Account Number</h1>
                        <p className="my-2 py-4 text-3xl font-serif">{apidata.AccountNumber}</p>
                    </div>
                </div>
                <div className="absolute 
                    my-rotate-y-180 
                    backface-hidden 
                    h-96
                    w-96
                    bg-black
                    overflow-hidden
                    rounded-3xl
                    "
                >
                    <div className="text-center 
                        flex 
                        flex-col 
                        items-center 
                        justify-center 
                        h-full 
                        px-2 
                        pb-24
                        text-white
                        "
                    >
                        <h1 className="text-3xl font-semibold py-6">Associated Regions</h1>
                        <p className="my-2">{apidata.RegionsCount}</p>
                        <h1 className="text-3xl font-semibold py-6">KMS Key Onboarded</h1>
                        <p className="my-2">{apidata.KMSOnboard}</p>
                        <button
                            onClick={()=> {}}
                            className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-700 group-hover:bottom-10 scale-0 group-hover:scale-100"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
 
export default AccountDetails;
