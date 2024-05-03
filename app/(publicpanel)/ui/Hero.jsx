import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <Card className="p-10 flex items-center h-96">
            <CardContent className="flex flex-col gap-5">
                <CardTitle className="text-4xl">Welcome to our Coaching Website</CardTitle>
                <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non finibus nisi, eget accumsan eros.
                </CardDescription>
                    <Link href="" className='mt-5'>
                        <Button>Join Now</Button>
                    </Link>
            </CardContent>
        </Card>
    );
};

export default Hero;
