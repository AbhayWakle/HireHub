import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { BarLoader } from 'react-spinners';

const OnBorading = () => {

    const { user, isLoaded } = useUser();
    const navigate = useNavigate();

    const handleRoleSelection = async (role) => {
        await user.update({
            unsafeMetadata: { role },
        }).then(() => {
            navigate(role === 'recuriter' ? "/post-job" : "/jobs")
        })
            .catch((err) => {
                console.error("Error updating role: ", err);
            });
    }

    useEffect(() => {
        if (user?.unsafeMetadata?.role) {
            navigate(
                user?.unsafeMetadata?.role === "recuriter" ? "/post-job" : "/jobs"
            )
        }
    }, [user])


    if (!isLoaded) {
        return <BarLoader className='mb-4' width={"100%"} color='#36d7b7' />
    }

    return (
        <div className="flex flex-col items-center justify-center mt-32">
            <h2 className="flex flex-col items-center justify-center text-transparent bg-clip-text
             bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
             font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
                I am a...
            </h2>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-8 sm:px-16 lg:px-32">
                <Button
                    variant="blue"
                    className="h-36 sm:h-44 text-xl sm:text-2xl w-full"
                    onClick={() => handleRoleSelection("candidate")}
                >
                    Candidate
                </Button>
                <Button
                    variant="destructive"
                    className="h-36 sm:h-44 text-xl sm:text-2xl w-full"
                    onClick={() => handleRoleSelection("recuriter")}
                >
                    Recruiter
                </Button>
            </div>
        </div>


    )
}

export default OnBorading