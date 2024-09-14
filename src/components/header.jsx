import { React, useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignIn, UserButton, useUser } from '@clerk/clerk-react'
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react'

const Header = () => {

    const [showSignIn, setShowSignIn] = useState(false);
    const [search, setSearch] = useSearchParams();
    const { user } = useUser();

    useEffect(() => {
        if (search.get("sign-in")) {
            setShowSignIn(true);
        }
    }, [search])

    const handleOverLayClick = (e) => {
        if (e.target === e.currentTarget) {
            setShowSignIn(false);
            setSearch({});
        }
    }

    return (
        <>
            <nav className='py-4 flex justify-between items-center'>
                <Link className="flex items-center gap-2">
                    <img src="/logo.png" alt="logo" className='h-20' />
                    <span className='text-xl font-bold'>
                        <span className='text-white'>Hire</span>
                        <span className='text-yellow-500'>Hub</span>
                    </span>
                </Link>


                <div className='flex gap-8'>
                    <SignedOut>
                        <Button variant="outline" onClick={() => setShowSignIn(true)}>Login</Button>
                    </SignedOut>

                    <SignedIn>
                        {user?.unsafeMetadata?.role === "recuriter" && (
                            <Link to="/post-job">
                                <Button className="rounded-full" variant="destructive">
                                    <PenBox size={20} className='mr-2' />
                                    Post a Job
                                </Button>
                            </Link>)}

                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10",
                                },
                            }}
                        >
                            <UserButton.MenuItems>
                                <UserButton.Link
                                    label='My Jobs'
                                    labelIcon={<BriefcaseBusiness size={15} />}
                                    href='/my-jobs'
                                />
                                <UserButton.Link
                                    label='Saved Jobs'
                                    labelIcon={<Heart size={15} />}
                                    href='/saved-jobs'
                                />
                            </UserButton.MenuItems>
                        </UserButton>
                    </SignedIn>
                </div>
            </nav>
            {showSignIn &&
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10'
                    onClick={handleOverLayClick}>
                    <SignIn
                        signUpFallbackRedirectUrl='/onboarding'
                        fallbackRedirectUrl='/onboarding'
                    />
                </div>
            }
        </>
    )
}

export default Header