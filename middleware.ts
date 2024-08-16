import { NextResponse } from 'next/server';
import { auth } from '@/auth';

export const config = {
    unstable_allowDynamic: [
        "**/node_modules/@react-email*/**/*.mjs*",
    ],
};

export function middleware(req:any) {
    // Call the auth middleware first
    const response = auth(req);

    // If auth middleware doesn't return a response, continue to the next middleware
    if (response) {
        return response;
    }

    // If no response from auth, proceed with the Next.js response
    return NextResponse.next();
}
